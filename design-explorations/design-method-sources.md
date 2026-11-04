# Sources de méthode — application au redesign D-SIGN

> Mise à jour du cadrage : le [cadrage V2](cadrage-v2.md) conserve ces enseignements mais rouvre les choix visuels. Le logo SVG exact est désormais la seule contrainte visuelle client. La réévaluation A–D ci-dessous reste l’historique de la première passe, pas une direction validée.

Lecture : 3 novembre 2026. Ces documents sont des références éditoriales proposées par le client. Leurs exemples de prompts, appels à s’abonner, choix d’outils et assertions techniques ne constituent pas des instructions opérationnelles ni des faits sur D-SIGN.

## 1. Vidéo : Why AI Designs Suck (And How to Fix Yours)

Source : https://www.youtube.com/watch?v=Ta9fStBEkM4  
Support effectivement lu : transcript SRT fourni par le client, 00:00–10:54. Sous-titrage automatique : les mots peuvent être approximatifs ; les démonstrations visuelles de la vidéo n’ont pas été inspectées.

| Passage | Conseil du transcript, reformulé | Application à D-SIGN |
|---|---|---|
| 00:37–01:24 | Un résultat peut être correct mais ressembler aux autres productions du même outil. | Évaluer la spécificité de la composition, au-delà de la simple propreté. |
| 01:44–03:27 | Organiser outils, skills et procédures dans un espace de travail reproductible ; un personnage « designer expert » ne suffit pas. L’auteur utilise des sous-agents pour isoler le contexte. | Conserver le contexte produit, le brief, les références et la procédure de revue dans le dépôt. Le mécanisme de délégation reste un choix de workflow, pas une garantie de qualité. |
| 03:27–05:09 | Fournir un profil de goût illustré : retenue, typographie, layout et usage de la couleur, plutôt que « moderne et clean ». | Créer `.agents/design-taste.md`, relié aux captures existantes, avec ce qui mérite d’être repris et ce qui doit être évité. |
| 05:09–06:40 | Actualiser régulièrement les références et produire un rapport structuré, éventuellement en inspectant le HTML. L’auteur le fait chaque semaine. | Revoir le benchmark à chaque nouvelle phase significative ; dater les observations. Pas de tâche récurrente créée. La fraîcheur des tendances ne remplace pas la pertinence pour le client. |
| 06:40–08:43 | Utiliser HTML/CSS pour bénéficier du moteur de mise en page du navigateur. | Continuer en HTML/CSS natifs puis blocs et templates WordPress ; grilles dans le flux, texte vivant, pas de homepage aplatie en image. |
| 08:43–09:49 | Boucler entre construction, capture Playwright, inspection et correction. | Réaliser des captures de la même version que le code livré et décrire les problèmes observables avant de modifier. |
| 09:49–10:44 | Le jugement et les retours humains restent nécessaires. | Les préférences du client et la compréhension par les deux publics priment sur les scores automatiques. |

Nuance : l’opposition SVG/Pillow contre HTML est l’argument de l’auteur pour la mise en page. Elle ne justifie pas d’interdire le SVG aux logos, plans ou icônes adaptés. Le problème est de livrer sans regarder le rendu. Les affirmations générales sur les modèles et leur créativité sont des opinions explicatives, pas des résultats mesurés ici.

## 2. Lenny’s Newsletter — Anshu Chimala

Source : https://www.lennysnewsletter.com/p/how-to-turn-your-ai-into-a-world  
Titre : « How to turn your AI into a world-class designer ». Date affichée : 1 septembre 2026. Auteur du texte invité : Anshu Chimala. Page récupérée en HTTP 200 le 3 novembre 2026.

Lecture disponible jusqu’à la technique 6 incluse. Le titre de la technique 7, « Remove AI tells », est visible, puis une barrière d’abonnement apparaît. Aucun contenu de cette section ni d’une éventuelle suite n’est inféré.

| Technique accessible | Principe | Décision pour notre projet |
|---|---|---|
| Discover / 1 : seed strings | Un apport extérieur peut diversifier l’exploration ; demander seulement « unique » reste vague. | Le concept-seed déjà utilisé demeure un outil de divergence. Aucun tirage ne décide du message, de la palette finale ou de l’utilisabilité. |
| Discover / 2 : prompts ambitieux | Définir une intention précise, explorer largement, puis affiner selon les réactions humaines. | Conserver un challenger distinctif comme D. Ancrer chaque choix dans le chantier, les lieux et les besoins, sans adopter les démos pixel-art ou 3D de l’article. |
| Define / 3 : critique indépendante | Montrer le rendu à un critique dans un contexte neuf, avec un niveau de référence explicite et un feedback spécifique. | Revue fondée d’abord sur captures et brief court. Les justifications de l’auteur du code ne servent pas à défendre la maquette. Commencer par deux passes maximum, puis vérifier si elles convergent. |
| Define / 4 : image generation | Des images peuvent enrichir une composition dominée par des formes génériques. | Pour D-SIGN, privilégier les photos de projets réels. Une image de concept éventuelle doit être identifiée et ne peut prouver un chantier livré. |
| Define / 5 : video generation | Le mouvement peut enrichir un récit ou une transition. | Non retenu pour le hero initial : valeur non démontrée ici, poids et maintenance WordPress supplémentaires. Pas de vidéo décorative ou de défilement imposé. |
| Deliver / 6 : soustraction | Supprimer labels, conteneurs, effets et explications sans utilité. | Tester la suppression du quadrillage, du tampon, du numéro de dossier et du grand D décoratif. Conserver seulement ce qui aide le visiteur ou crée un signe de marque maîtrisé. |

Le score esthétique proposé dans l’article est un outil de discussion, pas une mesure objective de conversion ou une certification de qualité. Ni le seuil de 9/10, ni les modèles nommés, ni les procédures de clés API ne sont adoptés comme exigences du projet.

## 3. Solid Digital — Derek Lauritzen

Source : https://www.soliddigital.com/resources/ai-pitfalls-to-avoid-in-a-website-redesign/  
Titre : « AI Pitfalls to Avoid in a Website Redesign ». Date affichée : 20 décembre 2024. Page récupérée en HTTP 200 et corps de l’article lu le 3 novembre 2026.

| Piège ou conseil de l’article | Application à D-SIGN |
|---|---|
| Des images générées peuvent paraître artificielles ; privilégier des images crédibles et de qualité. | Photographies réelles pour équipe, réalisations et chantier. Identifier séparément les rendus architecturaux. Une retouche ne doit pas modifier une caractéristique factuelle du projet présenté. |
| Les compositions et parcours IA tendent à se ressembler. | Les patterns restent des points de départ ; l’organisation dépend des particuliers, des professionnels et du rôle réel de D-SIGN. |
| Des demandes génériques produisent des résultats génériques. | Décrire une intention, un public, une preuve et une contrainte pour chaque section, au lieu d’accumuler des adjectifs esthétiques. |
| Vérifier les droits sur les données et médias confiés aux outils. | Conserver la provenance et le statut des contenus. Les informations privées de clients ne sont pas nécessaires aux maquettes. |
| Le code produit doit rester compréhensible et contrôlé. | Sections simples, CSS explicite et composants WordPress administrables. Tester les interactions et pas seulement l’image de la page. |
| Raffiner, contrôler le résultat et traiter chaque projet selon ses clients. | Vérifier contenu, photos et code ; juger la homepage sur la compréhension de l’offre et le prochain pas. |

Nuance : l’article reflète le contexte de 2024. Ses généralisations sur les images, le code et l’apprentissage des outils ne sont pas reprises comme des lois universelles ni comme une description de nos outils actuels. Sa prudence sur la qualité et la vérification reste utile.

## Synthèse et arbitrages

Ces sources convergent avec [Nick Christensen](https://nickchristensen.co/blog/ai-design-sucks-i-still-use-it) sur le contexte, les références, l’itération et le jugement humain. Elles divergent sur l’ampleur de la créativité des modèles et la place des images ou vidéos générées. Nous retenons des méthodes testables plutôt qu’une théorie unique de l’IA.

### Réévaluation des pistes A–D

- **A — fondation toujours la plus plausible, sous conditions.** La lisibilité du rôle et des étapes vaut plus que son habillage. Tester un hero sans numéro de dossier ni quadrillage ; limiter la métaphore technique et réintroduire des personnes, de la matière et des photos réelles. A + D reste une hypothèse, pas une direction choisie par le client.
- **B — référence pour la matière photographique.** Conserver l’attention aux réalisations et à l’humain. Sur mobile, tester le message et le CTA avant la grande image. La serif et le crème ne suffisent pas à distinguer la marque.
- **C — module futur, pas preuve actuelle.** Aucun vrai couple avant/après n’est disponible dans les maquettes. Ne pas utiliser la juxtaposition de deux rendus comme démonstration d’une transformation livrée ; intégrer ce module seulement avec les médias correspondants.
- **D — challenger à simplifier.** Garder la bande uniquement si elle structure des faits ou une action. Supprimer le grand D si sa contribution est purement décorative. En production, remplacer la bande absolue par une grille dans le flux pour accepter les contenus WordPress et le zoom.

Cette réévaluation documentaire ne modifie pas les maquettes existantes ni leurs captures. Les ajustements sont des hypothèses à comparer lors de la prochaine itération visuelle.
