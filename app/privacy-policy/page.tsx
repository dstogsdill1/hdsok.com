import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | Homeland Development Services",
  description: "Privacy policy for Homeland Development Services. Learn how we collect, use, and protect your personal information.",
  keywords: ["privacy policy", "data protection", "HDS privacy", "information security"],
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-base py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          Privacy Policy
        </h1>

        <div className="bg-surface/80 backdrop-blur-sm border border-border-subtle rounded-xl p-8 space-y-8 text-gray-300 leading-relaxed">
          <div className="text-sm text-gray-400 mb-6">
            <p className="font-semibold text-white">Homeland Development Services LLC</p>
            <p>(&quot;HDS,&quot; &quot;we,&quot; &quot;our,&quot; &quot;us&quot;) is an Oklahoma limited liability company providing 24/7 HVAC-R, plumbing, electrical, mechanical, refrigeration, facilities maintenance, construction, special projects, design-build, consulting, energy-management and vendor-governance services.</p>
            <p className="mt-2"><strong>Principal address:</strong> P.O. Box 890325, Oklahoma City, OK 73189</p>
            <p><strong>Phone:</strong> 405-546-2820</p>
            <p><strong>Email:</strong> info@hdsok.com</p>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect <strong>contact information</strong> that you voluntarily provide when you fill out a form or request a service, including your name, email address, 
              phone number, company name and job title. We also collect <strong>usage data</strong> automatically via cookies and analytics, such as pages visited, link 
              clicks and form submissions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use your information to respond to your inquiries and schedule site surveys or service calls, to send you service updates and marketing 
              communications you opt in to receive and to improve our website functionality, content and user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Sharing & Disclosure</h2>
            <p className="mb-4">
              We do not sell, rent or trade your personal data. We may share it with service providers (for example, email platforms or customer relationship 
              management tools) to help us operate our business, and with legal authorities if required by law or to protect our rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Cookies & Tracking</h2>
            <p className="mb-4">
              We use cookies and similar technologies, including Google Analytics, to understand how you interact with our website and to improve our 
              services. Cookies are small text files placed on your device that store information such as pages visited, time spent on the site and the type of 
              devices you are using. Some cookies are essential for basic functionality; others, such as analytics cookies, help us analyse traffic patterns and 
              user behaviour. If you are located in the European Union or United Kingdom, we will only set non-essential cookies after you have given us 
              your consent through our cookie banner. You can change or withdraw your cookie preferences at any time via the banner or by adjusting your 
              browser settings. Please note that disabling certain cookies may affect how certain parts of the website function. We use analytics data only for internal 
              purposes and do not share it with advertisers or sell it to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
            <p className="mb-4">
              Depending on where you live, you may have specific rights regarding your personal information. All users have the right to access, correct or 
              delete personal data that we hold. If you are a resident of the European Union or United Kingdom, you may also request that we restrict or object to certain 
              processing, ask for a copy of your data in a portable format and withdraw any consent you have given, including consent for analytics cookies. If 
              you are a resident of California, you have the right to know what personal information we collect, to request deletion of your personal data and 
              to opt out of the sale or sharing of personal information; we do not sell your personal information, but we honour requests to limit any sharing. 
              To exercise any of these rights or to opt out of optional cookies, please contact us at{' '}
              <a href="mailto:info@hdsok.com" className="text-neon-green hover:underline">
                info@hdsok.com
              </a>{' '}
              or send a written request to the address above. We will respond within the timeframe required by applicable law and will not discriminate against you for exercising your privacy rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Data Security</h2>
            <p className="mb-4">
              We implement reasonable administrative, technical and physical measures to protect your information from unauthorized access, use or disclosure. 
              However, no internet transmission is entirely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Children&apos;s Privacy</h2>
            <p className="mb-4">
              Our website is not intended for children under 13 (or 16 in the EU/UK). We do not knowingly collect personal information from children. If we 
              learn that we have collected such information, we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Changes to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date. Your 
              continued use of our website after changes are posted constitutes your acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
            <p className="mb-4">
              If you have questions or concerns about this Privacy Policy or how we handle your personal information, please contact us at:
            </p>
            <div className="bg-base/60 border border-border-subtle rounded-lg p-4">
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
          </section>

          <div className="text-sm text-gray-400 pt-6 border-t border-border-subtle">
            <p><strong>Last Updated:</strong> November 23, 2025</p>
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
