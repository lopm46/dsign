import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const modules=process.env.DSIGN_QA_MODULES||'/tmp/dsign-qa/node_modules';
const {chromium}=require(path.join(modules,'playwright-core'));
const {default:AxeBuilder}=require(path.join(modules,'@axe-core/playwright'));
const root=path.resolve(import.meta.dirname,'../..');
const base=process.env.DSIGN_QA_URL||'http://127.0.0.1:4180/';
const directory=`${root}/.impeccable/review/v8`;
fs.mkdirSync(directory,{recursive:true});
const routes=['nos-projets','nos-services','renovation','extension','construction'];
const reportPath=`${root}/.impeccable/review/inner-pages-v8-verification.json`;
const resume=process.argv.includes('--resume-interactions');
const report=resume?JSON.parse(fs.readFileSync(reportPath)): {pages:[],interactions:[],errors:[]};
if(resume){
 if(report.pages.length!==40)throw Error('A complete viewport matrix is required to resume.');
 const recorded=fs.statSync(reportPath).mtimeMs;
 for(const name of fs.readdirSync(`${root}/export`,{recursive:true}).filter(n=>/\.(html|css|js|json|svg|webp|woff2)$/.test(n)))if(fs.statSync(`${root}/export/${name}`).mtimeMs>recorded)throw Error('UI changed after matrix: '+name);
}
const assert=(condition,description)=>{if(!condition)throw Error(description);};
const browser=await chromium.launch({headless:true,executablePath:process.env.DSIGN_CHROMIUM||'/usr/bin/chromium',args:['--no-sandbox']});
const settle=async page=>page.evaluate(async()=>{await document.fonts.ready;document.querySelectorAll('img').forEach(i=>i.loading='eager');await Promise.all([...document.images].map(i=>i.decode().catch(()=>null)));});
const frame=async page=>page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
try{
 for(const width of(resume?[]:[320,390,768,900,1024,1280,1440,1920])){
  for(const route of routes){
   const context=await browser.newContext({viewport:{width,height:1000},reducedMotion:'reduce'});
   const page=await context.newPage();page.on('pageerror',e=>report.errors.push({route,width,error:e.message}));
   await page.goto(`${base}${route}.html`);await settle(page);
   const facts=await page.evaluate(()=>({width:innerWidth,overflow:document.documentElement.scrollWidth>innerWidth,h1:document.querySelectorAll('h1').length,missing:[...document.images].filter(i=>!i.naturalWidth).map(i=>i.src),dead:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(a.hash.slice(1))).map(a=>a.hash),clipped:[...document.querySelectorAll('h1,h2,h3,h4')].filter(e=>!e.classList.contains("sr-only")&&e.offsetWidth&&e.scrollWidth>e.clientWidth+2).map(e=>e.innerText)}));
   assert(!facts.overflow&&facts.h1===1&&!facts.missing.length&&!facts.dead.length&&!facts.clipped.length,JSON.stringify({route,...facts}));
   if(route==='nos-projets'){
    facts.filters=[];
    for(const [key,count] of[['agrandissement',3],['construction',3],['renovation',3],['tous',9]]){
     const button=page.locator(`[data-project-filter="${key}"]`);await button.focus();await page.keyboard.press('Enter');
     assert(await page.locator('#project-grid > a:visible').count()===count,`Portfolio ${key} ${width}`);
     assert(await page.locator('.project-filters [aria-pressed="true"]').count()===1,'One selected filter');
     assert(await page.locator('#project-count').innerText()===`${count} projets`,'Result count');
     facts.filters.push({key,count});
    }
    const first=page.locator('#project-grid > a').first();await first.focus();await page.keyboard.press('Enter');
    assert(await page.locator('#project-dialog').evaluate(e=>e.open),'Native gallery opens');
    assert(await page.locator('#project-gallery-count').innerText()==='1 / 2','Initial gallery image');
    await page.keyboard.press('ArrowRight');assert(await page.locator('#project-gallery-count').innerText()==='2 / 2','Next image by keyboard');
    await page.keyboard.press('ArrowLeft');assert(await page.locator('#project-gallery-count').innerText()==='1 / 2','Previous image by keyboard');
    if([390,1440].includes(width)){
     await page.screenshot({path:`${directory}/gallery-${width}.png`});
     const violations=(await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze()).violations;
     assert(!violations.length,JSON.stringify(violations.map(v=>({id:v.id,targets:v.nodes.map(n=>n.target)}))));
    }
    await page.keyboard.press('Escape');assert(!await page.locator('#project-dialog').evaluate(e=>e.open),'Escape closes gallery');
    assert(await first.evaluate(e=>e===document.activeElement),'Gallery returns focus');
    await first.click();await page.mouse.click(2,2);assert(!await page.locator('#project-dialog').evaluate(e=>e.open),'Backdrop closes gallery');
   }
   if(route==='nos-services'){
    const ids=['contact','plans','chiffrage','devis','realisation'];facts.progress=[];
    for(const n of[0,2,4,1,0]){
     await page.locator(`#etape-${ids[n]}`).evaluate(e=>window.scrollTo(0,e.getBoundingClientRect().top+scrollY-innerHeight*.36+20));await frame(page);
     const state=await page.evaluate(()=>({active:document.querySelector('.progress-container [aria-current="step"]')?.dataset.stepLink,progress:Number(document.querySelector('.progress-container').style.getPropertyValue('--method-progress')),top:document.querySelector('.method-sidebar').getBoundingClientRect().top}));
     assert(state.active===ids[n],`Active method ${ids[n]} at ${width}: ${JSON.stringify(state)}`);
     assert(state.progress>=n/4&&state.progress<=Math.min(1,(n+1)/4),`Progress follows phase ${n}`);
     if(n>0)assert(Math.abs(state.top-(width<=900?24:32))<2,`Sticky rail at ${width}`);
     facts.progress.push(state);
     if(n===2&&[390,1440].includes(width))await page.screenshot({path:`${directory}/method-scroll-${width}.png`});
    }
   }
   if(['renovation','extension','construction'].includes(route)){
    assert(await page.locator('.service-needs li').count()===10,'Ten source needs retained');
    assert(await page.locator('.service-faq details').count()===3,'Service FAQ');
    for(const detail of await page.locator('.service-faq summary').all()){await detail.focus();await page.keyboard.press('Enter');}
    assert(await page.locator('.service-faq details[open]').count()===3,'FAQs open by keyboard');
    assert(!await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),'Expanded FAQ no overflow');
   }
   if([390,1440].includes(width)){
    facts.axe=(await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze()).violations.map(v=>({id:v.id,impact:v.impact,targets:v.nodes.map(n=>n.target)}));
    assert(!facts.axe.length,JSON.stringify({route,width,axe:facts.axe}));
    if(['renovation','extension','construction'].includes(route))await page.locator('.service-faq').screenshot({path:`${directory}/${route}-faq-${width}.png`});
    await page.evaluate(()=>{document.querySelectorAll('.service-faq details').forEach(d=>d.open=false);scrollTo(0,0);});await frame(page);
    await page.screenshot({path:`${directory}/${route}-${width}.png`,fullPage:true});
    if(width===390){await page.locator('#mobile-menu summary').click();await page.keyboard.press('Escape');assert(!await page.locator('#mobile-menu').evaluate(e=>e.open),'Mobile menu close');assert(await page.locator('#mobile-menu summary').evaluate(e=>e===document.activeElement),'Menu focus return');}
   }
   report.pages.push({route,...facts});await context.close();
  }
 }
 // Actual cross-page links carry a selected project type to the existing form.
 for(const slug of['renovation','extension','construction']){
  const page=await browser.newPage({reducedMotion:'reduce'});let sent=0;await page.route('**/contact-forms/6/feedback',r=>{sent++;return r.abort();});
  await page.goto(`${base}${slug}.html`);await page.locator('.service-hero .button').click();
  assert(page.url().includes(`?projet=${slug}#contact`),'Context contact link');
  const expected=slug==='renovation'?'rénovation':slug;await page.waitForFunction(value=>document.getElementById('contact-message')?.value.includes(value),expected);const value=await page.locator('#contact-message').inputValue();assert(value.includes(expected),`Prefill ${slug}: ${value}`);assert(sent===0,'No automatic send');
  await page.close();
 }
 const invalid=await browser.newPage();await invalid.goto(`${base}index.html?projet=__proto__#contact`);assert(await invalid.locator('#contact-message').inputValue()==='','Invalid context ignored');await invalid.close();
 const deep=await browser.newPage({reducedMotion:'reduce'});await deep.goto(`${base}nos-projets.html?type=renovation#projet-2351`);assert(await deep.locator('#project-dialog').evaluate(e=>e.open),'Deep project opens');assert(await deep.locator('.project-filters [aria-pressed="true"]').getAttribute('data-project-filter')==='construction','Deep project corrects mismatched filter');await deep.keyboard.press('Escape');assert(await deep.locator('#projet-2351').evaluate(e=>e===document.activeElement),'Deep gallery focus return');await deep.close();
 for(const route of routes){
  const page=await browser.newPage({javaScriptEnabled:false,viewport:{width:390,height:900}});await page.goto(`${base}${route}.html`);
  if(route==='nos-projets'){assert(await page.locator('#project-grid > a:visible').count()===9,'No-JS nine projects');assert(!await page.locator('.project-filters:visible').count(),'No inert filters');}
  if(route==='nos-services')assert(await page.locator('[data-method-step]:visible').count()===5,'No-JS all method content');
  if(['renovation','extension','construction'].includes(route)){await page.locator('.service-faq summary').first().click();assert(await page.locator('.service-faq details[open]').count()===1,'No-JS native FAQ');}
  assert(!await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),'No-JS layout');await page.close();
 }
 const motion=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'no-preference'});await motion.goto(`${base}nos-services.html#methode`);await motion.locator('.progress-container a[data-step-link="chiffrage"]').click();await motion.waitForFunction(()=>document.querySelector('.progress-container [aria-current="step"]')?.dataset.stepLink==='chiffrage');assert(await motion.evaluate(()=>getComputedStyle(document.documentElement).scrollBehavior)==='smooth','Native smooth scroll');await motion.screenshot({path:`${directory}/smooth-method.png`});await motion.close();
 for(const width of[390,1440])for(const route of['index','nos-materiaux']){
  const page=await browser.newPage({viewport:{width,height:1000},reducedMotion:'reduce'});await page.goto(`${base}${route}.html`);await settle(page);assert(!await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),'Existing page layout');
  if(route==='index'){assert(await page.locator('[data-trade-category]').count()===11&&await page.locator('.trade').count()===61,'Existing catalogue retained');}
  await page.evaluate(()=>scrollTo(0,0));const kind=width===390?'mobile':'desktop';await page.screenshot({path:`${root}/${route==='index'?'export':'materials'}-${kind}.png`,fullPage:true});
  if(width===390){await page.locator('#mobile-menu summary').click();await page.locator('#mobile-menu a[href="nos-projets.html"]').click();}else await page.locator('.desktop-nav a[href="nos-projets.html"]').click();
  assert(page.url().endsWith('nos-projets.html'),'Existing page discovers portfolio');await page.close();
 }
 assert(!report.errors.length,JSON.stringify(report.errors));report.result='pass';
 report.interactions=['40 page/viewport combinations; correct media, headings and local anchors.','Portfolio filters 9/3/3/3 via keyboard; gallery arrows, Escape, backdrop, focus and deep links.','Vertical sticky method: all phases, intermediate fill, forwards/backwards and native smooth anchors.','Native FAQs, contextual contact whitelist, no real submission.','No-JS portfolio/method/FAQs; existing homepage and materials navigation retained.','WCAG 2A/AA/2.1AA/2.2AA axe at390/1440 on all five pages and open gallery/FAQs.'];
}finally{await browser.close();fs.writeFileSync(`${root}/.impeccable/review/inner-pages-v8-verification.json`,JSON.stringify(report,null,2)+'\n');}
console.log('PASS: 5 pages × 8 widths, portfolio/gallery, scroll progression, FAQs, cross-page contact, no-JS and axe.');
