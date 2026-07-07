"use client";

import { useState } from "react";
import resourcesData from "@/data/resources.json";
import * as Icons from "@/components/ui/Icons";
import Button from "@/components/ui/Button";

export default function ResourcesHub() {
  // ROI Calculator states
  const [turnover, setTurnover] = useState(25); // In Crores
  const [currentOee, setCurrentOee] = useState(50); // In %
  const [scrapRate, setScrapRate] = useState(5); // In %
  const [calculated, setCalculated] = useState(false);
  const [roiResults, setRoiResults] = useState({
    unlockedCapacity: 0,
    scrapSavings: 0,
    totalProfitRecovery: 0,
    paybackMonths: 0,
  });

  const calculateRoi = (e) => {
    e.preventDefault();
    
    const revenue = parseFloat(turnover) * 10000000; // Convert Crores to absolute Rupees
    const oee = parseFloat(currentOee) / 100;
    const scrap = parseFloat(scrapRate) / 100;

    // Standard targets: 75% OEE target, 1.8% scrap target
    const targetOee = 0.75;
    const targetScrap = 0.018;

    // Capacity unlocked = Revenue * ((Target OEE - Current OEE) / Current OEE)
    let unlockedCap = 0;
    if (oee < targetOee) {
      unlockedCap = revenue * ((targetOee - oee) / oee);
    }

    // Scrap savings = Revenue * (Current Scrap - Target Scrap)
    let scrapSave = 0;
    if (scrap > targetScrap) {
      scrapSave = revenue * (scrap - targetScrap);
    }

    // Profit recovered assuming 15% EBITDA margin on unlocked capacity + 100% of scrap savings
    const profitMarginOnCapacity = 0.15;
    const totalProfitRec = (unlockedCap * profitMarginOnCapacity) + scrapSave;

    // Format in Lakhs / Crores
    const formatRupees = (val) => {
      const lakhs = val / 100000;
      if (lakhs >= 100) {
        return `₹${(lakhs / 100).toFixed(2)} Cr`;
      }
      return `₹${lakhs.toFixed(1)} Lakh`;
    };

    setRoiResults({
      unlockedCapacity: formatRupees(unlockedCap),
      scrapSavings: formatRupees(scrapSave),
      totalProfitRecovery: formatRupees(totalProfitRec),
      paybackMonths: "< 6 Months",
    });
    setCalculated(true);
  };

  const handleDownload = (filename) => {
    alert(`This is a demo setup. In production, ${filename} will download directly from Vercel's static assets folder.`);
  };

  return (
    <div className="bg-off-white min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="bg-navy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-teal/15 blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest bg-white/15 px-3 py-1 rounded-full text-gold font-semibold">
            Value Add Tools
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold leading-tight">
            Resources & ROI Calculator
          </h1>
          <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Calculate your plant's potential profit leakage or download standard checklists and templates to evaluate your setups and line balancing.
          </p>
        </div>
      </section>

      {/* 2. ROI CALCULATOR SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Inputs Column */}
          <div className="lg:col-span-5 bg-navy text-white rounded-2xl p-8 card-shadow border border-navy-light relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-serif font-bold text-white mb-2">Shopfloor ROI Calculator</h2>
              <p className="text-gray-300 text-xs mb-6">See how much annual profit you could recover by debottlenecking setups and balancing line capacities.</p>
              
              <form onSubmit={calculateRoi} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Annual Factory Turnover (in Crores):
                  </label>
                  <div className="flex items-center">
                    <span className="bg-navy-light border border-navy/60 border-r-0 rounded-l-lg px-3 py-2.5 text-gold font-bold">₹</span>
                    <input
                      type="number"
                      value={turnover}
                      onChange={(e) => setTurnover(e.target.value)}
                      min="1"
                      max="1000"
                      className="w-full bg-navy/40 border border-navy/60 border-l-0 rounded-r-lg py-2.5 px-4 text-white focus:outline-none focus:border-gold outline-none font-bold"
                      required
                    />
                    <span className="ml-3 text-sm text-gray-400 font-semibold shrink-0">Cr</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2 flex justify-between">
                    <span>Estimated Line OEE:</span>
                    <span className="text-gold font-bold">{currentOee}%</span>
                  </label>
                  <input
                    type="range"
                    min="30"
                    max="80"
                    value={currentOee}
                    onChange={(e) => setCurrentOee(e.target.value)}
                    className="w-full h-2 bg-navy-light rounded-lg appearance-none cursor-pointer accent-gold"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 font-bold mt-1">
                    <span>30% (High Loss)</span>
                    <span>55% (Typical)</span>
                    <span>80% (Benchmark)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2 flex justify-between">
                    <span>Current Scrap / Rejection Rate:</span>
                    <span className="text-gold font-bold">{scrapRate}%</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    step="0.5"
                    value={scrapRate}
                    onChange={(e) => setScrapRate(e.target.value)}
                    className="w-full h-2 bg-navy-light rounded-lg appearance-none cursor-pointer accent-gold"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 font-bold mt-1">
                    <span>1% (Low)</span>
                    <span>5% (Typical)</span>
                    <span>12% (Severe)</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-dark text-navy font-bold py-3.5 px-6 rounded-lg text-sm shadow transition-colors cursor-pointer"
                >
                  Calculate Profit Recovery Opportunity
                </button>
              </form>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-7 h-full">
            {calculated ? (
              <div className="bg-white rounded-2xl p-8 border border-gray-150 card-shadow h-full space-y-8 animate-fadeIn">
                <div className="border-b border-gray-150 pb-4">
                  <span className="text-xs uppercase tracking-widest text-teal font-bold">CALCULATION RESULTS</span>
                  <h3 className="text-2xl font-serif font-bold text-navy mt-1">Estimated Annual Profit Recoverable</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-off-white rounded-xl p-5 border-l-4 border-teal card-shadow">
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block mb-1">
                      Recoverable Capacity Value
                    </span>
                    <span className="text-2xl font-bold text-navy block mb-1">
                      {roiResults.unlockedCapacity}
                    </span>
                    <span className="text-xs text-gray-500 leading-normal block">
                      Sales value unlocked from existing machines (targeting 75% OEE).
                    </span>
                  </div>

                  <div className="bg-off-white rounded-xl p-5 border-l-4 border-teal card-shadow">
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block mb-1">
                      Scrap & Rejection Savings
                    </span>
                    <span className="text-2xl font-bold text-navy block mb-1">
                      {roiResults.scrapSavings}
                    </span>
                    <span className="text-xs text-gray-500 leading-normal block">
                      Direct cash saved annually by reducing rejections to 1.8% target.
                    </span>
                  </div>
                </div>

                {/* Total EBITDA block */}
                <div className="bg-navy text-white rounded-xl p-6 border border-gold/20 card-shadow flex flex-col sm:flex-row justify-between items-center">
                  <div className="mb-4 sm:mb-0">
                    <span className="text-xs text-gold uppercase tracking-wider font-bold block mb-1">Estimated EBITDA Improvement</span>
                    <p className="text-4xl font-bold text-white leading-none">{roiResults.totalProfitRecovery}</p>
                    <span className="text-[10px] text-gray-300 block mt-2">Assuming conservative 15% margin on unlocked sales capacity + scrap savings</span>
                  </div>
                  <div className="shrink-0 bg-white/10 rounded-lg p-4 text-center">
                    <span className="text-xs text-gray-300 block">Est. Payback Period</span>
                    <span className="text-xl font-bold text-gold">{roiResults.paybackMonths}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center">
                  <Button href="/contact" variant="primary" className="w-full sm:w-auto py-3">
                    Book Shopfloor Walkthrough Assessment
                  </Button>
                  <p className="text-xs text-gray-500 text-center sm:text-left leading-relaxed">
                    * Results are mathematical approximations. We will deliver a precise, audited Rupee roadmap after our 2-hour physical shopfloor walk.
                  </p>
                </div>

              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-150 p-12 card-shadow h-full flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center text-teal">
                  <Icons.TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-navy text-2xl">Awaiting Inputs</h3>
                <p className="text-steel text-base max-w-md leading-relaxed">
                  Enter your factory's annual turnover and slide the current OEE and scrap parameters on the left to compute your estimated margin recovery.
                </p>
              </div>
            )}
          </div>
          
        </div>
      </section>

      {/* 3. DOWNLOADS SECTION */}
      <section className="bg-white border-t border-gray-150 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-teal uppercase tracking-widest">Download Center</h2>
            <p className="text-3xl sm:text-4xl font-serif font-bold text-navy">
              Free Operational Checklists & Templates
            </p>
            <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
            <p className="text-steel text-base leading-relaxed">
              Use these professional guides on your shopfloor to map workflows, track hourly OEE targets, and spot waste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resourcesData.map((res) => (
              <div
                key={res.id}
                className="bg-off-white rounded-xl border border-gray-200/50 p-6 card-shadow flex flex-col justify-between hover:-translate-y-1 transition-transform"
              >
                <div>
                  <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center text-teal mb-5">
                    <Icons.Download className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-navy text-lg mb-2">{res.title}</h3>
                  <p className="text-steel text-xs leading-relaxed mb-6">{res.description}</p>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mt-auto">
                  <div className="flex justify-between items-center text-[10px] text-gray-500 mb-4 font-semibold uppercase">
                    <span>Format: <strong>{res.format.split(" ")[0]}</strong></span>
                    <span>Size: <strong>{res.size}</strong></span>
                  </div>
                  
                  <button
                    onClick={() => handleDownload(res.filename)}
                    className="w-full inline-flex items-center justify-center bg-navy hover:bg-navy-light text-white font-semibold py-2.5 px-4 rounded-lg text-xs transition-colors cursor-pointer"
                  >
                    Download Resource <Icons.Download className="w-3.5 h-3.5 ml-1.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
