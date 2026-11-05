# Mobile alignment and shared identity — 5 November 2026

Scope: remove secondary homepage hero contact link; enlarge white navigation band and wordmark; lighten trade photography overlay; center mobile headings and process discs using Kovan as comparison; replace old footer image on all eight pages.

## Evidence

- `kovan-process-390.png`: live reference at 390 px, showing centered stacked disc/title/body.
- `hero-*`, `process-*`, `trades-*`, `footer-*`: current homepage at 390 and 1440 px.
- `service-390.png`: inner service heading, shared navigation and photograph.
- `long-card-320.png`: longest heating heading at narrow width, image eagerly decoded.
- `report.json` / `verify.cjs`: 48 page/viewport layouts over eight routes at 320, 390, 760, 768, 1121 and 1440 px; no horizontal overflow; all eight text footers; centered mobile discs; full-column centered heading; eleven working filters; two Axe WCAG A/AA passes without violations.

## Detector triage

One detector run is saved in `detector.json`: 197 font ramp, 41 palette, 5 contrast, 4 wrapper padding, 3 existing font, 2 gradient and 2 radius warnings. The approved existing typography and palette account for ramp/color warnings. Gradient headings/wordmarks and pills are explicitly requested. Contrast warnings compare pale text with the page white instead of the actual dark parent; runtime Axe has zero violations. Section wrappers have inner container padding; captures show generous spacing. Card photo contrast was inspected directly, including the narrow longest heading. No new material defect identified.

No new design world or comp round: incremental user-requested refinement of the approved native static site. No ZIP produced.
