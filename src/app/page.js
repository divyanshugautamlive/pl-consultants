import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { CaseStudyCard, StatCallout } from "@/components/ui/Card";
import ContactForm from "@/components/forms/ContactForm";
import ServicesGrid from "@/components/sections/ServicesGrid";
import RoiCalculator from "@/components/sections/RoiCalculator";
import caseStudiesData from "@/data/case-studies.json";
import * as Icons from "@/components/ui/Icons";

export default function Home() {
  const featuredCases = caseStudiesData;

  const credentials = [
    { title: "Lean Six Sigma Black Belt", issuer: "ASQ Certified Standards" },
    { title: "TPM (Total Productive Maintenance)", issuer: "Japanese JIPM Frameworks" },
    { title: "B.Tech in Mechanical Engineering", issuer: "Manufacturing Systems Focus" },
    { title: "Industrial Engineering Expert", issuer: "Time-and-Motion & Layout Design" },
  ];

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
      <section className="bg-[#F5F2EB] text-steel relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
        {/* Decorative subtle background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:30px_30px]" />
        {/* Soft teal glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left copy column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center space-x-2 bg-navy/5 px-3 py-1 rounded-full text-gold text-xs font-semibold uppercase tracking-wider">
                <span>Shopfloor Profit Recovery Partner</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-navy leading-tight">
                Unlock Hidden Capacity, Productivity & Profit
              </h1>
              <p className="text-steel-light text-lg sm:text-xl leading-relaxed max-w-2xl">
                We recover <strong className="text-navy font-semibold">₹5-30 Cr</strong> in operational losses directly from your current shopfloor, without buying new machinery. Payback: <strong className="text-navy font-semibold">&lt;6 months</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button href="/contact" variant="primary" className="px-8 py-4 text-base font-bold shadow-lg">
                  Start Your Shopfloor Assessment
                </Button>
                <Button href="/services" variant="secondary" className="px-8 py-4 text-base font-semibold border-navy/30 text-navy hover:bg-navy/5">
                  Explore Services
                </Button>
              </div>

              {/* Quick social proof bullet row */}
              <div className="pt-6 border-t border-navy/10 grid grid-cols-2 gap-4 text-left max-w-md">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold font-serif text-gold">₹43.42 Cr+</p>
                  <p className="text-xs text-steel-light">EBITDA Value Created & Identified</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold font-serif text-gold">7+ Yrs</p>
                  <p className="text-xs text-steel-light">Shopfloor Experience</p>
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
      <section className="relative py-24 overflow-hidden border-y border-navy-light/10 bg-navy-dark text-white">
        {/* Background Image Layer with opacity filter */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-25 filter grayscale contrast-125"
          style={{ backgroundImage: `url('/images/new-imag.jpg')` }}
        />
        {/* Color overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy-dark/80 to-navy-dark/95 z-10" />

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">
              Sectors We Serve
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
              Operational Excellence Tailored For Industrial Sectors
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              We deliver hands-on, high-impact shopfloor diagnostics and waste recovery-oriented engineering tailored to the unique technical requirements of these key industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                name: "FMCG",
                icon: (
                  <svg className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                )
              },
              {
                name: "Automotive & Electronics",
                icon: (
                  <svg className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                )
              },
              {
                name: "FIBC & Bulk Bag / Packaging",
                icon: (
                  <svg className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                )
              },
              {
                name: "Integrated Steel",
                icon: (
                  <svg className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
                  </svg>
                )
              },
              {
                name: "Wire & Cable",
                icon: (
                  <svg className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                  </svg>
                )
              }
            ].map((sector, i) => (
              <div
                key={i}
                className="group relative flex flex-col items-center justify-center p-8 bg-navy-dark/65 border border-white/10 hover:border-gold/50 hover:bg-navy-dark/90 rounded-2xl backdrop-blur-md text-center shadow-xl transform hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Hover glow backdrop */}
                <div className="absolute -inset-px bg-gradient-to-br from-gold/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-0" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-4 p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-gold/10 group-hover:border-gold/25 transition-colors duration-300">
                    {sector.icon}
                  </div>
                  <h3 className="text-white font-serif font-bold text-base sm:text-lg text-center leading-snug">
                    {sector.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES Hub Teaser */}
      <section id="services" className="py-20 bg-off-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="space-y-3 max-w-2xl">
              <h2 className="text-xs font-bold text-teal uppercase tracking-widest">Our Capabilities</h2>
              <p className="text-3xl sm:text-4xl font-serif font-bold text-navy">
                How We Create Measurable EBITDA Value
              </p>
              <div className="h-1 w-20 bg-gold rounded"></div>
            </div>
          </div>

          {/* Render ServicesGrid client component with inline expansion */}
          <ServicesGrid />
        </div>
      </section>
      
      {/* Append the Core Promise & 3-step walk from Services page */}
      <section className="py-20 bg-navy-dark border-y border-navy-light/10 text-white relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:30px_30px] z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full inline-block">Our Promise</h2>
              <p className="text-3xl font-serif font-bold text-white leading-tight">
                Our Fee Structure is Tied Directly to Your Savings
              </p>
              <div className="h-1 w-16 bg-gold rounded"></div>
              
              <p className="text-gray-300 text-base leading-relaxed">
                We believe in mutual skin in the game. For qualified facilities, our consulting engagement fees can be structured against verified bottom-line savings (rupee-denominated EBITDA value). If we don&apos;t recover profit, you don&apos;t pay.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed italic">
                * Available for manufacturing plants with annual revenues between ₹15 Cr and ₹100 Cr, subject to a completed 2-hour shopfloor diagnostic assessment.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200/60 card-shadow space-y-6">
              <h3 className="font-serif font-bold text-navy text-xl">
                Diagnostic Assessment Steps:
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Initial Discovery Call",
                    desc: "20-minute call to check production lines, equipment list, and current bottlenecks.",
                  },
                  {
                    step: "02",
                    title: "2-Hour Shopfloor Walk",
                    desc: "Tarun Sharma visits your facility to observe changeovers, material flow, and idle times.",
                  },
                  {
                    step: "03",
                    title: "Impact Proposal Delivery",
                    desc: "We present a written report detailing the identified loss areas and estimated Rupee savings.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-navy text-base">{item.title}</h4>
                      <p className="text-steel text-xs leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button
                  href="#assessment-form"
                  variant="gold"
                  className="w-full py-3.5 px-6 font-bold shadow-md cursor-pointer"
                >
                  Schedule Your Shopfloor Walk <Icons.ArrowRight className="w-4 h-4 ml-2 inline" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CASE STUDIES / RESULTS - Hiding temporarily
      <section className="py-20 bg-navy text-white relative overflow-hidden">
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
      */}

      {/* 4. METHODOLOGY (Diagnose -> Quantify -> Execute -> Sustain) - Hiding temporarily */}
      {false && (
        <section className="py-20 bg-navy-dark border-y border-navy-light/10 text-white relative overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:30px_30px] z-0" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full inline-block">Our Execution Blueprint</h2>
              <p className="text-3xl sm:text-4xl font-serif font-bold text-white">
                Our 4-Phase Shopfloor Approach
              </p>
              <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
              <p className="text-gray-300 text-base leading-relaxed">
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
                <div key={phase.number} className="bg-white rounded-xl card-shadow p-6 border-l-4 border-gold border-r border-y border-gray-150 hover:border-gold hover:shadow-[0_0_25px_rgba(193,135,36,0.18)] transition-all duration-300 hover:-translate-y-1">
                  <span className="text-xs font-bold text-gold-dark block mb-2">PHASE {phase.number}</span>
                  <h3 className="text-xl font-serif font-bold text-navy mb-3">{phase.name}</h3>
                  <p className="text-steel text-sm leading-relaxed">{phase.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/how-we-work" className="text-gold hover:text-gold-light font-bold inline-flex items-center group">
                See How We Work in Detail <Icons.ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 5. WHY CHOOSE PINNACLE LOGIC CONSULTING */}
      <section className="py-20 bg-off-white">
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

      {/* ABOUT THE FOUNDER SECTION */}
      <section id="about" className="py-20 bg-white scroll-mt-20 border-t border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            {/* Image frame */}
            <div className="lg:col-span-4 relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -inset-3 bg-gold/15 rounded-2xl rotate-3" />
              <div className="relative rounded-2xl overflow-hidden card-shadow border-4 border-white bg-navy aspect-square">
                <Image
                  src="/images/tarun_sharma_headshot.png"
                  alt="Tarun Sharma - Founder of Pinnacle Logic Consulting"
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Copy */}
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs uppercase tracking-widest bg-navy/5 px-3 py-1 rounded-full text-navy font-semibold">
                About the Founder
              </span>
              <h2 className="text-4xl font-serif font-bold leading-tight text-navy">
                Meet Tarun Sharma
              </h2>
              <p className="text-teal font-medium text-lg italic">
                Operational Excellence & Lean Six Sigma Consultant
              </p>
              <div className="h-1 w-20 bg-gold rounded"></div>
              
              <p className="text-steel text-base leading-relaxed">
                With over <strong className="text-navy font-semibold">7+ years</strong> of active, hands-on shopfloor manufacturing experience, I help Indian MSMEs uncover the operational profits that are quietly lost daily in their production processes.
              </p>
              <p className="text-steel text-base leading-relaxed">
                Unlike corporate advisory consultants who hand over slide decks and leave, I believe in floor-level execution. I stand side-by-side with your shopfloor operators, adjusting machines, standardizing changeovers, and balancing lines to prove that operational excellence is a science, not a theory.
              </p>

              {/* Sector badges list */}
              <div className="pt-4">
                <p className="text-xs font-bold text-teal uppercase tracking-widest mb-4">Sectors Served</p>
                <div className="flex flex-wrap gap-2.5">
                  {sectors.map((sector, i) => (
                    <span key={i} className="bg-navy/5 text-navy font-semibold px-3.5 py-1.5 rounded-full text-xs border border-navy/10">
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bio Philosophy & vision grids */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-gray-150 pt-20 mb-20">
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-teal uppercase tracking-widest">Our Philosophy</h3>
              <p className="text-2xl font-serif font-bold text-navy">
                Data-Driven Shopfloor Rigor
              </p>
              <div className="h-1 w-16 bg-gold rounded"></div>
              <blockquote className="border-l-4 border-gold pl-4 text-steel italic text-base mt-6">
                &ldquo;We do not sell solutions—we recover profit. Every process change we make must be reflected in your company&apos;s monthly EBITDA.&rdquo;
              </blockquote>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  title: "Hands-on Implementation",
                  description: "We work directly on the shopfloor alongside operators, shift supervisors, and plant managers. We believe that true change starts where the value is created—on the floor.",
                },
                {
                  title: "No Capex Required",
                  description: "We focus entirely on optimizing your existing assets, manpower, and space. We help you unlock additional capacity from your current machinery setup.",
                },
                {
                  title: "Frontline Buy-In",
                  description: "Any process change will fail if operators don't support it. We run small Kaizen groups to involve operators in redesigns, ensuring long-term sustainability.",
                },
                {
                  title: "Standardized Audits",
                  description: "We install Daily Management Systems (DMS) and structured audit sheets. This ensures that improvements stick and do not slide back to old habits.",
                },
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="font-serif font-bold text-navy text-lg flex items-center">
                    <span className="w-2 h-2 bg-gold rounded-full mr-2.5"></span>
                    {item.title}
                  </h4>
                  <p className="text-steel-light text-sm leading-relaxed pl-4">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Breakdown timeline */}
          <div className="border-t border-gray-150 pt-20 mb-20">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h3 className="text-xs font-bold text-teal uppercase tracking-widest">Experience Breakdown</h3>
              <p className="text-3xl font-serif font-bold text-navy">
                Career Timeline & Background
              </p>
              <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
              <div className="p-4 bg-amber-500/10 border border-amber-500/30 text-amber-800 rounded-lg text-sm max-w-2xl mx-auto mt-6">
                <strong>TODO for Tarun Sharma:</strong> The timeline below contains placeholders that sum exactly to your 7+ years of experience. Please supply the real company names, role titles, and stint durations before launch.
              </div>
            </div>

            <div className="relative border-l-2 border-gray-200 max-w-4xl mx-auto pl-6 sm:pl-8 space-y-12">
              {/* Stint 1 Placeholder */}
              <div className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full border-2 border-gold bg-white group-hover:bg-gold transition-colors duration-200" />
                <div className="bg-off-white rounded-xl border border-gray-200 p-6 card-shadow transition-all duration-300">
                  <span className="inline-block text-xs font-bold text-teal tracking-widest uppercase mb-1.5 bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                    [START YEAR] – [END YEAR] ([4] years) &bull; TODO Placeholder Stint 1
                  </span>
                  <h4 className="text-xl font-serif font-bold text-navy mb-2">
                    [ROLE TITLE]
                  </h4>
                  <h5 className="text-sm font-semibold text-gray-500 mb-4">
                    [COMPANY NAME]
                  </h5>
                  <p className="text-steel text-sm leading-relaxed italic">
                    [One-line description of scope/responsibility]
                  </p>
                </div>
              </div>

              {/* Stint 2 Placeholder */}
              <div className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full border-2 border-gold bg-white group-hover:bg-gold transition-colors duration-200" />
                <div className="bg-off-white rounded-xl border border-gray-200 p-6 card-shadow transition-all duration-300">
                  <span className="inline-block text-xs font-bold text-teal tracking-widest uppercase mb-1.5 bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                    [START YEAR] – [END YEAR] ([3] years) &bull; TODO Placeholder Stint 2
                  </span>
                  <h4 className="text-xl font-serif font-bold text-navy mb-2">
                    [ROLE TITLE]
                  </h4>
                  <h5 className="text-sm font-semibold text-gray-500 mb-4">
                    [COMPANY NAME]
                  </h5>
                  <p className="text-steel text-sm leading-relaxed italic">
                    [One-line description of scope/responsibility]
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications and credentials list */}
          <div className="border-t border-gray-150 pt-20">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h3 className="text-xs font-bold text-teal uppercase tracking-widest">Credentials</h3>
              <p className="text-3xl font-serif font-bold text-navy">
                Certified Technical Expertise
              </p>
              <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {credentials.map((cred, idx) => (
                <div key={idx} className="bg-off-white rounded-xl border border-gray-200/50 p-6 text-center card-shadow hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold mx-auto mb-4">
                    <Icons.Award className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-navy text-base mb-1">
                    {cred.title}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {cred.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES & ROI CALCULATOR SECTION */}
      <section id="resources" className="py-20 bg-off-white scroll-mt-20 border-t border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-teal uppercase tracking-widest">Value Add Tools</h2>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-navy leading-tight">
              Resources & ROI Calculator
            </h3>
            <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
            <p className="text-steel text-base leading-relaxed max-w-3xl mx-auto">
              Calculate your plant&apos;s potential profit leakage or download standard checklists and templates to evaluate your setups and line balancing.
            </p>
          </div>
          
          {/* Render RoiCalculator client component */}
          <RoiCalculator />
        </div>
      </section>

      {/* 7. CTA / CONTACT FORM LEAD CAPTURE */}
      <section id="assessment-form" className="py-20 bg-white">
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
