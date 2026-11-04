# D-SIGN — export HTML / CSS

Version 6 du 4 novembre 2026. L’export comprend la homepage et la page « Nos matériaux », reliées entre elles. Ordre courant : hero, Comment ça marche, Nos métiers, Pourquoi nous choisir, Le mot du fondateur, À propos, matériaux, contact, puis footer. Header et menu mobile blancs ; parcours numéroté, métiers filtrables et nouvelles compositions dans la charte D-SIGN. La page matériaux, sa galerie et le formulaire existant sont conservés. Voir `STRUCTURE.md` et `RYTHME.md`.

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
materials.css             Styles propres à la page matériaux
materials.js              Sélection des matières et fiches détaillées
MATERIAUX.md               Provenance, contrôles et intégration WordPress
styles.css                Styles, tokens et adaptations responsive
script.js                 Menu, filtres des métiers, validation et envoi du formulaire
DESIGN.md                 Charte de référence et composants actuels
STRUCTURE.md              Ordre et navigation de la V6
RYTHME.md                 Surfaces, compositions et historique V5
INTEGRATION.md            Ajouts V2 et raccordement Contact Form 7
VERIFICATION.md           Contrôles réalisés et limites
assets/
  logo.svg                Logo officiel original, sans modification
  fonts/                  Instrument Sans local, deux graisses et licence OFL
  images/                 Cinq ambiances, versions WebP 800 et 1600 px
  image-provenance.json    Origine et prompts des visuels
```

Les fichiers `.webp.json` conservent également le prompt de génération de chaque image. Ils n’ajoutent aucune dépendance au fonctionnement de la page.

## Ce qui est conservé

- Logo D-SIGN complet, couleurs et proportions d’origine.
- Hero bleu avec image en D, grand titre et accent vert.
- Trois services confirmés : rénovation, extension et construction ; destinations existantes conservées.
- Texte client « À propos », page matériaux et sa galerie, contact et raccordement du formulaire.
- Grands visuels, alternance de surfaces blanches et bleues, liens à flèche.

## Ce qui est amélioré

- Grille, marges et échelle typographique cohérentes avec le socle D-SIGN.
- CTA harmonisés autour de « Parlons de votre projet ».
- Particuliers et professionnels explicitement présents dès l’introduction.
- Logo intact ; contrastes de texte, de liens et des états de survol renforcés.
- Navigation mobile native, fermeture par lien/Escape/clic extérieur et retour du focus.
- Header et panneau mobile blancs, texte bleu et action verte.
- « Comment ça marche » expose cinq étapes sans dépliage, avec un lien d’estimation.
- « Nos métiers » présente trois liens photographiques et des filtres avec `aria-pressed` et annonce de résultat ; les trois métiers restent disponibles sans JavaScript.
- « Pourquoi nous choisir » réunit une image/action et quatre bénéfices sur bleu.
- Message original du fondateur signé Kevin HUART, puis À propos sur blanc.
- Ancienne introduction « Un seul fil. Du début à la fin. », détail « Notre façon de travailler » et ancienne section « Pourquoi nous confier votre projet ? » supprimés.
- Zone d’intervention, adresse, coordonnées et lien d’estimation visibles à côté du formulaire intégré.
- Quatre champs associés à leurs labels ; erreurs précises, résumé accessible, attente et retour du service de contact.
- Images responsives, dimensions réservées, chargement progressif et fontes locales.
- Navigation clavier, lien d’évitement, mouvement réduit et mise en page mobile.

Le socle est une reconstruction de la capture choisie, pas le HTML source du site hébergé. La famille typographique de cette capture n’était pas disponible : Instrument Sans a été choisie pour conserver une expression proche. La V6 adapte des principes de parcours et de composition de Kovan.fr dans cette identité ; elle ne reprend pas son catalogue, ses chiffres, son réseau, son logiciel ou ses certifications.

## Images et contenu

Les cinq images sont des **visuels d’ambiance générés pour cette présentation**, inspirés des scènes de la capture. Elles ne représentent pas des réalisations livrées ni des membres de l’équipe D-SIGN. Leur nature illustrative est indiquée dans la page. Ne pas supprimer cette précision tant que les images ne sont pas remplacées par des photographies réelles attribuées.

Kevin HUART est le fondateur confirmé par le propriétaire, qui a autorisé le message original adapté. Aucun portrait réel n’a été fourni : l’image architecturale de cette section est explicitement légendée « Visuel d’ambiance ».

Pour remplacer un visuel, conserver les deux tailles correspondantes ou adapter son `srcset`. Mettre à jour le texte alternatif et la provenance. Pour une étude de cas réelle, documenter le lieu, la mission et le résultat au lieu de convertir une inspiration en réalisation.

Le logo original provient de `https://dsign-gbs.fr/wp-content/uploads/2024/12/logo.svg`. SHA-256 : `cfc31d8acfed3c19cf01688f9a0f42f86cc92d1cee3a241ad232626b63683841`.

## Liens et contact

Les liens de navigation parcourent les sections de la homepage ; « Matériaux » ouvre la page locale `nos-materiaux.html` et sa galerie conservée. Les métiers et l’estimation renvoient vers les pages existantes de `dsign-gbs.fr` ; ces destinations nécessitent Internet. Les liens téléphone et e-mail ouvrent les applications correspondantes.

Le formulaire est intégré et configuré pour l’API publique **Contact Form 7 déjà utilisée sur le site**, formulaire n° 6. Il transmet les données uniquement lors d’une soumission volontaire. Une confirmation positive apparaît seulement après la réponse `mail_sent` du service. Les erreurs conservent les données saisies et permettent de réessayer. Internet et le service WordPress existant sont nécessaires à l’envoi ; ils ne sont pas inclus dans le ZIP. Sans JavaScript, l’action native rejoint le formulaire d’origine.

Aucun message réel n’a été envoyé pendant les contrôles. Le raccordement public a été inspecté en lecture ; les scénarios d’envoi ont été testés avec des réponses interceptées dans le navigateur. La délivrabilité réelle reste à vérifier lors de la recette WordPress. Voir `INTEGRATION.md` pour les champs et paramètres à conserver.

## Préparer l’intégration WordPress

Il s’agit d’un export statique, **pas d’un thème WordPress installable**.

1. Reprendre le header et le footer dans les templates appropriés et le contenu de `<main>` dans le template d’accueil.
2. Charger `styles.css` et `script.js` via les fonctions d’enqueue de WordPress, uniquement sur la page ou le template concerné. Les styles globaux de cet export ne doivent pas être injectés sans adaptation dans un thème existant.
3. Transformer les chemins des images et polices en URLs du thème ou de la médiathèque. Garder le SVG complet, avec ses dimensions et ses couleurs.
4. Rendre éditables les textes, visuels, liens des métiers, étapes, message du fondateur et coordonnées à l’aide de blocs/patterns ou des champs du site.
5. Remplacer les liens absolus si les slugs changent ; préserver les destinations et redirections utiles.
6. Compléter les informations légales du site et valider les contenus métier, la zone d’intervention et les médias avant une mise en ligne.
7. Conserver le formulaire Contact Form 7 existant ou actualiser les paramètres de raccordement si son identifiant change. Éviter un second gestionnaire d’envoi sur le même formulaire ; suivre `INTEGRATION.md`, puis contrôler la réception réelle et les protections anti-spam dans WordPress.

Les variables de `:root` dans `styles.css` centralisent couleurs, largeur de contenu, espacements et transitions. Les principaux seuils responsive sont 1120, 900, 760 et 360 CSS px.

La charte `DESIGN.md` conserve la palette, la famille typographique et les tokens du socle ; ses rôles de surface et descriptions de composants suivent la V6. La préparation WordPress et les paramètres de contact restent inchangés ; `INTEGRATION.md` décrit le raccordement introduit en V2.

La page matériaux utilise ce même socle ; voir `MATERIAUX.md`. Ses huit visuels fournis sont locaux dans `assets/materials/`. Les fichiers et mentions de la version 2 concernent les contrôles de la homepage ; la version 3 ajoute les contrôles de la page matériaux.

## Contrôles

Les contrôles V6 sont résumés dans `STRUCTURE.md` et `RYTHME.md`, à partir de `.impeccable/review/homepage-v6-verification.json` : huit largeurs de 320 à 1920 px, filtres et repli sans JavaScript, menu, ancres et médias, sans débordement ; aucune violation axe automatisée à 390 et 1440 px. La revue indépendante Impeccable conclut `ship` pour l’UI à cette portée. Aucun message réel n’a été envoyé. `VERIFICATION.md` rassemble les contrôles V6 et conserve la V2 comme historique ; les rapports des versions précédentes gardent leurs limites. La recette WordPress reste distincte. L’export ne contient ni service externe de polices, ni script de mesure, ni dépendance JavaScript tierce.
