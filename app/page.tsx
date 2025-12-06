import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import DashboardCharts from '@/components/DashboardCharts';
import { HeroShowcase } from '@/components/HeroShowcase';
import TextHdsCard from '@/components/TextHdsCard';
import { Reveal } from '@/components/Reveal';
import { WorkflowTimeline } from '@/components/WorkflowTimeline';
import StatsCounter from '@/components/StatsCounter';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ProductShowcase from '@/components/ProductShowcase';

export const metadata: Metadata = {
  title: "Vendor Coordination & Facility Maintenance for Commercial Properties",
  description: "Homeland Development Services provides comprehensive vendor coordination, facility maintenance, HVAC, refrigeration, and CMMS dashboard solutions for grocery stores, retail centers, and multi-unit properties. 24/7 emergency service available.",
  keywords: [
    "vendor coordination",
    "facility maintenance",
    "commercial property maintenance",
    "CMMS dashboard",
    "grocery store maintenance",
    "retail maintenance",
    "HVAC services",
    "refrigeration services",
    "building maintenance Oklahoma",
    "property management services"
  ],
  openGraph: {
    title: "Homeland Development Services - Vendor Coordination & Facility Maintenance",
    description: "Complete maintenance solutions for commercial properties. Expert vendor coordination, facility management, and CMMS dashboard.",
    url: "https://www.hdsok.com",
    images: [
      {
        url: "https://www.hdsok.com/images/HDS_Logo_Inverted_HighRes.png",
        width: 1200,
        height: 630,
        alt: "HDS - Commercial Property Maintenance Solutions",
      },
    ],
  },
};

export default function Home() {
  return (
    <div>
      <HeroShowcase />

      {/* HDS LIVE vs HDS Services Explanation */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              One Company, Two Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding the HDS ecosystem—our platform and our people
            </p>
          </div>
          </Reveal>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* HDS LIVE Platform */}
            <Reveal>
            <div className="rounded-2xl border border-neon-blue/30 bg-surface/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-neon-blue/20 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">💻</span>
                <h3 className="text-2xl font-bold text-neon-blue">HDS LIVE</h3>
              </div>
              <p className="text-lg font-semibold text-white mb-4">Our Platform</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">•</span>
                  <span>Cloud-based CMMS & work order system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">•</span>
                  <span>Real-time analytics & energy tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">•</span>
                  <span>Multi-property portfolio management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">•</span>
                  <span>Vendor coordination & dispatch</span>
                </li>
              </ul>
            </div>
            </Reveal>

            {/* HDS Services */}
            <Reveal delay={0.1}>
            <div className="rounded-2xl border border-neon-green/30 bg-surface/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-neon-green/20 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🛠️</span>
                <h3 className="text-2xl font-bold text-neon-green">HDS Services</h3>
              </div>
              <p className="text-lg font-semibold text-white mb-4">Our Team</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-neon-green mt-1">•</span>
                  <span>Vendor management & coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-green mt-1">•</span>
                  <span>24/7 dispatch & emergency response</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-green mt-1">•</span>
                  <span>Licensed contractor network nationwide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-green mt-1">•</span>
                  <span>Project management & consulting</span>
                </li>
              </ul>
            </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-lg">
              <span className="text-neon-blue font-semibold">HDS LIVE</span> powers the technology. <span className="text-neon-green font-semibold">HDS Services</span> delivers the expertise.
            </p>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Your Facility Partner - Simplified */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal>
          <div className="rounded-2xl border border-border-subtle bg-surface/50 backdrop-blur-sm p-10 shadow-xl">
            <h2 className="text-4xl font-bold text-white mb-8">
              Your Facility Partner
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-neon-green mb-4">What We Do</h3>
                <ul className="space-y-3 text-gray-300 text-lg leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-neon-green mt-1">✓</span>
                    <span>Coordinate licensed vendors nationwide</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neon-green mt-1">✓</span>
                    <span>24/7 emergency dispatch & response</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neon-green mt-1">✓</span>
                    <span>Preventive maintenance programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neon-green mt-1">✓</span>
                    <span>Energy upgrades & sustainability</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-neon-green mb-4">How It Works</h3>
                <ul className="space-y-3 text-gray-300 text-lg leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-neon-green mt-1">1.</span>
                    <span>Submit request via phone, web, or app</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neon-green mt-1">2.</span>
                    <span>We dispatch the right vendor instantly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neon-green mt-1">3.</span>
                    <span>Track progress in real-time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neon-green mt-1">4.</span>
                    <span>Receive consolidated invoicing</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center pt-6 border-t border-border-subtle">
              <p className="text-xl text-gray-300 mb-6">
                Focus on your business while we handle your facilities
              </p>
              <Link 
                href="/contact"
                className="inline-block bg-neon-green text-base px-8 py-3 rounded-lg font-semibold hover:bg-neon-green/90 transition-all shadow-lg"
              >
                Get Started Today
              </Link>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      <WorkflowTimeline />

      {/* HDS Console Platform Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal>
          <h2 className="text-4xl font-bold text-white mb-4 text-center">
            HDS Console: Portfolio Management
          </h2>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            Real-time visibility and control across all your properties
          </p>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* All Sites, One View */}
            <Reveal>
            <div className="relative overflow-hidden rounded-xl border border-border-subtle bg-surface/80 backdrop-blur-sm p-6 shadow-lg hover:shadow-neon-green/10 hover:border-neon-green/30 transition-all">
              <div className="text-3xl mb-3">
                <span className="inline-block animate-[float_6s_ease-in-out_infinite]">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">All Sites, One View</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Multi-tenant portfolio management across locations
              </p>
            </div>
            </Reveal>

            {/* Fast Dispatch */}
            <Reveal delay={0.05}>
            <div className="relative overflow-hidden rounded-xl border border-border-subtle bg-surface/80 backdrop-blur-sm p-6 shadow-lg hover:shadow-neon-green/10 hover:border-neon-green/30 transition-all">
              <div className="text-3xl mb-3">
                <span className="inline-block animate-[pulse-glow_2.4s_ease-in-out_infinite]">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Fast Dispatch</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Issue to vendor in seconds with automated routing
              </p>
            </div>
            </Reveal>

            {/* Live Cost Tracking */}
            <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-xl border border-border-subtle bg-surface/80 backdrop-blur-sm p-6 shadow-lg hover:shadow-neon-green/10 hover:border-neon-green/30 transition-all">
              <div className="text-3xl mb-3">
                <span className="inline-block animate-[float_7s_ease-in-out_infinite]">💰</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Live Cost Tracking</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Real-time spend per site, region, and vendor
              </p>
            </div>
            </Reveal>

            {/* Energy Analytics */}
            <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-xl border border-border-subtle bg-surface/80 backdrop-blur-sm p-6 shadow-lg hover:shadow-neon-green/10 hover:border-neon-green/30 transition-all">
              <div className="text-3xl mb-3">
                <span className="inline-block animate-[pulse-glow_3s_ease-in-out_infinite]">📊</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Energy Analytics</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Track kWh/ft² and energy cost across properties
              </p>
            </div>
            </Reveal>

            {/* Maintenance per ft² */}
            <Reveal delay={0.2}>
            <div className="relative overflow-hidden rounded-xl border border-border-subtle bg-surface/80 backdrop-blur-sm p-6 shadow-lg hover:shadow-neon-green/10 hover:border-neon-green/30 transition-all">
              <div className="text-3xl mb-3">
                <span className="inline-block animate-[float_5.5s_ease-in-out_infinite]">📐</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cost per ft²</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Compare maintenance spend by site and region
              </p>
            </div>
            </Reveal>

            {/* Smart Assets */}
            <Reveal delay={0.25}>
            <div className="relative overflow-hidden rounded-xl border border-border-subtle bg-surface/80 backdrop-blur-sm p-6 shadow-lg hover:shadow-neon-green/10 hover:border-neon-green/30 transition-all">
              <div className="text-3xl mb-3">
                <span className="inline-block animate-[float_6.4s_ease-in-out_infinite]">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Smart Assets</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Auto maintenance triggers—no manual logs
              </p>
            </div>
            </Reveal>

            {/* Vendor Insights */}
            <Reveal delay={0.3}>
            <div className="relative overflow-hidden rounded-xl border border-border-subtle bg-surface/80 backdrop-blur-sm p-6 shadow-lg hover:shadow-neon-green/10 hover:border-neon-green/30 transition-all">
              <div className="text-3xl mb-3">
                <span className="inline-block animate-[pulse-glow_2.8s_ease-in-out_infinite]">💡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Vendor Insights</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Performance metrics updated automatically
              </p>
            </div>
            </Reveal>

            {/* Predictive Data */}
            <div className="relative overflow-hidden rounded-xl border border-border-subtle bg-surface/80 backdrop-blur-sm p-6 shadow-lg hover:shadow-neon-green/10 hover:border-neon-green/30 transition-all">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">Predictive Alerts</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Spot anomalies before they escalate
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/hds-console"
              className="inline-block bg-neon-green text-base px-8 py-3 rounded-lg font-semibold hover:bg-neon-green/90 transition-all shadow-lg"
            >
              Explore HDS Console
            </Link>
          </div>
        </div>
      </section>

      {/* Product Showcase with Interactive Demo */}
      <ProductShowcase />

      {/* Your Work Orders—Live and In Detail */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal>
          <h2 className="text-4xl font-bold text-white mb-4 text-center">
            Work Orders—Live and In Detail
          </h2>
          <p className="text-lg text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            Track every request from submission to completion in one centralized dashboard
          </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Reveal>
            <div className="text-gray-300 space-y-6">
              <div className="space-y-4 leading-relaxed">
                <p className="text-lg">
                  Property managers, tenants, and staff can submit work orders via:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-neon-green mt-1">•</span>
                    <span>Web portal or mobile app</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-green mt-1">•</span>
                    <span>24/7 call center</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-green mt-1">•</span>
                    <span>Email or text message</span>
                  </li>
                </ul>
                <p className="text-lg">
                  Updates from vendors flow into a single dashboard with real-time visibility. 
                  Built-in communication tools eliminate duplicate calls.
                </p>
              </div>
              <Link 
                href="/hds-console"
                className="inline-block border-2 border-neon-green text-neon-green px-6 py-3 rounded-lg font-semibold hover:bg-neon-green hover:text-base transition-all mt-4"
              >
                Learn More About HDS Console
              </Link>
            </div>
            </Reveal>
            <Reveal delay={0.1}>
            <DashboardCharts variant="work-orders" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Need Service? Get Help Your Way */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">
            Get Help Your Way
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto text-lg leading-relaxed">
            Choose the method that matches your urgency—our tools are built for property 
            managers, tenants, and staff
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Call Live Agent */}
            <div className="rounded-xl border border-border-subtle bg-surface/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-neon-green/10 hover:border-neon-green/30 transition-all">
              <h3 className="text-2xl font-bold text-neon-green mb-4 flex items-center gap-3">
                <span>📞</span> Call Live Agent
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                For urgent issues, call our 24/7 dispatch line. We'll route to the right vendor immediately.
              </p>
              <a 
                href="tel:14057774156"
                className="inline-block border-2 border-neon-green text-neon-green px-6 py-2.5 rounded-lg font-semibold hover:bg-neon-green hover:text-base transition-all"
              >
                Call Now
              </a>
            </div>

            {/* Service Request */}
            <div className="rounded-xl border border-border-subtle bg-surface/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-neon-green/10 hover:border-neon-green/30 transition-all">
              <h3 className="text-2xl font-bold text-neon-green mb-4 flex items-center gap-3">
                <span>📋</span> Service Request
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                For routine work, use our online form. Work orders are created and assigned automatically.
              </p>
              <a 
                href="https://www.hds.live/service-request"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-neon-green text-neon-green px-6 py-2.5 rounded-lg font-semibold hover:bg-neon-green hover:text-base transition-all"
              >
                Submit Request
              </a>
            </div>

            {/* Text HDS Team */}
            <TextHdsCard />

            {/* Console or App */}
            <div className="rounded-xl border border-border-subtle bg-surface/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-neon-green/10 hover:border-neon-green/30 transition-all">
              <h3 className="text-2xl font-bold text-neon-green mb-4 flex items-center gap-3">
                <span>💻</span> Use HDS Console
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Access your dashboard for work orders, analytics, and real-time property updates.
              </p>
              <Link 
                href="/hds-console"
                className="inline-block border-2 border-neon-green text-neon-green px-6 py-2.5 rounded-lg font-semibold hover:bg-neon-green hover:text-base transition-all"
              >
                Access Console
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HDS Service Suite */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">
            HDS Service Suite
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto text-lg leading-relaxed">
            From emergency repairs to turnkey build-outs—we coordinate licensed vendors 
            so you can focus on your business
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mechanical & Refrigeration */}
            <Link href="/services/mechanical-refrigeration" className="group">
              <div className="rounded-xl border border-border-subtle bg-surface/80 backdrop-blur-sm p-6 h-full shadow-lg hover:shadow-neon-green/20 hover:border-neon-green/40 transition-all">
                <h3 className="text-2xl font-bold text-neon-green mb-4">
                  Mechanical & Refrigeration
                </h3>
                <ul className="text-gray-300 space-y-2 leading-relaxed">
                  <li>• 24/7 HVAC & refrigeration</li>
                  <li>• Racks, RTUs & chillers</li>
                  <li>• Energy management projects</li>
                  <li>• Leak detection & EMS</li>
                </ul>
              </div>
            </Link>

            {/* Facility Maintenance */}
            <Link href="/services/facility-maintenance" className="group">
              <div className="rounded-xl border border-border-subtle bg-surface/80 backdrop-blur-sm p-6 h-full shadow-lg hover:shadow-neon-green/20 hover:border-neon-green/40 transition-all">
                <h3 className="text-2xl font-bold text-neon-green mb-4">
                  Facility Maintenance
                </h3>
                <ul className="text-gray-300 space-y-2 leading-relaxed">
                  <li>• Plumbing & electrical</li>
                  <li>• Roofing & structural</li>
                  <li>• Lighting & signage</li>
                  <li>• Parking lot & grounds</li>
                </ul>
              </div>
            </Link>

            {/* Construction & Projects */}
            <Link href="/services/construction-special-projects" className="group">
              <div className="rounded-xl border border-border-subtle bg-surface/80 backdrop-blur-sm p-6 h-full shadow-lg hover:shadow-neon-green/20 hover:border-neon-green/40 transition-all">
                <h3 className="text-2xl font-bold text-neon-green mb-4">
                  Construction & Projects
                </h3>
                <ul className="text-gray-300 space-y-2 leading-relaxed">
                  <li>• Store remodels</li>
                  <li>• New construction</li>
                  <li>• Multi-site rollouts</li>
                  <li>• Turnkey project management</li>
                </ul>
              </div>
            </Link>

            {/* Design-Build */}
            <Link href="/services/design-build" className="group">
              <div className="rounded-xl border border-border-subtle bg-surface/80 backdrop-blur-sm p-6 h-full shadow-lg hover:shadow-neon-green/20 hover:border-neon-green/40 transition-all">
                <h3 className="text-2xl font-bold text-neon-green mb-4">
                  Design-Build
                </h3>
                <ul className="text-gray-300 space-y-2 leading-relaxed">
                  <li>• Mechanical design</li>
                  <li>• Energy code compliance</li>
                  <li>• Engineering consulting</li>
                  <li>• Permit coordination</li>
                </ul>
              </div>
            </Link>

            {/* Energy Management */}
            <Link href="/services/energy-management-sustainability" className="group">
              <div className="rounded-xl border border-border-subtle bg-surface/80 backdrop-blur-sm p-6 h-full shadow-lg hover:shadow-neon-green/20 hover:border-neon-green/40 transition-all">
                <h3 className="text-2xl font-bold text-neon-green mb-4">
                  Energy Management
                </h3>
                <ul className="text-gray-300 space-y-2 leading-relaxed">
                  <li>• Energy audits & analysis</li>
                  <li>• Utility bill monitoring</li>
                  <li>• LED & HVAC upgrades</li>
                  <li>• Sustainability programs</li>
                </ul>
              </div>
            </Link>

            {/* Vendor Management */}
            <div className="rounded-xl border border-border-subtle bg-surface/80 backdrop-blur-sm p-6 h-full shadow-lg hover:shadow-neon-green/20 hover:border-neon-green/40 transition-all">
              <h3 className="text-2xl font-bold text-neon-green mb-4">
                Vendor Management
              </h3>
              <ul className="text-gray-300 space-y-2 leading-relaxed">
                <li>• Nationwide contractor network</li>
                <li>• Vendor vetting & compliance</li>
                <li>• Work order dispatch</li>
                <li>• Quality assurance</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/services"
              className="inline-block bg-neon-green text-base px-8 py-3 rounded-lg font-semibold hover:bg-neon-green/90 transition-all shadow-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Simplify Your Facility Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how HDS can support your properties
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link 
              href="/contact"
              className="inline-block bg-neon-green text-base px-8 py-3 rounded-lg font-semibold hover:bg-neon-green/90 transition-all shadow-lg"
            >
              Contact Us
            </Link>
            <a 
              href="tel:14057774156"
              className="inline-block border-2 border-neon-green text-neon-green px-8 py-3 rounded-lg font-semibold hover:bg-neon-green hover:text-base transition-all"
            >
              Call Now
            </a>
          </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
