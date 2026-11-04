# Catalogue des métiers — V7

Le propriétaire a demandé de reprendre les onze catégories et chaque exemple du catalogue Kovan.fr, sans rester limité aux trois entrées historiques de D-SIGN. La V7 comporte **61 exemples** :

| Catégorie | Exemples |
| --- | ---: |
| Chauffage & Climatisation | 8 |
| Isolation | 5 |
| Menuiseries | 3 |
| Salle de bain & Cuisine | 7 |
| Aménagement intérieur | 7 |
| Adaptation du logement | 7 |
| Toiture & Façade | 5 |
| Extérieur | 6 |
| Gros œuvre | 3 |
| Extension & Surélévation | 6 |
| Rénovation globale | 4 |

`assets/trades/catalogue.json` est la source structurée du catalogue. `index.html` contient ses groupes et cartes en HTML statique : aucun framework ni téléchargement de données n’est requis pour afficher les exemples. Le générateur conservé dans le dépôt peut régénérer ce bloc depuis le JSON, mais le site livré n’en dépend pas.

## Filtrage et contact

Avec JavaScript, Chauffage & Climatisation est sélectionné au chargement. Les onze boutons sélectionnent un groupe, portent `aria-pressed` et annoncent le nombre d’exemples dans une zone de statut. La sélection reste sur le bouton ; les liens de cartes sont accessibles au clavier. Sans JavaScript, les boutons inactifs sont masqués et les onze groupes restent visibles.

Chaque carte rejoint `#contact`. Le message peut être préparé avec le titre choisi, sans envoyer de données. Une nouvelle sélection remplace un précédent texte automatique encore intact ; elle ne remplace jamais un message personnalisé. Le service Contact Form 7, ses champs et sa validation restent ceux du formulaire existant. Aucun envoi réel n’a été effectué pour cette passe.

## Contenus et images

Les intitulés techniques ont été relevés dans les onze filtres de [Kovan.fr](https://kovan.fr/) le 4 novembre 2026, conformément à la demande du propriétaire. Les courtes descriptions ont été rédigées pour D-SIGN. Les affirmations propres à Kovan — certifications, réseau, garanties, financement, logiciel ou devis gratuit — ne sont pas reprises comme faits D-SIGN.

Les **52 illustrations distinctes**, réutilisées pour certains exemples comme sur la référence, sont servies localement sous `assets/trades/`. Chaque `.webp` possède un fichier `.webp.json` indiquant l’URL source exacte, la transformation et le SHA-256 du fichier livré. Les fichiers sont redimensionnés à 800 px maximum et compressés en WebP. Les images sont des illustrations de types de travaux ; elles ne constituent pas un portfolio de réalisations D-SIGN. Cette distinction est visible dans la page.

## Portrait de Kevin HUART

Le propriétaire a choisi une photo précise dans le chat. La même prise de vue a été retrouvée sur la [page officielle de l’agence H2Z](https://h2z-immobilier.fr/agence/), avec le nom Kevin HUART. Source : `https://h2z-immobilier.fr/wp-content/uploads/2024/02/IMG_3697-1.jpg`.

L’original est conservé dans le dépôt sous `assets/people/kevin-huart-source.jpg`. La livraison contient une version WebP locale de 1200 × 1600 px et sa provenance. Seuls l’orientation et le redimensionnement/compression sont appliqués au fichier ; le cadrage et le miroir sont gérés en CSS pour retrouver le portrait fourni. Aucun visage n’a été généré ni retouché. Le cartouche présente Kevin HUART comme fondateur de D-SIGN, selon l’identité confirmée par le propriétaire.

Le message du fondateur reste celui adapté pour D-SIGN à la demande du propriétaire en V6. Le symbole de citation est un SVG géométrique ; il n’introduit aucun média tiers. Les règles visuelles V7 sont documentées dans `DESIGN.md`.
