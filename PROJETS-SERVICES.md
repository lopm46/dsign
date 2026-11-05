# Projets et services — V8

La V8 ajoute cinq pages dans la charte courante, sans dépendance de framework ni étape de build pour les consulter :

| Page livrée | Source de contenu |
| --- | --- |
| `nos-projets.html` | https://dsign-gbs.fr/nos-projets/ |
| `nos-services.html` | https://dsign-gbs.fr/nos-services/ |
| `renovation.html` | https://dsign-gbs.fr/renovation/ |
| `extension.html` | https://dsign-gbs.fr/extension/ |
| `construction.html` | https://dsign-gbs.fr/construction/ |

Sources inspectées le 4 novembre 2026 dans Chromium et en HTML public. `pages.css` et `pages.js` portent les composants propres à ces pages ; `styles.css` et `script.js` restent le socle partagé. Le header et le footer des sept pages relient désormais les services, projets, métiers, matériaux et contact.

## Portfolio

Le HTML source comporte **neuf fiches publiées**, dont quatre seulement apparaissent dans le premier rendu : IDs 2335, 2353, 2352, 2351, 2350, 2349, 2348, 2347 et 2346. Les titres sont conservés dans `assets/projects/projects.json`, avec `sourceTitle` pour la graphie d’origine. La casse, l’accent de « Rénovation » et la coquille « Berk » → « Berck » sont normalisés pour la lecture.

La source applique les trois classes de catégories à chaque fiche. La V8 classe les fiches selon leur **intitulé explicite** : trois agrandissements, trois constructions, trois rénovations. Les doublons de titres/communes correspondent à des IDs distincts dans la source ; aucun nom distinct ou lieu supplémentaire n’est inventé.

La galerie source réutilise les mêmes trois médias pour toutes les fiches. Deux vues de conception lisibles sont conservées et servies localement ; le troisième média, un fond volontairement flouté, est écarté de la galerie. Aucune photographie différente n’est substituée pour faire croire à une réalisation distincte. La présentation conserve la mention **« Vues de conception »**, sans dates, surfaces, prix ou statut de livraison ajoutés. Chaque WebP possède sa provenance URL et son SHA-256.

Le portfolio utilise désormais une mosaïque masonry compacte : trois colonnes CSS sur ordinateur, deux sous 1120 px et une sous 760 px, avec des hauteurs d’image variées. Les filtres conservent cette présentation, sans projet prenant toute la largeur. Le flux visuel suit les colonnes et l’ordre du DOM reste cohérent pour la lecture et le clavier.

Les filtres « Tous les projets », « Agrandissement », « Construction » et « Rénovation » portent `aria-pressed`, annoncent le nombre de résultats et permettent un lien direct `?type=renovation`. Les galeries utilisent un `dialog` natif : boutons précédent/suivant, flèches du clavier, Échap, fermeture au clic extérieur et retour du focus. Les liens des pages services peuvent ouvrir directement une fiche via `#projet-ID` ; une catégorie incompatible est corrigée pour que la fiche reste visible à la fermeture.

Sans JavaScript, les neuf fiches restent visibles et leurs liens ouvrent une image locale. Les filtres inactifs sont masqués. Les deux vues sont partagées conformément à l’état de la source ; pour des galeries propres à chaque chantier, il faudra fournir les associations image/fiches correspondantes.

## Trois services

Les pages de rénovation, extension et construction reprennent la substance des pages officielles : définition du service, usages possibles, dix besoins, accompagnement, projets associés et contact. Le texte est réécrit pour rester concret et lisible. Les résultats garantis, économies chiffrées, financements, labels et promesses de rentabilité ne sont pas ajoutés. Le périmètre des travaux et du suivi reste lié à la mission convenue.

Les images du hero prolongent les visuels d’ambiance de la homepage, explicitement légendés. Les projets associés utilisent les vues du portfolio officiel. Les questions fréquentes sont des explications éditoriales fondées sur les prestations déjà annoncées, sans nouvelle garantie ou délai de réponse.

Les CTA rejoignent le formulaire existant avec `index.html?projet=renovation#contact` (ou `extension` / `construction`). `script.js` accepte uniquement ces trois valeurs et prépare le message s’il est vide. Il ne remplace pas une saisie personnelle, ne soumet pas le formulaire et ne modifie pas le service Contact Form 7. Aucun message réel n’a été envoyé pendant la réalisation.

## Parcours vertical des services

Le hub conserve les cinq étapes de la source et la classe `.progress-container` : prise de contact, création des plans, chiffrage, remise du devis et réalisation. Le repère est désormais vertical et fixe pendant la lecture. Une ligne se remplit selon la position réelle du défilement ; l’étape courante porte `aria-current="step"`. Le calcul est réalisé au plus une fois par frame et ne détourne ni la molette ni les gestes tactiles.

Les liens utilisent le défilement doux natif. Les numéros du rail mesurent 72 px sur ordinateur (64 px sur tablette), avec des libellés de 18 px et un repère blanc animé vers l’étape courante. Les images des étapes sont limitées à 600 × 280 px. Sur mobile, une barre horizontale sticky de cinq numéros libère l’espace de lecture ; les libellés restent accessibles aux technologies d’assistance. Les images ont une transition discrète au changement d’étape, sans masquer le contenu. `prefers-reduced-motion` supprime le défilement doux et les effets ; sans JavaScript, toutes les étapes et leurs ancres restent présentes. Les cinq illustrations de méthode proviennent de la page officielle et ne sont pas présentées comme des portraits d’équipe.

## Maintenance et WordPress

Les données éditoriales sont dans `assets/services/services.json`, `assets/services/method.json` et `assets/projects/projects.json`. Le script du dépôt `scripts/generate-pages.py` peut régénérer les cinq pages et la navigation des sept pages ; la livraison HTML reste autonome. Éditer les données puis régénérer évite une divergence entre les pages.

Pour WordPress, reprendre les blocs dans les templates appropriés, charger les feuilles/scripts sur les pages concernées et remplacer les URLs `.html` par les permaliens du site. Les filtres/galeries doivent recevoir les données réelles du portfolio. Il s’agit toujours d’un export statique publié sur GitHub Pages, pas d’une installation de thème sur le domaine WordPress.

Les contrôles et limites de la V8 sont consignés dans `VERIFICATION.md` et les rapports du dépôt.
