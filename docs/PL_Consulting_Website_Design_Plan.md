# PL CONSULTING — WEBSITE DESIGN & DEVELOPMENT PLAN
## Strategic Design Specification & Execution Roadmap

---

## SECTION 1: BRAND STRATEGY & VISUAL IDENTITY

### 1.1 Brand Positioning for PL Consulting

**Brand Archetype:** The Strategist / The Sage (Expert, Data-Driven, Trustworthy)
- Not flashy or trendy
- Professional, credible, measurable
- Manufacturing/industrial context
- B2B consulting (COOs, Plant Heads, Finance Leads)

**Brand Promise:** "Hidden profit recovered, measurable EBITDA unlocked."

**Target Audience on Website:**
- Primary: COOs, Plant Heads, Operations Managers (manufacturing companies ₹10-100 Cr)
- Secondary: CFOs, Finance Leads (PE-backed firms)
- Tertiary: Hiring/referral interest (potential team members, partners)

**Website Goal:** Convert manufacturing operations leaders → qualified leads for initial shopfloor assessments

---

## SECTION 2: COLOR PALETTE & DESIGN SYSTEM

### 2.1 Recommended Color Palette

**Rationale for Manufacturing Consulting:**
- **Deep Navy/Charcoal** = Trust, Stability, Professionalism (manufacturing/industrial sector)
- **Gold/Brass Accent** = Value, Precision, High-impact results (contrasts warmly with navy)
- **Teal/Slate** = Operations, process improvement, forward momentum
- **White/Off-white** = Clarity, cleanliness, clarity of data
- **Dark Gray** = Hierarchy, readability, sophistication

**Primary Color Palette:**

| Color Name | Hex Code | Tailwind Equiv. | Usage |
|------------|----------|-----------------|-------|
| **Midnight Navy** | `#0E2A47` | `[#0E2A47]` | Headers, primary CTAs, hero backgrounds |
| **Steel Gray** | `#36454F` | `[#36454F]` | Body text, secondary backgrounds |
| **Gold Accent** | `#E2A23B` | `[#E2A23B]` | Highlights, ROI callouts, accents, buttons |
| **Sage Teal** | `#028090` | `[#028090]` | Secondary CTAs, links, data insights |
| **Off-White** | `#F8F9FA` | `gray-50` | Body backgrounds, cards |
| **Pure White** | `#FFFFFF` | `white` | Content areas, cards |
| **Dark Slate** | `#2C3E50` | `slate-800` | Text on light backgrounds |
| **Light Gray** | `#E8E8E8` | `gray-200` | Borders, dividers |

**Color Psychology for Manufacturing Consulting:**
- Navy = Trust, stability (manufacturers want reliable partners)
- Gold = Value, high-impact (emphasizes ROI, profit recovery)
- Teal = Process, improvement (operations-focused)
- Gray = Professional, data-driven (serious business)

**Accessibility Considerations:**
- Navy text on white: ✅ WCAG AAA compliant (contrast ratio 13.5:1)
- Gold text requires white background for readability (contrast 4.5:1)
- Use gold sparingly for emphasis, not body text

### 2.2 Tailwind CSS Color System

```tailwind
// tailwind.config.js custom colors
{
  colors: {
    'navy': '#0E2A47',
    'navy-light': '#1A3A52',
    'navy-dark': '#081B2F',
    'steel': '#36454F',
    'steel-light': '#4A5A6A',
    'gold': '#E2A23B',
    'gold-dark': '#C89032',
    'gold-light': '#F0B85E',
    'teal': '#028090',
    'teal-light': '#1A9BA8',
    'teal-dark': '#015F68',
    'slate': '#2C3E50',
    'slate-light': '#546E7A',
  }
}
```

### 2.3 Gradient & Visual Treatments

**Hero Gradient (Navy → Teal):**
```css
background: linear-gradient(135deg, #0E2A47 0%, #1A3A52 50%, #028090 100%);
```

**Data Highlight Box (Gold accent):**
```css
border-left: 4px solid #E2A23B;
background: #F8F9FA;
```

**Cards (Subtle shadow, clean):**
```css
box-shadow: 0 2px 8px rgba(14, 42, 71, 0.08);
border-radius: 8px;
```

---

## SECTION 3: TYPOGRAPHY SYSTEM

### 3.1 Font Stack & Hierarchy

**Font Choices:**

| Element | Font | Size | Weight | Line Height | Usage |
|---------|------|------|--------|-------------|-------|
| **Page Headings (H1)** | Cambria / Georgia | 44–52px | 700 Bold | 1.2 | Hero section, main page titles |
| **Section Headings (H2)** | Cambria / Georgia | 32–36px | 700 Bold | 1.3 | Section headers, "How We Work" |
| **Subheadings (H3)** | Cambria / Georgia | 24–28px | 600 Semi-bold | 1.4 | Subsection titles |
| **Body Text** | Calibri / Arial | 16px | 400 Regular | 1.6 | Paragraphs, descriptions |
| **Small Text / Labels** | Calibri / Arial | 14px | 400 Regular | 1.5 | Figure captions, metadata |
| **Buttons / CTAs** | Calibri / Arial | 16px | 600 Semi-bold | 1.5 | Call-to-action copy |
| **Statistics / Numbers** | Cambria / Georgia | 36–48px | 700 Bold | 1.1 | ₹ values, ROI callouts, impact metrics |

**Rationale:**
- Cambria/Georgia for headings = Serif, professional, manufacturing trust
- Calibri/Arial for body = Clean, readable, web-standard sans-serif
- Generous line height (1.6) for body text = Readability on mobile
- Large stat numbers = Visual hierarchy emphasizes ROI/impact

### 3.2 Tailwind Typography Classes

```tailwind
// Heading styles
@apply text-4xl md:text-5xl font-bold text-navy leading-tight

// Body text
@apply text-base text-steel leading-relaxed

// Small text
@apply text-sm text-gray-600

// Large stats
@apply text-5xl md:text-6xl font-bold text-gold
```

---

## SECTION 4: WEBSITE ARCHITECTURE & PAGE STRUCTURE

### 4.1 Site Map

```
PL Consulting Website
├── Home (Hero, Problem, Solution, CTA)
├── About (Tarun's background, mission, approach)
├── Services (5 core services with deep-dive pages)
│   ├── OEE & SMED Optimization
│   ├── Workforce Optimization
│   ├── Capacity & Throughput Bottleneck
│   ├── Lead-Time & Flow Optimization
│   └── Integrated Plant Transformation
├── Case Studies (Portfolio, filtered by sector)
│   ├── Case Study 1 (FMCG)
│   ├── Case Study 2 (Auto)
│   ├── Case Study 3 (Steel)
│   ├── Case Study 4 (Wire & Cable)
│   └── Case Study 5 (FIBC)
├── How We Work (Methodology, DADES phases)
├── Blog (Thought leadership, manufacturing insights)
├── Resources (Downloads, ROI calculator, guides)
├── Contact (Lead capture form, phone, email, LinkedIn)
└── Privacy & Terms
```

### 4.2 Key Pages & Design Specs

#### **Page 1: HOME (Hero + Conversion)**

**Hero Section:**
- Background: Gradient Navy → Teal
- Headline: "Unlock Hidden Capacity, Productivity & Profit"
- Subheading: "We recover ₹5-30 Cr in operational losses without new machines. Average ROI: 10-50x. Payback: <6 months."
- CTA Button: "Start Your Shopfloor Assessment"
- Background Image: Modern manufacturing floor (neutral, professional, not stock-photo cheesy)
- Height: 600-700px (desktop), 500px (mobile)

**Section 2: Problem Statement**
- Headline: "The Profit Problem"
- Content: "Most factories leave ₹5-30 Cr on the table annually"
- 3-4 stat callouts with gold background:
  - "40-60% Typical OEE (recoverable to 75%+)"
  - "₹5-30 Cr Hidden in every mid-size factory"
  - "15-35% Manpower waste (recoverable)"
  - "20-40% Lead-time compression possible"
- Background: Off-white
- Responsive: 2-col on desktop, 1-col on mobile

**Section 3: PL's Approach**
- Headline: "Our Proven 5-Phase Methodology"
- Visualize: DADES phases in process flow (Diagnose → Analyze → Design → Execute → Sustain)
- Each phase: Icon + short description + timeline
- Background: White
- Call-to-action: "See how we work" (link to How We Work page)

**Section 4: Results / Social Proof**
- Big stat: "₹43.42 Cr+ Business Value Created"
- 5 case study cards (Sector, Business Impact, Result)
- CTA: "View All Case Studies"
- Background: Navy
- Text color: White

**Section 5: Why Choose PL Consulting**
- 6 differentiators (Hands-on execution, Data-driven, Lean Six Sigma, Domain expertise, etc.)
- Visual: Icons in gold circles
- Background: Off-white

**Section 6: CTA Section (Lead Capture)**
- Headline: "Let's Unlock Your Factory's Profit"
- Subheading: "Chat with Tarun to discuss your operation's hidden opportunities"
- Primary CTA: "Book Shopfloor Assessment"
- Secondary CTA: "Chat on WhatsApp"
- Tertiary: "Call: +91 84396 92259"
- Background: Navy gradient
- Form fields (light version):
  - Name
  - Company
  - Email
  - Phone
  - Quick assessment question

**Section 7: Footer**
- Company info, links, contact details, social links
- Background: Dark Navy
- Text: White
- Newsletter signup (optional)

---

#### **Page 2: ABOUT (Trust & Credibility)**

**Hero:**
- Photo of Tarun (professional headshot, navy blazer, white background)
- Headline: "Meet Tarun Sharma, Operational Excellence Consultant"
- Subheading: "15+ years of hands-on manufacturing operations & Lean Six Sigma expertise"

**Section 1: Tarun's Background**
- Timeline: Career progression (manufacturing roles → consulting → independent)
- Visual: Vertical timeline
- Key achievements: Clients helped, sectors, scale

**Section 2: Mission & Approach**
- Why Tarun started PL Consulting (passion for manufacturing excellence)
- Philosophy: "Data-driven, hands-on, measurable results"
- Quote: "We don't sell solutions—we recover profit."

**Section 3: Methodology Deep-Dive**
- Expanded explanation of DADES approach
- Why this works (vs. traditional consulting)
- Timeline & engagement structure

**Section 4: Recognition & Credentials**
- Certifications (Lean Six Sigma Black Belt, etc.)
- Speaking engagements, publications
- Industry affiliations (FICCI, CII, etc.)

**Section 5: Case Study Highlights**
- 3-4 short case studies featured
- CTA: "See more case studies"

---

#### **Page 3: SERVICES (Deep-Dive)**

**Overview Section:**
- Headline: "How We Create Value"
- 5 service cards (clickable to expand or link to detail pages)
- Each card: Service name, typical timeline, average impact, "Learn More" link

**For Each Service (Individual Pages):**

**OEE & SMED Optimization:**
- Problem: "Low OEE, long changeovers bottlenecking output"
- Your Challenge: Describe typical client situation
- Our Approach: Step-by-step methodology
- Case Study: 1 real case (anonymized) with numbers
- Timeline: 8-10 weeks
- Expected Impact: ₹3-8 Cr (range)
- CTA: "Discuss your OEE challenge"

(Similar structure for other 4 services)

---

#### **Page 4: CASE STUDIES (Portfolio & Social Proof)**

**Case Study Hub:**
- Filter by: Sector, Business Impact (₹), Type (OEE, Workforce, Capacity, etc.)
- Grid layout: 5-6 case study cards
- Each card shows: Sector, Business Impact, Challenge headline, CTA

**Individual Case Study Pages:**

Structure:
1. Challenge (2-3 sentences describing client situation)
2. What We Did (Methodology steps taken)
3. Key Findings (Data, root causes)
4. Solution & Results (Before/After metrics, visual)
5. Impact (₹ value, Timeline, Sustainability)
6. Client Quote (anonymized or named, if approved)
7. Related Services (Cross-links to service pages)
8. CTA: "Start Your Assessment"

**Design Elements for Case Studies:**
- Before/After comparison tables (visual)
- Process flow diagrams (SMED example, Material flow, etc.)
- ₹ impact prominently displayed in gold box
- Timeline graphic showing engagement phases

---

#### **Page 5: HOW WE WORK (Methodology)**

**Hero:**
- Headline: "Our 5-Phase Methodology"
- Tagline: "From loss identification to sustained profit recovery"

**Phase Breakdown (Interactive or Scrolling):**

For each of 5 phases:
- Title & duration
- What we do (3-4 bullet points)
- Key deliverable
- Icon/visual
- Example output (screenshot of DILO template, OEE analysis, etc.)

**Visual Treatment:**
- Large numbers (01, 02, 03, 04, 05) for each phase
- Connected flow (arrows or lines showing progression)
- Alternating layout (phase on left, details on right; then flip)
- Color: Navy headings, teal accents, white/off-white backgrounds

**Timeline Visual:**
- Horizontal timeline showing 8-16 week typical engagement
- Phase blocks with milestones
- Responsive: Stacks vertically on mobile

---

#### **Page 6: BLOG (Thought Leadership)**

**Blog Hub:**
- Latest 6 posts displayed (grid)
- Categories: Manufacturing Insights, Lean Tips, Industry News, Case Studies
- Search & filter functionality
- Pagination

**Blog Post Template:**
- Featured image (manufacturing-related)
- Post title, date, author (Tarun), read time
- Body content (800-1500 words)
- Key takeaway box (gold border, highlight main insight)
- Related posts (3 at bottom)
- Author bio
- CTA: "Discuss this with Tarun"

**Initial Blog Topics (to launch with):**
1. "8 Hidden Losses Eroding Your Factory's Profitability"
2. "How SMED Saved a Steel Mill ₹5 Cr Annually"
3. "OEE Benchmark: Why 40-60% Effective OEE Is Costing You"
4. "Lean Six Sigma in Indian Manufacturing: What Works, What Doesn't"
5. "The Cost of Excess Manpower (And How to Fix It)"

---

#### **Page 7: CONTACT/LEAD CAPTURE**

**Hero:**
- Headline: "Let's Discuss Your Profit Opportunity"
- Subheading: "A 2-3 hour shopfloor assessment reveals your hidden profit potential"

**Two-Column Layout (desktop):**

Left Column: Contact form
- Name, Company, Email, Phone
- "Role" (dropdown: COO, Plant Head, Finance Lead, Other)
- "What's your main challenge?" (dropdown: OEE, Lead Time, Manpower, Capacity, Multiple)
- "Message / Specific concerns"
- Submit button

Right Column: Contact details + Social
- Phone: +91 84396 92259
- Email: tarun@pinnaclelogic.in
- WhatsApp: Quick link
- LinkedIn: Profile link
- Expected response time: "Usually within 24 hours"

**Mobile:**
- Single-column form
- Contact details above form

**Form Styling:**
- Background: Light gray input fields
- Button: Navy background, gold text/hover (or reverse)
- Validation: Live feedback on email/phone
- Success message: "Thanks! Tarun will reach out within 24 hours"

---

#### **Page 8: RESOURCES (Value Add)**

**Downloadable Tools:**
- "Manufacturing Profit Loss Checklist" (PDF)
- "OEE Calculation Template" (Excel)
- "Value Stream Mapping Guide" (PDF)
- "ROI Calculator: What's Your Hidden Profit?" (Interactive tool or downloadable)

**Tool Pages:**
- Each resource has a landing page
- Short explanation of what it is
- Benefits/how to use
- Download button (gated with email capture optional)

---

### 4.3 Navigation & UX Flow

**Desktop Navigation (Fixed Header):**
- Logo (left): PL Consulting wordmark in navy
- Nav menu (center): Home | About | Services | Case Studies | How We Work | Blog | Resources | Contact
- CTA button (right): "Start Assessment" (Navy bg, gold text)
- Search icon (optional)

**Mobile Navigation:**
- Hamburger menu (icon top-right)
- Dropdown/slide-out menu
- Logo and menu stack vertically when open
- Search icon (optional)

**Breadcrumb Navigation:**
- Show on all pages except home
- Example: "Home > Services > OEE & SMED Optimization"

**Footer Navigation:**
- Quick links to all main pages
- Contact info
- Social links (LinkedIn, WhatsApp)
- Newsletter signup (optional)
- Copyright, privacy, terms

---

## SECTION 5: DESIGN COMPONENTS & TAILWIND SPECS

### 5.1 Button Styles

**Primary CTA Button (Hero/Main Actions):**
```html
<button class="bg-navy hover:bg-navy-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
  Start Assessment
</button>
```

**Secondary Button (Alternate CTAs):**
```html
<button class="border-2 border-teal text-teal hover:bg-teal hover:text-white px-8 py-4 rounded-lg font-semibold transition">
  Learn More
</button>
```

**Gold Accent Button (Results/Data-focused):**
```html
<button class="bg-gold hover:bg-gold-dark text-navy px-6 py-3 rounded-lg font-semibold transition">
  View Case Studies
</button>
```

### 5.2 Card Components

**Service Card:**
```html
<div class="bg-white rounded-lg shadow-lg p-8 border-t-4 border-gold hover:shadow-xl transition">
  <h3 class="text-2xl font-bold text-navy mb-4">OEE Optimization</h3>
  <p class="text-steel text-base leading-relaxed mb-6">
    Improve Equipment Effectiveness through TPM and SMED...
  </p>
  <a href="#" class="text-teal font-semibold hover:text-teal-dark">
    Learn More →
  </a>
</div>
```

**Case Study Card:**
```html
<div class="bg-off-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer">
  <div class="bg-gradient-to-r from-navy to-teal p-6 text-white">
    <p class="text-sm font-semibold mb-2">FMCG Manufacturer</p>
    <p class="text-3xl font-bold">₹2.0 Cr</p>
    <p class="text-sm mt-1">Business Impact</p>
  </div>
  <div class="p-6">
    <p class="text-steel font-semibold mb-4">30% Lead-Time Reduction</p>
    <p class="text-base text-gray-600 mb-6">
      Optimized order-to-dispatch flow by removing bottlenecks...
    </p>
    <a href="#" class="text-teal font-semibold">Read Case Study →</a>
  </div>
</div>
```

**Stat Callout Box:**
```html
<div class="bg-off-white border-l-4 border-gold rounded-lg p-8">
  <p class="text-sm text-gray-600 font-semibold mb-2">Typical OEE</p>
  <p class="text-5xl font-bold text-navy">40-60%</p>
  <p class="text-base text-steel mt-2">Recoverable to 75%+ without new machines</p>
</div>
```

### 5.3 Hero Section Template

```html
<section class="bg-gradient-to-r from-navy via-navy-light to-teal min-h-screen flex items-center">
  <div class="container mx-auto px-6 py-20">
    <div class="max-w-2xl">
      <h1 class="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
        Unlock Hidden Capacity, Productivity & Profit
      </h1>
      <p class="text-xl text-gray-100 leading-relaxed mb-8">
        We recover ₹5-30 Cr in operational losses without new machines. Average ROI: 10-50x. Payback: &lt;6 months.
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <button class="bg-gold hover:bg-gold-dark text-navy px-8 py-4 rounded-lg font-semibold">
          Start Assessment
        </button>
        <button class="border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-4 rounded-lg font-semibold">
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>
```

### 5.4 Responsive Design Breakpoints (Tailwind)

```tailwind
sm: 640px   // Mobile landscape
md: 768px   // Tablet
lg: 1024px  // Desktop
xl: 1280px  // Large desktop
2xl: 1536px // Extra large
```

**Responsive Grid Example:**
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <!-- Cards adjust: 1 col mobile, 2 col tablet, 3 col desktop -->
</div>
```

**Responsive Typography:**
```html
<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
  Responsive Heading
</h1>
```

---

## SECTION 6: COPYWRITING & MESSAGING HOOKS

### 6.1 Core Hooks by Page

**Homepage Hero:**
- Primary: "Unlock Hidden Capacity, Productivity & Profit"
- Supporting: "₹5-30 Cr in operational losses without new machines. 10-50x ROI. <6 months payback."

**Problem Section:**
- Hook: "Most factories are quietly leaving profit on the table"
- Supporting: "40-60% effective OEE on lines that look fully loaded"

**Methodology Section:**
- Hook: "From Loss Identification to Sustained Profit Recovery"
- Supporting: "5 phases. Hands-on execution. Measurable results."

**Services Section:**
- Hook: "We don't advise from an office—we execute on the floor"
- Supporting: "Lean Six Sigma rigor. Data-driven. Tarun-led."

**Case Studies:**
- Hook: "₹43.42 Cr in Business Value Created"
- Supporting: "Outcomes measured in rupees, not slideware"

**CTAs:**
- Primary: "Start Your Shopfloor Assessment"
- Secondary: "Chat on WhatsApp"
- Tertiary: "Book a Call with Tarun"

### 6.2 Messaging Principles

**Always use rupees, not percentages:**
- ❌ "30% improvement in efficiency"
- ✅ "₹2 Cr annual savings"

**Lead with business impact, not process:**
- ❌ "We do SMED implementation"
- ✅ "Reduce changeover from 12 hours to 7.4 hours, unlocking ₹3.5 Cr"

**Emphasize hands-on execution:**
- ❌ "We provide consulting on operational excellence"
- ✅ "Tarun leads shopfloor implementation with your teams"

**Use data, not jargon:**
- ❌ "Lean Six Sigma certified"
- ✅ "Proven 10-50x ROI across manufacturing sectors"

---

## SECTION 7: TECHNICAL STACK & DEVELOPMENT APPROACH

### 7.1 Recommended Tech Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Frontend Framework** | React.js (or Next.js) | Component reusability, responsive design, dynamic content |
| **Styling** | Tailwind CSS | Rapid development, consistent design system, mobile-first |
| **CMS** | Headless CMS (Contentful/Sanity) or static (Markdown) | Easy content updates, case studies, blog |
| **Backend** | Node.js (Express) + MongoDB or Firebase | Lightweight, handles form submissions, lead tracking |
| **Hosting** | Vercel (Next.js) or Netlify (React) | Fast global CDN, automatic deployments, HTTPS |
| **Forms** | Formspree or Basin | Simple form backend, email notifications |
| **Analytics** | Google Analytics 4 + Hotjar | Traffic insights, user behavior tracking |
| **Email** | SendGrid or Mailgun | Transactional emails, confirmation messages |
| **SEO** | Next.js Head, meta tags, structured data | On-page SEO, Open Graph for social sharing |

### 7.2 Performance & Accessibility

**Performance Targets:**
- Page load time: <2 seconds (Core Web Vitals)
- Largest Contentful Paint (LCP): <2.5s
- Cumulative Layout Shift (CLS): <0.1
- First Input Delay (FID): <100ms

**Accessibility (WCAG 2.1 AA):**
- Alt text on all images
- Semantic HTML (headings, nav, main, etc.)
- Color contrast ratios (4.5:1 for text, 3:1 for graphics)
- Keyboard navigation (tab through all elements)
- Form labels associated with inputs
- Mobile-responsive design (viewport meta tag)

**Mobile Responsiveness:**
- Test on: iPhone SE, iPhone 12/14 Pro, Samsung Galaxy S21, iPad (all in Safari & Chrome)
- Touch targets: Minimum 44×44 px
- Viewport: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

### 7.3 SEO Strategy

**On-Page SEO:**
- Title tags: "PL Consulting | Manufacturing Operational Excellence"
- Meta descriptions: 155-160 characters, include main keyword
- H1 tags: One per page, clear hierarchy
- URL structure: `/services/oee-optimization` (kebab-case)
- Internal linking: 2-3 contextual links per page
- Mobile-first indexing ready

**Technical SEO:**
- Sitemap.xml (all pages)
- robots.txt (allow all)
- Structured data: Schema.org markup for Organization, LocalBusiness, BreadcrumbList
- Fast page speed (Core Web Vitals)
- SSL/HTTPS enabled

**Content SEO:**
- Target keywords: "manufacturing operational excellence," "OEE improvement," "lean consulting," "capacity optimization"
- Blog posts optimized for long-tail keywords
- Internal linking strategy (services → related blog posts)

---

## SECTION 8: 8-WEEK DEVELOPMENT ROADMAP

### **Phase 1: Planning & Design (Week 1-2)**

**Week 1: Requirements & Wireframes**
- [ ] Finalize sitemap and page list
- [ ] Create wireframes for 8 main pages (Figma)
- [ ] Define Tailwind color tokens and component library
- [ ] Establish content hierarchy and copy
- [ ] Create user flow diagrams (lead capture path)

**Deliverables:**
- Wireframes (Figma file)
- Color system document
- Tailwind config draft
- Content outline for all pages

**Week 2: Design Mockups & Dev Kickoff**
- [ ] High-fidelity mockups (Figma) for 8 pages
- [ ] Component library (buttons, cards, forms in Tailwind)
- [ ] Typography system finalized
- [ ] Design system documentation
- [ ] Dev environment setup (repo, package.json, Tailwind config)

**Deliverables:**
- Figma design file (with components)
- Design system document (Notion or Wiki)
- GitHub repo initialized (Next.js starter)
- Environment variables template

---

### **Phase 2: Frontend Development (Week 3-5)**

**Week 3: Core Layout & Pages 1-3**
- [ ] Navbar & footer components
- [ ] Homepage (Hero, Problem, Approach sections)
- [ ] About page (Tarun bio, mission, credentials)
- [ ] Navigation & responsive mobile menu
- [ ] Implement Tailwind colors & typography

**Deliverables:**
- Homepage live (draft)
- About page live
- Navigation responsive on mobile
- Color system verified

**Week 4: Services & Case Studies (Pages 4-6)**
- [ ] Services hub page (5 service cards)
- [ ] Individual service detail pages (OEE, Workforce, Capacity, Lead-time, Integrated)
- [ ] Case studies hub (grid layout)
- [ ] Individual case study pages (template + content)
- [ ] Internal linking between services & cases

**Deliverables:**
- All services pages responsive
- Case study template created
- 5 case studies templated with content
- Cross-linking verified

**Week 5: Methodology, Blog & Resources (Pages 7-9)**
- [ ] "How We Work" page (5-phase interactive/scrolling)
- [ ] Blog hub with filtering/categories
- [ ] 3-5 initial blog posts published
- [ ] Resources page (downloadable PDFs)
- [ ] Resource landing pages

**Deliverables:**
- Methodology page live with visuals
- Blog system live with 5 posts
- Resources downloadable
- Blog filtering working

---

### **Phase 3: Lead Capture & Forms (Week 6)**

**Week 6: Forms & Backend**
- [ ] Contact/lead capture form (Formspree or custom backend)
- [ ] Form validation (email, phone)
- [ ] Confirmation page after submission
- [ ] Email notifications to Tarun
- [ ] Form data storage (tracking)
- [ ] WhatsApp CTA links functional
- [ ] Calendar integration (optional Calendly widget)

**Deliverables:**
- Contact form tested & working
- Form submissions trigger email
- Database storing leads (if custom backend)
- Lead scoring/categorization

---

### **Phase 4: SEO & Analytics (Week 7)**

**Week 7: SEO & Monitoring**
- [ ] Google Analytics 4 setup & tracking
- [ ] Meta tags on all pages (titles, descriptions, OG tags)
- [ ] Sitemap.xml generated & submitted to GSC
- [ ] robots.txt configured
- [ ] Structured data schema implemented (Organization, LocalBusiness)
- [ ] Schema testing (Google's Structured Data Testing Tool)
- [ ] Hotjar heatmap setup (optional)
- [ ] Search Console setup & initial indexing check

**Deliverables:**
- Google Analytics live & tracking
- Google Search Console verified
- All pages indexed
- Meta tags audit passed
- Schema validation passed

---

### **Phase 5: QA & Launch Prep (Week 8)**

**Week 8: Testing & Deployment**
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Mobile testing (iOS Safari, Android Chrome)
- [ ] Form testing (all fields, validation, submissions)
- [ ] Link checking (all internal & external links)
- [ ] Image optimization & lazy loading
- [ ] Performance audit (Lighthouse)
- [ ] Accessibility audit (WAVE, axe DevTools)
- [ ] Content proofreading (all pages)
- [ ] Security audit (SSL, headers, CORS)
- [ ] Final Figma-to-Dev comparison
- [ ] Deploy to production (Vercel)
- [ ] DNS setup (if custom domain)
- [ ] Email forwarding setup (info@, tarun@)
- [ ] Redirect old domain (if applicable)

**Deliverables:**
- Lighthouse score 90+ (all pages)
- WAVE accessibility audit passed
- All tests passed
- Production deployment successful
- Domain live & working
- Analytics tracking verified

---

## SECTION 9: POST-LAUNCH ROADMAP (Month 2-3)

### **Week 9-10: Monitoring & Optimization**
- Monitor bounce rates, session duration, conversion rate
- Collect user feedback (surveys, form submissions)
- Fix bugs (if any)
- Optimize images further (WebP conversion)
- Add tracking for CTA clicks, form submissions
- Publish 2-3 additional blog posts

### **Week 11-12: Enhancement Phase**
- Implement user feedback
- A/B test CTA copy ("Start Assessment" vs "Book Consultation")
- Add testimonials/social proof widgets
- Create downloadable resource library
- Build email nurture sequence for leads

---

## SECTION 10: DELIVERABLES CHECKLIST

### **Design & Planning (Week 1-2)**
- ✅ Sitemap document
- ✅ Wireframes (Figma)
- ✅ High-fidelity mockups (Figma)
- ✅ Design system documentation
- ✅ Color palette & Tailwind config
- ✅ Typography specification
- ✅ Component library (Figma)
- ✅ Content hierarchy outline

### **Development (Week 3-8)**
- ✅ GitHub repository
- ✅ Next.js project structure
- ✅ Tailwind CSS configured
- ✅ Responsive layout framework
- ✅ All 8+ pages built & responsive
- ✅ Contact form with backend
- ✅ Blog system (CMS or Markdown)
- ✅ Case study template & content
- ✅ Navigation (desktop & mobile)

### **SEO & Performance (Week 7-8)**
- ✅ Google Analytics 4 configured
- ✅ Google Search Console verified
- ✅ Meta tags on all pages
- ✅ Sitemap.xml & robots.txt
- ✅ Structured data schema
- ✅ Lighthouse audit (90+ score)
- ✅ Core Web Vitals passing

### **QA & Launch**
- ✅ Cross-browser testing passed
- ✅ Mobile responsiveness verified
- ✅ Accessibility audit passed (WCAG 2.1 AA)
- ✅ Content proofread & approved
- ✅ Links all working
- ✅ Forms tested & working
- ✅ Production deployment successful
- ✅ Domain live & DNS configured

### **Content (Week 1-8)**
- ✅ Homepage copy
- ✅ About page copy
- ✅ Service pages (5 services × 200-300 words each)
- ✅ Case study content (5 cases with metrics)
- ✅ Blog posts (5-8 initial posts)
- ✅ FAQ page (optional)
- ✅ Meta descriptions for all pages
- ✅ CTA copy variations

---

## SECTION 11: DESIGN & DEVELOPMENT GUIDELINES

### 11.1 Tailwind CSS Best Practices

**Do's:**
- Use utility classes for consistent spacing (p-4, m-6, gap-8)
- Leverage responsive prefixes (md:, lg:, sm:)
- Create custom components for reused patterns (@apply)
- Use color tokens defined in tailwind.config.js
- Keep CSS organized in separate component files

**Don'ts:**
- Don't use arbitrary values unless necessary (`w-[427px]`)
- Avoid inline styles; use Tailwind utilities
- Don't hardcode colors; use design system tokens
- Avoid deep nesting of divs

### 11.2 Component Naming Convention

```
/components
├── /common
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Navigation.jsx
│   └── Button.jsx
├── /pages
│   ├── HomePage.jsx
│   ├── ServicesPage.jsx
│   ├── CaseStudiesPage.jsx
│   └── ContactPage.jsx
├── /sections
│   ├── HeroSection.jsx
│   ├── ProblemsSection.jsx
│   ├── CaseStudyCard.jsx
│   └── StatCallout.jsx
├── /forms
│   ├── ContactForm.jsx
│   └── NewsletterForm.jsx
└── /ui
    ├── Card.jsx
    ├── Badge.jsx
    ├── Modal.jsx
    └── Tabs.jsx
```

### 11.3 File Organization

```
project/
├── public/
│   ├── images/
│   │   ├── hero.jpg
│   │   ├── tarun.jpg
│   │   └── case-studies/
│   └── downloads/
│       ├── profit-loss-checklist.pdf
│       └── oee-calculator.xlsx
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   │   └── globals.css (Tailwind imports)
│   ├── lib/
│   │   ├── api.js
│   │   └── utils.js
│   └── data/
│       ├── services.json
│       ├── caseStudies.json
│       └── blogPosts.json
├── tailwind.config.js
├── next.config.js
├── package.json
└── README.md
```

---

## SECTION 12: LAUNCH CHECKLIST

### Pre-Launch (48 hours before)
- [ ] All pages tested on mobile & desktop
- [ ] Forms tested (submit, validation, confirmation)
- [ ] Links all working (internal & external)
- [ ] Images optimized & loading fast
- [ ] Analytics code injected
- [ ] Meta tags complete on all pages
- [ ] Social links working (LinkedIn, WhatsApp)
- [ ] Email forwarding tested
- [ ] DNS records configured
- [ ] SSL certificate active
- [ ] Robots.txt & sitemap.xml ready

### Launch Day
- [ ] Deploy to production
- [ ] Test live site (all pages, forms, links)
- [ ] Verify Analytics tracking
- [ ] Submit sitemap to Google Search Console
- [ ] Request URL indexing (Homepage, Services, Blog)
- [ ] Announce on LinkedIn (Tarun's profile)
- [ ] Set up email auto-responders
- [ ] Slack/notification alerts for form submissions
- [ ] Document any issues for follow-up

### Post-Launch (Day 1-7)
- [ ] Monitor Analytics (traffic, bounce rate, conversions)
- [ ] Check Google Search Console for errors
- [ ] Respond to form submissions within 24 hours
- [ ] Fix any reported bugs immediately
- [ ] Optimize any slow pages
- [ ] Monitor Core Web Vitals

---

## CONCLUSION & SUCCESS METRICS

### Launch Success Criteria
✅ Website live and fully functional  
✅ Mobile responsive (tested on 5+ devices)  
✅ All forms capturing leads  
✅ Google Analytics tracking properly  
✅ Lighthouse score 90+  
✅ WCAG 2.1 AA accessibility compliant  
✅ Initial 5 blog posts published  
✅ All case studies live with metrics  

### 30-Day Goals
- 500+ monthly visitors
- 50+ form submissions
- 10+ qualified leads from form
- 3-4 blog posts published
- 4.5+ average page load speed
- NPS 7+ (from early form respondents)

### 90-Day Goals
- 1,500+ monthly visitors
- 150+ form submissions
- 30+ qualified leads
- 15+ blog posts total
- 2-3 new case studies added
- LinkedIn followers: 1,000+ (from launch)
- First engagement signed from website lead

---

**END OF WEBSITE DESIGN & DEVELOPMENT PLAN**

