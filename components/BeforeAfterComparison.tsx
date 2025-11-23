'use client';

import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

interface ComparisonItem {
  before: string;
  after: string;
}

const comparisonData: ComparisonItem[] = [
  {
    before: 'Juggling multiple vendor contacts and spreadsheets',
    after: 'One unified platform for all property maintenance',
  },
  {
    before: 'Hours spent on manual work order tracking',
    after: 'Automated dispatch and real-time status updates',
  },
  {
    before: 'Unexpected maintenance costs and budget overruns',
    after: 'Predictive analytics and live cost tracking',
  },
  {
    before: 'Limited visibility across property portfolio',
    after: 'Complete transparency with customizable dashboards',
  },
  {
    before: 'Reactive maintenance leading to costly breakdowns',
    after: 'Proactive scheduling based on equipment data',
  },
  {
    before: 'Inconsistent vendor performance and quality',
    after: 'Automated scoring and performance metrics',
  },
];

export default function BeforeAfterComparison() {
  return (
    <section className="relative py-16 px-4 overflow-hidden bg-dark-bg">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-neon-green/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how HDS Console revolutionizes facility management workflows
            </p>
          </div>
        </Reveal>

        <div className="space-y-6">
          {comparisonData.map((item, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1 }}
                className="grid md:grid-cols-2 gap-4 relative"
              >
                {/* Before */}
                <div className="relative overflow-hidden rounded-xl border border-red-500/30 bg-gradient-to-b from-red-900/10 to-black/90 p-6 shadow-lg">
                  <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-red-500/20 via-transparent to-transparent" />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">❌</span>
                      <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                        Before
                      </span>
                    </div>
                    <p className="text-gray-300">{item.before}</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-neon-green text-3xl"
                  >
                    →
                  </motion.div>
                </div>

                {/* After */}
                <div className="relative overflow-hidden rounded-xl border border-neon-green/30 bg-gradient-to-b from-neon-green/10 to-black/90 p-6 shadow-lg">
                  <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-neon-green/20 via-transparent to-emerald-500/10" />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">✅</span>
                      <span className="text-neon-green font-semibold text-sm uppercase tracking-wider">
                        With HDS Console
                      </span>
                    </div>
                    <p className="text-gray-300">{item.after}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <a
              href="https://www.hds.live/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-neon-green text-dark-bg px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neon-green/90 transition-all hover:scale-105"
            >
              See It In Action
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
