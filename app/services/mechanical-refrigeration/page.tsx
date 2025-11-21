import Link from 'next/link';

export default function MechanicalRefrigerationPage() {
  return (
    <div>
      <section className="bg-dark-bg py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Mechanical & Refrigeration Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            24/7 commercial HVAC and refrigeration services to keep your business running smoothly.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="border-4 border-neon-green rounded-lg p-8 bg-dark-card mb-12">
            <p className="text-gray-300 text-lg leading-relaxed">
              Keep your HVAC and refrigeration systems running at peak efficiency with our comprehensive 
              mechanical services. Our EPA-certified technicians provide 24/7 emergency service and preventive 
              maintenance for all commercial refrigeration and HVAC equipment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-neon-green mb-4">Services Include:</h2>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> 24/7 emergency repairs</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Rack system maintenance and repair</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> RTU (Rooftop Unit) service</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Chiller maintenance</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Walk-in cooler and freezer service</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Refrigerant leak detection and repair</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Energy management system optimization</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Preventive maintenance programs</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-neon-green mb-4">Equipment We Service:</h2>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Commercial refrigeration racks</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Rooftop HVAC units</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Air-cooled and water-cooled chillers</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Walk-in coolers and freezers</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Display case refrigeration</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Ice machines</li>
                <li className="flex items-start"><span className="text-neon-green mr-2">•</span> Building automation systems</li>
              </ul>
            </div>
          </div>

          <div className="bg-neon-green text-dark-bg rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Mechanical or Refrigeration Service?</h2>
            <p className="mb-6">Our technicians are available 24/7 for emergency service.</p>
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
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
