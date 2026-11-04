import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);
const modules = process.env.DSIGN_QA_MODULES || '/tmp/dsign-qa/node_modules';
const {chromium} = require(path.join(modules, 'playwright-core'));
const {default: AxeBuilder} = require(path.join(modules, '@axe-core/playwright'));
const root = path.resolve(import.meta.dirname, '../..');
const base = process.env.DSIGN_QA_URL || 'http://127.0.0.1:4180/';
const expected = ['hero', 'comment-ca-marche', 'expertises', 'pourquoi', 'fondateur', 'apropos', 'materiaux', 'contact'];
const report = {viewports: [], interactions: [], errors: []};
const browser = await chromium.launch({headless: true, executablePath: process.env.DSIGN_CHROMIUM || '/usr/bin/chromium', args: ['--no-sandbox']});
const assert = (condition, detail) => {if (!condition) throw Error(detail);};
const settleImages = async (page) => {
  await page.evaluate(async () => {
    await document.fonts.ready;
    for (const img of document.images) img.loading = 'eager';
    await Promise.all([...document.images].map(img => img.decode().catch(() => null)));
    scrollTo(0, 0);
  });
};

try {
  for (const width of [320, 390, 768, 900, 1024, 1280, 1440, 1920]) {
    const context = await browser.newContext({viewport: {width, height: 1000}, reducedMotion: 'reduce'});
    const page = await context.newPage();
    page.on('pageerror', error => report.errors.push(error.message));
    await page.goto(base);
    await settleImages(page);
    const facts = await page.evaluate(() => ({
      width: innerWidth,
      overflow: document.documentElement.scrollWidth > innerWidth,
      sections: [...document.querySelectorAll('main > section')].map(s => s.id || 'hero'),
      headerColor: getComputedStyle(document.querySelector('.site-header')).backgroundColor,
      headerText: getComputedStyle(document.querySelector('.site-header')).color,
      deadAnchors: [...document.querySelectorAll('a[href^="#"]')].filter(a => !document.getElementById(a.hash.slice(1))).map(a => a.hash),
      missingImages: [...document.images].filter(i => !i.naturalWidth).map(i => i.getAttribute('src')),
      retiredCopy: /Un seul fil\.|Notre façon de travailler|Pourquoi nous confier/.test(document.body.innerText),
      founder: document.querySelector('.founder-signature').innerText,
    }));
    assert(JSON.stringify(facts.sections) === JSON.stringify(expected), `Section order at ${width}`);
    assert(!facts.overflow && !facts.deadAnchors.length && !facts.missingImages.length && !facts.retiredCopy, JSON.stringify(facts));
    assert(facts.headerColor === 'rgb(255, 255, 255)' && facts.headerText === 'rgb(28, 28, 88)', `White navigation at ${width}`);
    assert(facts.founder.includes('Kevin HUART'), 'Founder name');

    // Each category remains operable on every shipped layout.
    for (const filter of ['renovation', 'extension', 'construction', 'all']) {
      await page.locator(`[data-trade-filter="${filter}"]`).click();
      const visible = await page.locator('[data-trade]:visible').evaluateAll(els => els.map(e => e.dataset.trade));
      assert(filter === 'all' ? visible.length === 3 : visible.length === 1 && visible[0] === filter, `Filter ${filter} at ${width}`);
      assert(await page.locator('.trade-filters [aria-pressed="true"]').count() === 1, 'Single selected filter');
      assert(!await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), `Filtered overflow at ${width}`);
    }

    if ([390, 1440].includes(width)) {
      facts.axe = (await new AxeBuilder({page}).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze()).violations.map(v => ({id:v.id, impact:v.impact, nodes:v.nodes.map(n=>n.target)}));
      assert(facts.axe.length === 0, JSON.stringify(facts.axe));
      await page.evaluate(() => scrollTo(0, 0));
      const kind = width === 390 ? 'mobile' : 'desktop';
      await page.screenshot({path: `${root}/export-${kind}.png`, fullPage: true});
      fs.copyFileSync(`${root}/export-${kind}.png`, `${root}/.impeccable/review/${kind}.png`);
      if (width === 1440) {
        for (const id of ['comment-ca-marche', 'expertises', 'pourquoi', 'fondateur']) {
          await page.locator(`#${id}`).screenshot({path: `${root}/.impeccable/review/v6-${id}.png`});
        }
        await page.locator('[data-trade-filter="extension"]').click();
        await page.locator('#expertises').screenshot({path: `${root}/.impeccable/review/v6-filtered.png`});
        await page.locator('[data-trade-filter="all"]').click();
      } else {
        for (const id of ['comment-ca-marche', 'expertises', 'pourquoi', 'fondateur']) {
          await page.locator(`#${id}`).screenshot({path: `${root}/.impeccable/review/v6-mobile-${id}.png`});
        }
      }
      if (width === 390) {
        await page.evaluate(() => scrollTo(0, 0));
        await page.locator('#mobile-menu summary').click();
        await page.screenshot({path: `${root}/.impeccable/review/v6-mobile-menu.png`});
        await page.keyboard.press('Escape');
        assert(!await page.locator('#mobile-menu').evaluate(e => e.open), 'Escape closes menu');
        assert(await page.locator('#mobile-menu summary').evaluate(e => e === document.activeElement), 'Escape returns focus');
        await page.locator('#mobile-menu summary').click();
        await page.locator('#mobile-menu a[href="#comment-ca-marche"]').click();
        assert(!await page.locator('#mobile-menu').evaluate(e => e.open), 'Navigation closes menu');
        await page.evaluate(() => scrollTo(0, 0));
        await page.locator('#mobile-menu summary').click();
        await page.locator('.hero-visual').click();
        assert(!await page.locator('#mobile-menu').evaluate(e => e.open), 'Outside click closes menu');
        report.interactions.push('Mobile menu: link, Escape with focus return, outside click');
      }
      // Client-side invalid input must never reach the contact service.
      let submissions = 0;
      await page.route('**/contact-forms/6/feedback', route => {submissions++; return route.abort();});
      await page.locator('#contact-form button[type="submit"]').click();
      assert(await page.locator('#form-errors li').count() === 3, 'Required fields retain validation');
      assert(submissions === 0, 'No real contact submission');
    }
    report.viewports.push(facts);
    await context.close();
  }
  const noJs = await browser.newPage({javaScriptEnabled: false, viewport: {width:390, height:900}});
  await noJs.goto(base);
  assert(await noJs.locator('[data-trade]:visible').count() === 3, 'All trades available without JavaScript');
  assert(await noJs.locator('.trade-filters:visible').count() === 0, 'No inert filters without JavaScript');
  await noJs.close();
  report.interactions.push('All three trades available without JavaScript; no inert controls');

  for (const width of [390, 1440]) {
    const materials = await browser.newPage({viewport: {width, height:1000}, reducedMotion:'reduce'});
    await materials.goto(`${base}nos-materiaux.html`);
    await settleImages(materials);
    const whiteHeader = await materials.locator('.site-header').evaluate(e => getComputedStyle(e).backgroundColor);
    assert(whiteHeader === 'rgb(255, 255, 255)', 'Materials white header');
    assert(!await materials.evaluate(() => document.documentElement.scrollWidth > innerWidth), 'Materials overflow');
    if (width === 1440) {
      await materials.locator('.desktop-nav a[href="index.html#comment-ca-marche"]').click();
      assert(materials.url().endsWith('index.html#comment-ca-marche'), 'Cross-page process link');
    } else {
      await materials.locator('#mobile-menu summary').click();
      await materials.locator('#mobile-menu a[href="index.html#fondateur"]').click();
      assert(materials.url().endsWith('index.html#fondateur'), 'Cross-page founder link');
    }
    await materials.close();
  }
  report.interactions.push('Materials shared header and navigation on desktop/mobile');
  assert(!report.errors.length, JSON.stringify(report.errors));
  report.result = 'pass';
} finally {
  await browser.close();
  fs.writeFileSync(`${root}/.impeccable/review/homepage-v6-verification.json`, JSON.stringify(report, null, 2) + '\n');
}
console.log('PASS: 8 widths, white header, section order, media/anchors, filters, no-JS fallback, mobile navigation, validation and axe.');
