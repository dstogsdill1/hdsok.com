import Link from 'next/link';

export default function ConstructionPage() {
  return (
    <div>
      <section className="bg-dark-bg py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Construction & Special Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Turnkey construction services from concept to completion.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="border-4 border-neon-green rounded-lg p-8 bg-dark-card mb-12">
            <p className="text-gray-300 text-lg leading-relaxed">
              HDS delivers comprehensive construction and renovation services for commercial properties. 
              From ground-up builds to major remodels, our experienced project managers ensure quality 
              workmanship, on-time delivery, and budget adherence.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <h2 className="text-2xl font-bold text-neon-green mb-4">New Construction</h2>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Ground-up commercial construction</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Multi-unit development</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Retail build-outs</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Restaurant construction</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Office space development</li>
              </ul>
            </div>

            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <h2 className="text-2xl font-bold text-neon-green mb-4">Remodeling & Renovations</h2>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Store remodels and refreshes</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Multi-location roll-outs</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Tenant improvements</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Space reconfiguration</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Modernization projects</li>
              </ul>
            </div>

            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <h2 className="text-2xl font-bold text-neon-green mb-4">Equipment & Systems</h2>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> HVAC system installation</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Refrigeration equipment upgrades</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Electrical system upgrades</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Plumbing system installation</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Building automation systems</li>
              </ul>
            </div>

            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <h2 className="text-2xl font-bold text-neon-green mb-4">Special Projects</h2>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> ADA compliance upgrades</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Code compliance retrofits</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Emergency restoration</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Structural repairs</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Roof replacement</li>
              </ul>
            </div>
          </div>

          <div className="bg-neon-green text-dark-bg rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="mb-6">Let&apos;s discuss your construction needs and develop a project plan.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link 
                href="/contact"
                className="bg-dark-bg text-neon-green px-6 py-3 rounded-lg font-semibold hover:bg-grey-nav transition-colors"
              >
                Schedule Consultation
              </Link>
              <a 
                href="tel:14057774156"
                className="border-2 border-dark-bg text-dark-bg px-6 py-3 rounded-lg font-semibold hover:bg-dark-bg hover:text-neon-green transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
