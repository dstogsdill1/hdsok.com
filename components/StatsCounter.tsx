'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

interface StatItemProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

function StatItem({ value, suffix = '', prefix = '', label, duration = 2 }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-neon-green mb-2">
        {prefix}
        {displayValue.toLocaleString()}
        {suffix}
      </div>
      <div className="text-gray-400 text-sm md:text-base lg:text-lg">{label}</div>
    </motion.div>
  );
}

interface StatsCounterProps {
  stats?: Array<{
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
  }>;
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  const defaultStats: Array<{
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
  }> = [
    { value: 500, suffix: '+', label: 'Properties Managed' },
    { value: 50000, suffix: '+', label: 'Work Orders Completed' },
    { value: 99, suffix: '%', label: 'Client Satisfaction' },
    { value: 24, suffix: '/7', label: 'Emergency Support' },
  ];

  const displayStats = stats || defaultStats;

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-neon-green/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {displayStats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              suffix={stat.suffix || ''}
              prefix={stat.prefix || ''}
              label={stat.label}
              duration={2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
