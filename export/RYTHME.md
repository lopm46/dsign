# Analyse des sections et rythme des fonds — V6

4 novembre 2026. La V6 remplace le parcours de six sections V5 par les huit sections demandées par le client, dans la charte D-SIGN. La palette, la police, le logo complet, la silhouette du hero, la page matériaux et le formulaire sont conservés.

## Lecture du parcours

Le header blanc marque la navigation avant l’ouverture bleue du hero. Le parcours numéroté expose la méthode immédiatement, puis les métiers photographiques permettent de choisir une prestation. Les raisons de choix occupent un aplat bleu distinct ; le message du fondateur reprend ensuite une surface minérale et une composition image/texte. À propos reste présent après ce message, avant les matériaux et le contact.

## Traitement par section

| Section | Structure V6 | Fond et rôle |
| --- | --- | --- |
| Header | Logo intact, liens de parcours et action ; menu natif sur mobile | Blanc avec texte et contour bleus ; panneau mobile blanc et action verte. |
| Hero | Promesse à gauche, photo en D à droite, CTA | Bleu conservé : ouverture forte et reconnaissable. |
| Comment ça marche | Cinq étapes numérotées et lien d’estimation | Blanc : explication lisible, numéros bleus soulignés de vert et filets clairs. |
| Nos métiers | Filtres et trois liens photographiques ; une composition large lorsqu’un métier est filtré | Minéral : surface distincte du parcours blanc ; photos avec voile bleu, titres blancs et flèches vertes. |
| Pourquoi nous choisir | Image/action à gauche, quatre bénéfices avec icônes à droite | Bleu : séquence de réassurance, texte clair, accents verts et filets foncés. |
| Le mot du fondateur | Image architecturale légendée, citation et signature | Minéral : message en bleu et gris ; signature sous un filet vert foncé. |
| À propos | Présentation client à gauche, photo et trois repères à droite | Blanc : respiration et lecture des paragraphes, accents vert foncé. |
| Matériaux | Texte et lien, photo de matières | Minéral clair et photo : transition tactile ; fond clair conservé sous le texte sur mobile. |
| Contact | Informations et formulaire existants | Bleu conservé : conclusion avec action verte, champs blancs et contraste fort. |
| Footer | Logo, navigation et informations du site | Blanc : fin du parcours et accès complémentaires. |

Le neutre `--color-mineral: #f3f0ea` introduit en V5 est réutilisé pour les métiers, le message du fondateur et les matériaux. Aucune nouvelle couleur ni famille typographique n’est ajoutée. La méthode et les métiers modifient aussi leur structure : cette V6 ne se limite pas à une alternance de fonds.

## Composition et limites de contenu

La référence Kovan.fr inspire le parcours numéroté et les compositions photographiques ; D-SIGN conserve ses trois prestations et son identité. Les mentions de réseau, logiciel, certifications ou résultats propres à la référence ne sont pas reprises.

Kevin HUART est confirmé comme fondateur par le propriétaire, qui a autorisé le message original adapté. Aucun portrait n’a été fourni ; l’image architecturale garde sa légende d’ambiance. Le détail « Notre façon de travailler », son ancienne introduction et l’ancien bloc de raisons sont retirés. La galerie matériaux et l’intégration WordPress restent inchangées.

## Vérifications

Le rapport `.impeccable/review/homepage-v6-verification.json` consigne huit largeurs : 320, 390, 768, 900, 1024, 1280, 1440 et 1920 px. Ordre, header blanc et textes retirés vérifiés ; aucun débordement, média manquant ou ancre morte. Filtres, repli sans JavaScript, menu mobile et navigation des deux pages contrôlés. Scan axe à 390 et 1440 px : aucune violation automatisée détectée. Aucun envoi réel de formulaire.

La revue indépendante Impeccable conclut `ship` pour l’UI à cette portée après inspection desktop/mobile. Les deux copies de `DESIGN.md` et le sidecar décrivent les rôles de surface et les composants actuels. Ces contrôles ne remplacent pas une recette WordPress ni un essai complet sur appareils physiques et lecteur d’écran.

## Historique V5

La V5 corrigeait la confusion entre le hero et À propos, puis entre plusieurs sections blanches : ordre hero / À propos / raisons / services / matériaux / contact et rythme bleu / blanc / bleu / blanc / minéral / bleu. Ses archives et rapports `homepage-rhythm-*` restent des preuves de cette étape, pas une description de la V6 courante.
