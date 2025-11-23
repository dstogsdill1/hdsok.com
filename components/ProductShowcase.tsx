'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import DashboardCharts from './DashboardCharts';

interface ShowcaseTab {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

const tabs: ShowcaseTab[] = [
  {
    id: 'dashboard',
    title: 'Unified Dashboard',
    description: 'Get a complete view of your entire portfolio at a glance',
    features: [
      'Real-time work order status',
      'Cost tracking and budgets',
      'Energy consumption metrics',
      'Vendor performance scores',
    ],
    icon: '📊',
  },
  {
    id: 'mobile',
    title: 'Mobile Apps',
    description: 'Manage everything from your smartphone or tablet',
    features: [
      'Submit work orders with photos',
      'Approve invoices on the go',
      'Track technician location',
      'Receive instant notifications',
    ],
    icon: '📱',
  },
  {
    id: 'analytics',
    title: 'Analytics & Reports',
    description: 'Make data-driven decisions with powerful insights',
    features: [
      'Custom report builder',
      'Predictive maintenance alerts',
      'Cost per square foot analysis',
      'Portfolio benchmarking',
    ],
    icon: '📈',
  },
  {
    id: 'vendor',
    title: 'Vendor Management',
    description: 'Coordinate with contractors seamlessly',
    features: [
      'Automated work order dispatch',
      'Digital invoice processing',
      'Performance tracking',
      'Contractor ratings and reviews',
    ],
    icon: '🤝',
  },
];

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-1/4 top-10 h-96 w-96 rounded-full bg-purple-500/15 blur-3xl" />
        <div className="absolute right-1/4 bottom-10 h-96 w-96 rounded-full bg-neon-green/15 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            See HDS Console in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the features that make facility management effortless
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-neon-green text-dark-bg'
                  : 'bg-slate-900/80 text-gray-300 border border-white/10 hover:border-neon-green/40'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.title}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-neon-green rounded-lg -z-10"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-6xl mb-6">{currentTab.icon}</div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {currentTab.title}
              </h3>
              <p className="text-xl text-gray-300 mb-6">
                {currentTab.description}
              </p>
              <div className="space-y-3">
                {currentTab.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-neon-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-neon-green"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href="https://www.hds.live/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-neon-green text-dark-bg px-6 py-3 rounded-lg font-semibold hover:bg-neon-green/90 transition-all"
                >
                  Try It Now →
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Visual Preview */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
                <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-neon-green/10 via-transparent to-purple-500/10" />
                
                {/* Show actual dashboard content for dashboard tab */}
                {activeTab === 'dashboard' ? (
                  <div className="relative">
                    <DashboardCharts />
                  </div>
                ) : activeTab === 'mobile' ? (
                  <div className="relative aspect-[9/16] max-w-sm mx-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2.5rem] p-4 flex items-center justify-center border-8 border-slate-700">
                    <div className="text-center">
                      <div className="text-6xl mb-4">{currentTab.icon}</div>
                      <div className="text-gray-400 text-sm">
                        {currentTab.title}
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="h-2 bg-neon-green/30 rounded-full w-3/4 mx-auto"></div>
                        <div className="h-2 bg-neon-green/20 rounded-full w-1/2 mx-auto"></div>
                        <div className="h-2 bg-neon-green/10 rounded-full w-2/3 mx-auto"></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">{currentTab.icon}</div>
                      <div className="text-gray-400">
                        {currentTab.title}
                      </div>
                    </div>
                  </div>
                )}

                {/* Animated elements */}
                <div className="absolute top-4 right-4">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="w-3 h-3 rounded-full bg-neon-green"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-neon-green text-dark-bg px-4 py-2 rounded-full font-semibold text-sm shadow-lg"
              >
                ✨ New
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
