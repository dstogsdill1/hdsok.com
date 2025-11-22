import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Design-Build & Consulting Services - Integrated Project Solutions",
  description: "Streamlined design-build and consulting services for commercial properties including concept development, value engineering, project management, and post-construction support.",
  keywords: [
    "design-build services",
    "construction consulting",
    "project management",
    "value engineering",
    "feasibility studies",
    "commercial design",
    "integrated project delivery",
    "construction consulting services",
    "design-build contractor"
  ],
  openGraph: {
    title: "Design-Build & Consulting - Streamlined Project Delivery",
    description: "Integrated design-build and consulting services for commercial properties. From concept to completion.",
    url: "https://www.hdsok.com/services/design-build-consulting",
  },
};

export default function DesignBuildPage() {
  return (
    <div>
      {/* Sub-hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-dark-bg via-grey-nav to-dark-bg py-20 px-4">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />
          <div className="absolute right-[-6rem] bottom-0 h-80 w-80 rounded-full bg-neon-green/10 blur-3xl" />
          <div className="absolute inset-x-10 top-32 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div>
            <p className="inline-flex items-center rounded-full border border-neon-green/40 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neon-green mb-4">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-neon-green animate-[pulse-glow_1.8s_ease-in-out_infinite]"></span>
              Design-Build &amp; Consulting
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Expert guidance from concept to completion.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Streamlined design-build and consulting services for comprehensive commercial project delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="border-4 border-neon-green rounded-lg p-8 bg-dark-card mb-12">
            <p className="text-gray-300 text-lg leading-relaxed">
              HDS provides comprehensive design-build and consulting services to guide your project from 
              initial concept through final completion. Our team of engineers, designers, and construction 
              professionals ensures successful project delivery.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            <div className="relative overflow-hidden rounded-2xl border border-neon-green/40 bg-dark-card/90 p-6 hover:shadow-[0_22px_55px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-purple-500/10 via-transparent to-neon-green/10" />
              <div className="relative flex items-center gap-3 mb-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-purple-500/15 text-purple-300 text-xl animate-[pulse-glow_2.4s_ease-in-out_infinite]">
                  📝
                </span>
                <h2 className="text-2xl font-bold text-white">Design-Build Services</h2>
              </div>
              <ul className="relative text-gray-300 space-y-2">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Concept development and planning</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Architectural coordination</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Engineering design services</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Project management</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Construction administration</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Commissioning and turnover</li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-neon-green/40 bg-dark-card/90 p-6 hover:shadow-[0_22px_55px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-neon-green/10 via-transparent to-emerald-500/10" />
              <div className="relative flex items-center gap-3 mb-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neon-green/15 text-neon-green text-xl animate-[float_6s_ease-in-out_infinite]">
                  📊
                </span>
                <h2 className="text-2xl font-bold text-white">Consulting Services</h2>
              </div>
              <ul className="relative text-gray-300 space-y-2">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Feasibility studies</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Value engineering</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Cost estimating</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Schedule development</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Risk assessment</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Construction observation</li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-neon-green/40 bg-dark-card/90 p-6 hover:shadow-[0_22px_55px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-sky-400/10 via-transparent to-neon-green/10" />
              <div className="relative flex items-center gap-3 mb-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/15 text-sky-300 text-xl animate-[pulse-glow_3s_ease-in-out_infinite]">
                  ✔️
                </span>
                <h2 className="text-2xl font-bold text-white">Code & Compliance</h2>
              </div>
              <ul className="relative text-gray-300 space-y-2">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Building code analysis</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Energy code compliance</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Permit acquisition and management</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> ADA compliance review</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Fire safety and life safety systems</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Environmental compliance</li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-neon-green/40 bg-dark-card/90 p-6 hover:shadow-[0_22px_55px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-amber-400/10 via-transparent to-neon-green/10" />
              <div className="relative flex items-center gap-3 mb-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-400/15 text-amber-300 text-xl animate-[float_5.5s_ease-in-out_infinite]">
                  🔧
                </span>
                <h2 className="text-2xl font-bold text-white">Technical Expertise</h2>
              </div>
              <div className="relative grid md:grid-cols-2 gap-4 text-gray-300">
                <div>
                  <h3 className="font-semibold text-white mb-2">Mechanical Systems</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• HVAC design</li>
                    <li>• Refrigeration systems</li>
                    <li>• Energy management</li>
                    <li>• Building automation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Electrical Systems</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Electrical distribution</li>
                    <li>• Lighting design</li>
                    <li>• Power systems</li>
                    <li>• Emergency systems</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Plumbing & Fire Protection</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Plumbing design</li>
                    <li>• Fire sprinkler systems</li>
                    <li>• Fire alarm systems</li>
                    <li>• Water management</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Structural & Architectural</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Structural analysis</li>
                    <li>• Building envelope</li>
                    <li>• Space planning</li>
                    <li>• Interior design coordination</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neon-green text-dark-bg rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Design or Consulting Services?</h2>
            <p className="mb-6">Let&apos;s discuss how we can support your project goals.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link 
                href="/contact"
                className="bg-dark-bg text-neon-green px-6 py-3 rounded-lg font-semibold hover:bg-grey-nav transition-colors"
              >
                Schedule Consultation
              </Link>
              <a 
                href="tel:14057774156"
                className="border-2 border-dark-bg text-dark-bg px-6 py-3 rounded-lg font-semibold hover:bg-dark-bg hover:text-neon-green transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
