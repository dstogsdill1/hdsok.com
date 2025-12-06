'use client';

import { useState } from 'react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: '1',
      name: 'John Smith',
      role: 'Facilities Director',
      company: 'National Retail Chain',
      quote: 'HDS transformed how we manage our 200+ locations. The visibility and cost savings have been incredible.',
      rating: 5,
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      role: 'VP of Operations',
      company: 'Regional Healthcare Group',
      quote: 'The HDS Console gives us real-time insight into every work order. Response times have improved 40%.',
      rating: 5,
    },
    {
      id: '3',
      name: 'Mike Davis',
      role: 'Property Manager',
      company: 'Commercial Real Estate Co.',
      quote: 'Finally, a vendor management solution that actually works. HDS delivers on their promises.',
      rating: 5,
    },
  ]);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleTestimonialChange = (id: string, field: keyof Testimonial, value: string | number) => {
    setTestimonials(testimonials.map(t => 
      t.id === id ? { ...t, [field]: value } : t
    ));
  };

  const addTestimonial = () => {
    const newId = String(Date.now());
    setTestimonials([...testimonials, {
      id: newId,
      name: 'New Client',
      role: 'Title',
      company: 'Company Name',
      quote: 'Enter testimonial quote here...',
      rating: 5,
    }]);
  };

  const removeTestimonial = (id: string) => {
    if (testimonials.length > 1) {
      setTestimonials(testimonials.filter(t => t.id !== id));
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveStatus('idle');
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSaveStatus('success');
    setIsSaving(false);
    
    setTimeout(() => setSaveStatus('idle'), 3000);
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Testimonials</h1>
          <p className="text-gray-400 mt-1">Manage customer testimonials displayed on your website</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={addTestimonial}
            className="px-4 py-3 bg-surface border border-border-subtle text-white rounded-lg font-semibold hover:border-neon-green/50 transition-colors"
          >
            + Add Testimonial
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="px-6 py-3 bg-neon-green text-dark-bg rounded-lg font-semibold hover:bg-neon-green/90 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {isSaving ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-dark-bg"></div>
                Saving...
              </>
            ) : (
              'Save Changes'
            )}
          </button>
        </div>
      </div>

      {saveStatus === 'success' && (
        <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
          <p className="text-green-400">✓ Testimonials saved successfully!</p>
        </div>
      )}

      {/* Testimonials Editor */}
      <div className="space-y-6">
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id} className="bg-surface rounded-xl border border-border-subtle p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Testimonial #{index + 1}</h3>
              <button
                onClick={() => removeTestimonial(testimonial.id)}
                className="text-red-400 hover:text-red-300 transition-colors text-sm"
                disabled={testimonials.length <= 1}
              >
                Remove
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={testimonial.name}
                  onChange={(e) => handleTestimonialChange(testimonial.id, 'name', e.target.value)}
                  className="w-full px-4 py-3 bg-base border border-border-subtle rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Role/Title
                </label>
                <input
                  type="text"
                  value={testimonial.role}
                  onChange={(e) => handleTestimonialChange(testimonial.id, 'role', e.target.value)}
                  className="w-full px-4 py-3 bg-base border border-border-subtle rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  value={testimonial.company}
                  onChange={(e) => handleTestimonialChange(testimonial.id, 'company', e.target.value)}
                  className="w-full px-4 py-3 bg-base border border-border-subtle rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Quote
              </label>
              <textarea
                value={testimonial.quote}
                onChange={(e) => handleTestimonialChange(testimonial.id, 'quote', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 bg-base border border-border-subtle rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors resize-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Rating
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleTestimonialChange(testimonial.id, 'rating', star)}
                    className={`text-2xl transition-colors ${
                      star <= testimonial.rating ? 'text-yellow-400' : 'text-gray-600'
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Preview */}
      <div className="bg-surface rounded-xl border border-border-subtle p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Preview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-base rounded-lg p-6 border border-border-subtle">
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className={star <= testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}>
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-300 text-sm mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <span className="text-2xl">ℹ️</span>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Testimonial Guidelines</h3>
            <p className="text-gray-300 text-sm">
              Keep testimonials authentic and specific. Include measurable results when possible 
              (e.g., "40% improvement" or "200+ locations"). Always get permission before using 
              client names and companies.
              Note: This is a demo interface. Full CMS integration requires backend setup.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
