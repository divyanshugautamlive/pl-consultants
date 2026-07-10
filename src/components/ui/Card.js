import Link from "next/link";
import * as Icons from "./Icons";

export function ServiceCard({ service }) {
  const IconComponent = Icons[service.icon] || Icons.Settings;

  return (
    <div className="bg-white rounded-xl card-shadow border-t-4 border-gold border-x border-b border-gray-150 p-6 transition-all duration-300 hover:border-gold hover:shadow-[0_0_25px_rgba(193,135,36,0.18)] hover:-translate-y-1.5 flex flex-col justify-between h-full">
      <div>
        <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center text-teal mb-6">
          <IconComponent className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold text-navy mb-3">{service.title}</h3>
        <p className="text-teal font-medium text-sm mb-4 italic">{service.tagline}</p>
        <p className="text-steel text-base leading-relaxed mb-6">{service.problem}</p>
      </div>
      
      <div className="border-t border-gray-100 pt-4 mt-2">
        <Link 
          href={`/services/${service.slug}`} 
          className="inline-flex items-center text-teal font-semibold hover:text-teal-dark hover:underline transition-colors"
        >
          Explore Service Details <Icons.ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
}

export function CaseStudyCard({ study }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden card-shadow transition-all duration-300 hover:border-gold hover:shadow-[0_0_25px_rgba(193,135,36,0.18)] hover:-translate-y-1.5 flex flex-col h-full border border-gray-150">
      <div className="bg-gradient-to-r from-navy via-navy-light to-teal p-6 text-white flex justify-between items-start">
        <div>
          <span className="text-xs uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-full font-semibold">
            {study.sector}
          </span>
          <h4 className="text-lg font-bold mt-3 leading-snug line-clamp-1">{study.title}</h4>
        </div>
        <div className="text-right shrink-0">
          <p className="text-3xl font-bold text-gold">{study.impactVal}</p>
          <p className="text-xs text-gray-200 mt-0.5">Value Created</p>
        </div>
      </div>
      
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <p className="text-navy font-semibold text-base mb-3 line-clamp-1">
            {study.results.setupTimeReduction || study.results.manpowerOptimized || study.results.throughputIncrease || study.results.leadTimeReduction || "Significant Efficiency Gained"}
          </p>
          <p className="text-steel text-sm leading-relaxed mb-6 line-clamp-3">
            {study.challenge}
          </p>
        </div>
        
        <div className="flex justify-end items-center border-t border-gray-100 pt-4 mt-auto">
          <Link 
            href={`/case-studies/${study.id}`} 
            className="text-teal font-semibold hover:text-teal-dark text-sm inline-flex items-center"
          >
            Read Full Case <Icons.ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function StatCallout({ label, value, description, footer }) {
  return (
    <div className="bg-white border-l-4 border-gold border-r border-y border-gray-150 rounded-r-xl card-shadow p-6 transition-all duration-300 hover:border-gold hover:shadow-[0_0_25px_rgba(193,135,36,0.18)] hover:-translate-y-1">
      <p className="text-xs font-bold text-teal uppercase tracking-wider mb-1">{label}</p>
      <p className="text-4xl sm:text-5xl font-bold text-navy leading-none mb-2">{value}</p>
      <p className="text-steel font-semibold text-sm mb-1">{description}</p>
      {footer && <p className="text-xs text-gray-500 mt-2 border-t border-gray-100 pt-2">{footer}</p>}
    </div>
  );
}
