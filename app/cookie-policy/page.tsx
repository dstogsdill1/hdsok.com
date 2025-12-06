import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cookie Policy | Homeland Development Services",
  description: "Cookie Policy for Homeland Development Services. Learn how we use cookies and tracking technologies.",
  keywords: ["cookie policy", "tracking", "HDS cookies", "web analytics"],
};

export default function CookiePolicyPage() {
  const today = 'December 5, 2025';
  return (
    <div className="min-h-screen bg-base py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          Cookie Policy
        </h1>

        <div className="bg-surface/80 backdrop-blur-sm border border-border-subtle rounded-xl p-8 space-y-8 text-gray-300 leading-relaxed">
          <div className="text-sm text-gray-400 mb-6">
            <p className="font-semibold text-white">Effective Date: {today}</p>
          </div>

          <section className="space-y-4">
            <p>
              This Cookie Policy explains how Homeland Development Services LLC (&quot;HDS&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar technologies to recognize you when you visit our website at HDSOK.com (&quot;Website&quot;). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6">What are cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6">Why do we use cookies?</h2>
            <p>
              We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Website. Third parties serve cookies through our Website for analytics and other purposes.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6">Types of Cookies We Use</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <strong className="text-white">Essential Cookies:</strong> These are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas and basic navigation.
              </li>
              <li>
                <strong className="text-white">Performance and Functionality Cookies:</strong> These are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
              </li>
              <li>
                <strong className="text-white">Analytics and Customization Cookies:</strong> These collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you. We use Google Analytics to understand visitor behavior and improve our site.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-6">How can I control cookies?</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser&apos;s help menu for more information.
            </p>
            <p className="mt-2">
              Most web browsers allow some control of cookies through browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit{' '}
              <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-neon-green hover:underline">
                www.allaboutcookies.org
              </a>.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6">Do Not Track</h2>
            <p>
              Some browsers include a &quot;Do Not Track&quot; (DNT) feature that can signal to websites that you do not want to have your online activity tracked. Currently, our website does not respond to DNT signals as there is no industry consensus on what such signals should trigger.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6">More Information</h2>
            <p>
              For more information about our privacy practices, please review our{' '}
              <Link href="/privacy-policy" className="text-neon-green hover:underline">
                Privacy Policy
              </Link>.
            </p>
            <p>
              If you have any questions about our use of cookies or other technologies, please email us at{' '}
              <a href="mailto:info@hdsok.com" className="text-neon-green hover:underline">
                info@hdsok.com
              </a>.
            </p>
          </section>

          <div className="bg-base/60 border border-border-subtle rounded-lg p-4 mt-6">
            <p className="font-semibold text-white">Homeland Development Services LLC</p>
            <p>P.O. Box 890325</p>
            <p>Oklahoma City, OK 73189</p>
            <p>Phone:{' '}
              <a href="tel:14055462820" className="text-neon-green hover:underline">
                (405) 546-2820
              </a>
            </p>
            <p>Email:{' '}
              <a href="mailto:info@hdsok.com" className="text-neon-green hover:underline">
                info@hdsok.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
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
