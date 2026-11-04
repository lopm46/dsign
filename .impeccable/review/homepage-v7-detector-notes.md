# Lecture du détecteur V7

Le détecteur a été exécuté une fois sur les trois fichiers UI modifiés. Son résultat brut est conservé dans `homepage-v7-detector.json`.

- Les **titres en dégradé** sont une demande explicite du propriétaire pour cette V7, qui remplace les règles précédentes sur ce point. Leurs deux extrémités restent lisibles : bleu vers vert foncé sur clair, blanc vers vert sur bleu. La couleur unie est le repli ; un bloc `@supports` active l’effet. Les couleurs forcées et l’impression rétablissent un texte uni.
- Les **formes arrondies**, les ombres douces, les filtres illustrés et la citation SVG sont aussi autorisés dans cette évolution. Ils sont désormais documentés dans les deux copies de `DESIGN.md` et le sidecar.
- Les cinq alertes de **texte clair sur blanc** correspondent aux héritages de texte `#d2d5e7` dans des zones bleues ou des cartes photographiques à voile bleu, pas au blanc supposé par l’analyse statique. Les textes de lecture sur clair sont bleus ou gris foncé.
- Les alertes d’**espacement de section** ne tiennent pas compte de `section-space` et `container`. Le rendu et les valeurs calculées ont été contrôlés ; aucun second padding n’a été ajouté au même wrapper.
- **Instrument Sans** reste une police explicitement conservée de D-SIGN. Les tailles locales des cartes, filtres et mentions prolongent la hiérarchie ; le signalement de tailles absentes des seuls rôles du frontmatter n’est pas un défaut visuel en soi.

Le rapport navigateur `homepage-v7-verification.json` consigne les huit largeurs, les onze catégories au clavier, les états sans JavaScript, les images, la navigation, le message de contact et le mode de couleurs forcées. Axe WCAG 2A/AA/2.1AA/2.2AA ne détecte aucune violation à 390 et 1440 px. Ces contrôles ne sont pas une certification ni une recette complète sur appareils physiques et lecteur d’écran. Aucun message réel n’a été envoyé.
