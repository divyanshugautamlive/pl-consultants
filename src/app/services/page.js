import Link from "next/link";
import servicesData from "@/data/services.json";
import * as Icons from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import QuickJumpNav from "@/components/common/QuickJumpNav";

export const metadata = {
  title: "Core Services | Pinnacle Logic Consulting",
  description: "How We Help Manufacturers Improve Performance through 11 expanded core manufacturing services.",
};

export default function ServicesPage() {
  const jumpItems = servicesData.map((s) => ({
    id: s.slug || s.id,
    name: s.title,
  }));

  return (
    <div className="bg-off-white min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="bg-[#F5F2EB] text-steel pt-28 pb-16 sm:pt-36 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest bg-navy/5 px-3 py-1 rounded-full text-gold font-semibold">
            Capabilities &amp; Services
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy leading-tight">
            How We Help Manufacturers Improve Performance
          </h1>
          <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
          <p className="text-steel-light text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            We deliver hands-on shopfloor engineering and structured operational changes to unlock hidden plant capacity, reduce lead times, and accelerate Operational Results.
          </p>
        </div>
      </section>

      {/* 2. SERVICES QUICK NAVIGATION */}
      <QuickJumpNav items={jumpItems} label="Jump to Service:" />

      {/* 3. 11 EXPANDED CORE SERVICES LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {servicesData.map((service, index) => {
          const IconComp = Icons[service.icon] || Icons.Settings;
          return (
            <div
              key={service.id}
              id={service.slug}
              className="bg-white rounded-2xl border border-gray-200/80 card-shadow overflow-hidden scroll-mt-36 transition-all hover:border-gold/50"
            >
              {/* Service Card Header */}
              <div className="bg-gradient-to-r from-navy via-navy-light to-navy p-6 sm:p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gold/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-gold shrink-0">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 mb-1">
                      <span className="text-xs font-bold text-gold uppercase tracking-wider bg-gold/10 px-2.5 py-0.5 rounded">
                        Service 0{index + 1}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-xs font-bold text-gold hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-lg border border-white/10 self-start md:self-center"
                >
                  Deep-Dive Service Page <Icons.ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>

              {/* Service Card Body */}
              <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column: Tagline, Problem, Approach */}
                <div className="lg:col-span-7 space-y-6">
                  {service.tagline && (
                    <p className="text-teal font-medium text-base italic border-l-4 border-teal pl-4 py-1">
                      {service.tagline}
                    </p>
                  )}

                  {/* Problem Block */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-1.5">
                      <Icons.AlertTriangle className="w-4 h-4 text-amber-500" />
                      Problem / Floor Challenge
                    </h3>
                    <p className="text-steel text-sm leading-relaxed bg-red-500/5 p-4 rounded-xl border border-red-500/10">
                      {service.problem}
                    </p>
                  </div>

                  {/* Approach Block */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-1.5">
                      <Icons.Sliders className="w-4 h-4 text-teal" />
                      Our Implementation Approach
                    </h3>
                    <ul className="space-y-2.5">
                      {service.approach.map((step, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-sm text-steel">
                          <span className="w-5 h-5 rounded-full bg-teal/10 text-teal font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="leading-snug">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Outcomes, Methodologies, CTA */}
                <div className="lg:col-span-5 bg-off-white/80 rounded-xl p-6 border border-gray-150 flex flex-col justify-between space-y-6">
                  {/* Typical Outcomes */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-1.5">
                      <Icons.TrendingUp className="w-4 h-4 text-emerald-600" />
                      Typical Operational Outcomes
                    </h3>
                    <ul className="space-y-2">
                      {service.typicalOutcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start space-x-2.5 text-sm font-semibold text-navy">
                          <Icons.CheckCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Methodologies Used */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-steel-light">
                      Methodologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.methodologies.map((method, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-bold bg-white border border-gray-200 text-navy px-3 py-1 rounded-md shadow-2xs"
                        >
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <Button
                      href="/contact"
                      variant="primary"
                      className="w-full py-3.5 text-sm font-bold shadow-md hover:shadow-lg justify-center"
                    >
                      {service.ctaText || "Request Manufacturing Assessment"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 4. BOTTOM CTA BANNER */}
      <section className="bg-navy text-white py-16 border-t border-gold/20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-serif font-bold text-white">
            Ready to Streamline Your Manufacturing Operations?
          </h2>
          <p className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto">
            Book a manufacturing assessment with our consultants to evaluate capacity constraints and line efficiency potential.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button href="/contact" variant="primary" className="py-3.5 px-8 text-sm">
              Request Manufacturing Assessment
            </Button>
            <a
              href="https://wa.me/918439692259?text=Hi,%20I'd%20like%20to%20request%20a%20manufacturing%20assessment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-8 rounded-lg text-sm shadow transition-colors cursor-pointer"
            >
              Message Our Consultants
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
