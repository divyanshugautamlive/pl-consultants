import Link from "next/link";
import MethodologySection from "@/components/sections/MethodologySection";
import * as Icons from "@/components/ui/Icons";
import Button from "@/components/ui/Button";

export default function HowWeWork() {
  return (
    <div className="bg-off-white">
      {/* 1. HERO HEADER */}
      <section className="bg-navy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-teal/15 blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest bg-white/15 px-3 py-1 rounded-full text-gold font-semibold">
            Our Approach
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold leading-tight">
            How We Partner With You
          </h1>
          <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Operational transformation requires structured discipline. Our 5-phase DADES methodology governs every step to turn shopfloor waste into validated profit.
          </p>
        </div>
      </section>

      {/* 2. DADES SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-150">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-xs font-bold text-teal uppercase tracking-widest">Our Methodology</h2>
          <p className="text-3xl font-serif font-bold text-navy">
            The 5 DADES Phases
          </p>
          <div className="h-1 w-16 bg-gold mx-auto rounded"></div>
          <p className="text-steel text-sm">
            We follow a structured 5-phase framework (Diagnose, Analyze, Design, Implement, Sustain) to execute changes on your lines.
          </p>
        </div>

        <MethodologySection />
      </section>

      {/* 3. CLIENT TEAM COMMITMENT INFO */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-xs font-bold text-teal uppercase tracking-widest">Cooperative Success</h2>
            <p className="text-3xl font-serif font-bold text-navy leading-tight">
              Required Commitment From Your Local Plant Team
            </p>
            <div className="h-1 w-16 bg-gold rounded"></div>
            
            <p className="text-steel text-base leading-relaxed">
              Consulting is not a magic wand. For an operational transformation to succeed and stick permanently, your company leadership and shopfloor teams must be actively engaged.
            </p>
            <p className="text-steel text-base leading-relaxed">
              During the engagement, we act as a force multiplier for your operations team, but we require a designated point of contact (typically the Plant Head or a senior Operations Manager) and open floor access for operator videography and time studies.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200/60 card-shadow space-y-6">
            <h3 className="font-serif font-bold text-navy text-xl">
              Commitment Guidelines:
            </h3>
            
            <div className="space-y-4">
              {[
                {
                  title: "Plant Head Leadership Alignment",
                  desc: "Weekly 30-minute review calls to align on phase milestones, approve layout changes, and support supervisor DMS compliance.",
                },
                {
                  title: "Frontline Supervisor Access",
                  desc: "Daily 15-minute shift huddles and coordination to execute changes without disrupting delivery runs.",
                },
                {
                  title: "Shopfloor Operator Participation",
                  desc: "Involvement in cross-functional time-and-motion workshops to design quick-clamps and validate SOP standards.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3.5">
                  <Icons.Check className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-navy text-base">{item.title}</h4>
                    <p className="text-steel text-xs leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button href="/contact" variant="primary" className="w-full py-3.5 text-sm">
                Request Shopfloor Walkthrough Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
