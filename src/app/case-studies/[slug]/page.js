import Link from "next/link";
import { notFound } from "next/navigation";
import caseStudiesData from "@/data/case-studies.json";
import servicesData from "@/data/services.json";
import * as Icons from "@/components/ui/Icons";
import Button from "@/components/ui/Button";

export async function generateStaticParams() {
  return caseStudiesData.map((study) => ({
    slug: study.slug || study.id,
  }));
}

export default async function CaseStudyDetail({ params }) {
  const { slug } = await params;
  const study = caseStudiesData.find(
    (s) => s.slug === slug || s.id === slug
  );

  if (!study) {
    notFound();
  }

  // Find related service if any
  const relatedService = servicesData.find(
    (s) => s.slug === study.relatedServiceSlug
  );

  // Find next case study for navigation
  const currentIndex = caseStudiesData.findIndex((s) => (s.slug || s.id) === (study.slug || study.id));
  const nextStudy = caseStudiesData[(currentIndex + 1) % caseStudiesData.length];

  return (
    <div className="bg-off-white min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="bg-[#F5F2EB] text-steel pt-28 pb-16 sm:pt-36 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2 text-xs font-semibold text-gold uppercase tracking-wider mb-4">
            <Link href="/case-studies" className="hover:underline">Case Studies</Link>
            <span>&bull;</span>
            <span className="text-steel-light">{study.sector}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest bg-gold text-navy font-bold px-3 py-1 rounded-md inline-block">
                {study.sector} Industry
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy leading-tight">
                {study.title}
              </h1>
            </div>
            
            <div className="lg:col-span-5 relative">
              {study.image && (
                <div className="relative rounded-2xl overflow-hidden card-shadow border-4 border-white aspect-video">
                  <img
                    src={study.image}
                    alt={`${study.sector} ${study.title}`}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-3 right-3 bg-navy-dark/90 backdrop-blur-md border border-gold/40 px-3.5 py-1.5 rounded-lg text-right">
                    <span className="text-xs text-teal uppercase font-bold tracking-wider block">Primary Outcome</span>
                    <span className="text-sm font-bold text-gold">{study.primaryKpi}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT BODY */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Challenge -> Our Approach -> Key Initiatives -> Before vs After -> Quote */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* 2. BUSINESS CHALLENGE & CLIENT SITUATION */}
            <div className="bg-white rounded-2xl p-8 card-shadow border border-gray-150 space-y-6">
              <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-600 flex items-center justify-center font-bold">
                  <Icons.AlertTriangle className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-navy">
                  Business Challenge
                </h2>
              </div>
              
              <p className="text-steel text-base leading-relaxed font-medium">
                {study.challenge}
              </p>

              {study.clientSituation && Array.isArray(study.clientSituation) && (
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <h3 className="text-xs uppercase font-bold tracking-wider text-teal">
                    Client Situation &amp; Operational Bottlenecks:
                  </h3>
                  <ul className="space-y-2.5">
                    {study.clientSituation.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-sm text-steel leading-relaxed">
                        <span className="text-red-500 font-bold shrink-0 mt-0.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* 3. OUR APPROACH */}
            {study.approach && Array.isArray(study.approach) && (
              <div className="bg-white rounded-2xl p-8 card-shadow border border-gray-150 space-y-6">
                <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 text-navy flex items-center justify-center font-bold">
                    <Icons.Search className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-navy">
                    Our Approach
                  </h2>
                </div>

                <ul className="space-y-3">
                  {study.approach.map((step, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-steel leading-relaxed font-medium">
                      <Icons.Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 4. KEY IMPROVEMENT INITIATIVES */}
            {study.implementation && Array.isArray(study.implementation) && (
              <div className="bg-white rounded-2xl p-8 card-shadow border border-gray-150 space-y-6">
                <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 text-gold-dark flex items-center justify-center font-bold">
                    <Icons.Zap className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-navy">
                    Key Improvement Initiatives
                  </h2>
                </div>

                <ul className="space-y-4">
                  {study.implementation.map((initiative, idx) => (
                    <li key={idx} className="flex items-start space-x-3.5 text-sm text-steel leading-relaxed">
                      <div className="w-6 h-6 rounded-full bg-navy text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span className="font-semibold text-navy">{initiative}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 10. BEFORE VS AFTER METRICS TABLE */}
            {study.beforeAfter && Array.isArray(study.beforeAfter) && (
              <div className="bg-white rounded-2xl p-8 card-shadow border border-gray-150 space-y-6">
                <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                    <Icons.TrendingUp className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-navy">
                    Before vs. After Operational Metrics
                  </h2>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-navy text-white text-xs uppercase tracking-wider">
                        <th className="py-3 px-4 rounded-tl-lg">Metric</th>
                        <th className="py-3 px-4">Before Transformation</th>
                        <th className="py-3 px-4">After Transformation</th>
                        <th className="py-3 px-4 rounded-tr-lg">Quantified Impact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-150">
                      {study.beforeAfter.map((item, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="py-3.5 px-4 font-bold text-navy">{item.metric}</td>
                          <td className="py-3.5 px-4 text-steel-light font-medium">{item.before}</td>
                          <td className="py-3.5 px-4 text-navy font-bold">{item.after}</td>
                          <td className="py-3.5 px-4 font-bold text-emerald-600 bg-emerald-50/50">{item.improvement}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 11. CLIENT TESTIMONIAL QUOTE */}
            {study.clientQuote && (
              <div className="bg-navy/5 border-l-4 border-gold rounded-r-2xl p-8 card-shadow space-y-4">
                <div className="text-gold font-serif text-4xl leading-none">&ldquo;</div>
                <p className="text-navy font-serif text-lg sm:text-xl italic leading-relaxed font-semibold">
                  {study.clientQuote.text}
                </p>
                <p className="text-steel-light text-xs uppercase font-bold tracking-wider pt-2 border-t border-navy/10">
                  &mdash; {study.clientQuote.author}
                </p>
              </div>
            )}
          </div>

          {/* Right Sidebar: Key Results -> Services Delivered -> Methodologies -> CTA */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* 5. KEY RESULTS PANEL */}
            <div className="bg-navy text-white rounded-2xl p-6 card-shadow border border-navy-light space-y-6">
              <h3 className="font-serif font-bold text-gold text-xl border-b border-white/10 pb-4 flex items-center gap-2">
                <Icons.Award className="w-5 h-5 text-gold" />
                KEY RESULTS
              </h3>
              
              <div className="space-y-4">
                {study.keyOutcomes && Array.isArray(study.keyOutcomes) ? (
                  study.keyOutcomes.map((kpi, i) => (
                    <div key={i} className="bg-navy-dark/60 rounded-xl p-4 border border-white/10 text-center">
                      <span className="text-3xl sm:text-4xl font-serif font-bold text-gold block leading-none mb-1">
                        {kpi.value}
                      </span>
                      <span className="text-xs text-gray-300 font-medium uppercase tracking-wider block">
                        {kpi.label}
                      </span>
                    </div>
                  ))
                ) : (
                  study.results && study.results.map((res, i) => (
                    <div key={i} className="flex items-start space-x-2 text-sm text-gray-200">
                      <Icons.CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* 6. SERVICES DELIVERED */}
            {study.servicesDelivered && Array.isArray(study.servicesDelivered) && (
              <div className="bg-white rounded-2xl p-6 card-shadow border border-gray-150 space-y-4">
                <h3 className="font-serif font-bold text-navy text-lg border-b border-gray-100 pb-3">
                  Services Delivered
                </h3>
                <ul className="space-y-2.5">
                  {study.servicesDelivered.map((srv, idx) => (
                    <li key={idx} className="flex items-center space-x-2.5 text-xs font-semibold text-navy">
                      <Icons.Check className="w-4 h-4 text-gold shrink-0" />
                      <span>{srv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 9. METHODOLOGIES USED */}
            {study.methodsUsed && (
              <div className="bg-white rounded-2xl p-6 card-shadow border border-gray-150 space-y-4">
                <h3 className="font-serif font-bold text-navy text-lg border-b border-gray-100 pb-3">
                  Methodologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {study.methodsUsed.map((method, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-bold bg-navy/5 text-navy border border-navy/10 px-3 py-1 rounded-full"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* RELATED SERVICES CARD */}
            {relatedService && (
              <div className="bg-off-white rounded-2xl p-6 card-shadow border border-gray-200 space-y-4">
                <span className="text-[10px] font-bold text-gold uppercase tracking-widest block">
                  Service Capability
                </span>
                <h3 className="font-serif font-bold text-navy text-lg leading-snug">
                  {relatedService.title}
                </h3>
                <p className="text-steel-light text-xs leading-relaxed line-clamp-3">
                  {relatedService.tagline}
                </p>
                <div className="pt-2">
                  <Link
                    href={`/services/${relatedService.slug}`}
                    className="w-full inline-flex items-center justify-center bg-navy hover:bg-navy-light text-white font-bold py-2.5 px-4 rounded-lg text-xs transition-colors cursor-pointer"
                  >
                    View Related Service <Icons.ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* 7 & 8 & 12. STRONG CONSULTING CTA */}
            <div className="bg-white rounded-2xl p-6 card-shadow border border-gold/40 text-center space-y-4">
              <h3 className="font-serif font-bold text-navy text-xl">
                Ready to Achieve Similar Improvements?
              </h3>
              <p className="text-steel text-xs leading-relaxed">
                Speak with our manufacturing consultants to discuss similar operational improvement opportunities for your plant.
              </p>
              <Button href="/contact" variant="primary" className="w-full py-3.5 text-xs font-bold shadow-md">
                Request a Manufacturing Assessment
              </Button>
            </div>

            {/* NEXT CASE STUDY LINK */}
            {nextStudy && (
              <div className="pt-2 text-center">
                <Link
                  href={`/case-studies/${nextStudy.slug || nextStudy.id}`}
                  className="inline-flex items-center text-xs font-bold text-gold hover:text-gold-dark transition-colors"
                >
                  Next Case Study: {nextStudy.title} <Icons.ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
