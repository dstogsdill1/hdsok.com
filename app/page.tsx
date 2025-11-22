import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import DashboardCharts from '@/components/DashboardCharts';
import { HeroShowcase } from '@/components/HeroShowcase';
import { Reveal } from '@/components/Reveal';
import { WorkflowTimeline } from '@/components/WorkflowTimeline';

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

      {/* Your Small Business Facility Partner */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
            <h2 className="text-4xl font-bold text-white mb-6">
              Your Small Business Facility Partner
            </h2>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                Running a small business leaves little time for maintenance headaches. Homeland
                Development Services steps in as your trusted partner, keeping your building and
                equipment in top shape so you can concentrate on customers and growth. From
                emergency repairs to preventive maintenance, our team handles everything behind the
                scenes. That means no more vendor juggling, late-night calls or surprise
                breakdowns—just a smooth, comfortable space for your staff and patrons.
              </p>
              <p>
                As a small business owner you wear many hats. HDS helps you take off the
                facilities cap. We become an extension of your team, ready around the clock to solve
                issues and plan ahead. Whether you manage a café, boutique, gym or office, we take
                the stress out of maintenance.
              </p>
              <p>
                Our process starts when you tell us about your property and priorities. We
                design a tailored plan to match your hours and budget, then provide one point of
                contact who coordinates all work. When you need a repair, use our phone line, online
                form or text option to submit a request. You&apos;ll see real‑time updates on each
                job and receive a single, easy‑to‑read invoice for everything.
              </p>
              <p>
                Beyond day‑to‑day fixes, we offer upgrades and projects that improve your space
                and reduce operating costs. Our licensed technicians handle HVAC and
                refrigeration, electrical work, plumbing, remodeling and energy upgrades. We can also
                advise on design and compliance to keep your business in line with codes and
                regulations.
              </p>
              <p className="font-semibold text-neon-green">
                Ready to reclaim your time? Talk to us today to learn how HDS can take care of
                your facilities so you can take care of your customers.
              </p>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      <WorkflowTimeline />

      {/* HDS Console Platform Features */}
      <section className="py-16 px-4 bg-dark-bg">
        <div className="max-w-6xl mx-auto">
          <Reveal>
          <h2 className="text-4xl font-bold text-white mb-6 text-center">
            HDS Console: Global Portfolio Management
          </h2>
          <p className="text-xl text-gray-300 mb-8 text-center max-w-3xl mx-auto">
            Powering facility management across Europe, Central Asia, and the Americas with 
            real-time visibility and control.
          </p>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* All Sites, One View */}
            <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-neon-green/10 via-transparent to-emerald-500/10" />
              <div className="relative text-3xl mb-3">
                <span className="inline-block animate-[float_6s_ease-in-out_infinite]">🏢</span>
              </div>
              <h3 className="relative text-xl font-bold text-white mb-3">All Sites, One View</h3>
              <p className="relative text-gray-300 text-sm">
                Multi-tenant, multi-brand portfolio management across all your locations
              </p>
            </div>
            </Reveal>

            {/* Fast Dispatch */}
            <Reveal delay={0.05}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-amber-400/10 via-transparent to-neon-green/10" />
              <div className="relative text-3xl mb-3">
                <span className="inline-block animate-[pulse-glow_2.4s_ease-in-out_infinite]">⚡</span>
              </div>
              <h3 className="relative text-xl font-bold text-white mb-3">Fast Dispatch</h3>
              <p className="relative text-gray-300 text-sm">
                Issue to vendor notification in seconds with automated routing
              </p>
            </div>
            </Reveal>

            {/* Live Cost Tracking */}
            <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-emerald-400/10 via-transparent to-neon-green/10" />
              <div className="relative text-3xl mb-3">
                <span className="inline-block animate-[float_7s_ease-in-out_infinite]">💰</span>
              </div>
              <h3 className="relative text-xl font-bold text-white mb-3">Live Cost Tracking</h3>
              <p className="relative text-gray-300 text-sm">
                Real-time spend per site, region, and vendor with detailed analytics
              </p>
            </div>
            </Reveal>

            {/* Energy Analytics */}
            <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-purple-500/10 via-transparent to-neon-green/5" />
              <div className="relative text-3xl mb-3">
                <span className="inline-block animate-[pulse-glow_3s_ease-in-out_infinite]">⚡</span>
              </div>
              <h3 className="relative text-xl font-bold text-white mb-3">Energy Analytics</h3>
              <p className="relative text-gray-300 text-sm">
                Track EUI (kWh/ft²) and energy cost per square foot across properties
              </p>
            </div>
            </Reveal>

            {/* Maintenance per ft² */}
            <Reveal delay={0.2}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-sky-400/10 via-transparent to-neon-green/10" />
              <div className="relative text-3xl mb-3">
                <span className="inline-block animate-[float_5.5s_ease-in-out_infinite]">📐</span>
              </div>
              <h3 className="relative text-xl font-bold text-white mb-3">Maintenance per ft²</h3>
              <p className="relative text-gray-300 text-sm">
                Compare maintenance spend per square foot by site and region
              </p>
            </div>
            </Reveal>

            {/* Smart Assets */}
            <Reveal delay={0.25}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-teal-400/10 via-transparent to-neon-green/10" />
              <div className="relative text-3xl mb-3">
                <span className="inline-block animate-[float_6.4s_ease-in-out_infinite]">🔧</span>
              </div>
              <h3 className="relative text-xl font-bold text-white mb-3">Smart Assets</h3>
              <p className="relative text-gray-300 text-sm">
                Auto maintenance triggers with no manual logs required
              </p>
            </div>
            </Reveal>

            {/* Vendor Insights */}
            <Reveal delay={0.3}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-orange-400/10 via-transparent to-amber-400/10" />
              <div className="relative text-3xl mb-3">
                <span className="inline-block animate-[pulse-glow_2.8s_ease-in-out_infinite]">💡</span>
              </div>
              <h3 className="relative text-xl font-bold text-white mb-3">Vendor Insights</h3>
              <p className="relative text-gray-300 text-sm">
                Performance metrics updated automatically for all contractors
              </p>
            </div>
            </Reveal>

            {/* Predictive Data */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-neon-green/10 via-transparent to-emerald-500/10" />
              <div className="relative text-3xl mb-3">📈</div>
              <h3 className="relative text-xl font-bold text-white mb-3">Predictive Data</h3>
              <p className="relative text-gray-300 text-sm">
                Spot energy & cost anomalies before they spiral out of control
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/hds-console"
              className="inline-block bg-neon-green text-dark-bg px-8 py-3 rounded-lg font-semibold hover:bg-neon-green-dark transition-colors"
            >
              Explore HDS Console Platform
            </Link>
          </div>
        </div>
      </section>

      {/* Your Work Orders—Live and In Detail */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal>
          <h2 className="text-4xl font-bold text-white mb-6 text-center">
            Your Work Orders—Live and In Detail
          </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Reveal>
            <div className="text-gray-300 space-y-4">
              <p>
                Centralize every maintenance request from submission to completion. Property
                managers, tenants and staff can submit work orders via web, mobile app or 24/7 call
                centre. Updates from vendors and technicians flow into a single dashboard,
                giving you real‑time visibility across grocery, retail and multi‑unit properties.
              </p>
              <p>
                Assign tasks, set priorities and track status changes in one place. Built‑in chat
                and communication tools plus live dispatch support eliminate duplicate calls.
              </p>
              <Link 
                href="/hds-console"
                className="inline-block border-2 border-neon-green text-neon-green px-6 py-3 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors mt-4"
              >
                Learn More About HDS Console
              </Link>
            </div>
            </Reveal>
            <Reveal delay={0.1}>
            <DashboardCharts />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Need Service? Get Help Your Way */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">
            Need Service? Get Help Your Way
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Requesting service is easy. Choose the option that matches the urgency of your 
            situation—our tools are built for property managers, tenants and staff across 
            grocery, retail and multi‑unit properties.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Call Live Agent */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] transition-all">
              <h3 className="text-2xl font-bold text-neon-green mb-4">📞 Call Live Agent</h3>
              <p className="text-gray-300 mb-4">
                For urgent issues, call our 24/7 dispatch line. Provide the property name, 
                issue type and callback number—our live dispatcher will follow your triage 
                rules and send the right vendor.
              </p>
              <a 
                href="tel:14057774156"
                className="inline-block border-2 border-neon-green text-neon-green px-6 py-2 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
              >
                Call Us
              </a>
            </div>

            {/* Service Request */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] transition-all">
              <h3 className="text-2xl font-bold text-neon-green mb-4">📋 Service Request</h3>
              <p className="text-gray-300 mb-4">
                For routine or planned work, use our online form or your branded app. Enter the
                property, equipment and issue details—and attach photos if needed. A work order
                is created automatically, assigned to the right vendor and updated in real time.
              </p>
              <a 
                href="https://www.hds.live/service-request"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-neon-green text-neon-green px-6 py-2 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
              >
                Submit Request
              </a>
            </div>

            {/* Text HDS Team */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] transition-all">
              <h3 className="text-2xl font-bold text-neon-green mb-4">💬 Text HDS Team</h3>
              <p className="text-gray-300 mb-4">
                Use texting for urgent escalations or follow‑ups after a work order has been 
                placed. Include your name, property and callback number.
              </p>
              <a 
                href="sms:14057774156"
                className="inline-block border-2 border-neon-green text-neon-green px-6 py-2 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
              >
                Text Us
              </a>
            </div>

            {/* Chat or Use Our App */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] transition-all">
              <h3 className="text-2xl font-bold text-neon-green mb-4">💻 Chat or Use Our App</h3>
              <p className="text-gray-300 mb-4">
                Use our app or chat for urgent escalations or follow‑ups after a work order 
                has been placed. Include your name, property and callback number.
              </p>
              <Link 
                href="/hds-console"
                className="inline-block border-2 border-neon-green text-neon-green px-6 py-2 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
              >
                Access Console
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HDS Service Suite */}
      <section className="py-16 px-4 bg-dark-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">
            HDS Service Suite
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            From blitz repairs to turnkey build‑outs, HDS keeps your refrigeration, HVAC and
            facilities running—so you stay focused on tenants and customers rather than
            contractors.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mechanical & Refrigeration */}
            <Link href="/services/mechanical-refrigeration" className="group">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 h-full shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:border-neon-green/40 transition-all">
                <h3 className="text-2xl font-bold text-neon-green mb-4">
                  Mechanical & Refrigeration
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• 24/7 racks, RTUs & chillers</li>
                  <li>• HVAC & refrigeration repairs</li>
                  <li>• Energy‑management projects</li>
                  <li>• Leak‑rate and EMS fixes</li>
                </ul>
              </div>
            </Link>

            {/* Facility Maintenance */}
            <Link href="/services/facility-maintenance" className="group">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 h-full shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:border-neon-green/40 transition-all">
                <h3 className="text-2xl font-bold text-neon-green mb-4">
                  Facility Maintenance
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Full‑store upkeep</li>
                  <li>• Preventive & reactive maintenance</li>
                  <li>• 24‑hour dispatch</li>
                  <li>• Groundskeeping and janitorial services</li>
                </ul>
              </div>
            </Link>

            {/* Construction & Special Projects */}
            <Link href="/services/construction-special-projects" className="group">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 h-full shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:border-neon-green/40 transition-all">
                <h3 className="text-2xl font-bold text-neon-green mb-4">
                  Construction & Special Projects
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Ground‑up builds, remodels and roll‑outs</li>
                  <li>• Equipment upgrades</li>
                  <li>• Tenant improvements</li>
                  <li>• Retrofit projects</li>
                </ul>
              </div>
            </Link>

            {/* Design-Build & Consulting */}
            <Link href="/services/design-build-consulting" className="group">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 h-full shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:border-neon-green/40 transition-all">
                <h3 className="text-2xl font-bold text-neon-green mb-4">
                  Design‑Build & Consulting
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Concept‑to‑ribbon‑cutting</li>
                  <li>• Energy and code expertise</li>
                  <li>• Project feasibility & engineering</li>
                  <li>• Permit & compliance management</li>
                </ul>
              </div>
            </Link>

            {/* Energy Management & Sustainability */}
            <Link href="/services/energy-management-sustainability" className="group">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 h-full shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:border-neon-green/40 transition-all">
                <h3 className="text-2xl font-bold text-neon-green mb-4">
                  Energy Management & Sustainability
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Optimization & retro‑commissioning</li>
                  <li>• Utility incentives</li>
                  <li>• Lighting upgrades</li>
                  <li>• Water conservation</li>
                  <li>• Sustainability planning</li>
                </ul>
              </div>
            </Link>

            {/* Call to Action Card */}
            <div className="rounded-2xl border border-neon-green/50 bg-gradient-to-b from-neon-green/10 to-emerald-500/5 p-6 flex flex-col justify-center items-center text-center shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
              <h3 className="text-2xl font-bold mb-4 text-neon-green">
                Ready to Get Started?
              </h3>
              <p className="mb-6 text-gray-300">
                Schedule a 30-minute consultation to discuss your facility needs.
              </p>
              <Link 
                href="/contact"
                className="bg-neon-green text-dark-bg px-6 py-3 rounded-lg font-semibold hover:bg-neon-green/80 transition-colors"
              >
                Book A Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
