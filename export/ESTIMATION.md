# Simulateur d’estimation D-SIGN — démonstration

Le module `estimation.html` reprend les domaines, services et écrans du simulateur public [Kovan](https://kovan.fr/simulator), observé le 5 novembre 2026. Le code d’interface est propre à D-SIGN et réutilise sa charte. Le bouton **J’estime mon projet** du hero, la navigation **Estimation** et le lien d’estimation du contact ouvrent ce module.

## Analyse du parcours de référence

| Écran | Choix / contenu | Suite |
| --- | --- | --- |
| Domaines | Onze domaines, sélection multiple | Voir tous les services, avec leur nombre |
| Travaux | Union des services des domaines choisis, sélection multiple | Continuer après au moins un service |
| Budget | Une des quatre tranches | Continuer après sélection |
| Délais | Un des quatre délais | Continuer après sélection |
| Coordonnées | Prénom, nom, email, téléphone, adresse, code postal, ville ; consentement email facultatif | Recevoir mon estimation |
| Confirmation | Merci et retour à l’accueil après dix secondes | Retour manuel ou automatique |

Les quatre budgets sont **Moins de 5 000 €**, **5 000 € - 15 000 €**, **15 000 € - 30 000 €**, **Plus de 30 000 €**. Les quatre délais sont **Moins de 3 mois**, **3 à 6 mois**, **6 à 12 mois**, **Plus de 12 mois**. Tous les domaines empruntent cette même suite ; aucune question conditionnelle propre à un métier n’a été observée.

| Domaine | Services |
| --- | ---: |
| Chauffage & Climatisation | 8 |
| Isolation | 5 |
| Menuiseries | 3 |
| Salle de bain & Cuisine | 7 |
| Aménagement intérieur | 7 |
| Adaptation du logement | 7 |
| Toiture & Façade | 5 |
| Extérieur | 6 |
| Gros œuvre | 3 |
| Extension & Surélévation | 6 |
| Rénovation globale | 4 |
| **Total** | **61** |

Le simulateur de référence prépare une demande de contact et n’affiche pas de calcul de prix. Il ne demande pas de surface dans le parcours public observé. Le budget est celui choisi par le visiteur, pas un résultat calculé. Aucune demande n’a été soumise à Kovan pendant l’inspection. Les onze listes de services ont été vérifiées dans son interface ; les autres écrans ont été parcourus jusqu’au formulaire, sans soumission. Les libellés complets sont dans `assets/estimation/catalogue.json` ; les observations et captures de référence sont conservées dans les rapports du dépôt.

## Fonctionnement de la démonstration

- La sélection des domaines et des services est multiple. Les services s’affichent dans l’ordre des domaines sélectionnés.
- Le bandeau des cinq étapes reste sticky en haut pendant le défilement. Les boutons Retour et Continuer sont placés juste sous les numéros ; à l’étape des coordonnées, le même emplacement propose Recevoir mon estimation. Aucun déplacement en bas du formulaire n’est nécessaire pour avancer.
- Le bouton Retour, la progression et l’historique du navigateur conservent les choix pertinents. Retirer un domaine supprime ses services du projet, en conservant ceux des autres domaines.
- Le budget et le délai utilisent des groupes de boutons radio natifs. Le parcours ne permet pas d’avancer sans les réponses requises.
- Chaque changement d’étape ramène la nouvelle question sous le bandeau sticky. La zone de défilement tient compte de sa hauteur, y compris pour les erreurs et le focus clavier.
- Les sept champs de coordonnées sont validés avec des messages français et un focus sur le premier champ invalide. Les saisies restent en mémoire sur la page pendant les retours.
- Le bouton **Utiliser des coordonnées fictives** remplit un exemple pour tester la fin du parcours.
- **Recevoir mon estimation** ouvre uniquement une confirmation locale. Aucune requête de soumission, aucun email et aucune inscription ne sont effectués. Le module n’écrit pas de coordonnées dans l’URL, le stockage local ou le stockage de session.
- L’adresse est une saisie libre pour cette démonstration ; aucune recherche d’adresse externe n’est appelée.
- La confirmation montre le récapitulatif des travaux, du budget et du délai. Le retour automatique à dix secondes peut être suspendu pour lire le récapitulatif ; une nouvelle simulation efface le brouillon.
- Sans JavaScript, un message explique comment activer le parcours et propose le contact D-SIGN existant.

Les différences volontaires avec la référence sont limitées à la charte D-SIGN, la présentation de démonstration, le bandeau sticky avec ses commandes, la conservation des choix lors des retours, le récapitulatif et la possibilité de suspendre le retour automatique. La promesse Kovan de gratuité, ses coordonnées, son compte utilisateur et son service d’envoi ne sont pas repris.

## Sources et maintenance

- `assets/estimation/catalogue.json` : onze domaines, 61 intitulés/services, quatre budgets et quatre délais relevés.
- `scripts/estimation_page.py` dans le dépôt : génération du HTML statique, appelée par `scripts/generate-pages.py` avec l’en-tête et le footer partagés.
- `estimation.css` : composants locaux, contrôles natifs, état sélectionné, progression, erreurs et adaptation mobile.
- `estimation.js` : état du parcours, retours, historique, validation et confirmation locale.
- `scripts/version-styles.py` : URLs CSS/JS versionnées par leur contenu, contrôlées au déploiement.

Le module n’a pas de dépendance à un framework, un service Kovan, un calculateur externe ou une API de formulaire.

## Futur raccordement WordPress / Contact Form 7

Le propriétaire prévoit le vrai formulaire lors du déploiement WordPress. Le seul point de remplacement est le gestionnaire `submit` de `#estimate-form` dans `estimation.js` : la confirmation locale actuelle devra alors suivre le succès confirmé de Contact Form 7.

| Champ actuel | Rôle Contact Form 7 |
| --- | --- |
| `firstName`, `lastName` | Textes obligatoires |
| `email` | Email obligatoire |
| `phone` | Téléphone obligatoire |
| `address`, `postalCode`, `city` | Adresse, code postal, ville obligatoires |
| `newsletterOptin` | Consentement email facultatif, non coché par défaut |
| `projectCategories` | Liste JSON des domaines choisis, champ caché |
| `projectServices` | Liste JSON des services choisis, champ caché |
| `projectBudget` | Tranche choisie, champ caché |
| `projectTimeline` | Délai choisi, champ caché |

Les quatre champs de contexte sont préparés lors de l’affichage des coordonnées. Ils pourront alimenter le message transmis par Contact Form 7. Le formulaire de contact déjà présent sur la homepage conserve son fonctionnement existant ; le prototype d’estimation ne lui transmet aucune demande.
