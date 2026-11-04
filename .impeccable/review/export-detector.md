# Passage mécanique Impeccable — export

Commande exécutée une fois : `impeccable detect --json export/index.html export/styles.css export/script.js`.

- **low-contrast — hover :** `#70c875` sur `#70c875`. Défaut réel du lien de contact du menu mobile, causé par le hover des liens génériques. Corrigé par une règle hover spécifique : texte navy, fond green-hover. Le contrôle navigateur des états vérifie la couleur calculée.
- **cramped-padding — hero / border-bottom :** avertissement sur le wrapper section. La ligne de bas de hero dispose déjà de 26 px de padding vertical. L’image, le texte et le lien ne touchent pas la bordure ; conserver le système de la référence. Ce diagnostic de wrapper n’implique pas de changement visuel arbitraire.
- **overused-font — Instrument Sans :** trois occurrences du même avertissement, HTML et deux fontes CSS. Choix assumé de fidélité à la sans-serif de la référence, pas une nouvelle exploration typographique. Fontes locales et deux graisses seulement. Ne pas changer de voix pour faire disparaître le diagnostic.

Le scan n’a pas été relancé. Les contrôles rendus, les contrastes et la revue indépendante restent nécessaires ; ces remarques ne constituent pas une validation globale.
