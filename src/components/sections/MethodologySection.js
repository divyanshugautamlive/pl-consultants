import * as Icons from "../ui/Icons";

export default function MethodologySection() {
  const phases = [
    {
      number: "01",
      name: "Diagnose",
      desc: "Shopfloor study, DILO, OEE & bottleneck analysis to locate the real losses.",
    },
    {
      number: "02",
      name: "Analyze",
      desc: "Trace operational loss drivers to their statistical root causes.",
    },
    {
      number: "03",
      name: "Design",
      desc: "Co-create streamlined layout designs, quick changeovers, and visual standards.",
    },
    {
      number: "04",
      name: "Implement",
      desc: "Hands-on floor execution, line balancing, and frontline team training.",
    },
    {
      number: "05",
      name: "Sustain",
      desc: "Integrate Daily Management Systems (DMS) and audit sheets to lock in the savings.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {phases.map((phase) => (
        <div key={phase.number} className="bg-white rounded-xl border border-gray-150 p-6 card-shadow flex flex-col justify-between hover:border-gold/30 transition-all-custom">
          <div>
            <span className="text-xs font-bold text-teal block uppercase tracking-wider mb-2">PHASE {phase.number}</span>
            <h3 className="text-xl font-serif font-bold text-navy mb-3">{phase.name}</h3>
            <p className="text-steel text-sm leading-relaxed">{phase.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
