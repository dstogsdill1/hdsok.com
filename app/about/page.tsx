export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark-bg py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            About Homeland Development Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted partner for comprehensive facility management and maintenance solutions
            across commercial properties.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-gray-300 space-y-6 text-lg">
            <h2 className="text-3xl font-bold text-white">Who We Are</h2>
            <p>
              Homeland Development Services (HDS) is a full-service facility management company 
              dedicated to keeping your commercial properties running smoothly. We specialize in 
              serving grocery stores, retail centers, multi-unit properties, and small businesses 
              across Oklahoma and beyond.
            </p>
            <p>
              Founded with the vision of providing centralized, reliable maintenance solutions, 
              HDS has grown into a trusted partner for property managers and business owners who 
              need a single point of contact for all their facility needs.
            </p>
            <p className="border-l-4 border-neon-green pl-4 bg-dark-card p-4 rounded">
              <strong className="text-neon-green">Global Operations:</strong> Through our HDS Console 
              platform, we power facility management operations across Europe, Central Asia, and the 
              Americas—bringing enterprise-grade portfolio management, real-time analytics, and 
              automated dispatch to properties worldwide.
            </p>
          </div>

          <div className="border-4 border-neon-green rounded-lg p-8 bg-dark-card">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg">
              To provide exceptional facility management services that allow our clients to focus 
              on their core business operations. We handle the complexity of vendor coordination, 
              maintenance scheduling, and emergency response so you don&apos;t have to.
            </p>
          </div>

          <div className="text-gray-300 space-y-6 text-lg">
            <h2 className="text-3xl font-bold text-white">What Sets Us Apart</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
                <h3 className="text-xl font-bold text-neon-green mb-3">24/7 Availability</h3>
                <p>
                  Our dispatch center operates around the clock, ensuring you always have support 
                  when emergencies arise. No matter the time or day, HDS is ready to respond.
                </p>
              </div>

              <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
                <h3 className="text-xl font-bold text-neon-green mb-3">Single Point of Contact</h3>
                <p>
                  No more juggling multiple vendors. HDS serves as your single point of contact 
                  for all facility needs, coordinating everything behind the scenes.
                </p>
              </div>

              <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
                <h3 className="text-xl font-bold text-neon-green mb-3">Real-Time Tracking</h3>
                <p>
                  Our HDS Console provides live visibility into every work order, from submission 
                  to completion. Track progress, communicate with technicians, and access history 
                  all in one place. The platform serves properties across Europe, Central Asia, 
                  and the Americas with multi-language support and regional vendor networks.
                </p>
              </div>

              <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
                <h3 className="text-xl font-bold text-neon-green mb-3">Comprehensive Services</h3>
                <p>
                  From HVAC and refrigeration to construction and energy management, we offer a 
                  complete suite of services to meet all your facility needs.
                </p>
              </div>

              <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
                <h3 className="text-xl font-bold text-neon-green mb-3">Licensed & Certified</h3>
                <p>
                  Our technicians hold proper licenses and certifications, ensuring all work meets 
                  industry standards and regulatory requirements.
                </p>
              </div>

              <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
                <h3 className="text-xl font-bold text-neon-green mb-3">Transparent Billing</h3>
                <p>
                  Receive clear, consolidated invoices for all services. No surprise charges, 
                  just straightforward pricing and detailed work documentation.
                </p>
              </div>
            </div>
          </div>

          <div className="text-gray-300 space-y-6 text-lg">
            <h2 className="text-3xl font-bold text-white">Industries We Serve</h2>
            <p>
              HDS proudly serves a diverse range of commercial properties:
            </p>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <span className="text-neon-green mr-3 text-2xl">•</span>
                <span>Grocery stores and supermarkets</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-green mr-3 text-2xl">•</span>
                <span>Retail centers and shopping malls</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-green mr-3 text-2xl">•</span>
                <span>Multi-unit residential properties</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-green mr-3 text-2xl">•</span>
                <span>Restaurants and food service</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-green mr-3 text-2xl">•</span>
                <span>Office buildings</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-green mr-3 text-2xl">•</span>
                <span>Fitness centers and gyms</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-green mr-3 text-2xl">•</span>
                <span>Boutiques and specialty retail</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-green mr-3 text-2xl">•</span>
                <span>Medical and professional offices</span>
              </li>
            </ul>
          </div>

          <div className="bg-neon-green text-dark-bg rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Our Commitment to You</h2>
            <p className="text-lg mb-6">
              At HDS, we understand that your facilities are critical to your business operations. 
              That&apos;s why we&apos;re committed to providing responsive, reliable, and professional 
              service every time. We treat your properties as if they were our own, ensuring they 
              remain safe, efficient, and operational.
            </p>
            <p className="text-xl font-bold">
              Let us handle your facilities so you can focus on what you do best.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-dark-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Partner with HDS?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to learn how we can support your facility management needs.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href="/contact"
              className="bg-neon-green text-dark-bg px-8 py-3 rounded-lg font-semibold hover:bg-neon-green-dark transition-colors"
            >
              Get in Touch
            </a>
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
