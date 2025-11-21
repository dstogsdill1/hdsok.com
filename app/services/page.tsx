import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark-bg py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            HDS Service Suite
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From blitz repairs to turnkey build‑outs, HDS keeps your refrigeration, HVAC and
            facilities running—so you stay focused on tenants and customers rather than
            contractors.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Mechanical & Refrigeration */}
          <div className="border-2 border-neon-green rounded-lg p-8 bg-dark-card">
            <h2 className="text-3xl font-bold text-neon-green mb-4">
              Mechanical & Refrigeration
            </h2>
            <p className="text-gray-300 mb-6">
              Keep your HVAC and refrigeration systems running at peak efficiency with our 24/7 
              mechanical services. Our certified technicians handle everything from routine 
              maintenance to emergency repairs across racks, RTUs, chillers, and walk-in coolers.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Services Include:</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• 24/7 emergency repairs for racks, RTUs & chillers</li>
                  <li>• Preventive maintenance programs</li>
                  <li>• Energy management projects</li>
                  <li>• Leak detection and repair</li>
                  <li>• EMS optimization and fixes</li>
                  <li>• Refrigerant management and compliance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Benefits:</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Reduced energy costs</li>
                  <li>• Extended equipment lifespan</li>
                  <li>• Minimized downtime</li>
                  <li>• Regulatory compliance</li>
                  <li>• Real-time monitoring and alerts</li>
                </ul>
              </div>
            </div>
            <Link 
              href="/contact"
              className="inline-block mt-6 border-2 border-neon-green text-neon-green px-6 py-3 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
            >
              Request Service
            </Link>
          </div>

          {/* Facility Maintenance */}
          <div className="border-2 border-neon-green rounded-lg p-8 bg-dark-card">
            <h2 className="text-3xl font-bold text-neon-green mb-4">
              Facility Maintenance
            </h2>
            <p className="text-gray-300 mb-6">
              Comprehensive facility maintenance solutions that keep your properties in top condition. 
              From daily upkeep to specialized services, we handle all aspects of building maintenance 
              so you can focus on your business operations.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Services Include:</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Full-store upkeep and maintenance</li>
                  <li>• Preventive maintenance programs</li>
                  <li>• Reactive maintenance and repairs</li>
                  <li>• 24-hour dispatch service</li>
                  <li>• Groundskeeping and landscaping</li>
                  <li>• Janitorial services</li>
                  <li>• Parking lot maintenance</li>
                  <li>• Snow and ice removal</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Property Types:</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Grocery stores</li>
                  <li>• Retail centers</li>
                  <li>• Multi-unit properties</li>
                  <li>• Office buildings</li>
                  <li>• Restaurants and cafés</li>
                  <li>• Fitness centers</li>
                </ul>
              </div>
            </div>
            <Link 
              href="/contact"
              className="inline-block mt-6 border-2 border-neon-green text-neon-green px-6 py-3 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
            >
              Request Service
            </Link>
          </div>

          {/* Construction & Special Projects */}
          <div className="border-2 border-neon-green rounded-lg p-8 bg-dark-card">
            <h2 className="text-3xl font-bold text-neon-green mb-4">
              Construction & Special Projects
            </h2>
            <p className="text-gray-300 mb-6">
              From ground-up construction to major renovations, our project management team delivers 
              turnkey solutions for your commercial property needs. We handle every phase from planning 
              to completion, ensuring quality workmanship and on-time delivery.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Services Include:</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Ground-up builds and new construction</li>
                  <li>• Store remodels and renovations</li>
                  <li>• Multi-location roll-outs</li>
                  <li>• Equipment upgrades and installation</li>
                  <li>• Tenant improvements</li>
                  <li>• Retrofit projects</li>
                  <li>• ADA compliance upgrades</li>
                  <li>• Emergency restoration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Our Approach:</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Detailed project planning</li>
                  <li>• Budget management</li>
                  <li>• Schedule coordination</li>
                  <li>• Quality control</li>
                  <li>• Safety compliance</li>
                  <li>• Vendor management</li>
                  <li>• Regular progress updates</li>
                </ul>
              </div>
            </div>
            <Link 
              href="/contact"
              className="inline-block mt-6 border-2 border-neon-green text-neon-green px-6 py-3 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
            >
              Discuss Your Project
            </Link>
          </div>

          {/* Design-Build & Consulting */}
          <div className="border-2 border-neon-green rounded-lg p-8 bg-dark-card">
            <h2 className="text-3xl font-bold text-neon-green mb-4">
              Design‑Build & Consulting
            </h2>
            <p className="text-gray-300 mb-6">
              Expert consulting and design-build services that take your project from initial concept 
              to grand opening. Our team provides comprehensive guidance on design, engineering, 
              compliance, and implementation to ensure your project&apos;s success.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Services Include:</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Concept-to-ribbon-cutting project delivery</li>
                  <li>• Energy code expertise and compliance</li>
                  <li>• Project feasibility studies</li>
                  <li>• Engineering and design services</li>
                  <li>• Permit acquisition and management</li>
                  <li>• Building code compliance</li>
                  <li>• Value engineering</li>
                  <li>• Cost estimation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Expertise Areas:</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• HVAC and mechanical systems</li>
                  <li>• Refrigeration design</li>
                  <li>• Energy management</li>
                  <li>• Building automation</li>
                  <li>• Electrical systems</li>
                  <li>• Plumbing and fire protection</li>
                  <li>• Architectural coordination</li>
                </ul>
              </div>
            </div>
            <Link 
              href="/contact"
              className="inline-block mt-6 border-2 border-neon-green text-neon-green px-6 py-3 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>

          {/* Energy Management & Sustainability */}
          <div className="border-2 border-neon-green rounded-lg p-8 bg-dark-card">
            <h2 className="text-3xl font-bold text-neon-green mb-4">
              Energy Management & Sustainability
            </h2>
            <p className="text-gray-300 mb-6">
              Reduce operating costs and environmental impact with our comprehensive energy management 
              and sustainability services. We help you optimize systems, access utility incentives, 
              and implement sustainable practices across your property portfolio.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Services Include:</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Energy optimization and analysis</li>
                  <li>• Retro-commissioning services</li>
                  <li>• Utility incentive program management</li>
                  <li>• LED lighting upgrades</li>
                  <li>• Water conservation programs</li>
                  <li>• Solar and renewable energy solutions</li>
                  <li>• Building automation optimization</li>
                  <li>• Sustainability planning</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Benefits:</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Lower utility bills</li>
                  <li>• Reduced carbon footprint</li>
                  <li>• Access to rebates and incentives</li>
                  <li>• Improved equipment efficiency</li>
                  <li>• Enhanced property value</li>
                  <li>• Regulatory compliance</li>
                  <li>• Real-time energy monitoring</li>
                </ul>
              </div>
            </div>
            <Link 
              href="/contact"
              className="inline-block mt-6 border-2 border-neon-green text-neon-green px-6 py-3 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
            >
              Start Saving Energy
            </Link>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-dark-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the HDS Difference?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s discuss how our comprehensive service suite can support your business.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link 
              href="/contact"
              className="bg-neon-green text-dark-bg px-8 py-3 rounded-lg font-semibold hover:bg-neon-green-dark transition-colors"
            >
              Schedule a Consultation
            </Link>
            <a 
              href="tel:14057774156"
              className="border-2 border-neon-green text-neon-green px-8 py-3 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
