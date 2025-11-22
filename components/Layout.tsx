'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Top CTA Bar */}
      <div className="bg-gradient-to-r from-neon-green via-emerald-400 to-neon-green text-dark-bg py-2.5 px-4 text-center text-sm font-semibold shadow-[0_4px_20px_rgba(52,211,153,0.3)]">
        <div className="max-w-7xl mx-auto flex justify-center gap-6">
          <a href="tel:14057774156" className="hover:text-white transition-colors flex items-center gap-2">
            <span className="animate-[pulse-glow_2.4s_ease-in-out_infinite]">📞</span>
            Call Live Agent
          </a>
          <a 
            href="https://app.jotform.com/251983870494168" 
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
      <nav className="bg-dark-bg/95 backdrop-blur-md border-b border-neon-green/20 sticky top-0 z-50 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
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
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
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
                  <div className="absolute top-full left-0 mt-2 w-64 bg-dark-card/95 backdrop-blur-md border border-neon-green/40 rounded-xl shadow-[0_18px_48px_rgba(0,0,0,0.8)] py-2">
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
      <footer className="bg-dark-bg/95 backdrop-blur-md border-t border-neon-green/20 mt-20 shadow-[0_-8px_32px_rgba(0,0,0,0.4)]">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </div>

          {/* Payment Methods */}
          <div className="border-t border-neon-green/20 mt-8 pt-8">
            <div className="text-center mb-6">
              <p className="text-gray-400 mb-3">Accepting payments via Stripe. We accept:</p>
              <div className="flex justify-center items-center gap-6 flex-wrap text-gray-400 text-sm">
                <div className="flex items-center gap-2 hover:text-neon-green transition-colors">
                  <span className="text-xl">💳</span>
                  <span>VISA</span>
                </div>
                <div className="flex items-center gap-2 hover:text-neon-green transition-colors">
                  <span className="text-xl">💳</span>
                  <span>Mastercard</span>
                </div>
                <div className="flex items-center gap-2 hover:text-neon-green transition-colors">
                  <span className="text-xl">💳</span>
                  <span>AMEX</span>
                </div>
                <div className="flex items-center gap-2 hover:text-neon-green transition-colors">
                  <span className="text-xl">💳</span>
                  <span>DISCOVER</span>
                </div>
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
    </>
  );
}
