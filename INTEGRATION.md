# Ajouts de contenu et formulaire — version 2

4 novembre 2026. Extension de la homepage approuvée, sans remplacement de son identité.

## Composition

- Les trois raisons de confier son projet à D-SIGN prolongent la section des expertises. Une liste ouverte, un filet fin et une signature commune remplacent les trois répétitions « D-SIGN gère pour vous » ; les trois messages sont conservés, avec de légères corrections grammaticales.
- Le texte complet « À propos » fourni par le client occupe la colonne gauche de la section bleue existante. La photo, les étapes et le détail de méthode restent à droite. Le lien « Découvrir D-SIGN » et la navigation rejoignent désormais `#apropos` ; `#approche` reste disponible pour la méthode.
- Le contact conserve son fond bleu et ses deux colonnes. À gauche : invitation, estimation, zone d’intervention, adresse, e-mail et téléphone. À droite : formulaire. Les colonnes se suivent dans l’ordre de lecture sur mobile.
- Le nom, l’e-mail et le téléphone sont obligatoires, comme sur le formulaire existant. Le message reste facultatif. Les quatre champs sont toujours visibles.

La formulation « la société la plus dynamique » et l’absence de limite géographique viennent des captures expressément fournies par le client. Leur intégration ne constitue pas une vérification indépendante de ces affirmations.

## Respect de la charte

La palette et les polices locales sont inchangées. Les champs blancs, leur texte bleu, le bouton vert, les filets et les angles droits prolongent les composants existants. Les raisons de choix sont du texte dans une grille ouverte, sans icônes ajoutées ni cartes décoratives. Aucun nouveau média n’est produit.

`DESIGN.md` et le sidecar du dépôt restent le socle de la livraison initiale ; ils ne sont pas réécrits pour cette extension. Leur ancienne description du contact sans formulaire est historique. Cette version remplace le grand lien final par un vrai formulaire et ajoute les règles locales suivantes :

- Titre de contact : `clamp(48px, 5.2vw, 76px)`, puis les adaptations mobile existantes.
- Champs : hauteur minimale de 54 px, texte de 16 px, marge intérieure `14px 16px`, angles droits, bleu sur blanc.
- Focus des champs : contour vert de 3 px, décalé de 3 px.
- Erreurs : message lié au champ par `aria-describedby`, contour discontinu et résumé avec liens recevant le focus après une soumission invalide. Le sens ne dépend pas d’une couleur.
- Envoi : bouton désactivé et libellé d’attente pendant la requête ; statut annoncé ; saisie conservée en cas d’échec.

## Raccordement au formulaire existant

Le HTML public de `https://dsign-gbs.fr/`, inspecté le 4 novembre 2026, expose Contact Form 7, formulaire **6**, page **1647**, avec ces champs :

| Donnée | Nom attendu par Contact Form 7 |
| --- | --- |
| Nom | `your-name` |
| E-mail | `your-email` |
| Téléphone | `your-subject` |
| Message | `your-message` |

Le nom `your-subject` désigne bien le téléphone sur le formulaire existant ; il ne faut pas le renommer sans adapter aussi la configuration WordPress et son modèle d’e-mail.

L’attribut `data-contact-endpoint` du formulaire cible `https://dsign-gbs.fr/wp-json/contact-form-7/v1/contact-forms/6/feedback`. Les champs cachés reprennent la configuration publique existante. La requête `OPTIONS` effectuée en lecture a confirmé la méthode POST et les en-têtes CORS pour l’aperçu HTTP local. Aucun POST réel n’a été effectué par les outils de développement.

Le script envoie un `FormData`, sans identifiants privés ni cookies. Les contrôles clients améliorent le parcours ; la validation, l’anti-spam et l’envoi d’e-mail restent sous la responsabilité de Contact Form 7 sur WordPress.

## Intégration dans WordPress

1. Garder le formulaire n° 6 existant, sa réception et son modèle d’e-mail. Si le formulaire ou la page change, générer les paramètres à jour depuis Contact Form 7 et adapter `data-contact-endpoint`, les champs cachés et l’action de repli.
2. Utiliser ce gestionnaire `script.js` pour ce HTML. Ne pas initialiser en parallèle le gestionnaire JavaScript natif de Contact Form 7 sur le même élément : les classes `wpcf7-form` ne sont volontairement pas présentes dans l’export.
3. Si l’intégration conserve plutôt un shortcode Contact Form 7, reprendre le balisage des champs dans sa configuration, adapter le CSS aux wrappers produits et retirer le gestionnaire d’envoi de cet export afin de laisser le plugin gérer ses propres états.
4. Sur un site de recette, raccorder l’URL au service de recette pour ne pas envoyer de demandes à la production. Vérifier les éventuels jetons anti-spam/captcha ajoutés depuis cette inspection.
5. Effectuer ensuite une recette réelle avec réception autorisée, puis vérifier erreur serveur, indisponibilité réseau, clavier et mobile. La réponse `mail_sent` signifie que le service a accepté l’envoi ; elle ne garantit pas la réception dans la boîte du destinataire.

Le ZIP reste un export statique. Il ne crée ni endpoint, ni extension WordPress, ni configuration SMTP. Le service existant doit rester accessible. Les tests automatisés interceptent les réponses de ce service et ne démontrent pas sa délivrabilité réelle.
