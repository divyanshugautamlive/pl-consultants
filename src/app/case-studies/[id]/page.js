import Link from "next/link";
import { notFound } from "next/navigation";
import caseStudiesData from "@/data/case-studies.json";
import servicesData from "@/data/services.json";
import * as Icons from "@/components/ui/Icons";
import Button from "@/components/ui/Button";

export async function generateStaticParams() {
  return caseStudiesData.map((study) => ({
    id: study.id,
  }));
}

export default async function CaseStudyDetail({ params }) {
  const { id } = await params;
  const study = caseStudiesData.find((s) => s.id === id);

  if (!study) {
    notFound();
  }

  // Find related service if any
  const relatedService = servicesData.find(
    (s) => s.slug === study.relatedServiceSlug
  );

  return (
    <div className="bg-off-white">
      {/* 1. HERO HEADER */}
      <section className="bg-navy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-teal/15 blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2 text-xs font-semibold text-gold uppercase tracking-wider mb-4">
            <Link href="/case-studies" className="hover:underline">Case Studies</Link>
            <span>&bull;</span>
            <span>Details</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full text-gold font-semibold inline-block">
                {study.sector}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight">
                {study.title}
              </h1>
            </div>
            
            <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-xl p-6 text-center w-full lg:max-w-sm ml-auto shrink-0">
              <span className="text-xs text-gray-300 uppercase font-semibold tracking-wider">EBITDA Value Created</span>
              <p className="text-5xl font-bold text-gold my-2 leading-none">{study.impactVal}</p>
              <span className="text-xs text-gray-400">Validated savings / unlocked capacity</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BODY CONTENT */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Challenge, What We Did, Key Findings */}
          <div className="lg:col-span-8 space-y-12">
            {/* The Challenge */}
            <div className="bg-white rounded-2xl p-8 card-shadow border border-gray-100 space-y-4">
              <h2 className="text-2xl font-serif font-bold text-navy border-b border-gray-100 pb-4">
                The Operational Challenge
              </h2>
              <p className="text-steel text-base leading-relaxed">{study.challenge}</p>
            </div>

            {/* What We Did */}
            <div className="bg-white rounded-2xl p-8 card-shadow border border-gray-100 space-y-4">
              <h2 className="text-2xl font-serif font-bold text-navy border-b border-gray-100 pb-4">
                Step-by-Step Implementation Actions
              </h2>
              <ul className="space-y-4">
                {study.whatWeDid.map((step, idx) => (
                  <li key={idx} className="flex items-start space-x-3.5 text-base text-steel leading-relaxed">
                    <div className="w-6 h-6 rounded-full bg-teal/10 text-teal flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Findings */}
            {study.keyFindings && (
              <div className="bg-white rounded-2xl p-8 card-shadow border border-gray-100 space-y-4">
                <h2 className="text-2xl font-serif font-bold text-navy border-b border-gray-100 pb-4 flex items-center">
                  Data-Driven Findings
                </h2>
                <p className="text-steel text-base leading-relaxed">{study.keyFindings}</p>
              </div>
            )}
          </div>

          {/* Right Column: Results & Related Service */}
          <div className="lg:col-span-4 space-y-8">
            {/* Results Callout Box */}
            <div className="bg-white rounded-2xl p-8 card-shadow border border-gray-100 space-y-6">
              <h3 className="font-serif font-bold text-navy text-xl border-b border-gray-100 pb-4">
                Project Results
              </h3>
              
              <div className="space-y-5">
                {Object.entries(study.results).map(([key, val]) => {
                  if (key === "financialImpact") return null;
                  
                  // Make label readable
                  let label = key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase());

                  return (
                    <div key={key}>
                      <span className="text-xs text-gray-500 font-bold uppercase block tracking-wider mb-1">
                        {label}
                      </span>
                      <span className="text-navy font-semibold text-base leading-snug block">
                        {val}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {relatedService && (
              <div className="bg-navy text-white rounded-2xl p-6 card-shadow border border-navy-light space-y-3">
                <h3 className="font-serif font-bold text-white text-lg border-b border-white/10 pb-3">
                  Applied Consulting Service
                </h3>
                <div className="pt-1">
                  <Link
                    href={`/services/${relatedService.slug}`}
                    className="text-white hover:text-gold font-bold text-sm block leading-snug flex items-center"
                  >
                    {relatedService.title} <Icons.ArrowRight className="w-4 h-4 ml-1.5 shrink-0" />
                  </Link>
                </div>
              </div>
            )}

            {/* Quick Consultation CTA */}
            <div className="bg-white rounded-2xl p-6 card-shadow border border-gray-100 text-center space-y-4">
              <h3 className="font-serif font-bold text-navy text-lg">
                Run a similar project?
              </h3>
              <p className="text-steel text-sm leading-relaxed">
                Connect directly with Tarun Sharma to outline potential savings on your line setups or manpower layouts.
              </p>
              <Button href="/contact" variant="primary" className="w-full py-3 text-sm">
                Request Assessment Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
