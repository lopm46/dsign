# Sticky estimation controls — 5 November 2026

User request: keep the numbered journey sticky, with the next-step button immediately below it, so advancing never requires scrolling to the bottom.

The existing actions have moved into an opaque mineral sticky toolbar. The same action becomes the native form submit button at the contact step. Duplicate bottom controls were removed. Step changes focus and reveal the new question under the toolbar; scroll padding tracks the real toolbar height through ResizeObserver, including wrapped mobile actions. Confirmation hides the toolbar.

`verify.cjs` and `report.json` cover 320×568, 390×900, 768×900 and 1440×900: eleven domains / 61 services, sticky bounds and actual click targets while scrolled, validation visibility, preserved choices and contact draft after history/back, external form-associated submit button, click and Enter confirmation, restart and absence of submission requests or page errors. Axe WCAG A/AA passes at 390 and 1440 with no violations.

`services-*` and `contact-*` show the actual scrolled interface at 390 and 1440. The partly occluded content at the toolbar edge is the scrolling document passing beneath its opaque background. The numbers and action remain wholly visible and clickable. Captures visually inspected; current requested behavior verified.

No new world or comp round; existing D-SIGN typography, palette, copy and demo-only form behavior preserved. No ZIP generated.
