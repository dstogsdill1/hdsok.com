export default function VendorsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark-bg py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Join the HDS Vendor Network
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Partner with HDS to access consistent work opportunities across our growing portfolio 
            of commercial properties.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-gray-300 space-y-6 text-lg">
            <h2 className="text-3xl font-bold text-white">Why Partner with HDS?</h2>
            <p>
              Homeland Development Services works with a network of trusted contractors and vendors 
              to deliver exceptional service to our clients. As an HDS partner, you&apos;ll gain access 
              to a steady stream of work orders across multiple properties and industries.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <h3 className="text-2xl font-bold text-neon-green mb-4">Consistent Work Flow</h3>
              <p className="text-gray-300">
                Access regular work orders from our extensive portfolio of grocery stores, retail 
                centers, and multi-unit properties across the region.
              </p>
            </div>

            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <h3 className="text-2xl font-bold text-neon-green mb-4">Streamlined Dispatch</h3>
              <p className="text-gray-300">
                Receive work orders through our centralized dispatch system with clear job details, 
                property information, and priority levels.
              </p>
            </div>

            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <h3 className="text-2xl font-bold text-neon-green mb-4">Prompt Payment</h3>
              <p className="text-gray-300">
                Enjoy reliable payment terms and straightforward invoicing processes. We value 
                our vendors and ensure timely compensation for completed work.
              </p>
            </div>

            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <h3 className="text-2xl font-bold text-neon-green mb-4">Technology Integration</h3>
              <p className="text-gray-300">
                Utilize our HDS Console for work order management, real-time updates, and 
                communication with dispatch and clients.
              </p>
            </div>

            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <h3 className="text-2xl font-bold text-neon-green mb-4">Quality Standards</h3>
              <p className="text-gray-300">
                Work with a company that values quality craftsmanship and professional service. 
                We support our vendors in maintaining high standards.
              </p>
            </div>

            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <h3 className="text-2xl font-bold text-neon-green mb-4">Growth Opportunities</h3>
              <p className="text-gray-300">
                As HDS expands, so do opportunities for our vendor partners. Grow your business 
                alongside our expanding service footprint.
              </p>
            </div>
          </div>

          {/* Requirements Section */}
          <div className="border-4 border-neon-green rounded-lg p-8 bg-dark-card">
            <h2 className="text-3xl font-bold text-white mb-6">Vendor Requirements</h2>
            <p className="text-gray-300 mb-6 text-lg">
              To ensure the highest quality of service for our clients, we maintain specific 
              standards for all vendor partners:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start">
                  <span className="text-neon-green mr-3 text-xl">✓</span>
                  <span>Current business licenses and permits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-3 text-xl">✓</span>
                  <span>Appropriate insurance coverage (General Liability, Workers Comp)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-3 text-xl">✓</span>
                  <span>Certified and trained technicians</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-3 text-xl">✓</span>
                  <span>24/7 emergency response capability (for applicable trades)</span>
                </li>
              </ul>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start">
                  <span className="text-neon-green mr-3 text-xl">✓</span>
                  <span>Professional communication and customer service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-3 text-xl">✓</span>
                  <span>Reliable response times</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-3 text-xl">✓</span>
                  <span>Quality workmanship and attention to detail</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-3 text-xl">✓</span>
                  <span>Willingness to use HDS technology platforms</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service Categories */}
          <div className="text-gray-300 space-y-6">
            <h2 className="text-3xl font-bold text-white">Service Categories</h2>
            <p className="text-lg">
              We&apos;re always looking for qualified vendors in the following trades and specialties:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-dark-card border border-neon-green rounded-lg p-4">
                <h4 className="font-bold text-neon-green mb-2">HVAC & Refrigeration</h4>
                <ul className="text-sm space-y-1">
                  <li>• Commercial HVAC</li>
                  <li>• Refrigeration systems</li>
                  <li>• Rack systems</li>
                  <li>• Walk-in coolers/freezers</li>
                </ul>
              </div>
              <div className="bg-dark-card border border-neon-green rounded-lg p-4">
                <h4 className="font-bold text-neon-green mb-2">Electrical</h4>
                <ul className="text-sm space-y-1">
                  <li>• Licensed electricians</li>
                  <li>• Lighting installation</li>
                  <li>• Electrical repairs</li>
                  <li>• Panel upgrades</li>
                </ul>
              </div>
              <div className="bg-dark-card border border-neon-green rounded-lg p-4">
                <h4 className="font-bold text-neon-green mb-2">Plumbing</h4>
                <ul className="text-sm space-y-1">
                  <li>• Commercial plumbing</li>
                  <li>• Drain cleaning</li>
                  <li>• Water heaters</li>
                  <li>• Backflow prevention</li>
                </ul>
              </div>
              <div className="bg-dark-card border border-neon-green rounded-lg p-4">
                <h4 className="font-bold text-neon-green mb-2">General Contractors</h4>
                <ul className="text-sm space-y-1">
                  <li>• Remodeling</li>
                  <li>• Construction</li>
                  <li>• Tenant improvements</li>
                  <li>• Building repairs</li>
                </ul>
              </div>
              <div className="bg-dark-card border border-neon-green rounded-lg p-4">
                <h4 className="font-bold text-neon-green mb-2">Specialty Services</h4>
                <ul className="text-sm space-y-1">
                  <li>• Roofing</li>
                  <li>• Painting</li>
                  <li>• Flooring</li>
                  <li>• Glass & glazing</li>
                </ul>
              </div>
              <div className="bg-dark-card border border-neon-green rounded-lg p-4">
                <h4 className="font-bold text-neon-green mb-2">Facility Services</h4>
                <ul className="text-sm space-y-1">
                  <li>• Janitorial</li>
                  <li>• Landscaping</li>
                  <li>• Snow removal</li>
                  <li>• Pest control</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Application Process */}
          <div className="bg-neon-green text-dark-bg rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">How to Apply</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="flex items-start">
                <span className="bg-dark-bg text-neon-green rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
                <div>
                  <h4 className="font-bold mb-2">Submit Your Information</h4>
                  <p>Contact us with your company details, licenses, insurance, and service capabilities.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-dark-bg text-neon-green rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
                <div>
                  <h4 className="font-bold mb-2">Application Review</h4>
                  <p>Our team will review your application and verify credentials.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-dark-bg text-neon-green rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>
                <div>
                  <h4 className="font-bold mb-2">Onboarding</h4>
                  <p>Complete our vendor onboarding process and system training.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-dark-bg text-neon-green rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</span>
                <div>
                  <h4 className="font-bold mb-2">Start Receiving Work Orders</h4>
                  <p>Begin receiving work orders through our dispatch system.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-dark-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Vendor Network?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to start the application process and grow your business with HDS.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href="/contact"
              className="bg-neon-green text-dark-bg px-8 py-3 rounded-lg font-semibold hover:bg-neon-green-dark transition-colors"
            >
              Apply Now
            </a>
            <a 
              href="mailto:info@hdsok.com"
              className="border-2 border-neon-green text-neon-green px-8 py-3 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
