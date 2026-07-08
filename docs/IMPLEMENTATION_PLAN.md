# PL Consulting Website — Implementation Plan

Based on: PL_Consulting_Business_Plan.md, PL_Consulting_Website_Design_Plan.md, PL_Consulting_Design_System.html, WEBSITE_PROJECT_SUMMARY.md

## Where things actually stand

The folder currently contains planning documents only — no repo, no code, no content assets. The Design Plan's "8-week roadmap" assumes a team (designer + dev) working in parallel. This plan restates it as a single-track, buildable sequence, and calls out the decisions and content that are currently missing and will block progress if not resolved first.

## Decisions to lock before writing code

These are underspecified in the source docs and will cause rework if skipped:

1. **Framework:** Docs say "React.js or Next.js." Pick Next.js (App Router) — needed for SEO (Section 7.3 of the design plan requires meta tags, sitemap, structured data, which Next.js handles natively; plain React does not).
2. **Content source:** Docs list Contentful/Sanity/Markdown as options without picking one. Recommendation: start with local Markdown/JSON files (`src/data/*.json` as already sketched in the design plan's file structure) for launch, migrate to a headless CMS only if Tarun needs to edit content without a developer. Adding a CMS now is unnecessary scope for a solo-consultant launch site.
3. **Forms/backend:** Formspree (no backend to build/host) vs. custom Node+DB. Recommendation: Formspree or Basin for launch — it satisfies "lead notification within 1 hour" without building/maintaining a backend. Revisit only if lead volume or CRM integration demands it.
4. **Hosting:** Vercel (pairs natively with Next.js, zero-config deploys).
5. **Domain:** Not yet chosen/registered anywhere in the docs. This blocks email forwarding (tarun@, info@) and DNS — needs to happen in Week 1, not Week 8.

## Content and assets that don't exist yet

The design plan assumes these exist; none are in this folder. They are the actual critical path, not the code:

- Tarun's professional headshot (About page hero)
- 5 anonymized case studies with real before/after numbers (currently only aggregate figures like "₹43.42 Cr+" exist — no per-case detail to populate the Case Studies page template)
- 5 initial blog posts (titles are drafted in the design plan, bodies are not written)
- 3 downloadable resources (Profit Loss Checklist, OEE Calculation Template, Value Stream Mapping Guide) — none exist as files
- Manufacturing floor photography for hero backgrounds (stock photo has been explicitly ruled out as "cheesy")
- Logo / wordmark for "PL Consulting"

Recommendation: treat content production as its own workstream running in parallel with Week 1-2 setup, owned by Tarun/marketing, not blocking dev start but blocking launch.

## Build sequence

### Phase 0 — Setup (before Week 1 of the original roadmap)
- Register domain, set up email forwarding
- Initialize Next.js + Tailwind repo, push to GitHub
- Add the color tokens and font stack from the Design Plan (Section 2.2, 3.1) directly into `tailwind.config.js` — this part is already fully specified and can be copy-pasted
- Set up Vercel project linked to the repo (enables preview deploys from day one)

### Phase 1 — Skeleton (Week 1)
- Layout shell: Header/Navbar, Footer, mobile nav (spec in Design Plan Section 4.3)
- Routing for all 8 pages as empty stubs, so navigation and internal linking can be tested early
- Shared UI components: Button (3 variants), Card, StatCallout — code samples already exist in Design Plan Section 5.1-5.2, just need to become real components in `/components/ui`

### Phase 2 — Core content pages (Weeks 2-3)
- Home: hero, problem stats, DADES methodology teaser, results/social proof, differentiators, CTA section — this is the highest-value page since it's the primary conversion point
- About: needs Tarun's headshot and bio copy before this can be finished, not just built
- Services hub + 5 service detail pages (content is largely already drafted in Design Plan Section 4.2)

### Phase 3 — Proof and methodology (Week 4)
- Case Studies hub + template — **blocked on real case study content**, build the template against placeholder data first so dev isn't blocked
- How We Work (DADES 5-phase page)

### Phase 4 — Blog, Resources, Contact (Week 5)
- Blog system: even 2-3 real posts at launch is fine; don't block launch on all 5-8
- Resources page — only ship once the actual PDFs/templates exist; otherwise omit the page rather than link to nothing
- Contact form wired to Formspree/Basin, WhatsApp deep link, validation

### Phase 5 — SEO, analytics, QA (Weeks 6-7)
- GA4, meta tags, sitemap.xml, robots.txt, structured data (Organization/LocalBusiness schema)
- Cross-browser + mobile device testing, Lighthouse pass (90+), WCAG AA pass
- These are correctly sequenced last in the original plan — no change needed here

### Phase 6 — Launch (Week 8)
- Deploy, DNS cutover, submit sitemap to Search Console, LinkedIn announcement

## What to compress vs. the original 8-week estimate

Solo builder, no design handoff needed (Design System HTML already serves as the visual spec), and Home/Services/Contact copy is largely pre-written. Realistic compression:

- Skip the Figma wireframe/mockup step (Design Plan Weeks 1-2) — build directly from the existing Design System HTML and copy blocks already in the Design Plan. This alone likely saves 1-2 weeks.
- Launch without the CMS, Resources page, and full blog roster; add them post-launch. A leaner v1 (Home, About, Services, 2-3 Case Studies, How We Work, Contact) can plausibly go live in 3-4 weeks once content (case studies, headshot) is delivered.

## Immediate next actions

1. Confirm framework/CMS/forms/hosting decisions above (or override them)
2. Register domain + start Tarun's headshot and case-study-detail collection in parallel
3. Initialize the Next.js/Tailwind repo and port over the color tokens, fonts, and component code already specified in the Design Plan
4. Build Home page first — it's the only page where the source content is essentially complete
