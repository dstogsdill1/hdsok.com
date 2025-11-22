import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: "Join HDS Vendor Network - Partner with Commercial Property Maintenance Leader",
  description: "Join the HDS Vendor Network and access consistent work opportunities, streamlined processes, and reliable payment terms. Partner with a leading commercial property maintenance company.",
  keywords: [
    "vendor network",
    "commercial maintenance vendors",
    "HVAC contractors",
    "facility maintenance contractors",
    "vendor partnership",
    "subcontractor opportunities",
    "commercial property contractors"
  ],
  openGraph: {
    title: "Join the HDS Vendor Network - Consistent Work & Reliable Payments",
    description: "Partner with HDS for consistent commercial maintenance work opportunities. Streamlined processes and reliable payment terms.",
    url: "https://www.hdsok.com/vendors",
  },
};

export default function VendorsPage() {
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
              Vendor Network
              <span className="ml-2 inline-flex h-1.5 w-1.5 rounded-full bg-neon-green animate-[pulse-glow_2.4s_ease-in-out_infinite]" />
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Join the HDS Vendor Network
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Partner with HDS to access consistent work opportunities across our growing portfolio 
              of commercial properties.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-dark-bg">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <Reveal>
          <div className="text-gray-300 space-y-6 text-lg">
            <h2 className="text-3xl font-bold text-white">Why Partner with HDS?</h2>
            <p>
              Homeland Development Services works with a network of trusted contractors and vendors 
              to deliver exceptional service to our clients. As an HDS partner, you&apos;ll gain access 
              to a steady stream of work orders across multiple properties and industries.
            </p>
          </div>
          </Reveal>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-neon-green/10 via-transparent to-emerald-500/10" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-neon-green mb-4 flex items-center gap-2">
                  <span className="animate-[pulse-glow_2.4s_ease-in-out_infinite]">⚡</span>
                  Consistent Work Flow
                </h3>
                <p className="text-gray-300">
                  Access regular work orders from our extensive portfolio of grocery stores, retail 
                  centers, and multi-unit properties across the region.
                </p>
              </div>
            </div>
            </Reveal>

            <Reveal delay={0.05}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-emerald-400/10 via-transparent to-neon-green/10" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-neon-green mb-4 flex items-center gap-2">
                  <span className="animate-[float_6s_ease-in-out_infinite]">📋</span>
                  Streamlined Dispatch
                </h3>
                <p className="text-gray-300">
                  Receive work orders through our centralized dispatch system with clear job details, 
                  property information, and priority levels.
                </p>
              </div>
            </div>
            </Reveal>

            <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-teal-400/10 via-transparent to-neon-green/5" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-neon-green mb-4 flex items-center gap-2">
                  <span className="animate-[pulse-glow_2.6s_ease-in-out_infinite]">💰</span>
                  Prompt Payment
                </h3>
                <p className="text-gray-300">
                  Enjoy reliable payment terms and straightforward invoicing processes. We value 
                  our vendors and ensure timely compensation for completed work.
                </p>
              </div>
            </div>
            </Reveal>

            <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-purple-500/15 via-transparent to-neon-green/5" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-neon-green mb-4 flex items-center gap-2">
                  <span className="animate-[float_5.5s_ease-in-out_infinite]">💻</span>
                  Technology Integration
                </h3>
                <p className="text-gray-300">
                  Utilize our HDS Console for work order management, real-time updates, and 
                  communication with dispatch and clients.
                </p>
              </div>
            </div>
            </Reveal>

            <Reveal delay={0.2}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-amber-400/15 via-transparent to-neon-green/10" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-neon-green mb-4 flex items-center gap-2">
                  <span className="animate-[float_6.4s_ease-in-out_infinite]">🏆</span>
                  Quality Standards
                </h3>
                <p className="text-gray-300">
                  Work with a company that values quality craftsmanship and professional service. 
                  We support our vendors in maintaining high standards.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-sky-400/10 via-transparent to-neon-green/10" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-neon-green mb-4 flex items-center gap-2">
                  <span className="animate-[pulse-glow_2.8s_ease-in-out_infinite]">📈</span>
                  Growth Opportunities
                </h3>
                <p className="text-gray-300">
                  As HDS expands, so do opportunities for our vendor partners. Grow your business 
                  alongside our expanding service footprint.
                </p>
              </div>
            </div>
            </Reveal>
          </div>

          {/* Requirements Section */}
          <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-neon-green/10 via-transparent to-emerald-500/10" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-6">Vendor Requirements</h2>
              <p className="text-gray-300 mb-6 text-lg">
                To ensure the highest quality of service for our clients, we maintain specific 
                standards for all vendor partners:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="text-gray-300 space-y-3">
                  <li className="flex items-start">
                    <span className="text-neon-green mr-3 text-xl">✓</span>
                    <span>Current business licenses and permits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-green mr-3 text-xl">✓</span>
                    <span>Appropriate insurance coverage (General Liability, Workers Comp)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-green mr-3 text-xl">✓</span>
                    <span>Certified and trained technicians</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-green mr-3 text-xl">✓</span>
                    <span>24/7 emergency response capability (for applicable trades)</span>
                  </li>
                </ul>
                <ul className="text-gray-300 space-y-3">
                  <li className="flex items-start">
                    <span className="text-neon-green mr-3 text-xl">✓</span>
                    <span>Professional communication and customer service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-green mr-3 text-xl">✓</span>
                    <span>Reliable response times</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-green mr-3 text-xl">✓</span>
                    <span>Quality workmanship and attention to detail</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-green mr-3 text-xl">✓</span>
                    <span>Willingness to use HDS technology platforms</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </Reveal>

          {/* Service Categories */}
          <div className="text-gray-300 space-y-6">
            <h2 className="text-3xl font-bold text-white">Service Categories</h2>
            <p className="text-lg">
              We&apos;re always looking for qualified vendors in the following trades and specialties:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Reveal>
              <div className="bg-gradient-to-b from-slate-900/80 to-black/90 border border-white/10 rounded-2xl p-4 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
                <h4 className="font-bold text-neon-green mb-2">HVAC & Refrigeration</h4>
                <ul className="text-sm space-y-1">
                  <li>• Commercial HVAC</li>
                  <li>• Refrigeration systems</li>
                  <li>• Rack systems</li>
                  <li>• Walk-in coolers/freezers</li>
                </ul>
              </div>
              </Reveal>
              <Reveal delay={0.05}>
              <div className="bg-gradient-to-b from-slate-900/80 to-black/90 border border-white/10 rounded-2xl p-4 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
                <h4 className="font-bold text-neon-green mb-2">Electrical</h4>
                <ul className="text-sm space-y-1">
                  <li>• Licensed electricians</li>
                  <li>• Lighting installation</li>
                  <li>• Electrical repairs</li>
                  <li>• Panel upgrades</li>
                </ul>
              </div>
              </Reveal>
              <Reveal delay={0.1}>
              <div className="bg-gradient-to-b from-slate-900/80 to-black/90 border border-white/10 rounded-2xl p-4 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
                <h4 className="font-bold text-neon-green mb-2">Plumbing</h4>
                <ul className="text-sm space-y-1">
                  <li>• Commercial plumbing</li>
                  <li>• Drain cleaning</li>
                  <li>• Water heaters</li>
                  <li>• Backflow prevention</li>
                </ul>
              </div>
              </Reveal>
              <Reveal delay={0.15}>
              <div className="bg-gradient-to-b from-slate-900/80 to-black/90 border border-white/10 rounded-2xl p-4 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
                <h4 className="font-bold text-neon-green mb-2">General Contractors</h4>
                <ul className="text-sm space-y-1">
                  <li>• Remodeling</li>
                  <li>• Construction</li>
                  <li>• Tenant improvements</li>
                  <li>• Building repairs</li>
                </ul>
              </div>
              </Reveal>
              <Reveal delay={0.2}>
              <div className="bg-gradient-to-b from-slate-900/80 to-black/90 border border-white/10 rounded-2xl p-4 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
                <h4 className="font-bold text-neon-green mb-2">Specialty Services</h4>
                <ul className="text-sm space-y-1">
                  <li>• Roofing</li>
                  <li>• Painting</li>
                  <li>• Flooring</li>
                  <li>• Glass & glazing</li>
                </ul>
              </div>
              <div className="bg-gradient-to-b from-slate-900/80 to-black/90 border border-white/10 rounded-2xl p-4 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
                <h4 className="font-bold text-neon-green mb-2">Facility Services</h4>
                <ul className="text-sm space-y-1">
                  <li>• Janitorial</li>
                  <li>• Landscaping</li>
                  <li>• Snow removal</li>
                  <li>• Pest control</li>
                </ul>
              </div>
              </Reveal>
            </div>
          </div>

          {/* Application Process */}
          <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-neon-green/40 bg-neon-green/95 text-dark-bg p-8 shadow-[0_22px_55px_rgba(52,211,153,0.4)]">
            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white/20 via-transparent to-emerald-900/20" />
            <div className="relative">
              <h2 className="text-3xl font-bold mb-6 text-center">How to Apply</h2>
              <div className="max-w-3xl mx-auto space-y-4">
                <div className="flex items-start">
                  <span className="bg-dark-bg text-neon-green rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-bold mb-2">Submit Your Information</h4>
                    <p>Contact us with your company details, licenses, insurance, and service capabilities.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-dark-bg text-neon-green rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-bold mb-2">Application Review</h4>
                    <p>Our team will review your application and verify credentials.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-dark-bg text-neon-green rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-bold mb-2">Onboarding</h4>
                    <p>Complete our vendor onboarding process and system training.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-dark-bg text-neon-green rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-bold mb-2">Start Receiving Work Orders</h4>
                    <p>Begin receiving work orders through our dispatch system.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Reveal>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-dark-bg">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join Our Vendor Network?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to start the application process and grow your business with HDS.
            </p>
          </Reveal>
          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href="/contact"
              className="bg-neon-green text-dark-bg px-8 py-3 rounded-lg font-semibold hover:bg-neon-green-dark transition-colors"
            >
              Apply Now
            </a>
            <a 
              href="mailto:info@hdsok.com"
              className="border-2 border-neon-green text-neon-green px-8 py-3 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
