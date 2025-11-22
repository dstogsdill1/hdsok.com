'use client';

import { useState } from 'react';
import { Reveal } from '@/components/Reveal';

export default function ContactPage() {
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    propertyType: '',
    message: '',
  });
  
  const [serviceFormData, setServiceFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    propertyType: '',
    serviceType: '',
    priority: 'normal',
    location: '',
    description: '',
  });
  
  const [contactStatus, setContactStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serviceStatus, setServiceStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [contactErrorMessage, setContactErrorMessage] = useState('');
  const [serviceErrorMessage, setServiceErrorMessage] = useState('');

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactFormData({
      ...contactFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setServiceFormData({
      ...serviceFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus('loading');
    setContactErrorMessage('');

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactFormData.email)) {
      setContactStatus('error');
      setContactErrorMessage('Please enter a valid email address');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactFormData),
      });

      if (response.ok) {
        setContactStatus('success');
        setContactFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          propertyType: '',
          message: '',
        });
        // Auto-hide success message after 5 seconds
        setTimeout(() => setContactStatus('idle'), 5000);
      } else {
        const data = await response.json();
        setContactStatus('error');
        setContactErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setContactStatus('error');
      setContactErrorMessage('Failed to send message. Please try again later.');
    }
  };

  const handleServiceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServiceStatus('loading');
    setServiceErrorMessage('');

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(serviceFormData.email)) {
      setServiceStatus('error');
      setServiceErrorMessage('Please enter a valid email address');
      return;
    }

    // Validate phone format (basic)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(serviceFormData.phone)) {
      setServiceStatus('error');
      setServiceErrorMessage('Please enter a valid phone number');
      return;
    }

    try {
      const response = await fetch('/api/service-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(serviceFormData),
      });

      if (response.ok) {
        setServiceStatus('success');
        setServiceFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          propertyType: '',
          serviceType: '',
          priority: 'normal',
          location: '',
          description: '',
        });
        // Auto-hide success message after 5 seconds
        setTimeout(() => setServiceStatus('idle'), 5000);
      } else {
        const data = await response.json();
        setServiceStatus('error');
        setServiceErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setServiceStatus('error');
      setServiceErrorMessage('Failed to submit service request. Please try again later.');
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-dark-bg via-grey-nav to-dark-bg py-20 px-4">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-neon-green/20 blur-3xl" />
          <div className="absolute right-[-6rem] bottom-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="absolute inset-x-10 top-32 h-px bg-gradient-to-r from-transparent via-neon-green/40 to-transparent" />
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <Reveal>
            <p className="inline-flex items-center rounded-full border border-neon-green/40 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neon-green mb-4">
              Contact HDS
              <span className="ml-2 inline-flex h-1.5 w-1.5 rounded-full bg-neon-green animate-[pulse-glow_2.4s_ease-in-out_infinite]" />
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Get in touch with HDS
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to discuss your facility management needs? We&apos;re here to help 24/7. Submit a service request or reach out for a consultation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Service Request Form Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-black via-slate-950 to-slate-950">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Submit a Service Request</h2>
            <p className="text-gray-300 mb-8 text-center max-w-2xl mx-auto">
              Fill out the form below to request maintenance service. Our team will respond within 24 hours.
            </p>
          </Reveal>
          
          <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-neon-green/10 via-transparent to-emerald-500/10" />
            <form onSubmit={handleServiceSubmit} className="relative space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service-name" className="block text-white font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="service-name"
                    name="name"
                    value={serviceFormData.name}
                    onChange={handleServiceChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border text-white rounded-lg focus:outline-none focus:border-neon-green"
                  />
                </div>

                <div>
                  <label htmlFor="service-email" className="block text-white font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="service-email"
                    name="email"
                    value={serviceFormData.email}
                    onChange={handleServiceChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border text-white rounded-lg focus:outline-none focus:border-neon-green"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service-phone" className="block text-white font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="service-phone"
                    name="phone"
                    value={serviceFormData.phone}
                    onChange={handleServiceChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border text-white rounded-lg focus:outline-none focus:border-neon-green"
                  />
                </div>

                <div>
                  <label htmlFor="service-company" className="block text-white font-semibold mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="service-company"
                    name="company"
                    value={serviceFormData.company}
                    onChange={handleServiceChange}
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border text-white rounded-lg focus:outline-none focus:border-neon-green"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service-propertyType" className="block text-white font-semibold mb-2">
                    Property Type *
                  </label>
                  <select
                    id="service-propertyType"
                    name="propertyType"
                    value={serviceFormData.propertyType}
                    onChange={handleServiceChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border text-white rounded-lg focus:outline-none focus:border-neon-green"
                  >
                    <option value="">Select property type</option>
                    <option value="grocery">Grocery Store</option>
                    <option value="retail">Retail Center</option>
                    <option value="multi-unit">Multi-Unit Property</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="office">Office Building</option>
                    <option value="fitness">Fitness Center</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="service-type" className="block text-white font-semibold mb-2">
                    Service Type *
                  </label>
                  <select
                    id="service-type"
                    name="serviceType"
                    value={serviceFormData.serviceType}
                    onChange={handleServiceChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border text-white rounded-lg focus:outline-none focus:border-neon-green"
                  >
                    <option value="">Select service type</option>
                    <option value="hvac">HVAC</option>
                    <option value="refrigeration">Refrigeration</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="electrical">Electrical</option>
                    <option value="general-maintenance">General Maintenance</option>
                    <option value="construction">Construction</option>
                    <option value="emergency">Emergency Repair</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service-priority" className="block text-white font-semibold mb-2">
                    Priority Level *
                  </label>
                  <select
                    id="service-priority"
                    name="priority"
                    value={serviceFormData.priority}
                    onChange={handleServiceChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border text-white rounded-lg focus:outline-none focus:border-neon-green"
                  >
                    <option value="normal">Normal</option>
                    <option value="urgent">Urgent</option>
                    <option value="emergency">Emergency</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="service-location" className="block text-white font-semibold mb-2">
                    Location/Address *
                  </label>
                  <input
                    type="text"
                    id="service-location"
                    name="location"
                    value={serviceFormData.location}
                    onChange={handleServiceChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border text-white rounded-lg focus:outline-none focus:border-neon-green"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service-description" className="block text-white font-semibold mb-2">
                  Service Description *
                </label>
                <textarea
                  id="service-description"
                  name="description"
                  value={serviceFormData.description}
                  onChange={handleServiceChange}
                  required
                  rows={6}
                  placeholder="Please describe the issue or service needed in detail..."
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border text-white rounded-lg focus:outline-none focus:border-neon-green resize-none"
                />
              </div>

              {serviceStatus === 'success' && (
                <div className="bg-neon-green text-dark-bg p-4 rounded-lg">
                  <p className="font-semibold">✓ Service Request Submitted!</p>
                  <p>Our team will contact you within 24 hours.</p>
                </div>
              )}

              {serviceStatus === 'error' && (
                <div className="bg-red-600 text-white p-4 rounded-lg">
                  <p className="font-semibold">Error</p>
                  <p>{serviceErrorMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={serviceStatus === 'loading'}
                className="w-full bg-neon-green text-dark-bg py-4 rounded-lg font-bold text-lg hover:bg-neon-green-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-neon-green/50"
              >
                {serviceStatus === 'loading' ? 'Submitting...' : 'Submit Service Request'}
              </button>
            </form>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Information & General Contact Form */}
      <section className="py-16 px-4 bg-gradient-to-b from-black via-slate-950 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <Reveal>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:shadow-[0_35px_90px_rgba(0,0,0,0.8)] transition-all">
                <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-neon-green/10 via-transparent to-emerald-500/10" />
                <div className="relative">
                  <h3 className="text-xl font-bold text-neon-green mb-4 flex items-center gap-2">
                    <span className="animate-[pulse-glow_2.4s_ease-in-out_infinite]">📞</span>
                    24/7 Emergency Line
                  </h3>
                  <p className="text-gray-300 mb-3">
                    For urgent issues requiring immediate attention:
                  </p>
                  <a 
                    href="tel:14057774156" 
                    className="text-2xl font-bold text-white hover:text-neon-green transition-colors"
                  >
                    Call Emergency Line
                  </a>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:shadow-[0_35px_90px_rgba(0,0,0,0.8)] transition-all">
                <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-emerald-400/10 via-transparent to-neon-green/10" />
                <div className="relative">
                  <h3 className="text-xl font-bold text-neon-green mb-4">Office Contact</h3>
                  <div className="space-y-3 text-gray-300">
                    <div>
                      <p className="font-semibold text-white">Phone:</p>
                      <a href="tel:+14055462820" className="hover:text-neon-green">
                        +1 (405) 546-2820
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email:</p>
                      <a href="mailto:info@hdsok.com" className="hover:text-neon-green">
                        info@hdsok.com
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Mailing Address:</p>
                      <p>P.O. Box 890325</p>
                      <p>Oklahoma City, OK 73189</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:shadow-[0_35px_90px_rgba(0,0,0,0.8)] transition-all">
                <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-teal-400/10 via-transparent to-neon-green/5" />
                <div className="relative">
                  <h3 className="text-xl font-bold text-neon-green mb-4">Service Request Options</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-white mb-2">Online Form:</p>
                      <a 
                        href="https://www.hds.live/service-request"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border-2 border-neon-green text-neon-green px-4 py-2 rounded-lg text-sm hover:bg-neon-green hover:text-dark-bg transition-colors"
                      >
                        Submit Service Request
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-2">Text Message:</p>
                      <a 
                        href="sms:14057774156"
                        className="text-gray-300 hover:text-neon-green"
                      >
                        Text Us
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-2">HDS Console:</p>
                      <a 
                        href="https://myconsole.hds.live/"
                        target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-neon-green"
                    >
                      myconsole.hds.live
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:shadow-[0_35px_90px_rgba(0,0,0,0.8)] transition-all">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-purple-500/10 via-transparent to-neon-green/5" />
              <div className="relative">
                <h3 className="text-xl font-bold text-neon-green mb-4">Business Hours</h3>
                <div className="text-gray-300 space-y-2">
                  <p><span className="font-semibold text-white">Emergency Service:</span> 24/7/365</p>
                  <p><span className="font-semibold text-white">Office Hours:</span> Monday - Friday, 8:00 AM - 5:00 PM CST</p>
                </div>
              </div>
            </div>
            </div>
            </Reveal>

            {/* Contact Form */}
            <Reveal delay={0.05}>
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
                  <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-neon-green/10 via-transparent to-emerald-500/10" />
                  <form onSubmit={handleContactSubmit} className="relative space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-semibold mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={contactFormData.name}
                        onChange={handleContactChange}
                        required
                        className="w-full px-4 py-3 bg-dark-bg border border-dark-border text-white rounded-lg focus:outline-none focus:border-neon-green"
                      />
                    </div>

                    <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactFormData.email}
                      onChange={handleContactChange}
                      required
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border text-white rounded-lg focus:outline-none focus:border-neon-green"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={contactFormData.phone}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border text-white rounded-lg focus:outline-none focus:border-neon-green"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-white font-semibold mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={contactFormData.company}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border text-white rounded-lg focus:outline-none focus:border-neon-green"
                    />
                  </div>

                  <div>
                    <label htmlFor="propertyType" className="block text-white font-semibold mb-2">
                      Property Type
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={contactFormData.propertyType}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border text-white rounded-lg focus:outline-none focus:border-neon-green"
                    >
                      <option value="">Select a property type</option>
                      <option value="grocery">Grocery Store</option>
                      <option value="retail">Retail Center</option>
                      <option value="multi-unit">Multi-Unit Property</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="office">Office Building</option>
                      <option value="fitness">Fitness Center</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={contactFormData.message}
                      onChange={handleContactChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border text-white rounded-lg focus:outline-none focus:border-neon-green resize-none"
                    />
                  </div>

                  {contactStatus === 'success' && (
                    <div className="bg-neon-green text-dark-bg p-4 rounded-lg">
                      <p className="font-semibold">Thank you for your message!</p>
                      <p>We&apos;ll get back to you as soon as possible.</p>
                    </div>
                  )}

                  {contactStatus === 'error' && (
                    <div className="bg-red-600 text-white p-4 rounded-lg">
                      <p className="font-semibold">Error</p>
                      <p>{contactErrorMessage}</p>
                    </div>
                  )}

                    <button
                    type="submit"
                    disabled={contactStatus === 'loading'}
                    className="w-full bg-neon-green text-dark-bg py-3 rounded-lg font-semibold hover:bg-neon-green-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {contactStatus === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                  </form>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </div>
  );
}
