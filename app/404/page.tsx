import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "404 - Page Not Found | HDS",
  description: "The page you're looking for doesn't exist. Return to Homeland Development Services home page.",
  robots: "noindex, nofollow",
};

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-base via-base to-surface flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-block relative">
            <div className="text-9xl font-bold text-neon-green animate-pulse">
              404
            </div>
            <div className="absolute inset-0 blur-2xl opacity-50 bg-neon-green"></div>
          </div>
          <div className="mt-4">
            <span className="text-2xl font-semibold text-white tracking-wider">HDS</span>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Oh Crap—Our IT Just Exploded
        </h1>
        
        <p className="text-xl text-gray-300 mb-8">
          This is why construction guys shouldn&apos;t be in charge of I.T.
        </p>

        <div className="bg-surface/80 backdrop-blur-sm border border-border-subtle rounded-xl p-6 mb-8">
          <p className="text-gray-300 mb-4">
            The page you&apos;re looking for has wandered off to fix a refrigeration rack or got lost in a service ticket. 
            Let&apos;s get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-neon-green text-dark-bg px-8 py-3 rounded-lg font-semibold hover:bg-neon-green/90 transition-all shadow-lg"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-block border-2 border-neon-green text-neon-green px-8 py-3 rounded-lg font-semibold hover:bg-neon-green/10 transition-all"
          >
            Send a note
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-border-subtle">
          <p className="text-gray-400 text-sm">
            Need help? Call our 24/7 service desk:{' '}
            <a href="tel:14057774156" className="text-neon-green hover:underline font-semibold">
              (405) 777-4156
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
