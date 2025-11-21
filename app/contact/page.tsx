'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    propertyType: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          propertyType: '',
          message: '',
        });
      } else {
        const data = await response.json();
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark-bg py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with HDS to discuss your facility management needs. We&apos;re here to help 
            24/7.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Service Request CTA */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Submit a Service Request</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Use our online service request form to submit maintenance requests, track work orders, and manage your facilities.
            </p>
            <a 
              href="https://www.hds.live/service-request"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-neon-green text-dark-bg px-8 py-4 rounded-lg font-bold text-lg hover:bg-neon-green-dark transition-colors shadow-lg hover:shadow-neon-green/50"
            >
              Open Service Request Form →
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              
              <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
                <h3 className="text-xl font-bold text-neon-green mb-4">24/7 Emergency Line</h3>
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

              <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
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

              <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
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

              <div className="border-2 border-neon-green rounded-lg p-6 bg-dark-card">
                <h3 className="text-xl font-bold text-neon-green mb-4">Business Hours</h3>
                <div className="text-gray-300 space-y-2">
                  <p><span className="font-semibold text-white">Emergency Service:</span> 24/7/365</p>
                  <p><span className="font-semibold text-white">Office Hours:</span> Monday - Friday, 8:00 AM - 5:00 PM CST</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              <div className="border-2 border-neon-green rounded-lg p-8 bg-dark-card">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
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
                      value={formData.phone}
                      onChange={handleChange}
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
                      value={formData.company}
                      onChange={handleChange}
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
                      value={formData.propertyType}
                      onChange={handleChange}
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
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border text-white rounded-lg focus:outline-none focus:border-neon-green resize-none"
                    />
                  </div>

                  {status === 'success' && (
                    <div className="bg-neon-green text-dark-bg p-4 rounded-lg">
                      <p className="font-semibold">Thank you for your message!</p>
                      <p>We&apos;ll get back to you as soon as possible.</p>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="bg-red-600 text-white p-4 rounded-lg">
                      <p className="font-semibold">Error</p>
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-neon-green text-dark-bg py-3 rounded-lg font-semibold hover:bg-neon-green-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
