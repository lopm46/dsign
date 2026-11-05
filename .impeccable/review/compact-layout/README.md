# D-SIGN — proportions, masonry et parcours des services

Demande du 5 novembre 2026 : remplacer le logo de navigation par D-SIGN en dégradé ; réduire légèrement le hero en D, les grands titres et les images ; rendre Nos projets plus compact en masonry ; agrandir et mieux intégrer les cinq étapes à gauche de Nos services avec une progression fluide.

À 1440 px, les mesures passent de 77,76 à 66,24 px pour le h1 d’accueil, de 66,24 à 54,72 px pour les titres de section et de 683 à 600 px pour l’image en D. Le conteneur est plafonné à 1240 px. Les images éditoriales et les cartes sont plus compactes ; les étapes illustrées passent d’environ 435 à 279 px de haut. Les numéros latéraux passent de 48 à 72 px, avec des libellés de 18 px et un repère actif blanc qui glisse entre les étapes. Sur mobile, les cinq étapes deviennent une barre horizontale sticky qui conserve toute la largeur de lecture.

Le portfolio utilise des colonnes CSS masonry (3 / 2 / 1), des images de hauteurs différentes, aucun projet pleine largeur et les mêmes filtres/galeries. La référence officielle a été inspectée à https://dsign-gbs.fr/nos-projets/ et capturée dans reference-projects.png après chargement et défilement pour révéler les tuiles. Le principe est repris dans la charte existante ; les données et les deux vues de conception communes restent celles du portfolio livré.

Les sept en-têtes sont partagés et affichent le nom D-SIGN en texte vivant dégradé ; le SVG officiel du footer et des assets reste inchangé (SHA-256 vérifié). Les URLs des CSS et JS locaux sont versionnées par leur contenu. Le générateur renouvelle ces références et le déploiement vérifie leur fraîcheur. Les fichiers de charte et les consignes du dépôt reflètent l’exception de marque explicitement demandée pour la navigation.

## Vérifications

- 56 combinaisons : sept pages à 320, 390, 760, 768, 900, 1024, 1440 et 1920 px ; aucun débordement horizontal, grand titre tronqué, image manquante ou erreur JavaScript.
- Filtres du portfolio et absence de chevauchement des tuiles à chaque largeur ; galerie, image suivante, Échap et retour du focus.
- Cinq ancres de méthode, synchronisation `aria-current`, repère fixe visible à toutes les largeurs ; défilement doux normal et cinq étapes visibles sur une fenêtre de 650 px de haut.
- Menu mobile, portfolio de neuf fiches et méthode de cinq étapes sans JavaScript.
- Huit contrôles Axe WCAG A/AA, sur accueil/projets/services/matériaux à 390 et 1440 px : aucune violation.
- Régénération des sept pages sans différence de contenu final ; SVG intact ; contrôle des versions CSS/JS.

Les captures desktop/mobile montrent les états début et étape 3 de la méthode, la grille masonry complète, le hero et les pages éditoriales. report.json contient les mesures. Les avertissements du détecteur concernent la police et les gradients retenus, des styles existants hors rampe déclarée, le rayon de la capsule de progression, des couleurs photographiques et des inférences de contraste sans le contexte réel de fond. Les captures et les contrôles navigateur sont l’évidence de rendu.

Aucune archive ZIP produite.
