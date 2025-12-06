import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | Homeland Development Services",
  description: "Privacy policy for Homeland Development Services. Learn how we collect, use, and protect your personal information.",
  keywords: ["privacy policy", "data protection", "HDS privacy", "information security"],
};

export default function PrivacyPolicyPage() {
  const today = 'December 5, 2025';
  return (
    <div className="min-h-screen bg-base py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          Privacy Policy
        </h1>

        <div className="bg-surface/80 backdrop-blur-sm border border-border-subtle rounded-xl p-8 space-y-8 text-gray-100 leading-relaxed">
          <div className="text-sm text-gray-200 mb-6">
            <p className="font-semibold text-white">Effective Date: {today}</p>
            <p className="mt-2">
              Homeland Development Services LLC (&quot;HDS,&quot; &quot;we,&quot; &quot;our,&quot; &quot;us&quot;) is an Oklahoma limited liability company providing 24/7 HVAC-R, plumbing, electrical, mechanical, refrigeration, facilities maintenance, construction, special projects, design-build, consulting, energy-management and vendor-governance services.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            
            <h3 className="text-lg font-semibold text-white mt-4">Information You Provide</h3>
            <p>
              When you fill out a form, request a service, or contact us, you may provide:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, company name, job title</li>
              <li><strong>Inquiry Details:</strong> Service requests, project requirements, questions</li>
              <li><strong>Communication Records:</strong> Emails, phone calls, chat messages</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-4">Information We Collect Automatically</h3>
            <p>
              When you visit our website, we automatically collect:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Usage Data:</strong> Pages visited, links clicked, time spent on pages, referral sources</li>
              <li><strong>Device Information:</strong> Browser type, operating system, IP address, device identifiers</li>
              <li><strong>Cookies and Tracking:</strong> Data collected via cookies and similar technologies (see our{' '}
                <Link href="/cookie-policy" className="text-neon-green hover:underline">
                  Cookie Policy
                </Link>)
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Service Delivery:</strong> Respond to inquiries, schedule site surveys, provide quotes, deliver services</li>
              <li><strong>Communications:</strong> Send service updates, project notifications, and marketing communications (with your consent)</li>
              <li><strong>Website Improvement:</strong> Analyze usage patterns, improve functionality, enhance user experience</li>
              <li><strong>Legal Compliance:</strong> Fulfill legal obligations, enforce our terms, protect our rights</li>
              <li><strong>Business Operations:</strong> Maintain records, conduct internal analysis, manage relationships</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Share Your Information</h2>
            <p>
              We do not sell, rent, or trade your personal information. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Service Providers:</strong> Third parties who assist with email delivery, CRM systems, analytics, website hosting, and other business operations. These providers are contractually obligated to protect your information.</li>
              <li><strong>Legal Requirements:</strong> When required by law, regulation, legal process, or government request.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred to the new entity.</li>
              <li><strong>Protection of Rights:</strong> To enforce our terms, protect our property and rights, or ensure the safety of our users and the public.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">4. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies, web beacons, and similar technologies to collect information about your use of our website. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for basic website functionality and navigation.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website using services like Google Analytics.</li>
              <li><strong>Performance Cookies:</strong> Allow us to improve website performance and user experience.</li>
            </ul>
            <p className="mt-2">
              For more information about cookies and your choices, please see our{' '}
              <Link href="/cookie-policy" className="text-neon-green hover:underline">
                Cookie Policy
              </Link>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards to protect your information from unauthorized access, use, or disclosure. These measures include:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Secure servers and encrypted connections (SSL/TLS)</li>
              <li>Access controls and authentication requirements</li>
              <li>Regular security assessments and updates</li>
              <li>Employee training on data protection practices</li>
            </ul>
            <p className="mt-2">
              However, no internet transmission or electronic storage system is completely secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Factors affecting retention include:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>The nature of our relationship with you</li>
              <li>Legal, regulatory, or contractual obligations</li>
              <li>Business operational needs</li>
              <li>Dispute resolution and enforcement of agreements</li>
            </ul>
            <p className="mt-2">
              When information is no longer needed, we securely delete or anonymize it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">7. Your Privacy Rights</h2>
            
            <h3 className="text-lg font-semibold text-white mt-4">General Rights (All Users)</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-4">Additional Rights for EU/UK Residents (GDPR)</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
              <li><strong>Restriction of Processing:</strong> Request limitation on how we process your data</li>
              <li><strong>Object to Processing:</strong> Object to processing based on legitimate interests or direct marketing</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for processing where consent was the legal basis</li>
              <li><strong>Lodge a Complaint:</strong> File a complaint with your local data protection authority</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-4">Additional Rights for California Residents (CCPA/CPRA)</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Know:</strong> Request disclosure of what personal information we collect, use, share, and sell</li>
              <li><strong>Delete:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-Out of Sale/Sharing:</strong> We do not sell your personal information</li>
              <li><strong>Non-Discrimination:</strong> We will not discriminate against you for exercising your rights</li>
            </ul>

            <p className="mt-4">
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:info@hdsok.com" className="text-neon-green hover:underline">
                info@hdsok.com
              </a>{' '}
              or use the contact information below. We will respond within the timeframe required by applicable law.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">8. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in the United States or other countries where we or our service providers operate. These countries may have different data protection laws than your country of residence. When we transfer data internationally, we implement appropriate safeguards to protect your information in accordance with this Privacy Policy and applicable law.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">9. Children&apos;s Privacy</h2>
            <p>
              Our website is not intended for children under 13 (or 16 in the EU/UK). We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete it promptly. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">10. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">11. Data Breach Notification</h2>
            <p>
              In the event of a data breach that affects your personal information, we will notify you and relevant authorities as required by applicable law. We will provide information about the breach, the data affected, and steps you can take to protect yourself.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will post any changes on this page with an updated effective date. Material changes will be communicated through prominent notice on our website or direct communication. Your continued use of our website after changes are posted constitutes your acceptance of the revised policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">13. Related Policies</h2>
            <p>
              This Privacy Policy should be read in conjunction with our:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <Link href="/terms" className="text-neon-green hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-neon-green hover:underline">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/acceptable-use" className="text-neon-green hover:underline">
                  Acceptable Use Policy
                </Link>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">14. Contact Us</h2>
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-base/60 border border-border-subtle rounded-lg p-4 mt-4">
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
