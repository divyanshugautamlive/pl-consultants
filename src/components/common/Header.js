"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Icons from "../ui/Icons";
import Button from "../ui/Button";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "How We Work", href: "/how-we-work" },
    { name: "Blog", href: "/blog" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 backdrop-blur-md bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Wordmark */}
          <Link href="/" className="flex items-center space-x-2 cursor-pointer group">
            <span className="font-serif text-2xl font-bold text-navy tracking-tight group-hover:text-teal transition-colors">
              PL CONSULTING
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse"></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                  isActive(item.href)
                    ? "text-teal border-b-2 border-gold pb-1"
                    : "text-steel hover:text-teal"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center">
            <Button href="/contact" variant="primary" className="py-2.5 px-5 text-sm">
              Start Assessment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-steel hover:text-teal focus:outline-none p-2 cursor-pointer"
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
        <div className="lg:hidden bg-white border-b border-gray-100 animate-fadeIn">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col shadow-inner">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-semibold cursor-pointer ${
                  isActive(item.href)
                    ? "bg-navy/5 text-teal"
                    : "text-steel hover:bg-gray-50 hover:text-teal"
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
