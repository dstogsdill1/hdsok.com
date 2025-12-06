import Link from 'next/link';
import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: "Commercial Maintenance Services - HVAC, Refrigeration & Facility Management",
  description: "Complete commercial maintenance services including HVAC, refrigeration, facility maintenance, construction projects, energy management, and design-build consulting for retail and commercial properties.",
  keywords: [
    "commercial maintenance services",
    "HVAC services",
    "refrigeration services",
    "facility maintenance",
    "construction projects",
    "energy management",
    "preventive maintenance",
    "emergency repairs",
    "commercial property services"
  ],
  openGraph: {
    title: "HDS Service Suite - Complete Commercial Maintenance Solutions",
    description: "From HVAC and refrigeration to facility maintenance and construction projects. Full-service commercial property maintenance.",
    url: "https://www.hdsok.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-dark-bg via-grey-nav to-dark-bg py-20 px-4">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-neon-green/20 blur-3xl" />
          <div className="absolute right-[-6rem] bottom-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="absolute inset-x-10 top-32 h-px bg-gradient-to-r from-transparent via-neon-green/40 to-transparent" />
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <Reveal>
            <p className="inline-flex items-center rounded-full border border-neon-green/40 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neon-green mb-4">
              Services
              <span className="ml-2 inline-flex h-1.5 w-1.5 rounded-full bg-neon-green animate-[pulse-glow_2.4s_ease-in-out_infinite]" />
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              HDS Service Suite
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
              From blitz repairs to turnkey build‑outs, HDS keeps your refrigeration, HVAC and
              facilities running—so you stay focused on tenants and customers rather than
              contractors.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Mechanical & Refrigeration */}
          <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-8 transition-all">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-neon-green/10 via-transparent to-emerald-500/10" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-neon-green mb-4 flex items-center gap-2">
                <span className="animate-[pulse-glow_2.4s_ease-in-out_infinite]">❄️</span>
                Mechanical & Refrigeration
              </h2>
              <p className="text-gray-100 mb-6">
                Keep your HVAC and refrigeration systems running at peak efficiency with our 24/7 
                mechanical services. Our certified technicians handle everything from routine 
                maintenance to emergency repairs across racks, RTUs, chillers, and walk-in coolers.
              </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Services Include:</h3>
                <ul className="text-gray-100 space-y-2">
                  <li>• 24/7 emergency repairs for racks, RTUs & chillers</li>
                  <li>• Preventive maintenance programs</li>
                  <li>• Energy management projects</li>
                  <li>• Leak detection and repair</li>
                  <li>• EMS optimization and fixes</li>
                  <li>• Refrigerant management and compliance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Benefits:</h3>
                <ul className="text-gray-100 space-y-2">
                  <li>• Reduced energy costs</li>
                  <li>• Extended equipment lifespan</li>
                  <li>• Minimized downtime</li>
                  <li>• Regulatory compliance</li>
                  <li>• Real-time monitoring and alerts</li>
                </ul>
              </div>
            </div>
            <Link 
              href="/contact"
              className="inline-block mt-6 border-2 border-neon-green text-neon-green px-6 py-3 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
            >
              Request Service
            </Link>
            </div>
          </div>
          </Reveal>

          {/* Facility Maintenance */}
          <Reveal delay={0.05}>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-8 transition-all">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-emerald-400/10 via-transparent to-neon-green/10" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-neon-green mb-4 flex items-center gap-2">
                <span className="animate-[float_6s_ease-in-out_infinite]">🏢</span>
                Facility Maintenance
              </h2>
            <p className="text-gray-100 mb-6">
              Comprehensive facility maintenance solutions that keep your properties in top condition. 
              From daily upkeep to specialized services, we handle all aspects of building maintenance 
              so you can focus on your business operations.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Services Include:</h3>
                <ul className="text-gray-100 space-y-2">
                  <li>• Full-store upkeep and maintenance</li>
                  <li>• Preventive maintenance programs</li>
                  <li>• Reactive maintenance and repairs</li>
                  <li>• 24-hour dispatch service</li>
                  <li>• Groundskeeping and landscaping</li>
                  <li>• Janitorial services</li>
                  <li>• Parking lot maintenance</li>
                  <li>• Snow and ice removal</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Property Types:</h3>
                <ul className="text-gray-100 space-y-2">
                  <li>• Grocery stores</li>
                  <li>• Retail centers</li>
                  <li>• Multi-unit properties</li>
                  <li>• Office buildings</li>
                  <li>• Restaurants and cafés</li>
                  <li>• Fitness centers</li>
                </ul>
              </div>
            </div>
            <Link 
              href="/contact"
              className="inline-block mt-6 border-2 border-neon-green text-neon-green px-6 py-3 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
            >
              Request Service
            </Link>
            </div>
          </div>
          </Reveal>

          {/* Construction & Special Projects */}
          <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-8 transition-all">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-teal-400/10 via-transparent to-neon-green/5" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-neon-green mb-4 flex items-center gap-2">
                <span className="animate-[pulse-glow_2.6s_ease-in-out_infinite]">🏗️</span>
                Construction & Special Projects
              </h2>
            <p className="text-gray-100 mb-6">
              From ground-up construction to major renovations, our project management team delivers 
              turnkey solutions for your commercial property needs. We handle every phase from planning 
              to completion, ensuring quality workmanship and on-time delivery.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Services Include:</h3>
                <ul className="text-gray-100 space-y-2">
                  <li>• Ground-up builds and new construction</li>
                  <li>• Store remodels and renovations</li>
                  <li>• Multi-location roll-outs</li>
                  <li>• Equipment upgrades and installation</li>
                  <li>• Tenant improvements</li>
                  <li>• Retrofit projects</li>
                  <li>• ADA compliance upgrades</li>
                  <li>• Emergency restoration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Our Approach:</h3>
                <ul className="text-gray-100 space-y-2">
                  <li>• Detailed project planning</li>
                  <li>• Budget management</li>
                  <li>• Schedule coordination</li>
                  <li>• Quality control</li>
                  <li>• Safety compliance</li>
                  <li>• Vendor management</li>
                  <li>• Regular progress updates</li>
                </ul>
              </div>
            </div>
            <Link 
              href="/contact"
              className="inline-block mt-6 border-2 border-neon-green text-neon-green px-6 py-3 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
            >
              Discuss Your Project
            </Link>
            </div>
          </div>
          </Reveal>

          {/* Design-Build & Consulting */}
          <Reveal delay={0.15}>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-8 transition-all">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-purple-500/15 via-transparent to-neon-green/5" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-neon-green mb-4 flex items-center gap-2">
                <span className="animate-[float_5.5s_ease-in-out_infinite]">📐</span>
                Design‑Build & Consulting
              </h2>
            <p className="text-gray-100 mb-6">
              Expert consulting and design-build services that take your project from initial concept 
              to grand opening. Our team provides comprehensive guidance on design, engineering, 
              compliance, and implementation to ensure your project&apos;s success.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Services Include:</h3>
                <ul className="text-gray-100 space-y-2">
                  <li>• Concept-to-ribbon-cutting project delivery</li>
                  <li>• Energy code expertise and compliance</li>
                  <li>• Project feasibility studies</li>
                  <li>• Engineering and design services</li>
                  <li>• Permit acquisition and management</li>
                  <li>• Building code compliance</li>
                  <li>• Value engineering</li>
                  <li>• Cost estimation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Expertise Areas:</h3>
                <ul className="text-gray-100 space-y-2">
                  <li>• HVAC and mechanical systems</li>
                  <li>• Refrigeration design</li>
                  <li>• Energy management</li>
                  <li>• Building automation</li>
                  <li>• Electrical systems</li>
                  <li>• Plumbing and fire protection</li>
                  <li>• Architectural coordination</li>
                </ul>
              </div>
            </div>
            <Link 
              href="/contact"
              className="inline-block mt-6 border-2 border-neon-green text-neon-green px-6 py-3 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
            >
              Schedule Consultation
            </Link>
            </div>
          </div>
          </Reveal>

          {/* Energy & Lighting Management */}
          <Reveal delay={0.2}>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-8 transition-all">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-amber-400/15 via-transparent to-neon-green/10" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-neon-green mb-4 flex items-center gap-2">
                <span className="animate-[pulse-glow_2.8s_ease-in-out_infinite]">⚡</span>
                Energy & Lighting Management
              </h2>
            <p className="text-gray-100 mb-6">
              Reduce operating costs with our comprehensive energy and lighting management services. 
              We help you optimize electrical systems, access utility incentives, and implement 
              energy-efficient lighting solutions across your property portfolio.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Services Include:</h3>
                <ul className="text-gray-100 space-y-2">
                  <li>• Energy optimization and analysis</li>
                  <li>• Electrical system audits</li>
                  <li>• Utility incentive program management</li>
                  <li>• LED lighting retrofits and upgrades</li>
                  <li>• Lighting controls and automation</li>
                  <li>• Power quality monitoring</li>
                  <li>• Energy usage tracking (EUI)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Benefits:</h3>
                <ul className="text-gray-100 space-y-2">
                  <li>• Lower electricity bills</li>
                  <li>• Reduced energy consumption</li>
                  <li>• Access to rebates and incentives</li>
                  <li>• Improved lighting quality</li>
                  <li>• Enhanced property value</li>
                  <li>• Regulatory compliance</li>
                  <li>• Real-time energy monitoring</li>
                </ul>
              </div>
            </div>
            <Link 
              href="/contact"
              className="inline-block mt-6 border-2 border-neon-green text-neon-green px-6 py-3 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
            >
              Start Saving Energy
            </Link>
            </div>
          </div>
          </Reveal>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience the HDS Difference?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Let&apos;s discuss how our comprehensive service suite can support your business.
            </p>
          </Reveal>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link 
              href="/contact"
              className="bg-neon-green text-dark-bg px-8 py-3 rounded-lg font-semibold hover:bg-neon-green-dark transition-colors"
            >
              Schedule a Consultation
            </Link>
            <a 
              href="tel:14057774156"
              className="border-2 border-neon-green text-neon-green px-8 py-3 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
