"use client";

import PosterCard from "@/components/ui/PosterCard";
import servicesData from "@/data/services.json";

export default function ServicesGrid() {
  return (
    <div className="space-y-10">
      {/* Grid of Poster Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((service) => (
          <PosterCard
            key={service.id}
            title={service.title}
            description={service.tagline || service.problem}
            image={service.image}
            iconName={service.icon}
          />
        ))}
      </div>
    </div>
  );
}
