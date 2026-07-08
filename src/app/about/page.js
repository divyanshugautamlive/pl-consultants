import Image from "next/image";
import Button from "@/components/ui/Button";
import * as Icons from "@/components/ui/Icons";

export default function About() {
  const credentials = [
    { title: "Lean Six Sigma Black Belt", issuer: "ASQ Certified Standards" },
    { title: "TPM (Total Productive Maintenance)", issuer: "Japanese JIPM Frameworks" },
    { title: "B.Tech in Mechanical Engineering", issuer: "Manufacturing Systems Focus" },
    { title: "Industrial Engineering Expert", issuer: "Time-and-Motion & Layout Design" },
  ];

  const sectors = [
    "FMCG",
    "Automotive & Electronics",
    "FIBC & Bulk Bag / Packaging",
    "Integrated Steel",
    "Wire & Cable"
  ];

  return (
    <div className="bg-off-white">
      {/* 1. HERO / HEADER */}
      <section className="bg-navy text-white py-20 relative overflow-hidden">
        {/* Soft gold glow */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image frame */}
            <div className="lg:col-span-4 relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -inset-3 bg-gold/30 rounded-2xl rotate-3" />
              <div className="relative rounded-2xl overflow-hidden card-shadow border-4 border-white bg-navy aspect-square">
                <Image
                  src="/images/tarun_sharma_headshot.png"
                  alt="Tarun Sharma - Founder of Pinnacle Logic Consulting"
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Copy */}
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs uppercase tracking-widest bg-white/15 px-3 py-1 rounded-full text-gold font-semibold">
                About the Founder
              </span>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold leading-tight text-white">
                Meet Tarun Sharma
              </h1>
              <p className="text-teal font-medium text-lg italic">
                Operational Excellence & Lean Six Sigma Consultant
              </p>
              <div className="h-1 w-20 bg-gold rounded"></div>
              
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                With over <strong className="text-white font-semibold">7+ years</strong> of active, hands-on shopfloor manufacturing experience, I help Indian MSMEs uncover the operational profits that are quietly lost daily in their production processes.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Unlike corporate advisory consultants who hand over slide decks and leave, I believe in floor-level execution. I stand side-by-side with your shopfloor operators, adjusting machines, standardizing changeovers, and balancing lines to prove that operational excellence is a science, not a theory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTORS SERVED */}
      <section className="py-12 bg-white border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xs font-bold text-teal uppercase tracking-widest mb-6">Sectors We Serve</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map((sector, i) => (
              <span key={i} className="bg-navy/5 text-navy font-semibold px-4 py-2 rounded-full text-sm border border-navy/10">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY & VISION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h2 className="text-xs font-bold text-teal uppercase tracking-widest">Our Philosophy</h2>
              <p className="text-3xl font-serif font-bold text-navy">
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
                  <h3 className="font-serif font-bold text-navy text-lg flex items-center">
                    <span className="w-2 h-2 bg-gold rounded-full mr-2.5"></span>
                    {item.title}
                  </h3>
                  <p className="text-steel text-sm leading-relaxed pl-4">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. VERTICAL TIMELINE (EXPERIENCE BREAKDOWN PLACEHOLDERS) */}
      <section className="py-20 bg-off-white border-t border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-teal uppercase tracking-widest">Experience Breakdown</h2>
            <p className="text-3xl sm:text-4xl font-serif font-bold text-navy">
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
              {/* Timeline node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full border-2 border-gold bg-white group-hover:bg-gold transition-colors duration-200" />
              
              <div className="bg-white rounded-xl border-2 border-amber-400 p-6 card-shadow transition-all duration-300">
                <span className="inline-block text-xs font-bold text-teal tracking-widest uppercase mb-1.5 bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                  [START YEAR] – [END YEAR] ([4] years) &bull; TODO Placeholder Stint 1
                </span>
                <h3 className="text-xl font-serif font-bold text-navy mb-2">
                  [ROLE TITLE]
                </h3>
                <h4 className="text-sm font-semibold text-gray-500 mb-4">
                  [COMPANY NAME]
                </h4>
                <p className="text-steel text-sm leading-relaxed italic">
                  [One-line description of scope/responsibility]
                </p>
              </div>
            </div>

            {/* Stint 2 Placeholder */}
            <div className="relative group">
              {/* Timeline node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full border-2 border-gold bg-white group-hover:bg-gold transition-colors duration-200" />
              
              <div className="bg-white rounded-xl border-2 border-amber-400 p-6 card-shadow transition-all duration-300">
                <span className="inline-block text-xs font-bold text-teal tracking-widest uppercase mb-1.5 bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                  [START YEAR] – [END YEAR] ([3] years) &bull; TODO Placeholder Stint 2
                </span>
                <h3 className="text-xl font-serif font-bold text-navy mb-2">
                  [ROLE TITLE]
                </h3>
                <h4 className="text-sm font-semibold text-gray-500 mb-4">
                  [COMPANY NAME]
                </h4>
                <p className="text-steel text-sm leading-relaxed italic">
                  [One-line description of scope/responsibility]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CERTIFICATIONS & CREDENTIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-teal uppercase tracking-widest">Credentials</h2>
            <p className="text-3xl sm:text-4xl font-serif font-bold text-navy">
              Certified Technical Expertise
            </p>
            <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((cred, idx) => (
              <div key={idx} className="bg-off-white rounded-xl border border-gray-200/50 p-6 text-center card-shadow hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center text-teal mx-auto mb-4">
                  <Icons.Award className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-navy text-base mb-1">
                  {cred.title}
                </h3>
                <p className="text-xs text-gray-500">
                  {cred.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA PANEL */}
      <section className="py-16 bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold">
            Ready to unlock your factory&apos;s hidden profit?
          </h2>
          <p className="text-gray-300 text-base max-w-xl mx-auto leading-relaxed">
            Schedule a direct discovery call with Tarun Sharma. We&apos;ll outline your shopfloor assessment guidelines based on your equipment and manpower numbers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button href="/contact" variant="gold" className="px-8 py-4 font-bold shadow-md">
              Schedule Assessment Call
            </Button>
            <a
              href="https://wa.me/918439692259?text=Hi%20Tarun,%20I'd%20like%20to%20discuss%20a%20shopfloor%20assessment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-lg text-base shadow transition-colors cursor-pointer"
            >
              <Icons.Phone className="w-5 h-5 mr-2" /> Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
