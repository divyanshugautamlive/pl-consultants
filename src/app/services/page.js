import Link from "next/link";
import { ServiceCard } from "@/components/ui/Card";
import servicesData from "@/data/services.json";
import * as Icons from "@/components/ui/Icons";

export default function ServicesHub() {
  return (
    <div className="bg-off-white">
      {/* 1. HERO HEADER */}
      <section className="bg-navy text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-teal/15 blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest bg-white/15 px-3 py-1 rounded-full text-gold font-semibold">
            Our Offerings
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold leading-tight">
            Manufacturing Value Creation
          </h1>
          <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            We don't offer generic templates or slide decks. We execute proven, data-driven frameworks directly on your shopfloor to recover capacity, streamline manpower, and compress lead times.
          </p>
        </div>
      </section>

      {/* 2. GRID OF SERVICES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* 3. CORE COMMITMENT PANEL */}
      <section className="bg-white border-t border-gray-150 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-xs font-bold text-teal uppercase tracking-widest">Our Promise</h2>
              <p className="text-3xl font-serif font-bold text-navy leading-tight">
                Our Fee Structure is Tied Directly to Your Savings
              </p>
              <div className="h-1 w-16 bg-gold rounded"></div>
              
              <p className="text-steel text-base leading-relaxed">
                We believe in mutual skin in the game. For qualified facilities, our consulting engagement fees can be structured against verified bottom-line savings (rupee-denominated EBITDA value). If we don't recover profit, you don't pay.
              </p>
              <p className="text-steel text-sm leading-relaxed italic">
                * Available for manufacturing plants with annual revenues between ₹15 Cr and ₹100 Cr, subject to a completed 2-hour shopfloor diagnostic assessment.
              </p>
            </div>

            <div className="bg-off-white rounded-2xl p-8 border border-gray-200/60 card-shadow space-y-6">
              <h3 className="font-serif font-bold text-navy text-xl">
                Diagnostic Assessment Steps:
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Initial Discovery Call",
                    desc: "20-minute call to check production lines, equipment list, and current bottlenecks.",
                  },
                  {
                    step: "02",
                    title: "2-Hour Shopfloor Walk",
                    desc: "Tarun Sharma visits your facility to observe changeovers, material flow, and idle times.",
                  },
                  {
                    step: "03",
                    title: "Impact Proposal Delivery",
                    desc: "We present a written report detailing the identified loss areas and estimated Rupee savings.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-navy text-base">{item.title}</h4>
                      <p className="text-steel text-xs leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-navy font-bold py-3.5 px-6 rounded-lg text-sm shadow transition-colors cursor-pointer"
                >
                  Schedule Your Shopfloor Walk <Icons.ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
