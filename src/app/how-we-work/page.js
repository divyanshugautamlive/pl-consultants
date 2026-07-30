import Link from "next/link";
import * as Icons from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import DiagnosticSteps from "@/components/sections/DiagnosticSteps";

export const metadata = {
  title: "Our Transformation Framework | Pinnacle Logic Consulting",
  description: "Our 5-phase manufacturing transformation framework: Diagnose, Analyse, Design, Execute, and Sustain.",
};

export default function HowWeWork() {
  const phases = [
    {
      number: "01",
      name: "Diagnose",
      icon: "Search",
      description: "Comprehensive shopfloor diagnostic, Day-In-The-Life-Of (DILO) studies, and loss quantification to uncover hidden capacity and operational waste.",
      activities: [
        "Conduct 7 Waste (Muda) shopfloor audit across value streams",
        "Perform DILO time-and-motion studies for key operators & crews",
        "Analyze 6 Big Losses on bottleneck machines",
        "Establish accurate OEE and cycle time baselines"
      ],
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
      activities: [
        "Execute MOST (Maynard Operation Sequence Technique) study",
        "Construct Yamazumi line balancing charts & Takt time analysis",
        "Perform Spaghetti diagram material flow tracking",
        "Conduct 5-Why and Ishikawa root cause problem solving"
      ],
      deliverables: [
        "Value Stream Mapping (VSM) Current State",
        "Work-Element Balance Chart",
        "Root Cause Verification Matrix"
      ]
    },
    {
      number: "03",
      name: "Design",
      icon: "Layout",
      description: "Co-create lean future-state shopfloor layouts, standardized work instructions, and rapid changeover protocols with your plant engineering team.",
      activities: [
        "Design cellular flow and unidirectional material pathways",
        "Develop SMED setup reduction and tool presetting routines",
        "Draft Standard Work Sheets (SWS) and visual SOPs",
        "Design Low Cost Automation (Karakuri / Poka-Yoke) fixtures"
      ],
      deliverables: [
        "Future State Layout Blueprint",
        "SMED & Quick-Changeover Protocols",
        "Standardized Work Instructions & SOPs"
      ]
    },
    {
      number: "04",
      name: "Execute",
      icon: "Zap",
      description: "Hands-on, line-side execution alongside plant managers, supervisors, and operators to implement layout changes and train frontline crews.",
      activities: [
        "Conduct targeted 3-day Kaizen execution events on lines",
        "Relocate machinery and establish supermarket buffer zones",
        "Train operators on standard work and error-proofing devices",
        "Deploy visual production tracking & hourly output boards"
      ],
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
      activities: [
        "Establish 15-minute daily shift huddle cadences",
        "Implement Layered Process Audits (LPA) and Kamishibai boards",
        "Institute Hoshin Kanri cascading KPI dashboards",
        "Handover continuous improvement tools to internal champions"
      ],
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
    <div className="bg-off-white min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="bg-[#F5F2EB] text-steel pt-28 pb-16 sm:pt-36 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest bg-navy/5 px-3 py-1 rounded-full text-gold font-semibold">
            Execution Methodology
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-navy leading-tight">
            Our Transformation Framework
          </h1>
          <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
          <p className="text-steel-light text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Operational transformation requires structured discipline. Our 5-phase framework governs every step on the shopfloor to turn operational waste into validated profit.
          </p>
        </div>
      </section>

      {/* 2. 5-PHASE METHODOLOGY STACK */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-teal uppercase tracking-widest bg-teal/10 px-3 py-1 rounded-full">
            Structured Execution
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy">
            The 5 Transformation Phases
          </h2>
          <div className="h-1 w-16 bg-gold mx-auto rounded"></div>
          <p className="text-steel text-sm sm:text-base">
            From initial diagnostic to permanent daily management, we work line-side with your shopfloor teams.
          </p>
        </div>

        <div className="space-y-8">
          {phases.map((phase) => {
            const IconComponent = Icons[phase.icon] || Icons.CheckCircle;
            return (
              <div
                key={phase.number}
                className="bg-white rounded-2xl border border-gray-200/80 card-shadow overflow-hidden transition-all hover:border-gold/50"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left Phase Header Banner */}
                  <div className="lg:col-span-4 bg-gradient-to-br from-navy via-navy-light to-navy text-white p-8 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-6 -mt-6 text-white/5 font-serif font-bold text-9xl select-none">
                      {phase.number}
                    </div>
                    <div className="relative z-10 space-y-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-xs font-bold text-gold uppercase tracking-wider bg-gold/10 px-2.5 py-1 rounded border border-gold/20">
                          Phase {phase.number}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-gold border border-white/10 shrink-0">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                          {phase.name}
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed pt-2">
                        {phase.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Details: Activities & Deliverables */}
                  <div className="lg:col-span-8 p-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white">
                    {/* Key Activities */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-1.5 border-b border-gray-100 pb-2">
                        <Icons.Check className="w-4 h-4 text-teal" />
                        Key Activities
                      </h4>
                      <ul className="space-y-2.5">
                        {phase.activities.map((act, idx) => (
                          <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-steel">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2"></span>
                            <span className="leading-snug">{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="space-y-4 bg-off-white/70 p-5 rounded-xl border border-gray-150">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-1.5 border-b border-gray-200/60 pb-2">
                        <Icons.Award className="w-4 h-4 text-gold" />
                        Phase Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {phase.deliverables.map((del, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm font-semibold text-navy">
                            <Icons.CheckCircle className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 2.5 DIAGNOSTIC ASSESSMENT STEPS */}
      <section className="py-20 bg-[#FAF9F6] border-t border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DiagnosticSteps />
        </div>
      </section>

      {/* 3. EXPECTED OUTCOMES SECTION */}
      <section className="py-20 bg-white border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">
              Measurable Business Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy">
              Expected Operational Outcomes
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
            <p className="text-steel text-base leading-relaxed">
              Applying our transformation framework across manufacturing facilities delivers consistent, quantified improvements:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {expectedOutcomes.map((outcome, idx) => {
              const IconComp = Icons[outcome.icon] || Icons.TrendingUp;
              return (
                <div
                  key={idx}
                  className="bg-off-white rounded-2xl p-6 border border-gray-200 card-shadow flex flex-col justify-between hover:border-gold transition-all hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-navy/5 border border-navy/10 flex items-center justify-center text-navy">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-teal uppercase tracking-wider block">
                      Target Outcome
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
        <div className="bg-navy text-white rounded-3xl p-8 sm:p-12 border border-gold/20 card-shadow relative overflow-hidden">
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-gold uppercase tracking-wider bg-gold/10 px-3 py-1 rounded-full">
                Partnership Requirements
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                Ready to Implement Our Transformation Framework?
              </h2>
              <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
                We work side-by-side with your Plant Head, supervisors, and operators to ensure every phase is executed cleanly with zero disruption to daily delivery schedules.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <Button href="/contact" variant="primary" className="w-full py-4 text-center justify-center font-bold text-sm">
                Request Shopfloor Assessment
              </Button>
              <a
                href="https://wa.me/918439692259?text=Hi,%20I'd%20like%20to%20discuss%20your%205-phase%20transformation%20framework."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-lg text-xs shadow transition-colors cursor-pointer"
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
