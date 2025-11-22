"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface MotionCardProps {
  children: ReactNode;
  className?: string;
}

export function MotionCard({ children, className }: MotionCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
        boxShadow: "0 22px 55px rgba(0,0,0,0.6)",
      }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 22, mass: 0.9 }}
      className={clsx(
        "relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm",
        "transition-colors duration-300 hover:border-emerald-400/60",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.18),_transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
