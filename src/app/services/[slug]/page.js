import Link from "next/link";
import { notFound } from "next/navigation";
import servicesData from "@/data/services.json";
import caseStudiesData from "@/data/case-studies.json";
import * as Icons from "@/components/ui/Icons";
import Button from "@/components/ui/Button";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Find related case study if any
  const relatedCases = caseStudiesData.filter(
    (c) => c.relatedServiceSlug === service.slug
  );

  return (
    <div className="bg-off-white">
      {/* 1. HERO HEADER */}
      <section className="bg-navy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-teal/15 blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2 text-xs font-semibold text-gold uppercase tracking-wider mb-4">
            <Link href="/services" className="hover:underline">Services</Link>
            <span>&bull;</span>
            <span>Details</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight">
                {service.title}
              </h1>
              <p className="text-teal font-medium text-lg sm:text-xl italic max-w-3xl">
                {service.tagline}
              </p>
            </div>
            
            <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-xl p-6 space-y-2 text-sm w-full lg:max-w-sm ml-auto">
              <div>
                <p className="text-gray-400 text-xs mb-1">Expected Financial Impact:</p>
                <span className="font-bold text-white text-lg block leading-snug">{service.expectedImpactRange}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DETAIL BODY */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Problem & Approach */}
          <div className="lg:col-span-8 space-y-12">
            {/* Problem block */}
            <div className="bg-white rounded-2xl p-8 card-shadow border border-gray-100 space-y-6">
              <h2 className="text-2xl font-serif font-bold text-navy border-b border-gray-100 pb-4 flex items-center">
                The Operational Bottleneck
              </h2>
              <p className="text-steel text-base leading-relaxed">{service.problem}</p>
              <div className="p-5 bg-red-500/5 border-l-4 border-red-500/40 text-steel text-sm leading-relaxed rounded-r-lg">
                <p className="font-semibold text-navy mb-1.5">Common Floor Challenge:</p>
                {service.challenge}
              </div>
            </div>

            {/* Approach block */}
            <div className="bg-white rounded-2xl p-8 card-shadow border border-gray-100 space-y-6">
              <h2 className="text-2xl font-serif font-bold text-navy border-b border-gray-100 pb-4">
                Our Floor Implementation Approach
              </h2>
              <p className="text-steel text-sm mb-4">
                We follow a rigorous, hands-on methodology to execute changes on your lines. Here is exactly what we do:
              </p>
              <ol className="space-y-6">
                {service.approach.map((step, idx) => (
                  <li key={idx} className="flex items-start space-x-4">
                    <div className="w-7 h-7 rounded-full bg-teal/10 text-teal flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-steel text-base leading-relaxed font-medium">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right Column: Case Studies & Contact CTA */}
          <div className="lg:col-span-4 space-y-8">
            {/* Related Case Study block */}
            {relatedCases.length > 0 ? (
              relatedCases.map((study) => (
                <div key={study.id} className="bg-navy text-white rounded-2xl p-6 card-shadow border border-navy-light space-y-4">
                  <span className="text-xs uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-full font-semibold">
                    {study.sector} Case Study
                  </span>
                  <h3 className="font-serif font-bold text-white text-lg leading-snug">
                    {study.title}
                  </h3>
                  <div className="flex justify-between items-center py-2 border-y border-white/10">
                    <span className="text-xs text-gray-300">Financial Impact:</span>
                    <span className="text-xl font-bold text-gold">{study.impactVal}</span>
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed line-clamp-3">
                    {study.challenge}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="w-full inline-flex items-center justify-center bg-white hover:bg-gray-100 text-navy font-bold py-2.5 px-4 rounded-lg text-xs transition-colors cursor-pointer"
                    >
                      Read Success Case <Icons.ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-navy text-white rounded-2xl p-6 card-shadow border border-navy-light space-y-4">
                <h3 className="font-serif font-bold text-white text-lg leading-snug">
                  Proven Sector Outcomes
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  We have resolved capacity, setup, and labor constraints in wire, auto, steel, packaging, and FMCG sectors.
                </p>
                <Link
                  href="/case-studies"
                  className="w-full inline-flex items-center justify-center bg-white hover:bg-gray-100 text-navy font-bold py-2.5 px-4 rounded-lg text-xs transition-colors cursor-pointer"
                >
                  View Case Studies <Icons.ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            )}

            {/* Quick Action Contact block */}
            <div className="bg-white rounded-2xl p-6 card-shadow border border-gray-100 text-center space-y-4">
              <h3 className="font-serif font-bold text-navy text-xl">
                Ready to Discuss?
              </h3>
              <p className="text-steel text-sm leading-relaxed">
                Connect directly with Tarun Sharma to explore how this service can be applied to your factory lines.
              </p>
              <Button href="/contact" variant="primary" className="w-full py-3 text-sm">
                Request Walkthrough Call
              </Button>
              <a
                href={`https://wa.me/918439692259?text=Hi%20Tarun,%20I'd%20like%20to%20discuss%20your%20${encodeURIComponent(service.title)}%20offering.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-lg text-xs shadow transition-colors cursor-pointer"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
