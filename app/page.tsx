import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import DashboardCharts from '@/components/DashboardCharts';
import { HeroShowcase } from '@/components/HeroShowcase';
import { Reveal } from '@/components/Reveal';
import { WorkflowTimeline } from '@/components/WorkflowTimeline';
import StatsCounter from '@/components/StatsCounter';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ProductShowcase from '@/components/ProductShowcase';

export const metadata: Metadata = {
  title: "HDS Console - Operations & Analytics Platform for Small Businesses",
  description: "Run operations AND show analytics with HDS Console. Unified CMMS for small businesses, retail chains, and property managers. Fast dispatch, vendor compliance, and real-time energy tracking (EUI).",
  keywords: [
    "operations platform",
    "CMMS for small business",
    "retail maintenance software",
    "restaurant facilities management",
    "vendor dispatch",
    "energy analytics",
    "EUI tracking",
    "vendor compliance COI W9",
    "multi-site management",
    "property management CMMS"
  ],
  openGraph: {
    title: "HDS Console - Operations & Analytics Platform",
    description: "Unified CMMS for small businesses—command, maintain, optimize, save. Run operations AND see analytics in real time.",
    url: "https://www.hdsok.com",
    images: [
      {
        url: "https://www.hdsok.com/images/HDS_Logo_Inverted_HighRes.png",
        width: 1200,
        height: 630,
        alt: "HDS Console - Operations & Analytics Platform",
      },
    ],
  },
};

export default function Home() {
  return (
    <div>
      <HeroShowcase />

      {/* HDS Console vs HDS Services Explanation */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              One Company, Two Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding the HDS ecosystem—our platform and our people
            </p>
          </div>
          </Reveal>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* HDS Console Platform */}
            <Reveal>
            <div className="rounded-2xl border border-neon-blue/30 bg-surface/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-neon-blue/20 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">💻</span>
                <h3 className="text-2xl font-bold text-neon-blue">HDS Console</h3>
              </div>
              <p className="text-lg font-semibold text-white mb-4">Operations & Analytics Platform</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">•</span>
                  <span>HDS runs operations AND shows analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">•</span>
                  <span>Use as standalone console or with managed services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">•</span>
                  <span>Multi-tenant portfolio management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">•</span>
                  <span>Fast dispatch & vendor compliance</span>
                </li>
              </ul>
            </div>
            </Reveal>

            {/* HDS Services */}
            <Reveal delay={0.1}>
            <div className="rounded-2xl border border-neon-green/30 bg-surface/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-neon-green/20 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🛠️</span>
                <h3 className="text-2xl font-bold text-neon-green">HDS Services</h3>
              </div>
              <p className="text-lg font-semibold text-white mb-4">Our Team</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-neon-green mt-1">•</span>
                  <span>Licensed vendor coordination & dispatch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-green mt-1">•</span>
                  <span>24/7/365 emergency response</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-green mt-1">•</span>
                  <span>Global contractor network (EU, Americas, Central Asia)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-green mt-1">•</span>
                  <span>Project management & consulting</span>
                </li>
              </ul>
            </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-lg">
              <span className="text-neon-blue font-semibold">HDS Console</span> powers the technology. <span className="text-neon-green font-semibold">HDS Services</span> delivers the expertise.
            </p>
          </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}