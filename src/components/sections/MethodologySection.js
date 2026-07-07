"use client";

import { useState } from "react";
import * as Icons from "../ui/Icons";

export default function MethodologySection() {
  const [activeTab, setActiveTab] = useState(0);

  const phases = [
    {
      number: "01",
      name: "Diagnose",
      duration: "Weeks 1 – 2",
      title: "Identify Margin Leakage & Map Current Workflows",
      description: "We don't start with solutions; we start with measurement. We run exhaustive time-and-motion studies, videography analyses, and process mapping directly on your factory floor to identify exactly where capacity, materials, and time are being lost.",
      keyDeliverables: [
        "Current-State Value Stream Map (VSM)",
        "Hourly output baseline & bottleneck identification",
        "Loss Pareto chart with prioritized Rupee (₹) impacts",
      ],
      icon: "Settings",
    },
    {
      number: "02",
      name: "Analyze",
      duration: "Weeks 3 – 4",
      title: "Trace Loss Drivers to Critical Root Causes",
      description: "Once we quantify the losses, we trace them back to their root causes. Using Lean Six Sigma methodologies, we separate random noise from structural inefficiencies in your setups, line balances, or maintenance schedules.",
      keyDeliverables: [
        "Root-cause analysis (RCA) and fishbone models for top 3 losses",
        "Time study datasets (MOST or stopwatch logs)",
        "Validated target state capability model (e.g. OEE from 50% to 75%)",
      ],
      icon: "Users",
    },
    {
      number: "03",
      name: "Design",
      duration: "Weeks 5 – 6",
      title: "Co-Create Visual Solutions & SOP Standards",
      description: "We design new workflows, cell layouts, and setup sequences in collaboration with your plant engineering team. We prototype quick-clamps, create visual control signals, and draft clear, language-agnostic Standard Operating Procedures.",
      keyDeliverables: [
        "Future-State Value Stream Map (VSM) and U-cell layout designs",
        "SMED tool lists and quick-connect hydraulic specifications",
        "Frontline visual SOPs and operator skill matrices",
      ],
      icon: "Shuffle",
    },
    {
      number: "04",
      name: "Execute",
      duration: "Weeks 7 – 12",
      title: "Hands-on Shopfloor Action & Team Training",
      description: "This is what separates us from traditional advisors. We stay on the shopfloor to implement the designs alongside your operators. We run roll-change trials, balance assembly lines, train shift leaders, and set up daily huddles.",
      keyDeliverables: [
        "Setup times slashed (e.g., from 4 hours to <60 minutes)",
        "Operator re-allocation and balanced line implementation",
        "Frontline hourly board tracking and shift standups active",
      ],
      icon: "Layers",
    },
    {
      number: "05",
      name: "Sustain",
      duration: "Week 13+",
      title: "Lock In ROI Through Audits & Daily Management Systems",
      description: "Improvements only last if there is a governance system. We install a plant-wide Daily Management System (DMS) and structured audit checklists. This transfers complete ownership to your plant supervisors, locking in the savings permanently.",
      keyDeliverables: [
        "DMS meeting structures active (cascading KPIs from Operator to COO)",
        "Standardized leader work and audit schedules for plant managers",
        "Final financial reconciliation showing validated Rupee savings",
      ],
      icon: "TrendingUp",
    },
  ];

  return (
    <div className="py-12">
      {/* Desktop Tabs Layout */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-5 gap-4 mb-10">
          {phases.map((phase, idx) => (
            <button
              key={phase.number}
              onClick={() => setActiveTab(idx)}
              className={`p-6 rounded-xl border text-left transition-all-custom cursor-pointer relative overflow-hidden group ${
                activeTab === idx
                  ? "bg-navy text-white border-navy shadow-lg"
                  : "bg-white text-steel border-gray-100 hover:border-teal/30 hover:bg-gray-50"
              }`}
            >
              <span className={`text-sm font-bold block mb-2 transition-colors ${
                activeTab === idx ? "text-gold" : "text-teal"
              }`}>
                PHASE {phase.number}
              </span>
              <span className="text-xl font-serif font-bold block mb-1">
                {phase.name}
              </span>
              <span className={`text-xs block ${
                activeTab === idx ? "text-gray-300" : "text-gray-500"
              }`}>
                {phase.duration}
              </span>
              {/* Bottom decorative bar */}
              <div className={`absolute bottom-0 left-0 h-1.5 transition-all duration-300 ${
                activeTab === idx ? "bg-gold w-full" : "bg-transparent w-0 group-hover:bg-teal/40 group-hover:w-1/2"
              }`} />
            </button>
          ))}
        </div>

        {/* Tab Detail Pane */}
        <div className="bg-white rounded-2xl border border-gray-100 p-10 card-shadow transition-all duration-300">
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-8 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="text-xs uppercase tracking-widest font-bold bg-gold/10 text-gold-dark px-3 py-1 rounded-full">
                  {phases[activeTab].duration}
                </span>
                <span className="text-gray-400">|</span>
                <span className="text-sm font-medium text-teal font-serif italic">
                  DADES Methodology
                </span>
              </div>
              
              <h3 className="text-3xl font-serif font-bold text-navy">
                {phases[activeTab].title}
              </h3>
              
              <p className="text-steel text-lg leading-relaxed">
                {phases[activeTab].description}
              </p>
            </div>

            <div className="col-span-4 bg-off-white rounded-xl p-6 border-l-4 border-teal">
              <h4 className="font-serif font-bold text-navy text-lg mb-4 flex items-center">
                Key Phase Deliverables
              </h4>
              <ul className="space-y-3.5">
                {phases[activeTab].keyDeliverables.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm text-steel">
                    <Icons.Check className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Accordion Layout */}
      <div className="lg:hidden space-y-6">
        {phases.map((phase) => (
          <div key={phase.number} className="bg-white rounded-xl border border-gray-100 card-shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold text-teal uppercase tracking-wider">
                PHASE {phase.number} &bull; {phase.duration}
              </span>
              <span className="font-serif font-bold text-xl text-navy">
                {phase.name}
              </span>
            </div>
            
            <h4 className="font-serif font-bold text-navy text-base mb-3">
              {phase.title}
            </h4>
            
            <p className="text-steel text-sm leading-relaxed mb-6">
              {phase.description}
            </p>

            <div className="bg-off-white rounded-lg p-5 border-l-3 border-teal">
              <p className="text-xs font-bold text-navy uppercase tracking-wider mb-3">
                Key Deliverables
              </p>
              <ul className="space-y-2.5">
                {phase.keyDeliverables.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2 text-xs text-steel">
                    <Icons.Check className="w-3.5 h-3.5 text-teal shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
