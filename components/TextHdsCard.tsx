'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function TextHdsCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/text-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', message: '' });
        // Close modal after 3 seconds
        setTimeout(() => {
          setIsOpen(false);
          setStatus('idle');
        }, 3000);
      } else {
        setStatus('error');
        setErrorMessage('Failed to send message. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

  return (
    <>
      <div className="rounded-xl border border-border-subtle bg-surface/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-neon-green/10 hover:border-neon-green/30 transition-all">
        <h3 className="text-2xl font-bold text-neon-green mb-4 flex items-center gap-3">
          <MessageSquare className="w-6 h-6" /> Text HDS Team
        </h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Text for urgent escalations or follow-ups. Include your name, property, and callback number.
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="inline-block border-2 border-neon-green text-neon-green px-6 py-2.5 rounded-lg font-semibold hover:bg-neon-green hover:text-black transition-all"
        >
          Text Now
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[#c6ff00]" />
                  Send Text Message
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="w-16 h-16 bg-[#c6ff00]/20 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-[#c6ff00]" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                    <p className="text-gray-400">
                      Our team has received your text request and will respond shortly to the number provided.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#c6ff00] focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Callback Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#c6ff00] focus:outline-none transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Message</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#c6ff00] focus:outline-none transition-colors resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        {errorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full px-6 py-3 bg-[#c6ff00] text-black font-bold rounded-lg hover:bg-[#d4ff33] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Text Request
                        </>
                      )}
                    </button>
                    
                    <p className="text-xs text-center text-gray-500 mt-4">
                      By submitting this form, you agree to receive text messages from HDS at the number provided.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
