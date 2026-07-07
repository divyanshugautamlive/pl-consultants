import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { CaseStudyCard, StatCallout } from "@/components/ui/Card";
import MethodologySection from "@/components/sections/MethodologySection";
import ContactForm from "@/components/forms/ContactForm";
import caseStudiesData from "@/data/case-studies.json";
import servicesData from "@/data/services.json";
import * as Icons from "@/components/ui/Icons";

export default function Home() {
  // Grab top 3 case studies for display
  const featuredCases = caseStudiesData.slice(0, 3);
  
  // Quick stats lists
  const problemStats = [
    {
      label: "Line Equipment Uptime",
      value: "40-60%",
      description: "Typical effective OEE (Overall Equipment Effectiveness)",
      footer: "Industry benchmark is 80%+; recoverable without new capex.",
    },
    {
      label: "Operational Leakage",
      value: "₹5-30 Cr",
      description: "Quietly lost annually in mid-sized factories",
      footer: "Hidden in setup delays, minor stops, and speed losses.",
    },
    {
      label: "Manpower Waste",
      value: "15-35%",
      description: "Due to poor line balancing and process layouts",
      footer: "Recoverable through standard work and workstation cell design.",
    },
  ];

  const differentiators = [
    {
      title: "Rupee-Denominator Outcomes",
      description: "Every improvement we run is measured in hard cash savings (EBITDA impact), not abstract efficiency percentages.",
    },
    {
      title: "Hands-on Shopfloor Execution",
      description: "We don't sell powerpoints from a glass office. Tarun Sharma works on the factory floor with your supervisors and operators.",
    },
    {
      title: "Lean Six Sigma Black Belt Rigor",
      description: "Every phase follows strict, data-driven statistical control methods to separate random noise from structural loss.",
    },
    {
      title: "Rapid Payback Focus",
      description: "Our projects target a payback period of under 6 months, yielding an average of 10x to 50x ROI on our consulting fees.",
    },
    {
      title: "Sustainable DMS Governance",
      description: "We build and install Daily Management Systems (DMS) and audit schedules so your local team sustains the gains permanently.",
    },
    {
      title: "Cross-Sector Shopfloor Domain",
      description: "Proven track record across steel mills, auto parts, FMCG, cable drawing, electronics, and flexible packaging.",
    },
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
                Unlock Hidden Capacity, Productivity & <span className="text-gold">Profit</span>
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl">
                We recover <strong className="text-white font-semibold">₹5-30 Cr</strong> in operational losses directly from your current shopfloor, without buying new machinery. Average ROI: <strong className="text-white font-semibold">10x-50x</strong>. Payback: <strong className="text-white font-semibold">&lt;6 months</strong>.
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
              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-left">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold font-serif text-gold">₹43.42 Cr+</p>
                  <p className="text-xs text-gray-400">EBITDA Value Created</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold font-serif text-gold">10-50x</p>
                  <p className="text-xs text-gray-400">Average Engagement ROI</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold font-serif text-gold">15+ Yrs</p>
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
                    alt="PL Consulting smart manufacturing shopfloor"
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
              Industrial operations departments are typically focused on fire-fighting daily production fires. They lack the time and standardized measurement methodologies to capture and eliminate structural margin losses.
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
                  <p className="text-steel text-sm leading-relaxed line-clamp-3 mb-6">{service.problem}</p>
                </div>
                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                    <span>Duration: <strong>{service.timeline}</strong></span>
                    <span>Impact: <strong>{service.expectedImpactRange.split(" ")[0]}</strong></span>
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

      {/* 4. METHODOLOGY (DADES) */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-teal uppercase tracking-widest">Our Execution Blueprint</h2>
            <p className="text-3xl sm:text-4xl font-serif font-bold text-navy">
              The DADES 5-Phase Methodology
            </p>
            <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
            <p className="text-steel text-base leading-relaxed">
              We guide plant transformations from initial diagnostic identification to sustained frontline audits. Our execution structure ensures no detail is missed.
            </p>
          </div>

          <MethodologySection />
        </div>
      </section>

      {/* 5. WHY CHOOSE PL CONSULTING */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-teal uppercase tracking-widest">Our Differentiators</h2>
            <p className="text-3xl sm:text-4xl font-serif font-bold text-navy">
              Why Indian MSME Manufacturers Partner With Us
            </p>
            <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
            <p className="text-steel text-base leading-relaxed">
              We aren't traditional advisory firms. We are hands-on implementers with a background in engineering and statistical floor operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((diff, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 card-shadow p-6 hover:border-gold/30 transition-all-custom">
                <div className="flex items-center space-x-3.5 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark shrink-0">
                    <Icons.Check className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-navy text-lg">{diff.title}</h3>
                </div>
                <p className="text-steel text-sm leading-relaxed pl-11">
                  {diff.description}
                </p>
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
                ₹43.42 Cr+ Business Value Created
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCases.map((study) => (
              <div key={study.id} className="text-steel">
                <CaseStudyCard study={study} />
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
                Unlock your factory's hidden capacity
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
