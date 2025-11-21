import Link from 'next/link';

export default function FacilityMaintenancePage() {
  return (
    <div>
      <section className="bg-dark-bg py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Facility Maintenance Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive facility maintenance to keep your properties in top condition.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="border-4 border-neon-green rounded-lg p-8 bg-dark-card mb-12">
            <p className="text-gray-300 text-lg leading-relaxed">
              From daily upkeep to specialized maintenance, HDS provides comprehensive facility services 
              that keep your properties safe, clean, and operational. Our 24-hour dispatch ensures rapid 
              response to any maintenance need.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <h2 className="text-2xl font-bold text-neon-green mb-4">Building Maintenance</h2>
              <ul className="text-gray-300 space-y-2 grid md:grid-cols-2 gap-4">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Preventive maintenance programs</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Reactive maintenance and repairs</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Plumbing repairs and service</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Electrical troubleshooting</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Lighting maintenance and upgrades</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Door and hardware repairs</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Ceiling and drywall repairs</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Painting and touch-ups</li>
              </ul>
            </div>

            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <h2 className="text-2xl font-bold text-neon-green mb-4">Exterior Services</h2>
              <ul className="text-gray-300 space-y-2 grid md:grid-cols-2 gap-4">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Groundskeeping and landscaping</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Parking lot maintenance</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Snow and ice removal</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Exterior lighting</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Signage maintenance</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Pressure washing</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Gutter cleaning</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Fence and gate repairs</li>
              </ul>
            </div>

            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <h2 className="text-2xl font-bold text-neon-green mb-4">Janitorial Services</h2>
              <ul className="text-gray-300 space-y-2 grid md:grid-cols-2 gap-4">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Daily cleaning services</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Floor care and maintenance</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Restroom maintenance</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Window cleaning</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Trash removal</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Carpet cleaning</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Deep cleaning services</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Porter services</li>
              </ul>
            </div>
          </div>

          <div className="bg-neon-green text-dark-bg rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Facility Maintenance?</h2>
            <p className="mb-6">Contact us for a customized maintenance plan for your property.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a 
                href="tel:14057774156"
                className="bg-dark-bg text-neon-green px-6 py-3 rounded-lg font-semibold hover:bg-grey-nav transition-colors"
              >
                Call Us
              </a>
              <Link 
                href="/contact"
                className="border-2 border-dark-bg text-dark-bg px-6 py-3 rounded-lg font-semibold hover:bg-dark-bg hover:text-neon-green transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
