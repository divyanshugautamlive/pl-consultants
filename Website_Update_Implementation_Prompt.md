# Implementation Prompt — Pinnacle Logic Consulting Website Content & Data Overhaul

Paste this whole prompt to a coding agent working inside the `PL Consultants` Next.js repo. It replaces fictional/placeholder content with the real, verified figures from `PL Consulting.pptx` and applies nine structural/content changes site-wide. Every number below is sourced directly from the deck — do not invent, round, or approximate any figure beyond what's stated here.

---

## Ground-truth data extracted from PL Consulting.pptx (use exactly as-is)

**Headline stats:** ₹43.42 Cr+ business value created & identified, across 5 engagements.

**The 5 real case studies (replace whatever is currently in `src/data/case-studies.json`):**

| # | Sector | Engagement | Key Result | Value |
|---|--------|-----------|-----------|-------|
| 1 | Auto & Electronics | Layout & Material Flow Optimization | 35% reduction in movement; 7,000 sq.ft floor space optimised | ₹1.2 Cr |
| 2 | FMCG | Lead Time Reduction | Order-to-dispatch lead time: 3 days → 2.1 days (30% reduction) | ₹2.0 Cr |
| 3 | FIBC & Bulk Bag | OEE Improvement & SMED | OEE 37% → 60% (+23%); changeover 12 hrs → 7.4 hrs | ₹3.5 Cr |
| 4 | Integrated Steel | Plate Mill Capacity | 32% throughput uplift identified in Plate Mill (bottleneck: Cut stage), no new capex | ₹18.0 Cr |
| 5 | Wire & Cable | Workforce Optimization | 2,345 → 1,524 operators (821 operators optimised, 35% reduction) | ₹18.72 Cr |

Per-case-study detail from the deck (use for "What We Did" / "Challenge" fields):

1. **Auto & Electronics (₹1.2 Cr):** Challenge — poor material flow and layout inefficiencies causing excess movement. What we did — spaghetti diagram, material flow analysis, lean layout design. Result — before/after layout comparison, 35% less movement, 7,000 sq.ft freed.
2. **FMCG (₹2.0 Cr):** Challenge — long lead times and slow customer response tying up working capital. What we did — Value Stream Mapping (VSM), inventory analysis, bottleneck identification, scheduling optimisation. Result — bottleneck removed at the production step; lead time 3 days → 2.1 days.
3. **FIBC & Bulk Bag (₹3.5 Cr):** Challenge — low OEE and long changeover times capping output on critical lines. What we did — OEE loss analysis, Total Productive Maintenance (TPM), SMED for rapid changeovers, standardised changeover procedures. Result — changeover 12 hrs → 7.4 hrs, OEE +23%.
4. **Integrated Steel (₹18.0 Cr):** Challenge — capacity constraints in the Plate Mill limiting throughput and sales. What we did — process mapping, DILO study, bottleneck analysis, capacity study. Result — 32% uplift identified, ₹18 Cr additional throughput value, no new capital equipment.
5. **Wire & Cable (₹18.72 Cr):** Challenge — high manpower and low productivity inflating cost per unit. What we did — Day-In-the-Life-Of (DILO) study, time study, line balancing, work standardisation. Result — 821 operators optimised, 35% workforce reduction, ₹18.72 Cr annual saving.

**The 8 hidden losses (use for services/problem-statement copy and for the contact form dropdown — see item 9):**
Low OEE, Excess Manpower, Long Lead Times, Poor Material Flow, Capacity Constraints, Excess Inventory, Breakdown Losses, Changeover Losses.

**The 6 differentiators (use verbatim, these are the "achievements" to surface — see item 4):**
1. ₹43+ Cr value created & identified — outcomes measured in rupees, not slideware
2. Hands-on shopfloor execution — we implement on the floor, not just advise
3. Data-driven problem solving — decisions grounded in study and measurement
4. Lean Six Sigma methodology — proven, structured improvement discipline
5. Manufacturing domain expertise — deep operational know-how across sectors
6. Sustainable results — gains locked in with standards & KPIs

**Sectors served (state explicitly, don't imply):** FMCG, Automotive & Electronics, FIBC & Bulk Bag / Packaging, Integrated Steel, Wire & Cable.

**Approach (high-level only — see item 7 for how to present this):** Diagnose → Quantify → Execute → Sustain. One line each:
- Diagnose: Shopfloor study, DILO, OEE & bottleneck analysis to locate the real losses.
- Quantify: Translate every loss into rupees — capacity, manpower, lead time, working capital.
- Execute: Hands-on implementation with your teams — SMED, line balancing, flow & standards.
- Sustain: Standard work, visual management and KPIs that lock the gains in place.

**Contact:** +91 84396 92259 | tarun@pinnaclelogic.in | linkedin.com/in/tarun-sharma-52ba6a15b

---

## The 9 changes to implement, file by file

### 0. Wire up the real logo files
Logo files already exist in the project root: `Pinnacle Logo.png`, `Pinnacle Logo.jpeg`, `PL Consultants.jpeg`. Move/copy the correct one (`Pinnacle Logo.png`, transparent background if available) into `public/images/logo.png`. Update:
- `src/components/common/Header.js` — replace text-only wordmark with the logo image (use `next/image`), sized appropriately for the fixed header, linking to `/`.
- `src/components/common/Footer.js` — add the logo above or beside the footer company block.
- `src/app/layout.js` — set the logo as the favicon / OG image (`public/images/logo.png` referenced in `metadata.icons` and `metadata.openGraph.images`).

### 1. Full company name everywhere
Global find-and-replace across `src/**`: `PL Consulting` → `Pinnacle Logic Consulting`. Check `layout.js` metadata (title, description, OG tags), `Header.js`, `Footer.js`, every `page.js`, and all `src/data/*.json` files. Do not abbreviate to "PL Consulting" or "Pinnacle Logic" anywhere — always the full three-word name on first mention per page; "Pinnacle Logic" alone is acceptable only in repeated running copy within the same section.

### 2. Replace all case study numbers with the verified figures above
Rewrite `src/data/case-studies.json` entirely using the 5 case studies and per-case detail in the "Ground-truth data" section above. Delete any currently-existing fictional case studies that don't match these five. Update every place that references the aggregate stat to say exactly **₹43.42 Cr+** (not "43+ Cr" or rounded values) and **5 engagements** — check `src/app/page.js` (Results/Social Proof section) and `src/app/case-studies/page.js`.

### 3. Remove ROI multiples and week/timeline estimates
Delete every instance of:
- ROI language ("10x-50x ROI", "typicalRoi" field, "10-50x typical ROI" stat card on the homepage hero/differentiators)
- Week/duration estimates ("8-10 weeks", "timeline" fields in `services.json` and `case-studies.json`, the "8-16 week typical engagement" timeline graphic on the How We Work page)

Specifically strip the `typicalRoi` and `timeline` fields from `src/data/services.json` and `src/data/case-studies.json` (and any JSX that renders them), and remove the "10x-50x Typical client ROI" stat card from the homepage hero stats and from `src/app/how-we-work/page.js` if present. Keep the "<6 months average payback period" stat if it appears elsewhere — that's a payback claim, not a week-count or ROI multiplier, so it's not in scope for removal unless you determine it's redundant with the deck; if unsure, leave it and flag it in your summary.

### 4. Surface all 5 case studies + all 6 differentiators
- Homepage (`src/app/page.js`): change the featured case studies section from a partial slice (e.g. `.slice(0, 3)`) to show all 5.
- Homepage differentiators section: ensure all 6 items from "The 6 differentiators" above are present, using that exact copy (not the current placeholder differentiator text if it differs).
- Case Studies hub (`src/app/case-studies/page.js`): confirm all 5 render, no filtering hides any by default.

### 5. Correct experience from 15 years to 7 years, with a breakdown
Find every instance of "15+ years" / "15 years" (About page hero, bio copy, meta descriptions, anywhere else) and change to **"7+ years"**.

Add an experience breakdown section to `src/app/about/page.js` (a simple timeline or stacked list, consistent with the page's existing "Career/background timeline" section). Use this exact placeholder structure — **do not invent company names, role titles, or durations**:

```
[ROLE TITLE] — [COMPANY NAME]
[START YEAR] – [END YEAR] ([X] years)
[One-line description of scope/responsibility]
```

Repeat this block for each stint, with the total across all stints summing to 7 years. Leave the bracketed fields as visible, clearly-marked placeholders (e.g. rendered with a distinct "TODO" style or HTML comment) so it's obvious this needs Tarun's real input before launch — do not ship placeholder text as if it were real content.

### 6. Add all sectors explicitly
Ensure the following sectors are named (not just implied by case studies) in at least the About page and/or a "Sectors We Serve" element on the homepage or Services hub: **FMCG, Automotive & Electronics, FIBC & Bulk Bag / Packaging, Integrated Steel, Wire & Cable**. Add this as a simple tag/pill list or icon row — check whether `src/components/ui/Icons.js` already has suitable icons before adding new ones.

### 7. Simplify "Our Approach" — no detailed step lists
Wherever the site currently shows the methodology with bullet-point activity lists per phase (`src/components/sections/MethodologySection.js` and/or `src/app/how-we-work/page.js`), reduce each phase to just: phase name, one-line description (use the exact one-liners in "Approach" above), and nothing else — no "3-4 activities" bullet sub-lists, no "key deliverable" line. Use the deck's 4-phase framing (Diagnose → Quantify → Execute → Sustain) as the primary version shown on the homepage teaser; the fuller 5-phase DADES version (Diagnose/Analyze/Design/Implement/Sustain) can remain on the dedicated How We Work page but should also drop its detailed bullet sub-lists per phase — headline + one line only.

### 8. Remove the project roadmap
Delete any rendered "roadmap" content from the live site — specifically any 8-week/multi-phase build timeline, Gantt-style graphic, or "Week 1–8" breakdown if one exists in `src/app/how-we-work/page.js` or elsewhere in `src/app`. (Note: `IMPLEMENTATION_PLAN.md` and `WEBSITE_PROJECT_SUMMARY.md` at the repo root are internal planning docs, not rendered on the site — leave those files alone unless asked; this change is about removing any user-facing roadmap/timeline UI.)

### 9. Expand the Contact form's "primary focus area" field with an Others option
In `src/components/forms/ContactForm.js`, update the "What's your main challenge?" dropdown. Replace the current option set with one grounded in the deck's 8 hidden losses, plus an explicit Others:

- OEE Improvement / SMED
- Manpower / Workforce Optimization
- Lead-Time & Flow Optimization
- Material Flow / Layout Optimization
- Capacity & Throughput Bottlenecks
- Inventory Reduction
- Breakdown / Maintenance Losses
- Changeover Reduction
- Others (please specify)

If "Others" is selected, reveal a short free-text input (conditionally rendered) so the lead can specify. Keep the existing "Role" dropdown (COO, Plant Head, Finance Lead, Other) unchanged unless it also needs an Others free-text — apply the same pattern there if not already present.

---

## Constraints while doing all of the above

- Do not touch visual design, layout structure, colors, or components beyond what's needed to render the changes above — this is a content/data pass, not a redesign.
- Every ₹ figure, percentage, and count must trace back to the "Ground-truth data" table — if a number currently on the site isn't in that table, delete it rather than guess at a replacement.
- After making changes, run `npm run lint` and fix anything it flags before considering the task done.
- Summarize at the end: every file touched, and explicitly call out the experience-breakdown placeholder in item 5 as needing Tarun's real input before this can ship.
