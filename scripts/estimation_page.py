"""Render D-SIGN's static demonstration estimator using the shared site shell."""
import html
import json


def generate(out, header, footer, icons):
    data = json.loads((out/'assets/estimation/catalogue.json').read_text())
    esc = html.escape
    def icon(name):
        return f'<svg class="icon" aria-hidden="true"><use href="#{name}"/></svg>'
    def choice(kind, name, key, label, description='', symbol=None, domain=None):
        extra = f' data-domain="{esc(domain)}"' if domain else ''
        return f'''<label class="estimate-choice"{extra}><input class="estimate-choice-input" type="{kind}" name="{name}" value="{esc(key)}"><span class="estimate-choice-body">{f'<span class="estimate-choice-icon">{icon(symbol)}</span>' if symbol else ''}<span class="estimate-choice-label">{esc(label)}</span>{f'<span class="estimate-choice-description">{esc(description)}</span>' if description else ''}<span class="estimate-choice-mark">{icon('check')}</span></span></label>'''
    domains='\n'.join(choice('checkbox','domains',d['id'],d['label'],d['description'],d['icon']) for d in data['domains'])
    services='\n'.join(choice('checkbox','services',s['id'],s['label'],domain=d['id']) for d in data['domains'] for s in d['services'])
    budgets='\n'.join(choice('radio','budget',d['id'],d['label'],symbol='estimate') for d in data['budgets'])
    timelines='\n'.join(choice('radio','timeline',d['id'],d['label'],symbol='calendar') for d in data['timelines'])
    fields=[]
    for name,label,kind,autocomplete,wide in [('firstName','Prénom','text','given-name',False),('lastName','Nom','text','family-name',False),('email','Email','email','email',True),('phone','Téléphone','tel','tel',True),('address','Adresse','text','street-address',True),('postalCode','Code postal','text','postal-code',False),('city','Ville','text','address-level2',False)]:
        extra=' inputmode="numeric" maxlength="5"' if name=='postalCode' else ' maxlength="120"'
        fields.append(f'''<div class="estimate-field{' estimate-field-wide' if wide else ''}"><label for="estimate-{name}">{label} <span aria-hidden="true">*</span></label><input id="estimate-{name}" name="{name}" type="{kind}" autocomplete="{autocomplete}" required aria-describedby="estimate-{name}-error"{extra}><p class="estimate-field-error" id="estimate-{name}-error" hidden></p></div>''')
    progress=''.join(f'<li><button type="button" data-estimate-progress="{n}" disabled><span class="estimate-progress-number">{n+1:02}</span><span>{label}</span></button></li>' for n,label in enumerate(['Domaines','Travaux','Budget','Délais','Coordonnées']))
    extra_icons='<symbol id="calendar" viewBox="0 0 24 24"><path d="M4 5h16v16H4zM8 2v6M16 2v6M4 11h16M8 15h2M14 15h2M8 18h2"/></symbol>'
    page_icons=icons.replace('</svg>',extra_icons+'</svg>')
    payload=json.dumps(data,ensure_ascii=False).replace('</','<\\/')
    content=f'''<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="Préparez votre projet de travaux avec le simulateur D-SIGN : domaines, services, budget et délais. Parcours de démonstration sans envoi de demande."><meta name="theme-color" content="#1c1c58"><title>Estimez votre projet de travaux — D-SIGN GBS</title><link rel="icon" href="data:,"><link rel="preload" href="assets/fonts/instrument-sans-regular.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="assets/fonts/instrument-sans-bold.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="styles.css"><link rel="stylesheet" href="estimation.css"><script src="script.js" defer></script><script src="estimation.js" defer></script></head>
<body class="estimation-page"><a class="skip-link" href="#contenu">Aller au contenu</a>{page_icons}{header('estimation.html')}
<main id="contenu" class="estimate-main"><div class="container estimate-container">
  <div class="estimate-intro"><h1>Estimez le coût de <span class="gradient-text">vos travaux.</span></h1><p>Sélectionnez vos travaux, votre budget et vos délais.</p><p class="estimate-demo-note">Démonstration : aucune demande ni coordonnée n’est transmise.</p></div>
  <noscript><div class="estimate-no-js"><h2>Préparons votre projet ensemble.</h2><p>Activez JavaScript pour utiliser le simulateur, ou contactez D-SIGN pour décrire vos travaux.</p><a class="button button-primary" href="index.html#contact">Contacter D-SIGN{icon('arrow-up-right')}</a></div></noscript>
  <div id="estimate-app" hidden>
    <nav class="estimate-progress" aria-label="Étapes de l’estimation"><ol>{progress}</ol></nav>
    <div class="estimate-question"><p id="estimate-step-count">Étape 1 sur 5</p><h2 id="estimate-question" tabindex="-1">Votre projet concerne :</h2><p id="estimate-hint">Choisissez un ou plusieurs domaines.</p><p id="estimate-selection" role="status" aria-live="polite" aria-atomic="true"></p></div>
    <p class="estimate-error" id="estimate-error" role="alert" hidden></p>
    <section data-estimate-panel="0" aria-labelledby="estimate-question"><fieldset class="estimate-options"><legend class="sr-only">Votre projet concerne :</legend>{domains}</fieldset></section>
    <section data-estimate-panel="1" aria-labelledby="estimate-question" hidden><fieldset class="estimate-options estimate-services"><legend class="sr-only">Choisissez vos travaux :</legend>{services}</fieldset></section>
    <section data-estimate-panel="2" aria-labelledby="estimate-question" hidden><fieldset class="estimate-options estimate-options-pair"><legend class="sr-only">Quel est votre budget prévisionnel ?</legend>{budgets}</fieldset></section>
    <section data-estimate-panel="3" aria-labelledby="estimate-question" hidden><fieldset class="estimate-options estimate-options-pair"><legend class="sr-only">Dans quels délais souhaitez-vous réaliser vos travaux ?</legend>{timelines}</fieldset></section>
    <section data-estimate-panel="4" aria-labelledby="estimate-question" hidden>
      <div class="estimate-contact-layout"><form id="estimate-form" novalidate><p class="estimate-required">Les champs marqués d’un * sont obligatoires.</p><button type="button" class="estimate-text-button estimate-fill-demo" id="estimate-fill-demo">Utiliser des coordonnées fictives</button><div class="estimate-fields">{''.join(fields)}</div><label class="estimate-optin"><input type="checkbox" name="newsletterOptin"><span>J’accepte de recevoir des informations et conseils de D-SIGN par email. <span class="estimate-optional">Facultatif.</span></span></label><input type="hidden" name="projectCategories"><input type="hidden" name="projectServices"><input type="hidden" name="projectBudget"><input type="hidden" name="projectTimeline"><div class="estimate-contact-actions"><button class="button estimate-back" type="button" data-estimate-back>Retour</button><button class="button button-primary" type="submit">Recevoir mon estimation{icon('arrow-up-right')}</button></div><p class="estimate-privacy">Ce formulaire est une prévisualisation. Aucune demande, inscription ou prise de contact ne sera effectuée.</p></form><aside class="estimate-summary" aria-labelledby="estimate-summary-title"><h3 id="estimate-summary-title">Votre projet en bref.</h3><div id="estimate-summary"></div><button type="button" class="estimate-text-button" data-estimate-edit="1">Modifier mes travaux</button></aside></div>
    </section>
    <section data-estimate-panel="5" class="estimate-confirmation" aria-labelledby="estimate-thanks-title" hidden><span class="estimate-success-icon">{icon('check')}</span><h1 id="estimate-thanks-title" tabindex="-1">Merci !</h1><p>Vous avez terminé le parcours d’estimation.</p><p class="estimate-confirmation-note">Cette démonstration est terminée. Aucun message n’a été envoyé.</p><p id="estimate-countdown">Retour à l’accueil dans <span id="estimate-seconds">10</span> secondes.</p><button class="estimate-text-button" id="estimate-pause" type="button">Rester sur le récapitulatif</button><div class="estimate-final-summary"><h2>Le récapitulatif de votre projet</h2><div id="estimate-final-summary"></div></div><div class="estimate-finish-actions"><a class="button button-primary" href="index.html">Revenir à l’accueil{icon('arrow-up-right')}</a><button type="button" class="button estimate-back" id="estimate-restart">Nouvelle simulation</button></div></section>
    <div class="estimate-actions" id="estimate-actions"><button class="button estimate-back" type="button" data-estimate-back hidden>Retour</button><button class="button button-primary" id="estimate-next" type="button">Voir tous les services (0){icon('arrow-up-right')}</button></div>
  </div>
</div></main>{footer('estimation.html')}<script type="application/json" id="estimate-data">{payload}</script></body></html>'''
    (out/'estimation.html').write_text(content)
