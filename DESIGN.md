---
name: D-SIGN GBS
description: Système visuel de la homepage statique, extrait de l’export validé.
colors:
  navy: "#1c1c58"
  green: "#70c875"
  green-hover: "#8ad38e"
  green-ink: "#337f40"
  white: "#ffffff"
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

La page alterne des aplats bleu profond et des sections blanches, avec de grands titres gras, des photographies architecturales et des actions vertes. Le logo SVG officiel reste entier et intact. L’image du hero, au bord gauche droit et au bord droit arrondi, constitue la forme distinctive ; les flèches géométriques relient les actions entre elles. L’objectif confirmé est une amélioration modérée de cohérence et de structure dans cette direction.

**Key Characteristics:**

- Bleu profond, blanc et vert issus de la direction retenue.
- Une seule famille sans empattements, en normal et gras.
- Grandes images séparées du texte vivant ; silhouette en D réservée au hero existant.
- Liens rectangulaires ou soulignés, flèches fines et focus clavier visible.

## Colors

Les clés du frontmatter reprennent les noms des variables CSS. Leurs valeurs sont normatives pour cette implémentation.

### Primary

- **Bleu profond — `navy`** : fond du header, du hero, de l’approche et du contact ; texte principal sur blanc et texte des actions vertes.

### Secondary

- **Vert clair — `green`** : boutons principaux, trait sous la promesse, bord inférieur du hero et soulignement des liens.
- **Vert de survol — `green-hover`** : état survolé des actions à fond vert.
- **Vert foncé — `green-ink`** : flèches des services et des projets sur blanc, ainsi que bordure des services au survol. Garder cette variante pour ces éléments fins sur fond clair.

### Neutral

- **Blanc — `white`** : sections claires, texte sur bleu et survol du bouton encadré.
- **Texte secondaire — `muted`** : mentions d’images, précision sous les projets et bas de page sur blanc.
- **Texte secondaire sur bleu — `on-dark-muted`** : textes d’accompagnement sur les aplats foncés.
- **Séparateur clair — `line`** : contours des services et séparation du footer.
- **Séparateur sur bleu — `line-dark`** : filets de la séquence d’accompagnement.
- **Contour sur bleu — `outline`** : bouton encadré et commande du menu mobile.

Les voiles blancs sur la photo des matériaux et les fonds d’attente des images restent des traitements locaux définis dans le CSS, pas une palette supplémentaire. Aucune gamme tonale n’est définie dans l’export.

## Typography

**Display Font:** Instrument Sans, avec Arial puis sans-serif en repli.

**Body Font:** la même famille. Les fichiers WOFF2 locaux couvrent les graisses normale (400) et grasse (700), sans dépendance à une police distante. La famille du logo reste celle de l’asset SVG.

### Hierarchy

- **Display** : promesse du hero, rôle `display`. Les adaptations réelles sont `clamp(50px, 5.3vw, 70px)` sous 1120 px, `clamp(48px, 6.6vw, 62px)` sous 900 px, `clamp(48px, 9.4vw, 72px)` sous 760 px et 44 px sous 360 px.
- **Headline** : titres de sections, rôle `headline` ; ils deviennent `clamp(39px, 7.4vw, 56px)` sous 760 px. Le titre de contact possède une taille propre, de `clamp(48px, 5.7vw, 84px)` sur grand écran à `clamp(46px, 10vw, 68px)` sur mobile.
- **Title** : noms des expertises, rôle `title`. Les légendes de projets sont plus petites (21 px, interligne 1.25, approche `-.02em` ; 20 px sur mobile).
- **Body** : rôle `body`. Les introductions utilisent 18 px et un interligne de 1.6, puis 17 px sur mobile. Les paragraphes d’introduction sont limités à 39 caractères environ sur grand écran ; certaines versions intermédiaires vont jusqu’à 48 caractères.
- **Label** : boutons et liens, rôle `label`. La navigation desktop utilise 14 px gras ; le menu mobile, 17 px. Les mentions d’images sont à 13 px, le bas de page à 12 px.

Conserver les retours à la ligne éditoriaux des grands titres. Ne pas transformer les paragraphes ou les informations de contact en grandes capitales.

## Layout

Le conteneur central a une largeur maximale de 1440 px. La marge latérale et l’espacement vertical des sections utilisent les deux valeurs fluides du frontmatter. Sous 760 px, la marge latérale passe à 24 px ; sous 360 px, à 20 px. Les alignements partagés par les titres, images et actions structurent la page.

La composition livrée suit l’ordre hero, À propos, Pourquoi nous confier votre projet, services, matériaux, contact, footer. La section projets a été retirée à la demande du client. Ce séquençage appartient à cette homepage ; il ne prescrit pas la composition de toutes les futures pages.

Sur grand écran, le hero répartit texte et image en colonnes `.9fr / 1.1fr`, séparées par 48 px. Les expertises et l’approche associent une introduction à une zone visuelle plus large. Les projets sont en deux colonnes, avec un décalage vertical de 24 px sur le second. Le contact utilise deux colonnes égales.

Sous 1120 px, le CTA du header disparaît et plusieurs espacements se réduisent. Sous 900 px, le menu natif remplace la navigation desktop ; les expertises et l’approche passent en une colonne. Sous 760 px, le hero s’empile dans l’ordre message, action, image, les projets et le contact passent en une colonne, et le décalage du second projet disparaît. Les matériaux placent alors le texte sur blanc puis la photo, sans voile. Sous 360 px, chaque ligne d’expertise place sa photo au-dessus du texte.

## Elevation & Depth

Les sections et cartes sont plates : les aplats, photos, bordures et espaces produisent la séparation. La seule ombre est attachée au panneau de navigation mobile ouvert (`0 15px 25px -20px #0009`), pour le détacher du contenu. Le voile dégradé de la section matériaux protège la lisibilité du texte sur grand écran ; ce traitement disparaît sur mobile.

## Shapes

Les boutons, services et images de projets ont des angles droits. Le hero conserve son bord gauche droit et ses deux grands arrondis à droite, avec les rayons `hero` puis `hero-mobile` du frontmatter. L’image remplit cette forme par recadrage (`object-fit: cover`) ; son point de cadrage est à 53 % horizontalement et 50 % verticalement.

Les icônes sont des flèches SVG ouvertes, à trait fin (1.6), extrémités carrées et jonctions angulaires. La diagonale monte vers la droite ; la découverte du contenu utilise une flèche verticale descendante. Le trait vert sous la promesse est rectiligne et légèrement décalé à droite.

## Components

### Buttons

Les actions sont des liens sémantiques rectangulaires, avec texte gras et flèche à droite. Le bouton principal utilise les rôles `button-primary` et `button-primary-hover`. Sa hauteur minimale est de 56 px et l’écart texte/flèche de 22 px. Le bouton encadré reste transparent sur fond bleu ; son contour prend `outline`, puis le fond devient blanc au survol. La variante du header est plus compacte (50 px minimum, marge intérieure `12px 18px`).

L’action finale de contact occupe la largeur de sa colonne, avec texte et flèche centrés et une hauteur minimale de 78 px (68 px sur mobile). Les boutons pointent vers le contact de la page ou le parcours de demande existant. Il n’y a pas de formulaire dans cet export.

### Text links

Le lien de section associe un filet vert inférieur, du texte gras et une flèche. Il offre une hauteur minimale de 44 px. La flèche se déplace de 3 px à droite et de 3 px vers le haut au survol ; ce déplacement est désactivé lorsque la réduction des mouvements est demandée.

### Cards / Containers

Les expertises sont trois liens horizontaux bordés, image à gauche et texte à droite, séparés de 14 px. La marge intérieure du texte sur grand écran est `26px 44px 26px 26px`. Au survol, le bord prend `green-ink`, le fond devient `#f7faf6` et la flèche avance de 2 px en diagonale. La photo et le contenu s’adaptent aux ruptures décrites dans Layout.

Les projets sont des liens ouverts, sans contour ni fond de carte ajouté : photo rectangulaire, légende et flèche, puis mention d’ambiance. La photo s’agrandit légèrement au survol (`scale(1.025)`, 600 ms), sans déplacer la mise en page ; cet agrandissement disparaît en mouvement réduit.

### Navigation

Le header conserve le logo SVG complet à gauche, puis les liens de section et l’action encadrée sur grand écran. Les liens se soulignent au survol. Le menu mobile utilise un élément natif `details`, un panneau bleu et une action verte ; le symbole à deux traits devient une croix à l’ouverture. Le script le ferme au choix d’un lien, au clic extérieur, à Échap et au retour en affichage desktop. Échap rend le focus à la commande.

### Native disclosures

Le détail de méthode et les informations du footer utilisent aussi `details` / `summary`. Le détail de méthode reprend le lien à flèche ; la flèche tourne de 90 degrés quand il est ouvert. Ses trois étapes restent du texte vivant, avec numéros verts. Les informations du site développent leur contenu dans le flux, sans modale.

### Shared interaction states

Le focus clavier est matérialisé par un contour de 3 px dans la couleur courante, décalé de 6 px. Les transitions courantes durent 220 ms, avec la courbe définie dans le sidecar. Le défilement doux et les transitions sont désactivés sous `prefers-reduced-motion`. Le mode de couleurs forcées rétablit des contours système pour les boutons, le menu et les services.

## Do's and Don'ts

### Do:

- **Do** conserver le logo SVG officiel complet, sans filtre, recadrage ni recoloration.
- **Do** reprendre le bleu, le vert, les titres gras et les flèches de la direction choisie.
- **Do** utiliser le vert foncé pour les flèches des services et projets sur blanc.
- **Do** préserver l’image en D du hero, les alignements communs et le texte vivant.
- **Do** garder des focus visibles, une navigation clavier fonctionnelle et la prise en compte du mouvement réduit.
- **Do** conserver la qualification des photos comme visuels d’ambiance lorsqu’elles sont utilisées ainsi.

### Don't:

- **Don't** remplacer cette direction par les palettes ou motifs des anciennes explorations A/B/C.
- **Don't** réintroduire le bouton d’interface « Modifier le site » dans la homepage.
- **Don't** présenter les images illustratives comme des projets livrés ou des membres de l’équipe.
- **Don't** inventer une police source, un comportement mobile observé dans la capture ou des composants absents de l’export.
