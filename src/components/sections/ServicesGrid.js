"use client";

import { useState } from "react";
import PosterCard from "@/components/ui/PosterCard";
import servicesData from "@/data/services.json";
import * as Icons from "@/components/ui/Icons";

export default function ServicesGrid() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    { id: "ALL", label: "ALL CAPABILITIES" },
    { id: "OPERATIONAL EXCELLENCE", label: "OPERATIONAL EXCELLENCE" },
    { id: "INDUSTRIAL ENGINEERING", label: "INDUSTRIAL ENGINEERING" },
    { id: "DIGITIZATION", label: "DIGITIZATION & AUTOMATION" },
    { id: "PLANT DESIGN", label: "PLANT & LAYOUT DESIGN" },
  ];

  // Category filtering mapping
  const filteredServices = servicesData.filter((service) => {
    if (selectedCategory === "ALL") return true;
    if (selectedCategory === "OPERATIONAL EXCELLENCE") {
      return ["operational-excellence", "lean-manufacturing", "capacity-improvement", "cost-reduction"].includes(service.slug || service.id);
    }
    if (selectedCategory === "INDUSTRIAL ENGINEERING") {
      return ["industrial-engineering", "line-balancing", "oee-improvement"].includes(service.slug || service.id);
    }
    if (selectedCategory === "DIGITIZATION") {
      return ["digitalization-and-automation", "low-cost-automation"].includes(service.slug || service.id);
    }
    if (selectedCategory === "PLANT DESIGN") {
      return ["factory-layout-optimisation", "material-flow", "production-planning"].includes(service.slug || service.id);
    }
    return true;
  });

  // Show 4 poster cards by default or when filtered
  const visibleServices = isExpanded || selectedCategory !== "ALL" 
    ? filteredServices 
    : filteredServices.slice(0, 4);

  return (
    <div className="space-y-10">
      {/* Category Pills Header (Matching User Reference Image) */}
      <div className="flex items-center justify-center gap-2.5 overflow-x-auto no-scrollbar py-2 px-1">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`text-[11px] font-bold tracking-widest px-4 py-2 rounded-full uppercase transition-all duration-300 whitespace-nowrap cursor-pointer ${
                isActive
                  ? "bg-gold text-navy shadow-md ring-2 ring-gold/40 scale-105"
                  : "bg-white/80 text-steel hover:bg-navy/5 border border-gray-200"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid of Poster Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleServices.map((service) => (
          <PosterCard
            key={service.id}
            title={service.title}
            description={service.tagline || service.problem}
            image={service.image}
            iconName={service.icon}
            categoryTag={service.methodologies?.[0] || "Consulting"}
            href={`/services/${service.slug || service.id}`}
            ctaText="LEARN MORE"
          />
        ))}
      </div>

      {/* Show More Button */}
      {selectedCategory === "ALL" && (
        <div className="text-center pt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center justify-center bg-navy hover:bg-navy-light text-white font-bold px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all duration-300 cursor-pointer"
          >
            {isExpanded ? "Show Top Capabilities" : "View All 12 Capabilities"}
            <Icons.ArrowRight 
              className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                isExpanded ? "-rotate-90" : ""
              }`} 
            />
          </button>
        </div>
      )}
    </div>
  );
}
