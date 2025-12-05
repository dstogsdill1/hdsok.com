'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './Reveal';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Regional Property Manager',
    role: 'Operations Lead',
    company: 'Multi-Unit Commercial Portfolio',
    content: 'The platform transformed how we coordinate maintenance across all our locations. Real-time tracking and automated dispatch cut our response times significantly and gave us unprecedented visibility into our operations.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Facilities Director',
    role: 'Maintenance Coordinator',
    company: 'Retail Management Company',
    content: 'The vendor performance tracking helps us work with the best contractors. We caught equipment issues before they became expensive emergencies, and the analytics tools provide insights we never had before.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Operations Manager',
    role: 'Facility Operations',
    company: 'Commercial Real Estate Portfolio',
    content: 'Finally, one platform that does it all. From work orders to invoicing to energy tracking, everything is in one place. Our maintenance coordination improved dramatically, and our team is more efficient than ever.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Store Manager',
    role: 'Operations Lead',
    company: 'Regional Retail Chain',
    content: 'The mobile app is a game-changer. Store managers can submit requests instantly with photos, track progress, and stay updated without being tied to a desktop. The 24/7 dispatch center provides excellent support.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Maintenance Coordinator',
    role: 'Facility Management',
    company: 'Commercial Property Group',
    content: 'The vendor portal integration is excellent. Contractors can see their assigned work, update statuses, and submit information digitally. It eliminated so much back-and-forth and reduced our administrative time significantly.',
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-1/3 top-10 h-96 w-96 rounded-full bg-purple-500/15 blur-3xl" />
        <div className="absolute right-1/3 bottom-10 h-96 w-96 rounded-full bg-neon-green/15 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300">
              See what our clients say about transforming their operations
            </p>
          </div>
        </Reveal>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main testimonial card */}
          <div className="relative min-h-[400px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full"
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/95 p-8 md:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
                  <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-neon-green/10 via-transparent to-purple-500/10" />
                  
                  <div className="relative">
                    {/* Quote mark */}
                    <div className="text-neon-green text-6xl mb-4 opacity-50">"</div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="text-neon-green text-2xl"
                        >
                          ★
                        </motion.span>
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
                      {currentTestimonial.content}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neon-green to-emerald-500 flex items-center justify-center text-white font-bold text-xl">
                        {currentTestimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-white font-semibold text-lg">
                          {currentTestimonial.name}
                        </div>
                        <div className="text-gray-400">
                          {currentTestimonial.role} • {currentTestimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-slate-900/80 hover:bg-slate-800 border border-white/10 rounded-full p-3 md:p-4 text-neon-green transition-all hover:scale-110"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-slate-900/80 hover:bg-slate-800 border border-white/10 rounded-full p-3 md:p-4 text-neon-green transition-all hover:scale-110"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-neon-green'
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Trusted by 500+ properties worldwide</p>
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="text-white/80">🏢 Retail Centers</div>
              <div className="text-white/80">🏪 Grocery Chains</div>
              <div className="text-white/80">🏘️ Multi-Unit Properties</div>
              <div className="text-white/80">🏭 Commercial Facilities</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
