import type { Metadata } from 'next';
import { SITE_METADATA } from '@/config/site-metadata';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: SITE_METADATA.pages.about.title,
  description: SITE_METADATA.pages.about.description,
  keywords: [
    "about HDS",
    "operations platform",
    "analytics platform",
    "CMMS for small business",
    "vendor management",
    "facility operations partner",
    "retail operations software",
    "restaurant facility management",
  ],
  openGraph: {
    title: SITE_METADATA.pages.about.title,
    description: SITE_METADATA.pages.about.description,
    url: `${SITE_METADATA.global.siteUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* Sub-hero aligned with home aesthetic */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-neon-green/20 blur-3xl" />
          <div className="absolute right-[-6rem] bottom-0 h-80 w-80 rounded-full bg-neon-green/10 blur-3xl" />
          <div className="absolute inset-x-10 top-32 h-px bg-gradient-to-r from-transparent via-neon-green/40 to-transparent" />
        </div>
        <div className="relative max-w-6xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
          <Reveal>
            <div>
              <p className="inline-flex items-center rounded-full border border-neon-green/40 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neon-green mb-4">
                About HDS
                <span className="ml-2 inline-flex h-1.5 w-1.5 rounded-full bg-neon-green animate-[pulse-glow_2.4s_ease-in-out_infinite]" />
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Operations & analytics platform for small businesses and portfolios
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-6">
                HDS runs operations AND shows analytics. Use our console as a standalone tool, or let our team 
                coordinate dispatch, track vendor performance, and deliver the insights you need to run 
                retail, restaurant, and property portfolios with confidence.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 max-w-xl">
                <div className="rounded-xl border border-neon-green/40 bg-surface/60 backdrop-blur-sm px-4 py-3">
                  <p className="text-xs text-gray-400 mb-1">Service Coverage</p>
                  <p className="text-lg font-semibold text-neon-green">Regional • Nationwide Platform</p>
                </div>
                <div className="rounded-xl border border-neon-green/40 bg-surface/60 backdrop-blur-sm px-4 py-3">
                  <p className="text-xs text-gray-400 mb-1">Dispatch Coverage</p>
                  <p className="text-lg font-semibold text-white">24/7/365</p>
                </div>
                <div className="rounded-xl border border-neon-green/40 bg-surface/60 backdrop-blur-sm px-4 py-3">
                  <p className="text-xs text-gray-400 mb-1">Work Orders Managed</p>
                  <p className="text-lg font-semibold text-white">From issue to invoice</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative rounded-2xl border border-border-subtle bg-surface/70 backdrop-blur-sm p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold tracking-wide text-gray-400">HDS at a glance</p>
                <span className="inline-flex items-center rounded-full bg-neon-green/10 px-2 py-1 text-xs text-neon-green">
                  Powered by HDS Console
                </span>
              </div>
              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-neon-green">•</span>
                  <p>
                    Central dispatch that routes every issue to the right licensed vendor with live status
                    and SLA tracking.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-neon-green">•</span>
                  <p>
                    Portfolio analytics showing EUI (kWh/ft²), ENERGY STAR benchmarks, maintenance spend per ft², and vendor 
                    compliance (COI, W9) across all regions.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-neon-green">•</span>
                  <p>
                    One point of contact for property teams—HDS manages scheduling, follow-ups, and
                    documentation so your staff doesn&apos;t have to.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-xs text-gray-400">
                <span className="rounded-full border border-neon-green/40 px-3 py-1">Grocery &amp; retail portfolios</span>
                <span className="rounded-full border border-neon-green/40 px-3 py-1">Multi-unit &amp; specialty</span>
                <span className="rounded-full border border-neon-green/40 px-3 py-1">Construction &amp; energy projects</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story & mission */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
          <Reveal>
            <div className="space-y-6 text-gray-300 text-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-white">How HDS fits into your operations</h2>
              <p>
                HDS was founded to solve a simple problem: operators were drowning in maintenance emails,
                vendor calls, and spreadsheets that didn&apos;t agree. Instead of adding another contractor to
                the mix, we built a partner that coordinates the whole picture—vendors, dispatch,
                approvals, and reporting.
              </p>
              <p>
                Our team manages qualified vendor networks across multiple regions and disciplines. When
                work is needed, we dispatch the right licensed vendor, monitor progress through the HDS
                Console, and keep your stakeholders informed. The result: consistent service quality and a
                single source of truth for every work order.
              </p>
              <p className="border-l-4 border-neon-green/50 pl-4 bg-black/30 p-4 rounded">
                <span className="block text-sm uppercase tracking-wide text-neon-green mb-1">Regional expertise, nationwide reach</span>
                Primarily serving Oklahoma and the surrounding region, HDS Console is built to scale nationwide.
                Our platform adapts to local regulations and vendor ecosystems while maintaining a unified
                view for your leadership team—whether you operate 5 locations or 500.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-xl border border-border-subtle bg-surface/70 backdrop-blur-sm p-6 space-y-4 shadow-lg hover:shadow-neon-green/10">
              <h3 className="text-xl font-semibold text-white mb-2">Our mission</h3>
              <p className="text-gray-300 text-sm">
                Give facility teams, operators, and finance leaders a calm, predictable way to run critical
                spaces—without becoming full-time maintenance coordinators.
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-neon-green">•</span>
                  <span>Turn chaotic maintenance requests into structured, trackable workflows.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-neon-green">•</span>
                  <span>Use data from every work order to plan capital, energy, and project decisions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-neon-green">•</span>
                  <span>Act as a long-term partner, not a one-off contractor.</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What sets HDS apart</h2>
              <p className="text-gray-300 text-lg">
                Not another contractor. A coordination layer that aligns local vendors, global KPIs, and
                the realities of operating high-volume properties.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Reveal>
              <div className="relative overflow-hidden rounded-xl border border-border-subtle bg-surface/70 backdrop-blur-sm p-6 shadow-lg hover:shadow-neon-green/10 hover:border-neon-green/30 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neon-green/15 text-neon-green text-lg animate-[float_6s_ease-in-out_infinite]">
                    ⚡
                  </span>
                  <h3 className="text-lg font-semibold text-white">24/7 smart dispatch</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Centralized dispatch that routes issues based on trade, location, and priority, then
                  follows through until closeout and invoice.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="relative overflow-hidden rounded-xl border border-border-subtle bg-surface/70 backdrop-blur-sm p-6 shadow-lg hover:shadow-neon-green/10 hover:border-neon-green/30 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neon-green/15 text-neon-green text-lg animate-[pulse-glow_2.6s_ease-in-out_infinite]">
                    📊
                  </span>
                  <h3 className="text-lg font-semibold text-white">Live portfolio insight</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Track maintenance spend, work order volume, and vendor performance across brands,
                  countries, and regions from the HDS Console.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="relative overflow-hidden rounded-xl border border-border-subtle bg-surface/70 backdrop-blur-sm p-6 shadow-lg hover:shadow-neon-green/10 hover:border-neon-green/30 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/15 text-sky-300 text-lg">
                    🧩
                  </span>
                  <h3 className="text-lg font-semibold text-white">Vendor network, curated</h3>
                </div>
                <p className="text-sm text-gray-300">
                  We build and maintain regional vendor networks so you don&apos;t have to— complete with
                  qualification, compliance checks, and performance scoring.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="relative overflow-hidden rounded-xl border border-border-subtle bg-surface/70 backdrop-blur-sm p-6 shadow-lg hover:shadow-neon-green/10 hover:border-neon-green/30 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/15 text-purple-200 text-lg">
                    🧾
                  </span>
                  <h3 className="text-lg font-semibold text-white">Clean billing, less noise</h3>
                </div>
                <p className="text-sm text-gray-300">
                  Consolidated invoicing and standardized documentation that finance teams can actually
                  reconcile—no more chasing down field notes.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="relative overflow-hidden rounded-xl border border-border-subtle bg-surface/70 backdrop-blur-sm p-6 shadow-lg hover:shadow-neon-green/10 hover:border-neon-green/30 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400/15 text-amber-200 text-lg">
                    🧱
                  </span>
                  <h3 className="text-lg font-semibold text-white">Projects &amp; programs</h3>
                </div>
                <p className="text-sm text-gray-300">
                  From capital projects to rollouts and energy upgrades, we coordinate vendors and
                  schedules while keeping your locations trading.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="relative overflow-hidden rounded-xl border border-border-subtle bg-surface/70 backdrop-blur-sm p-6 shadow-lg hover:shadow-neon-green/10 hover:border-neon-green/30 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-400/15 text-sky-100 text-lg">
                    🤝
                  </span>
                  <h3 className="text-lg font-semibold text-white">A partner, not a platform</h3>
                </div>
                <p className="text-sm text-gray-300">
                  We bring the technology and the people—operators get white-glove support while still
                  owning strategy and brand standards.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Industries we serve */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-8 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries we support</h2>
              <p className="text-gray-300 text-lg">
                HDS is built for portfolios where uptime, food safety, and guest experience all have to
                coexist.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              'Grocery &amp; supermarkets',
              'Retail centers &amp; malls',
              'Multi-unit specialty retail',
              'Restaurants &amp; food service',
              'Office &amp; workplace',
              'Health &amp; wellness',
              'Boutiques &amp; specialty concepts',
              'Medical &amp; professional suites',
            ].map((label, index) => (
              <Reveal key={label} delay={index * 0.04}>
                <div className="relative overflow-hidden rounded-xl border border-border-subtle bg-surface/70 backdrop-blur-sm px-4 py-5 shadow-lg hover:shadow-neon-green/10 hover:border-neon-green/30 transition-all flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-neon-green/15 text-neon-green text-base animate-[float_6s_ease-in-out_infinite]">
                    •
                  </span>
                  <p className="text-sm text-gray-200" dangerouslySetInnerHTML={{ __html: label }} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA aligned with home page style */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-neon-green/20 blur-3xl" />
          <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Bring calm to your maintenance inbox.</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Share your portfolio, service mix, and pain points—we&apos;ll show you how HDS combines
              vendor coordination, dispatch, and analytics into one steady rhythm.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="/contact"
                className="bg-neon-green text-dark-bg px-8 py-3 rounded-lg font-semibold hover:bg-neon-green-dark transition-colors"
              >
                Talk with HDS
              </a>
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
