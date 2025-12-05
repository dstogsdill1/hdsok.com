'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Portfolio tenant data matching HDS Console
const PORTFOLIO_TENANTS = [
  {
    slug: 'hds-super-stores',
    name: 'HDS SuperStores',
    industry: 'Retail Supercenter',
    description: 'Regional flagship stores balancing HVAC, refrigeration, and 24/7 facility support with centralized dispatch.',
    logo: '🏪',
    stats: [
      { label: 'Supercenters', value: '20' },
      { label: 'Assets', value: '1,200+' },
      { label: 'Response', value: '2 hr Average' },
    ],
    locationCount: 20,
    workOrders: 1925,
    hasEnergy: true,
  },
  {
    slug: 'cimarron-manufacturing',
    name: 'Cimarron Manufacturing',
    industry: 'Industrial Machine Shop',
    description: 'Precision manufacturing and metalworking facilities with heavy equipment maintenance needs.',
    logo: '🏭',
    stats: [
      { label: 'Facilities', value: '3 Sites' },
      { label: 'Equipment', value: '120+ Assets' },
      { label: 'Uptime', value: '99.2%' },
    ],
    locationCount: 3,
    workOrders: 847,
    hasEnergy: false,
  },
  {
    slug: 'hds-megamart',
    name: 'MegaMarts',
    industry: 'Retail Chain',
    description: 'Multi-location retail stores requiring HVAC, refrigeration, and facilities management across a regional footprint.',
    logo: '🛒',
    stats: [
      { label: 'Stores', value: '14 Locations' },
      { label: 'Assets', value: '800+ Assets' },
      { label: 'Response', value: '< 4hr Average' },
    ],
    locationCount: 14,
    workOrders: 2156,
    hasEnergy: false,
  },
  {
    slug: 'hds-living',
    name: 'HDS Living',
    industry: 'Multi-Family Residential',
    description: 'Property management for residential communities with tenant service requests and preventive maintenance programs.',
    logo: '🏠',
    stats: [
      { label: 'Communities', value: '8' },
      { label: 'Apartments', value: '450+' },
      { label: 'Service', value: '24/7 Dispatch' },
    ],
    locationCount: 8,
    workOrders: 1329,
    hasEnergy: false,
  },
  {
    slug: 'hds-property-group',
    name: 'Property Group',
    industry: 'Commercial Real Estate',
    description: 'Mixed-use commercial properties with integrated facilities management and tenant coordination.',
    logo: '🏢',
    stats: [
      { label: 'Buildings', value: '6' },
      { label: 'Sq Ft', value: '1.2M Total' },
      { label: 'Tenants', value: '40+ Businesses' },
    ],
    locationCount: 6,
    workOrders: 678,
    hasEnergy: false,
  },
  {
    slug: 'hds-civic-services',
    name: 'HDS Civic Services',
    industry: 'Public Infrastructure',
    description: 'Municipal facilities, emergency services, and community centers with regulatory-driven uptime requirements.',
    logo: '🏛️',
    stats: [
      { label: 'Facilities', value: '11' },
      { label: 'Support', value: '24/7' },
      { label: 'Coverage', value: 'Countywide' },
    ],
    locationCount: 11,
    workOrders: 742,
    hasEnergy: false,
  },
];

// Calculate totals
const totals = {
  locations: PORTFOLIO_TENANTS.reduce((sum, t) => sum + t.locationCount, 0),
  workOrders: PORTFOLIO_TENANTS.reduce((sum, t) => sum + t.workOrders, 0),
  energyProperties: 1, // HDS SuperStores
  brands: PORTFOLIO_TENANTS.length,
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function PortfolioShowcase() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-neon-green/15 blur-3xl" />
        <div className="absolute right-[-10rem] bottom-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[40rem] w-[40rem] rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <p className="text-neon-green text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Portfolio Command Center
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Portfolio at a Glance
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Managing diverse portfolios across retail, manufacturing, residential, commercial, and municipal sectors—all from one unified platform.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {PORTFOLIO_TENANTS.map((tenant, index) => (
            <motion.div
              key={tenant.slug}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:border-neon-green/30 hover:shadow-[0_25px_70px_rgba(198,255,0,0.1)] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-neon-green/5 via-transparent to-cyan-500/5 group-hover:opacity-30 transition-opacity" />
              
              {/* Header */}
              <div className="relative flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center text-3xl">
                  {tenant.logo}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-neon-green transition-colors">
                    {tenant.name}
                  </h3>
                  <p className="text-sm text-gray-400">{tenant.industry}</p>
                </div>
              </div>

              {/* Description */}
              <p className="relative text-gray-400 text-sm mb-5 line-clamp-2">
                {tenant.description}
              </p>

              {/* Stats */}
              <div className="relative grid grid-cols-3 gap-3 mb-5">
                {tenant.stats.map((stat, idx) => (
                  <div key={idx} className="text-center bg-white/5 rounded-lg py-2 px-1">
                    <div className="text-white font-bold text-sm">{stat.value}</div>
                    <div className="text-gray-500 text-[10px] uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="relative flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{tenant.locationCount} Locations</span>
                </div>
                {tenant.hasEnergy && (
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>ENERGY STAR®</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>{tenant.workOrders.toLocaleString()} WOs</span>
                </div>
              </div>

              {/* Hover arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio Summary Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/95 p-5 text-center">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-neon-green/10 via-transparent to-transparent" />
            <div className="relative text-4xl font-extrabold text-white mb-1">{totals.locations}</div>
            <div className="relative text-gray-400 text-sm">Total Locations</div>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/95 p-5 text-center">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent" />
            <div className="relative text-4xl font-extrabold text-white mb-1">{totals.workOrders.toLocaleString()}</div>
            <div className="relative text-gray-400 text-sm">Active Work Orders</div>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/95 p-5 text-center">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-emerald-400/10 via-transparent to-transparent" />
            <div className="relative text-4xl font-extrabold text-emerald-400 mb-1">{totals.energyProperties}</div>
            <div className="relative text-gray-400 text-sm">ENERGY STAR® Properties</div>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/95 p-5 text-center">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-purple-400/10 via-transparent to-transparent" />
            <div className="relative text-4xl font-extrabold text-white mb-1">{totals.brands}</div>
            <div className="relative text-gray-400 text-sm">Portfolio Brands</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
