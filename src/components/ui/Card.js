import Link from "next/link";
import Image from "next/image";
import * as Icons from "./Icons";

export function ServiceCard({ service }) {
  const IconComponent = Icons[service.icon] || Icons.Settings;

  return (
    <div className="bg-white rounded-xl border border-gray-200/80 border-t-4 border-t-gold p-6 transition-all duration-300 hover:border-gold hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between h-full group">
      <div>
        <div className="w-12 h-12 rounded-lg bg-navy/5 border border-navy/10 flex items-center justify-center text-navy mb-6 group-hover:bg-navy group-hover:text-gold transition-colors duration-300">
          <IconComponent className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-navy-light transition-colors">{service.title}</h3>
        {service.tagline && (
          <p className="text-teal font-medium text-xs mb-3 uppercase tracking-wide">{service.tagline}</p>
        )}
        <p className="text-steel text-sm leading-relaxed mb-6">{service.problem || service.description}</p>
      </div>
      
      <div className="border-t border-gray-100 pt-4 mt-2">
        <Link 
          href={`/services#${service.slug || service.id || ""}`} 
          className="inline-flex items-center text-navy font-bold text-sm hover:text-gold transition-all duration-300 group-hover:translate-x-1"
        >
          Explore Service Details <Icons.ArrowRight className="w-4 h-4 ml-1.5 text-gold" />
        </Link>
      </div>
    </div>
  );
}

export function CaseStudyCard({ study }) {
  const kpiBadge = study.primaryKpi || study.operationalKpi || "Operational Result";

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 card-shadow transition-all duration-300 hover:border-gold hover:shadow-xl hover:-translate-y-1.5 flex flex-col h-full group">
      {/* 8. Industry Banner Image with Sector Overlay & Operational KPI */}
      <div className="relative w-full h-48 bg-navy overflow-hidden">
        {study.image ? (
          <Image
            src={study.image}
            alt={`${study.sector} ${study.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-navy via-navy-light to-navy" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
        
        {/* Industry Tag Overlay */}
        <div className="absolute top-4 left-4">
          <span className="text-[11px] uppercase tracking-wider bg-gold text-navy font-extrabold px-3 py-1 rounded-md shadow-sm">
            {study.sector || "Manufacturing"}
          </span>
        </div>

        {/* Operational KPI Badge */}
        <div className="absolute bottom-3 right-4 bg-navy-dark/90 backdrop-blur-md border border-gold/40 px-3 py-1.5 rounded-lg text-right">
          <span className="text-xs sm:text-sm font-bold text-gold block leading-tight">{kpiBadge}</span>
        </div>
      </div>
      
      {/* Card Content Body */}
      <div className="p-6 flex flex-col justify-between flex-grow space-y-5">
        {/* 6. Title */}
        <h3 className="text-xl font-serif font-bold text-navy leading-snug group-hover:text-gold-dark transition-colors">
          {study.title}
        </h3>

        {/* 3. Challenge / Business Challenge */}
        <div className="space-y-1.5 bg-red-500/5 p-3.5 rounded-xl border border-red-500/10">
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 flex items-center gap-1">
            <Icons.AlertTriangle className="w-3.5 h-3.5" /> Challenge
          </span>
          <p className="text-steel text-xs leading-relaxed">
            {study.challenge}
          </p>
        </div>

        {/* 2 & 4. Approach Block */}
        {study.approach && Array.isArray(study.approach) && (
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-navy flex items-center gap-1">
              <Icons.Sliders className="w-3.5 h-3.5 text-teal" /> Approach
            </span>
            <ul className="space-y-1">
              {study.approach.slice(0, 3).map((step, i) => (
                <li key={i} className="text-xs text-steel flex items-start space-x-1.5">
                  <span className="text-teal font-bold">•</span>
                  <span className="leading-snug">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 4. Solution Block */}
        {study.solution && (
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-navy flex items-center gap-1">
              <Icons.Zap className="w-3.5 h-3.5 text-gold" /> Solution
            </span>
            <p className="text-steel text-xs leading-relaxed">
              {study.solution}
            </p>
          </div>
        )}

        {/* 9. Key Results Block */}
        {study.results && (
          <div className="bg-emerald-50 border border-emerald-200/60 p-3.5 rounded-xl space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1">
              <Icons.CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Results
            </span>
            <ul className="space-y-1">
              {(Array.isArray(study.results) ? study.results : Object.values(study.results)).map((res, i) => (
                <li key={i} className="text-xs font-semibold text-navy flex items-start space-x-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span className="leading-snug">{res}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 5. Tools & Methodologies Used */}
        {study.methodsUsed && (
          <div className="pt-1">
            <div className="flex flex-wrap gap-1.5">
              {study.methodsUsed.map((method, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-bold bg-navy/5 text-navy border border-navy/10 px-2 py-0.5 rounded-md"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Read Full Case Link */}
        <div className="flex justify-end items-center border-t border-gray-100 pt-4 mt-auto">
          <Link 
            href={`/case-studies/${study.slug || study.id}`} 
            className="text-navy font-bold hover:text-gold text-xs inline-flex items-center group-hover:translate-x-1 transition-all duration-300"
          >
            Read Full Case <Icons.ArrowRight className="w-4 h-4 ml-1.5 text-gold" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function StatCallout({ label, value, description, footer }) {
  return (
    <div className="bg-white border-l-4 border-l-gold border-y border-r border-gray-200/80 rounded-r-xl p-6 transition-all duration-300 hover:border-gold hover:shadow-xl hover:-translate-y-1 group">
      <p className="text-xs font-bold text-teal uppercase tracking-wider mb-1">{label}</p>
      <p className="text-4xl sm:text-5xl font-bold text-navy leading-none mb-2 group-hover:text-navy-light transition-colors">{value}</p>
      <p className="text-steel font-semibold text-sm mb-1">{description}</p>
      {footer && <p className="text-xs text-gray-500 mt-2 border-t border-gray-100 pt-2">{footer}</p>}
    </div>
  );
}
