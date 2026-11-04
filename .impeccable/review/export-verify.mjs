import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('/workspace/dsign/.agents/skills/screenshot/scripts/node_modules/playwright-core');
const root = '/workspace/dsign';
const url = 'http://127.0.0.1:4180/';
const browser = await chromium.launch({ headless: true, executablePath: '/usr/bin/chromium', args: ['--no-sandbox'] });
const report = { viewports: [], interactions: [], accessibility: [], limitations: ['Chromium headless; no physical device or full screen-reader session.', 'No form backend or WordPress runtime is included in this static export.'] };
const failures = [];

function assert(ok, message) {
  if (!ok) failures.push(message);
}

async function settle(page) {
  await page.evaluate(() => document.fonts.ready);
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < height; y += 620) {
    await page.evaluate(y => window.scrollTo(0, y), y);
    await page.waitForTimeout(65);
  }
  await page.evaluate(async () => {
    await Promise.all([...document.images].map(img => img.decode().catch(() => null)));
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(150);
}

for (const width of [320, 390, 768, 1024, 1440, 1920]) {
  const page = await browser.newPage({ viewport: { width, height: 1000 }, reducedMotion: 'reduce' });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('response', r => { if (r.status() >= 400) errors.push(r.status() + ' ' + r.url()); });
  await page.goto(url, { waitUntil: 'networkidle' });
  await settle(page);
  const layout = await page.evaluate(() => ({
    width: innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    missingImages: [...document.images].filter(i => !i.complete || !i.naturalWidth).map(i => i.getAttribute('src')),
    fontReady: document.fonts.check('700 24px "Instrument Sans"'),
    h1: document.querySelectorAll('h1').length,
    deadAnchors: [...document.querySelectorAll('a[href^="#"]')].filter(a => !document.getElementById(a.getAttribute('href').slice(1))).map(a => a.getAttribute('href')),
    logoFilter: getComputedStyle(document.querySelector('.brand img')).filter
  }));
  assert(layout.scrollWidth === width, 'Horizontal overflow at ' + width);
  assert(!layout.missingImages.length, 'Missing images at ' + width);
  assert(layout.fontReady && layout.h1 === 1 && !layout.deadAnchors.length, 'Document semantics/assets at ' + width);
  assert(layout.logoFilter === 'none', 'Logo filter at ' + width);
  assert(!errors.length, 'Browser/network errors at ' + width + ': ' + errors.join(', '));
  report.viewports.push({ ...layout, errors });

  if (width === 1440 || width === 390) {
    const kind = width === 1440 ? 'desktop' : 'mobile';
    await page.screenshot({ path: path.join(root, `export-${kind}.png`), fullPage: true });
    await page.screenshot({ path: path.join(root, `.impeccable/review/export-${kind}.png`), fullPage: true });
    await page.locator('.method-details summary').click();
    assert(await page.locator('.method-details').evaluate(e => e.open), 'Method disclosure at ' + width);
    await page.locator('.method-details').screenshot({ path: path.join(root, `.impeccable/review/export-method-${kind}.png`) });
    await page.locator('.method-details summary').click();
    await page.locator('.site-information summary').click();
    assert(await page.locator('.site-information').evaluate(e => e.open), 'Site information at ' + width);
    report.interactions.push({ width, methodDisclosure: true, siteInformation: true });
    await page.locator('.site-information summary').click();

    if (fs.existsSync('/tmp/dsign-axe.min.js')) {
      await page.addScriptTag({ path: '/tmp/dsign-axe.min.js' });
      const result = await page.evaluate(() => axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'] } }));
      report.accessibility.push({ width, violations: result.violations.map(v => ({ id: v.id, impact: v.impact, description: v.description, nodes: v.nodes.map(n => ({ target: n.target, summary: n.failureSummary })) })) });
      assert(!result.violations.length, 'axe violations at ' + width + ': ' + result.violations.map(v => v.id).join(', '));
    }
  }

  if (width === 390) {
    await page.evaluate(() => window.scrollTo(0, 0));
    const menu = page.locator('#mobile-menu');
    await menu.locator('summary').click();
    assert(await menu.evaluate(e => e.open), 'Mobile menu opening');
    await page.screenshot({ path: path.join(root, '.impeccable/review/export-menu-mobile.png') });
    await page.keyboard.press('Escape');
    assert(!await menu.evaluate(e => e.open), 'Mobile menu Escape close');
    assert(await menu.locator('summary').evaluate(e => e === document.activeElement), 'Mobile menu focus return');
    await menu.locator('summary').click();
    await menu.locator('a[href="#expertises"]').click();
    assert(!await menu.evaluate(e => e.open), 'Mobile menu anchor close');
    await page.locator('.hero-action').click();
    assert(new URL(page.url()).hash === '#contact', 'Hero action contact destination');
    report.interactions.push({ width, menuOpening: true, escapeClose: true, focusReturn: true, anchorClose: true, heroContact: true });
  }
  await page.close();
}

const offline = await browser.newPage({ viewport: { width: 1440, height: 900 } });
try {
  await offline.goto('file://' + path.join(root, 'export/index.html'));
  await settle(offline);
  const offlineResult = await offline.evaluate(() => ({ images: [...document.images].every(i => i.complete && i.naturalWidth), font: document.fonts.check('700 24px "Instrument Sans"') }));
  assert(offlineResult.images && offlineResult.font, 'Local file export assets');
  report.localFile = offlineResult;
} catch (error) {
  if (!error.message.includes('ERR_BLOCKED_BY_ADMINISTRATOR')) throw error;
  report.localFile = { tested: false, reason: 'The managed Chromium blocks the file:// protocol. HTTP local preview and asset paths were tested; direct local-file navigation was not.' };
}
await offline.close();

const noJS = await browser.newPage({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
await noJS.goto(url);
await noJS.locator('#mobile-menu summary').click();
assert(await noJS.locator('#mobile-menu').evaluate(e => e.open), 'Native menu without JS');
await noJS.locator('.method-details summary').click();
assert(await noJS.locator('.method-details').evaluate(e => e.open), 'Native method without JS');
report.noJavaScript = { menu: true, method: true, contentPresent: await noJS.locator('h1').isVisible() };
await noJS.close();

report.failures = failures;
fs.writeFileSync(path.join(root, '.impeccable/review/export-verification.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
await browser.close();
if (failures.length) process.exit(1);
