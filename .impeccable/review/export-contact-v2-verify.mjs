import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('/workspace/dsign/.agents/skills/screenshot/scripts/node_modules/playwright-core');
const root = '/workspace/dsign';
const evidence = path.join(root, '.impeccable/review');
const url = 'http://127.0.0.1:4180/';
const endpoint = 'https://dsign-gbs.fr/wp-json/contact-form-7/v1/contact-forms/6/feedback';
const browser = await chromium.launch({ headless: true, executablePath: '/usr/bin/chromium', args: ['--no-sandbox'] });
const report = { date: new Date().toISOString(), viewports: [], interactions: [], accessibility: [], form: [], screenshots: [], realPosts: 0, failures: [], limitations: ['Browser tests use intercepted contact responses; no message sent and no actual email delivery tested.', 'Public original form inspected; endpoint verified with read-only OPTIONS only.', 'No WordPress theme runtime, physical device or full screen-reader session.'] };
const assert = (ok, message) => { if (!ok) report.failures.push(message); };

async function pageFor(width, options = {}) {
  const page = await browser.newPage({ viewport: { width, height: 1000 }, reducedMotion: 'reduce', ...options });
  // Every remote POST is blocked unless this test explicitly provides a response.
  await page.route('https://**/*', async route => {
    if (route.request().method() === 'POST') {
      report.failures.push('Unexpected real POST attempted: ' + route.request().url());
      return route.abort();
    }
    return route.continue();
  });
  await page.goto(url, { waitUntil: 'networkidle' });
  return page;
}

async function settle(page) {
  await page.evaluate(() => document.fonts.ready);
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < height; y += 720) {
    await page.evaluate(y => window.scrollTo(0, y), y);
    await page.waitForTimeout(45);
  }
  await page.evaluate(async () => {
    await Promise.all([...document.images].map(i => i.decode().catch(() => null)));
    window.scrollTo(0, 0);
  });
}

async function shot(page, name, selector) {
  const filename = path.join(evidence, name + '.png');
  if (selector) await page.locator(selector).screenshot({ path: filename });
  else {
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: filename, fullPage: true });
  }
  report.screenshots.push(filename);
  return filename;
}

async function axeCheck(page, width, state) {
  await page.addScriptTag({ path: '/tmp/dsign-axe.min.js' });
  const violations = await page.evaluate(async () => (await axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'] } })).violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => ({ target: n.target, summary: n.failureSummary })) })));
  report.accessibility.push({ width, state, violations });
  assert(violations.length === 0, `axe violations: ${width}, ${state}`);
}

for (const width of [320, 390, 768, 1024, 1440, 1920]) {
  const page = await pageFor(width);
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await settle(page);
  const result = await page.evaluate(() => ({
    width: innerWidth, scrollWidth: document.documentElement.scrollWidth,
    missingImages: [...document.images].filter(i => !i.complete || !i.naturalWidth).map(i => i.src),
    fontReady: document.fonts.check('700 24px "Instrument Sans"'),
    deadAnchors: [...document.querySelectorAll('a[href^="#"]')].filter(a => !document.getElementById(a.hash.slice(1))).map(a => a.hash),
    h1: document.querySelectorAll('h1').length,
    idsUnique: new Set([...document.querySelectorAll('[id]')].map(e => e.id)).size === document.querySelectorAll('[id]').length,
    logoFilter: getComputedStyle(document.querySelector('.brand img')).filter,
    formLabels: [...document.querySelectorAll('.form-field input,.form-field textarea')].every(e => e.labels.length === 1),
    formOverflow: [...document.querySelectorAll('.contact-form input:not([type=hidden]),.contact-form textarea')].some(e => e.getBoundingClientRect().right > innerWidth),
    aboutParagraphs: document.querySelectorAll('.about-copy > p').length,
    reasons: document.querySelectorAll('.reasons-list dt').length,
  }));
  assert(result.scrollWidth === width && !result.formOverflow, 'Overflow at ' + width);
  assert(!result.missingImages.length && result.fontReady, 'Missing assets at ' + width);
  assert(!result.deadAnchors.length && result.idsUnique && result.h1 === 1, 'Semantics at ' + width);
  assert(result.logoFilter === 'none' && result.formLabels && result.aboutParagraphs === 4 && result.reasons === 3, 'Required content at ' + width);
  assert(!errors.length, 'Browser errors at ' + width);
  report.viewports.push({ ...result, errors });

  if (width === 390) {
    await page.keyboard.press('Tab');
    assert(await page.locator('.skip-link').evaluate(e => e === document.activeElement && getComputedStyle(e).clipPath === 'none'), 'Skip link is visible on keyboard focus');
    await page.locator('.skip-link').evaluate(e => e.blur());
    assert(await page.locator('.skip-link').evaluate(e => getComputedStyle(e).clipPath === 'inset(100%)'), 'Skip link clipped only outside focus');
    report.interactions.push({ width, skipLinkKeyboard: true });
  }

  if ([390,1440].includes(width)) {
    const kind = width === 390 ? 'mobile' : 'desktop';
    const full = await shot(page, `contact-v2-${kind}`);
    fs.copyFileSync(full, path.join(root, `export-${kind}.png`));
    await shot(page, `contact-v2-about-${kind}`, '#apropos');
    await shot(page, `contact-v2-reasons-${kind}`, '.reasons');
    await shot(page, `contact-v2-form-${kind}`, '#contact');
    await axeCheck(page, width, 'initial');
    await page.locator('.method-details summary').click();
    assert(await page.locator('.method-details').evaluate(e => e.open), 'Method opening at ' + width);
    await page.locator('.method-details summary').click();
    await page.locator('.site-information summary').click();
    assert(await page.locator('.site-information').evaluate(e => e.open), 'Site information at ' + width);
    await page.locator('.site-information summary').click();
    report.interactions.push({ width, methodDisclosure: true, footerDisclosure: true });
    if (width === 390) {
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.locator('#mobile-menu summary').click();
      assert(await page.locator('#mobile-menu').evaluate(e => e.open), 'Menu opens');
      await page.keyboard.press('Escape');
      assert(await page.locator('#mobile-menu summary').evaluate(e => e === document.activeElement), 'Menu focus return');
      await page.locator('#mobile-menu summary').click();
      await page.locator('#mobile-menu a[href="#apropos"]').click();
      assert(!await page.locator('#mobile-menu').evaluate(e => e.open), 'About anchor closes menu');
      await page.locator('.hero-action').click();
      assert(new URL(page.url()).hash === '#contact', 'Hero links to integrated contact');
      report.interactions.push({ width, mobileMenu: true, aboutAnchor: true, heroContact: true });
    }
  }
  await page.close();
}

for (const width of [390, 1440]) {
  const page = await pageFor(width);
  const kind = width === 390 ? 'mobile' : 'desktop';
  const requests = [];
  let mode = 'pending';
  let release;
  await page.route(endpoint, async route => {
    requests.push(route.request().postData());
    if (mode === 'pending') await new Promise(resolve => { release = resolve; });
    if (mode === 'network-error') return route.abort('failed');
    let result = { status: mode, message: 'Réponse du service de contact.' };
    if (mode === 'validation_failed') result.invalid_fields = [{ field: 'your-email', message: 'Cette adresse e-mail doit être vérifiée.' }];
    await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(result) });
  });

  await page.locator('.contact-submit').click();
  assert(requests.length === 0, 'Empty form does not POST');
  assert(await page.locator('.field-error:visible').count() === 3, 'Three required errors');
  assert(await page.locator('#form-errors').evaluate(e => e === document.activeElement), 'Error summary receives focus');
  await shot(page, `contact-v2-errors-${kind}`, '#contact');
  await axeCheck(page, width, 'field-errors');
  await page.locator('#form-errors a').first().click();
  assert(await page.locator('#contact-name').evaluate(e => e === document.activeElement), 'Summary links focus field');
  await page.locator('#contact-name').fill('Recette interface');
  await page.locator('#contact-email').fill('invalid-email');
  await page.locator('#contact-phone').fill('not-a-number');
  await page.locator('.contact-submit').click();
  assert(requests.length === 0, 'Invalid email/phone does not POST');
  assert(await page.locator('.field-error:visible').count() === 2, 'Email and telephone errors');
  await page.locator('#contact-email').fill('recette@example.com');
  await page.locator('#contact-phone').fill('+33 6 00 00 00 00');
  await page.locator('#contact-message').fill('Essai intercepté dans le navigateur. Aucun envoi réel.');
  await page.locator('.contact-submit').click();
  await page.waitForFunction(() => document.querySelector('#contact-form').getAttribute('aria-busy') === 'true');
  await page.waitForFunction(() => document.querySelector('.contact-submit').disabled);
  assert(requests.length === 1, 'One pending request');
  assert(requests[0].includes('name="your-subject"') && requests[0].includes('name="_wpcf7"'), 'Real CF7 field names');
  await page.locator('#contact-form').evaluate(form => form.requestSubmit());
  assert(requests.length === 1, 'Double submit blocked');
  if (width === 1440) await shot(page, 'contact-v2-sending-desktop', '#contact');
  mode = 'mail_failed'; release();
  await page.waitForFunction(() => document.querySelector('#form-status').dataset.state === 'error');
  assert(await page.locator('#contact-message').inputValue() === 'Essai intercepté dans le navigateur. Aucun envoi réel.', 'Data retained after server failure');
  await shot(page, `contact-v2-failure-${kind}`, '#contact');

  mode = 'validation_failed';
  await page.locator('.contact-submit').click();
  await page.waitForFunction(() => document.querySelector('#contact-email').getAttribute('aria-invalid') === 'true');
  assert(await page.locator('#contact-email-error').textContent() === 'Cette adresse e-mail doit être vérifiée.', 'Server field error mapped');
  mode = 'network-error';
  await page.locator('#contact-email').fill('recette2@example.com');
  await page.locator('.contact-submit').click();
  await page.waitForFunction(() => document.querySelector('#form-status').textContent.includes('confirmer'));
  assert(await page.locator('#contact-name').inputValue() === 'Recette interface', 'Data retained after network failure');
  mode = 'spam';
  await page.locator('.contact-submit').click();
  await page.waitForFunction(() => document.querySelector('#form-status').textContent.includes('pas pu être envoyée'));
  mode = 'mail_sent';
  await page.locator('.contact-submit').click();
  await page.waitForFunction(() => document.querySelector('#form-status').dataset.state === 'success');
  assert(!await page.locator('.contact-submit').isDisabled(), 'Submit restored');
  await shot(page, `contact-v2-success-${kind}`, '#contact');
  report.form.push({ width, validation: true, linkedErrorSummary: true, loading: true, duplicatePrevention: true, serverValidation: true, failure: true, networkError: true, spam: true, successOnlyFromMailSent: true, dataRetained: true, mockedPosts: requests.length });
  await page.close();
}

const noJS = await pageFor(390, { javaScriptEnabled: false });
assert(!await noJS.locator('#contact-form').evaluate(e => e.noValidate), 'Native validation without JS');
assert(await noJS.locator('#contact-form').getAttribute('action') === 'https://dsign-gbs.fr/#wpcf7-f6-p1647-o1', 'Original native fallback action');
await noJS.locator('#mobile-menu summary').click();
assert(await noJS.locator('#mobile-menu').evaluate(e => e.open), 'Native menu without JS');
report.noJavaScript = { nativeValidation: true, originalActionPresent: true, menuWorks: true, realPostTested: false };
await noJS.close();

const zoom = await pageFor(1440);
await zoom.addStyleTag({ content: 'body {font-size:32px;} .form-field label {font-size:30px;} .form-field input,.form-field textarea {font-size:32px;}' });
assert(await zoom.evaluate(() => document.documentElement.scrollWidth === innerWidth), 'Text enlarged does not overflow');
report.enlargedText = { checked: true, horizontalOverflow: false };
await zoom.close();

await browser.close();
fs.writeFileSync(path.join(evidence, 'export-contact-v2-verification.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify({ viewports: report.viewports.map(r => r.width), form: report.form, accessibility: report.accessibility, failures: report.failures, screenshots: report.screenshots.length, realPosts: report.realPosts }, null, 2));
if (report.failures.length) process.exit(1);
