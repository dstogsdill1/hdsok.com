import Link from 'next/link';

export default function EnergyManagementPage() {
  return (
    <div>
      <section className="bg-dark-bg py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Energy Management & Sustainability
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Reduce costs and environmental impact with smart energy solutions.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="border-4 border-neon-green rounded-lg p-8 bg-dark-card mb-12">
            <p className="text-gray-300 text-lg leading-relaxed">
              HDS helps commercial property owners reduce operating costs and environmental impact through 
              comprehensive energy management and sustainability programs. Our team identifies opportunities, 
              implements solutions, and tracks results to maximize your return on investment.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <h2 className="text-2xl font-bold text-neon-green mb-4">Energy Optimization</h2>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Energy audits and assessments</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Building system optimization</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Retro-commissioning services</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> HVAC system optimization</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Refrigeration efficiency improvements</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Building automation system tuning</li>
              </ul>
            </div>

            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <h2 className="text-2xl font-bold text-neon-green mb-4">Utility Incentive Programs</h2>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Incentive program identification</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Application preparation and submission</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Project documentation</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Rebate maximization</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Utility coordination</li>
              </ul>
            </div>

            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <h2 className="text-2xl font-bold text-neon-green mb-4">Lighting Solutions</h2>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> LED retrofit projects</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Lighting controls and sensors</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Daylight harvesting</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Exterior lighting upgrades</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Parking lot lighting</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Emergency lighting compliance</li>
              </ul>
            </div>

            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <h2 className="text-2xl font-bold text-neon-green mb-4">Water Conservation</h2>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Water usage analysis</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Fixture upgrades and retrofits</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Leak detection and repair</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Irrigation system optimization</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Water reclamation systems</li>
              </ul>
            </div>

            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <h2 className="text-2xl font-bold text-neon-green mb-4">Renewable Energy</h2>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Solar energy feasibility studies</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Solar panel installation</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Solar thermal systems</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Energy storage solutions</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Renewable energy incentives</li>
              </ul>
            </div>

            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <h2 className="text-2xl font-bold text-neon-green mb-4">Sustainability Planning</h2>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Carbon footprint assessment</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Sustainability goal development</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Portfolio-wide energy tracking</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Benchmarking and reporting</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> LEED and green building certification</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> ESG reporting support</li>
              </ul>
            </div>
          </div>

          <div className="border-4 border-neon-green rounded-lg p-8 bg-dark-card mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Benefits of Energy Management</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <ul className="space-y-3">
                <li className="flex items-start"><span className="text-neon-green mr-2">✓</span> Reduced utility costs</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">✓</span> Lower carbon footprint</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">✓</span> Improved equipment efficiency</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">✓</span> Extended equipment life</li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start"><span className="text-neon-green mr-2">✓</span> Enhanced property value</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">✓</span> Regulatory compliance</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">✓</span> Improved tenant comfort</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">✓</span> Access to incentives and rebates</li>
              </ul>
            </div>
          </div>

          <div className="bg-neon-green text-dark-bg rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Start Saving Energy Today</h2>
            <p className="mb-6">Contact us for a free energy assessment and discover your savings potential.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link 
                href="/contact"
                className="bg-dark-bg text-neon-green px-6 py-3 rounded-lg font-semibold hover:bg-grey-nav transition-colors"
              >
                Request Assessment
              </Link>
              <a 
                href="tel:14057774156"
                className="border-2 border-dark-bg text-dark-bg px-6 py-3 rounded-lg font-semibold hover:bg-dark-bg hover:text-neon-green transition-colors"
              >
                Call (405) 777-4156
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
