"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import servicesData from "@/data/services.json";
import * as Icons from "@/components/ui/Icons";

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFade, setIsFade] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const totalServices = servicesData.length;
  const currentService = servicesData[currentIndex] || servicesData[0];
  const IconComp = (currentService.icon && Icons[currentService.icon]) ? Icons[currentService.icon] : Icons.Sliders;

  const minSwipeDistance = 50;

  const changeSlide = useCallback((newIndex) => {
    setIsFade(true);
    setProgress(0);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsFade(false);
    }, 180);
  }, []);

  const nextSlide = useCallback(() => {
    changeSlide((currentIndex + 1) % totalServices);
  }, [changeSlide, currentIndex, totalServices]);

  const prevSlide = useCallback(() => {
    changeSlide((currentIndex - 1 + totalServices) % totalServices);
  }, [changeSlide, currentIndex, totalServices]);

  const goToSlide = (index) => {
    if (index !== currentIndex) {
      changeSlide(index);
    }
  };

  // Auto-scroll (5000ms) with visual progress tracking
  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 50; // update progress every 50ms
    const totalTime = 5000;
    const step = (intervalTime / totalTime) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          changeSlide((currentIndex + 1) % totalServices);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, totalServices, changeSlide]);

  // Keyboard navigation (Left / Right arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch Swipe Handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  return (
    <div className="w-full space-y-6">
      {/* 1. HORIZONTAL CAPABILITY NAVIGATION TABS */}
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-200/90 p-3 shadow-lg">
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1">
          <div className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-navy bg-navy/5 px-3.5 py-2 rounded-xl shrink-0 mr-2 border border-navy/10">
            <Icons.Sliders className="w-3.5 h-3.5 text-gold" />
            <span>Select Service:</span>
          </div>

          {servicesData.map((s, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={s.id}
                onClick={() => goToSlide(idx)}
                className={`text-xs font-semibold whitespace-nowrap px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer shrink-0 ${
                  isActive
                    ? "bg-[#051930] text-gold shadow-lg font-bold ring-2 ring-gold/40 scale-105"
                    : "text-steel-light hover:text-navy hover:bg-navy/5 border border-transparent"
                }`}
              >
                <span className="opacity-60 mr-1.5 text-[10px]">0{idx + 1}</span>
                {s.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. CREATIVE CAROUSEL CARD */}
      <div className="w-full flex flex-col justify-center">
        {/* TOP COUNTER & SERVICENAME BADGE */}
        <div className="flex items-center justify-between mb-4 px-2">
          <span className="text-xs font-serif font-bold text-navy bg-gold/20 text-navy-dark px-3.5 py-1 rounded-full border border-gold/30 shadow-2xs">
            SERVICE 0{currentIndex + 1} OF 0{totalServices}
          </span>
          <span className="text-xs font-semibold text-steel-light uppercase tracking-wider hidden sm:inline-block">
            {currentService.title}
          </span>
        </div>

        {/* CAROUSEL CONTAINER */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="relative min-h-[470px] flex items-center justify-center"
        >
          {/* CREATIVE LEFT ARROW BUTTON */}
          <button
            onClick={prevSlide}
            aria-label="Previous Service"
            className="absolute -left-4 sm:-left-6 lg:-left-7 z-30 w-12 h-12 rounded-2xl bg-[#051930] text-gold border border-gold/40 shadow-xl hover:shadow-2xl hover:bg-gold hover:text-navy hover:border-navy transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 group"
          >
            <Icons.ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* CREATIVE RIGHT ARROW BUTTON */}
          <button
            onClick={nextSlide}
            aria-label="Next Service"
            className="absolute -right-4 sm:-right-6 lg:-right-7 z-30 w-12 h-12 rounded-2xl bg-[#051930] text-gold border border-gold/40 shadow-xl hover:shadow-2xl hover:bg-gold hover:text-navy hover:border-navy transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 group"
          >
            <Icons.ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* MAIN SERVICE CARD WITH BEAUTIFUL BACKGROUND OVERLAY */}
          <div
            key={currentService.id}
            className={`group relative w-full bg-white rounded-3xl border border-gray-200/90 shadow-xl hover:shadow-[0_30px_70px_-15px_rgba(5,25,48,0.22)] hover:border-gold/70 transition-all duration-500 ease-out overflow-hidden flex flex-col justify-between ${
              isFade
                ? "opacity-0 scale-[0.99] translate-y-1"
                : "opacity-100 scale-100 translate-y-0"
            }`}
          >
            {/* ANIMATED AUTO-PLAY PROGRESS BAR */}
            <div className="w-full bg-gray-100 h-1.5 overflow-hidden z-20 relative">
              <div
                className="h-full bg-gradient-to-r from-navy via-gold to-teal transition-all duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* CARD HEADER WITH INTEGRATED BACKGROUND IMAGE & OVERLAY */}
            <div className="relative bg-gradient-to-r from-[#051930] via-[#0A2540] to-[#051930] p-6 sm:p-8 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gold/20 overflow-hidden min-h-[120px]">
              {/* SERVICE IMAGE BACKGROUND OVERLAY */}
              {currentService.image && (
                <div className="absolute inset-0 z-0 opacity-25 group-hover:opacity-40 transition-opacity duration-500">
                  <Image
                    src={currentService.image}
                    alt={currentService.title}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#051930] via-[#051930]/80 to-[#051930]/90" />
                </div>
              )}

              {/* CARD HEADER CONTENT */}
              <div className="relative z-10 flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-gold/40 flex items-center justify-center text-gold shadow-lg group-hover:scale-110 group-hover:bg-gold group-hover:text-navy transition-all duration-300 shrink-0 backdrop-blur-sm">
                  <IconComp className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full border border-gold/20 backdrop-blur-sm">
                    CAPABILITY 0{currentIndex + 1}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight mt-1.5 group-hover:text-gold transition-colors duration-300">
                    {currentService.title}
                  </h2>
                </div>
              </div>
            </div>

            {/* CARD BODY */}
            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white">
              {/* LEFT COLUMN: TAGLINE & FLOOR CHALLENGE */}
              <div className="lg:col-span-6 space-y-6">
                {currentService.tagline && (
                  <div className="bg-navy/5 p-4.5 rounded-2xl border-l-4 border-gold shadow-2xs">
                    <p className="text-navy font-semibold text-sm sm:text-base italic leading-relaxed">
                      &ldquo;{currentService.tagline}&rdquo;
                    </p>
                  </div>
                )}

                {/* PROBLEM / FLOOR CHALLENGE */}
                <div className="space-y-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
                    <Icons.AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                    Problem / Floor Challenge
                  </span>
                  <p className="text-steel text-sm sm:text-base leading-relaxed bg-red-500/5 p-5 rounded-2xl border border-red-500/10">
                    {currentService.problem}
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN: TYPICAL OPERATIONAL OUTCOMES */}
              <div className="lg:col-span-6 bg-[#FAF9F6] rounded-2xl p-6 border border-gray-200/70 flex flex-col justify-center space-y-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 inline-flex items-center gap-1.5 self-start">
                  <Icons.TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  Typical Operational Outcomes
                </span>

                <ul className="space-y-3">
                  {currentService.typicalOutcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm sm:text-base font-semibold text-navy">
                      <Icons.CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CAROUSEL BOTTOM DOT INDICATORS */}
        <div className="flex items-center justify-center space-x-2.5 mt-6">
          {servicesData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? "w-8 bg-gold shadow-md"
                  : "w-2.5 bg-gray-300 hover:bg-navy/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
