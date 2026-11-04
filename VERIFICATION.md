# Vérification de l’export — version 8

Contrôles du 4 novembre 2026 pour les cinq nouvelles pages et leur intégration à la navigation du site.

- **40 combinaisons : cinq pages à 320, 390, 768, 900, 1024, 1280, 1440 et 1920 px.** Un H1 par page, médias présents, ancres locales valides ; aucun débordement horizontal ou titre tronqué détecté. Les captures complètes desktop/mobile sont prises après chargement des fontes et images.
- **Portfolio : neuf fiches, trois par catégorie.** Filtres au clavier, bouton sélectionné et nombre de résultats vérifiés. Galerie native : deux vues, flèches du clavier, précédent/suivant, Échap, clic extérieur et retour du focus. Liens directs vers une fiche, correction d’un filtre incompatible et catégorie dans l’URL vérifiés.
- **Méthode : cinq étapes.** Remplissage intermédiaire, étape courante et position fixe du rail vérifiés en avançant, revenant et rejoignant les différentes étapes aux huit largeurs. Le défilement doux natif a été testé avec mouvements autorisés ; les autres captures et contrôles utilisent le mouvement réduit.
- **Services :** dix besoins présents par page ; trois questions dépliables actionnées au clavier. Les liens vers les projets et la méthode sont locaux. Les trois CTA de service rejoignent le formulaire et préparent le bon sujet ; les valeurs étrangères à la liste autorisée, dont `__proto__`, sont ignorées. **Aucun message réel n’est envoyé par ces contrôles.**
- **Accessibilité automatisée : zéro violation axe WCAG 2A/AA/2.1AA/2.2AA à 390 et 1440 px** sur les cinq pages, la galerie ouverte et les questions dépliées. Le petit libellé de méthode sur minéral a été corrigé en bleu pour son contraste. Le détecteur mécanique a été exécuté une fois et ses résultats sont expliqués dans les notes de revue du dépôt.
- **Sans JavaScript :** neuf fiches et liens vers leurs images, cinq étapes de méthode et FAQ natives utilisables. Les filtres inactifs sont masqués. L’accueil conserve ses onze catégories/61 exemples ; la galerie matériaux et la navigation vers les nouvelles pages ont été contrôlées sur desktop/mobile.
- Le logo officiel est inchangé. Les nouvelles images proviennent des pages officielles et possèdent une provenance. Le portfolio source partage les mêmes vues entre plusieurs fiches : les limites sont détaillées dans `PROJETS-SERVICES.md`, sans présenter ces vues de conception comme des photographies de chantiers livrés.

La revue indépendante initiale a inspecté les cinq pages, la galerie et la méthode, puis demandé un seul correctif : séparer le focus des réponses dépliées. Une marge intérieure haute de 12 px a été ajoutée ; les six états ont été recapturés avec focus, revérifiés par axe et par mesure. Le verdict de correction évalue ce point **résolu (`ship` à cette portée)**, sans autre modification demandée.

Ces contrôles ne remplacent pas une recette complète sur appareils physiques, avec lecteur d’écran, ni une validation du thème WordPress ou de la délivrabilité réelle du service de contact. La V8 est un export statique ; la vérification d’archive et la publication sont contrôlées séparément.

## Historique des contrôles V7

Les contrôles ci-dessous portent sur l’évolution de la homepage V7. La V8 conserve ses contenus et ajoute les pages intérieures selon `PROJETS-SERVICES.md`.

Contrôles du 4 novembre 2026 pour le catalogue complet et l’évolution visuelle demandés par le propriétaire.

- **Onze catégories et 61 exemples**, avec une correspondance vérifiée entre le catalogue structuré et les cartes affichées. Les 52 illustrations distinctes sont locales ; chaque provenance/hash est conservé. Le vrai portrait de Kevin HUART remplace le visuel d’ambiance de la V6.
- **Huit largeurs Chromium : 320, 390, 768, 900, 1024, 1280, 1440 et 1920 px.** Chaque filtre est actionné par focus puis Entrée : une seule catégorie et un seul bouton sélectionnés, nombre d’exemples correct, absence de débordement et de texte tronqué détecté.
- Ancres, médias et ordre des huit sections conservés. Aucun média manquant ou erreur JavaScript détecté. Sans JavaScript, les onze groupes et 61 exemples restent accessibles, sans boutons inactifs.
- Boutons en pilule, cartes de rayon 18 px, portrait réel, citation SVG et titres en dégradé vérifiés. Le mode de couleurs forcées conserve des titres visibles. Repli uni et impression prévus dans le CSS ; aucune police distante ajoutée.
- **Axe WCAG 2A/AA/2.1AA/2.2AA : zéro violation automatisée à 390 et 1440 px.** Les textes clairs restent sur bleu/voile bleu ; les dégradés sont expressément demandés. Résultats et notes du détecteur conservés dans le dépôt.
- Les cartes rejoignent le contact et préparent le sujet choisi. Une nouvelle sélection remplace le texte automatique intact ; un texte personnel saisi est conservé. La validation vide affiche les trois erreurs obligatoires. **Aucune sélection de carte ni aucun test n’envoie de message réel.**
- Menu mobile, fermeture Échap, retour du focus, liens et navigation partagée avec la page matériaux contrôlés. Les captures complètes et les sections desktop/mobile ont été inspectées après chargement des fontes et images.

La revue indépendante conclut **`ship` à la portée de l’interface V7**, sans correctif matériel ni recapture demandés. Elle a inspecté les captures et réalisé des contrôles indépendants de clavier, filtrage et préremplissage sur desktop/mobile ; elle ne teste pas la publication ou un envoi réel.

Ces contrôles ne remplacent pas une recette complète sur appareils physiques ou lecteur d’écran, ni un essai réel de délivrabilité Contact Form 7 ou d’intégration WordPress. La vérification d’archive et celle de la publication sont réalisées séparément.

## Historique des contrôles V6

Les contrôles ci-dessous décrivent la V6 et sa précédente présentation des métiers. La V7 la remplace selon `METIERS.md` et `DESIGN.md`.

Contrôles du 4 novembre 2026 pour la nouvelle séquence de homepage et la navigation blanche partagée avec les matériaux.

- Huit largeurs Chromium : **320, 390, 768, 900, 1024, 1280, 1440 et 1920 px**. Ordre vérifié : hero, Comment ça marche, Nos métiers, Pourquoi nous choisir, Le mot du fondateur, À propos, matériaux, contact. Ancien bloc de méthode et ancienne section de raisons retirés.
- Aucun débordement horizontal, média manquant, ancre locale morte ou erreur JavaScript détecté. SVG officiel et fichiers d’images/polices existants conservés.
- Les trois filtres de métiers et le retour « Tous les métiers » sont vérifiés à chaque largeur, avec un seul bouton sélectionné et une annonce du résultat. Sans JavaScript, les trois métiers restent accessibles et les boutons de filtrage sont masqués.
- Menu mobile blanc : fermeture après navigation, au clic extérieur et par Échap avec retour du focus. Liens de la page matériaux vers les nouvelles sections vérifiés sur desktop/mobile.
- **Axe WCAG 2A/AA/2.1AA/2.2AA : zéro violation automatisée à 390 et 1440 px**, filtres rendus et images chargées. Le détecteur Impeccable a été exécuté une fois ; les alertes statiques sont expliquées dans les notes de revue du dépôt.
- Formulaire conservé : la soumission vide affiche les trois erreurs obligatoires sans requête vers le service. Le code d’envoi n’est pas modifié. **Aucun message réel n’a été envoyé.** Les scénarios interceptés de la V2 restent documentés ci-dessous comme historique, sans prétendre à un nouvel essai de délivrabilité.
- Captures desktop/mobile et gros plans inspectés après chargement des fontes et images. Revue indépendante : **`ship` à la portée de l’interface modifiée**, sans correctif matériel requis ; elle ne couvre pas la publication ni un nouvel essai du service de contact.
- Kevin HUART est le nom fourni par le propriétaire. Message rédigé pour D-SIGN à partir du thème de la référence ; aucune reprise des affirmations propres à Kovan. L’image du bloc est explicitement un visuel d’ambiance, pas un portrait du fondateur.

Les contrôles de cette version ne remplacent pas une recette sur appareils physiques, avec lecteur d’écran, ni une validation du thème WordPress. L’archive V6 est vérifiée séparément : CRC, ressources locales, identifiants uniques, logo identique et copie de la charte.

## Historique des contrôles V2

Les contrôles ci-dessous décrivent la V2 ; son ordre et son disclosure de méthode ne représentent plus la homepage courante.

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
