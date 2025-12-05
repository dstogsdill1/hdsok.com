import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Construction & Special Projects - Tenant Build-Outs & Renovations",
  description: "Professional construction services including tenant build-outs, store remodels, equipment installations, code compliance upgrades, and emergency restoration for commercial properties.",
  keywords: [
    "commercial construction",
    "tenant build-out",
    "store remodel",
    "equipment installation",
    "code compliance",
    "emergency restoration",
    "construction project management",
    "commercial renovations",
    "retail construction"
  ],
  openGraph: {
    title: "Construction & Special Projects - Professional Build-Outs & Renovations",
    description: "Expert construction services for commercial properties including tenant build-outs, remodels, and code compliance upgrades.",
    url: "https://www.hdsok.com/services/construction-special-projects",
  },
};

export default function ConstructionPage() {
  return (
    <div>
      {/* Sub-hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-dark-bg via-grey-nav to-dark-bg py-20 px-4">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-neon-green/20 blur-3xl" />
          <div className="absolute right-[-6rem] bottom-0 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />
          <div className="absolute inset-x-10 top-32 h-px bg-gradient-to-r from-transparent via-neon-green/40 to-transparent" />
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div>
            <p className="inline-flex items-center rounded-full border border-neon-green/40 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neon-green mb-4">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-neon-green animate-[pulse-glow_1.8s_ease-in-out_infinite]"></span>
              Construction &amp; Special Projects
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Turnkey construction services from concept to completion.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Professional construction services for tenant build-outs, store remodels, equipment installations, and more.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-8 mb-12">
            <p className="text-gray-300 text-lg leading-relaxed">
              HDS delivers comprehensive construction and renovation services for commercial properties. 
              From ground-up builds to major remodels, our experienced project managers ensure quality 
              workmanship, on-time delivery, and budget adherence.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-6 transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-neon-green/10 via-transparent to-emerald-500/10" />
              <div className="relative flex items-center gap-3 mb-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neon-green/15 text-neon-green text-xl animate-[pulse-glow_2.4s_ease-in-out_infinite]">
                  🏗️
                </span>
                <h2 className="text-2xl font-bold text-white">New Construction</h2>
              </div>
              <ul className="relative text-gray-300 space-y-2">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Ground-up commercial construction</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Multi-unit development</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Retail build-outs</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Restaurant construction</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Office space development</li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-6 transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-teal-400/10 via-transparent to-neon-green/10" />
              <div className="relative flex items-center gap-3 mb-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-500/15 text-teal-300 text-xl animate-[float_6s_ease-in-out_infinite]">
                  🔨
                </span>
                <h2 className="text-2xl font-bold text-white">Remodeling & Renovations</h2>
              </div>
              <ul className="relative text-gray-300 space-y-2">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Store remodels and refreshes</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Multi-location roll-outs</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Tenant improvements</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Space reconfiguration</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Modernization projects</li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-6 transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-sky-400/10 via-transparent to-neon-green/10" />
              <div className="relative flex items-center gap-3 mb-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/15 text-sky-300 text-xl animate-[pulse-glow_3s_ease-in-out_infinite]">
                  ⚙️
                </span>
                <h2 className="text-2xl font-bold text-white">Equipment & Systems</h2>
              </div>
              <ul className="relative text-gray-300 space-y-2">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> HVAC system installation</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Refrigeration equipment upgrades</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Electrical system upgrades</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Plumbing system installation</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Building automation systems</li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-6 transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-purple-500/10 via-transparent to-neon-green/5" />
              <div className="relative flex items-center gap-3 mb-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-purple-500/15 text-purple-300 text-xl animate-[float_5.5s_ease-in-out_infinite]">
                  🛠️
                </span>
                <h2 className="text-2xl font-bold text-white">Special Projects</h2>
              </div>
              <ul className="relative text-gray-300 space-y-2">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> ADA compliance upgrades</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Code compliance retrofits</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Emergency restoration</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Structural repairs</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Roof replacement</li>
              </ul>
            </div>
          </div>

          <div className="bg-neon-green text-dark-bg rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="mb-6">Let&apos;s discuss your construction needs and develop a project plan.</p>
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
