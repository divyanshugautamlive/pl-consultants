"use client";

import Link from "next/link";
import * as Icons from "./Icons";

export default function PosterCard({
  title,
  description,
  image,
  iconName = "Sliders",
  categoryTag = "",
  href = "#",
  ctaText = "LEARN MORE",
  badgeColor = "navy",
}) {
  const IconComp = Icons[iconName] || Icons.Sliders;

  return (
    <Link
      href={href}
      className="group relative rounded-3xl overflow-hidden bg-navy-dark shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-[450px] border border-white/10 hover:border-gold/60 hover:-translate-y-2 cursor-pointer"
    >
      {/* 1. TOP IMAGE AREA WITH GRADIENT BLEND */}
      <div className="relative h-56 w-full overflow-hidden shrink-0">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-navy via-navy-light to-navy-dark flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-gold/40">
              <IconComp className="w-10 h-10" />
            </div>
          </div>
        )}

        {/* Gradient Overlay linking image to dark card body */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#051930] via-[#051930]/50 to-transparent" />

        {/* Floating Hexagonal Icon Badge at Top Left */}
        <div className="absolute top-4 left-4 w-11 h-11 rounded-2xl bg-[#051930]/90 backdrop-blur-md border border-gold/30 flex items-center justify-center text-gold shadow-lg group-hover:scale-110 group-hover:bg-gold group-hover:text-navy transition-all duration-300">
          <IconComp className="w-5.5 h-5.5" />
        </div>

        {/* Optional Category Pill at Top Right */}
        {categoryTag && (
          <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider bg-gold/90 backdrop-blur-md text-navy px-3 py-1 rounded-full shadow">
            {categoryTag}
          </span>
        )}
      </div>

      {/* 2. CARD CONTENT BODY */}
      <div className="p-6 flex flex-col justify-between flex-1 relative z-10 bg-[#051930]">
        <div className="space-y-2.5">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-white leading-tight group-hover:text-gold transition-colors duration-200">
            {title}
          </h3>
          <div className="h-0.5 w-10 bg-gold rounded group-hover:w-16 transition-all duration-300"></div>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-3 font-normal">
            {description}
          </p>
        </div>

        {/* 3. BOTTOM ACTION BAR */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-4">
          <span className="text-[11px] font-bold text-gray-300 uppercase tracking-widest group-hover:text-gold transition-colors">
            {ctaText}
          </span>
          <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-gold group-hover:border-gold group-hover:text-navy transition-all duration-300 shrink-0 shadow-sm">
            <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
