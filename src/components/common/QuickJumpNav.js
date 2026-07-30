"use client";

import { useEffect, useState, useRef } from "react";
import * as Icons from "../ui/Icons";

export default function QuickJumpNav({ items, label = "Jump to:" }) {
  const [activeId, setActiveId] = useState(items[0]?.id || "");
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 250);

      const scrollPosition = scrollY + 200;
      for (let i = items.length - 1; i >= 0; i--) {
        const element = document.getElementById(items[i].id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(items[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
    }
  };

  return (
    <>
      {/* Layout Spacer when fixed at bottom */}
      {isScrolled && <div className="h-14 block" />}

      <div
        className={`transition-all duration-300 z-50 ${
          isScrolled
            ? "fixed bottom-4 inset-x-4 max-w-7xl mx-auto bg-[#051930]/95 backdrop-blur-lg border border-gold/40 text-white rounded-2xl shadow-2xl py-2 px-4 animate-fadeIn"
            : "sticky top-[68px] bg-[#FAF9F6]/95 backdrop-blur-md border-b border-navy/10 shadow-xs py-2.5"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            {/* Label Badge */}
            <div
              className={`flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider shrink-0 px-3 py-1.5 rounded-lg transition-colors ${
                isScrolled
                  ? "bg-gold/15 text-gold border border-gold/30"
                  : "bg-navy/5 text-navy border border-navy/10"
              }`}
            >
              <Icons.Sliders className="w-3.5 h-3.5 text-gold" />
              <span>{label}</span>
            </div>

            {/* Smooth Horizontal Nav Pills */}
            <div
              ref={scrollContainerRef}
              className="flex items-center space-x-2 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1 min-w-0"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {items.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className={`text-xs font-semibold whitespace-nowrap px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer shrink-0 ${
                      isActive
                        ? isScrolled
                          ? "bg-gold text-navy shadow-md font-bold ring-1 ring-white/50 scale-105"
                          : "bg-navy text-white shadow-sm ring-1 ring-gold/50 font-bold"
                        : isScrolled
                        ? "text-gray-300 hover:text-white hover:bg-white/10"
                        : "text-steel-light hover:text-navy hover:bg-navy/5"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
