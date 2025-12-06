'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import CookieConsent from './CookieConsent';

import PaymentIcons from './PaymentIcons';

import PaymentIcons from './PaymentIcons';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  return (
    <>
      {/* Top CTA Bar */}
      <div className="bg-gradient-to-r from-neon-green/90 via-neon-green to-neon-green/90 text-base py-3 px-4 text-center font-semibold shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-center gap-6 text-sm">
          <a href="tel:14057774156" className="hover:text-white transition-colors flex items-center gap-2">
            <span className="animate-[pulse-glow_2.4s_ease-in-out_infinite]">📞</span>
            Call Now
          </a>
          <a 
            href="https://www.hds.live/service-request" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-2"
          >
            <span className="animate-[float_6s_ease-in-out_infinite]">📋</span>
            Request Service
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-surface/95 backdrop-blur-md border-b border-border-subtle sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/pagelogo.png"
                alt="HDS Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              <Link 
                href="/" 
                className="text-white hover:text-neon-green transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-neon-green transition-colors"
              >
                About HDS
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:text-neon-green transition-colors"
              >
                Contact Us
              </Link>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => {
                  if (closeTimeoutRef.current) {
                    clearTimeout(closeTimeoutRef.current);
                    closeTimeoutRef.current = null;
                  }
                  setServicesOpen(true);
                }}
                onMouseLeave={() => {
                  closeTimeoutRef.current = setTimeout(() => {
                    setServicesOpen(false);
                  }, 300);
                }}
              >
                <button className="text-white hover:text-neon-green transition-colors flex items-center gap-1">
                  Services
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-surface/95 backdrop-blur-md border border-border-subtle rounded-xl shadow-xl py-2">
                    <Link 
                      href="/services" 
                      className="block px-4 py-2.5 text-white hover:bg-neon-green/20 hover:text-neon-green transition-colors"
                    >
                      All Services
                    </Link>
                    <Link 
                      href="/services/mechanical-refrigeration" 
                      className="block px-4 py-2.5 text-white hover:bg-neon-green/20 hover:text-neon-green transition-colors"
                    >
                      Mechanical & Refrigeration
                    </Link>
                    <Link 
                      href="/services/facility-maintenance" 
                      className="block px-4 py-2.5 text-white hover:bg-neon-green/20 hover:text-neon-green transition-colors"
                    >
                      Facility Maintenance
                    </Link>
                    <Link 
                      href="/services/construction-special-projects" 
                      className="block px-4 py-2.5 text-white hover:bg-neon-green/20 hover:text-neon-green transition-colors"
                    >
                      Construction & Special Projects
                    </Link>
                    <Link 
                      href="/services/design-build-consulting" 
                      className="block px-4 py-2.5 text-white hover:bg-neon-green/20 hover:text-neon-green transition-colors"
                    >
                      Design-Build & Consulting
                    </Link>
                    <Link 
                      href="/services/energy-management-sustainability" 
                      className="block px-4 py-2.5 text-white hover:bg-neon-green/20 hover:text-neon-green transition-colors"
                    >
                      Energy Management & Sustainability
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                href="/vendors" 
                className="text-white hover:text-neon-green transition-colors"
              >
                Vendors
              </Link>
              <Link 
                href="/hds-console" 
                className="text-white hover:text-neon-green transition-colors"
              >
                HDS Console
              </Link>
              <a 
                href="https://cmms.hdsok.com/global/login" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-green hover:text-white transition-colors font-semibold"
              >
                Customer Login
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-surface/95 backdrop-blur-md border-t border-border-subtle mt-20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-neon-green font-bold text-lg mb-4 flex items-center gap-2">
                Contact Us
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-neon-green animate-[pulse-glow_2.4s_ease-in-out_infinite]" />
              </h3>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center gap-2 hover:text-neon-green transition-colors">
                  <span className="text-sm">📍</span>
                  <span>P.O. Box 890325</span>
                </p>
                <p className="flex items-center gap-2 hover:text-neon-green transition-colors ml-5">
                  Oklahoma City, OK 73189
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-sm">📧</span>
                  <a href="mailto:info@hdsok.com" className="hover:text-neon-green transition-colors">
                    info@hdsok.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-sm">📞</span>
                  <a href="tel:+14055462820" className="hover:text-neon-green transition-colors">
                    Call Office
                  </a>
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-neon-green font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-neon-green transition-colors flex items-center gap-2">
                    <span className="text-neon-green/60">›</span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-neon-green transition-colors flex items-center gap-2">
                    <span className="text-neon-green/60">›</span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-neon-green transition-colors flex items-center gap-2">
                    <span className="text-neon-green/60">›</span>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-neon-green transition-colors flex items-center gap-2">
                    <span className="text-neon-green/60">›</span>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/hds-console" className="text-gray-300 hover:text-neon-green transition-colors flex items-center gap-2">
                    <span className="text-neon-green/60">›</span>
                    HDS Console
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-neon-green font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/mechanical-refrigeration" className="text-gray-300 hover:text-neon-green transition-colors flex items-center gap-2">
                    <span className="text-neon-green/60">›</span>
                    Mechanical & Refrigeration
                  </Link>
                </li>
                <li>
                  <Link href="/services/facility-maintenance" className="text-gray-300 hover:text-neon-green transition-colors flex items-center gap-2">
                    <span className="text-neon-green/60">›</span>
                    Facility Maintenance
                  </Link>
                </li>
                <li>
                  <Link href="/services/construction-special-projects" className="text-gray-300 hover:text-neon-green transition-colors flex items-center gap-2">
                    <span className="text-neon-green/60">›</span>
                    Construction & Special Projects
                  </Link>
                </li>
                <li>
                  <Link href="/services/design-build-consulting" className="text-gray-300 hover:text-neon-green transition-colors flex items-center gap-2">
                    <span className="text-neon-green/60">›</span>
                    Design-Build & Consulting
                  </Link>
                </li>
                <li>
                  <Link href="/services/energy-management-sustainability" className="text-gray-300 hover:text-neon-green transition-colors flex items-center gap-2">
                    <span className="text-neon-green/60">›</span>
                    Energy Management
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="text-neon-green font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="text-gray-300 hover:text-neon-green transition-colors flex items-center gap-2">
                    <span className="text-neon-green/60">›</span>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-300 hover:text-neon-green transition-colors flex items-center gap-2">
                    <span className="text-neon-green/60">›</span>
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="text-gray-300 hover:text-neon-green transition-colors flex items-center gap-2">
                    <span className="text-neon-green/60">›</span>
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/acceptable-use" className="text-gray-300 hover:text-neon-green transition-colors flex items-center gap-2">
                    <span className="text-neon-green/60">›</span>
                    Acceptable Use
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="border-t border-neon-green/20 mt-8 pt-8">
            <div className="text-center mb-6">
              <p className="text-gray-400 mb-3">Accepting payments via Stripe. We accept:</p>
              <div className="flex justify-center">
                <PaymentIcons />
              </div>
            </div>
            
            {/* Energy Star Portfolio Manager */}
            <div className="text-center pt-6 border-t border-neon-green/10">
              <div className="flex justify-center items-center">
                <Image
                  src="/images/Works_with_PM_logo_White.webp"
                  alt="Works with Energy Star Portfolio Manager"
                  width={180}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-neon-green/20 pt-6 text-center text-gray-400 text-sm">
            <p className="mb-4 flex items-center justify-center gap-2">
              © 2025 HDS Tech (Homeland Development Services LLC). All rights reserved.
              <span className="inline-flex h-1 w-1 rounded-full bg-neon-green/40 animate-[pulse-glow_2.4s_ease-in-out_infinite]" />
            </p>
            <p className="max-w-4xl mx-auto text-xs leading-relaxed text-gray-500">
              This platform, including its UI/UX, data model, and source code, is proprietary 
              and protected by U.S. and international copyright and other intellectual property laws. 
              Unauthorized reproduction, distribution, or reverse engineering is strictly prohibited.
            </p>
          </div>
        </div>
      </footer>

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </>
  );
}
