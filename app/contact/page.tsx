'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  Building2,
  MessageSquare,
  AlertCircle,
  CheckCircle,
  Wrench,
  ArrowRight
} from 'lucide-react';
import Layout from '@/components/Layout';

export default function ContactPage() {
  // Contact form state
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    propertyType: '',
    message: ''
  });
  
  // Service request form state
  const [serviceFormData, setServiceFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    propertyType: '',
    serviceType: '',
    priority: '',
    location: '',
    description: ''
  });
  
  const [contactStatus, setContactStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serviceStatus, setServiceStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [contactMessage, setContactMessage] = useState('');
  const [serviceMessage, setServiceMessage] = useState('');

  // Handle contact form submission
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactFormData)
      });
      
      if (response.ok) {
        setContactStatus('success');
        setContactMessage('Thank you for your message! We\'ll get back to you within 24 hours.');
        setContactFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          propertyType: '',
          message: ''
        });
      } else {
        setContactStatus('error');
        setContactMessage('Something went wrong. Please try again or call us directly.');
      }
    } catch {
      setContactStatus('error');
      setContactMessage('Network error. Please try again or call us directly.');
    }
  };

  // Handle service request submission
  const handleServiceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServiceStatus('loading');
    
    try {
      const response = await fetch('/api/service-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(serviceFormData)
      });
      
      if (response.ok) {
        setServiceStatus('success');
        setServiceMessage('Service request submitted! Our team will contact you shortly.');
        setServiceFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          propertyType: '',
          serviceType: '',
          priority: '',
          location: '',
          description: ''
        });
      } else {
        setServiceStatus('error');
        setServiceMessage('Something went wrong. Please try again or call our emergency line.');
      }
    } catch {
      setServiceStatus('error');
      setServiceMessage('Network error. Please try again or call our emergency line.');
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(198,255,0,0.08),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contact <span className="text-[#c6ff00]">Us</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Get in touch with our team for general inquiries, partnership opportunities, 
              or to learn more about how HDS can manage your facility maintenance needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information + General Form Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Get In Touch</h2>
                <p className="text-gray-200">
                  Reach out directly or fill out the form and we&apos;ll respond within 24 hours.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* 24/7 Emergency Line */}
                <div className="bg-gradient-to-r from-[#c6ff00]/10 to-transparent border border-[#c6ff00]/30 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#c6ff00]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-6 h-6 text-[#c6ff00]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#c6ff00] mb-1">24/7 Emergency Line</h3>
                      <p className="text-gray-200 text-sm mb-3">For urgent maintenance emergencies</p>
                      <a 
                        href="tel:14057774156" 
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#c6ff00] text-black font-semibold rounded-lg hover:bg-[#d4ff33] transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        Call Emergency Line
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office Contact */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-white">Office Contact</h3>
                      <div className="space-y-2">
                        <a href="tel:14057774156" className="flex items-center gap-2 text-gray-200 hover:text-[#c6ff00] transition-colors">
                          <Phone className="w-4 h-4" />
                          <span>Call Office</span>
                        </a>
                        <a href="mailto:info@hdsok.com" className="flex items-center gap-2 text-gray-200 hover:text-[#c6ff00] transition-colors">
                          <Mail className="w-4 h-4" />
                          <span>info@hdsok.com</span>
                        </a>
                        <div className="flex items-start gap-2 text-gray-200">
                          <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>201 Robert S. Kerr Ave<br />Suite 210<br />Oklahoma City, OK 73102</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Business Hours</h3>
                      <div className="space-y-1 text-gray-200 text-sm">
                        <p><span className="text-white">Dispatch Center:</span> 24/7/365</p>
                        <p><span className="text-white">Office Hours:</span> Mon-Fri 8AM-6PM CST</p>
                        <p className="text-[#c6ff00] text-xs mt-2">Emergency services available around the clock</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - General Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-[#c6ff00]" />
                  <h2 className="text-2xl font-bold text-white">Send Us a Message</h2>
                </div>
                
                {contactStatus === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle className="w-16 h-16 text-[#c6ff00] mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-200">{contactMessage}</p>
                    <button
                      onClick={() => setContactStatus('idle')}
                      className="mt-6 text-[#c6ff00] hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={contactFormData.name}
                          onChange={(e) => setContactFormData({...contactFormData, name: e.target.value})}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#c6ff00] focus:outline-none transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          value={contactFormData.email}
                          onChange={(e) => setContactFormData({...contactFormData, email: e.target.value})}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#c6ff00] focus:outline-none transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">Phone</label>
                        <input
                          type="tel"
                          value={contactFormData.phone}
                          onChange={(e) => setContactFormData({...contactFormData, phone: e.target.value})}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#c6ff00] focus:outline-none transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">Company</label>
                        <input
                          type="text"
                          value={contactFormData.company}
                          onChange={(e) => setContactFormData({...contactFormData, company: e.target.value})}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#c6ff00] focus:outline-none transition-colors"
                          placeholder="Company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-100 mb-2">Property Type</label>
                      <select
                        value={contactFormData.propertyType}
                        onChange={(e) => setContactFormData({...contactFormData, propertyType: e.target.value})}
                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:border-[#c6ff00] focus:outline-none transition-colors"
                      >
                        <option value="">Select property type</option>
                        <option value="retail">Retail</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="office">Office Building</option>
                        <option value="medical">Medical Facility</option>
                        <option value="industrial">Industrial</option>
                        <option value="multi-family">Multi-Family</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-100 mb-2">Message *</label>
                      <textarea
                        required
                        rows={4}
                        value={contactFormData.message}
                        onChange={(e) => setContactFormData({...contactFormData, message: e.target.value})}
                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#c6ff00] focus:outline-none transition-colors resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    {contactStatus === 'error' && (
                      <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                        {contactMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={contactStatus === 'loading'}
                      className="w-full px-6 py-4 bg-[#c6ff00] text-black font-semibold rounded-lg hover:bg-[#d4ff33] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {contactStatus === 'loading' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider - Service Request Section */}
      <section className="py-16 relative border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#c6ff00]/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c6ff00]/10 border border-[#c6ff00]/30 rounded-full mb-6">
              <Wrench className="w-4 h-4 text-[#c6ff00]" />
              <span className="text-[#c6ff00] text-sm font-medium">Maintenance Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Need to Submit a <span className="text-[#c6ff00]">Service Request</span>?
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              For maintenance issues, repairs, or facility service needs, submit a request below 
              and our dispatch team will coordinate the appropriate response.
            </p>
          </motion.div>

          {/* Service Request Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8">
              {serviceStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="w-16 h-16 text-[#c6ff00] mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Request Submitted!</h3>
                  <p className="text-gray-200 mb-2">{serviceMessage}</p>
                  <p className="text-sm text-gray-400">Reference number will be sent to your email.</p>
                  <button
                    onClick={() => setServiceStatus('idle')}
                    className="mt-6 text-[#c6ff00] hover:underline flex items-center gap-1"
                  >
                    Submit another request <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleServiceSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 bg-[#c6ff00] text-black rounded-full flex items-center justify-center text-sm font-bold">1</span>
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={serviceFormData.name}
                          onChange={(e) => setServiceFormData({...serviceFormData, name: e.target.value})}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#c6ff00] focus:outline-none transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          value={serviceFormData.email}
                          onChange={(e) => setServiceFormData({...serviceFormData, email: e.target.value})}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#c6ff00] focus:outline-none transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">Phone *</label>
                        <input
                          type="tel"
                          required
                          value={serviceFormData.phone}
                          onChange={(e) => setServiceFormData({...serviceFormData, phone: e.target.value})}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#c6ff00] focus:outline-none transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Property Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 bg-[#c6ff00] text-black rounded-full flex items-center justify-center text-sm font-bold">2</span>
                      Property Information
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">Company / Property Name</label>
                        <input
                          type="text"
                          value={serviceFormData.company}
                          onChange={(e) => setServiceFormData({...serviceFormData, company: e.target.value})}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#c6ff00] focus:outline-none transition-colors"
                          placeholder="Company or property name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">Property Type</label>
                        <select
                          value={serviceFormData.propertyType}
                          onChange={(e) => setServiceFormData({...serviceFormData, propertyType: e.target.value})}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:border-[#c6ff00] focus:outline-none transition-colors"
                        >
                          <option value="">Select property type</option>
                          <option value="retail">Retail</option>
                          <option value="restaurant">Restaurant</option>
                          <option value="office">Office Building</option>
                          <option value="medical">Medical Facility</option>
                          <option value="industrial">Industrial</option>
                          <option value="multi-family">Multi-Family</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-100 mb-2">Service Location / Address *</label>
                        <input
                          type="text"
                          required
                          value={serviceFormData.location}
                          onChange={(e) => setServiceFormData({...serviceFormData, location: e.target.value})}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#c6ff00] focus:outline-none transition-colors"
                          placeholder="Full address of service location"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 bg-[#c6ff00] text-black rounded-full flex items-center justify-center text-sm font-bold">3</span>
                      Service Details
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">Service Type *</label>
                        <select
                          required
                          value={serviceFormData.serviceType}
                          onChange={(e) => setServiceFormData({...serviceFormData, serviceType: e.target.value})}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:border-[#c6ff00] focus:outline-none transition-colors"
                        >
                          <option value="">Select service type</option>
                          <option value="hvac">HVAC / Climate Control</option>
                          <option value="plumbing">Plumbing</option>
                          <option value="electrical">Electrical</option>
                          <option value="roofing">Roofing</option>
                          <option value="general">General Repairs</option>
                          <option value="janitorial">Janitorial</option>
                          <option value="landscaping">Landscaping</option>
                          <option value="snow-removal">Snow Removal</option>
                          <option value="pest-control">Pest Control</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">Priority Level *</label>
                        <select
                          required
                          value={serviceFormData.priority}
                          onChange={(e) => setServiceFormData({...serviceFormData, priority: e.target.value})}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:border-[#c6ff00] focus:outline-none transition-colors"
                        >
                          <option value="">Select priority</option>
                          <option value="emergency">🚨 Emergency (Immediate Response)</option>
                          <option value="urgent">⚡ Urgent (Within 24 Hours)</option>
                          <option value="standard">📋 Standard (Within 3-5 Days)</option>
                          <option value="scheduled">📅 Scheduled (Flexible Timing)</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-100 mb-2">Description of Issue *</label>
                        <textarea
                          required
                          rows={4}
                          value={serviceFormData.description}
                          onChange={(e) => setServiceFormData({...serviceFormData, description: e.target.value})}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#c6ff00] focus:outline-none transition-colors resize-none"
                          placeholder="Please describe the issue in detail - include any relevant information such as equipment affected, symptoms observed, or access instructions."
                        />
                      </div>
                    </div>
                  </div>

                  {serviceStatus === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                      {serviceMessage}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4">
                    <p className="text-sm text-gray-500">
                      For immediate emergencies, call our 24/7 line: <a href="tel:14057774156" className="text-[#c6ff00] hover:underline">Call Now</a>
                    </p>
                    <button
                      type="submit"
                      disabled={serviceStatus === 'loading'}
                      className="w-full sm:w-auto px-8 py-4 bg-[#c6ff00] text-black font-semibold rounded-lg hover:bg-[#d4ff33] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {serviceStatus === 'loading' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Wrench className="w-5 h-5" />
                          Submit Service Request
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
