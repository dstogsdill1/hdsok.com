'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const actions = [
  {
    title: 'Analytics Magic Hub',
    description: 'Dive into trends, spending patterns, vendor performance, and predictive insights.',
    icon: '📊',
    gradient: 'from-indigo-600 to-purple-700',
    link: '/services',
  },
  {
    title: 'Maintenance Hub',
    description: 'Work orders, map view, schedule, vendors, and assets—all in one place.',
    icon: '🔧',
    gradient: 'from-cyan-600 to-blue-700',
    link: '/services/facility-maintenance',
  },
  {
    title: 'Energy & Lighting',
    description: 'ENERGY STAR® benchmarking, EUI tracking, LED retrofits, and utility management.',
    icon: '⚡',
    gradient: 'from-emerald-600 to-teal-700',
    link: '/services/energy-management-sustainability',
  },
];

export default function QuickActionsGrid() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Quick Actions</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Jump directly to the tools you need. Each hub provides specialized capabilities for different aspects of your operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -6 }}
            >
              <Link 
                href={action.link}
                className={`block relative overflow-hidden rounded-2xl bg-gradient-to-br ${action.gradient} p-8 text-white shadow-[0_25px_70px_rgba(0,0,0,0.5)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)] transition-all duration-300`}
              >
                {/* Subtle overlay pattern */}
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
                
                <div className="relative">
                  <div className="text-5xl mb-5">{action.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{action.title}</h3>
                  <p className="text-white/80 mb-6">{action.description}</p>
                  <span className="inline-flex items-center text-sm font-semibold group">
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
