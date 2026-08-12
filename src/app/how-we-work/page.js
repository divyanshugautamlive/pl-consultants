import Link from "next/link";
import * as Icons from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import DiagnosticSteps from "@/components/sections/DiagnosticSteps";

export const metadata = {
  title: "Our Transformation Framework | Pinnacle Logic Consulting",
  description: "Our 5-phase manufacturing transformation framework roadmap: Diagnose, Analyse, Design, Execute, and Sustain.",
};

export default function HowWeWork() {
  const phases = [
    {
      number: "01",
      name: "Diagnose",
      icon: "Search",
      description: "Comprehensive shopfloor diagnostic, Day-In-The-Life-Of (DILO) studies, and loss quantification to uncover hidden capacity and operational waste.",
      deliverables: [
        "Shopfloor Diagnostic Report",
        "Loss Tree & Bottleneck Analysis",
        "Baseline Opportunity Assessment"
      ]
    },
    {
      number: "02",
      name: "Analyse",
      icon: "Activity",
      description: "Data-driven root cause analysis to trace shopfloor losses, cycle time variations, and line imbalances to fundamental systemic causes.",
      deliverables: [
        "Value Stream Mapping (VSM)",
        "Work-Element Balance Chart",
        "Root Cause Verification Matrix"
      ]
    },
    {
      number: "03",
      name: "Design",
      icon: "Layout",
      description: "Co-create lean future-state shopfloor layouts, standardized work instructions, and rapid changeover protocols with your engineering team.",
      deliverables: [
        "Future State Layout Blueprint",
        "SMED Quick-Changeover Protocols",
        "Standardized Work Instructions & SOPs"
      ]
    },
    {
      number: "04",
      name: "Execute",
      icon: "Zap",
      description: "Hands-on, line-side execution alongside plant managers, supervisors, and operators to implement layout changes and train frontline crews.",
      deliverables: [
        "Rebalanced Assembly / Machine Line",
        "Trained Frontline Workforce & Supervisors",
        "Deployed Visual Control Systems"
      ]
    },
    {
      number: "05",
      name: "Sustain",
      icon: "CheckCircle",
      description: "Embed Daily Management Systems (DMS), shift standup huddles, and layered process audits to lock in operational gains permanently.",
      deliverables: [
        "Daily Management System (DMS) Playbook",
        "Layered Process Audit Checklists",
        "Sustaining Governance & Audit Matrix"
      ]
    }
  ];

  const expectedOutcomes = [
    {
      title: "Higher Productivity",
      metric: "+25% to +40%",
      desc: "Increased output per operator-hour through work content rebalancing, motion reduction, and standardized work routines.",
      icon: "TrendingUp"
    },
    {
      title: "Reduced Costs",
      metric: "-15% to -30%",
      desc: "Lower unit conversion cost driven by scrap reduction, overtime elimination, and optimized headcount deployment.",
      icon: "DollarSign"
    },
    {
      title: "Higher OEE",
      metric: "18% + Uplift",
      desc: "Enhanced equipment availability, speed, and quality output on constraint assets through TPM and SMED setup reduction.",
      icon: "Settings"
    },
    {
      title: "Reduced Lead Time",
      metric: "-30% to -50%",
      desc: "Faster order fulfillment from raw material receipt to dispatch by eliminating batch queues and WIP buffer congestion.",
      icon: "Clock"
    },
    {
      title: "Better Material Flow",
      metric: "-35% Travel",
      desc: "Streamlined unidirectional logistics pathways, eliminating crisscrossing transport, double-handling, and aisle blockage.",
      icon: "Box"
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-[#F5F2EB] via-[#F8F5F0] to-[#FAF9F6] text-steel pt-28 pb-14 sm:pt-36 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute top-20 -left-20 w-80 h-80 rounded-full bg-navy/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest bg-navy/5 px-3.5 py-1.5 rounded-full text-navy font-bold border border-navy/10 shadow-2xs">
            Execution Methodology
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy leading-tight">
            Our Transformation Framework
          </h1>
          <div className="h-1 w-20 bg-gold mx-auto rounded-full"></div>
          <p className="text-steel-light text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Operational transformation requires structured discipline. Our 5-phase framework governs every step on the shopfloor to turn operational waste into validated profit.
          </p>
        </div>
      </section>

      {/* 2. ALTERNATING VERTICAL TIMELINE ROADMAP (SMOOTHLY BLENDED WITH UI) */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* VERTICAL ALTERNATING ROADMAP CONTAINER */}
        <div className="relative">
          {/* CENTRAL VERTICAL CONNECTOR LINE */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 border-r-2 border-dashed border-gold/70 md:-translate-x-1/2 z-0" />

          <div className="space-y-12 md:space-y-16">
            {phases.map((phase, index) => {
              const IconComp = Icons[phase.icon] || Icons.CheckCircle;
              const isEven = index % 2 === 0; // Even = Right, Odd = Left on Desktop

              return (
                <div
                  key={phase.number}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* CENTRAL NODE CIRCLE MARKER ON THE LINE */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#051930] border-2 border-gold text-gold flex items-center justify-center font-bold text-xs shadow-xl z-20 group-hover:scale-110 transition-transform">
                    {phase.number}
                  </div>

                  {/* CONTENT (Smoothly blended into background, no hard white box card) */}
                  <div className="w-full md:w-[calc(50%-2.5rem)] pl-12 md:pl-0">
                    <div className="group relative p-6 sm:p-8 space-y-4 rounded-3xl bg-gradient-to-br from-white/70 via-[#F5F2EB]/60 to-transparent border border-navy/10 hover:border-gold/60 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                      {/* ACCENT TOP LINE */}
                      <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                      {/* PHASE HEADER */}
                      <div className="flex items-center space-x-3.5">
                        <div className="w-12 h-12 rounded-2xl bg-[#051930] text-gold border border-gold/30 flex items-center justify-center shadow-md shrink-0 group-hover:scale-110 group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[11px] font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-0.5 rounded-full border border-gold/20">
                            PHASE {phase.number}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-navy leading-tight mt-1 group-hover:text-gold-dark transition-colors">
                            {phase.name}
                          </h3>
                        </div>
                      </div>

                      {/* DESCRIPTION */}
                      <p className="text-steel text-sm sm:text-base leading-relaxed">
                        {phase.description}
                      </p>

                      {/* DELIVERABLES (Clean Soft Blend Box) */}
                      <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4.5 border border-gray-200/80 space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 inline-flex items-center gap-1">
                          <Icons.Award className="w-3.5 h-3.5 text-emerald-600" />
                          Phase Deliverables
                        </span>
                        <ul className="space-y-1.5 pt-1">
                          {phase.deliverables.map((del, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm font-semibold text-navy">
                              <Icons.CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="leading-snug">{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* EMPTY HALF SPACE FOR ALTERNATING LAYOUT BALANCE */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2.5 DIAGNOSTIC ASSESSMENT STEPS */}
      <section className="py-16 bg-[#FAF9F6] border-t border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DiagnosticSteps />
        </div>
      </section>

      {/* 3. EXPECTED OUTCOMES SECTION */}
      <section className="py-20 bg-white border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-navy/5 px-3.5 py-1.5 rounded-full border border-navy/10">
              Measurable Business Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy">
              Expected Operational Outcomes
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto rounded-full"></div>
            <p className="text-steel text-base sm:text-lg leading-relaxed">
              Applying our transformation framework across manufacturing facilities delivers consistent, quantified improvements:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {expectedOutcomes.map((outcome, idx) => {
              const IconComp = Icons[outcome.icon] || Icons.TrendingUp;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF9F6] rounded-3xl p-6 border border-gray-200/90 shadow-md flex flex-col justify-between hover:border-gold/70 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-2xl bg-navy/5 border border-navy/10 flex items-center justify-center text-navy">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 inline-block">
                      Target Metric
                    </span>
                    <h3 className="font-serif font-bold text-navy text-xl">
                      {outcome.title}
                    </h3>
                    <p className="text-2xl font-bold text-gold font-serif">
                      {outcome.metric}
                    </p>
                    <p className="text-steel text-xs leading-relaxed">
                      {outcome.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PLANT COMMITMENT & WALKTHROUGH CTA */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#051930] text-white rounded-3xl p-8 sm:p-12 border border-gold/20 shadow-2xl relative overflow-hidden">
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-gold uppercase tracking-wider bg-gold/10 px-3.5 py-1 rounded-full border border-gold/20">
                Partnership Requirements
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                Ready to Implement Our Transformation Framework?
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                We work side-by-side with your Plant Head, supervisors, and operators to ensure every phase is executed cleanly with zero disruption to daily delivery schedules.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <Button href="/contact" variant="primary" className="w-full py-4 text-center justify-center font-bold text-sm shadow-lg">
                Request Shopfloor Assessment
              </Button>
              <a
                href="https://wa.me/918439692259?text=Hi,%20I'd%20like%20to%20discuss%20your%205-phase%20transformation%20framework."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl text-xs shadow transition-colors cursor-pointer"
              >
                Message Our Consultants
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
