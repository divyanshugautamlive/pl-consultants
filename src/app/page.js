import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { CaseStudyCard, StatCallout } from "@/components/ui/Card";
import ContactForm from "@/components/forms/ContactForm";
import caseStudiesData from "@/data/case-studies.json";
import servicesData from "@/data/services.json";
import * as Icons from "@/components/ui/Icons";

export default function Home() {
  // Grab all case studies to display
  const featuredCases = caseStudiesData;

  // Quick stats lists (ground-truth values only)
  const problemStats = [
    {
      label: "Line Equipment Uptime",
      value: "40-60%",
      description: "Typical effective OEE (Overall Equipment Effectiveness) in MSMEs",
      footer: "Recoverable to 75%+ without purchasing new machines.",
    },
    {
      label: "Operational Margin Leakage",
      value: "₹5-30 Cr",
      description: "Quietly lost annually in mid-sized factories",
      footer: "Sourced from setup delays, minor stops, and speed losses.",
    },
    {
      label: "Manpower Waste",
      value: "15-35%",
      description: "Lost due to poor line balancing and process layouts",
      footer: "Recoverable through standard work and cell design.",
    },
  ];

  const differentiators = [
    {
      title: "₹43.42 Cr+ Value Created & Identified",
      description: "Outcomes measured in hard rupees, not slideware or theoretical percentages.",
    },
    {
      title: "Hands-on Shopfloor Execution",
      description: "We implement on the floor with your teams, not just advise from a glass office.",
    },
    {
      title: "Data-driven Problem Solving",
      description: "Every process decision is grounded in structured study, DILO, and measurement.",
    },
    {
      title: "Lean Six Sigma Methodology",
      description: "Structured, statistical improvement discipline led by certified Black Belt standards.",
    },
    {
      title: "Manufacturing Domain Expertise",
      description: "Deep operational know-how across steel mills, auto, packaging, and cable factories.",
    },
    {
      title: "Sustainable Results",
      description: "Operational gains are locked in permanently with standard work and cascading KPIs.",
    },
  ];

  const sectors = [
    "FMCG",
    "Automotive & Electronics",
    "FIBC & Bulk Bag / Packaging",
    "Integrated Steel",
    "Wire & Cable",
  ];

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="bg-navy-dark text-white relative overflow-hidden py-16 lg:py-24">
        {/* Decorative subtle background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px]" />
        {/* Soft teal glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-teal/15 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left copy column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full text-gold text-xs font-semibold uppercase tracking-wider">
                <span>Shopfloor Profit Recovery Partner</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Unlock Hidden Capacity, Productivity & Profit
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl">
                We recover <strong className="text-white font-semibold">₹5-30 Cr</strong> in operational losses directly from your current shopfloor, without buying new machinery. Payback: <strong className="text-white font-semibold">&lt;6 months</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button href="/contact" variant="gold" className="px-8 py-4 text-base font-bold shadow-lg">
                  Start Your Shopfloor Assessment
                </Button>
                <Button href="/services" variant="secondary" className="px-8 py-4 text-base font-semibold border-white/30 text-white hover:bg-white/10">
                  Explore Services
                </Button>
              </div>

              {/* Quick social proof bullet row */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-left max-w-md">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold font-serif text-gold">₹43.42 Cr+</p>
                  <p className="text-xs text-gray-400">EBITDA Value Created & Identified</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold font-serif text-gold">7+ Yrs</p>
                  <p className="text-xs text-gray-400">Shopfloor Experience</p>
                </div>
              </div>
            </div>

            {/* Right image frame column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Gold frame backing */}
                <div className="absolute -inset-3 rounded-2xl bg-gold/30 -rotate-2" />
                <div className="relative rounded-2xl overflow-hidden card-shadow border-4 border-white bg-navy aspect-4/3 lg:aspect-square flex items-center justify-center">
                  <Image
                    src="/images/manufacturing_hero_bg.png"
                    alt="Pinnacle Logic Consulting smart manufacturing shopfloor"
                    fill
                    sizes="(max-w-768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM STATEMENT */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-teal uppercase tracking-widest">The Profit Leakage</h2>
            <p className="text-3xl sm:text-4xl font-serif font-bold text-navy">
              Most factories are quietly leaving profit on the table
            </p>
            <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
            <p className="text-steel text-base leading-relaxed">
              Industrial operations departments are typically focused on fire-fighting daily production issues. They lack the time and standardized measurement methodologies to capture and eliminate structural margin losses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problemStats.map((stat, i) => (
              <StatCallout
                key={i}
                label={stat.label}
                value={stat.value}
                description={stat.description}
                footer={stat.footer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS WE SERVE */}
      <section className="relative py-20 overflow-hidden text-center flex items-center justify-center border-y border-gray-200">
        {/* Background Image Layer with Opacity 0.4 */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
          style={{ backgroundImage: `url('/images/new-imag.jpg')` }}
        />
        {/* Black color opacity overlay layer */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex flex-col items-center justify-center">
          <p className="text-xs font-bold text-gold uppercase tracking-widest mb-8 text-center w-full">Sectors We Serve</p>
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 md:gap-8 w-full">
            {sectors.map((sector, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-5 bg-black/50 border border-white/10 rounded-xl backdrop-blur-sm min-w-[200px] text-center shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <span className="text-white font-serif font-bold text-base sm:text-lg text-center">
                  {sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES Hub Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="space-y-3 max-w-2xl">
              <h2 className="text-xs font-bold text-teal uppercase tracking-widest">Our Capabilities</h2>
              <p className="text-3xl sm:text-4xl font-serif font-bold text-navy">
                How We Create Measurable EBITDA Value
              </p>
              <div className="h-1 w-20 bg-gold rounded"></div>
            </div>
            <Link
              href="/services"
              className="text-teal hover:text-teal-dark font-bold inline-flex items-center mt-4 md:mt-0 group"
            >
              See All Services <Icons.ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 3).map((service) => (
              <div key={service.id} className="bg-white rounded-xl card-shadow border-t-4 border-gold p-8 transition-all-custom card-shadow-hover flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">{service.title}</h3>
                  <p className="text-teal font-medium text-xs mb-4 italic">{service.tagline}</p>
                  <p className="text-steel text-sm leading-relaxed line-clamp-4 mb-6">{service.problem}</p>
                </div>
                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                    <span>Expected Financial Impact: <strong className="text-navy">{service.expectedImpactRange}</strong></span>
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-teal font-semibold hover:text-teal-dark hover:underline transition-colors text-sm"
                  >
                    Explore Service Details <Icons.ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CASE STUDIES / RESULTS */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        {/* Teal spotlight */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-teal/15 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="space-y-3">
              <h2 className="text-xs font-bold text-gold uppercase tracking-widest">Proven Floor Results</h2>
              <p className="text-3xl sm:text-4xl font-serif font-bold text-white">
                ₹43.42 Cr+ Business Value Created & Identified
              </p>
              <div className="h-1 w-20 bg-gold rounded"></div>
            </div>
            <Link
              href="/case-studies"
              className="text-gold hover:text-gold-light font-bold inline-flex items-center mt-4 md:mt-0 group"
            >
              View All Case Studies <Icons.ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCases.map((study) => (
              <div key={study.id} className="text-steel">
                <CaseStudyCard study={study} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. METHODOLOGY (Diagnose -> Quantify -> Execute -> Sustain) */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-teal uppercase tracking-widest">Our Execution Blueprint</h2>
            <p className="text-3xl sm:text-4xl font-serif font-bold text-navy">
              Our 4-Phase Shopfloor Approach
            </p>
            <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
            <p className="text-steel text-base leading-relaxed">
              We guide plant transformations from initial diagnostic identification to sustained frontline audits. Our execution structure ensures no detail is missed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                name: "Diagnose",
                desc: "Shopfloor study, DILO, OEE & bottleneck analysis to locate the real losses.",
              },
              {
                number: "02",
                name: "Quantify",
                desc: "Translate every loss into rupees — capacity, manpower, lead time, working capital.",
              },
              {
                number: "03",
                name: "Execute",
                desc: "Hands-on implementation with your teams — SMED, line balancing, flow & standards.",
              },
              {
                number: "04",
                name: "Sustain",
                desc: "Standard work, visual management and KPIs that lock the gains in place.",
              },
            ].map((phase) => (
              <div key={phase.number} className="bg-white rounded-xl card-shadow p-6 border-l-4 border-teal hover:border-gold/50 transition-all-custom">
                <span className="text-xs font-bold text-gold-dark block mb-2">PHASE {phase.number}</span>
                <h3 className="text-xl font-serif font-bold text-navy mb-3">{phase.name}</h3>
                <p className="text-steel text-sm leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/how-we-work" className="text-teal hover:text-teal-dark font-bold inline-flex items-center group">
              See How We Work in Detail <Icons.ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE PINNACLE LOGIC CONSULTING */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-teal uppercase tracking-widest">Our Differentiators</h2>
            <p className="text-3xl sm:text-4xl font-serif font-bold text-navy">
              Why MSME Manufacturers Partner With Us
            </p>
            <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
            <p className="text-steel text-base leading-relaxed">
              We aren&apos;t traditional advisory firms. We are hands-on implementers with a background in engineering and statistical floor operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((diff, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 card-shadow p-6 hover:border-gold/30 transition-all-custom">
                <div className="flex items-center space-x-3.5 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark shrink-0">
                    <Icons.Check className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-navy text-base sm:text-lg leading-snug">{diff.title}</h3>
                </div>
                <p className="text-steel text-sm leading-relaxed pl-11">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA / CONTACT FORM LEAD CAPTURE */}
      <section id="assessment-form" className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text column */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-xs font-bold text-teal uppercase tracking-widest">Get Started Today</h2>
              <p className="text-3xl sm:text-4xl font-serif font-bold text-navy leading-tight">
                Unlock your factory&apos;s hidden capacity
              </p>
              <div className="h-1 w-16 bg-gold rounded"></div>

              <p className="text-steel text-base leading-relaxed">
                Contact Tarun Sharma to discuss your operational challenges. We will schedule a 2-3 hour initial shopfloor walkthrough (assessment) to identify:
              </p>

              <ul className="space-y-3">
                {[
                  "Actual line OEE and setup bottleneck lines",
                  "Estimated manpower efficiency savings (₹ value)",
                  "Specific materials/scrap reduction opportunities",
                  "Estimated payback period (typically <6 months)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm text-steel font-medium">
                    <Icons.Check className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-gray-200 space-y-3.5">
                <p className="text-sm font-semibold text-navy">Or connect via direct channels:</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/918439692259?text=Hi%20Tarun,%20I'd%20like%20to%20discuss%20a%20shopfloor%20assessment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-lg text-sm shadow transition-colors cursor-pointer"
                  >
                    <Icons.Phone className="w-4 h-4 mr-2" /> Message on WhatsApp
                  </a>
                  <a
                    href="tel:+918439692259"
                    className="inline-flex items-center justify-center bg-white border border-gray-300 text-navy font-bold px-6 py-3 rounded-lg text-sm shadow hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    Call: +91 84396 92259
                  </a>
                </div>
              </div>
            </div>

            {/* Right form card column */}
            <div className="lg:col-span-7 bg-navy text-white rounded-2xl p-8 card-shadow border border-navy-light relative overflow-hidden">
              {/* Soft gold glow */}
              <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-gold/10 blur-3xl" />
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Book Shopfloor Assessment</h3>
                <p className="text-gray-300 text-sm mb-6">Provide your contact details. Responses are secured and reviewed within 24 hours.</p>
                <ContactForm lightTheme={false} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
