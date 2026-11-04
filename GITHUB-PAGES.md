# Hébergement GitHub Pages

La V3 est prête à être publiée depuis la branche `gh-pages`. Sa racine correspond exactement au dossier `export/` : la homepage, la page matériaux, les scripts, images et fontes locales. Le reste du dépôt (skills, références de travail, archives) n’est pas déployé.

**État vérifié le 4 novembre 2026 :** le propriétaire a activé Pages et rendu le dépôt public. La homepage et la page matériaux répondent HTTP 200 aux URLs ci-dessous. Les instructions d’activation suivantes sont conservées comme référence.

## Activation initiale

Dans [Settings → Pages](https://github.com/lopm46/dsign/settings/pages) :

1. Sous **Build and deployment**, choisir **Deploy from a branch**.
2. Sélectionner **gh-pages**, dossier **/ (root)**, puis **Save**.

URL attendue après activation et déploiement : https://lopm46.github.io/dsign/ ; page matériaux : https://lopm46.github.io/dsign/nos-materiaux.html.

Lors de la préparation initiale, l’accès Pages de la connexion GitHub utilisée par cet environnement était refusé (`403 Resource not accessible by integration`). Le propriétaire a ensuite effectué l’activation depuis les paramètres GitHub. La publication continue désormais à partir de `gh-pages` ; aucun changement de visibilité du dépôt n’est requis pour les mises à jour.

## Mises à jour

Après avoir commité et poussé les changements sur `main` :

```bash
bash scripts/deploy-pages.sh
```

Le script pousse le contenu commité d’`export/` sur `gh-pages`, sans dépendance de build ni push forcé. Les liens relatifs fonctionnent sous `/dsign/`. GitHub Pages publiera cette branche une fois l’activation initiale effectuée.

Le formulaire utilise le service Contact Form 7 du site D-SIGN existant ; aucun message réel n’a été envoyé pour tester cet hébergement. Le domaine GitHub Pages et la réception doivent être vérifiés lors d’une recette autorisée.
