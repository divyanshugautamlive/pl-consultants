import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { CaseStudyCard } from "@/components/ui/Card";
import PosterCard from "@/components/ui/PosterCard";
import ContactForm from "@/components/forms/ContactForm";
import ServicesCarousel from "@/components/sections/ServicesCarousel";
import MethodologySection from "@/components/sections/MethodologySection";
import KeyBusinessOutcomes from "@/components/sections/KeyBusinessOutcomes";
import DiagnosticSteps from "@/components/sections/DiagnosticSteps";
import ChallengesSection from "@/components/sections/ChallengesSection";
import caseStudiesData from "@/data/case-studies.json";
import * as Icons from "@/components/ui/Icons";

export const metadata = {
  title: "Pinnacle Logic Consulting | Lean, Process Excellence & Operational Excellence",
  description: "Pinnacle Logic Consulting drives shopfloor productivity, cost reduction, and operational excellence for manufacturers across India.",
};

export default function Home() {
  const featuredCases = caseStudiesData;

  const targetSectors = [
    {
      id: "automotive",
      name: "Auto Components",
      description: "Tier-1 & Tier-2 automotive component machining, sub-assembly, and OEM supply chain optimization.",
      icon: (
        <svg className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
    },
    {
      id: "steel",
      name: "Steel",
      description: "Integrated steel plants, plate mills, rolling mills, and heavy metals processing facilities.",
      icon: (
        <svg className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
        </svg>
      ),
    },
    {
      id: "foundry",
      name: "Foundry",
      description: "Heavy casting foundries, sand moulding shops, core preparation, and pouring operations.",
      icon: (
        <svg className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 3.75 3.75 0 0 0 1.43 3.921Z" />
        </svg>
      ),
    },
    {
      id: "packaging",
      name: "Packaging",
      description: "Flexible film extrusion, converting lines, bag manufacturing, and high-speed packaging plants.",
      icon: (
        <svg className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      ),
    },
    {
      id: "engineering",
      name: "Engineering",
      description: "Precision CNC machining centers, tool manufacturing, gearboxes, valves, and gear cutting.",
      icon: (
        <svg className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.654-4.654m0 0a3 3 0 114.243-4.243m-4.243 4.243L6.3 7.8" />
        </svg>
      ),
    },
    {
      id: "heavy-manufacturing",
      name: "Heavy Manufacturing",
      description: "Structural steel fabrication, heavy machinery assembly, capital equipment, and crane operations.",
      icon: (
        <svg className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>
      ),
    },
    {
      id: "wire-cables",
      name: "Wire & Cables",
      description: "Continuous wire drawing, extrusion insulation lines, stranding, and power cabling facilities.",
      icon: (
        <svg className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
        </svg>
      ),
    },
    {
      id: "textile",
      name: "Textile",
      description: "Spinning mills, yarn processing, loom weaving sheds, and garment assembly operations driving efficient production and market-ready output.",
      icon: (
        <svg className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18V6Z" />
        </svg>
      ),
    },
    {
      id: "fmcg",
      name: "FMCG",
      description: "High-speed bottling, cartoning, liquid compounding, sachet packaging, and SKU changeover speed.",
      icon: (
        <svg className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      ),
    },
    {
      id: "electricals",
      name: "Electricals & Electronics",
      description: "Switchgear, transformer coil winding, PCB SMT line feeder setups, and Poka-Yoke wiring harness assembly.",
      icon: (
        <svg className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5m3-1.5v1.5m3-1.5v1.5m3 3.75h1.5m-1.5 3h1.5m-1.5 3h1.5m-3.75 3v1.5m-3 1.5v-1.5m-3 1.5v-1.5m-3.75-3.75H3m1.5-3H3m1.5-3H3m3.75-3.75A2.25 2.25 0 0 1 9 6h6a2.25 2.25 0 0 1 2.25 2.25v6A2.25 2.25 0 0 1 15 16.5H9A2.25 2.25 0 0 1 6.75 14.25v-6Z" />
        </svg>
      ),
    },
  ];

  const differentiators = [
    {
      title: "Proven Business Impact",
      description: "We focus on delivering measurable improvements in productivity, cost reduction, quality, and operational performance.",
      image: "/images/service_throughput.png",
      icon: "TrendingUp",
      tag: "Business Value",
    },
    {
      title: "Hands-on Implementation",
      description: "We work alongside your teams to implement improvements on the shop floor, ensuring practical solutions and sustainable results.",
      image: "/images/case_automotive.png",
      icon: "Users",
      tag: "Shopfloor Execution",
    },
    {
      title: "Data-driven Problem Solving",
      description: "Every recommendation is backed by structured analysis, operational data, process observation, and performance measurement.",
      image: "/images/service_workflow.png",
      icon: "Search",
      tag: "Rigor & Data",
    },
    {
      title: "Lean Manufacturing & Process Excellence",
      description: "We apply proven Lean Manufacturing, Industrial Engineering, and continuous improvement methodologies to eliminate waste and improve operational performance.",
      image: "/images/service_lean.png",
      icon: "Sliders",
      tag: "Proven Science",
    },
    {
      title: "Manufacturing Domain Expertise",
      description: "Extensive experience across manufacturing environments, delivering productivity improvement, cost optimisation, process excellence, and operational transformation.",
      image: "/images/case_steel.png",
      icon: "Award",
      tag: "Domain Leadership",
    },
    {
      title: "Sustainable Results",
      description: "We build standard work, performance dashboards, KPIs, and governance systems that help organisations sustain improvements long after implementation.",
      image: "/images/service_manpower.png",
      icon: "ShieldCheck",
      tag: "Permanent Impact",
    },
  ];

  const challengesSolved = [
    {
      challenge: "Low OEE & Frequent Breakdowns",
      impact: "Unplanned downtime, minor stops, and speed losses trap machine effectiveness between 40-60%.",
      solution: "TPM Autonomous Maintenance, SMED setup reduction, and 6 Big Losses analysis to unlock equipment productivity.",
    },
    {
      challenge: "Excess Manpower & Line Imbalance",
      impact: "Uneven task distribution leads to operator idle time, line starvation, and inflated labor cost per unit.",
      solution: "MOST time studies, Yamazumi line balancing, and standardized work instructions to optimize headcount.",
    },
    {
      challenge: "Long Lead Times & WIP Congestion",
      impact: "Orders get stuck in shopfloor bottlenecks, tying up working capital and causing late customer deliveries.",
      solution: "Value Stream Mapping (VSM), Kanban pull systems, and continuous flow layout re-engineering.",
    },
    {
      challenge: "Poor Material Flow & High Travel",
      impact: "Chaotic shopfloor layout causes crisscrossing material movement, forklift delays, and space constraints.",
      solution: "Spaghetti diagram analysis, cellular layout design, and Mizusumashi (water-spider) line feeding routes.",
    },
    {
      challenge: "Capacity Bottlenecks on Key Machinery",
      impact: "Demand exceeds plant capacity while constraint stations operate below potential due to uncoordinated scheduling.",
      solution: "Theory of Constraints (TOC) optimization, Drum-Buffer-Rope scheduling, and constraint buffer management.",
    },
    {
      challenge: "High Scrap Rates & Rising Costs",
      impact: "Material waste, rework loops, and inefficient utility usage erode manufacturing profit margins.",
      solution: "Structured Six Sigma problem-solving, yield Kaizen programs, and conversion cost reduction initiatives.",
    },
    {
      challenge: "Plant Layout & Sub-Assembly Inefficiency",
      impact: "Historical ad-hoc machinery placement leads to crisscrossing material flow, long travel routes, and congested aisles.",
      solution: "Systematic Layout Planning (SLP), U-shaped cellular bay design, and material flow route optimization.",
    },
    {
      challenge: "Productivity & Operator Efficiency",
      impact: "Unmeasured work methods and lack of standard work instructions lead to low operator output and variable shift performance.",
      solution: "Scientific MOST time-and-motion studies, frontline Leader Standard Work (LSW), and daily management operating cadences.",
    },
    {
      challenge: "Inventory Management & High WIP",
      impact: "Uncoordinated scheduling and push production cause excessive inventory buffer build-up, locking up working capital.",
      solution: "Supermarket min-max inventory controls, Kanban demand-pull signaling, and FIFO material line feeding.",
    },
  ];

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="bg-[#F5F2EB] text-steel relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Copy Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center space-x-2 bg-navy/5 px-3.5 py-1.5 rounded-full text-gold text-xs font-semibold uppercase tracking-wider">
                <span>Manufacturing Transformation Partner</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-navy leading-tight">
                Transforming Manufacturing Through Lean, Process Excellence & Operational Excellence
              </h1>
              <p className="text-steel-light text-lg sm:text-xl leading-relaxed max-w-2xl">
                Pinnacle Logic Consulting drives shopfloor productivity, cost reduction, and operational excellence for manufacturers across India.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button href="/contact" variant="primary" className="px-8 py-4 text-base font-bold shadow-lg">
                  Request Manufacturing Assessment
                </Button>
                <Button href="/services" variant="secondary" className="px-8 py-4 text-base font-semibold border-navy/30 text-navy hover:bg-navy/5">
                  Explore Capabilities
                </Button>
              </div>

              {/* Social Proof Highlights */}
              <div className="pt-6 border-t border-navy/10 grid grid-cols-2 gap-6 text-left max-w-md">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold font-serif text-gold">35% Avg.</p>
                  <p className="text-xs text-steel-light">Productivity Improvement</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold font-serif text-gold">10 Sectors</p>
                  <p className="text-xs text-steel-light">Manufacturing Domain Focus</p>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-3 rounded-2xl bg-gold/30 -rotate-2" />
                <div className="relative rounded-2xl overflow-hidden card-shadow border-4 border-white bg-navy aspect-4/3 lg:aspect-square flex items-center justify-center">
                  <Image
                    src="/images/manufacturing_hero_bg.png"
                    alt="Pinnacle Logic Consulting shopfloor operational excellence"
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

      {/* 2. KEY BUSINESS OUTCOMES */}
      <section className="py-20 bg-off-white border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-teal uppercase tracking-widest bg-teal/10 px-3 py-1 rounded-full">
              Key Business Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy">
              Measurable Operational Impact
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
            <p className="text-steel text-base leading-relaxed">
              Our lean and operational excellence engagements deliver concrete, quantified improvements across critical manufacturing KPIs.
            </p>
          </div>

          <KeyBusinessOutcomes />
        </div>
      </section>

      {/* 3. INDUSTRIES SERVED */}
      <section className="relative py-24 bg-navy-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-20 filter grayscale contrast-125"
          style={{ backgroundImage: `url('/images/new-imag.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy-dark/85 to-navy-dark/95 z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">
              Industries Served
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
              Operational Excellence Across Target Sectors
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              We bring specialized domain know-how and hands-on lean methodologies tailored to the unique operational demands of these key manufacturing industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {targetSectors.map((sector, i) => (
              <Link
                key={i}
                href={`/industries#${sector.id}`}
                className="group relative flex flex-col justify-between p-8 bg-navy-dark/70 border border-white/10 hover:border-gold/50 hover:bg-navy-dark/90 rounded-2xl backdrop-blur-md shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="absolute -inset-px bg-gradient-to-br from-gold/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-0" />

                <div className="relative z-10 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold/30 transition-colors duration-300">
                    {sector.icon}
                  </div>
                  <h3 className="text-white font-serif font-bold text-xl leading-snug group-hover:text-gold transition-colors">
                    {sector.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {sector.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONSULTING CAPABILITIES CAROUSEL */}
      <section id="services" className="py-20 bg-off-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-navy/5 px-3.5 py-1.5 rounded-full border border-navy/10">
              Consulting Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy">
              Comprehensive Manufacturing Capabilities
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto rounded-full"></div>
            <p className="text-steel text-base sm:text-lg leading-relaxed">
              Explore our expanded consulting practice areas designed to drive shopfloor efficiency, waste elimination, and bottom-line productivity.
            </p>
          </div>

          <ServicesCarousel />
        </div>
      </section>

      {/* 5. WHY CHOOSE PINNACLE LOGIC */}
      <section className="py-20 bg-white border-y border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-teal uppercase tracking-widest bg-teal/10 px-3 py-1 rounded-full">
              Why Choose Pinnacle Logic
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy">
              Why Manufacturers Choose Pinnacle Logic
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
            <p className="text-steel text-base leading-relaxed">
              We combine deep manufacturing expertise with hands-on implementation to deliver measurable improvements in productivity, cost, quality, and operational performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((diff, i) => (
              <PosterCard
                key={i}
                title={diff.title}
                description={diff.description}
                image={diff.image}
                iconName={diff.icon}
                categoryTag={diff.tag}
                href="/about"
                ctaText="OUR ADVANTAGE"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. TRANSFORMATION METHODOLOGY */}
      <section className="py-20 bg-navy-dark border-y border-navy-light/10 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:30px_30px] z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">
              Framework Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Expected Framework Outcomes
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
            <p className="text-gray-300 text-base leading-relaxed">
              Our structured operational transformation framework delivers concrete, measurable performance improvements across critical manufacturing KPIs.
            </p>
          </div>

          <MethodologySection />
        </div>
      </section>

      {/* 7. CASE STUDIES */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-teal uppercase tracking-widest bg-teal/10 px-3 py-1 rounded-full">
              Floor-Level Evidence
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy">
              Proven Case Studies &amp; Operational KPIs
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
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

      {/* 8. MANUFACTURING CHALLENGES WE SOLVE */}
      <ChallengesSection />

      {/* 8. FINAL CTA ASSESSMENT SECTION */}
      <section id="assessment-form" className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
                Start Your Transformation
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                Start Your Manufacturing Transformation
              </h2>
              <div className="h-1 w-16 bg-gold rounded"></div>

              <p className="text-gold font-semibold text-lg leading-snug">
                Identify productivity opportunities, reduce operational costs, and improve manufacturing performance.
              </p>

              <p className="text-gray-300 text-sm leading-relaxed">
                Contact our manufacturing consultants to discuss your operational challenges. We conduct a structured shopfloor assessment to evaluate your manufacturing operations and identify improvement opportunities.
              </p>

              <ul className="space-y-2.5 pt-2">
                {[
                  "Production Flow & Bottleneck Assessment",
                  "Productivity & Manpower Analysis",
                  "OEE & Equipment Performance Review",
                  "Material Flow & Waste Identification",
                  "Capacity Improvement Opportunities",
                  "Cost Reduction Potential",
                  "Implementation Roadmap"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-gray-200 font-medium">
                    <Icons.Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/10 space-y-3.5">
                <p className="text-xs uppercase font-bold text-gold tracking-wider">Direct Channels:</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+918439692259"
                    className="inline-flex items-center justify-center bg-white text-navy font-bold px-6 py-3 rounded-lg text-sm shadow hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <Icons.Phone className="w-4 h-4 mr-2 text-navy" /> Call: +91 84396 92259
                  </a>
                  <a
                    href="mailto:tarun@pinnaclelogic.in"
                    className="inline-flex items-center justify-center bg-navy-light text-white border border-white/20 font-bold px-6 py-3 rounded-lg text-sm shadow hover:bg-navy-light/80 transition-colors cursor-pointer"
                  >
                    <Icons.Mail className="w-4 h-4 mr-2 text-gold" /> Email Our Team
                  </a>
                </div>
              </div>
            </div>

            {/* Right form card column */}
            <div className="lg:col-span-7 bg-white text-navy rounded-2xl p-8 card-shadow border border-gray-150 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold text-navy mb-2">Request a Manufacturing Assessment</h3>
                <p className="text-steel text-sm mb-6">Submit your factory details below to discuss your operational challenges with our consultants.</p>
                <ContactForm lightTheme={true} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
