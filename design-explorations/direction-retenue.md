# Direction retenue par le client

Date : 3 novembre 2026.

**Référence choisie :** https://dsign-architecture.vic60400.chatgpt.site/

Le client a indiqué « je vais prendre ça » en donnant ce lien. Cette référence remplace les pistes A/B/C de l’exploration V2 comme choix de direction. Ne pas lui attribuer une correspondance avec A, B ou C sans avoir vu le site.

La contrainte du logo reste applicable : conserver le SVG officiel intégral, [référence locale](../assets/brand/dsign-logo.svg). Le contexte métier, les deux publics et la cible WordPress restent ceux du [cadrage V2](cadrage-v2.md). Aucune publication n’est autorisée par ce choix.

## Référence visuelle maintenant disponible

Le client a ensuite fourni https://i.imgur.com/KfDjzWy.jpeg. La capture complète a été téléchargée en HTTP 200, ouverte et examinée le 3 novembre 2026. Copie originale, sans retouche : [direction-retenue-desktop.jpeg](references/direction-retenue-desktop.jpeg), 2980 × 6584 pixels. Elle constitue la référence visuelle retenue pour la suite, à la place des essais A/B/C.

Le site d’origine reste protégé par connexion ChatGPT (HTTP 401 constaté précédemment). La capture permet de relever l’expression et la composition desktop, mais pas de connaître le CSS source, les familles de polices exactes, les états interactifs ou le comportement mobile. Ces éléments devront être construits et vérifiés dans notre implémentation. Un export n’est plus nécessaire pour commencer à travailler la composition ; les médias originaux restent à récupérer ou à remplacer honnêtement pour une livraison complète.

## Relevé de la capture

| Élément | Observation visuelle à préserver |
|---|---|
| Couleurs | Bleu profond dominant, vert clair pour les actions et accents, blanc pour les sections de respiration. Échantillons JPEG approximatifs : bleu `#1d1c58`, vert `#70c874`, blanc `#ffffff`. Ce ne sont pas des tokens extraits du CSS. Les couleurs du SVG officiel restent celles du fichier original. |
| Logo | Logo complet en haut à gauche et dans le pied de page. Utiliser notre SVG officiel intact, sans redessiner le logo à partir de la capture. |
| Typographie | Sans empattements, titres très gras et amples, lecture resserrée, corps sobre et lisible. La famille exacte n’est pas identifiée depuis l’image. |
| En-tête | Logo, « Nos expertises », « Nos projets », « Notre approche », « Matériaux », action de contact encadrée. |
| Hero | Composition à deux zones : texte à gauche, grande image à droite. Bord gauche de l’image droit et volume arrondi à droite évoquant un D. |
| Message du hero | « L’espace, à votre mesure. » avec accent vert sous le titre ; « Construire · Agrandir · Rénover » ; texte d’accompagnement et CTA « Commençons votre projet ». |
| Services | Section blanche ; grand titre « Vous imaginez. Nous donnons forme. » à gauche ; trois lignes image/texte à droite : Rénovation, Extension, Construction. |
| Projets | Titre « Des espaces qui changent la vie. », action d’exploration et deux grandes images avec légendes courtes. |
| Accompagnement | Section bleue : « Un seul fil. Du début à la fin. », image de travail sur plans et séquence Conception / Budget / Suivi de chantier. |
| Matériaux | Détail photographique du bâti en fond ; texte bleu et lien « Nos matériaux ». |
| Contact | Section bleue, titre « Et maintenant, votre projet. », grand CTA vert « Parlons-en », téléphone et e-mail. |
| Footer | Fond blanc, logo complet, navigation, localisation, copyright et mention « Visuels d’ambiance à titre d’illustration ». |

## Limites et décisions pour la reprise

- Conserver cette direction entière ; ne pas la fusionner avec les palettes ou les motifs des anciennes explorations.
- Le bouton flottant « Modifier le site » appartient à l’interface de la plateforme et n’est pas un composant de la homepage à reproduire.
- La capture sert de référence de design. Ses maisons, intérieurs et mains sur un plan ne deviennent pas des réalisations, des locaux ou une équipe D-SIGN attestés. Conserver leur statut illustratif ou utiliser des médias réels attribués.
- Le choix visuel ne transforme pas « de bout en bout », « de la conception aux finitions » ou la localisation affichée en garanties nouvelles. Les périmètres de mission et la zone restent à confirmer selon le cadrage.
- La capture exprime surtout l’habitat. L’implémentation doit garder les particuliers et professionnels explicitement présents sans modifier arbitrairement le système choisi.
- Construire la version mobile selon cette grammaire : logo entier lisible, navigation fonctionnelle, ordre message/action/image, titres fluides et aucune coupure. Aucun comportement mobile n’est présenté comme observé.
- Reprendre le rendu avec du texte vivant et des images séparées ; ne pas intégrer la capture entière comme une page aplatie.

Les essais A/B/C restent de l’historique. À la demande suivante du client, cette référence a été reconstruite et affinée dans [l’export HTML/CSS](../export/index.html). Les cinq visuels d’ambiance ont été recréés avec leurs prompts et leur provenance, le logo original est conservé. Voir [la livraison et ses limites](../export/README.md). Aucune publication n’est effectuée.
