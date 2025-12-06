'use client';

import Link from 'next/link';
import Script from 'next/script';

export default function BookACallClient() {
  return (
    <>
      <div className="min-h-screen bg-base py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neon-green mb-4">
              Book a 30 Min call
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Schedule time with our team to discuss your maintenance or project needs, and our team will be in touch.
            </p>
          </div>

          <div className="bg-surface/80 backdrop-blur-sm border border-border-subtle rounded-xl overflow-hidden calendly-container">
            {/* Calendly inline widget */}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/hdsok/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=39ff14"
            ></div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm mb-4">
              Prefer a different method?{' '}
              <Link href="/contact" className="text-neon-green hover:underline">
                Contact us directly
              </Link>
            </p>
            <p className="text-gray-400 text-sm">
              For urgent service issues, call our 24/7 service desk at{' '}
              <a href="tel:14057774156" className="text-neon-green hover:underline font-semibold">
                (405) 777-4156
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Calendly widget script */}
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="lazyOnload"
      />
    </>
  );
}
