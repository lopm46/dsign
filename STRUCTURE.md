# Site — structure V8

L’export courant réunit sept pages dans le même système D-SIGN :

| Fichier | Rôle |
| --- | --- |
| `index.html` | Homepage V7 conservée : onze catégories, 61 exemples et portrait du fondateur. |
| `nos-materiaux.html` | Page matériaux et galerie conservées. |
| `nos-projets.html` | Neuf fiches du portfolio public, filtres Tous / Agrandissement / Construction / Rénovation et galerie de deux vues de conception. |
| `nos-services.html` | Trois accès aux services, puis cinq étapes de méthode avec progression verticale au défilement. |
| `renovation.html` | Périmètre, besoins, points d’attention, phases, projets associés, FAQ et contact rénovation. |
| `extension.html` | Même structure éditoriale pour l’extension. |
| `construction.html` | Même structure éditoriale pour la construction. |

Les pages intérieures chargent `pages.css` et `pages.js` en complément du socle. Le rail `.progress-container` du hub est vertical et reste visible au défilement ; il indique l’étape courante, les étapes parcourues et la progression. Les cinq contenus restent accessibles dans le flux, avec une version mobile à rail fin et prise en compte du mouvement réduit.

Les filtres projets exposent leur sélection avec `aria-pressed`, annoncent le résultat et conservent la catégorie dans `?type=`. La galerie native `dialog` propose deux vues, précédent/suivant, flèches clavier, Échap, fermeture extérieure et retour du focus. Sans JavaScript, les neuf liens ouvrent leur image. Les CTA des services rejoignent le contact de l’accueil avec une valeur `?projet=` limitée aux trois services ; ils ne préremplissent qu’un message vide, sans soumission automatique.

Les neuf fiches sources partagent deux vues de conception nettes ; leur reprise ne constitue pas neuf reportages de chantier distincts. Les titres fournissent la catégorie (3/3/3), tandis que la source attribuait les trois catégories à toutes les fiches. Voir `PROJETS-SERVICES.md` pour la provenance et les limites.

Les contrôles V8 passent sur 40 combinaisons page/largeur et les interactions de galerie, filtres, progression, FAQ et contact. Axe ne détecte aucune violation automatisée à 390 et 1440 px. La revue initiale a demandé un seul correctif d’espacement du focus dans les FAQ ; les six états corrigés sont évalués résolus (`ship` à cette portée). Voir `VERIFICATION.md` pour les résultats et limites. Les contrôles V7 restent historiques pour la homepage.

## Ordre de la homepage conservé depuis la V7

Ordre demandé par le client le 4 novembre 2026, identique dans le DOM sur desktop et mobile :

1. Hero avec l’image en D : promesse, contenu et visuel conservés ; le lien de découverte rejoint le parcours.
2. Comment ça marche : cinq étapes visibles, de l’échange initial à la réception selon la mission ; ancre `#comment-ca-marche`.
3. Nos métiers : onze catégories et 61 exemples en cartes photographiques filtrables ; ancre `#expertises`. « Chauffage & Climatisation » est sélectionné par défaut avec JavaScript ; sans JavaScript, toutes les catégories restent visibles. Chaque carte rejoint le contact et préremplit un message vide ou remplace le précédent texte automatique resté intact ; un texte modifié par le visiteur est conservé.
4. Pourquoi nous choisir : image et action à gauche, quatre bénéfices à droite ; ancre `#pourquoi`.
5. Le mot du fondateur : portrait réel de Kevin HUART, cartouche d’identité, guillemet SVG et message original adapté pour D-SIGN ; ancre `#fondateur`.
6. À propos de D-SIGN : texte client conservé, visuel et trois repères d’accompagnement ; ancre `#apropos`.
7. Le beau commence dans les détails : accès à la page matériaux et à sa galerie conservée ; ancre `#materiaux`.
8. Contact : informations et formulaire existants ; ancre `#contact`.

Le header et le panneau du menu mobile sont blancs, avec texte bleu. Les sept pages partagent les accès « Nos services », « Nos projets », « Nos métiers » et « Matériaux », puis le contact. Le menu mobile ajoute l’accueil, Comment ça marche et À propos ; le footer conserve À propos. Les pages intérieures ajoutent un fil d’Ariane et l’état courant de navigation.

L’ancienne introduction « Un seul fil. Du début à la fin. », son détail « Notre façon de travailler » et l’ancienne section « Pourquoi nous confier votre projet ? » sont supprimés. Les anciennes lignes de services sont remplacées par les métiers à leur nouvelle place. La section « Des espaces qui changent la vie », supprimée auparavant, reste absente.

Kovan.fr fournit désormais les onze catégories et tous leurs exemples, à la demande explicite du propriétaire. Les descriptions sont originales ; les illustrations de référence sont optimisées localement avec provenance. La palette, le logo complet, Instrument Sans, les flèches et le hero en D restent ceux de D-SIGN. Le propriétaire autorise les boutons en pilule, cartes à rayon 18 px, champs à rayon 12 px, ombres douces et accents de titres en dégradé. Aucun réseau, logiciel, certification, garantie ou résultat Kovan n’est repris comme fait D-SIGN.

Le nom et le message du fondateur sont confirmés par le propriétaire. Le portrait demandé correspond au même cliché publié sur la page officielle H2Z ; l’original est conservé, le WebP recadré et présenté en miroir, sans génération de visage. La galerie matériaux et le raccordement WordPress du formulaire restent conservés.

**Contrôles historiques V7 :** les contrôles passent sur huit largeurs, de 320 à 1920 px : onze filtres au clavier, 61 exemples, médias et ancres, absence de débordement, repli sans JavaScript, préremplissage du contact et conservation des saisies. Axe ne détecte aucune violation automatisée à 390 et 1440 px. La revue indépendante conclut `ship` à la portée de cette interface, sans correctif matériel demandé. Aucun envoi réel de formulaire ni recette WordPress n’est revendiqué ; voir `VERIFICATION.md` pour les limites. Les rapports des versions antérieures restent historiques.

Cet ordre fait autorité pour la homepage courante. Les archives V4/V5/V6 et leurs rapports restent historiques ; le rythme actuel est décrit dans `RYTHME.md`.

## Estimation des travaux

`estimation.html` ajoute un parcours de démonstration : domaines → services → budget → délais → coordonnées fictives → confirmation. Le hero, la navigation des huit pages et le lien d’estimation du contact y donnent accès. Le générateur `scripts/estimation_page.py` est appelé par la génération partagée. Voir `ESTIMATION.md` pour les données, la validation et le futur raccordement Contact Form 7.
