'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  details: string[];
  color: string;
}

const features: Feature[] = [
  {
    id: 'dispatch',
    icon: '⚡',
    title: 'Smart Dispatch',
    description: 'AI-powered routing sends work orders to the right contractor instantly',
    details: [
      'Automated vendor selection based on location and expertise',
      'Real-time availability checking',
      'Emergency escalation protocols',
      'Multi-language support for global operations',
    ],
    color: 'from-amber-400/10 via-transparent to-neon-green/10',
  },
  {
    id: 'analytics',
    icon: '📊',
    title: 'Real-Time Analytics',
    description: 'Live dashboards with predictive insights and cost tracking',
    details: [
      'Portfolio-wide KPI monitoring',
      'Customizable reporting and alerts',
      'Budget vs. actual variance tracking',
      'Predictive maintenance recommendations',
    ],
    color: 'from-neon-green/10 via-transparent to-emerald-500/10',
  },
  {
    id: 'mobile',
    icon: '📱',
    title: 'Mobile-First',
    description: 'Native iOS and Android apps with full platform functionality',
    details: [
      'Submit and manage work orders on the go',
      'Photo and document capture',
      'Push notifications for critical updates',
      'Offline mode for field technicians',
    ],
    color: 'from-purple-500/10 via-transparent to-neon-green/5',
  },
  {
    id: 'integration',
    icon: '🔗',
    title: 'Seamless Integration',
    description: 'Connect with your existing ERP, accounting, and property management systems',
    details: [
      'QuickBooks, Xero, SAP integration',
      'Property management software sync',
      'IoT sensor data integration',
      'Custom API for proprietary systems',
    ],
    color: 'from-sky-400/10 via-transparent to-neon-green/10',
  },
  {
    id: 'energy',
    icon: '⚡',
    title: 'Energy Management',
    description: 'Track consumption, identify waste, and optimize for sustainability',
    details: [
      'Real-time energy usage monitoring',
      'Cost per square foot analysis',
      'Carbon footprint tracking',
      'Utility bill validation and optimization',
    ],
    color: 'from-emerald-400/10 via-transparent to-neon-green/10',
  },
  {
    id: 'vendor',
    icon: '🤝',
    title: 'Vendor Portal',
    description: 'Empower contractors with tools for efficient service delivery',
    details: [
      'Self-service work order acceptance',
      'Digital time and materials tracking',
      'Invoice submission and approval workflow',
      'Performance dashboards and ratings',
    ],
    color: 'from-orange-400/10 via-transparent to-amber-400/10',
  },
];

export default function InteractiveFeatureGrid() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -left-40 top-1/4 h-[32rem] w-[32rem] rounded-full bg-neon-green/20 blur-3xl" />
        <div className="absolute right-[-8rem] bottom-1/4 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Powerful Features for Modern Operations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Click any feature to learn more about how HDS Console transforms facility management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              layout
              onClick={() => setSelectedFeature(selectedFeature === feature.id ? null : feature.id)}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 cursor-pointer shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:border-neon-green/40 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${feature.color}`} />
              
              <div className="relative">
                <motion.div 
                  className="text-5xl mb-4"
                  animate={selectedFeature === feature.id ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>

                <AnimatePresence>
                  {selectedFeature === feature.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-white/10 pt-4 mt-4"
                    >
                      <div className="space-y-2">
                        {feature.details.map((detail, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-gray-400 text-sm flex items-start"
                          >
                            <span className="text-neon-green mr-2 flex-shrink-0">✓</span>
                            <span>{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-4 text-neon-green text-sm font-semibold">
                  {selectedFeature === feature.id ? 'Click to collapse' : 'Click to learn more →'}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
