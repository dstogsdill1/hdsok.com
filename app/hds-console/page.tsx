import Link from 'next/link';
import DashboardCharts from '@/components/DashboardCharts';
import { HeroShowcase } from '@/components/HeroShowcase';
import { Reveal } from '@/components/Reveal';
import StatsCounter from '@/components/StatsCounter';
import InteractiveFeatureGrid from '@/components/InteractiveFeatureGrid';
import BeforeAfterComparison from '@/components/BeforeAfterComparison';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ProductShowcase from '@/components/ProductShowcase';

export default function HDSConsolePage() {
  return (
    <div>
      <HeroShowcase />

      {/* Platform Overview */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-neon-green/20 blur-3xl" />
          <div className="absolute right-[-8rem] bottom-0 h-[28rem] w-[28rem] rounded-full bg-emerald-400/10 blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 backdrop-blur-md p-8 mb-12 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-neon-green/10 via-transparent to-emerald-500/10" />
            <h2 className="relative text-4xl font-bold text-white mb-6">
              One Platform. Global Operations.
            </h2>
            <div className="relative text-gray-300 text-lg space-y-4">
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
          </Reveal>
        </div>
      </section>

      {/* Live Dashboard Preview */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute left-1/4 top-20 h-80 w-80 rounded-full bg-neon-green/15 blur-3xl" />
          <div className="absolute right-1/4 bottom-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Real-Time Dashboard Preview
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See your portfolio data come to life with interactive charts, real-time metrics, 
              and predictive analytics—all in one unified dashboard.
            </p>
          </div>
          </Reveal>
          
          <Reveal>
          <div className="bg-gradient-to-b from-slate-900/80 to-black/90 rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-8">
            <DashboardCharts />
          </div>
          </Reveal>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Before/After Comparison */}
      <BeforeAfterComparison />

      {/* Interactive Feature Grid */}
      <InteractiveFeatureGrid />

      {/* Product Showcase */}
      <ProductShowcase />

      {/* Core Features */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -left-40 top-1/4 h-[32rem] w-[32rem] rounded-full bg-neon-green/20 blur-3xl" />
          <div className="absolute right-[-8rem] bottom-1/4 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Platform Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* All Sites, One View */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-neon-green/10 via-transparent to-emerald-500/10" />
              <div className="relative text-4xl mb-4 animate-[float_6s_ease-in-out_infinite]">🏢</div>
              <h3 className="relative text-2xl font-bold text-white mb-4">All Sites, One View</h3>
              <p className="relative text-gray-300 mb-4">
                Multi-tenant, multi-brand portfolio management in a single dashboard. Monitor 
                all your properties from one unified interface with real-time updates.
              </p>
              <ul className="relative text-gray-300 space-y-2 text-sm">
                <li>• Consolidated portfolio view</li>
                <li>• Custom branding per tenant</li>
                <li>• Region and market segmentation</li>
                <li>• Role-based access controls</li>
              </ul>
            </div>

            {/* Fast Dispatch */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-amber-400/10 via-transparent to-neon-green/10" />
              <div className="relative text-4xl mb-4 animate-[pulse-glow_2.4s_ease-in-out_infinite]">⚡</div>
              <h3 className="relative text-2xl font-bold text-white mb-4">Fast Dispatch</h3>
              <p className="relative text-gray-300 mb-4">
                Issue to vendor notification in seconds. Automated routing sends work orders 
                to the right contractor based on location, trade, and availability.
              </p>
              <ul className="relative text-gray-300 space-y-2 text-sm">
                <li>• Instant vendor notifications</li>
                <li>• Smart routing rules</li>
                <li>• 24/7 dispatch center integration</li>
                <li>• Emergency escalation protocols</li>
              </ul>
            </div>

            {/* Live Cost Tracking */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-emerald-400/10 via-transparent to-neon-green/10" />
              <div className="relative text-4xl mb-4 animate-[float_5.5s_ease-in-out_infinite]">💰</div>
              <h3 className="relative text-2xl font-bold text-white mb-4">Live Cost Tracking</h3>
              <p className="relative text-gray-300 mb-4">
                Real-time spend per site, region, and vendor. Budget tracking, variance 
                alerts, and comprehensive financial reporting across your entire portfolio.
              </p>
              <ul className="relative text-gray-300 space-y-2 text-sm">
                <li>• Real-time spend visibility</li>
                <li>• Budget vs. actual tracking</li>
                <li>• Cost allocation by category</li>
                <li>• Vendor spend analysis</li>
              </ul>
            </div>

            {/* Energy Analytics */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-purple-500/10 via-transparent to-neon-green/5" />
              <div className="relative text-4xl mb-4 animate-[pulse-glow_3s_ease-in-out_infinite]">⚡</div>
              <h3 className="relative text-2xl font-bold text-white mb-4">Energy Analytics</h3>
              <p className="relative text-gray-300 mb-4">
                Track EUI (kWh/ft²) and energy cost per square foot. Identify high-consumption 
                sites and opportunities for efficiency improvements.
              </p>
              <ul className="relative text-gray-300 space-y-2 text-sm">
                <li>• Energy usage intensity (EUI)</li>
                <li>• Cost per square foot analysis</li>
                <li>• Year-over-year comparisons</li>
                <li>• Sustainability metrics</li>
              </ul>
            </div>

            {/* Maintenance per ft² */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-sky-400/10 via-transparent to-neon-green/10" />
              <div className="relative text-4xl mb-4 animate-[float_6.5s_ease-in-out_infinite]">📐</div>
              <h3 className="relative text-2xl font-bold text-white mb-4">Maintenance per ft²</h3>
              <p className="relative text-gray-300 mb-4">
                Compare maintenance spend per square foot by site, region, and property type. 
                Benchmark performance and identify outliers.
              </p>
              <ul className="relative text-gray-300 space-y-2 text-sm">
                <li>• Per-square-foot metrics</li>
                <li>• Site-to-site comparisons</li>
                <li>• Regional benchmarking</li>
                <li>• Trend analysis</li>
              </ul>
            </div>

            {/* Smart Assets */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-teal-400/10 via-transparent to-neon-green/10" />
              <div className="relative text-4xl mb-4 animate-[pulse-glow_2.8s_ease-in-out_infinite]">🔧</div>
              <h3 className="relative text-2xl font-bold text-white mb-4">Smart Assets</h3>
              <p className="relative text-gray-300 mb-4">
                Auto maintenance triggers based on equipment runtime, manufacturer schedules, 
                and historical data. No manual logs required.
              </p>
              <ul className="relative text-gray-300 space-y-2 text-sm">
                <li>• Automated PM scheduling</li>
                <li>• Equipment lifecycle tracking</li>
                <li>• Warranty management</li>
                <li>• Asset history and documentation</li>
              </ul>
            </div>

            {/* Vendor Insights */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-orange-400/10 via-transparent to-amber-400/10" />
              <div className="relative text-4xl mb-4 animate-[float_5s_ease-in-out_infinite]">💡</div>
              <h3 className="relative text-2xl font-bold text-white mb-4">Vendor Insights</h3>
              <p className="relative text-gray-300 mb-4">
                Performance metrics updated automatically for all contractors. Response times, 
                completion rates, customer satisfaction, and spend analysis.
              </p>
              <ul className="relative text-gray-300 space-y-2 text-sm">
                <li>• Response time tracking</li>
                <li>• Completion rate metrics</li>
                <li>• Quality scoring</li>
                <li>• Vendor spend reporting</li>
              </ul>
            </div>

            {/* Predictive Data */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-neon-green/10 via-transparent to-emerald-500/10" />
              <div className="relative text-4xl mb-4 animate-[pulse-glow_3.2s_ease-in-out_infinite]">📈</div>
              <h3 className="relative text-2xl font-bold text-white mb-4">Predictive Data</h3>
              <p className="relative text-gray-300 mb-4">
                Spot energy and cost anomalies before they spiral. Machine learning identifies 
                unusual patterns and alerts you to potential issues.
              </p>
              <ul className="relative text-gray-300 space-y-2 text-sm">
                <li>• Anomaly detection</li>
                <li>• Predictive maintenance alerts</li>
                <li>• Cost forecasting</li>
                <li>• Equipment failure prediction</li>
              </ul>
            </div>

            {/* Mobile Access */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-purple-500/10 via-transparent to-neon-green/5" />
              <div className="relative text-4xl mb-4 animate-[float_6s_ease-in-out_infinite]">📱</div>
              <h3 className="relative text-2xl font-bold text-white mb-4">Mobile Access</h3>
              <p className="relative text-gray-300 mb-4">
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
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute left-[-6rem] top-10 h-96 w-96 rounded-full bg-neon-green/20 blur-3xl" />
          <div className="absolute right-[-6rem] bottom-10 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Enterprise-Grade Platform
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 backdrop-blur-md p-8 shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-neon-green/10 via-transparent to-emerald-500/10" />
              <h3 className="relative text-2xl font-bold text-white mb-4">Integrations</h3>
              <ul className="relative text-gray-300 space-y-3">
                <li>✓ Accounting system integration (QuickBooks, Xero, SAP)</li>
                <li>✓ Property management software (Yardi, MRI, AppFolio)</li>
                <li>✓ Energy management systems (EMS/BMS)</li>
                <li>✓ IoT sensor data and smart building platforms</li>
                <li>✓ Custom API for proprietary systems</li>
              </ul>
              <div className="relative mt-6 pt-6 border-t border-white/10">
                <Image
                  src="/images/Works_with_PM_logo_White.webp"
                  alt="Works with Energy Star Portfolio Manager"
                  width={160}
                  height={50}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 backdrop-blur-md p-8 shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.7)] transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-purple-500/10 via-transparent to-neon-green/5" />
              <h3 className="relative text-2xl font-bold text-white mb-4">Security & Compliance</h3>
              <ul className="relative text-gray-300 space-y-3">
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

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* CTA Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-neon-green/20 blur-3xl" />
          <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join property managers who trust HDS Console to streamline their facility management operations.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href="https://www.hds.live/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neon-green text-dark-bg px-8 py-3 rounded-lg font-semibold hover:bg-neon-green-dark transition-colors"
            >
              Explore HDS Console
            </a>
            <Link 
              href="/contact"
              className="border border-white/10 text-neon-green px-8 py-3 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
            >
              Request a Demo
            </Link>
            <a 
              href="tel:14057774156"
              className="border border-white/10 text-neon-green px-8 py-3 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
