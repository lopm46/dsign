# Audit de secrets — 4 novembre 2026

**Résultat : aucun secret confirmé détecté.** Ce constat porte sur les fichiers et l’historique accessibles au moment du contrôle ; un scanner ne garantit pas l’absence absolue de toute donnée sensible.

## Périmètre et méthode

- Dépôt public `lopm46/dsign`, branches distantes `main` et `gh-pages`, après récupération des branches et tags.
- Historique accessible : 4 commits, 879 blobs distincts avant ce correctif.
- Gitleaks **8.30.1**, binaire officiel dont le SHA-256 a été vérifié : analyse de l’historique Git complet et d’une extraction des fichiers publiés de `main`.
- Exploration des archives activée jusqu’à trois niveaux et décodage standard du scanner ; rapports et journaux expurgés, conservés hors du dépôt pendant le contrôle.
- Recherche complémentaire des noms de fichiers de credentials et des marqueurs de clés privées dans tous les blobs historiques : aucun fichier correspondant et aucune clé privée détectés.
- Aucune validation des chaînes candidates auprès d’un fournisseur externe ; aucune valeur de secret affichée dans le compte rendu.

## Signal unique et correction

Une alerte `generic-api-key` concerne la ligne 104 de `.agents/skills/video/evals/evals.json`, introduite par le commit `97d2c23`. Il s’agit d’une chaîne d’exemple dans le prompt d’un scénario d’évaluation du skill vidéo tiers, identique au fichier d’installation de `coreyhaines31/marketingskills`. Le scénario teste précisément le refus d’utiliser une clé collée dans un chat. Il ne s’agit pas d’une configuration d’authentification du projet ; aucune clé active n’a été identifiée.

La chaîne a été remplacée par `<ELEVENLABS_API_KEY>` pour retirer cette ambiguïté dans la version courante. Le commit historique conserve cet exemple ; l’historique n’a pas été réécrit et aucune alerte n’est masquée par une liste d’exclusion du scanner.

Une nouvelle analyse de la copie des fichiers destinés à être publiés, incluant cette correction et les archives, retourne **zéro alerte**. Les états locaux ignorés par Git ne sont pas publiés et ne font pas partie de ce résultat.

Des exclusions `.gitignore` couvrent désormais les fichiers `.env`, les emplacements usuels de credentials et les clés privées. Elles réduisent les risques d’ajout accidentel, sans remplacer un contrôle des changements avant commit.

## Informations publiques et limites

Les coordonnées professionnelles D-SIGN, les URLs publiques, les identifiants du formulaire Contact Form 7 et la provenance des visuels ne sont pas des secrets d’authentification. Le dépôt contient aussi les documents de travail, skills, captures et exports déjà poussés : ils sont maintenant publics.

L’analyse ne constitue pas un audit d’accès aux comptes, une validation de clés chez leurs fournisseurs ou une reconnaissance OCR exhaustive des images. Si un véritable secret est identifié ultérieurement, sa révocation ou rotation doit précéder la suppression des fichiers ou la réécriture d’historique.
