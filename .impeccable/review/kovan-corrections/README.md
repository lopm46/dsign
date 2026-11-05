# Corrections après les captures du propriétaire — 5 novembre 2026

La référence fournie précise les grands disques numérotés avec pastille d’icône, une action discrète dans les cartes et le filet dégradé de la signature. Le rendu précédent n’avait pas satisfait ces trois attentes.

Le parcours affiche maintenant des disques de 128 px avec cinq icônes dans des pastilles vertes de 48 px ; sur mobile, disques de 96 px (84 px jusqu’à 360 px) et pastilles de 36 px. Les cartes conservent leur contenu, mais l’action utilise un libellé de 12 px et une flèche dans un cercle de 32 px : toute l’action reste masquée au repos et se révèle au survol ou au focus clavier. Le filet au-dessus de Kevin HUART mesure 220 px et passe du bleu au vert puis au transparent.

Le CSS partagé est référencé par une URL versionnée selon son SHA-256. Les sept pages ont été mises à jour, le générateur renouvelle cette version et le déploiement vérifie sa fraîcheur. Ce mécanisme empêche de réutiliser une ancienne URL CSS après une mise à jour ; il ne prétend pas prouver la cause du rendu vu par le propriétaire.

Vérifications : six largeurs de 320 à 1440 px, onze filtres à chaque largeur, absence de débordement/image manquante/erreur JavaScript ; action masquée au repos, révélée au survol et à la tabulation ; carte activable d’un seul toucher avec préremplissage ; 61 cartes sans JavaScript ; aucune violation Axe WCAG A/AA à 390 et 1440 px. Chargement HTTP 200 du CSS versionné vérifié sur les sept pages. Le mécanisme de version est idempotent, conserve le contenu HTML et détecte un CSS modifié sans version renouvelée.

Les captures montrent les trois zones et les états de carte. Le rapport est dans report.json. Les avertissements du détecteur portent sur les styles préexistants, les gradients demandés ou des calculs de contraste sans contexte de fond ; aucune violation correspondante dans les contrôles navigateur.

Aucune archive ZIP produite.
