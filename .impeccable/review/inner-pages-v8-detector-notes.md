# Détecteur et vérifications V8

Le détecteur mécanique a été exécuté une fois sur les cinq pages et leurs scripts/styles modifiés. Le rapport brut est conservé dans `inner-pages-v8-detector.json`.

- Aucun signalement de contraste dans ce rapport final. Axe a aussi vérifié les cinq pages à 390 et 1440 px, ainsi que la galerie ouverte et les FAQ dépliées. Le libellé de l’étape courante est bleu avec soulignement vert sur minéral ; un vert insuffisamment contrasté pour ce petit texte a été corrigé pendant la réalisation.
- Instrument Sans et les accents de titres en dégradé sont des choix de charte déjà approuvés ; ils restent conservés.
- Les espacements proviennent des classes partagées `section-space` et `container`, puis des composants locaux. Les alertes statiques sur les wrappers ont été confrontées au rendu et aux contrôles de débordement.
- Les tailles locales des titres, filtres, légendes et repères de progression prolongent les rôles du socle. Le détecteur ne retrouve pas toutes ces valeurs dans le seul frontmatter de la charte ; elles sont délibérées et ne justifient pas une remise à plat de la typographie.
- Les nuances de backdrop et d’ombre restent des transparences du bleu ou du noir de lecture de modale, sans nouvelle palette d’interface.

Le rapport navigateur couvre 40 combinaisons page/largeur et les états interactifs. Après réussite de la matrice, le test des liens de contact a été repris avec une attente explicite du préremplissage pour éviter une lecture avant la fin du script différé ; les ressources UI inchangées ont été vérifiées avant cette reprise. Aucun résultat de matrice non exécuté n’est revendiqué.

Les tests automatisés et la revue visuelle ne constituent pas une certification ou une recette sur appareils physiques et lecteur d’écran. Aucun message réel n’a été envoyé.
