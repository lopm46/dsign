# Homepage — ordre V6

Ordre demandé par le client le 4 novembre 2026, identique dans le DOM sur desktop et mobile :

1. Hero avec l’image en D : promesse, contenu et visuel conservés ; le lien de découverte rejoint le parcours.
2. Comment ça marche : cinq étapes visibles, de l’échange initial à la réception selon la mission ; ancre `#comment-ca-marche`.
3. Nos métiers : rénovation, extension et construction en liens photographiques filtrables ; ancre `#expertises`.
4. Pourquoi nous choisir : image et action à gauche, quatre bénéfices à droite ; ancre `#pourquoi`.
5. Le mot du fondateur : message original adapté pour D-SIGN, signé Kevin HUART ; ancre `#fondateur`.
6. À propos de D-SIGN : texte client conservé, visuel et trois repères d’accompagnement ; ancre `#apropos`.
7. Le beau commence dans les détails : accès à la page matériaux et à sa galerie conservée ; ancre `#materiaux`.
8. Contact : informations et formulaire existants ; ancre `#contact`.

Le header et le panneau du menu mobile sont blancs, avec texte bleu. La navigation desktop propose Comment ça marche, Nos métiers, À propos et la page Matériaux, puis l’action de contact lorsqu’il y a la place. Le menu mobile et les footers donnent aussi accès aux raisons de choix et au fondateur. Le header et le footer de la page matériaux suivent ces destinations.

L’ancienne introduction « Un seul fil. Du début à la fin. », son détail « Notre façon de travailler » et l’ancienne section « Pourquoi nous confier votre projet ? » sont supprimés. Les anciennes lignes de services sont remplacées par les métiers à leur nouvelle place. La section « Des espaces qui changent la vie », supprimée auparavant, reste absente.

Kovan.fr fournit une référence pour le parcours numéroté, les métiers en images et les compositions image/texte. La palette, le logo complet, Instrument Sans, les angles droits, les flèches et le hero en D restent ceux de D-SIGN. Aucun chiffre, réseau, logiciel, certification ou financement de Kovan n’est repris comme fait D-SIGN.

Le propriétaire a confirmé le nom Kevin HUART et autorisé l’adaptation du message. Aucun portrait réel n’a été fourni : la section présente un visuel architectural explicitement légendé « Visuel d’ambiance ». L’intégration WordPress et les paramètres du formulaire sont inchangés.

Contrôles consignés dans `.impeccable/review/homepage-v6-verification.json` : ordre exact des huit sections, navigation blanche, textes retirés absents, médias présents et ancres valides à 320, 390, 768, 900, 1024, 1280, 1440 et 1920 px ; aucun débordement. Filtres, disponibilité des trois métiers sans JavaScript, fermeture du menu mobile et navigation partagée avec la page matériaux vérifiés. Aucune violation axe automatisée détectée à 390 et 1440 px. Aucun envoi réel du formulaire.

La revue indépendante Impeccable conclut `ship` à la portée UI de cette V6, après inspection des sections desktop/mobile, du menu et du métier filtré. Les contrôles automatisés et cette revue ne constituent pas une recette WordPress ni un essai complet sur appareils physiques et lecteur d’écran.

Cet ordre fait autorité pour la homepage courante. Les archives V4/V5 et leurs rapports restent historiques ; le rythme actuel est décrit dans `RYTHME.md`.
