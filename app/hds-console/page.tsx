export default function HDSConsolePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark-bg py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            HDS Console
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your centralized platform for managing work orders, tracking maintenance, and 
            communicating with vendors—all in real time.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-gray-300 space-y-6 text-lg">
            <h2 className="text-3xl font-bold text-white">What is HDS Console?</h2>
            <p>
              HDS Console is our proprietary facility management platform that gives property 
              managers, tenants, and staff complete visibility into every maintenance request. 
              From submission to completion, track every work order, communicate with technicians, 
              and access detailed reporting—all from a single, intuitive dashboard.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <div className="text-neon-green text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-white mb-3">Submit Work Orders</h3>
              <p className="text-gray-300">
                Create work orders via web, mobile app, or call center. Attach photos, specify 
                priority levels, and include detailed descriptions.
              </p>
            </div>

            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <div className="text-neon-green text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-bold text-white mb-3">Real-Time Tracking</h3>
              <p className="text-gray-300">
                Monitor work order status in real time. See when vendors are assigned, en route, 
                on-site, and when work is completed.
              </p>
            </div>

            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <div className="text-neon-green text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-white mb-3">Built-In Communication</h3>
              <p className="text-gray-300">
                Chat directly with dispatch, technicians, and vendors. Eliminate phone tag and 
                keep all communication documented in one place.
              </p>
            </div>

            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <div className="text-neon-green text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Reporting & Analytics</h3>
              <p className="text-gray-300">
                Access detailed reports on work order history, vendor performance, costs, and 
                response times across your entire portfolio.
              </p>
            </div>

            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <div className="text-neon-green text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-white mb-3">Multi-Property Management</h3>
              <p className="text-gray-300">
                Manage multiple properties from a single dashboard. View activity across your 
                entire portfolio or drill down to specific locations.
              </p>
            </div>

            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <div className="text-neon-green text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-white mb-3">Mobile Access</h3>
              <p className="text-gray-300">
                Access HDS Console from anywhere via our mobile-responsive web app. Submit 
                requests and check status on the go.
              </p>
            </div>

            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <div className="text-neon-green text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-white mb-3">Preventive Maintenance</h3>
              <p className="text-gray-300">
                Schedule and track preventive maintenance tasks. Receive automated reminders 
                for routine service intervals.
              </p>
            </div>

            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <div className="text-neon-green text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-3">Invoice Management</h3>
              <p className="text-gray-300">
                View and track all invoices in one place. Consolidated billing makes accounting 
                simple and transparent.
              </p>
            </div>

            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
              <div className="text-neon-green text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-3">Secure & Compliant</h3>
              <p className="text-gray-300">
                Enterprise-grade security protects your data. Role-based access controls ensure 
                users see only what they need.
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="border-4 border-neon-green rounded-lg p-8 bg-dark-card">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">How It Works</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="flex items-start">
                <span className="bg-neon-green text-dark-bg rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">1</span>
                <div>
                  <h4 className="font-bold text-white text-xl mb-2">Submit a Request</h4>
                  <p className="text-gray-300">
                    Use the web portal, mobile app, or call our 24/7 dispatch line to submit a 
                    work order. Provide property details, issue description, and priority level.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-neon-green text-dark-bg rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">2</span>
                <div>
                  <h4 className="font-bold text-white text-xl mb-2">Automatic Assignment</h4>
                  <p className="text-gray-300">
                    Our system automatically routes the work order to the appropriate vendor based 
                    on trade, location, and availability. You&apos;ll receive confirmation immediately.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-neon-green text-dark-bg rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">3</span>
                <div>
                  <h4 className="font-bold text-white text-xl mb-2">Real-Time Updates</h4>
                  <p className="text-gray-300">
                    Track the vendor&apos;s progress with real-time status updates. Receive notifications 
                    when the technician is en route, on-site, and when work is completed.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-neon-green text-dark-bg rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">4</span>
                <div>
                  <h4 className="font-bold text-white text-xl mb-2">Completion & Documentation</h4>
                  <p className="text-gray-300">
                    Review completed work, access photos and technician notes, and approve the 
                    service. All documentation is saved for future reference.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Access Options */}
          <div className="text-gray-300 space-y-6">
            <h2 className="text-3xl font-bold text-white text-center">Access HDS Console</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="border-2 border-neon-green rounded-lg p-8 bg-dark-bg text-center">
                <h3 className="text-2xl font-bold text-neon-green mb-4">Web Portal</h3>
                <p className="text-gray-300 mb-6">
                  Access the full HDS Console from any web browser on desktop or mobile.
                </p>
                <a 
                  href="https://myconsole.hds.live/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-neon-green text-dark-bg px-6 py-3 rounded-lg font-semibold hover:bg-neon-green-dark transition-colors"
                >
                  Open Console
                </a>
              </div>

              <div className="border-2 border-neon-green rounded-lg p-8 bg-dark-bg text-center">
                <h3 className="text-2xl font-bold text-neon-green mb-4">Customer Login</h3>
                <p className="text-gray-300 mb-6">
                  Existing customers can access their CMMS portal for advanced features.
                </p>
                <a 
                  href="https://cmms.hdsok.com/global/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-neon-green text-dark-bg px-6 py-3 rounded-lg font-semibold hover:bg-neon-green-dark transition-colors"
                >
                  Customer Login
                </a>
              </div>
            </div>
          </div>

          {/* Benefits Summary */}
          <div className="bg-neon-green text-dark-bg rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose HDS Console?</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3 text-xl">✓</span>
                  <span>Eliminate duplicate work orders and phone calls</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">✓</span>
                  <span>Complete transparency into all maintenance activity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">✓</span>
                  <span>Faster response times with automated dispatching</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">✓</span>
                  <span>Comprehensive reporting for budget planning</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3 text-xl">✓</span>
                  <span>Reduced administrative burden</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">✓</span>
                  <span>Documented work history for all properties</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">✓</span>
                  <span>Mobile access for on-the-go management</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">✓</span>
                  <span>Scalable across unlimited properties</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-dark-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Streamline Your Facility Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us to learn more about HDS Console and schedule a demo.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href="/contact"
              className="bg-neon-green text-dark-bg px-8 py-3 rounded-lg font-semibold hover:bg-neon-green-dark transition-colors"
            >
              Schedule a Demo
            </a>
            <a 
              href="tel:14057774156"
              className="border-2 border-neon-green text-neon-green px-8 py-3 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
            >
              Call (405) 777-4156
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
