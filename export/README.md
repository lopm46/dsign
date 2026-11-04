# D-SIGN — export HTML / CSS

Version 8 du 4 novembre 2026. L’export comprend sept pages reliées : accueil, matériaux, projets, services, rénovation, extension et construction. Le portfolio filtrable et les pages services prolongent le système V7 ; voir `PROJETS-SERVICES.md`. Ordre courant : hero, Comment ça marche, Nos métiers, Pourquoi nous choisir, Le mot du fondateur, À propos, matériaux, contact, puis footer. Header et menu mobile blancs ; onze catégories et 61 exemples filtrables, portrait réel du fondateur, boutons en pilule, cartes arrondies et titres dégradés dans la touche D-SIGN. La page matériaux, sa galerie et le formulaire existant sont conservés. Voir `STRUCTURE.md` et `RYTHME.md`.

## Ouvrir la page

Décompresser l’archive, conserver le dossier `assets` à côté des fichiers, puis ouvrir `index.html` dans un navigateur récent. Aucun framework, gestionnaire de paquets ou build n’est nécessaire. Toutes les images et les polices sont locales.

Pour un aperçu avec un serveur local, depuis ce dossier :

```bash
python3 -m http.server 4173
```

Ouvrir ensuite `http://localhost:4173/`. Cette méthode a été utilisée pour les contrôles de rendu et d’interaction.

## Contenu de l’export

```text
index.html                Page complète avec texte vivant
nos-materiaux.html         Page matériaux et galerie interactive
nos-projets.html           Portfolio filtrable et galerie de conception
nos-services.html          Trois services et méthode verticale au défilement
renovation.html            Détail du service rénovation
extension.html             Détail du service extension
construction.html          Détail du service construction
pages.css                 Styles des pages projets/services
pages.js                  Filtres, galerie et progression verticale
PROJETS-SERVICES.md        Sources, interactions et limites de la V8
materials.css             Styles propres à la page matériaux
materials.js              Sélection des matières et fiches détaillées
MATERIAUX.md               Provenance, contrôles et intégration WordPress
METIERS.md                 Catalogue, illustrations et provenance
styles.css                Styles, tokens et adaptations responsive
script.js                 Menu, filtres des métiers, validation et envoi du formulaire
DESIGN.md                 Charte de référence et composants actuels
STRUCTURE.md              Sept pages et navigation V8 ; ordre de la homepage
RYTHME.md                 Surfaces, compositions et historique V5
INTEGRATION.md            Ajouts V2 et raccordement Contact Form 7
VERIFICATION.md           Contrôles réalisés et limites
assets/
  logo.svg                Logo officiel original, sans modification
  fonts/                  Instrument Sans local, deux graisses et licence OFL
  images/                 Ambiances et portrait réel de Kevin HUART optimisé
  trades/                 Illustrations locales et catalogue.json
  projects/               Neuf fiches sources et deux vues de conception
  services/               Textes, cinq étapes et illustrations de méthode
  image-provenance.json    Origine et prompts des visuels
```

Les fichiers `.webp.json` conservent la provenance des images et le prompt lorsqu’il s’agit d’une ambiance générée. Ils n’ajoutent aucune dépendance au fonctionnement de la page.

## Ce qui est conservé

- Logo D-SIGN complet, couleurs et proportions d’origine.
- Hero bleu avec image en D, grand titre et accent vert.
- Activité générale : rénovation, extension et construction ; la V7 détaille onze catégories et 61 exemples à la demande du propriétaire.
- Texte client « À propos », page matériaux et sa galerie, contact et raccordement du formulaire.
- Grands visuels, alternance de surfaces blanches et bleues, liens à flèche.

## Ce qui est amélioré

- Grille, marges et échelle typographique cohérentes avec le socle D-SIGN.
- CTA harmonisés autour de « Parlons de votre projet ».
- Particuliers et professionnels explicitement présents dès l’introduction.
- Logo intact ; contrastes de texte, de liens et des états de survol renforcés.
- Navigation mobile native, fermeture par lien/Escape/clic extérieur et retour du focus.
- Header et panneau mobile blancs, texte bleu et action verte ; navigation partagée vers services, projets, métiers et matériaux.
- Portfolio de neuf fiches : filtres avec état accessible et URL, galerie native à deux vues et liens d’image sans JavaScript.
- Hub services et trois pages détaillées, FAQ natives et contact contextualisé ; méthode originale en cinq étapes avec rail vertical, progression au défilement et mouvement réduit.
- « Comment ça marche » expose cinq étapes sans dépliage, avec un lien d’estimation.
- « Nos métiers » présente onze filtres avec `aria-pressed` et annonce du nombre d’exemples ; « Chauffage & Climatisation » est actif par défaut, les 61 cartes restent disponibles sans JavaScript. Les cartes rejoignent le contact et préremplissent un message vide ou actualisent leur précédent texte automatique intact, en préservant toute saisie modifiée par le visiteur.
- « Pourquoi nous choisir » réunit une image/action et quatre bénéfices sur bleu.
- Portrait réel et message original du fondateur Kevin HUART, cartouche d’identité et guillemet SVG, puis À propos sur blanc.
- Boutons en pilule (999 px), cartes (18 px), champs (12 px), ombres douces et mots de titres en dégradé autorisés par le propriétaire.
- Ancienne introduction « Un seul fil. Du début à la fin. », détail « Notre façon de travailler » et ancienne section « Pourquoi nous confier votre projet ? » supprimés.
- Zone d’intervention, adresse, coordonnées et lien d’estimation visibles à côté du formulaire intégré.
- Quatre champs associés à leurs labels ; erreurs précises, résumé accessible, attente et retour du service de contact.
- Images responsives, dimensions réservées, chargement progressif et fontes locales.
- Navigation clavier, lien d’évitement, mouvement réduit et mise en page mobile.

Le socle est une reconstruction de la capture choisie, pas le HTML source du site hébergé. La famille typographique de cette capture n’était pas disponible : Instrument Sans a été choisie pour conserver une expression proche. La V7 reprend les onze catégories et tous les exemples de Kovan.fr à la demande du propriétaire, avec descriptions originales et illustrations locales de référence. Elle n’attribue à D-SIGN aucun réseau, logiciel, certification, garantie, chiffre ou résultat Kovan.

## Images et contenu

Les cinq ambiances du socle sont des **visuels générés pour cette présentation**, inspirés des scènes de la capture. Elles ne représentent pas des réalisations livrées ni des membres de l’équipe D-SIGN. Leur nature illustrative est indiquée dans la page. Ne pas supprimer cette précision tant que les images ne sont pas remplacées par des photographies réelles attribuées.

Kevin HUART est le fondateur confirmé par le propriétaire, qui a autorisé le message original adapté. La V7 utilise le portrait réel demandé, retrouvé à l’identique sur la page officielle H2Z `https://h2z-immobilier.fr/agence/`. L’original est conservé dans le dépôt ; le WebP local est recadré et présenté en miroir, sans génération de visage. Les illustrations des métiers proviennent de la référence Kovan demandée et restent des illustrations, avec provenance ; voir `METIERS.md`.

Le portfolio reprend neuf fiches du HTML public D-SIGN et les deux vues de conception nettes réutilisées par cette source ; la troisième image floue est exclue. Les catégories sont déduites des titres, avec trois fiches par catégorie. Les cinq illustrations de méthode proviennent du site source et ne sont pas des portraits d’équipe. Aucun reportage distinct, date, budget ou achèvement de travaux n’est ajouté. Voir `PROJETS-SERVICES.md`.

Pour remplacer un visuel, conserver les deux tailles correspondantes ou adapter son `srcset`. Mettre à jour le texte alternatif et la provenance. Pour une étude de cas réelle, documenter le lieu, la mission et le résultat au lieu de convertir une inspiration en réalisation.

Le logo original provient de `https://dsign-gbs.fr/wp-content/uploads/2024/12/logo.svg`. SHA-256 : `cfc31d8acfed3c19cf01688f9a0f42f86cc92d1cee3a241ad232626b63683841`.

## Liens et contact

Les liens de navigation relient les sept pages locales et les sections de l’accueil. Les pages intérieures présentent un fil d’Ariane et l’état de navigation courant ; « Matériaux » ouvre la galerie conservée. Les cartes métiers rejoignent le contact local ; l’estimation ouvre le parcours existant de `dsign-gbs.fr` et nécessite Internet. Les liens téléphone et e-mail ouvrent les applications correspondantes.

Les CTA des trois services rejoignent `index.html?projet=renovation|extension|construction#contact`. Le script accepte uniquement ces valeurs pour préremplir un message vide ; aucune soumission automatique n’est ajoutée.

Le formulaire est intégré et configuré pour l’API publique **Contact Form 7 déjà utilisée sur le site**, formulaire n° 6. Il transmet les données uniquement lors d’une soumission volontaire. Une confirmation positive apparaît seulement après la réponse `mail_sent` du service. Les erreurs conservent les données saisies et permettent de réessayer. Internet et le service WordPress existant sont nécessaires à l’envoi ; ils ne sont pas inclus dans le ZIP. Sans JavaScript, l’action native rejoint le formulaire d’origine.

Aucun message réel n’a été envoyé pendant les contrôles. Le raccordement public a été inspecté en lecture ; les scénarios d’envoi ont été testés avec des réponses interceptées dans le navigateur. La délivrabilité réelle reste à vérifier lors de la recette WordPress. Voir `INTEGRATION.md` pour les champs et paramètres à conserver.

## Préparer l’intégration WordPress

Il s’agit d’un export statique, **pas d’un thème WordPress installable**.

1. Reprendre le header et le footer dans les templates appropriés et le contenu de `<main>` dans le template d’accueil.
2. Charger `styles.css` et `script.js` via les fonctions d’enqueue de WordPress ; ajouter `pages.css` et `pages.js` aux pages projets/services concernées. Les styles globaux de cet export ne doivent pas être injectés sans adaptation dans un thème existant.
3. Transformer les chemins des images et polices en URLs du thème ou de la médiathèque. Garder le SVG complet, avec ses dimensions et ses couleurs.
4. Rendre éditables les textes, visuels, liens des métiers, étapes, message du fondateur et coordonnées à l’aide de blocs/patterns ou des champs du site.
5. Remplacer les liens absolus si les slugs changent ; préserver les destinations et redirections utiles.
6. Compléter les informations légales du site et valider les contenus métier, la zone d’intervention et les médias avant une mise en ligne.
7. Conserver le formulaire Contact Form 7 existant ou actualiser les paramètres de raccordement si son identifiant change. Éviter un second gestionnaire d’envoi sur le même formulaire ; suivre `INTEGRATION.md`, puis contrôler la réception réelle et les protections anti-spam dans WordPress.

Les variables de `:root` dans `styles.css` centralisent couleurs, largeur de contenu, espacements et transitions. Les principaux seuils responsive sont 1120, 900, 760 et 360 CSS px.

La charte `DESIGN.md` conserve la palette et la famille typographique du socle, puis actualise les rayons et les composants autorisés ; ses descriptions couvrent les composants partagés V7 et les ajouts projets/services V8. La préparation WordPress et les paramètres de contact restent inchangés ; `INTEGRATION.md` décrit le raccordement introduit en V2.

La page matériaux utilise ce même socle ; voir `MATERIAUX.md`. Ses huit visuels fournis sont locaux dans `assets/materials/`. Les fichiers et mentions de la version 2 concernent les contrôles de la homepage ; la version 3 ajoute les contrôles de la page matériaux.

## Contrôles

Les contrôles V8 passent sur 40 combinaisons page/largeur et les interactions de galerie, filtres, progression, FAQ et contact. Axe ne détecte aucune violation automatisée à 390 et 1440 px. La revue initiale a demandé un seul correctif d’espacement du focus dans les FAQ ; les six états corrigés sont évalués résolus (`ship` à cette portée). Voir `VERIFICATION.md` pour les résultats et limites. Les contrôles V7 restent historiques pour la homepage. Les résultats suivants sont historiques et concernent la V7 : les contrôles passent sur huit largeurs, de 320 à 1920 px : onze filtres au clavier, 61 exemples, médias et ancres, absence de débordement, repli sans JavaScript, préremplissage du contact et conservation des saisies. Axe ne détecte aucune violation automatisée à 390 et 1440 px. La revue indépendante conclut `ship` à la portée de cette interface, sans correctif matériel demandé. Aucun envoi réel de formulaire ni recette WordPress n’est revendiqué ; voir `VERIFICATION.md` pour les limites. Les rapports des versions antérieures restent historiques. L’export ne contient ni service externe de polices, ni script de mesure, ni dépendance JavaScript tierce.
