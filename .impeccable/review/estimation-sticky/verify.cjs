const { chromium } = require('/tmp/dsign-qa/node_modules/playwright-core');
const { default: AxeBuilder } = require('/tmp/dsign-qa/node_modules/@axe-core/playwright');
const fs = require('fs');
const assert = require('assert/strict');

(async () => {
  const browser = await chromium.launch({ executablePath: '/usr/bin/chromium', args: ['--no-sandbox'] });
  const report = [];
  try {
    for (const width of [320, 390, 768, 1440]) {
      const context = await browser.newContext({ viewport: { width, height: width === 320 ? 568 : 900 }, reducedMotion: 'reduce' });
      const page = await context.newPage();
      page.setDefaultTimeout(6000);
      const errors = [], submissions = [];
      page.on('pageerror', e => errors.push(e.message));
      page.on('request', r => { if (r.method() !== 'GET') submissions.push(r.url()); });
      await page.goto('http://127.0.0.1:4180/estimation.html');
      await page.evaluate(() => document.fonts.ready);
      assert.equal(await page.locator('#estimate-next').isDisabled(), true);
      await page.locator('label:has(input[name="domains"])').first().click();
      await page.evaluate(() => document.querySelectorAll('input[name="domains"]:not(:checked)').forEach(i => i.click()));
      assert.match(await page.locator('#estimate-next').textContent(), /61/);

      const checkSticky = async (stage, scroll = 800) => {
        await page.evaluate(y => scrollTo({ top: y, behavior: 'instant' }), scroll);
        const result = await page.evaluate(() => {
          const bar = document.querySelector('.estimate-toolbar').getBoundingClientRect();
          const nav = document.querySelector('.estimate-progress').getBoundingClientRect();
          const next = document.querySelector('#estimate-next').getBoundingClientRect();
          const cx = next.x + next.width / 2, cy = next.y + next.height / 2;
          return { top: bar.top, bottom: bar.bottom, navBottom: nav.bottom, nextTop: next.top,
            buttonBottom: next.bottom, hit: !!document.elementFromPoint(cx, cy)?.closest('#estimate-next'),
            overflow: document.documentElement.scrollWidth > innerWidth, viewport: innerHeight };
        });
        assert(Math.abs(result.top) < 1, JSON.stringify({ width, stage, result }));
        assert(result.nextTop >= result.navBottom && result.buttonBottom <= result.viewport);
        assert(result.hit && !result.overflow);
        report.push({ width, stage, ...result });
      };
      const checkQuestion = async () => {
        const q = await page.locator('#estimate-question').boundingBox();
        const bar = await page.locator('.estimate-toolbar').boundingBox();
        assert(q.y >= bar.y + bar.height && q.y < (width === 320 ? 568 : 900));
      };
      await checkSticky('domains');
      await page.locator('#estimate-next').click();
      await checkQuestion();
      assert.equal(await page.locator('label:has(input[name="services"]):visible').count(), 61);
      await checkSticky('services', 1500);
      await page.locator('#estimate-next').click();
      assert.equal(await page.locator('#estimate-error').isVisible(), true);
      const e = await page.locator('#estimate-error').boundingBox();
      const bar = await page.locator('.estimate-toolbar').boundingBox();
      assert(e.y >= bar.y + bar.height);
      await page.locator('label:has(input[name="services"]):visible').first().click();
      await page.locator('label:has(input[name="services"]):visible').last().click();
      await checkSticky('services-selected', 1500);
      if ([390, 1440].includes(width)) await page.screenshot({ path: `.impeccable/review/estimation-sticky/services-${width}.png` });
      await page.locator('#estimate-next').click();
      await checkQuestion();
      await page.locator('#estimate-next').click();
      assert.equal(await page.locator('#estimate-error').isVisible(), true);
      await page.locator('label:has(input[name="budget"])').first().click();
      await page.locator('#estimate-next').click();
      await page.locator('label:has(input[name="timeline"])').first().click();
      await page.locator('#estimate-next').click();
      await checkQuestion();
      assert.equal(await page.locator('[aria-invalid="true"]').count(), 0, 'No premature contact submission');
      assert.equal(await page.locator('#estimate-next').getAttribute('type'), 'submit');
      await checkSticky('contact');
      if ([390, 1440].includes(width)) await page.screenshot({ path: `.impeccable/review/estimation-sticky/contact-${width}.png` });
      await page.locator('#estimate-next').click();
      assert.equal(await page.locator('#estimate-firstName').getAttribute('aria-invalid'), 'true');
      const invalid = await page.locator('#estimate-firstName').boundingBox();
      const sticky = await page.locator('.estimate-toolbar').boundingBox();
      assert(invalid.y >= sticky.y + sticky.height);
      await page.locator('#estimate-firstName').fill('Camille');
      await page.locator('[data-estimate-back]').click();
      assert.equal(await page.locator('input[name="timeline"]:checked').count(), 1);
      await page.goBack();
      assert.equal(await page.locator('input[name="budget"]:checked').count(), 1);
      await page.locator('#estimate-next').click();
      await page.locator('#estimate-next').click();
      assert.equal(await page.locator('#estimate-firstName').inputValue(), 'Camille');
      await page.locator('#estimate-fill-demo').click();
      if ([390, 1440].includes(width)) {
        const audit = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
        assert.deepEqual(audit.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) })), []);
      }
      if (width === 390) await page.locator('#estimate-city').press('Enter');
      else await page.locator('#estimate-next').click();
      await page.locator('#estimate-pause').click();
      assert.equal(await page.locator('.estimate-toolbar').isVisible(), false);
      assert.equal(await page.locator('[data-estimate-panel="5"]').isVisible(), true);
      await page.locator('#estimate-restart').click();
      assert.equal(await page.locator('.estimate-toolbar').isVisible(), true);
      assert.equal(await page.locator('#estimate-next').isDisabled(), true);
      assert.equal(await page.locator('#estimate-next').getAttribute('type'), 'button');
      assert.deepEqual(errors, []); assert.deepEqual(submissions, []);
      await context.close();
    }
    fs.writeFileSync('.impeccable/review/estimation-sticky/report.json', JSON.stringify(report, null, 2));
    console.log('PASS: sticky controls, 61 services, validation visibility, history, draft retention, click/Enter submission, confirmation/restart, no submissions; four viewports and two Axe passes.');
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exit(1); });
