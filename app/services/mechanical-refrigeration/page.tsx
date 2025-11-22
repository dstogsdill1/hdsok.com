import Link from 'next/link';
import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Mechanical & Refrigeration Coordination - 24/7 Vendor Dispatch',
  description:
    'HDS coordinates licensed HVAC and refrigeration vendors for emergency response, preventive programs, and energy-focused upgrades.',
  keywords: [
    'HVAC vendor coordination',
    'refrigeration vendor management',
    'emergency HVAC dispatch',
    'rack systems maintenance coordination',
    'chiller and RTU vendors',
    'energy management optimization',
  ],
  openGraph: {
    title: 'Mechanical & Refrigeration Coordination - 24/7 Vendor Support',
    description:
      'HDS manages dispatch and performance tracking for HVAC and refrigeration vendors across complex commercial portfolios.',
    url: 'https://www.hdsok.com/services/mechanical-refrigeration',
  },
};

export default function MechanicalRefrigerationPage() {
  return (
    <div>
      {/* Sub-hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-dark-bg via-grey-nav to-dark-bg py-20 px-4">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-neon-green/20 blur-3xl" />
          <div className="absolute right-[-6rem] bottom-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="absolute inset-x-10 top-32 h-px bg-gradient-to-r from-transparent via-neon-green/40 to-transparent" />
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <Reveal>
            <div>
              <p className="inline-flex items-center rounded-full border border-neon-green/40 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neon-green mb-4">
                Mechanical &amp; refrigeration coordination
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Keep cold chains and comfort systems online—without chasing every call.
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                HDS routes HVAC and refrigeration issues to licensed vendors, monitors progress through the
                HDS Console, and surfaces the data you need for energy and asset decisions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Overview & key outcomes */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
          <Reveal>
            <div className="space-y-5 text-gray-300 text-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Dispatch that understands the cold side.</h2>
              <p>
                Refrigeration and HVAC issues don&apos;t wait for office hours. HDS provides a 24/7 dispatch
                layer that connects your locations to qualified mechanical vendors, with status and spend
                visible in one place.
              </p>
              <p>
                We coordinate emergency calls, preventive programs, and project work—so your teams aren&apos;t
                left deciphering alarms, leak alerts, or rack failures alone.
              </p>
              <p className="border-l-4 border-neon-green pl-4 bg-dark-card/70 p-4 rounded text-base">
                <span className="block text-xs uppercase tracking-wide text-neon-green mb-1">Vendor-first model</span>
                HDS does not replace your mechanical contractors. Instead, we standardize how work is
                requested, dispatched, tracked, and invoiced across your vendor network.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-6 space-y-4">
              <h3 className="text-xl font-semibold text-white mb-1">What operators see</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-neon-green">•</span>
                  <span>Single place to submit and track cold and comfort issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-neon-green">•</span>
                  <span>Live status from vendor dispatch to job completion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-neon-green">•</span>
                  <span>Clear documentation and consolidated invoicing</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Coordinated services & equipment */}
      <section className="py-16 px-4 bg-dark-bg border-y border-dark-border">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Mechanical &amp; refrigeration work we coordinate
              </h2>
              <p className="text-gray-300 text-lg">
                From emergency rack alarms to planned PMs, HDS routes the right vendors and tracks every
                step in the HDS Console.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-6 transition-all">
                <div className="absolute inset-0 opacity-25 bg-gradient-to-br from-neon-green/10 via-transparent to-emerald-400/10" />
                <div className="relative flex items-center gap-3 mb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neon-green/15 text-neon-green text-xl animate-[float_6s_ease-in-out_infinite]">
                    🧊
                  </span>
                  <h3 className="text-lg font-semibold text-white">Refrigeration &amp; rack systems</h3>
                </div>
                <ul className="relative text-sm text-gray-300 space-y-2">
                  <li>24/7 emergency calls and leak response</li>
                  <li>Rack monitoring, alarms, and service coordination</li>
                  <li>Walk-in coolers, freezers, and display cases</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-6 transition-all">
                <div className="absolute inset-0 opacity-25 bg-gradient-to-br from-sky-400/10 via-transparent to-neon-green/10" />
                <div className="relative flex items-center gap-3 mb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/15 text-sky-200 text-xl">
                    🌬️
                  </span>
                  <h3 className="text-lg font-semibold text-white">HVAC &amp; comfort systems</h3>
                </div>
                <ul className="relative text-sm text-gray-300 space-y-2">
                  <li>RTUs, split systems, and chillers</li>
                  <li>Emergency comfort calls and no-cool/no-heat events</li>
                  <li>Filter changes and programmatic PMs</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-6 transition-all">
                <div className="absolute inset-0 opacity-25 bg-gradient-to-br from-amber-400/10 via-transparent to-neon-green/10" />
                <div className="relative flex items-center gap-3 mb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-400/15 text-amber-200 text-xl">
                    📉
                  </span>
                  <h3 className="text-lg font-semibold text-white">Energy &amp; EMS focus</h3>
                </div>
                <ul className="relative text-sm text-gray-300 space-y-2">
                  <li>Coordination with EMS and controls vendors</li>
                  <li>Targeted repairs and setpoint strategies to reduce waste</li>
                  <li>Data to prioritize capital replacements</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-6 transition-all">
                <div className="absolute inset-0 opacity-25 bg-gradient-to-br from-purple-500/10 via-transparent to-neon-green/5" />
                <div className="relative flex items-center gap-3 mb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-purple-500/15 text-purple-200 text-xl">
                    📊
                  </span>
                  <h3 className="text-lg font-semibold text-white">Portfolio-level insight</h3>
                </div>
                <ul className="relative text-sm text-gray-300 space-y-2">
                  <li>Performance and spend by site, vendor, and region</li>
                  <li>Patterns that inform capital plans and energy programs</li>
                  <li>Exportable data for finance and engineering teams</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-dark-bg border-t border-dark-border">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a calmer way to run the cold side?</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Tell us about your rack setups, HVAC mix, and vendor footprint—we&apos;ll show how HDS can
              coordinate mechanical and refrigeration work without adding more noise for your teams.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="bg-neon-green text-dark-bg px-8 py-3 rounded-lg font-semibold hover:bg-neon-green-dark transition-colors"
              >
                Talk with HDS
              </Link>
              <a
                href="tel:14057774156"
                className="border-2 border-neon-green text-neon-green px-8 py-3 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
              >
                Call a live agent
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
