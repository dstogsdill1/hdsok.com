import Link from 'next/link';
import type { Metadata } from 'next';
import EnergyShowcase from '@/components/EnergyShowcase';

export const metadata: Metadata = {
  title: "Energy Management & Sustainability Solutions - Reduce Operating Costs",
  description: "Energy management and sustainability solutions including energy audits, HVAC optimization, LED lighting retrofits, building automation, and renewable energy integration to reduce operating costs.",
  keywords: [
    "energy management",
    "sustainability solutions",
    "energy audit",
    "HVAC optimization",
    "LED lighting retrofit",
    "building automation",
    "renewable energy",
    "energy efficiency",
    "utility cost reduction",
    "green building solutions"
  ],
  openGraph: {
    title: "Energy Management & Sustainability - Reduce Your Operating Costs",
    description: "Comprehensive energy management solutions to reduce operating costs and improve sustainability for commercial properties.",
    url: "https://www.hdsok.com/services/energy-management-sustainability",
  },
};

export default function EnergyManagementPage() {
  return (
    <div>
      {/* Sub-hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-dark-bg via-grey-nav to-dark-bg py-20 px-4">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
          <div className="absolute right-[-6rem] bottom-0 h-80 w-80 rounded-full bg-neon-green/10 blur-3xl" />
          <div className="absolute inset-x-10 top-32 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div>
            <p className="inline-flex items-center rounded-full border border-neon-green/40 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neon-green mb-4">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-neon-green animate-[pulse-glow_1.8s_ease-in-out_infinite]"></span>
              Energy Management &amp; Sustainability
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Reduce costs and environmental impact with smart energy solutions.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive energy management and sustainability programs to maximize your return on investment.
            </p>
          </div>
        </div>
      </section>

      {/* Energy Analytics Showcase */}
      <EnergyShowcase />

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-8 mb-12">
            <p className="text-gray-300 text-lg leading-relaxed">
              HDS helps commercial property owners reduce operating costs and environmental impact through 
              comprehensive energy management and sustainability programs. Our team identifies opportunities, 
              implements solutions, and tracks results to maximize your return on investment.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-6 transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-amber-400/10 via-transparent to-neon-green/10" />
              <div className="relative flex items-center gap-3 mb-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-400/15 text-amber-300 text-xl animate-[pulse-glow_2.4s_ease-in-out_infinite]">
                  ⚡
                </span>
                <h2 className="text-2xl font-bold text-white">Energy Optimization</h2>
              </div>
              <ul className="relative text-gray-300 space-y-2">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Energy audits and assessments</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Building system optimization</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Retro-commissioning services</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> HVAC system optimization</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Refrigeration efficiency improvements</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Building automation system tuning</li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-6 transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-neon-green/10 via-transparent to-emerald-500/10" />
              <div className="relative flex items-center gap-3 mb-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neon-green/15 text-neon-green text-xl animate-[float_6s_ease-in-out_infinite]">
                  💵
                </span>
                <h2 className="text-2xl font-bold text-white">Utility Incentive Programs</h2>
              </div>
              <ul className="relative text-gray-300 space-y-2">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Incentive program identification</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Application preparation and submission</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Project documentation</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Rebate maximization</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Utility coordination</li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-6 transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-sky-400/10 via-transparent to-neon-green/10" />
              <div className="relative flex items-center gap-3 mb-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/15 text-sky-300 text-xl animate-[pulse-glow_3s_ease-in-out_infinite]">
                  💡
                </span>
                <h2 className="text-2xl font-bold text-white">Lighting Solutions</h2>
              </div>
              <ul className="relative text-gray-300 space-y-2">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> LED retrofit projects</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Lighting controls and sensors</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Daylight harvesting</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Exterior lighting upgrades</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Parking lot lighting</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Emergency lighting compliance</li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-6 transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-teal-400/10 via-transparent to-neon-green/10" />
              <div className="relative flex items-center gap-3 mb-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-500/15 text-teal-300 text-xl animate-[float_5.5s_ease-in-out_infinite]">
                  💧
                </span>
                <h2 className="text-2xl font-bold text-white">Water Conservation</h2>
              </div>
              <ul className="relative text-gray-300 space-y-2">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Water usage analysis</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Fixture upgrades and retrofits</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Leak detection and repair</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Irrigation system optimization</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Water reclamation systems</li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-6 transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-orange-400/10 via-transparent to-amber-400/10" />
              <div className="relative flex items-center gap-3 mb-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-400/15 text-orange-300 text-xl animate-[pulse-glow_2.8s_ease-in-out_infinite]">
                  ☀️
                </span>
                <h2 className="text-2xl font-bold text-white">Renewable Energy</h2>
              </div>
              <ul className="relative text-gray-300 space-y-2">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Solar energy feasibility studies</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Solar panel installation</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Solar thermal systems</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Energy storage solutions</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Renewable energy incentives</li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-6 transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-emerald-400/10 via-transparent to-neon-green/10" />
              <div className="relative flex items-center gap-3 mb-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300 text-xl animate-[float_6.5s_ease-in-out_infinite]">
                  🌱
                </span>
                <h2 className="text-2xl font-bold text-white">Sustainability Planning</h2>
              </div>
              <ul className="relative text-gray-300 space-y-2">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Carbon footprint assessment</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Sustainability goal development</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Portfolio-wide energy tracking</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Benchmarking and reporting</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> LEED and green building certification</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> ESG reporting support</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Benefits of Energy Management</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <ul className="space-y-3">
                <li className="flex items-start"><span className="text-neon-green mr-2">✓</span> Reduced utility costs</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">✓</span> Lower carbon footprint</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">✓</span> Improved equipment efficiency</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">✓</span> Extended equipment life</li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start"><span className="text-neon-green mr-2">✓</span> Enhanced property value</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">✓</span> Regulatory compliance</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">✓</span> Improved tenant comfort</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">✓</span> Access to incentives and rebates</li>
              </ul>
            </div>
          </div>

          <div className="bg-neon-green text-dark-bg rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Start Saving Energy Today</h2>
            <p className="mb-6">Contact us for a free energy assessment and discover your savings potential.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link 
                href="/contact"
                className="bg-dark-bg text-neon-green px-6 py-3 rounded-lg font-semibold hover:bg-grey-nav transition-colors"
              >
                Request Assessment
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
