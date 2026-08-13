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
          {/* Column 1: Brand Info & Social Links */}
          <div>
            <Link href="/" className="flex items-center mb-6">
              <div className="relative w-52 h-14">
                <Image
                  src="/images/logo-new.webp"
                  alt="Pinnacle Logic Consulting Logo"
                  fill
                  className="object-contain object-left filter brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Pinnacle Logic Consulting is a premium manufacturing consulting firm helping manufacturers improve productivity, reduce operational costs, and achieve operational excellence.
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
            </div>
          </div>

          {/* Column 2: Services Links */}
          <div>
            <h4 className="font-serif text-white font-bold text-lg mb-6 border-b-2 border-gold/40 pb-2 inline-block">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#lean-manufacturing" className="hover:text-gold transition-colors cursor-pointer">
                  Lean Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/services#operational-excellence" className="hover:text-gold transition-colors cursor-pointer">
                  Operational Excellence
                </Link>
              </li>
              <li>
                <Link href="/services#industrial-engineering" className="hover:text-gold transition-colors cursor-pointer">
                  Industrial Engineering
                </Link>
              </li>
              <li>
                <Link href="/services#factory-layout" className="hover:text-gold transition-colors cursor-pointer">
                  Factory Layout
                </Link>
              </li>
              <li>
                <Link href="/services#oee-improvement" className="hover:text-gold transition-colors cursor-pointer">
                  OEE Improvement
                </Link>
              </li>
              <li>
                <Link href="/services#digitalization-and-automation" className="hover:text-gold transition-colors cursor-pointer">
                  Digitalization &amp; Automation
                </Link>
              </li>
              <li>
                <Link href="/services#capacity-improvement" className="hover:text-gold transition-colors cursor-pointer">
                  Capacity Improvement
                </Link>
              </li>
              <li>
                <Link href="/services#cost-reduction" className="hover:text-gold transition-colors cursor-pointer">
                  Cost Reduction
                </Link>
              </li>
              <li>
                <Link href="/services#manpower-optimisation" className="hover:text-gold transition-colors cursor-pointer">
                  Manpower Optimisation
                </Link>
              </li>
              <li>
                <Link href="/services#quality-zero-defect" className="hover:text-gold transition-colors cursor-pointer">
                  Quality &amp; Zero Defect
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries Links */}
          <div>
            <h4 className="font-serif text-white font-bold text-lg mb-6 border-b-2 border-gold/40 pb-2 inline-block">
              Industries
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/industries#automotive" className="hover:text-gold transition-colors cursor-pointer">
                  Auto Components
                </Link>
              </li>
              <li>
                <Link href="/industries#steel" className="hover:text-gold transition-colors cursor-pointer">
                  Steel
                </Link>
              </li>
              <li>
                <Link href="/industries#foundry" className="hover:text-gold transition-colors cursor-pointer">
                  Foundry
                </Link>
              </li>
              <li>
                <Link href="/industries#packaging" className="hover:text-gold transition-colors cursor-pointer">
                  Packaging
                </Link>
              </li>
              <li>
                <Link href="/industries#engineering" className="hover:text-gold transition-colors cursor-pointer">
                  Engineering
                </Link>
              </li>
              <li>
                <Link href="/industries#heavy-manufacturing" className="hover:text-gold transition-colors cursor-pointer">
                  Heavy Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/industries#wire-cables" className="hover:text-gold transition-colors cursor-pointer">
                  Wire &amp; Cables
                </Link>
              </li>
              <li>
                <Link href="/industries#textile" className="hover:text-gold transition-colors cursor-pointer">
                  Textile
                </Link>
              </li>
              <li>
                <Link href="/industries#fmcg" className="hover:text-gold transition-colors cursor-pointer">
                  FMCG
                </Link>
              </li>
              <li>
                <Link href="/industries#electricals" className="hover:text-gold transition-colors cursor-pointer">
                  Electricals &amp; Electronics
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h4 className="font-serif text-white font-bold text-lg mb-6 border-b-2 border-gold/40 pb-2 inline-block">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Icons.Phone className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-xs">Speak With Our Consultants</p>
                  <a href="tel:+918439692259" className="hover:text-gold font-semibold transition-colors">
                    +91 84396 92259
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Icons.Mail className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-xs">Email Our Team</p>
                  <a href="mailto:tarun@pinnaclelogic.in" className="hover:text-gold transition-colors break-all">
                    tarun@pinnaclelogic.in
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Icons.MapPin className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-xs">Coverage</p>
                  <span className="text-gray-300 font-medium">Serving Manufacturers Across India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lower Footer section */}
      <div className="bg-navy-dark border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4 text-center md:text-left">
          <p>&copy; {currentYear} Pinnacle Logic Consulting. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-5">
            <Link href="/privacy" className="hover:text-gray-300 cursor-pointer transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 cursor-pointer transition-colors">Terms &amp; Conditions</Link>
            <span className="italic text-[11px] text-gray-500/80 font-normal border-l border-gray-800 pl-4">
              Designed and developed by ProSites
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
