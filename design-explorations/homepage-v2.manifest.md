# Exploration V2 — contenu et choix

Date : 2026-11-03. Artifact : [homepage-v2.html](homepage-v2.html). Base : [cadrage V2](cadrage-v2.md). Statut : trois directions à choisir ; aucun choix final ni publication.

## Corpus commun réellement disponible

Pas d’API ni de base de projets structurée fournie. Deux médias distincts ont été choisis dans la médiathèque téléchargée ; chaque direction utilise exactement ces deux fichiers, sans inventer de commune, de mission ou de livraison.

| Élément | Source / champ local | Statut | Quantité constatée |
|---|---|---|---|
| Logo intégral | `../assets/brand/dsign-logo.svg` | Réel, fichier demandé par le client ; même empreinte que la source | 1 original, 3 utilisations |
| Vue habitat | `assets/current/project-04.jpg`, 883 × 558 | Réel comme fichier publié, nature visible : rendu architectural | 1 média, 3 utilisations |
| Vue professionnelle | `assets/current/project-vet.webp`, 850 × 873 | Réel comme fichier publié, nature visible : rendu architectural | 1 média, 3 utilisations |
| Attribution et lieu des vues | Aucun enregistrement confirmé | À confirmer ; absent des aperçus | 0 association projet/lieu/mission vérifiée pour ces 2 fichiers |
| Photographies de travaux livrés et équipe | Non fournies pour cette exploration | Aspiratif pour la direction photographique ; pas de substitution stock ou IA | 0 photographie de livraison ou portrait attesté utilisé |
| H1, introduction, CTA, services | Copy de travail du cadrage V2 | Proposition éditoriale cohérente avec l’offre annoncée ; non langage client validé | Même contenu dans les 3 pistes |
| Téléphone, e-mail et adresse | Coordonnées publiées dans le contexte produit | Réel, accès téléphone/e-mail ; aucun message envoyé | 1 jeu de coordonnées, 3 utilisations |
| Avis, volumes, labels, garanties | Non fournis | Non affichés | 0 claim ajouté |
| Formulaire de prise de contact | Non construit dans cette comparaison | CTA dirigé vers les coordonnées de chaque aperçu | 0 envoi ou estimation simulée |

## Périmètre des interactions

Ancres de services, projets et contact ; menu mobile via `details`, fermeture au choix d’un lien ou Escape ; accès téléphone/e-mail ; ouverture d’une piste seule via `?direction=a`, `b` ou `c`. « Retenir » affiche le message à renvoyer dans le chat : aucun choix n’est transmis automatiquement.

Le paramètre de direction seul dépend du JavaScript ; sans JavaScript, les trois pistes et leur contenu restent visibles. La comparaison est du HTML/CSS avec un script court, pas le thème WordPress final.

## Registre de divergence

Les candidats ancrés dans les usages ont été ordonnés ainsi : seuil et visite d’un lieu ; journal régional de projets ; signalétique d’entreprise ; exposition de lieux et légendes ; correspondance projet/client ; diptyque habitat/activité ; table de matières et plans. Le tirage `seed:40fc496846ac1fb9` assigne le quatrième, développé en A. B traduit la lecture immédiate de l’offre dans un diptyque de deux usages, sans la signalétique ni la scène d’exposition de A. C apporte une grammaire d’édition à encres franches.

Le catalogue de références a proposé six challengers. La version imprimée/risograph est conservée comme alternative compétitive : forte distinction graphique, moins immédiate pour lire les lieux. Les bordures florales, le bitmap, le cyclorama, le soleil intérieur et la console VU sont déclinés pour une adéquation moindre avec les publics et l’activité. Les enseignements retenus sont la place du vide, l’ampleur typographique, une hiérarchie de lumière, un point focal et la précision des légendes ; pas de fleurs, pixels, soleil ou instruments décoratifs.

Les boards distants du catalogue n’étaient pas accessibles (HTTP 403). Ils n’ont pas été inspectés ni présentés comme des références de rendu validées ; les thèses s’appuient sur les descriptions de système, le benchmark et les médias vus dans le navigateur.

Le sélecteur Impeccable ne peut pas démarrer dans cet environnement sans navigateur interactif (sortie 2). La comparaison HTML est donc le support de choix. Les directions sont dessinées en HTML pour garder le logo SVG exact, le texte vivant et le responsive inspectable. Aucune préférence de chemin de build n’a été enregistrée comme choix du client.

## Lecture des trois pistes

- **A — Galerie des lieux :** fond charbon, titres Gloock, image majeure et légendes. Deux entrées de publics sont visibles avant les images, et la vue professionnelle dispose d’un cadre plus ample après revue. Sa force finale dépend d’une production photo réelle.
- **B — Deux usages, une entreprise :** fond clair, titres Bricolage Grotesque, deux situations de poids égal. La plus accessible, avec un langage plus familier au secteur.
- **C — Édition de chantier :** papier clair, bleu d’encre et rose, titres Big Shoulders. L’index latéral redondant a été retiré après revue. La plus graphique ; éviter de transformer cette personnalité en bruit visuel lors de l’extension.

Le logo n’est ni recoloré, ni recadré, ni recomposé. Les styles d’image des pistes s’appliquent aux médias de projets, jamais au logo.
