---
name: D-SIGN GBS
description: Système visuel de la homepage statique, extrait de l’export courant.
colors:
  navy: "#1c1c58"
  green: "#70c875"
  green-hover: "#8ad38e"
  green-ink: "#337f40"
  white: "#ffffff"
  mineral: "#f3f0ea"
  muted: "#5c5d76"
  on-dark-muted: "#d2d5e7"
  line: "#d5d6df"
  line-dark: "#55557f"
  outline: "#8585a6"
typography:
  display:
    fontFamily: '"Instrument Sans", Arial, sans-serif'
    fontSize: "clamp(48px, 4.6vw, 70px)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-.035em"
  headline:
    fontFamily: '"Instrument Sans", Arial, sans-serif'
    fontSize: "clamp(34px, 3.8vw, 56px)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-.035em"
  title:
    fontFamily: '"Instrument Sans", Arial, sans-serif'
    fontSize: "clamp(24px, 2vw, 30px)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-.035em"
  body:
    fontFamily: '"Instrument Sans", Arial, sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: '"Instrument Sans", Arial, sans-serif'
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.35
rounded:
  button: "999px"
  card: "18px"
  field: "12px"
  hero: "0 46% 46% 0 / 0 50% 50% 0"
  hero-mobile: "0 42% 42% 0 / 0 50% 50% 0"
spacing:
  page: "clamp(20px, 5.2vw, 96px)"
  section: "clamp(64px, 7vw, 104px)"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.navy}"
    typography: "{typography.label}"
    padding: "15px 24px"
    rounded: "{rounded.button}"
  button-primary-hover:
    backgroundColor: "{colors.green-hover}"
    textColor: "{colors.navy}"
  button-outline:
    textColor: "{colors.white}"
    typography: "{typography.label}"
    padding: "15px 24px"
    rounded: "{rounded.button}"
  button-outline-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
  text-link:
    typography: "{typography.label}"
    padding: "8px 0"
  service:
    textColor: "{colors.white}"
    rounded: "{rounded.card}"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.field}"
  hero-image:
    rounded: "{rounded.hero}"
  hero-image-mobile:
    rounded: "{rounded.hero-mobile}"
---

# Design System: D-SIGN GBS

## Overview

La référence est la [homepage choisie par le client](https://i.imgur.com/KfDjzWy.jpeg), archivée dans le dépôt. Ce document décrit le système effectivement construit dans `export/` : huit pages HTML partageant `styles.css` et `script.js`, avec `pages.css` et `pages.js` pour les pages projets/services. Une copie de cette charte accompagne les fichiers de l’export. La capture fixe la direction ; les valeurs ci-dessus proviennent de l’implémentation, sans prétendre retrouver le CSS ou la police de la page source.

La page alterne des aplats bleu profond et des sections blanches, avec de grands titres gras, des photographies architecturales et des actions vertes. Le fichier du logo SVG officiel reste intact et est conservé comme référence ; à la demande du propriétaire le 5 novembre, la navigation affiche uniquement le nom D-SIGN en texte dégradé. L’image du hero, au bord gauche droit et au bord droit arrondi, constitue la forme distinctive ; les flèches géométriques relient les actions entre elles. La V7 conserve le parcours et la navigation blanche, puis étend explicitement les règles à des boutons arrondis, cartes adoucies, titres dégradés et guillemet SVG. Le propriétaire demande les onze catégories et tous les exemples de Kovan.fr dans la touche D-SIGN ; voir `.impeccable/directions/homepage-v7-kovan.md`. Les couleurs, la police et le hero en D restent conservés ; le hero occupe désormais 92 % de sa colonne, plafonné à 600 px.

La V8 étend ce même système au portfolio, au hub services et aux trois pages de service, sans nouveau token ni changement de la homepage. Les ajouts et leurs limites sont décrits dans `.impeccable/directions/inner-pages-v8.md`.

**Key Characteristics:**

- Bleu profond, blanc et vert issus de la direction retenue.
- Une seule famille sans empattements, en normal et gras.
- Grandes images séparées du texte vivant ; silhouette en D réservée au hero existant.
- Boutons en pilule, cartes arrondies, liens soulignés, flèches fines et focus clavier visible.

## Colors

Les clés du frontmatter reprennent les noms des variables CSS. Leurs valeurs sont normatives pour cette implémentation.

### Primary

- **Bleu profond — `navy`** : fond du hero, des raisons de choisir D-SIGN et du contact ; texte principal sur les surfaces claires, navigation du header blanc et texte des actions vertes.

### Secondary

- **Vert clair — `green`** : boutons principaux, trait sous la promesse, bord inférieur du hero, soulignement des liens, connecteurs du parcours, actions des métiers et icônes sur bleu.
- **Vert de survol — `green-hover`** : état survolé des actions à fond vert.
- **Vert foncé — `green-ink`** : accents des titres sur fond clair et de la présentation À propos, signature du fondateur et survol des liens du menu mobile. Garder cette variante pour les textes et éléments fins sur fond clair.

### Neutral

- **Blanc — `white`** : sections claires, texte sur bleu et survol du bouton encadré.
- **Minéral clair — `mineral`** : fond des métiers et du message du fondateur, puis fond et voile de la section matériaux, inspirés de l’enduit photographié. Ce neutre distingue ces séquences des sections blanches sans ajouter une nouvelle couleur d’accent.
- **Texte secondaire — `muted`** : paragraphes sur fond clair, mentions d’images et bas de page sur blanc.
- **Texte secondaire sur bleu — `on-dark-muted`** : textes d’accompagnement sur les aplats foncés.
- **Séparateur clair — `line`** : contours des filtres, séparation du header et du footer.
- **Séparateur sur bleu — `line-dark`** : filets des métiers, des raisons de choix, du contact et des retours de formulaire sur fond foncé.
- **Contour sur bleu — `outline`** : bouton encadré sur bleu ; la variante du header et la commande du menu mobile utilisent le bleu profond sur blanc.

Les mots accentués des titres utilisent un dégradé bleu vers vert foncé sur fond clair, ou blanc vers vert sur bleu ; un texte uni reste disponible sans prise en charge de `background-clip`, et les règles de couleurs forcées et d’impression rétablissent un texte uni. Le voile minéral sur la photo des matériaux et les fonds d’attente des images restent des traitements locaux définis dans le CSS. Aucune gamme tonale n’est définie dans l’export.

## Typography

**Display Font:** Instrument Sans, avec Arial puis sans-serif en repli.

**Body Font:** la même famille. Les fichiers WOFF2 locaux couvrent les graisses normale (400) et grasse (700), sans dépendance à une police distante. La famille du logo reste celle de l’asset SVG.

### Hierarchy

- **Display** : promesse du hero, rôle `display`. Les adaptations réelles sont `clamp(44px, 4.6vw, 60px)` sous 1120 px, `clamp(42px, 5.7vw, 54px)` sous 900 px, `clamp(40px, 8vw, 60px)` sous 760 px et 38 px sous 360 px.
- **Headline** : titres de sections, rôle `headline` ; ils deviennent `clamp(33px, 6.3vw, 48px)` sous 760 px. Le titre de contact possède une taille propre, de `clamp(40px, 4.4vw, 64px)` sur grand écran à `clamp(38px, 8.4vw, 56px)` sur mobile.
- **Title** : rôle `title` du socle. Les intitulés de catégorie sont réservés aux lecteurs d’écran ; les titres des exemples utilisent 22 px sur grand écran et 23 px sur mobile. Les étapes utilisent 20 px sur grand écran, 18 px sous 1120 px et 22 px sur mobile ; les bénéfices restent à 21 px sur grand écran.
- **Body** : rôle `body`. Les introductions utilisent 18 px et un interligne de 1.6, puis 17 px sur mobile. Les paragraphes d’introduction sont limités à 39 caractères environ sur grand écran ; certaines versions intermédiaires vont jusqu’à 48 caractères.
- **Label** : boutons et liens, rôle `label`. La navigation desktop utilise 14 px gras ; le menu mobile, 17 px. Les mentions d’images sont à 13 px, le bas de page à 12 px.

Conserver les retours à la ligne éditoriaux des grands titres. Ne pas transformer les paragraphes ou les informations de contact en grandes capitales.

## Layout

Le conteneur central a une largeur maximale de 1240 px. La marge latérale et l’espacement vertical des sections utilisent les deux valeurs fluides du frontmatter. Sous 760 px, la marge latérale passe à 24 px ; sous 360 px, à 20 px. Les alignements partagés par les titres, images et actions structurent la page.

La composition livrée V7 suit l’ordre hero, Comment ça marche, Nos métiers, Pourquoi nous choisir, Le mot du fondateur, À propos, matériaux, contact, footer. L’ancienne introduction « Un seul fil. Du début à la fin. », son détail de méthode et l’ancienne section « Pourquoi nous confier votre projet ? » sont supprimés ; la section projets retirée auparavant reste absente. Ce séquençage appartient à cette homepage ; il ne prescrit pas la composition de toutes les futures pages.

Le header est blanc. Le rythme des huit sections est bleu / blanc / minéral / bleu / minéral / blanc / minéral photographique / bleu, puis footer blanc. Le parcours expose cinq étapes numérotées sur blanc. Les métiers utilisent des photos avec un voile sombre neutre et du texte clair sur une section minérale. Les raisons de choix ont leur propre aplat bleu, une image avec action et quatre bénéfices avec icônes vertes. Le fondateur associe son portrait réel, un cartouche d’identité et un message avec guillemet SVG sur minéral ; À propos reste blanc. Le fond minéral des matériaux reste visible sur mobile lorsque le texte précède la photo.

Sur grand écran, le hero répartit texte et image en colonnes `.9fr / 1.1fr`, séparées par 48 px. Le parcours utilise cinq colonnes ; les exemples de métiers, trois colonnes avec un écart de 24 px, organisées par catégorie. Les raisons de choix utilisent deux colonnes égales ; le fondateur, `.9fr / 1.1fr` ; À propos, `.85fr / 1.15fr`. Le contact conserve deux colonnes égales.

Sous 1120 px, le CTA du header disparaît, les cartes métiers passent à deux colonnes et plusieurs espacements se réduisent. Sous 900 px, le menu natif remplace la navigation desktop, À propos et le fondateur passent en une colonne et le parcours en trois colonnes. Sous 760 px, le hero s’empile dans l’ordre message, action, image ; le parcours, les cartes métiers, les raisons de choix et le contact passent en une colonne. Les filtres en pilule se répartissent sur plusieurs lignes. Les matériaux placent alors le texte sur fond minéral puis la photo, sans voile.

## Elevation & Depth

Les aplats, photos, bordures et espaces structurent les sections. Les cartes métiers ajoutent une ombre douce (`0 12px 30px -18px #1c1c5840`) ; le filtre actif et le cartouche du portrait ont des ombres locales. Le panneau mobile conserve son ombre (`0 15px 25px -20px #0009`). Les voiles bleus des métiers et de l’image des raisons de choix protègent les textes et actions. Le voile minéral de la section matériaux protège la lisibilité du texte sur grand écran ; ce dernier traitement disparaît sur mobile.

## Shapes

Les boutons et filtres utilisent le rayon `button`, les cartes métiers et visuels des raisons de choix et du fondateur le rayon `card`, les champs et le cartouche d’identité le rayon `field`. Ces arrondis remplacent les angles droits imposés auparavant, à la demande du propriétaire. Le hero conserve son bord gauche droit et ses deux grands arrondis à droite, avec les rayons `hero` puis `hero-mobile` du frontmatter. L’image remplit cette forme par recadrage (`object-fit: cover`) ; son point de cadrage est à 53 % horizontalement et 50 % verticalement.

Les icônes sont des flèches SVG ouvertes, à trait fin (1.6), extrémités et jonctions arrondies. Les catégories ajoutent des pictogrammes SVG et le message du fondateur un guillemet SVG décoratif, masqués aux technologies d’assistance. La diagonale monte vers la droite ; la découverte du contenu utilise une flèche verticale descendante. Le trait vert sous la promesse est rectiligne et légèrement décalé à droite.

## Components

### Buttons

Les actions sont des liens sémantiques en pilule, avec texte gras et flèche à droite. Le bouton principal utilise les rôles `button-primary` et `button-primary-hover`. Sa hauteur minimale est de 56 px et l’écart texte/flèche de 22 px. Le bouton encadré reste transparent sur fond bleu ; son contour prend `outline`, puis le fond devient blanc au survol. La variante du header blanc est plus compacte (50 px minimum, marge intérieure `12px 18px`) et utilise un texte et un contour bleus ; elle devient bleue avec texte blanc au survol.

Les liens d’action pointent vers le contact de la page ou le parcours d’estimation existant. Le formulaire intégré conserve son bouton « Envoyer ma demande » et son raccordement au Contact Form 7 existant ; ses paramètres et limites restent décrits dans `export/INTEGRATION.md`.

### Text links

Le lien de section associe un filet vert inférieur, du texte gras et une flèche. Il offre une hauteur minimale de 44 px. La flèche se déplace de 3 px à droite et de 3 px vers le haut au survol ; ce déplacement est désactivé lorsque la réduction des mouvements est demandée.

### Cards / Containers

Les métiers regroupent onze catégories et 61 cartes photographiques arrondies, avec titre et description originale sur un voile sombre neutre. L’action « Parlons de ce projet » est une action discrète de 12 px avec une flèche dans un cercle vert de 32 px, masqué au repos et révélé au survol ou au focus clavier ; la carte entière reste activable au toucher. Leur hauteur minimale est de 320 px sur grand écran, avec 24 px de marge intérieure ; sur mobile, 310 px et 23 px. Chaque carte rejoint `#contact` et préremplit un message vide ou remplace le précédent texte automatique resté intact ; un texte modifié par le visiteur est conservé. La photo s’agrandit au survol (`scale(1.035)`, 600 ms), sans déplacer la mise en page ; cet effet disparaît en mouvement réduit.

Le titre de catégorie reste accessible aux lecteurs d’écran sans être affiché au-dessus des cartes. Les onze filtres, centrés également sur mobile, sont des boutons en pilule avec pictogramme, blancs avec texte bleu et contour clair (50 px minimum, 46 px sur mobile). Le filtre actif devient bleu avec texte blanc, icône verte et ombre douce. « Chauffage & Climatisation » est sélectionné au démarrage JavaScript ; la sélection utilise `aria-pressed` et annonce la catégorie et son nombre d’exemples dans une zone de statut. Sans JavaScript, les filtres restent masqués et les 61 cartes des onze catégories restent visibles.

### Inputs / Fields

Les champs conservent fond blanc, texte bleu, labels et états existants, avec un rayon de 12 px. Le focus vert et les erreurs accessibles restent conservés.

### Navigation

Les sept pages partagent le header blanc, le nom D-SIGN en dégradé à gauche (40 px, 36 px sur mobile), puis « Nos services », « Nos projets », « Nos métiers », « Matériaux » et l’action de contact sur grand écran. Les pages intérieures ajoutent un fil d’Ariane et un état courant souligné/vert foncé. Le menu mobile utilise un élément natif `details`, un panneau blanc avec texte bleu et une action verte ; il ajoute l’accueil, Comment ça marche et À propos. Le symbole à deux traits devient une croix à l’ouverture. Le script le ferme au choix d’un lien, au clic extérieur, à Échap et au retour en affichage desktop. Échap rend le focus à la commande.

### Process and editorial sections

Le parcours « Comment ça marche » expose cinq étapes dans une liste ordonnée : échange sur le projet, conception et chiffrage, validation des choix, coordination du chantier et réception selon la mission. Chaque numéro blanc occupe un disque bleu dégradé de 128 px, complété par une pastille verte de 48 px avec une icône liée à l’étape ; des connecteurs verts relient les étapes sur grand écran. Sur mobile, les disques passent à 96 px (84 px jusqu’à 360 px), avec des pastilles de 36 px et les connecteurs deviennent verticaux. La progression reste visible sans dépliage, sans lien d’estimation sous les étapes.

Les quatre bénéfices des raisons de choix utilisent une liste de définitions, avec icônes vertes et filets sur bleu. Le message du fondateur utilise une citation et une signature sous un filet de 220 px en dégradé bleu–vert qui s’estompe à droite ; le portrait réel de Kevin HUART est recadré et présenté en miroir pour correspondre à la photo demandée, avec son nom et sa fonction en cartouche blanc. Le visage n’est pas généré. La section ne comporte plus de lien de contact sous la signature. Le nom D-SIGN du titre « À propos » reprend le dégradé des titres ; les trois libellés sous l’image ont été retirés. La source officielle H2Z et le fichier original sont conservés dans la provenance. Les informations du footer conservent leur `details` / `summary` et se développent dans le flux, sans modale.

Les images éditoriales sont plus compactes : portrait du fondateur limité à 440 px de large, image À propos à 460 px de haut, images de services à 460 px maximum. Les grandes tailles des pages intérieures et matériaux sont également réduites d’environ 15 %.

### Projects and service pages

Le portfolio associe des images arrondies à des titres et légendes vivants, sans fond de carte ajouté. La mosaïque masonry utilise trois colonnes CSS et des images de hauteurs variées, sans projet pleine largeur ; elle passe à deux colonnes sous 1120 px et une sous 760 px. Les hauteurs d’image sont plafonnées à 360 px (330 px sur mobile). Le même agencement fonctionne après filtrage et sans JavaScript. Les filtres reprennent les pilules du système, avec `aria-pressed`, compte de résultats annoncé et catégorie conservée dans l’URL. Les visuels sont légendés « Vues de conception » ; les deux images sources communes ne deviennent pas des photographies distinctes de neuf chantiers.

La galerie utilise un `dialog` natif blanc au rayon `card`, avec fond extérieur bleu assombri, commandes circulaires, titre et compteur. Elle conserve la navigation clavier, Échap, la fermeture extérieure et le retour du focus. Sans JavaScript, la tuile ouvre directement son image.

Le hub présente trois cartes de services sur bleu et une méthode en cinq étapes sur minéral. Le rail vertical `.progress-container`, dans une colonne latérale fixe au défilement, associe numéros circulaires, remplissage vert progressif, étape courante avec `aria-current="step"` et étapes parcourues en vert. Ses numéros de 72 px (64 px sur tablette) et ses libellés de 18 px sont accompagnés d’un repère blanc qui glisse vers l’étape courante en 500 ms. Le repère reste fixe dans la colonne gauche pendant la lecture. Sous 760 px, les cinq numéros de 48 à 56 px forment une barre horizontale sticky ; leurs libellés restent accessibles aux lecteurs d’écran. Sur les écrans bas, les numéros passent à 56 px pour laisser les cinq étapes visibles. Les images de méthode sont limitées à 600 × 280 px, puis 230 px de hauteur sur mobile ; les cinq contenus restent dans le flux. Les ancres utilisent le défilement natif, et le mouvement réduit supprime zooms et transitions.

Les pages de service alternent minéral, blanc et appel final bleu : introduction/image, périmètre et trois points d’attention, dix besoins, trois phases, projets associés et FAQ natives `details` / `summary`. Elles réutilisent les rayons et accents existants. Les actions rejoignent le contact de l’accueil avec l’un des trois contextes autorisés ; seul un message vide est prérempli, sans envoi automatique.

### Estimation des travaux

La huitième page réutilise le header blanc et le nom D-SIGN dégradé. Le hero d’accueil associe « J’estime mon projet » au bouton vert principal et conserve le contact en lien secondaire. Le module, sur fond minéral dans un conteneur de 1040 px maximum, utilise un titre de 34 à 46 px, une progression en cinq étapes et des questions de 25 à 32 px. Les domaines et services sont des contrôles natifs dans des tuiles blanches arrondies ; la sélection ajoute un fond vert pâle et un contour bleu, avec une coche verte. Les quatre budgets et délais utilisent chacun un groupe de boutons radio. Le contact associe les sept champs au récapitulatif bleu, puis s’empile sur mobile.

Le parcours conserve les onze domaines et les 61 services, sans calcul de montant. Les états de sélection, validation, retour, confirmation et absence de JavaScript sont prévus. Le formulaire est présenté comme une démonstration sans envoi. Les couleurs, rayons, police et focus existants sont conservés ; voir `.impeccable/directions/estimation.md` et `export/ESTIMATION.md`.

### Shared interaction states

Le focus clavier est matérialisé par un contour de 3 px dans la couleur courante, décalé de 6 px. Les transitions courantes durent 220 ms, avec la courbe définie dans le sidecar. Le défilement doux et les transitions sont désactivés sous `prefers-reduced-motion`. Le mode de couleurs forcées rétablit des contours système pour les boutons, le menu et les services.

## Do's and Don'ts

### Do:

- **Do** garder le SVG officiel intact dans les assets ; utiliser le nom textuel D-SIGN en dégradé dans la navigation et le footer, selon la demande du 5 novembre.
- **Do** reprendre le bleu, le vert, les titres gras et les flèches de la direction choisie.
- **Do** utiliser le vert foncé pour les accents fins sur fond clair et le vert clair pour les icônes et flèches sur bleu.
- **Do** préserver l’image en D du hero, les alignements communs et le texte vivant.
- **Do** garder des focus visibles, une navigation clavier fonctionnelle et la prise en compte du mouvement réduit.
- **Do** conserver la qualification des photos comme visuels d’ambiance lorsqu’elles sont utilisées ainsi.

### Don't:

- **Don't** remplacer cette direction par les palettes ou motifs des anciennes explorations A/B/C.
- **Don't** réintroduire le bouton d’interface « Modifier le site » dans la homepage.
- **Don't** présenter les images illustratives comme des projets livrés ou des membres de l’équipe.
- **Don't** inventer une police source, un comportement mobile observé dans la capture ou des composants absents de l’export.

### Ajustements du 5 novembre — alignement mobile

Le bandeau de navigation mesure au minimum 108 px sur ordinateur et 96 px sur mobile (100 px sur tablette). Le nom D-SIGN passe à 40/36 px et remplace aussi le logo image dans les huit footers. Le hero conserve uniquement le bouton d’estimation. Les titres de section mobiles occupent toute la colonne avant centrage ; les grands titres des pages intérieures et matériaux sont centrés. À la demande du propriétaire, le hero conserve son alignement d’origine : texte et action à gauche, visuel à droite. Les étapes mobiles suivent la référence Kovan : disque de 96 px (84 px sur écran très étroit) centré au-dessus du titre et du texte, sans connecteur latéral. Les photos métiers utilisent un voile neutre plus transparent en haut, renforcé seulement vers le texte inférieur, à la place du voile bleu dominant.

Le titre du hero affiche « Vos travaux » puis « commencent ici. » sur deux lignes imposées, alignées à gauche. La seconde ligne conserve le texte dégradé et son soulignement passe du blanc au vert. À 360 px et moins, le titre utilise 37 px pour garder la seconde ligne entière.
