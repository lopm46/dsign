# Analyse des sections et rythme des fonds — V5

4 novembre 2026. L’ordre des six sections, les textes, le hero, le logo, les photos et le formulaire restent conservés.

## Diagnostic

Le hero et À propos avaient le même fond bleu : la présentation se confondait avec la promesse initiale. Les raisons de choix, les services et la partie texte des matériaux enchaînaient ensuite trois fonds blancs. Les raisons de choix n’avaient plus de marge intérieure inférieure après leur extraction en section dédiée. La lecture passait donc d’un très long ensemble foncé à un très long ensemble clair, avec des limites peu lisibles.

## Traitement par section

| Section | Structure conservée | Fond et rôle |
| --- | --- | --- |
| Hero | Promesse à gauche, photo en D à droite, CTA | Bleu inchangé : ouverture forte et reconnaissable. |
| À propos | Présentation à gauche, photo et méthode à droite | Blanc : respiration après le hero et lecture des paragraphes. Texte bleu/gris, accents vert foncé lisibles sur blanc. |
| Pourquoi D-SIGN | Titre, trois raisons, signature commune | Bleu : séquence distincte de réassurance, titres verts et texte clair. Espacement vertical complet rétabli. |
| Services | Introduction puis trois lignes image/texte | Blanc : scan des trois prestations après les raisons de choix. |
| Matériaux | Texte et lien, photo de matières | Minéral clair et photo : transition tactile, distincte des services blancs. Fond clair conservé sous le texte sur mobile. |
| Contact | Informations et formulaire | Bleu inchangé : conclusion avec action verte, champs blancs et contraste fort. |

Le nouveau neutre `--color-mineral: #f3f0ea` reprend la tonalité claire de l’enduit photographié. Il sert uniquement de surface aux matériaux. La palette d’accent, les polices et la silhouette du hero restent les mêmes. Les couleurs de texte, de filets et de numéros de méthode sont remappées avec le fond À propos ; les liens conservent leurs styles et focus.

## Vérifications

Six largeurs : 320, 390, 768, 1024, 1440 et 1920 px. Ordre inchangé ; couleurs de surface et espacements vérifiés dans les styles calculés ; aucun débordement, média manquant ou ancre morte. Captures desktop/mobile inspectées. Scan axe à 390 et 1440 px avec la méthode dépliée : aucune violation automatisée détectée. Aucun envoi de formulaire.

Les fichiers `DESIGN.md` et le sidecar décrivent les nouveaux rôles de surface et le neutre minéral. Les versions précédentes restent disponibles comme historique. Ces contrôles ne remplacent pas une recette complète sur appareils physiques et lecteur d’écran.

La revue indépendante Impeccable valide le rythme et les limites visibles. Sa seule correction concernait une ancienne mention de fond blanc mobile dans les deux copies de la charte ; elle est résolue (`ship` à cette portée), sans modification visuelle supplémentaire.
