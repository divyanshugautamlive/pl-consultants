"use client";

import { useState } from "react";
import Link from "next/link";
import { CaseStudyCard } from "@/components/ui/Card";
import caseStudiesData from "@/data/case-studies.json";
import * as Icons from "@/components/ui/Icons";

export default function CaseStudiesHub() {
  const [selectedSector, setSelectedSector] = useState("All");

  const sectors = ["All", "FMCG Packaging", "Auto Components", "Specialty Steel", "Wire & Cable", "FIBC & Packaging"];

  const filteredStudies = selectedSector === "All"
    ? caseStudiesData
    : caseStudiesData.filter((study) => study.sector === selectedSector);

  return (
    <div className="bg-off-white min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="bg-navy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-teal/15 blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest bg-white/15 px-3 py-1 rounded-full text-gold font-semibold">
            Proven Proof
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold leading-tight">
            Shopfloor Case Studies
          </h1>
          <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Explore 5 real, anonymized engagements across diverse industrial sectors. See how we trace inefficiencies and implement sustainable, high-impact profit improvements.
          </p>
        </div>
      </section>

      {/* 2. FILTER CONTROLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm font-semibold text-steel mr-2">Filter by Sector:</span>
          {sectors.map((sector) => (
            <button
              key={sector}
              onClick={() => setSelectedSector(sector)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all-custom cursor-pointer ${
                selectedSector === sector
                  ? "bg-teal text-white border-teal shadow"
                  : "bg-white text-steel border-gray-200 hover:bg-gray-50 hover:border-gray-300"
              }`}
            >
              {sector === "All" ? "All Sectors" : sector}
            </button>
          ))}
        </div>
      </section>

      {/* 3. CASE STUDY GRID */}
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
            <p className="text-steel text-sm">We are regularly documenting new shopfloor engagements. Contact Tarun to request examples in your specific sub-sector.</p>
          </div>
        )}
      </section>

      {/* 4. METHODOLOGY LINK PANEL */}
      <section className="bg-white border-t border-gray-150 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy">
            How do we deliver these results?
          </h2>
          <p className="text-steel text-base leading-relaxed max-w-xl mx-auto">
            We follow a structured 5-phase execution model (Diagnose, Analyze, Design, Execute, Sustain) to ensure that improvements are sustainable.
          </p>
          <div className="pt-2">
            <Link
              href="/how-we-work"
              className="inline-flex items-center justify-center bg-navy hover:bg-navy-light text-white font-bold px-8 py-4 rounded-lg text-sm shadow transition-colors cursor-pointer"
            >
              See Our Methodology (DADES) <Icons.ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
