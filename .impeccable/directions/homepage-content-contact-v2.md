# Extension de la homepage — contenus et contact

MODE: persuade
ARTIFACT: `export/index.html`, `export/styles.css`, `export/script.js`.
WORLD: charte existante dans `DESIGN.md` et `export/DESIGN.md`. Palette navy/green/white, Instrument Sans, angles droits, flèches, logo officiel intact. Ne pas remplacer le hero ni les visuels.
SCOPE: intégrer les contenus fournis par le client dans la homepage existante, avec discrétion et respect de la charte. Pas de nouveau concept, de publication ou de thème WordPress installé.
FORM: conserver hero / expertises / projets / présentation-approche / matériaux / contact / footer. Les raisons de choix prolongent les expertises ; le texte de présentation enrichit la section bleue ; le contact reçoit les informations complètes et un formulaire à quatre champs.
INTERACTION: formulaire relié au service Contact Form 7 existant, champs et identifiant publics conservés, contrôles clients accessibles, validation serveur indépendante. Attente, erreurs, indisponibilité et retour positif du service traités sans succès inventé. Aucun envoi réel dans les contrôles.
QUALITY BAR: contenu demandé présent, hiérarchie compatible avec la homepage déjà approuvée, lisibilité à 390 et 1440 px et absence de débordement aux largeurs contrôlées, parcours de contact explicite.

## Demande originale

« intègre le texte de à propos dans la homepage ; le texte pourquoi nous confier votre projet ; et toutes les infos à côté du formulaire de contact + formulaire de contact intégrée dans la homepage. Intègre tout ça de façon subtile en respectant la charte. »

Le client fournit trois captures de son contenu actuel. Transcription :

### À propos de D-SIGN

D-SIGN est la société la plus dynamique en matière de courtage en construction et de maitrise d’œuvre dans la région des Hauts-de-France.

Nous sommes là pour vous accompagner tout au long de votre projet, de la recherche du terrain jusqu’à la dernière couche de peinture, en passant par la conception des plans.

Que vous soyez un particulier ou un professionnel, que vous souhaitiez rénover, agrandir ou construire, notre entreprise est là pour vous aider à tous les niveaux de votre projet.

Nous vous accompagnons et vous conseillons pour que votre projet soit mené à bien dans les meilleures conditions.

### Pourquoi nous confier votre projet ?

- Gagner du temps : Se renseigner, négocier, coordonner, gérer le chantier, vous n’avez pas le temps ? D-SIGN gère pour vous.
- Interlocuteur unique : Bénéficier des conseils et de l’accompagnement d’un expert sur l’intégralité de votre projet. D-SIGN gère pour vous.
- Des projets sur-mesure : Fournir des prestations sur-mesure pour répondre à tous vos besoins, vos exigences et vos envie. D-SIGN gère pour vous.

### Contact

Parlons de votre projet. Contactez-nous pour nous parler de votre projet ! Cliquez ici pour faire une estimation du coût de votre projet.

Zone d’intervention : Amiens et ses alentours. Nous n’avons pas de limite géographique.

Nous contacter : 5 rue des Indes Noires, 80440 Boves ; contact@dsign-gbs.fr ; 06 07 95 40 46.

Formulaire : votre nom ; votre adresse mail ; votre numéro de téléphone ; votre message ; envoyer.

## Références et portée

- Direction desktop retenue : `design-explorations/references/direction-retenue-desktop.jpeg`, issue de https://i.imgur.com/KfDjzWy.jpeg.
- Les photos existantes sont des ambiances générées, toujours identifiées comme telles ; elles ne sont pas remplacées dans cette passe.
- Le formulaire d’origine est visible publiquement sur https://dsign-gbs.fr/ : Contact Form 7 n° 6, page 1647, téléphone nommé `your-subject`. Nom, e-mail et téléphone obligatoires, message facultatif.
- OPTIONS public du point de contact : 200, méthode POST, en-tête CORS pour l’aperçu local ; aucun POST réel de test. Les réponses de contact dans les captures d’état sont interceptées par Playwright. La réception réelle n’est pas établie.
- Extension ordinaire du système : conserver les documents de charte existants ; documenter les ajouts dans `export/INTEGRATION.md`.
