# Page « Nos matériaux » — intégration V3

4 novembre 2026. La page fournie dans `nos materieux.zip` est intégrée à l’export sous `nos-materiaux.html`, avec `materials.css` et `materials.js`.

## Contenu et navigation

La composition fournie est conservée : introduction, galerie de sept matières, fiches détaillées, panorama des innovations, conseils de choix et invitation au contact. Les textes et huit visuels proviennent du ZIP fourni, sans nouvelle génération d’image. Les photographies restent présentées comme illustrations ; leur origine de production n’a pas été précisée dans le ZIP.

Le header, le footer, le logo intact et les polices locales sont ceux de la homepage actuelle. La typographie, les espacements, les labels et les contrastes des annotations sont adaptés au même système. Les anciens widgets d’édition et les scripts des modales de contact de la sauvegarde ne font pas partie de l’export.

Les liens « Matériaux » du menu, du footer et du bloc matériaux de la homepage ouvrent la page locale. Depuis celle-ci, les actions de contact rejoignent `index.html#contact`, avec le formulaire déjà intégré. Le panorama documentaire conserve son lien vers la page du site D-SIGN existant. Aucun nouvel envoi, formulaire ou endpoint n’est créé.

## Galerie et accessibilité

- Sept sélections : bois, béton, brique, pierre naturelle, métal, plâtre et terre crue.
- Sur desktop, la galerie conserve le parcours photographique au défilement et la sélection directe.
- Sur mobile, fenêtre basse ou préférence de mouvement réduit, la sélection est directe, sans défilement forcé. La liste mobile défile horizontalement ; les touches directionnelles, Home et End fonctionnent aussi.
- Les fiches s’ouvrent dans un dialogue natif, se ferment avec Échap ou le bouton et rendent le focus au déclencheur.
- Sans JavaScript, une liste de sept matières avec photos et descriptions remplace la galerie ; les innovations restent des dépliants natifs.
- La provenance de chaque visuel est conservée dans son fichier `.webp.json`. Aucun prompt de génération original n’a été fourni : ces notices décrivent la source reçue, sans inventer de prompt.

## Vérifications réalisées

Chromium : 320, 390, 768, 1024, 1440 et 1920 px. Aucun débordement horizontal, visuel manquant, ancre locale morte ou erreur navigateur détecté. Les sept sélections et images correspondantes, les fiches, le retour du focus, le clavier, un dépliant d’innovation, le mode sans JavaScript et le parcours homepage → matériaux → formulaire ont été vérifiés.

axe-core : aucune violation automatisée détectée dans les vues contrôlées à 390 et 1440 px. Captures desktop/mobile et états de galerie/dialogue inspectés. Cela ne remplace pas une recette sur appareils physiques ou une session complète de lecteur d’écran.

La revue indépendante Impeccable a demandé deux corrections : légendes placées sous les titres et provenance des photos précisée dans les informations du footer. Après nouvelles captures, les deux corrections ont été évaluées comme résolues (`ship`, à cette portée d’intégration statique). Aucune recette WordPress ou réception d’e-mail réelle n’est revendiquée.

Le détecteur Impeccable a été exécuté une fois. Les légendes blanches des photos ont reçu un fond bleu assurant leur contraste. Les photos non sélectionnées sont volontairement transparentes dans la pile de la galerie ; les zones photo sont volontairement sans marge intérieure. La charte de référence n’est pas réécrite pour cette extension.

## WordPress

Reprendre cette page dans un template ou des blocs administrables. Charger `styles.css` et `script.js`, puis les deux fichiers `materials.*` uniquement sur la page concernée. Les chemins locaux de navigation devront devenir les permaliens WordPress correspondants. Le formulaire demeure celui de la homepage et suit les instructions de `INTEGRATION.md`.

L’export reste statique, sans thème installé ni publication. Les tests de cette intégration n’ont envoyé aucun message réel.
