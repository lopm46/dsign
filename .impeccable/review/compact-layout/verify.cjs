const {chromium}=require('/tmp/dsign-qa/node_modules/playwright-core');
const {default:AxeBuilder}=require('/tmp/dsign-qa/node_modules/@axe-core/playwright');
const fs=require('fs');
const assert=(ok,msg)=>{if(!ok)throw Error(msg)};
(async()=>{
 const b=await chromium.launch({headless:true,executablePath:'/usr/bin/chromium',args:['--no-sandbox']});const report={layouts:[],features:[],errors:[]};
 const routes=['index','nos-projets','nos-services','renovation','extension','construction','nos-materiaux'];
 for(const width of [320,390,760,768,900,1024,1440,1920]){
  const c=await b.newContext({viewport:{width,height:1000},reducedMotion:'reduce',hasTouch:width<=760,isMobile:width<=760});const p=await c.newPage();p.on('pageerror',e=>report.errors.push(e.message));
  for(const route of routes){
   await p.goto(`http://127.0.0.1:4180/${route}.html`);
   await p.evaluate(async()=>{await document.fonts.ready;for(const i of document.images)i.loading='eager';await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})))});
   const r=await p.evaluate(()=>({width:innerWidth,overflow:document.documentElement.scrollWidth>innerWidth,brand:document.querySelector('.site-header .brand').textContent.trim(),brandImage:!!document.querySelector('.site-header .brand img'),gradient:getComputedStyle(document.querySelector('.brand-wordmark')).backgroundImage,h1:getComputedStyle(document.querySelector('h1')).fontSize,missing:[...document.images].filter(i=>!i.naturalWidth).map(i=>i.src),clipped:[...document.querySelectorAll('h1,h2,h3,h4')].filter(e=>e.offsetWidth&&!e.classList.contains('sr-only')&&e.scrollWidth>e.clientWidth+2).map(e=>e.textContent),D:document.querySelector('.hero-visual')?.getBoundingClientRect().width,columns:document.querySelector('#project-grid')?getComputedStyle(document.querySelector('#project-grid')).columnCount:null,methodImage:document.querySelector('.method-step img')?.getBoundingClientRect().height,number:document.querySelector('.progress-number')?.getBoundingClientRect().width}));r.route=route;
   assert(!r.overflow&&!r.missing.length&&!r.clipped.length,JSON.stringify(r));assert(r.brand==='D-SIGN'&&!r.brandImage&&r.gradient.includes('linear-gradient'),'Wordmark '+route);
   if(route==='index'&&width===1440){assert(r.D<620&&parseFloat(r.h1)<70,'Hero smaller');}
   if(route==='nos-services'){assert(r.methodImage<=280.1,'Method image compact');if(width>1120)assert(r.number===72,'Larger desktop rail');}
   if(route==='nos-projets'){
    assert(+r.columns===(width<=760?1:width<=1120?2:3),'Masonry columns '+width);
    for(const key of ['construction','renovation','agrandissement','tous']){
     await p.locator(`[data-project-filter="${key}"]`).click();const cards=p.locator('#project-grid > a:visible');assert(await cards.count()===(key==='tous'?9:3),'Filter count '+key);
     const boxes=await cards.evaluateAll(es=>es.map(e=>{const b=e.getBoundingClientRect();return{x:b.x,y:b.y,w:b.width,h:b.height}}));
     for(let i=0;i<boxes.length;i++)for(let j=i+1;j<boxes.length;j++){const a=boxes[i],z=boxes[j];assert(!(a.x<z.x+z.w-1&&a.x+a.w>z.x+1&&a.y<z.y+z.h-1&&a.y+a.h>z.y+1),'Masonry overlap');}
    }
    if(width===1440){const sizes=await p.locator('#project-grid .project-tile-image').evaluateAll(es=>es.map(e=>Math.round(e.getBoundingClientRect().height)));assert(new Set(sizes).size>=3,'Varied masonry heights');}
    const card=p.locator('#project-grid > a:visible').first();await card.click();assert(await p.locator('#project-dialog').evaluate(e=>e.open),'Gallery opens');await p.keyboard.press('ArrowRight');assert((await p.locator('#project-gallery-count').textContent()).includes('2 / 2'),'Gallery next');await p.keyboard.press('Escape');assert(await card.evaluate(e=>document.activeElement===e),'Gallery focus returns');
   }
   if(route==='nos-services'){
    for(const key of ['contact','plans','chiffrage','devis','realisation']){
     const link=p.locator(`[data-step-link="${key}"]`);await link.click();await p.waitForTimeout(60);assert(await link.getAttribute('aria-current')==='step','Rail tracks '+key+' '+width);
    }
    const sidebar=await p.locator('.method-sidebar').boundingBox();assert(sidebar.y>=-1&&sidebar.y+sidebar.height<=1001,'Sidebar stays visible '+width);
   }
   if(width===390){await p.locator('#mobile-menu > summary').click();await p.keyboard.press('Escape');assert(!await p.locator('#mobile-menu').evaluate(e=>e.open),'Mobile menu Escape');}
   if([390,1440].includes(width)&&['index','nos-projets','nos-services','nos-materiaux'].includes(route)){
    r.axe=(await new AxeBuilder({page:p}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze()).violations.map(v=>({id:v.id,impact:v.impact,targets:v.nodes.map(n=>n.target)}));assert(!r.axe.length,JSON.stringify(r.axe));
   }
   report.layouts.push(r);
  }await c.close();
 }
 const c=await b.newContext({javaScriptEnabled:false,viewport:{width:1440,height:900}}),p=await c.newPage();await p.goto('http://127.0.0.1:4180/nos-projets.html');assert(await p.locator('#project-grid > a:visible').count()===9,'No JS projects');await p.goto('http://127.0.0.1:4180/nos-services.html');assert(await p.locator('[data-method-step]:visible').count()===5,'No JS steps');await c.close();
 const normal=await b.newContext({viewport:{width:1440,height:650}}),q=await normal.newPage();await q.goto('http://127.0.0.1:4180/nos-services.html');await q.locator('[data-step-link="chiffrage"]').click();await q.waitForTimeout(1300);assert(await q.locator('[data-step-link="chiffrage"]').getAttribute('aria-current')==='step','Smooth scroll selects current');const small=await q.locator('.method-sidebar').boundingBox();assert(small.y>=0&&small.y+small.height<=651,'Short viewport rail fits');assert(await q.locator('.progress-active').evaluate(e=>getComputedStyle(e).transitionDuration)==='0.5s, 0.5s','Smooth active marker');await normal.close();
 assert(!report.errors.length,JSON.stringify(report.errors));report.features=['Project filters, masonry, dialog next/Escape/focus','Five rail links track current step at all widths','Mobile menu Escape','No-JS projects and method','Normal smooth scroll and rail fit at 650px viewport height'];fs.writeFileSync('.impeccable/review/compact-layout/report.json',JSON.stringify(report,null,2));console.log('PASS '+report.layouts.length+' page/viewport layouts; '+report.features.join('; '));await b.close();
})().catch(e=>{console.error(e);process.exit(1)});
