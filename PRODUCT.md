# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Prototype en HTML, CSS et JavaScript natif. La version finale doit pouvoir être intégrée dans WordPress sans dépendance à React ni à un framework d’interface.

L’export actuel est `export/index.html` avec `styles.css`, `script.js` et ses assets locaux. Il reconstruit la homepage choisie puis améliore sa cohérence ; il ne constitue pas un thème WordPress installé. La charte extraite de l’export fait foi dans `DESIGN.md` pour les passes suivantes.

La page fournie par le client dans `nos materieux.zip` est intégrée sous `export/nos-materiaux.html`, avec ses contenus, huit visuels et une galerie de sept matières. Elle reprend le header/footer et les polices de la homepage ; ses actions de contact rejoignent le formulaire de celle-ci. Les règles locales et les contrôles sont décrits dans `export/MATERIAUX.md`.

**Ordre courant V7 confirmé par le client le 4 novembre 2026 :** hero, Comment ça marche, Nos métiers, Pourquoi nous choisir, Le mot du fondateur, À propos, matériaux, contact, puis footer. La navigation devient blanche. L’ancienne introduction « Un seul fil. Du début à la fin. », son détail « Notre façon de travailler » et l’ancienne section « Pourquoi nous confier votre projet ? » sont supprimés ; la section « Des espaces qui changent la vie » retirée auparavant reste absente. Ce parcours remplace les versions antérieures dans la charte D-SIGN. Voir `export/STRUCTURE.md`.

**Rythme courant V7 :** header blanc, hero bleu, parcours blanc, métiers minéraux et photographiques, raisons de choix bleues, fondateur minéral, À propos blanc, matériaux minéraux et photographiques, contact bleu, footer blanc. Le propriétaire demande désormais les onze catégories et les 61 exemples de métiers de Kovan.fr, avec filtres, descriptions originales et accès au contact. Cette autorisation remplace la restriction antérieure aux trois services. Les arrondis, ombres douces, mots de titres en dégradé et guillemet SVG sont autorisés dans les couleurs D-SIGN. Aucun réseau, logiciel, label, garantie ou résultat Kovan n’est attribué à D-SIGN. Voir `DESIGN.md`, `export/RYTHME.md` et `.impeccable/directions/homepage-v7-kovan.md`.

## Users

- Particuliers qui préparent un projet de rénovation, d’extension ou de construction.
- Professionnels qui préparent ou font réaliser un bâtiment, un agrandissement ou une rénovation.
- Le site actuel se présente comme actif dans les Hauts-de-France et cite Amiens et ses alentours. La capture fournie par le client le 4 novembre précise « Nous n’avons pas de limite géographique » ; cette formulation est reprise dans le contact, sans vérification indépendante de sa portée opérationnelle.

## Product Purpose

D-SIGN GBS présente et commercialise des prestations de courtage en construction et de maîtrise d’œuvre. L’entreprise accompagne ses clients de la définition du projet à la réalisation des travaux, sur la rénovation, l’extension et la construction ; le catalogue public V7 détaille onze catégories et 61 exemples de travaux à la demande du propriétaire.

La homepage doit permettre de comprendre l’activité, d’identifier le service adapté, de vérifier la crédibilité de l’entreprise et de demander une estimation ou un premier échange.

## Positioning

L’axe actuellement le mieux étayé est celui de l’interlocuteur unique qui conseille, chiffre, coordonne et suit le projet. Il constitue une piste de positionnement à valider, pas encore une différence prouvée face aux concurrents.

## Operating Context

Les visiteurs évaluent un prestataire pour un projet engageant financièrement et émotionnellement. Ils cherchent à réduire l’incertitude sur le budget, les étapes, les intervenants, les délais et la qualité du résultat. La décision repose fortement sur les réalisations, le sérieux perçu et la clarté du prochain échange.

## Capabilities and Constraints

- Catalogue V7 autorisé par le propriétaire : Chauffage & Climatisation, Isolation, Menuiseries, Salle de bain & Cuisine, Aménagement intérieur, Adaptation du logement, Toiture & Façade, Extérieur, Gros œuvre, Extension & Surélévation, Rénovation globale. Les 61 exemples et leurs descriptions originales figurent dans `export/assets/trades/catalogue.json` ; ce périmètre remplace la limitation précédente aux trois services généraux.
- Accompagnement annoncé : recherche du terrain, conception des plans, chiffrage, consultation et coordination des intervenants, suivi du chantier.
- Parcours existant d’estimation en ligne : `/devis-en-ligne/`.
- La homepage V7 conserve le texte « À propos » fourni par le client et le formulaire à quatre champs raccordé à l’API publique du Contact Form 7 existant (n° 6). L’ancien bloc « Pourquoi nous confier votre projet » intégré en V2 est remplacé par les quatre bénéfices de « Pourquoi nous choisir ». Aucun envoi réel de test n’a été effectué ; les états du formulaire ont été testés par interception réseau.
- Kevin HUART est le fondateur de D-SIGN, nom confirmé par le propriétaire. Le propriétaire a autorisé un message original adapté de la référence et centré sur l’accompagnement annoncé. La V7 utilise le portrait réel demandé : le même cliché est retrouvé sur la page officielle H2Z `https://h2z-immobilier.fr/agence/`, puis optimisé localement, recadré et présenté en miroir. L’original est conservé dans `assets/people/kevin-huart-source.jpg`, avec provenance du WebP exporté ; aucun visage n’est généré.
- Cible technique : WordPress, avec des sections administrables et des médias optimisés.
- Les statistiques, garanties, labels, assurances, délais de réponse et témoignages restent à fournir. Aucun élément de ce type ne doit être inventé.

## Brand Commitments

- Nom : D-SIGN, avec la signature actuelle « Global Building Solutions ».
- **Contrainte visuelle client confirmée le 2026-11-03 : conserver le logo SVG complet et intact**, source `https://dsign-gbs.fr/wp-content/uploads/2024/12/logo.svg`, copie de référence `assets/brand/dsign-logo.svg`. Le fond bleu et la signature sur bande verte font partie du fichier : pas de recadrage, recoloration, filtre ni substitution textuelle.
- **Direction choisie par le client le 2026-11-03 : `https://dsign-architecture.vic60400.chatgpt.site/`, désormais visible dans sa capture `https://i.imgur.com/KfDjzWy.jpeg`.** Elle remplace les choix A/B/C : bleu profond, accents verts, grands titres sans empattements, hero à image en D, sections de services/projets/accompagnement/matériaux/contact. La capture desktop est archivée et inspectée ; le site reste protégé. Ne pas prétendre connaître son CSS, sa police exacte ou son mobile. Voir `design-explorations/direction-retenue.md`. Les couleurs du SVG restent intactes.
- L’article « AI Design Sucks. I Still Use It to Build My Websites » est une référence de méthode : recherche et message avant décor, directions réellement différentes, évaluation sur le rendu réel, refus des recettes visuelles génériques.
- La vidéo « Why AI Designs Suck (And How to Fix Yours) », l’article accessible d’Anshu Chimala chez Lenny et Solid Digital complètent cette méthode : profil visuel illustré, critique du rendu, soustraction et contrôle humain. Voir `design-explorations/design-method-sources.md` pour les passages lus, les horodatages et les limites.
- Lire `design-explorations/cadrage-v2.md` et `.agents/design-taste.md` avant une nouvelle passe visuelle. Le cadrage V2 est la base actuelle ; A + D et les explorations V1 sont des essais historiques, pas une direction de départ imposée. Une référence générative ne doit jamais servir de preuve d’une réalisation réelle.

## Evidence on Hand

- Portfolio actuel : projets de rénovation, construction et agrandissement à Boves, Vers-sur-Selle, Grattepanche et Berck.
- Photos et rendus présents dans la médiathèque WordPress actuelle.
- Coordonnées publiées : 5 rue des Indes Noires, 80440 Boves ; contact@dsign-gbs.fr ; 06 07 95 40 46.
- Aucune donnée chiffrée, certification, note client ou citation client vérifiable n’est actuellement disponible sur la homepage.

## Product Principles

1. Montrer les projets avant d’affirmer la qualité.
2. Expliquer clairement qui coordonne quoi et ce qui se passe après la prise de contact.
3. Servir particuliers et professionnels avec deux chemins lisibles dans une même promesse.
4. Utiliser le langage concret du chantier et éviter les superlatifs invérifiables.
5. Concevoir chaque section pour rester simple à administrer et rapide à charger dans WordPress.

## Accessibility & Inclusion

La homepage doit respecter le niveau WCAG 2.2 AA : contraste suffisant, navigation clavier, focus visible, structure sémantique, textes alternatifs, cibles tactiles confortables et prise en charge de `prefers-reduced-motion`.
