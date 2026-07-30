"use client";

import * as Icons from "../ui/Icons";

export default function DiagnosticSteps() {
  const steps = [
    {
      num: "01",
      title: "Initial Consultation & Business Understanding",
      description: "Understand your business objectives, production challenges, operational constraints, and key improvement priorities through discussions with plant leadership and stakeholders.",
      icon: <Icons.Users className="w-5 h-5 text-gold" />
    },
    {
      num: "02",
      title: "Shopfloor Assessment & Process Observation",
      description: "Conduct a detailed shopfloor walkthrough to observe production flow, manpower utilization, material movement, machine performance, bottlenecks, changeovers, and non-value-added activities.",
      icon: <Icons.Search className="w-5 h-5 text-gold" />
    },
    {
      num: "03",
      title: "Data Collection & Performance Analysis",
      description: "Collect and analyse operational data including production output, cycle times, OEE, downtime, quality losses, manpower utilisation, inventory levels, and capacity to identify improvement opportunities.",
      icon: <Icons.TrendingUp className="w-5 h-5 text-gold" />
    },
    {
      num: "04",
      title: "Opportunity Assessment & Root Cause Analysis",
      description: "Evaluate the current state using Lean Manufacturing and Industrial Engineering principles to identify wastes, process inefficiencies, bottlenecks, and improvement potential with quantified business impact.",
      icon: <Icons.Sliders className="w-5 h-5 text-gold" />
    },
    {
      num: "05",
      title: "Improvement Roadmap & Business Case",
      description: "Present a comprehensive report outlining identified opportunities, recommended solutions, implementation priorities, expected operational improvements, projected savings, ROI, and a phased execution roadmap.",
      icon: <Icons.Award className="w-5 h-5 text-gold" />
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
          Our Diagnostic Process
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy">
          Diagnostic Assessment Steps
        </h2>
        <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
        <p className="text-steel text-base leading-relaxed">
          Our structured diagnostic methodology evaluates plant performance without disruption to ongoing production operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {steps.map((step) => (
          <div
            key={step.num}
            className="bg-white rounded-2xl border border-gray-200 p-6 card-shadow flex flex-col justify-between hover:border-gold/50 transition-all duration-300 hover:-translate-y-1.5 group relative"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-teal uppercase tracking-widest bg-teal/10 px-2.5 py-1 rounded">
                  Step {step.num}
                </span>
                <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center group-hover:bg-navy group-hover:text-gold transition-colors">
                  {step.icon}
                </div>
              </div>

              <h3 className="text-lg font-serif font-bold text-navy leading-snug group-hover:text-navy-light transition-colors">
                {step.title}
              </h3>
              <p className="text-steel text-xs leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-gray-100 flex items-center text-[11px] font-semibold text-gold">
              <span>Phase {step.num} Diagnostic</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
