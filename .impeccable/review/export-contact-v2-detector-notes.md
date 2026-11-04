# Passe mécanique — contenus et formulaire V2

Le détecteur a été exécuté une fois sur les trois fichiers d’interface, après l’implémentation. Résultats bruts : `export-contact-v2-detector.json`.

- **Contraste vert/blanc signalé** : les éléments textuels verts effectivement rendus sont les cinq accents du texte À propos et les trois astérisques du formulaire. Une lecture des styles calculés et du premier fond opaque ancêtre les place tous sur `rgb(28, 28, 88)`, pas sur blanc. Les scans axe des états initiaux et d’erreur à 390 et 1440 px ne rapportent pas de violation. Le vert clair n’est pas utilisé comme texte sur les sections blanches.
- **Padding du hero** : le filet inférieur appartient à la section ; l’espace est porté par `.hero-bottom`, 26 px sur desktop et 20 px sur mobile. Aucun changement demandé au hero.
- **Instrument Sans** : famille locale de la direction déjà approuvée, conservée à la demande du client.
- **Couleurs et tailles hors frontmatter** : les fonds d’attente d’images et plusieurs tailles locales étaient déjà documentés en prose ou présents dans la première livraison. Les nouveaux textes et champs reprennent la palette existante. La charte n’est pas réécrite pour faire disparaître ces advisories ; les règles locales nouvelles sont consignées dans `export/INTEGRATION.md`.

Pendant la première inspection, le lien d’évitement déplacé hors écran pouvait réapparaître comme artefact de composition dans les longues captures de section. Un découpage CSS le masque hors focus, tout en le conservant dans l’ordre clavier et en le révélant au focus. Ce comportement a été vérifié dans le navigateur puis les captures ont été refaites.
