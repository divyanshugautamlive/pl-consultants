"use client";

import * as Icons from "../ui/Icons";

export default function MethodologySection() {
  const outcomes = [
    {
      title: "Higher Productivity",
      desc: "35% average labor & line throughput gain across plant operations",
      icon: <Icons.TrendingUp className="w-6 h-6 text-gold" />,
    },
    {
      title: "Reduced Costs",
      desc: "Lower scrap, material waste & conversion cost without Capex",
      icon: <Icons.Check className="w-6 h-6 text-gold" />,
    },
    {
      title: "Higher OEE",
      desc: "72% Changeover Reduction & higher OEE uplift on bottleneck machinery",
      icon: <Icons.Sliders className="w-6 h-6 text-gold" />,
    },
    {
      title: "Reduced Lead Time",
      desc: "30% faster order-to-dispatch turnaround time",
      icon: <Icons.Clock className="w-6 h-6 text-gold" />,
    },
    {
      title: "Better Material Flow",
      desc: "45% reduction in material travel distance & handling waste",
      icon: <Icons.Layout className="w-6 h-6 text-gold" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {outcomes.map((item, idx) => (
        <div
          key={idx}
          className="bg-navy/80 border border-gold/30 rounded-2xl p-6 text-center hover:border-gold/60 transition-all duration-300 backdrop-blur-sm group hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 group-hover:border-gold/40 transition-colors">
              {item.icon}
            </div>
            <h3 className="font-serif font-bold text-white text-lg mb-2 leading-snug">
              {item.title}
            </h3>
            <p className="text-gray-300 text-xs leading-relaxed font-normal">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
