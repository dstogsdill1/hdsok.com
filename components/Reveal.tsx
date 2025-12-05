"use client";

import { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
}

export function Reveal({ children, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -10% 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 24, filter: "blur(6px)" }
      }
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
