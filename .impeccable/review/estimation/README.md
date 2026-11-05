# Module d’estimation — vérification

Demande : reprendre les domaines, services et parcours du simulateur Kovan, sous la charte D-SIGN, avec accès depuis le hero et formulaire fictif en attendant WordPress / Contact Form 7.

La référence a été inspectée réellement pour ses onze domaines et ses 61 services, puis ses écrans communs budget/délais/coordonnées ; aucune soumission n’a été faite à Kovan. Voir le dossier voisin simulator-reference et `export/ESTIMATION.md` pour l’analyse, les libellés et la future intégration.

## Résultats

- Correspondance exacte des onze domaines, 61 valeurs/libellés de services et quatre budgets/quatre délais avec le relevé de référence.
- Chaque domaine parcouru et chacun des 61 services sélectionné/désélectionné dans le module.
- Union multi-domaines dans l’ordre de sélection, conservation des choix au retour et retrait des seuls services devenus incompatibles.
- Chemin cumulant les onze domaines et 61 services jusqu’au formulaire ; données du récapitulatif et des champs de contexte vérifiées.
- Les 16 combinaisons budget/délai arrivent à la confirmation locale avec le bon récapitulatif ; zéro requête réseau lors de chaque soumission fictive.
- Sept coordonnées obligatoires, erreurs françaises et focus initial ; cas email/téléphone/code postal invalides vérifiés.
- Clavier natif, focus visible, historique précédent/suivant, effacement par Nouvelle simulation, absence d’écriture dans URL/localStorage/sessionStorage, fallback sans JavaScript.
- 42 états de rendu : six écrans à 320, 390, 600, 768, 1024, 1440 et 1920 px, sans débordement ni libellé tronqué.
- Douze contrôles Axe WCAG A/AA (y compris WCAG 2.2), six états à 390/1440 px : aucune violation.
- Retour automatique à l’accueil après dix secondes vérifié ; commande de suspension visible sur la confirmation.
- Navigation partagée des huit pages contrôlée à quatre largeurs ; accès du hero au module vérifié.

`report.json` contient les résultats. Les captures couvrent les écrans desktop/mobile, la sélection, la validation, le formulaire complet, le compte à rebours et la confirmation suspendue. Les images du hero ont été recapturées après décodage de leurs photos pour exclure un chargement partiel.

## Détecteur

Le scan manuel consigné dans detector.json a relevé un saut h1→h3 dans le récapitulatif de confirmation : corrigé en h2, avec le même style de 23 px. La règle Axe heading-order passe ensuite à 390 et 1440 px ; les captures de confirmation sont actualisées. Le contraste du compteur de sélection sur fond minéral a été corrigé pendant les tests, avant la série de douze contrôles Axe réussis.

Les autres avertissements concernent Instrument Sans et les gradients retenus, les tailles locales d’un module de formulaire, les fonds sélectionnés/erreurs et les styles d’accueil préexistants ; le calcul mécanique de texte clair sur blanc omet les voiles bleus de certaines cartes. Le rendu et les contrôles navigateur font foi pour ces cas documentés.

Aucun prix n’est calculé ou inventé. Le module ne soumet aucune donnée, ne s’appuie sur aucun service Kovan et ne modifie pas le formulaire de contact existant. Aucune archive ZIP produite.
