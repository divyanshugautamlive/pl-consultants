"use client";

import Link from "next/link";
import Image from "next/image";
import * as Icons from "../ui/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-gray-300 border-t border-navy/40">
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div>
            <Link href="/" className="flex items-center mb-6">
              <div className="relative w-48 h-12">
                <Image
                  src="/images/logo.png"
                  alt="Pinnacle Logic Consulting Logo"
                  fill
                  className="object-contain object-left filter brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Unlocking hidden capacity and recovering operational profitability on the shopfloors of Indian manufacturing MSMEs through Lean Six Sigma.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-navy/60 flex items-center justify-center text-gray-300 hover:text-gold hover:bg-navy transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <Icons.ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/918439692259?text=Hi%20Tarun,%20I'd%20like%20to%20discuss%20a%20shopfloor%20assessment."
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-navy/60 flex items-center justify-center text-gray-300 hover:text-gold hover:bg-navy transition-colors cursor-pointer"
                aria-label="WhatsApp"
              >
                <Icons.Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-white font-bold text-lg mb-6 border-b-2 border-gold/40 pb-2 inline-block">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-gold transition-colors cursor-pointer">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors cursor-pointer">About Tarun</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors cursor-pointer">Consulting Services</Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-gold transition-colors cursor-pointer">Proven Case Studies</Link>
              </li>
              <li>
                <Link href="/how-we-work" className="hover:text-gold transition-colors cursor-pointer">How We Work (DADES)</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-white font-bold text-lg mb-6 border-b-2 border-gold/40 pb-2 inline-block">
              Get In Touch
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Icons.Phone className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-xs">Direct Call / WhatsApp</p>
                  <a href="tel:+918439692259" className="hover:text-gold font-semibold transition-colors">
                    +91 84396 92259
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Icons.Mail className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-xs">Email Tarun Sharma</p>
                  <a href="mailto:tarunsharma301996@gmail.com" className="hover:text-gold transition-colors break-all">
                    tarunsharma301996@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Icons.MapPin className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-xs">Coverage Area</p>
                  <span className="text-gray-300">All India Manufacturing Hubs</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-white font-bold text-lg mb-6 border-b-2 border-gold/40 pb-2 inline-block">
              Manufacturing Insights
            </h4>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              Get Tarun Sharma&apos;s monthly articles on OEE improvement, SMED setups, and shopfloor cost reduction.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="Enter work email"
                className="w-full bg-navy/50 border border-gray-700 rounded-lg py-2.5 px-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold"
                required
              />
              <button
                type="submit"
                className="w-full bg-teal text-white hover:bg-teal-light py-2.5 px-4 rounded-lg font-semibold text-sm transition-colors cursor-pointer"
              >
                Subscribe to Insights
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Lower Footer section */}
      <div className="bg-navy-dark border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {currentYear} Pinnacle Logic Consulting. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-gray-300 cursor-pointer">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 cursor-pointer">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
