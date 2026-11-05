# Consignes du projet

## Livraison GitHub

À la demande du propriétaire, après chaque modification demandée et vérifiée :

- Après une modification des feuilles CSS ou scripts JavaScript de `export/`, exécuter `python3 scripts/version-styles.py` avant le commit pour renouveler leurs URLs dans les pages et éviter un ancien CSS en cache. Le déploiement vérifie ces références.
- Créer un commit décrivant le résultat et pousser sur `main` du dépôt `lopm46/dsign`.
- Inclure les sources, les assets et la documentation concernés ; respecter les exclusions de `.gitignore`.
- À la demande du propriétaire, ne plus générer ni actualiser de ZIP à chaque modification. Pousser les changements sur GitHub ; produire une archive uniquement sur demande explicite. Les anciennes archives restent historiques.
- Vérifier le résultat du push et signaler tout blocage. Ne pas forcer le push ni écraser des modifications distantes.
- Le push GitHub est autorisé sans nouvelle confirmation. La publication du site reste une action distincte, à ne pas effectuer sans demande.

## Hébergement GitHub Pages

Le propriétaire a demandé l’hébergement de la V3 sur GitHub Pages, a activé Pages et rendu le dépôt public. Après les modifications d’`export/`, commiter et pousser sur `main`, puis exécuter `bash scripts/deploy-pages.sh` pour synchroniser `gh-pages`. Ne pas changer la visibilité du dépôt. Voir `GITHUB-PAGES.md`.

## Direction et livraison

À la demande du propriétaire du 5 novembre 2026, la navigation affiche uniquement le nom textuel D-SIGN en dégradé. Conserver le fichier du logo officiel intact dans les assets et au footer, ainsi que les couleurs et la police retenues. La livraison courante est dans `export/`, avec une homepage et une page matériaux en HTML/CSS/JavaScript natif. L’intégration WordPress et ses limites sont décrites dans les documents de ce dossier.
