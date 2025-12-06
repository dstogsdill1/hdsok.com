'use client';

import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import DashboardCharts from './DashboardCharts';

export default function EnergyShowcase() {
  return (
    <section className="relative py-16 px-4 overflow-hidden bg-dark-bg">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-1/4 top-10 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-10 h-96 w-96 rounded-full bg-neon-green/15 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-amber-400/40 bg-black/40 px-4 py-2 text-sm font-semibold text-amber-300 mb-4">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
              ENERGY INTELLIGENCE
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Turn Energy Data Into Action
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              HDS Console transforms raw energy consumption data into actionable insights, 
              identifying cost-saving opportunities and sustainability projects across your portfolio.
            </p>
          </div>
        </Reveal>

        {/* Live Dashboard Preview */}
        <Reveal delay={0.1}>
          <div className="bg-gradient-to-b from-slate-900/90 to-black/95 rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.7)] border border-white/10 p-8 mb-12">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
              <div>
                <h3 className="text-xl font-bold text-white">Energy Portfolio View</h3>
                <p className="text-sm text-gray-400">$32.8M energy spend tracked across 365 sites</p>
              </div>
              <div className="flex gap-3">
                <span className="text-xs px-3 py-1 rounded-full bg-neon-green/10 text-neon-green border border-neon-green/30">
                  Energy Portfolio
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/30">
                  Maintenance Hub
                </span>
              </div>
            </div>
            <DashboardCharts />
          </div>
        </Reveal>

        {/* What The Data Reveals */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Reveal delay={0.2}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-amber-400/10 via-transparent to-neon-green/10" />
              <div className="relative">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">What We Discover</h3>
                <ul className="space-y-3 text-gray-100">
                  <li className="flex items-start">
                    <span className="text-neon-green mr-2 flex-shrink-0">•</span>
                    <span><strong>Energy waste hotspots:</strong> Sites consuming 20-30% more than portfolio average</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-green mr-2 flex-shrink-0">•</span>
                    <span><strong>Peak demand charges:</strong> Identify when and where you're paying premium rates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-green mr-2 flex-shrink-0">•</span>
                    <span><strong>Equipment inefficiencies:</strong> HVAC systems running 24/7 when they shouldn't be</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-green mr-2 flex-shrink-0">•</span>
                    <span><strong>Seasonal patterns:</strong> Consumption spikes that reveal maintenance needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-green mr-2 flex-shrink-0">•</span>
                    <span><strong>Carbon footprint:</strong> Track emissions by site, equipment type, and time period</span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-neon-green/10 via-transparent to-emerald-500/10" />
              <div className="relative">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-white mb-4">Projects We Recommend</h3>
                <ul className="space-y-3 text-gray-100">
                  <li className="flex items-start">
                    <span className="text-neon-green mr-2 flex-shrink-0">•</span>
                    <span><strong>LED retrofits:</strong> Reduce lighting costs by 60-75% with 2-3 year payback</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-green mr-2 flex-shrink-0">•</span>
                    <span><strong>HVAC optimization:</strong> Retune systems, fix scheduling, reduce runtime waste</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-green mr-2 flex-shrink-0">•</span>
                    <span><strong>BMS upgrades:</strong> Smart controls that adapt to occupancy and weather</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-green mr-2 flex-shrink-0">•</span>
                    <span><strong>Demand response:</strong> Shift loads during peak pricing periods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-green mr-2 flex-shrink-0">•</span>
                    <span><strong>Solar feasibility:</strong> Sites with high daytime usage are prime candidates</span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Real Project Examples */}
        <Reveal delay={0.4}>
          <div className="bg-gradient-to-b from-slate-900/80 to-black/90 rounded-2xl border border-white/10 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.7)] mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              How Energy Data Drives Real Projects
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Project 1 */}
              <div className="bg-black/40 rounded-xl p-6 border border-white/5">
                <div className="text-3xl mb-3">💡</div>
                <h4 className="text-lg font-bold text-white mb-2">Lighting Upgrade</h4>
                <p className="text-sm text-gray-400 mb-3">
                  Data showed 30% of energy cost was lighting
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Investment:</span>
                    <span className="text-white font-semibold">$45K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Annual Savings:</span>
                    <span className="text-neon-green font-semibold">$18K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Payback:</span>
                    <span className="text-amber-300 font-semibold">2.5 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Utility Rebate:</span>
                    <span className="text-neon-green font-semibold">$12K</span>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-black/40 rounded-xl p-6 border border-white/5">
                <div className="text-3xl mb-3">❄️</div>
                <h4 className="text-lg font-bold text-white mb-2">HVAC Retro-Commission</h4>
                <p className="text-sm text-gray-400 mb-3">
                  Consumption 40% higher than similar sites
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Investment:</span>
                    <span className="text-white font-semibold">$15K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Annual Savings:</span>
                    <span className="text-neon-green font-semibold">$24K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Payback:</span>
                    <span className="text-amber-300 font-semibold">0.6 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">CO2 Reduction:</span>
                    <span className="text-emerald-400 font-semibold">85 tons/yr</span>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-black/40 rounded-xl p-6 border border-white/5">
                <div className="text-3xl mb-3">🔌</div>
                <h4 className="text-lg font-bold text-white mb-2">Demand Management</h4>
                <p className="text-sm text-gray-400 mb-3">
                  Peak demand charges were 35% of total bill
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Investment:</span>
                    <span className="text-white font-semibold">$8K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Annual Savings:</span>
                    <span className="text-neon-green font-semibold">$14K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Payback:</span>
                    <span className="text-amber-300 font-semibold">0.6 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Ongoing:</span>
                    <span className="text-blue-400 font-semibold">No cost</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* The HDS Advantage */}
        <Reveal delay={0.5}>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-neon-green/5 to-emerald-500/5 rounded-2xl border border-neon-green/30 p-8">
              <h3 className="text-xl font-bold text-white mb-4">Why Our Analytics Matter</h3>
              <ul className="space-y-3 text-gray-100 text-sm">
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">✓</span>
                  <span><strong>Continuous monitoring</strong> catches problems before they become expensive</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">✓</span>
                  <span><strong>Portfolio comparison</strong> reveals which sites are underperforming</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">✓</span>
                  <span><strong>Utility bill validation</strong> catches billing errors and incorrect rates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">✓</span>
                  <span><strong>ROI tracking</strong> proves savings from completed projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">✓</span>
                  <span><strong>Sustainability reporting</strong> supports ESG goals and tenant requirements</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-400/5 to-orange-500/5 rounded-2xl border border-amber-400/30 p-8">
              <h3 className="text-xl font-bold text-white mb-4">What You Get</h3>
              <ul className="space-y-3 text-gray-100 text-sm">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">→</span>
                  <span><strong>Monthly energy reports</strong> with recommendations and alerts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">→</span>
                  <span><strong>Project proposals</strong> with costs, savings, and payback calculations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">→</span>
                  <span><strong>Utility incentive identification</strong> to offset project costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">→</span>
                  <span><strong>Measurement & verification</strong> to prove savings are real</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">→</span>
                  <span><strong>Ongoing optimization</strong> as we spot new opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.6}>
          <div className="mt-12 text-center bg-gradient-to-r from-neon-green/10 via-emerald-500/10 to-amber-400/10 rounded-2xl border border-neon-green/30 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              See What Your Energy Data Reveals
            </h3>
            <p className="text-gray-100 mb-6 max-w-2xl mx-auto">
              Get a free energy assessment. We'll analyze your consumption patterns, identify 
              savings opportunities, and show you exactly what projects make sense for your portfolio.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="/contact"
                className="bg-neon-green text-dark-bg px-8 py-3 rounded-lg font-semibold hover:bg-neon-green/90 transition-all"
              >
                Request Free Assessment
              </a>
              <a
                href="https://www.hds.live/energy"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-neon-green text-neon-green px-8 py-3 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-all"
              >
                View Energy Dashboard
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
