# Homepage V6 — independent finish review

## 1. Disposition

**Ship for the scoped interface.** No material visual or accessibility defect was found in the current rendered evidence. No rebuild or recapture is needed. Complete the already planned V6 documentation sync before packaging the handoff.

## 2. Coverage

Read `craft-floor.md`, the pinned `homepage-v6-kovan.md` direction, PRODUCT.md and DESIGN.md (the latter two still describe V5 at review time), plus the current homepage HTML, CSS, JavaScript, verification script/report and detector report.

Visually inspected the full-page 1440 px and 390 px captures; desktop and mobile captures for Comment ça marche, Nos métiers, Pourquoi nous choisir and Le mot du fondateur; the filtered desktop métier state; the mobile open menu; and the three Kovan reference captures. The supplied verification passes at 320, 390, 768, 900, 1024, 1280, 1440 and 1920 px.

The implementation covers the requested sequence: white navigation → hero → Comment ça marche → Nos métiers → Pourquoi nous choisir → Le mot du fondateur → retained À propos, materials and contact. The retired introduction, method disclosure and former reasons section are absent. Kevin HUART is named correctly.

## 3. Visual and accessibility findings

- D-SIGN remains immediately recognizable through the complete official mark, local Instrument Sans, navy/green palette, straight edges, diagonal arrow actions and existing D-shaped hero image. The Kovan influence is legible in the category/photo treatment and the two editorial image/text compositions without importing its visual identity or unsupported commercial claims.
- The new sections have distinct surfaces and generous separation. Desktop columns align cleanly; mobile stacks preserve reading order and comfortable margins. Photos are loaded, intentional crops retain the subject, and text stays legible over the image gradients.
- The founder section reads as a named message. Its architectural image is explicitly labelled “Visuel d’ambiance”; it does not suggest an invented portrait or achievement.
- Current mobile process headings contain visible spaces and remain readable. The second title is compact, but the rendered “Nous concevons et chiffrons” is not a material joined-word defect. Source includes literal whitespace after the desktop-only line breaks and uses moderate `-.02em` tracking for these headings.
- Source supports semantic links and buttons, labelled filter selection with live result feedback, an accessible no-JavaScript baseline, visible keyboard focus, native mobile disclosure, Escape focus return and reduced-motion support. Supplied interaction checks cover filters, menu dismissal, cross-page navigation and required-field validation without real contact sends. Axe reports zero WCAG 2A/AA, 2.1 AA and 2.2 AA violations at 390 and 1440 px.
- Detector warnings do not establish a rendered defect here: the reported light text is placed on navy/image overlays, section spacing is supplied through `.section-space` and `.container`, Instrument Sans is pinned by the direction, and inactive gallery media are intentionally hidden.

## 4. Material fix list

**None for the scoped interface.** Update the V5 references in PRODUCT.md, DESIGN.md and delivery documentation to the final V6 order, white header, photo métiers/filter treatment and founder section before the final handoff. This is documentation housekeeping already planned by the implementation thread.

## 5. Scope and limits

This was a read-only product review using supplied current screenshots, source and recorded browser verification; no additional browser run or product edits were performed. Intermediate widths are supported by the recorded checks rather than independently captured visual review. No real form submission, live WordPress installation, deployment or external service delivery was tested. Unrelated pre-existing content and design drift were outside this review.
