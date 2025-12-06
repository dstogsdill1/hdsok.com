import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Acceptable Use Policy | Homeland Development Services",
  description: "Acceptable Use Policy for Homeland Development Services. Guidelines for using our website and services.",
  keywords: ["acceptable use", "terms", "HDS policy", "usage guidelines"],
};

export default function AcceptableUsePolicyPage() {
  const today = 'December 5, 2025';
  return (
    <div className="min-h-screen bg-base py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          Acceptable Use Policy
        </h1>

        <div className="bg-surface/80 backdrop-blur-sm border border-border-subtle rounded-xl p-8 space-y-8 text-gray-300 leading-relaxed">
          <div className="text-sm text-gray-400 mb-6">
            <p className="font-semibold text-white">Effective Date: {today}</p>
          </div>

          <section className="space-y-4">
            <p>
              This Acceptable Use Policy (&quot;Policy&quot;) governs your use of the website located at HDSOK.com and any services provided by Homeland Development Services LLC (&quot;HDS&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or using our website, you agree to comply with this Policy. Violations may result in suspension or termination of your access.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6">Prohibited Activities</h2>
            <p>
              You may not use our website or services to engage in any of the following activities:
            </p>

            <h3 className="text-lg font-semibold text-white mt-4">1. Illegal Activity</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Violating any applicable local, state, national, or international law, regulation, or ordinance.</li>
              <li>Infringing on intellectual property rights, including copyrights, trademarks, patents, or trade secrets.</li>
              <li>Transmitting or distributing content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-4">2. Harmful or Malicious Content</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Uploading, posting, or transmitting any content that contains viruses, malware, worms, Trojan horses, or other malicious code.</li>
              <li>Distributing content that promotes violence, discrimination, or hatred against individuals or groups based on race, ethnicity, religion, gender, sexual orientation, or disability.</li>
              <li>Engaging in activities that could harm minors in any way.</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-4">3. Security Violations</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Attempting to gain unauthorized access to our website, servers, or networks.</li>
              <li>Bypassing or circumventing security measures, authentication protocols, or access controls.</li>
              <li>Probing, scanning, or testing the vulnerability of any system or network.</li>
              <li>Interfering with or disrupting the integrity or performance of our website or services.</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-4">4. Malicious Code and Attacks</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Introducing, deploying, or activating viruses, worms, malware, spyware, ransomware, or any malicious code.</li>
              <li>Conducting denial-of-service (DoS) or distributed denial-of-service (DDoS) attacks against our infrastructure or any third party.</li>
              <li>Engaging in activities designed to interrupt, destroy, or limit the functionality of any computer software, hardware, or telecommunications equipment.</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-4">5. Spam and Abusive Behavior</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Sending unsolicited bulk messages, spam, or any form of commercial solicitation.</li>
              <li>Impersonating any person or entity, or falsely stating or misrepresenting your affiliation with a person or entity.</li>
              <li>Engaging in fraudulent, deceptive, or misleading practices.</li>
              <li>Harassing, stalking, threatening, or otherwise causing distress or harm to other users.</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-4">6. Scraping and Automated Access</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Using automated means (including bots, scrapers, crawlers, or spiders) to access, monitor, or copy any content from our website without prior written permission.</li>
              <li>Extracting data through unauthorized automated tools or processes.</li>
              <li>Overloading or attempting to overload our systems through excessive requests or automated queries.</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-4">7. Competitive or Commercial Misuse</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Using our website or services to develop, support, or operate a competing service or product.</li>
              <li>Reselling, redistributing, or sublicensing access to our services without authorization.</li>
              <li>Reverse engineering, decompiling, disassembling, or attempting to derive the source code of our website or services.</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-6">Enforcement</h2>
            <p>
              We reserve the right to investigate and take appropriate action against anyone who, in our sole discretion, violates this Policy, including but not limited to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Removing or disabling access to content that violates this Policy.</li>
              <li>Terminating or suspending your access to our website or services.</li>
              <li>Reporting unlawful activity to law enforcement or regulatory authorities.</li>
              <li>Taking legal action, including seeking injunctive relief or damages.</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-6">Reporting Violations</h2>
            <p>
              If you become aware of any violations of this Policy, please report them to us immediately at{' '}
              <a href="mailto:info@hdsok.com" className="text-neon-green hover:underline">
                info@hdsok.com
              </a>.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6">Changes to This Policy</h2>
            <p>
              We may update this Policy from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of our website after any such changes constitutes your acceptance of the revised Policy.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6">Related Policies</h2>
            <p>
              This Policy should be read in conjunction with our{' '}
              <Link href="/terms" className="text-neon-green hover:underline">
                Terms of Service
              </Link>,{' '}
              <Link href="/privacy-policy" className="text-neon-green hover:underline">
                Privacy Policy
              </Link>, and{' '}
              <Link href="/cookie-policy" className="text-neon-green hover:underline">
                Cookie Policy
              </Link>.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6">Contact Us</h2>
            <p>
              If you have any questions about this Policy or our enforcement practices, please contact us:
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
            className="inline-block bg-neon-green text-dark-bg px-8 py-3 rounded-lg font-semibold hover:bg-neon-green/90 transition-all shadow-lg"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
