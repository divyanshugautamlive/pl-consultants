"use client";

import { useEffect, useState, useRef } from "react";

const outcomes = [
  {
    kpi: "35%",
    numericVal: 35,
    label: "Productivity Improvement",
    description: "Average output & efficiency gain across assembly lines and manufacturing cells",
  },
  {
    kpi: "38%",
    numericVal: 38,
    label: "Changeover Reduction",
    description: "Setup time compressed using Single-Minute Exchange of Die (SMED) methods",
  },
  {
    kpi: "30%",
    numericVal: 30,
    label: "Lead Time Reduction",
    description: "Order-to-dispatch cycle time reduction through Value Stream Mapping",
  },
  {
    kpi: "18%",
    numericVal: 18,
    label: "OEE Improvement",
    description: "Overall Equipment Effectiveness gain on critical bottleneck machinery",
  },
  {
    kpi: "35%",
    numericVal: 35,
    label: "Manpower Optimisation",
    description: "Workforce efficiency and workload rebalancing without compromising output",
  },
];

export default function KeyBusinessOutcomes() {
  const [counts, setCounts] = useState(outcomes.map(() => 0));
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1500;
          const steps = 30;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            setCounts(
              outcomes.map((item) => Math.min(Math.round(item.numericVal * progress), item.numericVal))
            );

            if (currentStep >= steps) {
              clearInterval(timer);
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {outcomes.map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl p-6 border border-navy/10 card-shadow border-t-4 border-t-gold hover:border-gold hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div className="text-4xl sm:text-5xl font-serif font-bold text-navy mb-2 group-hover:text-gold transition-colors">
              {counts[idx]}%
            </div>
            <h3 className="font-serif font-bold text-navy text-lg mb-2 leading-tight">
              {item.label}
            </h3>
            <p className="text-steel text-xs leading-relaxed">
              {item.description}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-teal uppercase tracking-wider">
            <span>Verified Metric</span>
            <span className="w-2 h-2 rounded-full bg-gold inline-block"></span>
          </div>
        </div>
      ))}
    </div>
  );
}
