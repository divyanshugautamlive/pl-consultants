import Link from "next/link";
import * as Icons from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import QuickJumpNav from "@/components/common/QuickJumpNav";

export const metadata = {
  title: "Operational Excellence Across Target Sectors | Pinnacle Logic Consulting",
  description: "Hands-on manufacturing consulting tailored across 10 target industrial sectors.",
};

export default function IndustriesPage() {
  const targetIndustries = [
    {
      id: "automotive",
      slug: "automotive",
      name: "Auto Components",
      image: "/images/case_automotive.png",
      tagline: "High-velocity assembly line balancing, SMED quick changeovers, and zero-defect Poka-Yoke error proofing.",
      icon: "Cpu",
      challenges: [
        "Unbalanced sub-assembly lines leading to operator idle time and line starvation.",
        "High changeover downtime when switching die tools between model runs.",
        "Tier-1 delivery pressure with strict On-Time In-Full (OTIF) requirements."
      ],
      typicalOutcomes: "35% Manpower Optimisation & 72% Changeover Reduction",
    },
    {
      id: "steel",
      slug: "steel",
      name: "Steel",
      image: "/images/case_steel.png",
      tagline: "Constraint optimization across hot rolling mills, slab heating, and cooling bed shearing lines.",
      icon: "Maximize",
      challenges: [
        "Bottlenecks at hot rolling mills and plate shearing lines limiting plant output.",
        "High energy consumption and furnace heating delays during batch changes.",
        "WIP inventory buildup between billet casting and finishing yards."
      ],
      typicalOutcomes: "30% Lead Time Reduction & 32% Throughput Uplift",
    },
    {
      id: "foundry",
      slug: "foundry",
      name: "Foundry",
      image: "/images/case_foundry.png",
      tagline: "Headcount optimization, sand moulding cycle acceleration, and scrap yield kaizens.",
      icon: "Flame",
      challenges: [
        "Heavy manual labor dependency and high non-value-added material handling.",
        "Moulding shop bottlenecks causing metal cooling delays and casting defects.",
        "High contract labor turn-over inflating operational conversion costs."
      ],
      typicalOutcomes: "35% Manpower Optimisation & 60% Yield Productivity Increase",
    },
    {
      id: "packaging",
      slug: "packaging",
      name: "Packaging",
      image: "/images/case_packaging.png",
      tagline: "OEE maximization on high-speed extrusion, loom weaving, and automated converting lines.",
      icon: "Box",
      challenges: [
        "Frequent minor stoppages and 12+ hour setup times on extrusion film lines.",
        "WIP congestion between tape extrusion, loom weaving, and bag printing.",
        "High material scrap and edge trim waste during polymer grade switches."
      ],
      typicalOutcomes: "18% OEE Improvement & 72% Setup Reduction",
    },
    {
      id: "engineering",
      slug: "engineering",
      name: "Engineering",
      image: "/images/case_engineering.png",
      tagline: "Spindle utilization uplift, CNC batch setup reduction, and standardized tooling routines.",
      icon: "Settings",
      challenges: [
        "CNC machining centers losing 35% capacity to fixture changes and tool setting.",
        "Inaccurate standard time baselines causing missed dispatch deadlines.",
        "Operator reliance on manual trial-and-error part alignment."
      ],
      typicalOutcomes: "72% Setup Reduction & 22% Spindle Utilization Uplift",
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
      typicalOutcomes: "30% Lead Time Compression & 45% Crane Distance Reduction",
    },
    {
      id: "wire-cables",
      slug: "wire-cables",
      name: "Wire & Cables",
      image: "/images/case_packaging.png",
      tagline: "Wire drawing speed maximization, extruder insulation setup reduction, and conductor stranding OEE.",
      icon: "Zap",
      challenges: [
        "Continuous wire drawing die wear causing frequent line breakages.",
        "High extruder changeover downtime on polymer color and grade switches.",
        "Copper and aluminum scrap losses during rewinding and spark testing."
      ],
      typicalOutcomes: "30% Manpower Optimisation & 28% OEE Improvement",
    },
    {
      id: "textile",
      slug: "textile",
      name: "Textile",
      image: "/images/case_steel.png",
      tagline: "Spinning mill ring frame speed optimization and loom warp changeover acceleration.",
      icon: "Maximize",
      challenges: [
        "High end-down rates on ring spinning frames causing operator idle time.",
        "Long warp beam changeover downtime in air-jet and rapier weaving sheds.",
        "WIP bottlenecking across garment cutting and sewing lines."
      ],
      typicalOutcomes: "38% Inventory Improvement & 32% Line Productivity Uplift",
    },
    {
      id: "fmcg",
      slug: "fmcg",
      name: "FMCG",
      image: "/images/case_foundry.png",
      tagline: "High-speed bottling line OEE, rapid SKU changeovers, and sachet sealing loss elimination.",
      icon: "Box",
      challenges: [
        "Frequent SKU size and formulation changeover delays on filling lines.",
        "Micro-stoppages and foil sealing defects on high-speed VFFS machines.",
        "High finished goods inventory due to long batch cycle times."
      ],
      typicalOutcomes: "25% OEE Uplift & 50% SKU Format Changeover Cut",
    },
    {
      id: "electricals",
      slug: "electricals",
      name: "Electricals & Electronics",
      image: "/images/case_engineering.png",
      tagline: "Transformer coil winding acceleration, SMT feeder setup reduction, and Poka-Yoke harness assembly.",
      icon: "Settings",
      challenges: [
        "High setup changeover times on SMT pick-and-place feeder carts.",
        "Manual labor bottlenecks in transformer core stacking and coil winding.",
        "Quality defects and rework during wiring harness assembly."
      ],
      typicalOutcomes: "35% Assembly Cycle Time Compression & 48% SMT Feeder Setup Cut",
    }
  ];

  const jumpItems = targetIndustries.map((ind) => ({
    id: ind.id,
    name: ind.name,
  }));

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* 1. HERO HEADER WITH HOMEPAGE MATCHED HEADING */}
      <section className="bg-gradient-to-b from-[#F5F2EB] via-[#F8F5F0] to-[#FAF9F6] text-steel pt-28 pb-14 sm:pt-36 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute top-20 -left-20 w-80 h-80 rounded-full bg-navy/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest bg-navy/5 px-3.5 py-1.5 rounded-full text-navy font-bold border border-navy/10 shadow-2xs">
            Industrial Coverage
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy leading-tight">
            Operational Excellence Across Target Sectors
          </h1>
          <div className="h-1 w-20 bg-gold mx-auto rounded-full"></div>
          <p className="text-steel-light text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            We specialize exclusively in high-rigor discrete and process manufacturing plants. Explore our deep domain expertise across 10 target industrial sectors.
          </p>
        </div>
      </section>

      {/* 2. JUMP TO INDUSTRY NAVBAR */}
      <QuickJumpNav items={jumpItems} label="Jump to Sector:" />

      {/* 3. 2-COLUMN SPLIT GRID OF CURVY SQUARE CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {targetIndustries.map((ind, index) => {
            const IconComp = Icons[ind.icon] || Icons.Settings;
            return (
              <div
                key={ind.id}
                id={ind.id}
                className="group relative bg-white rounded-3xl border border-gray-200/90 shadow-xl hover:shadow-[0_25px_50px_-12px_rgba(5,25,48,0.2)] hover:border-gold/70 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col justify-between scroll-mt-36"
              >
                {/* ACCENT GRADIENT TOP BORDER ON HOVER */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-navy via-gold to-navy opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                {/* CARD HEADER */}
                <div className="bg-gradient-to-r from-[#051930] via-[#0A2540] to-[#051930] p-6 text-white flex items-center justify-between gap-4 border-b border-gold/20">
                  <div className="flex items-center space-x-4">
                    <div className="w-13 h-13 rounded-2xl bg-white/10 border border-gold/30 flex items-center justify-center text-gold shadow-lg group-hover:scale-110 group-hover:bg-gold group-hover:text-navy transition-all duration-300 shrink-0">
                      <IconComp className="w-6.5 h-6.5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-0.5 rounded-full border border-gold/20">
                        SECTOR 0{index + 1}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight mt-1 group-hover:text-gold transition-colors duration-300">
                        {ind.name}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* CARD BODY */}
                <div className="p-6 sm:p-7 space-y-6 flex-1 flex flex-col justify-between bg-white">
                  {/* TAGLINE CALLOUT */}
                  {ind.tagline && (
                    <div className="bg-navy/5 p-4 rounded-2xl border-l-4 border-gold shadow-2xs">
                      <p className="text-navy font-semibold text-xs sm:text-sm italic leading-relaxed">
                        &ldquo;{ind.tagline}&rdquo;
                      </p>
                    </div>
                  )}

                  {/* KEY SECTOR CHALLENGES */}
                  <div className="space-y-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
                      <Icons.AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                      Key Sector Challenges
                    </span>
                    <ul className="space-y-2 pt-1">
                      {ind.challenges.map((chal, idx) => (
                        <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-steel">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2"></span>
                          <span className="leading-snug">{chal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* TYPICAL VERIFIED OUTCOME */}
                  <div className="bg-[#FAF9F6] rounded-2xl p-5 border border-gray-200/70 space-y-2 mt-auto">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 inline-flex items-center gap-1.5">
                      <Icons.TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                      Typical Verified Outcome
                    </span>
                    <p className="text-lg sm:text-xl font-bold font-serif text-gold leading-tight">
                      {ind.typicalOutcomes}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. FOOTER CTA */}
      <section className="bg-[#051930] text-white py-16 border-t border-gold/20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-serif font-bold text-white">
            Discuss Challenges in Your Sector
          </h2>
          <p className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto">
            Book a diagnostic conversation with our manufacturing consultants to review layout, capacity, and setup losses in your factory.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button href="/contact" variant="primary" className="py-3.5 px-8 text-sm font-bold shadow-lg">
              Schedule Diagnostic Walkthrough
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
