'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    // Enable Google Analytics or other tracking here if needed
    console.log('Cookies accepted');
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
    // Disable non-essential cookies
    console.log('Cookies declined');
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-surface/98 backdrop-blur-md border-t-2 border-neon-green/40 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-white font-semibold text-lg mb-2 flex items-center gap-2">
              <span className="text-2xl">🍪</span>
              Cookie Notice
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-3xl">
              We use cookies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. 
              By clicking &quot;Accept All&quot;, you consent to our use of cookies. You can manage your preferences or learn more in our{' '}
              <Link href="/cookie-policy" className="text-neon-green hover:underline font-semibold">
                Cookie Policy
              </Link>{' '}
              and{' '}
              <Link href="/privacy-policy" className="text-neon-green hover:underline font-semibold">
                Privacy Policy
              </Link>.
            </p>
          </div>
          
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={handleDecline}
              className="px-6 py-2.5 rounded-lg border-2 border-gray-500 text-gray-300 font-semibold hover:bg-gray-500/20 transition-all"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2.5 rounded-lg bg-neon-green text-base font-semibold hover:bg-neon-green/90 transition-all shadow-lg"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
