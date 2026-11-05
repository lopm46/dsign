"""Generate the five native HTML pages from the curated D-SIGN content.

The delivered site is static and needs no generation step to run.
"""
from pathlib import Path
import json, html, re

root = Path(__file__).resolve().parents[1]
out = root / 'export'
services = json.loads((out/'assets/services/services.json').read_text())
steps = json.loads((out/'assets/services/method.json').read_text())
projects = json.loads((out/'assets/projects/projects.json').read_text())
home = (out/'index.html').read_text()
esc = html.escape

icons = re.search(r'<svg class="icon-definitions".*?</svg>', home, re.S)[0]
if 'id="zoom"' not in icons:
    icons = icons.replace('</svg>', '''<symbol id="zoom" viewBox="0 0 24 24"><path d="M14 3h7v7M10 21H3v-7M21 3l-8 8M3 21l8-8"/></symbol>
    <symbol id="close" viewBox="0 0 24 24"><path d="m5 5 14 14M19 5 5 19"/></symbol>
    <symbol id="previous" viewBox="0 0 24 24"><path d="m15 5-7 7 7 7"/></symbol>
    <symbol id="next" viewBox="0 0 24 24"><path d="m9 5 7 7-7 7"/></symbol>
    <symbol id="check" viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"/></symbol></svg>''')

def icon(name='arrow-up-right'):
    return f'<svg class="icon" aria-hidden="true"><use href="#{name}"/></svg>'

def button(text, href, secondary=False):
    return f'<a class="button {"button-outline" if secondary else "button-primary"}" href="{esc(href)}">{esc(text)}{icon()}</a>'

def header(page):
    home_link = '#haut' if page == 'index.html' else 'index.html'
    links = [('Nos services','nos-services.html'),('Nos projets','nos-projets.html'),('Nos métiers','index.html#expertises'),('Matériaux','nos-materiaux.html')]
    def link(text, href):
        current = ' aria-current="page"' if page == href else ''
        active = ' class="is-active"' if page in [s['id']+'.html' for s in services] and href == 'nos-services.html' else ''
        if page == 'index.html' and href.startswith('index.html#'): href = href.removeprefix('index.html')
        return f'<a href="{href}"{current}{active}>{text}</a>'
    contact = '#contact' if page == 'index.html' else 'index.html#contact'
    desktop = ''.join(link(*pair) for pair in links)
    mobile = link('Accueil','index.html')+desktop+link('Comment ça marche','index.html#comment-ca-marche')+link('À propos','index.html#apropos')
    return f'''<header class="site-header" id="haut"><div class="container header-inner">
      <a class="brand" href="{home_link}" aria-label="D-SIGN GBS — Accueil"><span class="brand-wordmark gradient-text">D-SIGN</span></a>
      <nav class="desktop-nav" aria-label="Navigation principale">{desktop}</nav>
      <a class="button button-outline header-contact" href="{contact}">Parlons de votre projet{icon()}</a>
      <details class="mobile-menu" id="mobile-menu"><summary>Menu<span class="menu-symbol" aria-hidden="true"></span></summary><nav aria-label="Navigation mobile">{mobile}<a class="mobile-menu-contact" href="{contact}">Parlons de votre projet{icon()}</a></nav></details>
    </div></header>'''

def footer(page):
    prefix = '' if page == 'index.html' else 'index.html'
    return f'''<footer class="site-footer"><div class="container">
      <div class="footer-main"><a class="brand footer-brand" href="#haut" aria-label="D-SIGN GBS — Retour en haut"><img src="assets/logo.svg" width="2519" height="1005" alt="D-SIGN Global Building Solutions" loading="lazy"></a>
        <div class="footer-navigation"><p>D-SIGN GBS · Boves</p><nav aria-label="Navigation de pied de page"><a href="nos-services.html">Nos services</a><a href="nos-projets.html">Nos projets</a><a href="{prefix}#expertises">Nos métiers</a><a href="{prefix}#apropos">À propos</a><a href="nos-materiaux.html">Matériaux</a><a href="{prefix}#contact">Contact</a></nav></div>
      </div>
      <div class="footer-bottom"><p>© 2026 D-SIGN</p><div><p>Visuels d’ambiance et vues de conception.</p><details class="site-information" id="informations"><summary>Informations du site</summary><div><p>D-SIGN GBS · 5 rue des Indes Noires, 80440 Boves.<br><a href="mailto:contact@dsign-gbs.fr">contact@dsign-gbs.fr</a> · <a href="tel:+33607954046">06 07 95 40 46</a></p><p>Les vues de projets sont issues du portfolio D-SIGN. Les visuels d’ambiance et d’illustration ne constituent pas des photographies de réalisations livrées. Le portrait de Kevin HUART utilisé sur l’accueil est une photographie réelle.</p></div></details></div></div>
    </div></footer>'''

def breadcrumb(items):
    links = ['<a href="index.html">Accueil</a>']
    for label, href in items:
        links.append(f'<a href="{href}">{esc(label)}</a>' if href else f'<span aria-current="page">{esc(label)}</span>')
    return '<nav class="page-breadcrumb" aria-label="Fil d’Ariane">'+'<span aria-hidden="true">/</span>'.join(links)+'</nav>'

def cta(title='Votre projet commence ici.', project=None):
    href = 'index.html'+(f'?projet={project}' if project else '')+'#contact'
    return f'''<section class="page-cta section-space" aria-labelledby="page-cta-title"><div class="container page-cta-inner"><h2 id="page-cta-title">{esc(title)}</h2><div><p>Le lieu, vos idées, vos priorités.<br>Parlons de ce que vous souhaitez créer.</p>{button('Parlons de votre projet', href)}<a class="page-cta-phone" href="tel:+33607954046">06 07 95 40 46</a></div></div></section>'''

def layout(page, title, description, main, extra=''):
    return f'''<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="{esc(description)}"><meta name="theme-color" content="#1c1c58"><title>{esc(title)} — D-SIGN GBS</title><link rel="icon" href="data:,"><link rel="preload" href="assets/fonts/instrument-sans-regular.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="assets/fonts/instrument-sans-bold.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="styles.css"><link rel="stylesheet" href="pages.css"><script src="script.js" defer></script><script src="pages.js" defer></script></head>
<body class="inner-page"><a class="skip-link" href="#contenu">Aller au contenu</a>{icons}{header(page)}<main id="contenu">{main}</main>{footer(page)}{extra}</body></html>'''

def project_card(project, gallery=False):
    href = project['images'][0] if gallery else f'nos-projets.html?type={project["category"]}#projet-{project["id"]}'
    data = f' data-open-project="{project["id"]}"' if gallery else ''
    return f'''<a class="project-tile" id="projet-{project['id']}" data-project-category="{project['category']}" href="{href}"{data}>
      <div class="project-tile-image"><img src="{project['cover']}" width="883" height="558" alt="{esc(project['title'])} — vue de conception" loading="lazy" decoding="async"><span class="project-zoom" aria-hidden="true">{icon('zoom')}</span></div>
      <div class="project-tile-caption"><h3>{esc(project['title'])}</h3><p>Vues de conception</p></div>
    </a>'''

def services_page():
    names = {'renovation':'la rénovation', 'extension':'l’extension', 'construction':'la construction'}
    cards = ''.join(f'''<a class="service-entry" href="{s['id']}.html"><img src="{s['image']}" width="1600" height="1067" alt="" loading="lazy"><div><h3>{s['name']}</h3><p>{esc(s['title'])}</p><span>Découvrir {names[s['id']]}{icon()}</span></div></a>''' for s in services)
    rail = ''.join(f'<li><a href="#etape-{s["id"]}" data-step-link="{s["id"]}"><span class="progress-number">{n+1:02}</span><span class="progress-label">{esc(s["title"])}</span></a></li>' for n,s in enumerate(steps))
    chapters = ''.join(f'''<article class="method-step" id="etape-{s['id']}" data-method-step="{s['id']}" aria-labelledby="step-title-{s['id']}"><figure><img src="{s['image']}" width="1052" height="805" alt="{s['alt']}" loading="lazy" decoding="async"></figure><div class="method-step-copy"><h3 id="step-title-{s['id']}">{n+1:02}. {s['title']}</h3><p class="method-step-lead">{s['lead']}</p><p>{s['text']}</p><ul>{''.join('<li>'+icon('check')+'<span>'+esc(t)+'</span></li>' for t in s['points'])}</ul></div></article>''' for n,s in enumerate(steps))
    main=f'''<section class="page-intro section-space"><div class="container">{breadcrumb([('Nos services',None)])}<div class="page-intro-grid"><h1>Vos travaux.<br><span class="gradient-text">À vos côtés.</span></h1><div><p>Rénover, agrandir, construire. Un projet se prépare par étapes, avec des choix à faire et des intervenants à coordonner.</p><p>D-SIGN vous accompagne de la définition du besoin au suivi du chantier, selon la mission convenue.</p><a class="text-link" href="#methode">Découvrir notre méthode{icon('arrow-down')}</a></div></div></div></section>
    <section class="service-selection section-space" id="services" aria-labelledby="service-selection-title"><div class="container"><div class="page-section-heading"><h2 id="service-selection-title">Quel est votre <span class="gradient-text">projet ?</span></h2><p>Trois entrées pour imaginer la suite.</p></div><div class="service-entry-grid">{cards}</div><p class="media-note">Visuels d’ambiance.</p><a class="text-link" href="index.html#expertises">Explorer tous nos métiers{icon()}</a></div></section>
    <section class="method-section section-space" id="methode" aria-labelledby="method-title"><div class="container"><div class="page-section-heading method-heading"><h2 id="method-title">Une méthode claire.<br><span class="gradient-text">À chaque étape.</span></h2><p>Du premier échange au chantier, vous savez ce que nous préparons ensemble et quelles décisions viennent ensuite.</p></div><div class="method-layout"><aside class="method-sidebar"><nav class="progress-container" aria-label="Les étapes de notre accompagnement"><span class="progress-active" aria-hidden="true"></span><span class="progress-fill" aria-hidden="true"></span><ol>{rail}</ol></nav><a class="text-link method-contact" href="index.html#contact">Échangeons sur votre projet{icon()}</a></aside><div class="method-content">{chapters}</div></div></div></section>{cta()}'''
    (out/'nos-services.html').write_text(layout('nos-services.html','Nos services','Rénovation, extension et construction : découvrez nos services et les cinq étapes de l’accompagnement D-SIGN.',main))

def projects_page():
    filters=''.join(f'<button type="button" data-project-filter="{key}" aria-pressed="{str(key=="tous").lower()}" aria-controls="project-grid">{label}</button>' for key,label in [('tous','Tous les projets'),('agrandissement','Agrandissement'),('construction','Construction'),('renovation','Rénovation')])
    main=f'''<section class="page-intro section-space"><div class="container">{breadcrumb([('Nos projets',None)])}<div class="page-intro-grid"><h1>Nos projets.<br><span class="gradient-text">D’autres façons d’habiter.</span></h1><div><p>Construction, rénovation, agrandissement : parcourez les vues de conception de nos projets.</p><p>Choisissez un type de projet, puis ouvrez les images pour les découvrir de plus près.</p><a class="text-link" href="#portfolio">Explorer les projets{icon('arrow-down')}</a></div></div></div></section>
    <section class="portfolio-section section-space" id="portfolio" aria-labelledby="portfolio-title"><div class="container"><h2 class="sr-only" id="portfolio-title">Le portfolio D-SIGN</h2><div class="project-filter-bar"><div class="project-filters" role="group" aria-label="Filtrer les projets" hidden>{filters}</div><p id="project-count" role="status" aria-live="polite">9 projets</p></div><div class="project-grid-new" id="project-grid">{''.join(project_card(p,True) for p in projects)}</div></div></section>{cta('Et si nous imaginions le vôtre ?')}'''
    dialog=f'''<dialog class="project-dialog" id="project-dialog" aria-labelledby="project-dialog-title"><div class="project-dialog-top"><h2 id="project-dialog-title"></h2><button type="button" class="round-control" data-close-project aria-label="Fermer les images du projet">{icon('close')}</button></div><figure><img id="project-dialog-image" src="assets/projects/vue-projet-1.webp" width="883" height="558" alt=""><figcaption>Vue de conception</figcaption></figure><div class="project-dialog-bottom"><div class="project-gallery-controls"><button type="button" class="round-control" data-project-previous aria-label="Image précédente">{icon('previous')}</button><p id="project-gallery-count" role="status" aria-live="polite">1 / 2</p><button type="button" class="round-control" data-project-next aria-label="Image suivante">{icon('next')}</button></div><a class="text-link" id="project-dialog-contact" href="index.html#contact">Parlons de votre projet{icon()}</a></div></dialog><script type="application/json" id="projects-data">{json.dumps(projects,ensure_ascii=False).replace('</','<\\/')}</script>'''
    (out/'nos-projets.html').write_text(layout('nos-projets.html','Nos projets','Explorez les projets D-SIGN : agrandissement, construction et rénovation, avec filtres et vues de conception.',main,dialog))

def service_page(s):
    slug=s['id'];related=[p for p in projects if p['category']==s['projectCategory']][:2]
    focuses=''.join(f'<div><h3>{esc(f["title"])}</h3><p>{esc(f["text"])}</p></div>' for f in s['focus'])
    benefits=''.join('<li>'+icon('check')+'<span>'+esc(t)+'</span></li>' for t in s['needs'])
    faq=''.join(f'<details><summary>{esc(f["question"])}{icon("arrow-down")}</summary><p>{esc(f["answer"])}</p></details>' for f in s['faq'])
    other=''.join(f'<a href="{a["id"]}.html"><span>{a["name"]}</span>{icon()}</a>' for a in services if a['id']!=slug)
    project_label = 'd’extension' if slug == 'extension' else 'de '+s['name'].lower()
    main=f'''<section class="service-hero section-space"><div class="container">{breadcrumb([('Nos services','nos-services.html'),(s['name'],None)])}<div class="service-hero-grid"><div><h1>{s['name']}.<br><span class="gradient-text">{esc(s['title'])}</span></h1><p>{esc(s['intro'])}</p>{button('Parlons de votre projet','index.html?projet='+slug+'#contact')}<a class="text-link service-hero-secondary" href="#accompagnement">Découvrir l’accompagnement{icon('arrow-down')}</a></div><figure><img src="{s['image']}" width="1600" height="1067" alt="{s['imageAlt']}" fetchpriority="high" decoding="async"><figcaption>Visuel d’ambiance</figcaption></figure></div></div></section>
    <section class="service-overview section-space" id="accompagnement" aria-labelledby="overview-title"><div class="container service-overview-grid"><h2 id="overview-title">{esc(s['overviewTitle'])}</h2><div>{''.join('<p>'+esc(p)+'</p>' for p in s['overview'])}</div></div><div class="container service-focus">{focuses}</div></section>
    <section class="service-needs section-space" aria-labelledby="needs-title"><div class="container service-needs-grid"><div><h2 id="needs-title">Ce qui vous donne<br><span class="gradient-text">envie d’avancer.</span></h2><p>Vos usages et vos priorités dessinent le projet. Voici quelques sujets à aborder ensemble.</p></div><ul>{benefits}</ul></div></section>
    <section class="service-process section-space" aria-labelledby="service-process-title"><div class="container"><div class="page-section-heading"><h2 id="service-process-title">Un projet qui se prépare<br><span class="gradient-text">avec vous.</span></h2><a class="text-link" href="nos-services.html#methode">Notre méthode en détail{icon()}</a></div><ol><li><strong>Définir</strong><p>Comprendre le lieu, vos besoins et les possibilités du projet.</p></li><li><strong>Concevoir et chiffrer</strong><p>Préparer les plans, les propositions et les éléments du budget.</p></li><li><strong>Coordonner et suivre</strong><p>Organiser les travaux prévus selon la mission confiée.</p></li></ol></div></section>
    <section class="service-projects section-space" aria-labelledby="related-projects-title"><div class="container"><div class="page-section-heading"><h2 id="related-projects-title">Pour vous <span class="gradient-text">projeter.</span></h2><a class="text-link" href="nos-projets.html?type={s['projectCategory']}">Voir les projets{icon()}</a></div><div class="related-project-grid">{''.join(project_card(p) for p in related)}</div></div></section>
    <section class="service-faq section-space" aria-labelledby="faq-title"><div class="container service-faq-grid"><h2 id="faq-title">Parlons<br><span class="gradient-text">concrètement.</span></h2><div>{faq}</div></div></section>{cta('Votre projet '+project_label+' commence ici.',slug)}
    <nav class="container other-services" aria-label="Explorer nos autres services"><p>Et pour vos autres projets</p>{other}</nav>'''
    (out/(slug+'.html')).write_text(layout(slug+'.html',s['name'],s['intro'],main))

services_page()
projects_page()
for service in services: service_page(service)

# Keep the existing homepage and material gallery intact while connecting all pages.
for name in ['index.html','nos-materiaux.html']:
    p=out/name;s=p.read_text()
    s=re.sub(r'<header class="site-header".*?</header>',lambda _:header(name),s,count=1,flags=re.S)
    s=re.sub(r'<footer class="site-footer".*?</footer>',lambda _:footer(name),s,count=1,flags=re.S)
    s=re.sub(r'<svg class="icon-definitions".*?</svg>',lambda _:icons,s,count=1,flags=re.S)
    p.write_text(s)
print('5 pages générées ; navigation des 7 pages reliée.')

# Refresh local CSS/JS references after regenerating the static pages.
import runpy
runpy.run_path(str(root / "scripts/version-styles.py"), run_name="__main__")
