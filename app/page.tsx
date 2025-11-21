import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark-bg py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Homeland Development Services, LLC
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Keeping grocery stores, retail and multi‑unit properties running so you can
            focus on tenants and customers. HDS handles dispatch, vendor management and
            maintenance across your entire portfolio.
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Complete Maintenance & Project Solutions for Commercial Properties
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link 
              href="/contact"
              className="bg-neon-green text-dark-bg px-8 py-3 rounded-lg font-semibold hover:bg-neon-green-dark transition-colors"
            >
              Schedule a Call
            </Link>
            <Link 
              href="/services"
              className="border-2 border-neon-green text-neon-green px-8 py-3 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Your Small Business Facility Partner */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="border-4 border-neon-green rounded-lg p-8 bg-dark-card">
            <h2 className="text-4xl font-bold text-white mb-6">
              Your Small Business Facility Partner
            </h2>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                Running a small business leaves little time for maintenance headaches. Homeland
                Development Services steps in as your trusted partner, keeping your building and
                equipment in top shape so you can concentrate on customers and growth. From
                emergency repairs to preventive maintenance, our team handles everything behind the
                scenes. That means no more vendor juggling, late-night calls or surprise
                breakdowns—just a smooth, comfortable space for your staff and patrons.
              </p>
              <p>
                As a small business owner you wear many hats. HDS helps you take off the
                facilities cap. We become an extension of your team, ready around the clock to solve
                issues and plan ahead. Whether you manage a café, boutique, gym or office, we take
                the stress out of maintenance.
              </p>
              <p>
                Our process starts when you tell us about your property and priorities. We
                design a tailored plan to match your hours and budget, then provide one point of
                contact who coordinates all work. When you need a repair, use our phone line, online
                form or text option to submit a request. You&apos;ll see real‑time updates on each
                job and receive a single, easy‑to‑read invoice for everything.
              </p>
              <p>
                Beyond day‑to‑day fixes, we offer upgrades and projects that improve your space
                and reduce operating costs. Our licensed technicians handle HVAC and
                refrigeration, electrical work, plumbing, remodeling and energy upgrades. We can also
                advise on design and compliance to keep your business in line with codes and
                regulations.
              </p>
              <p className="font-semibold text-neon-green">
                Ready to reclaim your time? Talk to us today to learn how HDS can take care of
                your facilities so you can take care of your customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Work Orders—Live and In Detail */}
      <section className="py-16 px-4 bg-dark-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">
            Your Work Orders—Live and In Detail
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-gray-300 space-y-4">
              <p>
                Centralize every maintenance request from submission to completion. Property
                managers, tenants and staff can submit work orders via web, mobile app or 24/7 call
                centre. Updates from vendors and technicians flow into a single dashboard,
                giving you real‑time visibility across grocery, retail and multi‑unit properties.
              </p>
              <p>
                Assign tasks, set priorities and track status changes in one place. Built‑in chat
                and communication tools plus live dispatch support eliminate duplicate calls.
              </p>
              <Link 
                href="/hds-console"
                className="inline-block border-2 border-neon-green text-neon-green px-6 py-3 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors mt-4"
              >
                Learn More About HDS Console
              </Link>
            </div>
            <div className="bg-dark-bg border-2 border-neon-green rounded-lg p-8 min-h-[300px] flex items-center justify-center">
              <div className="text-center text-gray-500">
                <svg className="w-24 h-24 mx-auto mb-4 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <p className="text-sm">Dashboard Screenshot Placeholder</p>
                <p className="text-xs mt-2">Add your HDS Console screenshot to /public/images/dashboard.png</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Need Service? Get Help Your Way */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">
            Need Service? Get Help Your Way
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Requesting service is easy. Choose the option that matches the urgency of your 
            situation—our tools are built for property managers, tenants and staff across 
            grocery, retail and multi‑unit properties.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Call Live Agent */}
            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card hover:bg-dark-bg transition-colors">
              <h3 className="text-2xl font-bold text-neon-green mb-4">📞 Call Live Agent</h3>
              <p className="text-gray-300 mb-4">
                For urgent issues, call our 24/7 dispatch line. Provide the property name, 
                issue type and callback number—our live dispatcher will follow your triage 
                rules and send the right vendor.
              </p>
              <a 
                href="tel:14057774156"
                className="inline-block border-2 border-neon-green text-neon-green px-6 py-2 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
              >
                Call (405) 777-4156
              </a>
            </div>

            {/* Service Request */}
            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card hover:bg-dark-bg transition-colors">
              <h3 className="text-2xl font-bold text-neon-green mb-4">📋 Service Request</h3>
              <p className="text-gray-300 mb-4">
                For routine or planned work, use our online form or your branded app. Enter the
                property, equipment and issue details—and attach photos if needed. A work order
                is created automatically, assigned to the right vendor and updated in real time.
              </p>
              <a 
                href="https://app.jotform.com/251983870494168"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-neon-green text-neon-green px-6 py-2 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
              >
                Submit Request
              </a>
            </div>

            {/* Text HDS Team */}
            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card hover:bg-dark-bg transition-colors">
              <h3 className="text-2xl font-bold text-neon-green mb-4">💬 Text HDS Team</h3>
              <p className="text-gray-300 mb-4">
                Use texting for urgent escalations or follow‑ups after a work order has been 
                placed. Include your name, property and callback number.
              </p>
              <a 
                href="sms:14057774156"
                className="inline-block border-2 border-neon-green text-neon-green px-6 py-2 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
              >
                Text Us
              </a>
            </div>

            {/* Chat or Use Our App */}
            <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card hover:bg-dark-bg transition-colors">
              <h3 className="text-2xl font-bold text-neon-green mb-4">💻 Chat or Use Our App</h3>
              <p className="text-gray-300 mb-4">
                Use our app or chat for urgent escalations or follow‑ups after a work order 
                has been placed. Include your name, property and callback number.
              </p>
              <Link 
                href="/hds-console"
                className="inline-block border-2 border-neon-green text-neon-green px-6 py-2 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
              >
                Access Console
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HDS Service Suite */}
      <section className="py-16 px-4 bg-dark-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">
            HDS Service Suite
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            From blitz repairs to turnkey build‑outs, HDS keeps your refrigeration, HVAC and
            facilities running—so you stay focused on tenants and customers rather than
            contractors.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mechanical & Refrigeration */}
            <Link href="/services/mechanical-refrigeration" className="group">
              <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-bg h-full hover:bg-neon-green hover:text-dark-bg transition-all">
                <h3 className="text-2xl font-bold text-neon-green group-hover:text-dark-bg mb-4">
                  Mechanical & Refrigeration
                </h3>
                <ul className="text-gray-300 group-hover:text-dark-bg space-y-2">
                  <li>• 24/7 racks, RTUs & chillers</li>
                  <li>• HVAC & refrigeration repairs</li>
                  <li>• Energy‑management projects</li>
                  <li>• Leak‑rate and EMS fixes</li>
                </ul>
              </div>
            </Link>

            {/* Facility Maintenance */}
            <Link href="/services/facility-maintenance" className="group">
              <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-bg h-full hover:bg-neon-green hover:text-dark-bg transition-all">
                <h3 className="text-2xl font-bold text-neon-green group-hover:text-dark-bg mb-4">
                  Facility Maintenance
                </h3>
                <ul className="text-gray-300 group-hover:text-dark-bg space-y-2">
                  <li>• Full‑store upkeep</li>
                  <li>• Preventive & reactive maintenance</li>
                  <li>• 24‑hour dispatch</li>
                  <li>• Groundskeeping and janitorial services</li>
                </ul>
              </div>
            </Link>

            {/* Construction & Special Projects */}
            <Link href="/services/construction-special-projects" className="group">
              <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-bg h-full hover:bg-neon-green hover:text-dark-bg transition-all">
                <h3 className="text-2xl font-bold text-neon-green group-hover:text-dark-bg mb-4">
                  Construction & Special Projects
                </h3>
                <ul className="text-gray-300 group-hover:text-dark-bg space-y-2">
                  <li>• Ground‑up builds, remodels and roll‑outs</li>
                  <li>• Equipment upgrades</li>
                  <li>• Tenant improvements</li>
                  <li>• Retrofit projects</li>
                </ul>
              </div>
            </Link>

            {/* Design-Build & Consulting */}
            <Link href="/services/design-build-consulting" className="group">
              <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-bg h-full hover:bg-neon-green hover:text-dark-bg transition-all">
                <h3 className="text-2xl font-bold text-neon-green group-hover:text-dark-bg mb-4">
                  Design‑Build & Consulting
                </h3>
                <ul className="text-gray-300 group-hover:text-dark-bg space-y-2">
                  <li>• Concept‑to‑ribbon‑cutting</li>
                  <li>• Energy and code expertise</li>
                  <li>• Project feasibility & engineering</li>
                  <li>• Permit & compliance management</li>
                </ul>
              </div>
            </Link>

            {/* Energy Management & Sustainability */}
            <Link href="/services/energy-management-sustainability" className="group">
              <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-bg h-full hover:bg-neon-green hover:text-dark-bg transition-all">
                <h3 className="text-2xl font-bold text-neon-green group-hover:text-dark-bg mb-4">
                  Energy Management & Sustainability
                </h3>
                <ul className="text-gray-300 group-hover:text-dark-bg space-y-2">
                  <li>• Optimization & retro‑commissioning</li>
                  <li>• Utility incentives</li>
                  <li>• Lighting upgrades</li>
                  <li>• Water conservation</li>
                  <li>• Sustainability planning</li>
                </ul>
              </div>
            </Link>

            {/* Call to Action Card */}
            <div className="border-2 border-neon-green rounded-lg p-6 bg-neon-green text-dark-bg flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="mb-6">
                Schedule a 30-minute consultation to discuss your facility needs.
              </p>
              <Link 
                href="/contact"
                className="bg-dark-bg text-neon-green px-6 py-3 rounded-lg font-semibold hover:bg-grey-nav transition-colors"
              >
                Book A Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
