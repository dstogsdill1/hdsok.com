import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service | Homeland Development Services",
  description: "Terms of Service for Homeland Development Services. Review our user agreement and service terms.",
  keywords: ["terms of service", "user agreement", "HDS terms", "service agreement"],
};

export default function TermsPage() {
  const today = 'December 5, 2025';
  return (
    <div className="min-h-screen bg-base py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          User Agreement & Terms of Service
        </h1>

        <div className="bg-surface/80 backdrop-blur-sm border border-border-subtle rounded-xl p-8 space-y-8 text-gray-100 leading-relaxed">
          <div className="text-sm text-gray-400 mb-6">
            <p className="font-semibold text-white">Last updated: {today}</p>
          </div>

          {/* User Agreement */}
          <section id="ua" className="space-y-4">
            <h2 className="text-2xl font-semibold text-neon-green">User Agreement</h2>
            <p>
              Welcome to the HDSOK.com website (the &quot;Site&quot;). This User Agreement is a binding
              agreement between you (the visitor/user) and Homeland Development Services LLC (HDS),
              an Oklahoma limited liability company with its mailing address at P.O. Box 890325,
              Oklahoma City, OK 73189 (Ph: 405.546.2820). By using the Site, you acknowledge
              that you have read and agree to this User Agreement. If you do not agree, you must not use
              the Site. By accepting, you also agree to HDS&apos;s{' '}
              <Link href="/privacy-policy" className="text-neon-green hover:underline">Privacy Policy</Link>,
              which is incorporated by reference. We may update this Agreement from time to time and
              will notify users of material changes; continued use of the Site after changes means
              you accept the revised terms.
            </p>
            
            <h3 className="text-xl font-semibold text-white mt-6">Eligibility</h3>
            <p>
              You represent that you are at least 18 years old (or the age of legal majority in your
              jurisdiction) and have the legal capacity to enter into this Agreement. If you submit an
              inquiry or request on behalf of a company or other entity, you represent that you have authority to
              bind that entity to this Agreement. The Site is intended for business and
              organizational use in facility management and property maintenance; personal or household use is not supported.
            </p>
            
            <h3 className="text-xl font-semibold text-white mt-6">Permitted Use of the Site</h3>
            <p>
              Subject to your compliance with this Agreement, HDS grants you a limited, non-exclusive,
              non-transferable license to access and use the Site for your internal business
              purposes (specifically, for learning about and requesting facilities management and maintenance services). You agree
              not to resell or make the Site available to any third party without HDS&apos;s prior written consent.
            </p>
            
            <h3 className="text-xl font-semibold text-white mt-6">Prohibited Conduct</h3>
            <p>
              You must use the Site responsibly and refrain from any misuse. In particular, you
              agree NOT to: engage in illegal activity; interfere with or disrupt the Site; attempt
              to gain unauthorized access to systems or data; transmit spam or harassing
              content; or upload content that infringes intellectual property or privacy rights. HDS
              reserves the right to investigate and take appropriate action for any suspected prohibited
              conduct, including cooperating with law enforcement.
            </p>
            
            <h3 className="text-xl font-semibold text-white mt-6">User Content & Data</h3>
            <p>
              When you submit information through contact forms or service requests, you grant HDS permission
              to use that information to respond to your inquiry and provide requested services. We will handle
              your information according to our{' '}
              <Link href="/privacy-policy" className="text-neon-green hover:underline">Privacy Policy</Link>.
            </p>
            
            <h3 className="text-xl font-semibold text-white mt-6">Site Content & Intellectual Property</h3>
            <p>
              All content available on the Site is the property of HDS or its licensors and protected by
              intellectual property laws. You agree not to copy, modify, distribute, or create derivative
              works based on HDS content, except as allowed by law or with our permission.
            </p>
            
            <h3 className="text-xl font-semibold text-white mt-6">Disclaimers & Limitations</h3>
            <p>
              HDS provides the Site &quot;as is&quot; and limits liability to the maximum extent permitted by
              law. See the Terms of Service below for full details.
            </p>
            
            <h3 className="text-xl font-semibold text-white mt-6">Governing Law</h3>
            <p>
              This Agreement is governed by the laws of the State of Oklahoma, USA, without regard to
              conflict of law principles.
            </p>
            
            <h3 className="text-xl font-semibold text-white mt-6">Contact</h3>
            <p>
              Questions? Email{' '}
              <a href="mailto:info@hdsok.com" className="text-neon-green hover:underline">
                info@hdsok.com
              </a>{' '}
              or write to Homeland Development Services LLC, P.O. Box 890325, Oklahoma City, OK 73189. Ph: 405.546.2820.
            </p>
          </section>

          <hr className="border-border-subtle my-8" />

          {/* Terms of Service */}
          <section id="tos" className="space-y-4">
            <h2 className="text-2xl font-semibold text-neon-green">Terms of Service</h2>
            <p>
              These Terms govern your access to and use of HDSOK.com and all associated features
              provided by HDS. By accessing or using the Site, you agree to be bound by these Terms.
              If you do not agree, you must not use the Site.
            </p>
            
            <h3 className="text-xl font-semibold text-white mt-6">Company Information</h3>
            <p>
              Homeland Development Services LLC is an Oklahoma limited liability company; mailing
              address P.O. Box 890325, Oklahoma City, OK 73189. Phone: 405.546.2820. Contact:{' '}
              <a href="mailto:info@hdsok.com" className="text-neon-green hover:underline">
                info@hdsok.com
              </a>.
            </p>
            
            <h3 className="text-xl font-semibold text-white mt-6">Eligibility & Scope</h3>
            <p>
              You may use the Site only if you can form a binding contract and are not barred by law.
              If using on behalf of an organization, you affirm authority to bind that organization.
              The Site provides information about commercial facilities management and maintenance services.
            </p>
            
            <h3 className="text-xl font-semibold text-white mt-6">Intellectual Property Rights</h3>
            <p>
              All content and materials on the Site are owned by HDS or licensors and are
              protected by IP laws. &quot;Homeland Development Services,&quot; &quot;HDS,&quot; and logos are trademarks of
              HDS. You may not use HDS trademarks without permission.
            </p>
            
            <h3 className="text-xl font-semibold text-white mt-6">Privacy</h3>
            <p>
              See our{' '}
              <Link href="/privacy-policy" className="text-neon-green hover:underline">
                Privacy Policy
              </Link>{' '}
              for details on how we collect and use your information.
            </p>
            
            <h3 className="text-xl font-semibold text-white mt-6">Third-Party Services and Links</h3>
            <p>
              The Site may link to third-party services. Use of those services is subject to their
              respective terms. HDS is not responsible for third-party performance.
            </p>
            
            <h3 className="text-xl font-semibold text-white mt-6">Disclaimer of Warranties</h3>
            <p>
              HDS provides the Site &quot;as is&quot; and &quot;as available&quot; without warranties of any
              kind, to the fullest extent permitted by law.
            </p>
            
            <h3 className="text-xl font-semibold text-white mt-6">Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, HDS and its personnel will not be liable for any
              indirect, incidental, special, consequential, or punitive damages.
            </p>
            
            <h3 className="text-xl font-semibold text-white mt-6">Term & Changes</h3>
            <p>
              These Terms are effective when you first use the Site and continue until modified. HDS may
              update these Terms; material changes will be posted. Continued use after changes means acceptance.
            </p>
            
            <h3 className="text-xl font-semibold text-white mt-6">Governing Law</h3>
            <p>
              Governed by Oklahoma law. Exclusive jurisdiction and venue lie in state or federal courts
              located in Oklahoma.
            </p>
          </section>
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
