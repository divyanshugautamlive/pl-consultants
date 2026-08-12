import ServicesCarousel from "@/components/sections/ServicesCarousel";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Capabilities & Services | Pinnacle Logic Consulting",
  description: "Explore our expanded manufacturing capabilities across Lean Manufacturing, Operational Excellence, Industrial Engineering, Factory Layout, OEE, and Cost Reduction.",
};

export default function ServicesPage() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen flex flex-col justify-between">
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-[#F5F2EB] via-[#F8F5F0] to-[#FAF9F6] text-steel pt-28 pb-10 sm:pt-36 sm:pb-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute top-20 -left-20 w-80 h-80 rounded-full bg-navy/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest bg-navy/5 px-4 py-1.5 rounded-full text-navy font-bold border border-navy/10 shadow-2xs inline-flex items-center gap-2">
            Capabilities &amp; Core Services
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy leading-tight">
            How We Help Manufacturers Improve Performance
          </h1>
          <div className="h-1 w-20 bg-gold mx-auto rounded-full"></div>
          <p className="text-steel-light text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            We deliver hands-on shopfloor engineering and structured operational changes to unlock hidden plant capacity, reduce lead times, and accelerate Operational Results.
          </p>
        </div>
      </section>

      {/* 2. SERVICES CAROUSEL COMPONENT */}
      <section className="max-w-6xl mx-auto px-4 sm:px-10 lg:px-14 py-6 w-full flex-1 flex flex-col justify-center">
        <ServicesCarousel />
      </section>

      {/* 3. BOTTOM CTA ASSESSMENT BANNER */}
      <section className="bg-[#051930] text-white py-16 border-t border-gold/20 mt-10">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Ready to Streamline Your Manufacturing Operations?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Book a manufacturing assessment with our consultants to evaluate capacity constraints and line efficiency potential.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button href="/contact" variant="primary" className="py-3.5 px-8 text-sm font-bold shadow-lg">
              Request Manufacturing Assessment
            </Button>
            <a
              href="https://wa.me/918439692259?text=Hi,%20I'd%20like%20to%20request%20a%20manufacturing%20assessment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-8 rounded-xl text-sm shadow-md transition-colors cursor-pointer"
            >
              Message Our Consultants
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
