"use client";

import { useState } from "react";
import * as Icons from "@/components/ui/Icons";

export default function ChallengesSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const challengesSolved = [
    {
      challenge: "Low OEE & Frequent Breakdowns",
      impact: "Unplanned downtime, minor stops, and speed losses trap machine effectiveness between 40-60%.",
      solution: "TPM Autonomous Maintenance, SMED setup reduction, and 6 Big Losses analysis to unlock equipment productivity.",
    },
    {
      challenge: "Excess Manpower & Line Imbalance",
      impact: "Uneven task distribution leads to operator idle time, line starvation, and inflated labor cost per unit.",
      solution: "MOST time studies, Yamazumi line balancing, and standardized work instructions to optimize headcount.",
    },
    {
      challenge: "Long Lead Times & WIP Congestion",
      impact: "Orders get stuck in shopfloor bottlenecks, tying up working capital and causing late customer deliveries.",
      solution: "Value Stream Mapping (VSM), Kanban pull systems, and continuous flow layout re-engineering.",
    },
    {
      challenge: "Poor Material Flow & High Travel",
      impact: "Chaotic shopfloor layout causes crisscrossing material movement, forklift delays, and space constraints.",
      solution: "Spaghetti diagram analysis, cellular layout design, and Mizusumashi (water-spider) line feeding routes.",
    },
    {
      challenge: "Capacity Bottlenecks on Key Machinery",
      impact: "Demand exceeds plant capacity while constraint stations operate below potential due to uncoordinated scheduling.",
      solution: "Theory of Constraints (TOC) optimization, Drum-Buffer-Rope scheduling, and constraint buffer management.",
    },
    {
      challenge: "High Scrap Rates & Rising Costs",
      impact: "Material waste, rework loops, and inefficient utility usage erode manufacturing profit margins.",
      solution: "Structured Six Sigma problem-solving, yield Kaizen programs, and conversion cost reduction initiatives.",
    },
    {
      challenge: "Plant Layout & Sub-Assembly Inefficiency",
      impact: "Historical ad-hoc machinery placement leads to crisscrossing material flow, long travel routes, and congested aisles.",
      solution: "Systematic Layout Planning (SLP), U-shaped cellular bay design, and material flow route optimization.",
    },
    {
      challenge: "Productivity & Operator Efficiency",
      impact: "Unmeasured work methods and lack of standard work instructions lead to low operator output and variable shift performance.",
      solution: "Scientific MOST time-and-motion studies, frontline Leader Standard Work (LSW), and daily management operating cadences.",
    },
    {
      challenge: "Inventory Management & High WIP",
      impact: "Uncoordinated scheduling and push production cause excessive inventory buffer build-up, locking up working capital.",
      solution: "Supermarket min-max inventory controls, Kanban demand-pull signaling, and FIFO material line feeding.",
    },
  ];

  // Show only first 3 cards by default, or all 9 when expanded
  const visibleChallenges = isExpanded ? challengesSolved : challengesSolved.slice(0, 3);

  return (
    <section className="py-20 bg-white border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-xs font-bold text-navy uppercase tracking-widest bg-navy/5 px-3.5 py-1.5 rounded-full border border-navy/10 shadow-2xs">
            Shopfloor Pain Points
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy">
            Manufacturing Challenges We Solve
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto rounded-full"></div>
          <p className="text-steel text-base sm:text-lg leading-relaxed">
            We address structural shopfloor bottlenecks and operational losses with tailored lean engineering solutions.
          </p>
        </div>

        {/* CHALLENGES CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleChallenges.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-[#FAF9F6] rounded-3xl p-7 border border-gray-200/90 shadow-md hover:shadow-2xl hover:border-gold/60 transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col justify-between space-y-4"
            >
              {/* Accent Top Line Bar on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-transparent group-hover:bg-gold transition-all duration-300" />

              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                    Operational Challenge
                  </span>
                </div>

                <h3 className="font-serif font-bold text-navy text-xl leading-snug group-hover:text-gold-dark transition-colors duration-200">
                  {item.challenge}
                </h3>

                <p className="text-steel text-xs sm:text-sm leading-relaxed">
                  {item.impact}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* EXPAND / COLLAPSE TRANSPARENT-TO-NAVY ICON BUTTON */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            title={isExpanded ? "Collapse Challenges" : "Expand All Challenges"}
            aria-label={isExpanded ? "Collapse Challenges" : "Expand All Challenges"}
            className="w-56 sm:w-72 h-12 mx-auto rounded-full bg-transparent hover:bg-[#051930] text-navy hover:text-gold border border-navy/30 hover:border-gold shadow-xs hover:shadow-2xl flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105 group"
          >
            {isExpanded ? (
              <Icons.ChevronUp className="w-6 h-6 text-navy group-hover:text-gold group-hover:scale-125 transition-all duration-300" />
            ) : (
              <Icons.ChevronDown className="w-6 h-6 text-navy group-hover:text-gold group-hover:scale-125 transition-all duration-300" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
