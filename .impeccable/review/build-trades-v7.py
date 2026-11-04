"""Build the static, progressively enhanced catalogue from the inspected reference.

Input is the committed curated catalogue in export/assets/trades/catalogue.json.
Descriptions are original D-SIGN copy. No download or build is needed to view the site.
"""
from pathlib import Path
import json, html, re

root = Path(__file__).resolve().parents[2]
catalogue = json.loads((root/'export/assets/trades/catalogue.json').read_text())
escape = html.escape
buttons = []
panels = []
for index, category in enumerate(catalogue):
    slug, label = category['id'], category['label']
    buttons.append(f'          <button type="button" data-trade-filter="{slug}" aria-pressed="{str(index == 0).lower()}" aria-controls="trade-{slug}"><svg class="icon" aria-hidden="true"><use href="#trade-{category["icon"]}"/></svg><span>{escape(label)}</span></button>')
    cards = []
    for n, item in enumerate(category['items']):
        title = escape(item['title'])
        cards.append(f'''              <a class="trade" href="#contact" data-project="{title}">
                <img src="{item['image']}" width="800" height="600" alt="" loading="lazy" decoding="async">
                <div class="trade-copy"><h4>{title}</h4><p>{escape(item['description'])}</p><span class="trade-link">Parlons de ce projet<svg class="icon" aria-hidden="true"><use href="#arrow-up-right"/></svg></span></div>
              </a>''')
    panels.append(f'''          <section class="trade-panel" id="trade-{slug}" data-trade-category="{slug}" aria-labelledby="trade-title-{slug}">
            <div class="trade-category-heading"><h3 id="trade-title-{slug}">{escape(label)}</h3><p>{len(category['items'])} exemples de travaux</p></div>
            <div class="trade-grid">\n{chr(10).join(cards)}\n            </div>
          </section>''')

section = f'''    <section class="trades section-space" id="expertises" aria-labelledby="trades-title">
      <div class="container">
        <div class="section-heading section-heading-centered">
          <h2 id="trades-title">Nos <span class="gradient-text">métiers</span></h2>
          <p>Du chauffage à la rénovation complète, trouvez les travaux qui correspondent à votre projet. D-SIGN vous accompagne pour leur donner forme.</p>
        </div>
        <div class="trade-filters" role="group" aria-label="Choisir une catégorie de métiers" hidden>
{chr(10).join(buttons)}
        </div>
        <div class="trade-catalogue" id="trade-catalogue">
{chr(10).join(panels)}
        </div>
        <p class="sr-only" id="trade-status" role="status" aria-live="polite" aria-atomic="true"></p>
        <p class="trade-illustration-note">Les visuels illustrent des types de travaux, sans représenter des réalisations D-SIGN.</p>
      </div>
    </section>

'''
p = root/'export/index.html'
s = p.read_text(); start = s.index('    <section class="trades '); end = s.index('    <section class="choice ', start)
p.write_text(s[:start] + section + s[end:])
print(f'Catalogue généré : {len(catalogue)} catégories, {sum(len(c["items"]) for c in catalogue)} exemples.')
