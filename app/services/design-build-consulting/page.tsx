import Link from 'next/link';

export default function DesignBuildPage() {
  return (
    <div>
      <section className="bg-dark-bg py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Design-Build & Consulting
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert guidance from concept to completion.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="border-4 border-neon-green rounded-lg p-8 bg-dark-card mb-12">
            <p className="text-gray-300 text-lg leading-relaxed">
              HDS provides comprehensive design-build and consulting services to guide your project from 
              initial concept through final completion. Our team of engineers, designers, and construction 
              professionals ensures successful project delivery.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <h2 className="text-2xl font-bold text-neon-green mb-4">Design-Build Services</h2>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Concept development and planning</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Architectural coordination</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Engineering design services</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Project management</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Construction administration</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Commissioning and turnover</li>
              </ul>
            </div>

            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <h2 className="text-2xl font-bold text-neon-green mb-4">Consulting Services</h2>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Feasibility studies</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Value engineering</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Cost estimating</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Schedule development</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Risk assessment</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Construction observation</li>
              </ul>
            </div>

            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <h2 className="text-2xl font-bold text-neon-green mb-4">Code & Compliance</h2>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Building code analysis</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Energy code compliance</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Permit acquisition and management</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> ADA compliance review</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Fire safety and life safety systems</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Environmental compliance</li>
              </ul>
            </div>

            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <h2 className="text-2xl font-bold text-neon-green mb-4">Technical Expertise</h2>
              <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                <div>
                  <h3 className="font-semibold text-white mb-2">Mechanical Systems</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• HVAC design</li>
                    <li>• Refrigeration systems</li>
                    <li>• Energy management</li>
                    <li>• Building automation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Electrical Systems</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Electrical distribution</li>
                    <li>• Lighting design</li>
                    <li>• Power systems</li>
                    <li>• Emergency systems</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Plumbing & Fire Protection</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Plumbing design</li>
                    <li>• Fire sprinkler systems</li>
                    <li>• Fire alarm systems</li>
                    <li>• Water management</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Structural & Architectural</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Structural analysis</li>
                    <li>• Building envelope</li>
                    <li>• Space planning</li>
                    <li>• Interior design coordination</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neon-green text-dark-bg rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Design or Consulting Services?</h2>
            <p className="mb-6">Let&apos;s discuss how we can support your project goals.</p>
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
