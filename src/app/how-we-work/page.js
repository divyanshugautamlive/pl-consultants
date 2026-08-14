import Link from "next/link";
import * as Icons from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import DiagnosticSteps from "@/components/sections/DiagnosticSteps";

export const metadata = {
  title: "Our Transformation Framework | Pinnacle Logic Consulting",
  description: "Our manufacturing transformation framework: Diagnostic assessment, expected outcomes, and plant commitments.",
};

export default function HowWeWork() {
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
            Operational transformation requires structured discipline. Our structured diagnostic framework governs every step on the shopfloor to turn operational waste into validated profit.
          </p>
        </div>
      </section>

      {/* 2. DIAGNOSTIC ASSESSMENT STEPS */}
      <section className="py-16 bg-[#FAF9F6]">
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
                href="https://wa.me/918439692259?text=Hi,%20I'd%20like%20to%20discuss%20your%20transformation%20framework."
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
