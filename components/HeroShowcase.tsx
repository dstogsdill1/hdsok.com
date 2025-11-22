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
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-slate-950 to-slate-950 px-4 pb-24 pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-[-10%] h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute right-[-10%] top-1/3 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse gap-12 lg:flex-row lg:items-center">
        {/* Left: Copy */}
        <motion.div
          className="flex-1 space-y-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-black/40 px-3 py-1 text-xs font-medium text-emerald-300 shadow-[0_0_35px_rgba(16,185,129,0.4)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live vendor coordination for commercial portfolios
          </motion.div>

          <motion.h1
            variants={item}
            className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Vendor management that feels like a product, not a call tree.
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-xl text-balance text-lg text-gray-300 sm:text-xl"
          >
            HDS coordinates licensed vendors, dispatch, and projects across grocery, retail,
            and multi-unit portfolios—so your team stops chasing maintenance and starts
            managing strategy.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link
              href="/contact"
              className="rounded-lg bg-emerald-400 px-7 py-3 text-sm font-semibold text-black shadow-[0_0_35px_rgba(16,185,129,0.7)] transition hover:bg-emerald-300"
            >
              Talk to the HDS team
            </Link>
            <Link
              href="/hds-console"
              className="rounded-lg border border-emerald-400/70 px-7 py-3 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/10"
            >
              Explore HDS Console
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-4 flex flex-wrap gap-6 text-xs text-gray-400"
          >
            <div>
              <p className="font-semibold text-emerald-200">24/7 dispatch</p>
              <p>US-based coordination for critical calls.</p>
            </div>
            <div>
              <p className="font-semibold text-emerald-200">Portfolio-wide view</p>
              <p>Sites, spend, and work orders in one console.</p>
            </div>
            <div>
              <p className="font-semibold text-emerald-200">Vendor-first model</p>
              <p>HDS manages partners; you keep control.</p>
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
          <div className="relative mx-auto max-w-xl rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
            <div className="mb-4 flex items-center justify-between gap-4 border-b border-white/5 pb-3 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <span className="h-2 w-2 rounded-full bg-yellow-500" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="ml-3 text-[10px] uppercase tracking-[0.18em] text-gray-500">
                  HDS Console
                </span>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                Live portfolio
              </span>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-3">
                <DashboardCharts />
              </div>

              <div className="grid gap-3 text-xs text-gray-300 sm:grid-cols-3">
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    Open work orders
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-white">327</p>
                  <p className="mt-1 text-[11px] text-emerald-300">↘ 14% vs. last 30 days</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/40 p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                    Avg. response
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-white">26m</p>
                  <p className="mt-1 text-[11px] text-gray-400">Across priority 1–3 calls</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/40 p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                    Vendor health
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-emerald-300">A-</p>
                  <p className="mt-1 text-[11px] text-gray-400">On-time & completion score</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
