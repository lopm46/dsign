# Vérification de l’export — version 2

Contrôles du 4 novembre 2026. Portée : homepage statique HTML/CSS/JS, contenus intégrés et interface du formulaire. Aucun thème WordPress installé ni site publié.

## Rendu et navigation

- Chromium headless, largeurs **320, 390, 768, 1024, 1440 et 1920 CSS px** : aucun débordement horizontal, contrôle de formulaire hors écran, image/police manquante, ancre locale morte ou identifiant dupliqué détecté ; un seul H1.
- Captures complètes desktop 1440 px et mobile 390 px prises après chargement des images différées. Sections À propos, raisons de choix et contact également capturées séparément et inspectées.
- Texte À propos : quatre paragraphes fournis présents. Trois raisons de choix présentes, signature commune. Zone, adresse, e-mail, téléphone et estimation présents à côté du formulaire.
- Navigation mobile : ouverture, fermeture par Échap avec retour du focus, lien À propos et fermeture après choix d’une section. Le CTA du hero rejoint le contact intégré.
- Détails de méthode et informations du footer : ouverture et fermeture vérifiées. Menu natif encore utilisable sans JavaScript.
- Lien d’évitement : révélé au focus clavier, découpé hors focus pour éviter un artefact dans les longues captures.
- Textes de formulaire agrandis lors d’un contrôle complémentaire : aucun débordement horizontal dans cette vue. Ce contrôle ne constitue pas une recette exhaustive du zoom navigateur.

## Formulaire

Le formulaire public original a été inspecté en lecture : Contact Form 7 n° 6, champs `your-name`, `your-email`, `your-subject` (téléphone), `your-message`, paramètres publics de la page 1647.

Une requête **OPTIONS, sans données utilisateur**, a confirmé HTTP 200, la méthode POST et les en-têtes CORS du point de contact pour l’aperçu local. **Aucun POST réel ni message réel de test n’a été envoyé.**

Les scénarios suivants ont été vérifiés à 390 et 1440 px avec des réponses réseau interceptées dans Playwright :

- Formulaire vide : trois erreurs obligatoires ; aucune requête d’envoi.
- E-mail et téléphone invalides : erreurs locales précises, liées aux champs.
- Résumé d’erreurs recevant le focus après soumission ; liens ramenant au champ correspondant.
- Attente : bouton désactivé, indication d’envoi, double soumission bloquée.
- Erreur de validation du service : message rattaché au champ concerné.
- Échec du service, statut anti-spam et panne réseau : pas de confirmation positive, données conservées et nouvelle tentative possible.
- Réponse `mail_sent` : confirmation affichée uniquement après ce statut ; bouton rétabli.
- Sans JavaScript : labels, attributs natifs de validation et action de repli vers le formulaire original présents ; aucun envoi réel sans JavaScript n’a été testé.

Le produit appelle le service existant. Les réponses interceptées appartiennent uniquement aux tests et ne sont pas incluses dans le code livré.

## Accessibilité et charte

- **axe-core 4.10.3**, règles WCAG A/AA applicables : aucune violation automatisée détectée à 390 et 1440 px, dans les états initial et erreurs de champs. Cela ne remplace pas une recette complète avec technologies d’assistance.
- Labels visibles et associés aux quatre contrôles, `autocomplete`, saisie e-mail/téléphone native, résumé lié et statut annoncé.
- Logo : même SVG original, sans filtre ni changement de proportions. Palette et deux fontes locales conservées.
- Images : mêmes cinq ambiances illustratives et dix dérivés WebP, prompts et origine conservés. Aucun nouveau visuel n’a été produit.
- Détecteur Impeccable exécuté une fois sur cette passe. Les signalements de contraste ont été confrontés au fond calculé réel ; le texte vert est sur bleu, pas sur blanc. La fonte choisie, le padding du hero et les valeurs locales déjà présentes ont été conservés. Les résultats du détecteur ne sont pas présentés comme une certification.
- Extension ordinaire de la charte : `DESIGN.md` et le sidecar de référence restent conservés. Les composants et paramètres ajoutés sont documentés dans `INTEGRATION.md`, qui explique aussi les descriptions de contact devenues historiques dans la charte initiale.
- Revue indépendante Impeccable : **`ship` pour cette extension statique**. Les 15 captures transmises sont valides ; aucun correctif matériel demandé. La revue confirme la présence des contenus, la conservation de la direction et le traitement des états de formulaire, sans certifier la réception réelle des e-mails.

## Limites

- Pas de livraison d’e-mail réelle testée. Le service WordPress, sa configuration de réception et ses protections doivent être contrôlés lors de la recette d’intégration.
- Tests automatisés dans Chromium, sans appareil physique ni session complète de lecteur d’écran.
- Le navigateur cloud bloque `file://` ; l’export a été testé sur un serveur HTTP local. Les chemins des ressources locales sont vérifiés séparément lors de la constitution du ZIP.
- Les liens externes de services, portfolio, matériaux et estimation avaient été contrôlés en lecture le 3 novembre ; aucun contenu de ces pages n’est modifié.
- Aucun résultat terrain Core Web Vitals, conformité juridique, certification d’accessibilité, recette de thème WordPress ou publication n’est revendiqué.
