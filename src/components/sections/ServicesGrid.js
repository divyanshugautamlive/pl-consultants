"use client";

import { useState } from "react";
import { ServiceCard } from "@/components/ui/Card";
import servicesData from "@/data/services.json";
import * as Icons from "@/components/ui/Icons";

export default function ServicesGrid() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Show 3 by default, all when expanded
  const visibleServices = isExpanded ? servicesData : servicesData.slice(0, 3);

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className="text-center pt-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center justify-center bg-navy hover:bg-navy-light text-white font-bold px-8 py-4 rounded-lg text-sm shadow transition-colors cursor-pointer"
        >
          {isExpanded ? "Show Fewer Services" : "View All Services"}
          <Icons.ArrowRight 
            className={`w-4 h-4 ml-2 transition-transform duration-300 ${
              isExpanded ? "-rotate-90" : ""
            }`} 
          />
        </button>
      </div>
    </div>
  );
}
