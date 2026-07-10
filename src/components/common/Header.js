"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import * as Icons from "../ui/Icons";
import Button from "../ui/Button";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Set initial scroll on mount
    setScrollY(window.scrollY);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (mobileMenuOpen) {
        setVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }

      setScrollY(currentScrollY);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "How We Work", href: "/how-we-work" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const isScrolled = scrollY > 20;

  const isDarkHeroPage =
    pathname === "/" ||
    pathname.startsWith("/case-studies") ||
    pathname.startsWith("/how-we-work") ||
    pathname.startsWith("/blog") ||
    pathname.startsWith("/contact") ||
    pathname.startsWith("/services");

  const isLightHeader = isScrolled || mobileMenuOpen || !isDarkHeroPage;

  const headerPositionClass = isDarkHeroPage
    ? "fixed top-0 left-0 w-full"
    : "sticky top-0 w-full";

  return (
    <header
      className={`z-50 transition-all duration-300 ease-in-out ${headerPositionClass} ${
        isScrolled || mobileMenuOpen
          ? "bg-[#F5F2EB]/95 backdrop-blur-md border-b border-navy-light/10 shadow-sm"
          : "bg-transparent border-b border-transparent"
      } ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative flex justify-between items-center transition-all duration-300 ease-in-out py-[12px]"
        >
          {/* Logo - Centered on Mobile, Left-aligned on Desktop */}
          <div className="flex justify-center lg:justify-start w-full lg:w-auto">
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="flex items-center cursor-pointer group"
            >
              <div
                className="relative transition-all duration-300 ease-in-out"
                style={{
                  width: isScrolled ? "200px" : "250px",
                  height: isScrolled ? "65px" : "65px",
                }}
              >
                <Image
                  src="/images/logo-new.webp"
                  alt="Pinnacle Logic Consulting Logo"
                  fill
                  className="object-contain object-center lg:object-left transition-all duration-300"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                  isActive(item.href)
                    ? "text-navy border-b-2 border-gold pb-1"
                    : "text-steel-light hover:text-navy"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center">
            <Button
              href="/contact"
              variant="primary"
              className="py-2.5 px-5 text-sm transition-all duration-300"
            >
              Start Assessment
            </Button>
          </div>

          {/* Mobile Menu Button - Positioned absolutely to prevent affecting centered logo layout */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="focus:outline-none p-2 cursor-pointer transition-colors text-steel hover:text-navy"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <Icons.X className="w-6 h-6" />
              ) : (
                <Icons.Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F5F2EB] border-b border-navy-light/10 animate-fadeIn">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col shadow-inner">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-semibold cursor-pointer ${
                  isActive(item.href)
                    ? "bg-navy/5 text-navy"
                    : "text-steel-light hover:bg-navy/5 hover:text-navy"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <Button
                href="/contact"
                variant="primary"
                className="w-full py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Assessment
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

