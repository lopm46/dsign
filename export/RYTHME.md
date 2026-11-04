# Analyse des sections et rythme des fonds — V7

4 novembre 2026. La V7 conserve les huit sections de la V6 et étend les métiers, le portrait et les règles de forme à la demande du propriétaire. La palette, la police, le logo complet, le hero en D, la galerie matériaux et le raccordement du formulaire sont conservés.

## Lecture du parcours

Le header blanc marque la navigation avant l’ouverture bleue du hero. Le parcours numéroté expose la méthode immédiatement, puis les métiers photographiques permettent de choisir une prestation. Les raisons de choix occupent un aplat bleu distinct ; le message du fondateur reprend ensuite une surface minérale et une composition image/texte. À propos reste présent après ce message, avant les matériaux et le contact.

## Traitement par section

| Section | Structure V7 | Fond et rôle |
| --- | --- | --- |
| Header | Logo intact, liens de parcours et action ; menu natif sur mobile | Blanc avec texte et contour bleus ; panneau mobile blanc et action verte. |
| Hero | Promesse à gauche, photo en D à droite, CTA | Bleu conservé : ouverture forte et reconnaissable. |
| Comment ça marche | Cinq étapes numérotées et lien d’estimation | Blanc : explication lisible, numéros blancs dans des disques bleus et connecteurs verts. |
| Nos métiers | Onze filtres en pilule et 61 cartes arrondies, réparties par catégorie | Minéral : surface distincte du parcours blanc ; illustrations avec voile bleu, titres blancs, actions vertes et ombres douces. |
| Pourquoi nous choisir | Image/action à gauche, quatre bénéfices avec icônes à droite | Bleu : séquence de réassurance, texte clair, accents verts et filets foncés. |
| Le mot du fondateur | Portrait réel avec identité en cartouche, guillemet SVG, citation et signature | Minéral : message en bleu et gris ; signature sous un filet vert foncé. |
| À propos | Présentation client à gauche, photo et trois repères à droite | Blanc : respiration et lecture des paragraphes, accents vert foncé. |
| Matériaux | Texte et lien, photo de matières | Minéral clair et photo : transition tactile ; fond clair conservé sous le texte sur mobile. |
| Contact | Informations et formulaire existants | Bleu conservé : conclusion avec action verte, champs blancs et contraste fort. |
| Footer | Logo, navigation et informations du site | Blanc : fin du parcours et accès complémentaires. |

Le neutre `--color-mineral: #f3f0ea` introduit en V5 est réutilisé pour les métiers, le message du fondateur et les matériaux. Aucune nouvelle couleur ni famille typographique n’est ajoutée. Les titres centrés accentuent certains mots en dégradé bleu/vert sur clair ou blanc/vert sur bleu. Les boutons sont en pilule ; les cartes et visuels dédiés ont un rayon de 18 px, les champs de 12 px. Le parcours conserve cinq étapes, avec numéros circulaires et connecteurs.

## Composition et limites de contenu

Le propriétaire demande les onze catégories et tous les exemples de Kovan.fr ; le catalogue compte 61 cartes avec descriptions originales et illustrations locales de la référence, avec provenance. Le filtre « Chauffage & Climatisation » est actif au démarrage JavaScript ; sans JavaScript, toutes les cartes restent visibles. Les actions rejoignent le contact et ne préremplissent un message vide ou actualisent leur précédent texte automatique intact, en préservant toute saisie modifiée par le visiteur. Les réseaux, logiciels, certifications, garanties et résultats de la référence ne sont pas repris.

Le portrait réel de Kevin HUART remplace l’ambiance V6. Le même cliché a été retrouvé sur la page officielle H2Z et conservé en original ; son WebP local est recadré et présenté en miroir, sans génération de visage. Le message original autorisé reste conservé. Les blocs retirés en V6 restent absents.

## Vérifications

Les contrôles V7 passent sur huit largeurs, de 320 à 1920 px : onze filtres au clavier, 61 exemples, médias et ancres, absence de débordement, repli sans JavaScript, préremplissage du contact et conservation des saisies. Axe ne détecte aucune violation automatisée à 390 et 1440 px. La revue indépendante conclut `ship` à la portée de cette interface, sans correctif matériel demandé. Aucun envoi réel de formulaire ni recette WordPress n’est revendiqué ; voir `VERIFICATION.md` pour les limites. Les rapports des versions antérieures restent historiques.

## Historique V6

La V6 avait introduit le parcours de huit sections, la navigation blanche, trois métiers filtrables et un visuel d’ambiance pour le fondateur. Ses rapports et captures restent historiques. La V7 remplace cette limitation de catalogue et cette image à la demande du propriétaire.

## Historique V5

La V5 corrigeait la confusion entre le hero et À propos, puis entre plusieurs sections blanches : ordre hero / À propos / raisons / services / matériaux / contact et rythme bleu / blanc / bleu / blanc / minéral / bleu. Ses archives et rapports `homepage-rhythm-*` restent des preuves de cette étape, pas une description de la V7 courante.
