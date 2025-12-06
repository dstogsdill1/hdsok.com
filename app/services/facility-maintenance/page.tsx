import Link from 'next/link';
import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Facility Maintenance Coordination - Daily Care, One Point of Contact',
  description:
    'HDS coordinates trusted vendors for building, exterior, and janitorial maintenance so your teams can focus on operations.',
  keywords: [
    'facility maintenance coordination',
    'building maintenance vendors',
    'commercial property maintenance partner',
    'preventive maintenance programs',
    'janitorial vendor management',
    'groundskeeping coordination',
  ],
  openGraph: {
    title: 'Facility Maintenance Coordination - Keep Your Properties in Top Condition',
    description:
      'HDS manages vendor dispatch, schedules, and reporting for facility maintenance across grocery, retail, and commercial properties.',
    url: 'https://www.hdsok.com/services/facility-maintenance',
  },
};

export default function FacilityMaintenancePage() {
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
                Facility maintenance coordination
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Daily care for your sites, without becoming a maintenance call center.
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                HDS connects your locations to a network of vetted vendors for building, exterior, and
                janitorial work—backed by 24/7 dispatch and clear reporting.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Overview & highlights */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
          <Reveal>
            <div className="space-y-5 text-gray-100 text-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Facility maintenance, orchestrated.</h2>
              <p>
                From routine upkeep to urgent cleanups, facility maintenance is a constant stream of
                requests. HDS acts as your coordination layer: we receive issues, dispatch the right
                vendor, track progress, and keep your teams informed.
              </p>
              <p>
                Instead of each store or site chasing its own contractors, your portfolio gets a single,
                organized channel for building, exterior, and janitorial needs—with response times and
                spend visible in the HDS Console.
              </p>
              <p className="border-l-4 border-neon-green pl-4 bg-dark-card/70 p-4 rounded text-base">
                <span className="block text-xs uppercase tracking-wide text-neon-green mb-1">HDS role</span>
                We do not replace your preferred trades—we coordinate them. HDS manages vendor
                relationships, schedules, documentation, and escalation so your operators aren&apos;t stuck in
                the middle.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-6 space-y-4">
              <h3 className="text-xl font-semibold text-white mb-1">Where this matters most</h3>
              <p className="text-sm text-gray-100">
                High-traffic environments where cleanliness, safety, and uptime directly impact sales and
                guest experience:
              </p>
              <ul className="space-y-2 text-sm text-gray-100">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-neon-green">•</span>
                  <span>Grocery stores and supermarkets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-neon-green">•</span>
                  <span>Retail centers, malls, and multi-tenant sites</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-neon-green">•</span>
                  <span>Restaurants, cafés, and food service venues</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Coordinated service areas */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Service areas we coordinate
              </h2>
              <p className="text-gray-100 text-lg">
                HDS aligns vendors across trades so your teams can route every request through a single,
                consistent workflow.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-6 transition-all">
                <div className="absolute inset-0 opacity-25 bg-gradient-to-br from-neon-green/10 via-transparent to-emerald-400/10" />
                <div className="relative flex items-center gap-3 mb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neon-green/15 text-neon-green text-xl animate-[float_6s_ease-in-out_infinite]">
                    🏢
                  </span>
                  <h3 className="text-lg font-semibold text-white">Building upkeep</h3>
                </div>
                <ul className="relative text-sm text-gray-300 space-y-2">
                  <li>Preventive maintenance programs coordinated with your hours</li>
                  <li>Reactive repairs routed to the right building trades</li>
                  <li>Lighting, minor repairs, and common-area upkeep</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-6 transition-all">
                <div className="absolute inset-0 opacity-25 bg-gradient-to-br from-emerald-400/10 via-transparent to-neon-green/10" />
                <div className="relative flex items-center gap-3 mb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300 text-xl animate-[pulse-glow_2.8s_ease-in-out_infinite]">
                    🌳
                  </span>
                  <h3 className="text-lg font-semibold text-white">Exterior &amp; grounds</h3>
                </div>
                <ul className="relative text-sm text-gray-300 space-y-2">
                  <li>Groundskeeping, landscaping, and seasonal cleanups</li>
                  <li>Parking lot maintenance and sweeping</li>
                  <li>Snow and ice vendors where applicable</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-6 transition-all">
                <div className="absolute inset-0 opacity-25 bg-gradient-to-br from-sky-400/10 via-transparent to-neon-green/10" />
                <div className="relative flex items-center gap-3 mb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/15 text-sky-200 text-xl">
                    🧼
                  </span>
                  <h3 className="text-lg font-semibold text-white">Janitorial &amp; cleaning vendors</h3>
                </div>
                <ul className="relative text-sm text-gray-300 space-y-2">
                  <li>Daily cleaning and porter services</li>
                  <li>Floor care, carpets, and periodic deep cleans</li>
                  <li>Restroom, back-of-house, and front-of-house standards</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-6 transition-all">
                <div className="absolute inset-0 opacity-25 bg-gradient-to-br from-purple-500/10 via-transparent to-neon-green/5" />
                <div className="relative flex items-center gap-3 mb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-purple-500/15 text-purple-200 text-xl">
                    📋
                  </span>
                  <h3 className="text-lg font-semibold text-white">24/7 request routing</h3>
                </div>
                <ul className="relative text-sm text-gray-300 space-y-2">
                  <li>Requests by phone, web, or HDS Console</li>
                  <li>Live status updates and vendor confirmations</li>
                  <li>Consolidated documentation and invoicing</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to calm the maintenance noise?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Share your locations, service mix, and vendor setup—we&apos;ll outline how HDS can coordinate
              facility maintenance without disrupting the partners you already trust.
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
