# D-SIGN GBS — brief de redesign de la homepage

> **Historique V1.** La base actuelle est le [cadrage V2](cadrage-v2.md). Ses règles de logo et de direction ouverte priment sur les hypothèses A + D et de palette ci-dessous. Le texte historique est conservé pour traçabilité.

Date : 2026-11-03  
Cible : WordPress, HTML/CSS/JS léger

## Ce que la homepage doit accomplir

En quelques secondes, un nouveau visiteur doit comprendre que D-SIGN GBS accompagne des projets de rénovation, d’extension et de construction, pour des particuliers comme pour des professionnels. La page doit ensuite lui permettre de vérifier le sérieux de l’entreprise, de choisir le bon parcours et de décrire son projet.

Action principale proposée : **Décrire mon projet**.  
Action secondaire : **Voir les réalisations**.

## Diagnostic du site actuel

### Actifs à préserver

- Le nom et le wordmark D-SIGN.
- Le bleu profond, déjà reconnaissable, à faire évoluer dans une palette plus maîtrisée.
- Le triptyque Rénovation / Extension / Construction.
- La promesse d’un interlocuteur unique et l’accompagnement de la conception au chantier.
- Le parcours d’estimation déjà présent.
- L’ancrage à Boves, Amiens et dans les Hauts-de-France, sous réserve de clarification de la zone exacte.

### Problèmes à résoudre

- Le hero « Votre spécialiste Travaux & Construction » est interchangeable avec celui de nombreux concurrents.
- La homepage n’apporte aucune preuve visible : avis, chiffres, labels, assurances, équipe ou étude de cas.
- Les bénéfices restent abstraits et répètent « D-SIGN gère pour vous » sans expliquer le rôle réel.
- Les visuels mélangent photo générique, rendus 3D et images de banque sans direction commune.
- Le responsive mobile casse le grand titre et allonge fortement les tuiles services.
- La vidéo du hero pèse environ 6,9 Mo et ralentit le premier écran.
- Le formulaire et les coordonnées manquent de réassurance et de clarté sur l’étape suivante.
- La zone d’intervention est formulée de manière contradictoire.

## Benchmark retenu

- **Little Worker** : éditorial chaleureux, projets nommés et équipe incarnée. Référence la plus pertinente pour la photographie et le ton.
- **hemea** : promesse nette de courtage en architecture et rénovation, pilotage de bout en bout, preuve placée tôt.
- **Camif Habitat** : pédagogie du parcours et capital confiance, avec une densité à ne pas reproduire.
- **Notes de Styles** : traitement explicite des particuliers et professionnels.
- **La Maison Saint-Gobain** : qualification du besoin et estimation, sans imposer un formulaire lourd dès l’arrivée.
- **Rhinov** : transformation visuelle et présence humaine, en évitant les codes trop « décoration en ligne ».

Le redesign ne copie aucune de ces identités. Il retient leurs mécanismes utiles : promesse précise, projets contextualisés, parcours lisible, preuves proches des affirmations et CTA constant.

## Architecture proposée

1. **Premier écran**  
   Promesse claire, rôle de D-SIGN, trois services, CTA principal et accès aux réalisations.

2. **Deux chemins de lecture**  
   « Je suis un particulier » et « Je suis un professionnel », chacun menant vers les besoins correspondants.

3. **Preuves immédiates**  
   Zone d’intervention confirmée, assurances et labels, nombre de projets ou avis uniquement si vérifiables.

4. **Services**  
   Rénovation, extension et construction, expliquées par le résultat attendu et le rôle concret de D-SIGN.

5. **Réalisations**  
   Trois projets documentés avec lieu, type de client, mission, contrainte et résultat. Les rendus doivent être identifiés comme tels.

6. **Méthode**  
   Prise de contact, plans, chiffrage, devis, réalisation. Chaque étape explique ce que fait D-SIGN et ce que reçoit le client.

7. **Entreprise et équipe**  
   Visages, rôle, expérience vérifiable et manière de travailler.

8. **Questions fréquentes**  
   Zone, types de projets, périmètre de la mission, budget, premier rendez-vous et suite donnée au formulaire.

9. **Prise de contact**  
   Formulaire court, coordonnées cliquables, délai de réponse réel et rappel de l’étape suivante.

## Base de copywriting

### Hero

**Titre :** Votre projet, cadré de l’idée au chantier.  
**Sous-titre :** D-SIGN accompagne particuliers et professionnels pour concevoir, chiffrer et coordonner leurs projets de rénovation, d’extension ou de construction.  
**CTA principal :** Décrire mon projet  
**CTA secondaire :** Voir les réalisations

### Deux publics

**Particuliers**  
Rénover un logement, créer une extension ou construire un lieu adapté à votre quotidien.

**Professionnels**  
Faire évoluer un local ou construire un bâtiment en tenant compte de l’activité, du budget et des contraintes du site.

### Services

**Rénovation**  
Repenser un espace existant, améliorer son confort et organiser les travaux dans un même projet.

**Extension**  
Créer les mètres carrés qui manquent, depuis les premières esquisses jusqu’au suivi du chantier.

**Construction**  
Transformer un besoin en plans, en budget et en réalisation coordonnée.

### Méthode

**1. Comprendre le projet**  
Vous présentez le lieu, le besoin, le calendrier et les premières contraintes.

**2. Concevoir et chiffrer**  
D-SIGN travaille les plans, précise le périmètre et prépare le chiffrage.

**3. Consulter et décider**  
Les propositions sont comparées et expliquées avant l’engagement.

**4. Coordonner le chantier**  
Les intervenants et les étapes sont suivis selon le périmètre convenu.

### CTA final

**Titre :** Parlez-nous du projet que vous voulez concrétiser.  
**Texte :** Décrivez votre projet et recevez un premier retour sur les prochaines étapes.  
**Bouton :** Décrire mon projet

## Charte : fondations communes

- Employer **D-SIGN** comme nom de marque visible et **D-SIGN GBS** dans le titre SEO, les mentions et les contextes administratifs. La signification et le maintien de « Global Building Solutions » restent à confirmer.
- Une palette courte avec un bleu profond comme ancrage de confiance et un accent limité aux actions ou informations de projet.
- Un contraste minimum de 4,5:1 pour le texte courant.
- Une voix directe, calme, concrète et humaine.
- Des titres expressifs qui restent compréhensibles sans phrase décorative au-dessus.
- Des images légendées avec lieu, mission et statut : photo de réalisation, chantier ou rendu.
- Des animations rares, courtes et désactivables avec `prefers-reduced-motion`.
- Une grille et des composants transposables dans des blocs WordPress administrables.

Les couleurs et les typographies définitives dépendent de la direction choisie dans `homepage-directions.html`.

## Méthode enrichie et direction provisoire

La [synthèse des sources](design-method-sources.md) intègre le transcript fourni, la partie accessible de l’article d’Anshu Chimala chez Lenny et l’article de Solid Digital. Le [profil visuel](../.agents/design-taste.md) relie nos intentions à des captures concrètes. Les conseils sont adaptés aux projets de travaux et à WordPress ; ils ne deviennent pas des faits sur l’entreprise.

La base A enrichie de D reste une **hypothèse à comparer**, pas un choix validé. Prochaine passe : tester A sans numéro de dossier ni quadrillage, une bande réellement informative, des légendes et des photos plus humaines. Réduire les effets superflus avant d’en ajouter. B nourrit la direction photo ; C attend de vrais avant/après.

La charte finale doit préciser les rôles des couleurs, la hiérarchie typographique, les espacements, les cadrages et légendes, ainsi que les états interactifs. Elle doit fonctionner dans les services, les projets et le formulaire, pas seulement dans le hero.

### Grille de revue pour la prochaine itération

| Critère | Vérification concrète |
|---|---|
| Compréhension | En cinq secondes, un lecteur extérieur identifie activité, publics et prochaine action. Le test reste à réaliser. |
| Spécificité | Chaque signe visuel et chaque phrase répond au métier ou à une preuve ; retirer les éléments génériques sans fonction. |
| Crédibilité | Projet, mission, lieu, statut de l’image et preuve publiable sont confirmés. Aucun rendu ne se fait passer pour une livraison. |
| Retenue | Tester la suppression de labels, cadres, motifs ou répétitions avant de chercher un effet supplémentaire. |
| Deux publics | Le particulier trouve son besoin ; le professionnel voit ses locaux, son activité et ses contraintes pris en compte. |
| Rendu réel | Captures de la version livrée à 390 et 1280 px, puis contrôle des largeurs intermédiaires et du zoom. |
| Utilisabilité | Navigation mobile, clavier, focus, contrastes, cibles et formulaire avec succès/erreur vérifiés dans le navigateur. |
| WordPress | Blocs modifiables, images responsives, contenus longs acceptés, polices locales, contenu visible sans JavaScript. |

Les liens et menus des explorations sont des éléments de maquette ; ils ne constituent pas un parcours de production testé. Les contrôles de la future homepage seront consignés avec leurs résultats réels. Deux passes de critique initiales suffisent pour identifier les priorités ; aucun score esthétique automatique ne vaut acceptation.

## Éléments à obtenir avant la production

- Zone d’intervention exacte.
- Logo source et règles éventuelles d’utilisation.
- Portraits de l’équipe et description des rôles.
- Trois à six projets avec photos réelles, lieux, nature de la mission et résultat.
- Couples avant/après si la direction C est retenue.
- Assurances, certifications, labels et partenaires pouvant être publiés.
- Témoignages attribués et autorisés.
- Chiffres fiables : ancienneté, nombre de projets, note ou délai de réponse.
- Fonctionnement réel de l’estimation en ligne et informations nécessaires au premier contact.

## Contraintes WordPress

- Prévoir des blocs simples : hero, chemins d’audience, services, réalisations, étapes, équipe, FAQ et formulaire.
- Utiliser des champs administrables pour les textes, images, légendes, CTA et projets.
- Générer AVIF/WebP et tailles responsives ; éviter la vidéo automatique lourde au premier écran.
- Garder le contenu visible sans JavaScript et limiter le script aux interactions utiles.
- Prévoir les styles de focus, les erreurs de formulaire et les textes alternatifs dès le thème.
