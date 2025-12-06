"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import DashboardCharts from "@/components/DashboardCharts";

const container: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function HeroShowcase() {
  return (
    <section className="relative overflow-hidden bg-base px-4 pb-24 pt-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-[-10%] h-64 w-64 rounded-full bg-neon-green/15 blur-3xl" />
        <div className="absolute right-[-10%] top-1/3 h-72 w-72 rounded-full bg-neon-green/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neon-green/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Page Title & Subtitle */}
        <motion.div
          className="text-center mb-16 space-y-3"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={item}
            className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl"
          >
            Homeland Development Services
          </motion.h1>
          <motion.p
            variants={item}
            className="text-xl text-gray-100 sm:text-2xl"
          >
            Unified CMMS for small businesses—command, maintain, optimize, save
          </motion.p>
          <motion.p
            variants={item}
            className="text-sm text-gray-400 max-w-2xl mx-auto"
          >
            Run a tighter operation with instant filtering, fast vendor dispatch, and built‑in compliance. Launch a guided demo in seconds or connect your data to see live results.
          </motion.p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-start">
          {/* Left: Copy */}
          <motion.div
            className="flex-1 space-y-6"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-neon-green/40 bg-surface/60 backdrop-blur-sm px-3 py-1 text-xs font-medium text-neon-green shadow-lg"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-neon-green animate-pulse" />
              Regional service • Nationwide platform capability
            </motion.div>

            <motion.h2
              variants={item}
              className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight"
            >
              Complete portfolio visibility—one dashboard for all your locations
            </motion.h2>

            <motion.p
              variants={item}
              className="max-w-xl text-balance text-lg text-gray-100 sm:text-xl leading-relaxed"
            >
              Track work orders, energy spend, and vendor performance across your entire portfolio with real-time insights. Launch a guided demo in seconds or connect your data to see live results.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href="/contact"
                className="rounded-lg bg-neon-green px-7 py-3 font-semibold text-base shadow-lg transition hover:bg-neon-green/90"
              >
                Get a Quote
              </Link>
              <Link
                href="/hds-console"
                className="rounded-lg border-2 border-neon-green/70 px-7 py-3 font-semibold text-neon-green transition hover:bg-neon-green/10"
              >
                Request Demo
              </Link>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-6 flex flex-wrap gap-6 text-sm text-gray-400 leading-relaxed"
            >
              <div>
                <p className="font-semibold text-neon-green">Unified filters</p>
                <p>One filter set follows you everywhere</p>
              </div>
              <div>
                <p className="font-semibold text-neon-green">Fast dispatch</p>
                <p>Issue to vendor in seconds</p>
              </div>
              <div>
                <p className="font-semibold text-neon-green">Vendor compliance</p>
                <p>COI/W9 tracking built-in</p>
              </div>
            </motion.div>
          </motion.div>

        {/* Right: Console Preview */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
        >
          <div className="relative mx-auto max-w-xl rounded-2xl border border-border-subtle bg-surface/80 backdrop-blur-sm p-5 shadow-xl">
            <div className="mb-4 flex items-center justify-between gap-4 border-b border-border-subtle pb-3 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <span className="h-2 w-2 rounded-full bg-yellow-500" />
                <span className="h-2 w-2 rounded-full bg-neon-green" />
                <span className="ml-3 text-[10px] uppercase tracking-[0.18em] text-gray-500">
                  HDS Console
                </span>
              </div>
              <span className="rounded-full bg-neon-green/10 px-2 py-0.5 text-[10px] font-medium text-neon-green">
                Live portfolio
              </span>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-border-subtle bg-base/60 p-3">
                <DashboardCharts variant="minimal" />
              </div>

              <div className="grid gap-3 text-xs text-gray-100 sm:grid-cols-3">
                <div className="rounded-xl border border-neon-green/30 bg-neon-green/5 p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neon-green">
                    Work Orders
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-white">22,951</p>
                  <p className="mt-1 text-[11px] text-neon-green">↗ Active portfolio</p>
                </div>
                <div className="rounded-xl border border-border-subtle bg-surface/60 p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                    Total Spend
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-white">$68.9M</p>
                  <p className="mt-1 text-[11px] text-gray-400">Maintenance + Energy</p>
                </div>
                <div className="rounded-xl border border-border-subtle bg-surface/60 p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                    Avg per WO
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-neon-green">$1,573</p>
                  <p className="mt-1 text-[11px] text-gray-400">365 sites tracked</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
