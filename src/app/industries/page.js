import Link from "next/link";
import * as Icons from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import QuickJumpNav from "@/components/common/QuickJumpNav";

export const metadata = {
  title: "Target Industries | Pinnacle Logic Consulting",
  description: "Hands-on manufacturing consulting tailored for Automotive, Steel, Foundry, Packaging, Precision Engineering, and Heavy Manufacturing.",
};

export default function IndustriesPage() {
  const targetIndustries = [
    {
      id: "automotive",
      slug: "automotive",
      name: "Automotive & Auto Components",
      image: "/images/case_automotive.png",
      tagline: "High-velocity assembly line balancing, SMED quick changeovers, and zero-defect Poka-Yoke error proofing.",
      icon: "Cpu",
      challenges: [
        "Unbalanced sub-assembly lines leading to operator idle time and line starvation.",
        "High changeover downtime when switching die tools between model runs.",
        "Tier-1 delivery pressure with strict On-Time In-Full (OTIF) requirements."
      ],
      solutions: [
        "MOST (Maynard Operation Sequence Technique) work content rebalancing.",
        "SMED setup reduction to cut die changeover times by 35%+.",
        "Poka-Yoke mechanical sensor fixtures at critical quality inspection stations."
      ],
      typicalOutcomes: "35% Manpower Optimisation & 38% Changeover Reduction",
      relatedCaseStudySlug: "automotive-line-balancing"
    },
    {
      id: "steel",
      slug: "steel",
      name: "Steel & Metallurgy",
      image: "/images/case_steel.png",
      tagline: "Constraint optimization across hot rolling mills, slab heating, and cooling bed shearing lines.",
      icon: "Maximize",
      challenges: [
        "Bottlenecks at hot rolling mills and plate shearing lines limiting plant output.",
        "High energy consumption and furnace heating delays during batch changes.",
        "WIP inventory buildup between billet casting and finishing yards."
      ],
      solutions: [
        "Theory of Constraints (TOC) and Drum-Buffer-Rope scheduling deployment.",
        "Slab sequencing optimization to minimize furnace thickness changes.",
        "Material velocity stream mapping across furnace, mill, and dispatch."
      ],
      typicalOutcomes: "30% Lead Time Reduction & 32% Throughput Uplift",
      relatedCaseStudySlug: "steel-mill-capacity-improvement"
    },
    {
      id: "foundry",
      slug: "foundry",
      name: "Foundry & Casting",
      image: "/images/case_foundry.png",
      tagline: "Headcount optimization, sand moulding cycle acceleration, and scrap yield kaizens.",
      icon: "Flame",
      challenges: [
        "Heavy manual labor dependency and high non-value-added material handling.",
        "Moulding shop bottlenecks causing metal cooling delays and casting defects.",
        "High contract labor turn-over inflating operational conversion costs."
      ],
      solutions: [
        "Low Cost Automation (LCIA) with pneumatic hoists and gravity chutes.",
        "Cellular layout design for core setting and mould flask assembly.",
        "Day-In-The-Life-Of (DILO) motion study to eliminate non-value work."
      ],
      typicalOutcomes: "35% Manpower Optimisation & 60% Yield Productivity Increase",
      relatedCaseStudySlug: "foundry-manpower-optimisation"
    },
    {
      id: "packaging",
      slug: "packaging",
      name: "Packaging & FIBC",
      image: "/images/case_packaging.png",
      tagline: "OEE maximization on high-speed extrusion, loom weaving, and automated converting lines.",
      icon: "Box",
      challenges: [
        "Frequent minor stoppages and 12+ hour setup times on extrusion film lines.",
        "WIP congestion between tape extrusion, loom weaving, and bag printing.",
        "High material scrap and edge trim waste during polymer grade switches."
      ],
      solutions: [
        "SMED conversion projects for extrusion die cleaning and screen changing.",
        "TPM Autonomous Maintenance pillars to eliminate micro-stoppages.",
        "Supermarket inventory controls and FIFO material line feeding."
      ],
      typicalOutcomes: "18% OEE Improvement & 38% Setup Reduction",
      relatedCaseStudySlug: "packaging-oee-smed"
    },
    {
      id: "engineering",
      slug: "engineering",
      name: "Precision Engineering",
      image: "/images/case_engineering.png",
      tagline: "Spindle utilization uplift, CNC batch setup reduction, and standardized tooling routines.",
      icon: "Settings",
      challenges: [
        "CNC machining centers losing 35% capacity to fixture changes and tool setting.",
        "Inaccurate standard time baselines causing missed dispatch deadlines.",
        "Operator reliance on manual trial-and-error part alignment."
      ],
      solutions: [
        "Offline tool presetting and quick-clamping zero-point modular fixtures.",
        "Visual setup checklists and standardized tooling carousels.",
        "Cellular machine layout grouping for high-mix low-volume parts."
      ],
      typicalOutcomes: "38% Setup Reduction & 22% Spindle Utilization Uplift",
      relatedCaseStudySlug: "precision-engineering-changeover-reduction"
    },
    {
      id: "heavy-manufacturing",
      slug: "heavy-manufacturing",
      name: "Heavy Manufacturing",
      image: "/images/case_heavy_mfg.png",
      tagline: "Fabrication bay realignments, crane travel distance reduction, and structural lead time compression.",
      icon: "Layout",
      challenges: [
        "Crisscrossing overhead crane movements and structural steel backtracking.",
        "Congested welding bays blocking structural assembly throughput.",
        "Long manufacturing lead times tying up working capital in heavy WIP."
      ],
      solutions: [
        "Unidirectional linear flow layout from plate cutting to final welding bay.",
        "Spaghetti diagram logistics mapping to eliminate travel distances.",
        "Buffer bay management for visual WIP inventory tracking."
      ],
      typicalOutcomes: "30% Lead Time Compression & 45% Crane Distance Reduction",
      relatedCaseStudySlug: "heavy-manufacturing-layout-flow"
    }
  ];

  const jumpItems = targetIndustries.map((ind) => ({
    id: ind.id,
    name: ind.name,
  }));

  return (
    <div className="bg-off-white min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="bg-[#F5F2EB] text-steel pt-28 pb-16 sm:pt-36 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest bg-navy/5 px-3 py-1 rounded-full text-gold font-semibold">
            Industry Focus
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-navy leading-tight">
            Target Manufacturing Sectors
          </h1>
          <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
          <p className="text-steel-light text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            We specialize exclusively in high-rigor discrete and process manufacturing plants. Explore our deep domain expertise across 6 core target industries.
          </p>
        </div>
      </section>

      {/* 2. JUMP TO INDUSTRY NAVBAR */}
      <QuickJumpNav items={jumpItems} label="Jump to Sector:" />

      {/* 3. TARGET INDUSTRIES SECTION LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {targetIndustries.map((ind, index) => {
          const IconComp = Icons[ind.icon] || Icons.Settings;
          return (
            <div
              key={ind.id}
              id={ind.id}
              className="bg-white rounded-2xl border border-gray-200/80 card-shadow overflow-hidden scroll-mt-36 transition-all hover:border-gold/50"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-navy via-navy-light to-navy p-6 sm:p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gold/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-gold shrink-0">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gold uppercase tracking-wider bg-gold/10 px-2.5 py-0.5 rounded">
                      Industry Sector 0{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight mt-1">
                      {ind.name}
                    </h2>
                  </div>
                </div>

                <Link
                  href={`/case-studies/${ind.relatedCaseStudySlug}`}
                  className="inline-flex items-center text-xs font-bold text-gold hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-lg border border-white/10 self-start md:self-center"
                >
                  View Sector Case Study <Icons.ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column: Tagline, Challenges, Solutions */}
                <div className="lg:col-span-7 space-y-6">
                  <p className="text-teal font-medium text-base italic border-l-4 border-teal pl-4 py-1">
                    {ind.tagline}
                  </p>

                  {/* Floor Challenges */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-1.5">
                      <Icons.AlertTriangle className="w-4 h-4 text-amber-500" />
                      Key Sector Challenges
                    </h3>
                    <ul className="space-y-2">
                      {ind.challenges.map((chal, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-steel">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2"></span>
                          <span className="leading-snug">{chal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Operational Solutions */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-1.5">
                      <Icons.Sliders className="w-4 h-4 text-teal" />
                      Pinnacle Logic Floor Solutions
                    </h3>
                    <ul className="space-y-2">
                      {ind.solutions.map((sol, idx) => (
                        <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-steel">
                          <Icons.CheckCircle className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                          <span className="leading-snug">{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Outcomes & CTA */}
                <div className="lg:col-span-5 bg-off-white/80 rounded-xl p-6 border border-gray-150 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal block">
                      Sector Performance Metric
                    </span>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-navy">
                      Typical Verified Outcome
                    </h4>
                    <p className="text-2xl font-bold font-serif text-gold leading-snug">
                      {ind.typicalOutcomes}
                    </p>
                    <p className="text-steel text-xs leading-relaxed">
                      Achieved through hands-on line-side implementation with zero capex equipment replacement.
                    </p>
                  </div>

                  <div className="pt-2">
                    <Button
                      href="/contact"
                      variant="primary"
                      className="w-full py-3.5 text-xs font-bold justify-center"
                    >
                      Request Sector Assessment Call
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 4. FOOTER CTA */}
      <section className="bg-navy text-white py-16 border-t border-gold/20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-serif font-bold text-white">
            Discuss Challenges in Your Sector
          </h2>
          <p className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto">
            Book a diagnostic conversation with our manufacturing consultants to review layout, capacity, and setup losses in your factory.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button href="/contact" variant="primary" className="py-3.5 px-8 text-sm">
              Schedule Diagnostic Walkthrough
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
