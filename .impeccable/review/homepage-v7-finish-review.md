# Homepage V7 — independent finish review

## Disposition

**SHIP.** No material fix or fresh capture is required for the reviewed V7 implementation.

## Coverage

- Read the craft floor, V7 direction, PRODUCT.md, DESIGN.md and export/DESIGN.md. The latest explicit request authorizes the eleven métiers, rounded controls/cards, gradient title accents and quote SVG; older restrictions do not govern this review.
- Inspected the 1440 px and 390 px full-page captures; every supplied process, catalogue, reasons, founder, adaptation, extension and mobile-menu capture; and the three Kovan reference captures. Reviewed the relevant HTML, CSS, JavaScript, catalogue and portrait provenance.
- Examined the existing verification report: eight widths from 320 to 1920 px, eleven filters, 61 examples, loaded media, section order, anchors, no-JS access, menu, form prefill/validation, forced-colors fallback and zero reported axe violations at 390/1440 px.
- Independently exercised the current local page at 390/1440 px: keyboard selection with Space, keyboard card activation, correct contact prefill, preservation of personal text, mobile Escape, loaded Instrument Sans, no horizontal overflow or page errors. Intercepted POSTs: zero.

## Visual and accessibility findings

No material findings. The D-SIGN logo, navy/green palette, local type and D-shaped hero remain recognizable. The rounded photographic catalogue and centered title treatment carry the requested reference composition. Category labels, result counts, card titles, body text and actions remain readable in the inspected desktop/mobile states. The intended section order and surface rhythm are intact.

Kevin HUART’s face remains clear and uncropped at both sizes; the identity overlay avoids it. The real portrait and quote composition satisfy the founder brief. Navigation, contact fields and actions remain legible and usable. Filter semantics and the announced count support keyboard and assistive-technology use; the complete catalogue remains available without JavaScript.

The queried `monte-escalier-BED7QeRp.webp` source depicts a stair-lift chair on a rail beside steps, not a bathroom fixture. Its render is less explicit because the overlay covers the rail, but the image and label are accurate; this is not a material catalogue mismatch.

The detector's light-text warnings assume white beneath text rendered on navy. Its padding warnings miss padded inner containers. Instrument Sans and gradients are pinned choices; local type-size advisories do not correspond to visible clipping or hierarchy failure. These do not justify a visual change.

## Material fix list

None.

## Scope and limits

This is a finish review of the code-led V7 extension against the supplied direction, not a pixel comparison with an approved comp. Manual visual coverage uses the supplied captures; the existing automated report supplies the remaining widths and all-filter coverage. Automated accessibility results do not establish complete WCAG conformance. No real contact message was sent, and live delivery/deployment was not reviewed. No UI files, commits or remote branches were changed by this review.
