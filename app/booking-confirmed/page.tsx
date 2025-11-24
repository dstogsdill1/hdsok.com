import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Booking Confirmed - Meeting Scheduled | HDS",
  description: "Your meeting with Homeland Development Services has been scheduled. We look forward to discussing your maintenance and facility needs.",
  robots: "noindex, nofollow",
};

export default function BookingConfirmedPage() {
  return (
    <div className="min-h-screen bg-base py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-neon-green/20 mb-6">
            <span className="text-5xl">✓</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neon-green mb-4">
            BOOKING CONFIRMED — YOUR MEETING HAS BEEN SCHEDULED
          </h1>
        </div>

        <div className="bg-surface/80 backdrop-blur-sm border border-border-subtle rounded-xl p-8 mb-8">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Thank you for scheduling time with Homeland Development Services. A confirmation email and calendar invitation have been sent to the 
            address you provided. Our team will review the information you shared and come prepared to discuss your maintenance and facility needs.
          </p>

          <div className="border-t border-border-subtle pt-6 mt-6">
            <h2 className="text-2xl font-bold text-white mb-4">What to expect</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              At the scheduled time, one of our coordinators will join you via Microsoft Teams to walk through your service questions, share insights and 
              answer any concerns you may have. You will also receive a reminder as your meeting approaches.
            </p>
          </div>

          <div className="border-t border-border-subtle pt-6 mt-6">
            <h2 className="text-2xl font-bold text-white mb-4">Need to reschedule or cancel?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you need to reschedule or cancel your appointment, please use the links in your confirmation email or call us at{' '}
              <a href="tel:14055462820" className="text-neon-green hover:underline font-semibold">
                (405) 546-2820
              </a>
              . For urgent service issues that cannot wait until your meeting, call our 24/7 service desk at{' '}
              <a href="tel:14055243500" className="text-neon-green hover:underline font-semibold">
                (405) 524-3500
              </a>{' '}
              or email{' '}
              <a href="mailto:service@hdsok.com" className="text-neon-green hover:underline">
                service@hdsok.com
              </a>{' '}
              — include your name and service address so we can respond quickly.
            </p>
          </div>
        </div>

        <div className="bg-surface/60 backdrop-blur-sm border border-border-subtle rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">While you wait, explore our website</h3>
          <p className="text-gray-300 mb-4">
            While you wait, explore our website to learn more about how we reduce repair costs through our maintenance expertise, construction 
            services, design-build capability and energy optimization. Visit the{' '}
            <Link href="/hds-console" className="text-neon-green hover:underline">
              HDS Service Desk
            </Link>{' '}
            page to see how our virtual operator traces every site and tracks service calls around the clock.
          </p>
        </div>

        <div className="border-t border-border-subtle pt-6">
          <h3 className="text-lg font-semibold text-white mb-3">Privacy</h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            We use your contact details solely to coordinate services, share updates and improve your support experience. Read our full{' '}
            <Link href="/privacy-policy" className="text-neon-green hover:underline">
              Privacy Policy
            </Link>{' '}
            for details on how data is collected and protected.
          </p>
          <p className="text-gray-300 font-semibold text-center text-lg">
            Thank you for trusting HDS to keep your facilities running smoothly — we look forward to speaking with you soon.
          </p>
        </div>

        <div className="text-center mt-10 pb-8">
          <p className="text-gray-400 text-sm mb-8">FROM REPAIRS TO REMODELS — WE&apos;VE GOT YOU COVERED</p>
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
