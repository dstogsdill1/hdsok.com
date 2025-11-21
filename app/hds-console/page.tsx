import Link from 'next/link';
import DashboardCharts from '@/components/DashboardCharts';

export default function HDSConsolePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark-bg py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            HDS Console
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Complete Portfolio Management Platform for Commercial Properties
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Multi-tenant facility management with real-time visibility, predictive analytics, 
            and automated dispatch across all your properties.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href="https://www.hds.live/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neon-green text-dark-bg px-8 py-3 rounded-lg font-semibold hover:bg-neon-green-dark transition-colors"
            >
              Access HDS Console
            </a>
            <Link 
              href="/contact"
              className="border-2 border-neon-green text-neon-green px-8 py-3 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="border-4 border-neon-green rounded-lg p-8 bg-dark-card mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              One Platform. Global Operations.
            </h2>
            <div className="text-gray-300 text-lg space-y-4">
              <p>
                HDS Console is the comprehensive facility management platform built for property managers, 
                facility directors, and operations teams managing grocery stores, retail centers, 
                multi-unit properties, and commercial portfolios of all sizes.
              </p>
              <p>
                Whether you&apos;re managing a single location or hundreds of properties, HDS Console 
                provides the real-time visibility, automated workflows, and predictive insights you need 
                to keep facilities running smoothly while controlling costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Dashboard Preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real-Time Dashboard Preview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See your portfolio data come to life with interactive charts, real-time metrics, 
              and predictive analytics—all in one unified dashboard.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-2xl p-8 border-4 border-neon-green">
            <DashboardCharts />
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 px-4 bg-dark-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Platform Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* All Sites, One View */}
            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-bg">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-neon-green mb-4">All Sites, One View</h3>
              <p className="text-gray-300 mb-4">
                Multi-tenant, multi-brand portfolio management in a single dashboard. Monitor 
                all your properties from one unified interface with real-time updates.
              </p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Consolidated portfolio view</li>
                <li>• Custom branding per tenant</li>
                <li>• Region and market segmentation</li>
                <li>• Role-based access controls</li>
              </ul>
            </div>

            {/* Fast Dispatch */}
            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-bg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-neon-green mb-4">Fast Dispatch</h3>
              <p className="text-gray-300 mb-4">
                Issue to vendor notification in seconds. Automated routing sends work orders 
                to the right contractor based on location, trade, and availability.
              </p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Instant vendor notifications</li>
                <li>• Smart routing rules</li>
                <li>• 24/7 dispatch center integration</li>
                <li>• Emergency escalation protocols</li>
              </ul>
            </div>

            {/* Live Cost Tracking */}
            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-bg">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-neon-green mb-4">Live Cost Tracking</h3>
              <p className="text-gray-300 mb-4">
                Real-time spend per site, region, and vendor. Budget tracking, variance 
                alerts, and comprehensive financial reporting across your entire portfolio.
              </p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Real-time spend visibility</li>
                <li>• Budget vs. actual tracking</li>
                <li>• Cost allocation by category</li>
                <li>• Vendor spend analysis</li>
              </ul>
            </div>

            {/* Energy Analytics */}
            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-bg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-neon-green mb-4">Energy Analytics</h3>
              <p className="text-gray-300 mb-4">
                Track EUI (kWh/ft²) and energy cost per square foot. Identify high-consumption 
                sites and opportunities for efficiency improvements.
              </p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Energy usage intensity (EUI)</li>
                <li>• Cost per square foot analysis</li>
                <li>• Year-over-year comparisons</li>
                <li>• Sustainability metrics</li>
              </ul>
            </div>

            {/* Maintenance per ft² */}
            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-bg">
              <div className="text-4xl mb-4">📐</div>
              <h3 className="text-2xl font-bold text-neon-green mb-4">Maintenance per ft²</h3>
              <p className="text-gray-300 mb-4">
                Compare maintenance spend per square foot by site, region, and property type. 
                Benchmark performance and identify outliers.
              </p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Per-square-foot metrics</li>
                <li>• Site-to-site comparisons</li>
                <li>• Regional benchmarking</li>
                <li>• Trend analysis</li>
              </ul>
            </div>

            {/* Smart Assets */}
            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-bg">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-neon-green mb-4">Smart Assets</h3>
              <p className="text-gray-300 mb-4">
                Auto maintenance triggers based on equipment runtime, manufacturer schedules, 
                and historical data. No manual logs required.
              </p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Automated PM scheduling</li>
                <li>• Equipment lifecycle tracking</li>
                <li>• Warranty management</li>
                <li>• Asset history and documentation</li>
              </ul>
            </div>

            {/* Vendor Insights */}
            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-bg">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-neon-green mb-4">Vendor Insights</h3>
              <p className="text-gray-300 mb-4">
                Performance metrics updated automatically for all contractors. Response times, 
                completion rates, customer satisfaction, and spend analysis.
              </p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Response time tracking</li>
                <li>• Completion rate metrics</li>
                <li>• Quality scoring</li>
                <li>• Vendor spend reporting</li>
              </ul>
            </div>

            {/* Predictive Data */}
            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-bg">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-neon-green mb-4">Predictive Data</h3>
              <p className="text-gray-300 mb-4">
                Spot energy and cost anomalies before they spiral. Machine learning identifies 
                unusual patterns and alerts you to potential issues.
              </p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Anomaly detection</li>
                <li>• Predictive maintenance alerts</li>
                <li>• Cost forecasting</li>
                <li>• Equipment failure prediction</li>
              </ul>
            </div>

            {/* Mobile Access */}
            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-bg">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-neon-green mb-4">Mobile Access</h3>
              <p className="text-gray-300 mb-4">
                Full platform functionality on iOS and Android. Submit requests, approve 
                invoices, communicate with vendors, and monitor properties from anywhere.
              </p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Native mobile apps</li>
                <li>• Photo and document upload</li>
                <li>• Push notifications</li>
                <li>• Offline capability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration & Security */}
      <section className="py-16 px-4 bg-dark-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Enterprise-Grade Platform
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-neon-green rounded-lg p-8 bg-dark-bg">
              <h3 className="text-2xl font-bold text-neon-green mb-4">Integrations</h3>
              <ul className="text-gray-300 space-y-3">
                <li>✓ Accounting system integration (QuickBooks, Xero, SAP)</li>
                <li>✓ Property management software (Yardi, MRI, AppFolio)</li>
                <li>✓ Energy management systems (EMS/BMS)</li>
                <li>✓ IoT sensor data and smart building platforms</li>
                <li>✓ Custom API for proprietary systems</li>
              </ul>
            </div>

            <div className="border-2 border-neon-green rounded-lg p-8 bg-dark-bg">
              <h3 className="text-2xl font-bold text-neon-green mb-4">Security & Compliance</h3>
              <ul className="text-gray-300 space-y-3">
                <li>✓ Enterprise-grade encryption (AES-256)</li>
                <li>✓ SOC 2 Type II certified infrastructure</li>
                <li>✓ GDPR and international privacy compliance</li>
                <li>✓ Role-based access controls and audit logs</li>
                <li>✓ 99.9% uptime SLA with redundant systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-4">Accepting payments via Stripe. We accept:</p>
          <div className="flex justify-center items-center gap-6 flex-wrap text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-2xl">💳</span>
              <span>VISA</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💳</span>
              <span>Mastercard</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💳</span>
              <span>AMEX</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💳</span>
              <span>DISCOVER</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-dark-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join property managers who trust HDS Console to streamline their facility management operations.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link 
              href="/contact"
              className="bg-neon-green text-dark-bg px-8 py-3 rounded-lg font-semibold hover:bg-neon-green-dark transition-colors"
            >
              Request a Demo
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
