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

export default function ContactClient() {
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
    urgency: 'normal',
    propertyAddress: '',
    description: ''
  });
  
  const [contactFormStatus, setContactFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [serviceFormStatus, setServiceFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [activeTab, setActiveTab] = useState<'contact' | 'service'>('contact');

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactFormStatus('submitting');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactFormData)
      });
      
      if (response.ok) {
        setContactFormStatus('success');
        setContactFormData({ name: '', email: '', phone: '', company: '', propertyType: '', message: '' });
        setTimeout(() => setContactFormStatus('idle'), 5000);
      } else {
        setContactFormStatus('error');
        setTimeout(() => setContactFormStatus('idle'), 5000);
      }
    } catch {
      setContactFormStatus('error');
      setTimeout(() => setContactFormStatus('idle'), 5000);
    }
  };

  const handleServiceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServiceFormStatus('submitting');
    
    try {
      const response = await fetch('/api/service-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(serviceFormData)
      });
      
      if (response.ok) {
        setServiceFormStatus('success');
        setServiceFormData({ 
          name: '', email: '', phone: '', company: '', 
          propertyType: '', serviceType: '', urgency: 'normal', 
          propertyAddress: '', description: '' 
        });
        setTimeout(() => setServiceFormStatus('idle'), 5000);
      } else {
        setServiceFormStatus('error');
        setTimeout(() => setServiceFormStatus('idle'), 5000);
      }
    } catch {
      setServiceFormStatus('error');
      setTimeout(() => setServiceFormStatus('idle'), 5000);
    }
  };

  const propertyTypes = [
    'Select property type',
    'Multi-Family Residential',
    'Single-Family Residential',
    'Commercial Office',
    'Retail',
    'Industrial',
    'Healthcare',
    'Hospitality',
    'Restaurant/Food Service',
    'Educational',
    'Government',
    'Mixed-Use',
    'Other'
  ];

  const serviceTypes = [
    'Select service type',
    'HVAC - Heating',
    'HVAC - Cooling',
    'HVAC - Ventilation',
    'Plumbing - Emergency',
    'Plumbing - Routine',
    'Electrical - Emergency',
    'Electrical - Routine',
    'Appliance Repair',
    'General Maintenance',
    'Preventive Maintenance',
    'Building Systems',
    'Other'
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="text-neon-green">Us</span>
            </h1>
            <p className="text-xl text-gray-300">
              Get in touch with our team for general inquiries, partnership opportunities, or to learn
              more about how HDS can manage your facility maintenance needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-8 text-white">Get In Touch</h2>
              <p className="text-gray-400 mb-8">
                Reach out directly or fill out the form and we&apos;ll respond within 24 hours.
              </p>
              
              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Emergency Line */}
                <div className="bg-gradient-to-r from-neon-green/20 to-neon-green/5 border border-neon-green/30 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-neon-green/20 rounded-lg">
                      <Phone className="w-6 h-6 text-neon-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neon-green mb-1">24/7 Emergency Line</h3>
                      <p className="text-gray-400 text-sm mb-3">For urgent maintenance emergencies</p>
                      <a 
                        href="tel:14057774156" 
                        className="inline-flex items-center gap-2 bg-neon-green text-black px-4 py-2 rounded-lg font-semibold hover:bg-neon-green/90 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        Call Emergency Line
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office Contact */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <Building2 className="w-6 h-6 text-gray-400" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-white">Office Contact</h3>
                      <div className="space-y-2 text-gray-400 text-sm">
                        <p className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          <a href="tel:14057774156" className="hover:text-neon-green transition-colors">Call Office</a>
                        </p>
                        <p className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          <a href="mailto:info@hdsok.com" className="hover:text-neon-green transition-colors">info@hdsok.com</a>
                        </p>
                        <p className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 mt-0.5" />
                          <span>
                            201 Robert S. Kerr Ave<br />
                            Suite 210<br />
                            Oklahoma City, OK 73102
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <Clock className="w-6 h-6 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">Business Hours</h3>
                      <div className="space-y-1 text-gray-400 text-sm">
                        <p>Dispatch Center: 24/7/365</p>
                        <p>Office Hours: Mon-Fri 8AM-6PM CST</p>
                        <p className="text-neon-green text-xs mt-2">Emergency services available around the clock</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              {/* Tab Switcher */}
              <div className="flex gap-2 mb-8 p-1 bg-black/50 rounded-lg">
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md font-medium transition-all ${
                    activeTab === 'contact'
                      ? 'bg-neon-green text-black'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  Send Us a Message
                </button>
                <button
                  onClick={() => setActiveTab('service')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md font-medium transition-all ${
                    activeTab === 'service'
                      ? 'bg-neon-green text-black'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Wrench className="w-4 h-4" />
                  Request Service
                </button>
              </div>

              {/* Contact Form */}
              {activeTab === 'contact' && (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name <span className="text-neon-green">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={contactFormData.name}
                        onChange={(e) => setContactFormData({...contactFormData, name: e.target.value})}
                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-neon-green focus:ring-1 focus:ring-neon-green outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email <span className="text-neon-green">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={contactFormData.email}
                        onChange={(e) => setContactFormData({...contactFormData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-neon-green focus:ring-1 focus:ring-neon-green outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={contactFormData.phone}
                        onChange={(e) => setContactFormData({...contactFormData, phone: e.target.value})}
                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-neon-green focus:ring-1 focus:ring-neon-green outline-none transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                      <input
                        type="text"
                        value={contactFormData.company}
                        onChange={(e) => setContactFormData({...contactFormData, company: e.target.value})}
                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-neon-green focus:ring-1 focus:ring-neon-green outline-none transition-colors"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Property Type</label>
                    <select
                      value={contactFormData.propertyType}
                      onChange={(e) => setContactFormData({...contactFormData, propertyType: e.target.value})}
                      className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:border-neon-green focus:ring-1 focus:ring-neon-green outline-none transition-colors"
                    >
                      {propertyTypes.map((type) => (
                        <option key={type} value={type === 'Select property type' ? '' : type} className="bg-gray-900">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message <span className="text-neon-green">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={contactFormData.message}
                      onChange={(e) => setContactFormData({...contactFormData, message: e.target.value})}
                      className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-neon-green focus:ring-1 focus:ring-neon-green outline-none transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={contactFormStatus === 'submitting'}
                    className="w-full bg-neon-green text-black py-4 rounded-lg font-semibold hover:bg-neon-green/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {contactFormStatus === 'submitting' ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  {contactFormStatus === 'success' && (
                    <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5" />
                      <span>Message sent successfully! We&apos;ll be in touch soon.</span>
                    </div>
                  )}
                  
                  {contactFormStatus === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-lg">
                      <AlertCircle className="w-5 h-5" />
                      <span>Failed to send message. Please try again or call us directly.</span>
                    </div>
                  )}
                </form>
              )}

              {/* Service Request Form */}
              {activeTab === 'service' && (
                <form onSubmit={handleServiceSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name <span className="text-neon-green">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={serviceFormData.name}
                        onChange={(e) => setServiceFormData({...serviceFormData, name: e.target.value})}
                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-neon-green focus:ring-1 focus:ring-neon-green outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email <span className="text-neon-green">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={serviceFormData.email}
                        onChange={(e) => setServiceFormData({...serviceFormData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-neon-green focus:ring-1 focus:ring-neon-green outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone <span className="text-neon-green">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={serviceFormData.phone}
                        onChange={(e) => setServiceFormData({...serviceFormData, phone: e.target.value})}
                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-neon-green focus:ring-1 focus:ring-neon-green outline-none transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company <span className="text-neon-green">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={serviceFormData.company}
                        onChange={(e) => setServiceFormData({...serviceFormData, company: e.target.value})}
                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-neon-green focus:ring-1 focus:ring-neon-green outline-none transition-colors"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Property Type <span className="text-neon-green">*</span>
                      </label>
                      <select
                        required
                        value={serviceFormData.propertyType}
                        onChange={(e) => setServiceFormData({...serviceFormData, propertyType: e.target.value})}
                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:border-neon-green focus:ring-1 focus:ring-neon-green outline-none transition-colors"
                      >
                        {propertyTypes.map((type) => (
                          <option key={type} value={type === 'Select property type' ? '' : type} className="bg-gray-900">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Service Type <span className="text-neon-green">*</span>
                      </label>
                      <select
                        required
                        value={serviceFormData.serviceType}
                        onChange={(e) => setServiceFormData({...serviceFormData, serviceType: e.target.value})}
                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:border-neon-green focus:ring-1 focus:ring-neon-green outline-none transition-colors"
                      >
                        {serviceTypes.map((type) => (
                          <option key={type} value={type === 'Select service type' ? '' : type} className="bg-gray-900">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Property Address <span className="text-neon-green">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={serviceFormData.propertyAddress}
                      onChange={(e) => setServiceFormData({...serviceFormData, propertyAddress: e.target.value})}
                      className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-neon-green focus:ring-1 focus:ring-neon-green outline-none transition-colors"
                      placeholder="Full property address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Urgency Level <span className="text-neon-green">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: 'emergency', label: 'Emergency', desc: 'Immediate response needed' },
                        { value: 'urgent', label: 'Urgent', desc: 'Within 24 hours' },
                        { value: 'normal', label: 'Normal', desc: 'Standard scheduling' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setServiceFormData({...serviceFormData, urgency: option.value})}
                          className={`p-3 rounded-lg border text-center transition-all ${
                            serviceFormData.urgency === option.value
                              ? option.value === 'emergency'
                                ? 'bg-red-500/20 border-red-500 text-red-400'
                                : option.value === 'urgent'
                                ? 'bg-yellow-500/20 border-yellow-500 text-yellow-400'
                                : 'bg-neon-green/20 border-neon-green text-neon-green'
                              : 'bg-black/50 border-white/20 text-gray-400 hover:border-white/40'
                          }`}
                        >
                          <div className="font-semibold text-sm">{option.label}</div>
                          <div className="text-xs opacity-70 mt-1">{option.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Issue Description <span className="text-neon-green">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={serviceFormData.description}
                      onChange={(e) => setServiceFormData({...serviceFormData, description: e.target.value})}
                      className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-neon-green focus:ring-1 focus:ring-neon-green outline-none transition-colors resize-none"
                      placeholder="Please describe the issue in detail..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={serviceFormStatus === 'submitting'}
                    className="w-full bg-neon-green text-black py-4 rounded-lg font-semibold hover:bg-neon-green/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {serviceFormStatus === 'submitting' ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <ArrowRight className="w-5 h-5" />
                        Submit Service Request
                      </>
                    )}
                  </button>

                  {serviceFormStatus === 'success' && (
                    <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5" />
                      <span>Service request submitted! Our team will contact you shortly.</span>
                    </div>
                  )}
                  
                  {serviceFormStatus === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-lg">
                      <AlertCircle className="w-5 h-5" />
                      <span>Failed to submit request. Please try again or call our emergency line.</span>
                    </div>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
