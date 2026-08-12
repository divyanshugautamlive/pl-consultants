import Link from "next/link";
import Button from "@/components/ui/Button";
import * as Icons from "@/components/ui/Icons";

export const metadata = {
  title: "About Us | Pinnacle Logic Consulting",
  description: "Learn about Pinnacle Logic Consulting, our mission, vision, core values, operational excellence philosophy, and founder Tarun Sharma.",
};

export default function AboutPage() {
  const coreValues = [
    {
      title: "Operational Rigor",
      desc: "We ground every recommendation in empirical shopfloor data, DILO studies, and statistical measurement.",
      icon: "Activity",
    },
    {
      title: "Floor-Level Partnership",
      desc: "We stand side-by-side with plant operators and shift supervisors to drive real execution on the floor.",
      icon: "Users",
    },
    {
      title: "Continuous Kaizen",
      desc: "We foster a culture of daily incremental improvements that empower the frontline workforce.",
      icon: "TrendingUp",
    },
    {
      title: "Client Value Creation",
      desc: "Our success is measured by the hard bottom-line Operational Results achieved for client facilities.",
      icon: "Award",
    },
    {
      title: "Integrity & Transparency",
      desc: "We deliver objective diagnostics and transparent progress tracking across every phase of transformation.",
      icon: "ShieldCheck",
    },
  ];

  const differenceCards = [
    {
      title: "Hands-on Implementation",
      description: "We work directly on the shopfloor alongside operators, shift supervisors, and plant managers. We believe that true operational change happens on the floor where value is created.",
    },
    {
      title: "Data-driven Decision Making",
      description: "Every process decision is grounded in structured study, DILO, stop-watch time analysis, and empirical measurement rather than guesswork.",
    },
    {
      title: "Optimising Existing Assets",
      description: "We focus entirely on unlocking hidden capacity from your current machinery, floor layouts, and manpower before suggesting expensive capital investments.",
    },
    {
      title: "People-Centred Transformation",
      description: "Sustainable improvements rely on frontline buy-in. We run Kaizen groups and involve operators directly in process redesigns for long-term ownership.",
    },
    {
      title: "Sustainable Operational Improvements",
      description: "We install Daily Management Systems (DMS) and visual audit sheets to ensure operational gains stick permanently and do not slide back.",
    },
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* SECTION 1: ABOUT PINNACLE LOGIC CONSULTING (Firm Overview) */}
      <section className="bg-gradient-to-b from-[#F5F2EB] via-[#F8F5F0] to-[#FAF9F6] text-steel pt-28 pb-14 sm:pt-36 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute top-20 -left-20 w-80 h-80 rounded-full bg-navy/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest bg-navy/5 px-3.5 py-1.5 rounded-full text-navy font-bold border border-navy/10 shadow-2xs">
            Firm Overview
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy leading-tight">
            About Pinnacle Logic Consulting
          </h1>
          <div className="h-1 w-20 bg-gold mx-auto rounded-full"></div>
          <p className="text-steel-light text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Pinnacle Logic Consulting is a premier manufacturing operational excellence firm. We bridge the gap between high-level management strategy and actual frontline shopfloor execution for industrial manufacturers across India.
          </p>
        </div>
      </section>

      {/* SECTION 2: MISSION, VISION & CORE VALUES */}
      <section className="py-20 bg-white border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Mission Card */}
            <div className="group bg-white hover:bg-[#051930] rounded-3xl p-8 sm:p-10 border border-gray-200 hover:border-gold/50 shadow-xl hover:shadow-2xl space-y-4 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <div className="w-13 h-13 rounded-2xl bg-navy/5 group-hover:bg-gold/20 flex items-center justify-center text-navy group-hover:text-gold transition-colors duration-300">
                <Icons.Target className="w-6.5 h-6.5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy group-hover:text-white transition-colors duration-300">
                Our Mission
              </h2>
              <p className="text-steel-light group-hover:text-gray-200 text-sm sm:text-base leading-relaxed transition-colors duration-300">
                To empower Indian manufacturing enterprises with world-class operational capabilities—eliminating shopfloor waste, expanding capacity from existing assets, and driving sustainable Operational Results.
              </p>
            </div>

            {/* Our Vision Card */}
            <div className="group bg-white hover:bg-[#051930] rounded-3xl p-8 sm:p-10 border border-gray-200 hover:border-gold/50 shadow-xl hover:shadow-2xl space-y-4 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <div className="w-13 h-13 rounded-2xl bg-navy/5 group-hover:bg-gold/20 flex items-center justify-center text-navy group-hover:text-gold transition-colors duration-300">
                <Icons.TrendingUp className="w-6.5 h-6.5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy group-hover:text-white transition-colors duration-300">
                Our Vision
              </h2>
              <p className="text-steel-light group-hover:text-gray-200 text-sm sm:text-base leading-relaxed transition-colors duration-300">
                To be India&apos;s most trusted hands-on operational transformation partner, recognized for transforming plant productivity, workforce efficiency, and manufacturing excellence across key industrial sectors.
              </p>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="bg-[#051930] rounded-3xl p-8 sm:p-12 border border-navy-light/40 shadow-2xl space-y-10 relative overflow-hidden text-white">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px]" />

            <div className="text-center max-w-2xl mx-auto space-y-3 relative z-10">
              <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 border border-gold/20 px-3.5 py-1 rounded-full">
                Guiding Principles
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white">Our Core Values</h3>
              <div className="h-1 w-20 bg-gold mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {coreValues.map((val, idx) => {
                const IconComp = Icons[val.icon] || Icons.Check;
                return (
                  <div
                    key={idx}
                    className="group bg-[#0A2A4D] hover:bg-white rounded-2xl border border-white/10 hover:border-gold p-6 text-center space-y-3.5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/15 group-hover:bg-navy/10 text-gold group-hover:text-navy flex items-center justify-center mx-auto transition-colors duration-300 shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif font-bold text-white group-hover:text-navy text-lg transition-colors duration-300 leading-snug">
                      {val.title}
                    </h4>
                    <p className="text-gray-300 group-hover:text-steel text-xs leading-relaxed transition-colors duration-300">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MEET THE FOUNDER */}
      <section className="py-20 bg-[#FAF9F6] border-b border-gray-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/90 shadow-xl space-y-6 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-navy via-gold to-navy" />

            <span className="text-xs uppercase tracking-widest bg-navy/5 px-3.5 py-1.5 rounded-full text-navy font-bold border border-navy/10 shadow-2xs inline-flex items-center gap-1.5">
              <Icons.UserCheck className="w-3.5 h-3.5 text-gold" />
              Leadership &amp; Ownership
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy leading-tight">
              Meet the Founder — Tarun Sharma
            </h2>

            <p className="text-gold-dark font-serif font-bold text-lg sm:text-xl">
              Founder &amp; Principal Operational Excellence Consultant
            </p>

            <div className="h-1 w-20 bg-gold mx-auto rounded-full"></div>

            <div className="space-y-4 max-w-3xl mx-auto text-steel text-base sm:text-lg leading-relaxed text-left sm:text-center">
              <p>
                With over <strong className="text-navy font-bold">7+ years</strong> of active, hands-on shopfloor manufacturing leadership, Tarun Sharma founded Pinnacle Logic Consulting to help Indian industrial manufacturers recover operational profits quietly lost in daily production.
              </p>
              <p>
                Combining mechanical engineering discipline with Lean Six Sigma methodology, Tarun leads floor-level execution alongside plant operators, shift supervisors, and plant heads—standardizing changeovers, rebalancing lines, and deploying visual management systems that deliver sustained performance gains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: KEY ACHIEVEMENTS */}
      <section className="py-20 bg-white border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-navy/5 px-3.5 py-1.5 rounded-full border border-navy/10">
              Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy">
              Key Achievements &amp; Professional Impact
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto rounded-full"></div>
            <p className="text-steel text-base sm:text-lg leading-relaxed">
              Demonstrated floor-level leadership across complex manufacturing environments over 7+ years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF9F6] rounded-3xl p-8 border border-gray-200/90 shadow-md text-center space-y-3 hover:shadow-xl transition-shadow">
              <p className="text-4xl sm:text-5xl font-serif font-bold text-gold">35% Avg.</p>
              <h3 className="font-serif font-bold text-navy text-xl">Productivity Improvement</h3>
              <p className="text-steel text-xs sm:text-sm leading-relaxed">Quantified output &amp; efficiency gains delivered across plant operational engagements.</p>
            </div>
            <div className="bg-[#FAF9F6] rounded-3xl p-8 border border-gray-200/90 shadow-md text-center space-y-3 hover:shadow-xl transition-shadow">
              <p className="text-4xl sm:text-5xl font-serif font-bold text-gold">7+ Years</p>
              <h3 className="font-serif font-bold text-navy text-xl">Shopfloor Experience</h3>
              <p className="text-steel text-xs sm:text-sm leading-relaxed">Active execution leadership on manufacturing plant floors across diverse sectors.</p>
            </div>
            <div className="bg-[#FAF9F6] rounded-3xl p-8 border border-gray-200/90 shadow-md text-center space-y-3 hover:shadow-xl transition-shadow">
              <p className="text-4xl sm:text-5xl font-serif font-bold text-gold">10 Sectors</p>
              <h3 className="font-serif font-bold text-navy text-xl">Industrial Coverage</h3>
              <p className="text-steel text-xs sm:text-sm leading-relaxed">Domain expertise across Auto Components, Steel, Foundry, Packaging, Engineering, Heavy Mfg, Wire &amp; Cables, Textile, FMCG &amp; Electricals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: THE PINNACLE LOGIC DIFFERENCE */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-navy/5 px-3.5 py-1.5 rounded-full border border-navy/10">
              Our Differentiators
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy">
              The Pinnacle Logic Difference
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto rounded-full"></div>
            <p className="text-steel text-base sm:text-lg leading-relaxed">
              Why manufacturing leaders partner with Pinnacle Logic Consulting for operational transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differenceCards.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="group bg-white hover:bg-[#051930] rounded-3xl border border-gray-200 hover:border-gold/50 p-6 sm:p-8 shadow-lg hover:shadow-2xl space-y-4 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-9 h-9 rounded-full bg-gold/10 group-hover:bg-gold/20 text-gold-dark group-hover:text-gold flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Icons.Check className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-navy group-hover:text-white text-lg leading-snug transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                <p className="text-steel-light group-hover:text-gray-200 text-xs sm:text-sm leading-relaxed pl-12 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {differenceCards.length > 3 && (
            <div className="flex flex-wrap justify-center gap-8 pt-4">
              {differenceCards.slice(3).map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white hover:bg-[#051930] rounded-3xl border border-gray-200 hover:border-gold/50 p-6 sm:p-8 shadow-lg hover:shadow-2xl space-y-4 transition-all duration-300 hover:-translate-y-2 cursor-pointer w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="w-9 h-9 rounded-full bg-gold/10 group-hover:bg-gold/20 text-gold-dark group-hover:text-gold flex items-center justify-center shrink-0 transition-colors duration-300">
                      <Icons.Check className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-bold text-navy group-hover:text-white text-lg leading-snug transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-steel-light group-hover:text-gray-200 text-xs sm:text-sm leading-relaxed pl-12 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      <section className="py-20 bg-[#051930] text-white text-center relative overflow-hidden border-t border-gold/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
            Ready to Transform Your Manufacturing Operations?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Discuss your shopfloor challenges with our operational consultants and discover how we can optimize your plant performance.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button href="/contact" variant="primary" className="px-8 py-4 text-base font-bold shadow-lg">
              Speak With Our Consultants
            </Button>
            <Button href="/contact" variant="secondary" className="px-8 py-4 text-base font-semibold border-white/20 text-white hover:bg-white/10">
              Request Manufacturing Assessment
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
