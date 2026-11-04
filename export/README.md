# D-SIGN — export HTML / CSS

Version 3 du 4 novembre 2026. L’export comprend la homepage améliorée et la page « Nos matériaux » fournie par le client, reliées entre elles. La homepage conserve les contenus et le formulaire de la version 2.

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
script.js                 Menu, validation et envoi du formulaire
DESIGN.md                 Charte de référence conservée
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
- Même ordre : expertises, projets, présentation/approche, matériaux, contact et pied de page.
- Même principe de lignes image/texte pour les trois services.
- Grands visuels, alternance de surfaces blanches et bleues, liens à flèche.

## Ce qui est amélioré

- Grille, marges, densité des lignes de services et échelle typographique cohérentes.
- CTA harmonisés autour de « Parlons de votre projet ».
- Particuliers et professionnels explicitement présents dès l’introduction.
- Logo intact ; contrastes de texte, de liens et des états de survol renforcés.
- Navigation mobile native, fermeture par lien/Escape/clic extérieur et retour du focus.
- « Notre façon de travailler » déplie une explication courte, sans fenêtre modale.
- Présentation « À propos » intégrée à la section bleue existante, avec le texte fourni par le client.
- Trois raisons de choisir D-SIGN ajoutées sous les expertises, sans nouvelles cartes ni nouvelle palette.
- Zone d’intervention, adresse, coordonnées et lien d’estimation visibles à côté du formulaire intégré.
- Quatre champs associés à leurs labels ; erreurs précises, résumé accessible, attente et retour du service de contact.
- Images responsives, dimensions réservées, chargement progressif et fontes locales.
- Navigation clavier, lien d’évitement, mouvement réduit et mise en page mobile.

Le code est une reconstruction de la capture, pas le HTML source du site hébergé. La famille typographique de la capture n’était pas disponible : Instrument Sans a été choisie pour conserver une expression proche.

## Images et contenu

Les cinq images sont des **visuels d’ambiance générés pour cette présentation**, inspirés des scènes de la capture. Elles ne représentent pas des réalisations livrées ni des membres de l’équipe D-SIGN. Leur nature illustrative est indiquée dans la page. Ne pas supprimer cette précision tant que les images ne sont pas remplacées par des photographies réelles attribuées.

Pour remplacer un visuel, conserver les deux tailles correspondantes ou adapter son `srcset`. Mettre à jour le texte alternatif et la provenance. Pour une étude de cas réelle, documenter le lieu, la mission et le résultat au lieu de convertir une inspiration en réalisation.

Le logo original provient de `https://dsign-gbs.fr/wp-content/uploads/2024/12/logo.svg`. SHA-256 : `cfc31d8acfed3c19cf01688f9a0f42f86cc92d1cee3a241ad232626b63683841`.

## Liens et contact

Les liens de navigation parcourent les sections de cette page. Les services, le portfolio, les matériaux et l’estimation renvoient vers les pages existantes de `dsign-gbs.fr` ; ces destinations nécessitent Internet. Les liens téléphone et e-mail ouvrent les applications correspondantes.

Le formulaire est intégré et configuré pour l’API publique **Contact Form 7 déjà utilisée sur le site**, formulaire n° 6. Il transmet les données uniquement lors d’une soumission volontaire. Une confirmation positive apparaît seulement après la réponse `mail_sent` du service. Les erreurs conservent les données saisies et permettent de réessayer. Internet et le service WordPress existant sont nécessaires à l’envoi ; ils ne sont pas inclus dans le ZIP. Sans JavaScript, l’action native rejoint le formulaire d’origine.

Aucun message réel n’a été envoyé pendant les contrôles. Le raccordement public a été inspecté en lecture ; les scénarios d’envoi ont été testés avec des réponses interceptées dans le navigateur. La délivrabilité réelle reste à vérifier lors de la recette WordPress. Voir `INTEGRATION.md` pour les champs et paramètres à conserver.

## Préparer l’intégration WordPress

Il s’agit d’un export statique, **pas d’un thème WordPress installable**.

1. Reprendre le header et le footer dans les templates appropriés et le contenu de `<main>` dans le template d’accueil.
2. Charger `styles.css` et `script.js` via les fonctions d’enqueue de WordPress, uniquement sur la page ou le template concerné. Les styles globaux de cet export ne doivent pas être injectés sans adaptation dans un thème existant.
3. Transformer les chemins des images et polices en URLs du thème ou de la médiathèque. Garder le SVG complet, avec ses dimensions et ses couleurs.
4. Rendre éditables les textes, visuels, liens des services et projets, étapes et coordonnées à l’aide de blocs/patterns ou des champs du site.
5. Remplacer les liens absolus si les slugs changent ; préserver les destinations et redirections utiles.
6. Compléter les informations légales du site et valider les contenus métier, la zone d’intervention et les médias avant une mise en ligne.
7. Conserver le formulaire Contact Form 7 existant ou actualiser les paramètres de raccordement si son identifiant change. Éviter un second gestionnaire d’envoi sur le même formulaire ; suivre `INTEGRATION.md`, puis contrôler la réception réelle et les protections anti-spam dans WordPress.

Les variables de `:root` dans `styles.css` centralisent couleurs, largeur de contenu, espacements et transitions. Les principaux seuils responsive sont 1120, 900, 760 et 360 CSS px.

La charte `DESIGN.md` reste le socle visuel extrait de la première livraison : palette, famille typographique, grille et composants. Elle est conservée dans cette extension. Les ajouts locaux et les différences de contact par rapport à cette première livraison sont décrits dans `INTEGRATION.md`.

La page matériaux utilise ce même socle ; voir `MATERIAUX.md`. Ses huit visuels fournis sont locaux dans `assets/materials/`. Les fichiers et mentions de la version 2 concernent les contrôles de la homepage ; la version 3 ajoute les contrôles de la page matériaux.

## Contrôles

Les contrôles réalisés et leurs limites sont consignés dans `VERIFICATION.md`. L’export ne contient ni service externe de polices, ni script de mesure, ni dépendance JavaScript tierce.
