const {chromium}=require('/tmp/dsign-qa/node_modules/playwright-core');
const {default:AxeBuilder}=require('/tmp/dsign-qa/node_modules/@axe-core/playwright');
const fs=require('fs');
const dir='.impeccable/review/homepage-refinements'; fs.mkdirSync(dir,{recursive:true});
const assert=(ok,message)=>{if(!ok)throw Error(message)};
(async()=>{
const browser=await chromium.launch({headless:true,executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
const report={viewports:[],errors:[]};
for(const width of [320,390,760,768,1024,1440]){
 const context=await browser.newContext({viewport:{width,height:1000},reducedMotion:'reduce',hasTouch:width<761,isMobile:width<761});
 const page=await context.newPage(); page.on('pageerror',e=>report.errors.push(e.message));
 await page.goto('http://127.0.0.1:4180/');
 await page.evaluate(async()=>{await document.fonts.ready; for(const i of document.images)i.loading='eager'; await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})))});
 const result=await page.evaluate(()=>({width:innerWidth,overflow:document.documentElement.scrollWidth>innerWidth,circle:getComputedStyle(document.querySelector('.process-steps li'),'::before').width,filters:getComputedStyle(document.querySelector('.trade-filters')).justifyContent,gradient:getComputedStyle(document.querySelector('#about-title span')).backgroundImage,line:getComputedStyle(document.querySelector('.founder-signature'),'::before').backgroundImage,removed:document.querySelectorAll('.process-action,.trade-category-heading,.trade-illustration-note,.approach-stages,.founder-message > a').length,images:[...document.images].filter(i=>!i.naturalWidth).length}));
 assert(!result.overflow&&!result.images&&!result.removed,JSON.stringify(result));
 assert(result.circle===(width<761?'72px':'100px'),'Circle dimensions'); assert(result.filters==='center','Filters centered'); assert(result.gradient.includes('linear-gradient')&&result.line.includes('linear-gradient'),'Gradients');
 for(const button of await page.locator('[data-trade-filter]').all()){
  await button.click(); assert(await page.locator('.trade-panel:visible').count()===1,'Filter changes category');
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Category overflow');
 }
 await page.locator('[data-trade-filter="chauffage"]').click();
 const card=page.locator('.trade:visible').first(), action=card.locator('.trade-link');
 await page.mouse.move(0,0); assert(await action.evaluate(e=>getComputedStyle(e).opacity)==='0','Action hidden at rest');
 if(width===1440){await card.hover();assert(await action.evaluate(e=>getComputedStyle(e).opacity)==='1','Hover reveals action');await card.screenshot({path:`${dir}/card-hover.png`});await page.mouse.move(0,0);}
 await page.locator('[data-trade-filter]').last().focus(); await page.keyboard.press('Tab'); assert(await action.evaluate(e=>getComputedStyle(e).opacity)==='1','Keyboard focus reveals action');
 await page.locator('[data-trade-filter="chauffage"]').focus();
 if([390,1440].includes(width)){
  for(const [id,name] of [['comment-ca-marche','process'],['expertises','trades'],['fondateur','founder'],['apropos','about']]){
   const el=page.locator('#'+id);await el.evaluate(e=>scrollTo(0,e.offsetTop));
   await page.screenshot({path:`${dir}/${name}-${width}.png`});
  }
  result.axe=(await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze()).violations.map(v=>({id:v.id,impact:v.impact})); assert(!result.axe.length,JSON.stringify(result.axe));
 }
 if(width===390){await card.tap(); assert(page.url().endsWith('#contact'),'Single tap goes to contact'); assert((await page.locator('#contact-message').inputValue()).includes('Pompe à chaleur air/eau'),'Contact prefilled');}
 report.viewports.push(result); await context.close();
}
const context=await browser.newContext({javaScriptEnabled:false});const p=await context.newPage();await p.goto('http://127.0.0.1:4180/');assert(await p.locator('.trade:visible').count()===61,'No JS cards');await context.close();
assert(!report.errors.length,JSON.stringify(report.errors)); await browser.close();fs.writeFileSync(`${dir}/report.json`,JSON.stringify(report,null,2));console.log(JSON.stringify(report));
})().catch(e=>{console.error(e);process.exit(1)});
