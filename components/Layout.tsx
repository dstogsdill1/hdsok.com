'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Top CTA Bar */}
      <div className="bg-neon-green text-dark-bg py-2 px-4 text-center text-sm font-semibold">
        <div className="max-w-7xl mx-auto flex justify-center gap-6">
          <a href="tel:14057774156" className="hover:underline">
            📞 Call Live Agent: (405) 777-4156
          </a>
          <a 
            href="https://app.jotform.com/251983870494168" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline"
          >
            📋 Request Service
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-grey-nav border-b border-dark-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/hds_logo_lime_shadow_vibrant.png"
                alt="HDS Logo"
                width={60}
                height={60}
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
                  <div className="absolute top-full left-0 mt-2 w-64 bg-dark-card border border-neon-green rounded-lg shadow-lg py-2">
                    <Link 
                      href="/services" 
                      className="block px-4 py-2 text-white hover:bg-neon-green hover:text-dark-bg transition-colors"
                    >
                      All Services
                    </Link>
                    <Link 
                      href="/services/mechanical-refrigeration" 
                      className="block px-4 py-2 text-white hover:bg-neon-green hover:text-dark-bg transition-colors"
                    >
                      Mechanical & Refrigeration
                    </Link>
                    <Link 
                      href="/services/facility-maintenance" 
                      className="block px-4 py-2 text-white hover:bg-neon-green hover:text-dark-bg transition-colors"
                    >
                      Facility Maintenance
                    </Link>
                    <Link 
                      href="/services/construction-special-projects" 
                      className="block px-4 py-2 text-white hover:bg-neon-green hover:text-dark-bg transition-colors"
                    >
                      Construction & Special Projects
                    </Link>
                    <Link 
                      href="/services/design-build-consulting" 
                      className="block px-4 py-2 text-white hover:bg-neon-green hover:text-dark-bg transition-colors"
                    >
                      Design-Build & Consulting
                    </Link>
                    <Link 
                      href="/services/energy-management-sustainability" 
                      className="block px-4 py-2 text-white hover:bg-neon-green hover:text-dark-bg transition-colors"
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
      <footer className="bg-grey-nav border-t border-dark-border mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-neon-green font-bold text-lg mb-4">Contact Us</h3>
              <p className="text-white mb-2">P.O. Box 890325</p>
              <p className="text-white mb-2">Oklahoma City, OK 73189</p>
              <p className="text-white mb-2">
                <a href="mailto:info@hdsok.com" className="hover:text-neon-green">
                  info@hdsok.com
                </a>
              </p>
              <p className="text-white">
                <a href="tel:+14055462820" className="hover:text-neon-green">
                  +1 (405)-546-2820
                </a>
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-neon-green font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-white hover:text-neon-green">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white hover:text-neon-green">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-white hover:text-neon-green">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white hover:text-neon-green">
                    Contact
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://cmms.hdsok.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-neon-green"
                  >
                    CMMS Portal
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-neon-green font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/mechanical-refrigeration" className="text-white hover:text-neon-green">
                    Mechanical & Refrigeration
                  </Link>
                </li>
                <li>
                  <Link href="/services/facility-maintenance" className="text-white hover:text-neon-green">
                    Facility Maintenance
                  </Link>
                </li>
                <li>
                  <Link href="/services/construction-special-projects" className="text-white hover:text-neon-green">
                    Construction & Special Projects
                  </Link>
                </li>
                <li>
                  <Link href="/services/design-build-consulting" className="text-white hover:text-neon-green">
                    Design-Build & Consulting
                  </Link>
                </li>
                <li>
                  <Link href="/services/energy-management-sustainability" className="text-white hover:text-neon-green">
                    Energy Management
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-dark-border mt-8 pt-8 text-center text-white">
            <p>All Rights Reserved © HDS - 2025</p>
          </div>
        </div>
      </footer>
    </>
  );
}
