"use client";

import { useState } from "react";
import Link from "next/link";
import { CaseStudyCard } from "@/components/ui/Card";
import caseStudiesData from "@/data/case-studies.json";
import * as Icons from "@/components/ui/Icons";

export default function CaseStudiesHub() {
  const [selectedSector, setSelectedSector] = useState("All");

  const sectors = [
    "All",
    "Automotive",
    "Steel",
    "Packaging",
    "Foundry",
    "Engineering",
    "Heavy Manufacturing"
  ];

  const filteredStudies = selectedSector === "All"
    ? caseStudiesData
    : caseStudiesData.filter((study) => study.sector === selectedSector);

  const kpiHighlights = [
    { label: "Productivity Uplift", val: "35% Improvement", icon: "TrendingUp" },
    { label: "Setup Reduction", val: "38% Faster Changeovers", icon: "Clock" },
    { label: "Lead Time", val: "30% Reduction", icon: "Zap" },
    { label: "Equipment OEE", val: "18% OEE Improvement", icon: "Settings" },
    { label: "Labor Efficiency", val: "35% Manpower Optimisation", icon: "Users" }
  ];

  return (
    <div className="bg-off-white min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="bg-[#F5F2EB] text-steel pt-28 pb-16 sm:pt-36 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest bg-navy/5 px-3 py-1 rounded-full text-gold font-semibold">
            Validated Floor Outcomes
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-navy leading-tight">
            Manufacturing Case Studies
          </h1>
          <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
          <p className="text-steel-light text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Explore real shopfloor engagements across automotive, steel, foundry, packaging, precision engineering, and heavy manufacturing sectors. See how we solve bottlenecks and drive operational performance.
          </p>
        </div>
      </section>

      {/* 2. OPERATIONAL KPI SUMMARY BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 card-shadow grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          {kpiHighlights.map((kpi, idx) => {
            const IconComp = Icons[kpi.icon] || Icons.CheckCircle;
            return (
              <div key={idx} className="p-3 border-r last:border-r-0 border-gray-100 flex flex-col items-center">
                <IconComp className="w-5 h-5 text-teal mb-2" />
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block mb-1">{kpi.label}</span>
                <span className="text-sm sm:text-base font-bold text-navy">{kpi.val}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. FILTER CONTROLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm font-semibold text-steel mr-2">Target Industry:</span>
          {sectors.map((sector) => (
            <button
              key={sector}
              onClick={() => setSelectedSector(sector)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all-custom cursor-pointer ${
                selectedSector === sector
                  ? "bg-teal text-white border-teal shadow"
                  : "bg-white text-steel border-gray-200 hover:bg-gray-50 hover:border-gray-300"
              }`}
            >
              {sector === "All" ? "All Industries" : sector}
            </button>
          ))}
        </div>
      </section>

      {/* 4. CASE STUDY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredStudies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        ) : (
          <div className="text-center bg-white rounded-2xl border border-gray-150 p-16 card-shadow max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center text-teal mx-auto mb-4">
              <Icons.Settings className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-navy text-lg mb-2">No Case Studies Found</h3>
            <p className="text-steel text-sm">We are regularly documenting new shopfloor engagements. Contact our consultants to request examples in your specific sub-sector.</p>
          </div>
        )}
      </section>

      {/* 5. METHODOLOGY LINK PANEL */}
      <section className="bg-white border-t border-gray-150 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy">
            How Do We Deliver These Operational Results?
          </h2>
          <p className="text-steel text-base leading-relaxed max-w-xl mx-auto">
            We follow our 5-phase transformation framework (Diagnose, Analyse, Design, Execute, Sustain) to ensure that improvements are locked in permanently.
          </p>
          <div className="pt-2">
            <Link
              href="/how-we-work"
              className="inline-flex items-center justify-center bg-navy hover:bg-navy-light text-white font-bold px-8 py-4 rounded-lg text-sm shadow transition-colors cursor-pointer"
            >
              See Our Transformation Framework <Icons.ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
