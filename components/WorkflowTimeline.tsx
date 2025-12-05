"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

const steps = [
  {
    label: "01",
    title: "Issue reported",
    description:
      "Tenant, store staff, or property manager submits a request via phone, web, or the HDS app.",
  },
  {
    label: "02",
    title: "Smart triage",
    description:
      "HDS dispatch applies your rules, priority, and SLAs to route the request.",
  },
  {
    label: "03",
    title: "Vendor dispatched",
    description:
      "The right licensed vendor is notified with scope, photos, and site details.",
  },
  {
    label: "04",
    title: "Work completed",
    description:
      "Status, notes, and documentation roll back into HDS Console in real time.",
  },
  {
    label: "05",
    title: "Review & insights",
    description:
      "Costs, completion times, and asset history feed into your portfolio analytics.",
  },
];

export function WorkflowTimeline() {
  return (
    <section className="relative overflow-hidden px-4 py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-green/40 to-transparent" />
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-neon-green/40 via-neon-green/10 to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col gap-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neon-green">
              How HDS runs a call
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold text-white sm:text-4xl leading-tight">
              From first call to closed work order—on one rail
            </h2>
            <p className="mt-4 text-base text-gray-300 sm:text-lg leading-relaxed">
              A clean, predictable workflow for every maintenance request
            </p>
          </div>
        </Reveal>

        <div className="relative mt-4 grid gap-6 md:grid-cols-5">
          {steps.map((step, index) => (
            <Reveal key={step.label} delay={index * 0.05}>
              <motion.div
                className="group relative flex h-full flex-col justify-between rounded-xl border border-border-subtle bg-surface/70 backdrop-blur-sm p-4 text-left shadow-lg hover:shadow-neon-green/10 hover:border-neon-green/30"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <div className="mb-4 flex items-center justify-between gap-2 text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  <span>{step.label}</span>
                  <span className="rounded-full bg-neon-green/10 px-2 py-0.5 text-[9px] font-medium text-neon-green">
                    Step
                  </span>
                </div>
                <div>
                  <h3 className="mb-2 text-sm font-semibold text-white sm:text-base">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-300 sm:text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
