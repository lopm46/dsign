import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
const require = createRequire(import.meta.url);
const modules = process.env.DSIGN_QA_MODULES || '/tmp/dsign-qa/node_modules';
const {chromium} = require(path.join(modules, 'playwright-core'));
const {default: AxeBuilder} = require(path.join(modules, '@axe-core/playwright'));
const root = path.resolve(import.meta.dirname, '../..');
const base = process.env.DSIGN_QA_URL || 'http://127.0.0.1:4180/';
const catalogue = JSON.parse(fs.readFileSync(`${root}/export/assets/trades/catalogue.json`));
const report = {viewports: [], interactions: [], errors: []};
const browser = await chromium.launch({headless: true, executablePath: process.env.DSIGN_CHROMIUM || '/usr/bin/chromium', args:['--no-sandbox']});
const assert = (condition, text) => {if (!condition) throw Error(text);};
const expected = ['hero','comment-ca-marche','expertises','pourquoi','fondateur','apropos','materiaux','contact'];
const settle = async page => page.evaluate(async () => {
  await document.fonts.ready;
  for (const img of document.images) img.loading = 'eager';
  await Promise.all([...document.images].map(img => img.decode().catch(() => null)));
});
try {
  for (const width of [320,390,768,900,1024,1280,1440,1920]) {
    const context = await browser.newContext({viewport:{width,height:1000},reducedMotion:'reduce'});
    const page = await context.newPage();
    page.on('pageerror', e => report.errors.push(e.message));
    await page.goto(base);
    await settle(page);
    const result = await page.evaluate(() => ({
      width:innerWidth,
      overflow:document.documentElement.scrollWidth>innerWidth,
      sections:[...document.querySelectorAll('main > section')].map(s=>s.id||'hero'),
      header:getComputedStyle(document.querySelector('.site-header')).backgroundColor,
      categories:document.querySelectorAll('[data-trade-category]').length,
      cards:document.querySelectorAll('.trade').length,
      missing:[...document.images].filter(i=>!i.naturalWidth).map(i=>i.src),
      dead:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(a.hash.slice(1))).map(a=>a.hash),
      portrait:document.querySelector('.founder-portrait img').getAttribute('src'),
      quote:!!document.querySelector('.founder-quote use[href="#quote"]'),
      buttonRadius:getComputedStyle(document.querySelector('.button')).borderRadius,
      cardRadius:getComputedStyle(document.querySelector('.trade')).borderRadius,
      gradient:getComputedStyle(document.querySelector('#trades-title .gradient-text')).backgroundImage,
      filters:[],
    }));
    assert(JSON.stringify(result.sections)===JSON.stringify(expected), 'Section order');
    assert(!result.overflow&&!result.missing.length&&!result.dead.length,JSON.stringify(result));
    assert(result.header==='rgb(255, 255, 255)'&&result.categories===11&&result.cards===61,'Catalogue/nav');
    assert(result.portrait.endsWith('kevin-huart.webp')&&result.quote,'Real portrait and quote');
    assert(parseFloat(result.buttonRadius)>100&&parseFloat(result.cardRadius)===18&&result.gradient.includes('linear-gradient'),'Authorized visual rules');

    for (const category of catalogue) {
      const button=page.locator(`[data-trade-filter="${category.id}"]`);
      await button.focus();
      await page.keyboard.press('Enter');
      const active=page.locator('[data-trade-category]:visible');
      assert(await active.count()===1,'One visible category');
      assert(await active.getAttribute('data-trade-category')===category.id,`Category ${category.id}`);
      assert(await active.locator('.trade').count()===category.items.length,`Count ${category.id}`);
      assert(await page.locator('.trade-filters [aria-pressed="true"]').count()===1,'One active filter');
      const layout=await page.evaluate(()=>({
        overflow:document.documentElement.scrollWidth>innerWidth,
        clipped:[...document.querySelectorAll('[data-trade-category]:not([hidden]) h4, .trade-filters button')].filter(e=>e.scrollWidth>e.clientWidth+2).map(e=>e.textContent),
      }));
      assert(!layout.overflow&&!layout.clipped.length,JSON.stringify({width,category:category.id,...layout}));
      result.filters.push({id:category.id,visibleCards:category.items.length});
      if ([390,1440].includes(width)&&['adaptation','extension'].includes(category.id)) {
        await active.screenshot({path:`${root}/.impeccable/review/v7-${category.id}-${width}.png`});
      }
    }
    await page.locator('[data-trade-filter="chauffage"]').click();
    if ([390,1440].includes(width)) {
      result.axe=(await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze()).violations.map(v=>({id:v.id,impact:v.impact,targets:v.nodes.map(n=>n.target)}));
      assert(!result.axe.length,JSON.stringify(result.axe));
      await page.evaluate(()=>scrollTo(0,0));
      const kind=width===390?'mobile':'desktop';
      await page.screenshot({path:`${root}/export-${kind}.png`,fullPage:true});
      fs.copyFileSync(`${root}/export-${kind}.png`,`${root}/.impeccable/review/${kind}-v7.png`);
      for(const id of ['comment-ca-marche','expertises','pourquoi','fondateur']){
        await page.locator(`#${id}`).screenshot({path:`${root}/.impeccable/review/v7-${id}-${width}.png`});
      }
      if(width===390){
        await page.evaluate(()=>scrollTo(0,0));
        await page.locator('#mobile-menu summary').click();
        await page.screenshot({path:`${root}/.impeccable/review/v7-mobile-menu.png`});
        await page.keyboard.press('Escape');
        assert(!await page.locator('#mobile-menu').evaluate(e=>e.open),'Escape closes menu');
        assert(await page.locator('#mobile-menu summary').evaluate(e=>e===document.activeElement),'Focus return');
        await page.locator('#mobile-menu summary').click();
        await page.locator('#mobile-menu a[href="#expertises"]').click();
        assert(!await page.locator('#mobile-menu').evaluate(e=>e.open),'Link closes menu');
      }
      let sent=0;
      await page.route('**/contact-forms/6/feedback',route=>{sent++;return route.abort();});
      await page.locator('#contact-form button[type="submit"]').click();
      assert(await page.locator('#form-errors li').count()===3&&sent===0,'Local validation; no submission');
      const first=page.locator('#trade-chauffage .trade').first();
      const second=page.locator('#trade-chauffage .trade').nth(1);
      await first.click();
      assert((await page.locator('#contact-message').inputValue()).includes(await first.getAttribute('data-project')),'Project prefill');
      await second.click();
      assert((await page.locator('#contact-message').inputValue()).includes(await second.getAttribute('data-project')),'Untouched prefill follows a new selection');
      await page.locator('#contact-message').fill('Mon texte personnel à conserver.');
      await first.click();
      assert(await page.locator('#contact-message').inputValue()==='Mon texte personnel à conserver.','User text preserved');
      assert(sent===0,'Selecting cards never sends a message');
    }
    report.viewports.push(result);
    await context.close();
  }
  const noJs=await browser.newPage({javaScriptEnabled:false,viewport:{width:390,height:900}});
  await noJs.goto(base);
  assert(await noJs.locator('[data-trade-category]:visible').count()===11&&await noJs.locator('.trade:visible').count()===61,'No-JS full catalogue');
  assert(!await noJs.locator('.trade-filters:visible').count(),'No inert controls');
  await noJs.close();
  report.interactions.push('All 11 filters operated by keyboard at all 8 widths; correct counts and no clipping.','No-JS: all 61 examples accessible.','Project prefill, updated untouched selection, preservation of user text; no real send.','Mobile menu/Escape/focus/link; local form errors.');
  const colors=await browser.newPage({forcedColors:'active',viewport:{width:390,height:1000}});
  await colors.goto(base);
  const textFill=await colors.locator('#trades-title .gradient-text').evaluate(e=>getComputedStyle(e).webkitTextFillColor);
  assert(textFill!=='rgba(0, 0, 0, 0)'&&textFill!=='transparent','Forced colors title stays visible');
  await colors.close();
  report.interactions.push('Forced-colors title fallback remains visible.');
  for(const width of [390,1440]){
    const p=await browser.newPage({viewport:{width,height:1000},reducedMotion:'reduce'});
    await p.goto(`${base}nos-materiaux.html`);
    assert(!await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),'Materials overflow');
    if(width===390){await p.locator('#mobile-menu summary').click();await p.locator('#mobile-menu a[href="index.html#fondateur"]').click();}
    else await p.locator('.desktop-nav a[href="index.html#expertises"]').click();
    assert(p.url().includes('index.html#'),'Materials cross-page navigation');
    await p.close();
  }
  report.interactions.push('Shared materials navigation works on desktop/mobile.');
  assert(!report.errors.length,JSON.stringify(report.errors));
  report.result='pass';
}finally{
  await browser.close();
  fs.writeFileSync(`${root}/.impeccable/review/homepage-v7-verification.json`,JSON.stringify(report,null,2)+'\n');
}
console.log('PASS: 8 widths, 11 keyboard filters / 61 examples, images, portrait, gradients, no-JS, menu, form prefill/validation, forced colors and axe.');
