disposition: fix

## disposition

One material spacing correction remains in the expanded FAQ keyboard state. No rebuild or missing-evidence recapture is required.

## coverage

Inspected all 21 supplied V8 captures: the five full pages at 390 and 1440 px; both gallery views; both scrolled method views; the smooth-scroll view; and all six expanded FAQ views. Captures have the expected dimensions, full-page captures include the document top, and no blank or broken-image regions are apparent. Read the direction, craft floor, DESIGN.md, PRODUCT.md, shared page CSS/JavaScript and source explanation. The supplied verification report records 40 responsive combinations, six interaction groups, zero errors and a pass result; this review did not rerun it.

## visual/accessibility findings

- Type, material and ground match the committed D-SIGN world: local Instrument Sans, intact official logo, navy/green/mineral surfaces, real architectural media and the approved title accents and rounded controls. No comp was specified for this code-led extension.
- The five page structures are coherent and navigable. Portfolio filters and gallery, service content and contact actions, and the five-step vertical method are present. The compact mobile rail leaves usable reading space; the scrolled captures show the current third step without obscuring content.
- The source limitations are preserved: conception labels, repeated published media and source records, illustrative service imagery, and no added delivery, price or performance claims. Gallery content and controls remain visible on mobile. Its tall letterboxed frame is spacious but does not require a material change.
- **Material:** the outward FAQ summary focus ring crosses the top of the first answer line. This is visible in every supplied expanded FAQ capture at both widths. `styles.css` sets a 3 px outline with 6 px offset, while `pages.css` gives the following answer zero top padding. The automated accessibility pass does not detect this overlap.
- The detector's pinned-font and approved-gradient findings do not override the brief. Its local size/spacing advisories do not establish another material defect in these captures.

## material fix list

1. In `export/pages.css`, reserve at least 12 px between an expanded FAQ summary and its answer, for example by changing `.service-faq details p` from `padding: 0 30px 24px 0` to `padding: 12px 30px 24px 0`. Preserve the visible focus outline. Apply through the canonical source if this rule is generated. Recapture the same six `*-faq-390.png` / `*-faq-1440.png` states with the last summary focused and its answer open; the answer's first line must clear the outline. No broader visual changes are requested.

## scope/limits

Read-only review of the supplied implementation and captures; only this report was written. No browser, new detector pass, UI edits, commits or deployment. Other widths, keyboard behavior, no-JavaScript behavior, contact prefilling and existing homepage/material navigation rely on the supplied verification evidence. External source associations were assessed from the provided provenance explanation rather than independently refetched. Keep the approved visual world, truthful portfolio limits, complete content, native controls and ordinary scrolling intact while fixing the spacing.

## verdict

**Resolved — FAQ focus/answer overlap.** Re-read the same six expanded FAQ captures after the 12 px top-padding correction. All three services at 390 and 1440 px now show a visible gap between the last summary's unchanged focus outline and its first answer line. The supplied measurements record 15–16 px to the first text range against a 9 px outline extent, with focus preserved and no axe findings in all six states. The correction introduces no visible regression in these captures.

## remaining

Clear. This verdict supersedes the initial `fix` disposition for the single scored FAQ correction. The ship verdict covers the scored fix; no new full-surface review was performed.

disposition: ship
