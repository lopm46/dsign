---
name: D-SIGN GBS
description: Système visuel de la homepage statique, extrait de l’export validé.
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
    fontSize: "clamp(58px, 5.4vw, 84px)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-.035em"
  headline:
    fontFamily: '"Instrument Sans", Arial, sans-serif'
    fontSize: "clamp(40px, 4.6vw, 68px)"
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
  button-primary-hover:
    backgroundColor: "{colors.green-hover}"
    textColor: "{colors.navy}"
  button-outline:
    textColor: "{colors.white}"
    typography: "{typography.label}"
    padding: "15px 24px"
  button-outline-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
  text-link:
    typography: "{typography.label}"
    padding: "8px 0"
  service:
    textColor: "{colors.navy}"
  hero-image:
    rounded: "{rounded.hero}"
  hero-image-mobile:
    rounded: "{rounded.hero-mobile}"
---

# Design System: D-SIGN GBS

## Overview

La référence est la [homepage choisie par le client](https://i.imgur.com/KfDjzWy.jpeg), archivée dans le dépôt. Ce document décrit le système effectivement construit dans le dossier `export/` : `index.html`, `styles.css` et `script.js`. Une copie de cette charte accompagne ces fichiers dans l’archive de livraison. La capture fixe la direction ; les valeurs ci-dessus proviennent de l’implémentation, sans prétendre retrouver le CSS ou la police de la page source.

La page alterne des aplats bleu profond et des sections blanches, avec de grands titres gras, des photographies architecturales et des actions vertes. Le logo SVG officiel reste entier et intact. L’image du hero, au bord gauche droit et au bord droit arrondi, constitue la forme distinctive ; les flèches géométriques relient les actions entre elles. La V6 réorganise les sections dans cette charte et place la navigation sur blanc. Le parcours numéroté, les métiers photographiques et les compositions image/texte s’inspirent de Kovan.fr ; leur adaptation D-SIGN est décrite dans `.impeccable/directions/homepage-v6-kovan.md`. Cette référence de composition ne change pas l’identité visuelle.

**Key Characteristics:**

- Bleu profond, blanc et vert issus de la direction retenue.
- Une seule famille sans empattements, en normal et gras.
- Grandes images séparées du texte vivant ; silhouette en D réservée au hero existant.
- Liens rectangulaires ou soulignés, flèches fines et focus clavier visible.

## Colors

Les clés du frontmatter reprennent les noms des variables CSS. Leurs valeurs sont normatives pour cette implémentation.

### Primary

- **Bleu profond — `navy`** : fond du hero, des raisons de choisir D-SIGN et du contact ; texte principal sur les surfaces claires, navigation du header blanc et texte des actions vertes.

### Secondary

- **Vert clair — `green`** : boutons principaux, trait sous la promesse, bord inférieur du hero, soulignement des liens et des numéros du parcours, flèches des métiers et icônes sur bleu.
- **Vert de survol — `green-hover`** : état survolé des actions à fond vert.
- **Vert foncé — `green-ink`** : accents des titres sur fond clair et de la présentation À propos, signature du fondateur et survol des liens du menu mobile. Garder cette variante pour les textes et éléments fins sur fond clair.

### Neutral

- **Blanc — `white`** : sections claires, texte sur bleu et survol du bouton encadré.
- **Minéral clair — `mineral`** : fond des métiers et du message du fondateur, puis fond et voile de la section matériaux, inspirés de l’enduit photographié. Ce neutre distingue ces séquences des sections blanches sans ajouter une nouvelle couleur d’accent.
- **Texte secondaire — `muted`** : paragraphes sur fond clair, mentions d’images et bas de page sur blanc.
- **Texte secondaire sur bleu — `on-dark-muted`** : textes d’accompagnement sur les aplats foncés.
- **Séparateur clair — `line`** : contours des filtres, filets du parcours, séparation du header et du footer.
- **Séparateur sur bleu — `line-dark`** : filets des métiers, des raisons de choix, du contact et des retours de formulaire sur fond foncé.
- **Contour sur bleu — `outline`** : bouton encadré sur bleu ; la variante du header et la commande du menu mobile utilisent le bleu profond sur blanc.

Le voile minéral sur la photo des matériaux et les fonds d’attente des images restent des traitements locaux définis dans le CSS. Aucune gamme tonale n’est définie dans l’export.

## Typography

**Display Font:** Instrument Sans, avec Arial puis sans-serif en repli.

**Body Font:** la même famille. Les fichiers WOFF2 locaux couvrent les graisses normale (400) et grasse (700), sans dépendance à une police distante. La famille du logo reste celle de l’asset SVG.

### Hierarchy

- **Display** : promesse du hero, rôle `display`. Les adaptations réelles sont `clamp(50px, 5.3vw, 70px)` sous 1120 px, `clamp(48px, 6.6vw, 62px)` sous 900 px, `clamp(48px, 9.4vw, 72px)` sous 760 px et 44 px sous 360 px.
- **Headline** : titres de sections, rôle `headline` ; ils deviennent `clamp(39px, 7.4vw, 56px)` sous 760 px. Le titre de contact possède une taille propre, de `clamp(48px, 5.7vw, 84px)` sur grand écran à `clamp(46px, 10vw, 68px)` sur mobile.
- **Title** : rôle `title` du socle. Les noms des métiers utilisent une taille locale de `clamp(28px, 2.5vw, 36px)`, puis 32 px sous 760 px. Les titres des étapes et des bénéfices utilisent 21 px ; les étapes passent à 22 px sur mobile.
- **Body** : rôle `body`. Les introductions utilisent 18 px et un interligne de 1.6, puis 17 px sur mobile. Les paragraphes d’introduction sont limités à 39 caractères environ sur grand écran ; certaines versions intermédiaires vont jusqu’à 48 caractères.
- **Label** : boutons et liens, rôle `label`. La navigation desktop utilise 14 px gras ; le menu mobile, 17 px. Les mentions d’images sont à 13 px, le bas de page à 12 px.

Conserver les retours à la ligne éditoriaux des grands titres. Ne pas transformer les paragraphes ou les informations de contact en grandes capitales.

## Layout

Le conteneur central a une largeur maximale de 1440 px. La marge latérale et l’espacement vertical des sections utilisent les deux valeurs fluides du frontmatter. Sous 760 px, la marge latérale passe à 24 px ; sous 360 px, à 20 px. Les alignements partagés par les titres, images et actions structurent la page.

La composition livrée V6 suit l’ordre hero, Comment ça marche, Nos métiers, Pourquoi nous choisir, Le mot du fondateur, À propos, matériaux, contact, footer. L’ancienne introduction « Un seul fil. Du début à la fin. », son détail de méthode et l’ancienne section « Pourquoi nous confier votre projet ? » sont supprimés ; la section projets retirée auparavant reste absente. Ce séquençage appartient à cette homepage ; il ne prescrit pas la composition de toutes les futures pages.

Le header est blanc. Le rythme des huit sections est bleu / blanc / minéral / bleu / minéral / blanc / minéral photographique / bleu, puis footer blanc. Le parcours expose cinq étapes numérotées sur blanc. Les métiers utilisent des photos avec un voile bleu et du texte clair sur une section minérale. Les raisons de choix ont leur propre aplat bleu, une image avec action et quatre bénéfices avec icônes vertes. Le fondateur associe une image architecturale légendée et un message sur minéral ; À propos reste blanc. Le fond minéral des matériaux reste visible sur mobile lorsque le texte précède la photo.

Sur grand écran, le hero répartit texte et image en colonnes `.9fr / 1.1fr`, séparées par 48 px. Le parcours utilise cinq colonnes ; les métiers, trois colonnes avec un écart de 24 px. Un métier filtré occupe la largeur disponible et place sa photo à gauche du texte. Les raisons de choix utilisent deux colonnes égales ; le fondateur, `.9fr / 1.1fr` ; À propos, `.85fr / 1.15fr`. Le contact conserve deux colonnes égales.

Sous 1120 px, le CTA du header disparaît et plusieurs espacements se réduisent. Sous 900 px, le menu natif remplace la navigation desktop, À propos passe en une colonne et le parcours en trois colonnes. Sous 760 px, le hero s’empile dans l’ordre message, action, image ; le parcours, les métiers, les raisons de choix, le fondateur et le contact passent en une colonne. Les filtres des métiers forment une grille de deux colonnes ; le métier filtré reprend la composition photographique mobile. Les matériaux placent alors le texte sur fond minéral puis la photo, sans voile.

## Elevation & Depth

Les sections et cartes sont plates : les aplats, photos, bordures et espaces produisent la séparation. La seule ombre est attachée au panneau de navigation mobile ouvert (`0 15px 25px -20px #0009`), pour le détacher du contenu. Les voiles bleus des métiers et de l’image des raisons de choix protègent les textes et actions. Le voile minéral de la section matériaux protège la lisibilité du texte sur grand écran ; ce dernier traitement disparaît sur mobile.

## Shapes

Les boutons, filtres et visuels des sections ont des angles droits. Le hero conserve son bord gauche droit et ses deux grands arrondis à droite, avec les rayons `hero` puis `hero-mobile` du frontmatter. L’image remplit cette forme par recadrage (`object-fit: cover`) ; son point de cadrage est à 53 % horizontalement et 50 % verticalement.

Les icônes sont des flèches SVG ouvertes, à trait fin (1.6), extrémités carrées et jonctions angulaires. La diagonale monte vers la droite ; la découverte du contenu utilise une flèche verticale descendante. Le trait vert sous la promesse est rectiligne et légèrement décalé à droite.

## Components

### Buttons

Les actions sont des liens sémantiques rectangulaires, avec texte gras et flèche à droite. Le bouton principal utilise les rôles `button-primary` et `button-primary-hover`. Sa hauteur minimale est de 56 px et l’écart texte/flèche de 22 px. Le bouton encadré reste transparent sur fond bleu ; son contour prend `outline`, puis le fond devient blanc au survol. La variante du header blanc est plus compacte (50 px minimum, marge intérieure `12px 18px`) et utilise un texte et un contour bleus ; elle devient bleue avec texte blanc au survol.

Les liens d’action pointent vers le contact de la page ou le parcours d’estimation existant. Le formulaire intégré conserve son bouton « Envoyer ma demande » et son raccordement au Contact Form 7 existant ; ses paramètres et limites restent décrits dans `export/INTEGRATION.md`.

### Text links

Le lien de section associe un filet vert inférieur, du texte gras et une flèche. Il offre une hauteur minimale de 44 px. La flèche se déplace de 3 px à droite et de 3 px vers le haut au survol ; ce déplacement est désactivé lorsque la réduction des mouvements est demandée.

### Cards / Containers

Les métiers sont trois liens photographiques rectangulaires, avec titre, description et action sur un voile bleu. Leur hauteur minimale est de 480 px sur grand écran, avec 28 px de marge intérieure ; sur mobile, 430 px et 26 px. La photo s’agrandit au survol (`scale(1.035)`, 600 ms), sans déplacer la mise en page ; cet effet disparaît en mouvement réduit.

Les filtres sont des boutons rectangulaires de 48 px minimum, blancs avec texte bleu et contour clair. Le filtre actif devient bleu avec texte blanc ; le survol renforce le contour. Ils exposent leur sélection avec `aria-pressed` et annoncent le métier affiché dans une zone de statut. Sans JavaScript, les boutons restent masqués et les trois liens de métiers restent visibles.

### Navigation

Le header blanc conserve le logo SVG complet à gauche, puis les liens « Comment ça marche », « Nos métiers », « À propos », « Matériaux » et l’action encadrée sur grand écran. Les liens se soulignent au survol. Le menu mobile utilise un élément natif `details`, un panneau blanc avec texte bleu et une action verte ; il ajoute les accès aux raisons de choix et au fondateur. Le symbole à deux traits devient une croix à l’ouverture. Le script le ferme au choix d’un lien, au clic extérieur, à Échap et au retour en affichage desktop. Échap rend le focus à la commande.

### Process and editorial sections

Le parcours « Comment ça marche » expose cinq étapes dans une liste ordonnée : échange sur le projet, conception et chiffrage, validation des choix, coordination du chantier et réception selon la mission. Chaque numéro bleu est souligné de vert ; un filet clair sépare les étapes. La progression reste visible sans dépliage.

Les quatre bénéfices des raisons de choix utilisent une liste de définitions, avec icônes vertes et filets sur bleu. Le message du fondateur utilise une citation et une signature sous un filet vert foncé ; le visuel architectural est légendé « Visuel d’ambiance ». Les informations du footer conservent leur `details` / `summary` et se développent dans le flux, sans modale.

### Shared interaction states

Le focus clavier est matérialisé par un contour de 3 px dans la couleur courante, décalé de 6 px. Les transitions courantes durent 220 ms, avec la courbe définie dans le sidecar. Le défilement doux et les transitions sont désactivés sous `prefers-reduced-motion`. Le mode de couleurs forcées rétablit des contours système pour les boutons, le menu et les services.

## Do's and Don'ts

### Do:

- **Do** conserver le logo SVG officiel complet, sans filtre, recadrage ni recoloration.
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
