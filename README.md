# D-SIGN GBS — redesign

Redesign de la homepage WordPress de D-SIGN GBS. Base métier : **cadrage V2**. Direction choisie : https://dsign-architecture.vic60400.chatgpt.site/ ; logo officiel intégral conservé. La capture fournie par le client est maintenant archivée dans `design-explorations/references/direction-retenue-desktop.jpeg` et analysée dans le registre de direction.

## Documents

- `dist/dsign-site-html-css-v8.zip` : export courant de sept pages, avec portfolio filtrable, hub services et trois pages de service ; homepage V7 et matériaux conservés.
- `export/PROJETS-SERVICES.md` : contenus sources, galerie de projets, méthode verticale et limites de la V8.
- `export/nos-projets.html`, `export/nos-services.html`, `export/renovation.html`, `export/extension.html`, `export/construction.html` : cinq nouvelles pages natives, avec `pages.css` et `pages.js`.
- `dist/dsign-site-html-css-v7.zip` : archive historique avec onze catégories, 61 exemples, portrait réel du fondateur et formes arrondies dans la charte D-SIGN.
- `dist/dsign-site-html-css-v6.zip` : archive historique du parcours à huit sections et de la navigation blanche.
- `export/STRUCTURE.md` : sept pages et navigation V8 ; ordre conservé de la homepage, contrôles et limites.
- `export/RYTHME.md` : surfaces et compositions de la V7 ; V6 et rythme V5 conservés comme historique.
- `dist/dsign-site-html-css-v5.zip` : archive historique après correction du rythme visuel.
- `dist/dsign-site-html-css-v4.zip` : archive historique après réorganisation des six sections, avec la page matériaux.
- `GITHUB-PAGES.md` : activation de l’hébergement V3 et synchronisation de la branche `gh-pages`.
- `export/nos-materiaux.html` : page matériaux fournie par le client, intégrée à la même charte et reliée à la homepage.
- `export/MATERIAUX.md` : provenance des visuels, contrôles de la galerie et intégration WordPress.
- `dist/dsign-site-html-css-v3.zip` : archive historique ajoutant la page matériaux à la homepage, avec images et fontes locales.
- `export/index.html`, `export/styles.css`, `export/script.js` : homepage retenue reconstruite et améliorée, avec tous ses assets locaux.
- `export/README.md` : ouverture, contenu de la livraison et préparation de l’intégration WordPress.
- `export/VERIFICATION.md` : contrôles du rendu, des interactions et de l’accessibilité, avec limites.
- `export/INTEGRATION.md` : contenus V2 intégrés, formulaire Contact Form 7 et paramètres WordPress.
- `DESIGN.md` : charte graphique du rendu livré, également incluse dans l’archive.
- `dist/dsign-homepage-html-css.zip` : archive de livraison autonome, sans framework ni étape de build.
- `dist/dsign-homepage-html-css-v2.zip` : même livraison V2, avec À propos, raisons de choix et formulaire intégré ; la V1 est conservée séparément.
- `design-explorations/direction-retenue.md` : référence choisie par le client et état de son inspection.
- `design-explorations/homepage-v2.html` : trois nouvelles directions interactives à comparer, avec le logo officiel dans chaque aperçu.
- `design-explorations/homepage-v2.manifest.md` : corpus commun, limites des médias et statut des interactions de l’exploration V2.
- `design-explorations/cadrage-v2.md` : cadrage actuel complet — stratégie, copy, charte à explorer, parcours, WordPress et recette.
- `assets/brand/dsign-logo.svg` : SVG officiel fourni par le client, intact ; provenance et SHA-256 dans `assets/brand/README.md`.
- `PRODUCT.md` : faits produit et contraintes durables.
- `.agents/product-marketing.md` : contexte marketing partagé par les skills.
- `design-explorations/homepage-brief.md` : brief V1 conservé comme historique ; la V2 fait autorité pour la suite.
- `design-explorations/design-method-sources.md` : vidéo et articles, horodatages, arbitrages et réévaluation des pistes.
- `.agents/design-taste.md` : profil visuel illustré, références et boucle de revue à consulter avant une nouvelle passe.
- `design-explorations/homepage-directions.html` : quatre essais V1 historiques, sans direction approuvée ; leurs logos en texte doivent être remplacés par le SVG officiel dans la prochaine exploration.
- `design-explorations/homepage-directions-desktop.png` : revue complète à 1280 px.
- `design-explorations/homepage-directions-mobile.png` : revue complète à 390 px.
- `design-explorations/references/` : captures du site actuel et du benchmark.

## Voir l’exploration

Depuis la racine du dépôt :

```bash
python3 -m http.server 4173
```

Puis ouvrir :

```text
http://localhost:4173/design-explorations/homepage-v2.html
```

L’exploration V2 et ses captures sont conservées comme historique. La référence ensuite choisie par le client est désormais reconstruite dans `export/`. Pour voir la homepage courante, ouvrir `export/index.html` ou lancer un serveur local depuis ce dossier. La livraison est statique ; l’intégration au thème WordPress reste une étape distincte. Aucun site n’est publié par ces fichiers.
