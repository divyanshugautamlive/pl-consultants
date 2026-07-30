"use client";

import * as Icons from "../ui/Icons";

export default function MethodologySection() {
  const phases = [
    {
      number: "01",
      name: "Diagnose",
      icon: <Icons.Search className="w-6 h-6 text-gold" />,
      desc: "Comprehensive shopfloor study, DILO, time study, OEE audit, and bottleneck location to identify hidden operational losses.",
      activities: [
        "Day-In-The-Life-Of (DILO) operator studies",
        "Spaghetti mapping & travel distance audit",
        "Machine 6 Big Losses & OEE baseline capture"
      ],
      deliverables: "Shopfloor Diagnostic Report & Waste Heatmap"
    },
    {
      number: "02",
      name: "Analyse",
      icon: <Icons.TrendingUp className="w-6 h-6 text-gold" />,
      desc: "Data analytics, root-cause 5-Why mapping, and line balance charting to quantify operational improvement potential.",
      activities: [
        "Yamazumi work content breakdown",
        "Constraint & throughput bottleneck modeling",
        "Root cause 5-Why & Ishikawa diagramming"
      ],
      deliverables: "Prioritized Operational Opportunity Matrix"
    },
    {
      number: "03",
      name: "Design",
      icon: <Icons.Layout className="w-6 h-6 text-gold" />,
      desc: "Co-creating future state Value Stream Maps, cellular plant layouts, quick changeover procedures, and standard work instructions.",
      activities: [
        "Future state Value Stream Mapping (VSM)",
        "Cellular layout & material flow design",
        "SMED setup reduction protocol creation"
      ],
      deliverables: "Future-State Blueprint & Implementation Roadmap"
    },
    {
      number: "04",
      name: "Execute",
      icon: <Icons.Sliders className="w-6 h-6 text-gold" />,
      desc: "Hands-on floor implementation alongside plant supervisors, operator Kaizen workshops, line rebalancing, and SMED events.",
      activities: [
        "Kaizen events & shopfloor trial runs",
        "MOST line rebalancing execution",
        "Poka-Yoke & Karakuri mechanism installation"
      ],
      deliverables: "Optimized Line Flow & Trained Frontline Staff"
    },
    {
      number: "05",
      name: "Sustain",
      icon: <Icons.Check className="w-6 h-6 text-gold" />,
      desc: "Establishing Daily Management Systems (DMS), visual management boards, cascading KPIs, and standard work audits to lock in gains.",
      activities: [
        "Cascading visual KPI huddle boards",
        "Leader Standard Work (LSW) deployment",
        "Weekly/monthly standard work audit routines"
      ],
      deliverables: "Sustained Operational Standard & Auditing System"
    },
  ];

  const outcomes = [
    { title: "Higher Productivity", desc: "35% average labor & line throughput gain", icon: <Icons.TrendingUp className="w-5 h-5 text-teal" /> },
    { title: "Reduced Costs", desc: "Lower scrap, material waste & conversion cost", icon: <Icons.Check className="w-5 h-5 text-teal" /> },
    { title: "Higher OEE", desc: "18% OEE uplift across critical bottleneck machinery", icon: <Icons.Sliders className="w-5 h-5 text-teal" /> },
    { title: "Reduced Lead Time", desc: "30% faster order-to-dispatch turnaround", icon: <Icons.Clock className="w-5 h-5 text-teal" /> },
    { title: "Better Material Flow", desc: "45% reduction in material travel distance", icon: <Icons.Layout className="w-5 h-5 text-teal" /> },
  ];

  return (
    <div className="space-y-12">
      {/* 5 Phases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {phases.map((phase) => (
          <div
            key={phase.number}
            className="bg-white text-steel rounded-xl border border-navy/10 p-6 card-shadow flex flex-col justify-between hover:border-gold/50 transition-all duration-300 hover:-translate-y-1.5 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-teal uppercase tracking-widest bg-teal/10 px-2.5 py-1 rounded">
                  Phase {phase.number}
                </span>
                <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  {phase.icon}
                </div>
              </div>

              <h3 className="text-xl font-serif font-bold text-navy">{phase.name}</h3>
              <p className="text-steel text-xs leading-relaxed">{phase.desc}</p>

              <div className="space-y-2 pt-2 border-t border-gray-100">
                <p className="text-[11px] font-bold text-navy uppercase tracking-wider">Key Activities:</p>
                <ul className="space-y-1">
                  {phase.activities.map((act, i) => (
                    <li key={i} className="text-[11px] text-steel-light flex items-start space-x-1.5">
                      <span className="text-gold font-bold">•</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-gray-100">
              <p className="text-[10px] font-bold text-teal uppercase tracking-wider">Deliverables</p>
              <p className="text-xs font-semibold text-navy mt-0.5">{phase.deliverables}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Expected Outcomes Banner */}
      <div className="bg-navy/80 border border-gold/30 rounded-2xl p-8 backdrop-blur-sm">
        <h4 className="text-center font-serif font-bold text-white text-xl mb-6">
          Expected Framework Outcomes
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {outcomes.map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-gold/40 transition-colors">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-2">
                {item.icon}
              </div>
              <h5 className="font-serif font-bold text-white text-sm mb-1">{item.title}</h5>
              <p className="text-gray-300 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
