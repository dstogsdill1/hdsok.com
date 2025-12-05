import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Thank You - Request Received | HDS",
  description: "Your service request has been received. Our dispatch team will review and respond within 24 hours.",
  robots: "noindex, nofollow",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-base py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-neon-green/20 mb-6">
            <span className="text-5xl">✓</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Thank You—Your request has been received
          </h1>
          <p className="text-xl text-gray-300">
            We appreciate you reaching out to Homeland Development Services.
          </p>
        </div>

        <div className="bg-surface/80 backdrop-blur-sm border border-border-subtle rounded-xl p-8 text-left mb-8">
          <p className="text-gray-300 mb-6 leading-relaxed">
            A confirmation e-mail has been sent to the address you provided. Our dispatch team will review the information and respond within 24 hours 
            (sooner if your ticket is marked <span className="text-neon-green font-semibold">Emergency</span>).
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">What happens next</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-neon-green mt-1">•</span>
              <span>One of our coordinators verifies the details and assigns the right specialist.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-neon-green mt-1">•</span>
              <span>You'll receive a follow-up e-mail with your work-order ID and the name of the technician or vendor taking the call.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-neon-green mt-1">•</span>
              <span>Progress updates will arrive automatically as the job moves from <em>Scheduled</em> to <em>On-site</em> to <em>Complete</em>.</span>
            </li>
          </ul>

          <div className="mt-6 pt-6 border-t border-border-subtle">
            <h3 className="text-lg font-semibold text-white mb-3">Need to reach us sooner?</h3>
            <p className="text-gray-300 mb-4">
              For critical issues or live updates, call our 24/7 service desk at{' '}
              <a href="tel:14057774156" className="text-neon-green hover:underline font-semibold">
                (405) 777-4156
              </a>{' '}
              or e-mail{' '}
              <a href="mailto:info@hdsok.com" className="text-neon-green hover:underline">
                info@hdsok.com
              </a>
              . For escalations you may also text{' '}
              <a href="sms:14057774156" className="text-neon-green hover:underline font-semibold">
                HDS
              </a>{' '}
              (include your name and store number) and a manager will respond within minutes.
            </p>
          </div>
        </div>

        <div className="bg-surface/60 backdrop-blur-sm border border-border-subtle rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">Keep exploring while you wait</h3>
          <div className="space-y-2 text-gray-300">
            <p>• Learn more <Link href="/about" className="text-neon-green hover:underline">About Us</Link> — how we turn reactive repairs into long-term reliability.</p>
            <p>• Review our <Link href="/services" className="text-neon-green hover:underline">Services</Link> portfolio — mechanical & refrigeration, facility maintenance, construction, design-build and energy optimization.</p>
            <p>• Visit the <Link href="/hds-console" className="text-neon-green hover:underline">HDS Console</Link> page to see how our virtual operator traces every site and tracks service calls around the clock.</p>
          </div>
        </div>

        <div className="border-t border-border-subtle pt-6">
          <h3 className="text-lg font-semibold text-white mb-3">Privacy</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            We use your contact details solely to coordinate service, share status updates and improve your support experience. 
            Read our full <Link href="/privacy-policy" className="text-neon-green hover:underline">Privacy Policy</Link> for details on how data is stored and protected.
          </p>
          <p className="text-gray-300 mt-6 font-semibold">
            Thank you for trusting HDS to keep your facilities running smoothly — we're already on it.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-block bg-neon-green text-base px-8 py-3 rounded-lg font-semibold hover:bg-neon-green/90 transition-all shadow-lg"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
