'use client';

import { useState } from 'react';

export default function AdminHeroPage() {
  const [heroData, setHeroData] = useState({
    headline: 'Save money. See everything. Make better decisions.',
    subheadline: 'HDS coordinates licensed vendors across the nation to keep your facilities running smoothly—while our powerful console gives you real-time visibility into every work order, cost, and outcome.',
    ctaPrimary: 'Get Started',
    ctaPrimaryLink: '/contact',
    ctaSecondary: 'Watch Demo',
    ctaSecondaryLink: '/hds-console',
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSave = async () => {
    setIsSaving(true);
    setSaveStatus('idle');
    
    // Simulate save - in production, this would call an API
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
          <h1 className="text-3xl font-bold text-white">Hero Section</h1>
          <p className="text-gray-400 mt-1">Edit your homepage hero content</p>
        </div>
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

      {saveStatus === 'success' && (
        <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
          <p className="text-green-400">✓ Changes saved successfully!</p>
        </div>
      )}

      {/* Editor */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form */}
        <div className="space-y-6">
          <div className="bg-surface rounded-xl border border-border-subtle p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Main Content</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Headline
                </label>
                <input
                  type="text"
                  value={heroData.headline}
                  onChange={(e) => setHeroData({ ...heroData, headline: e.target.value })}
                  className="w-full px-4 py-3 bg-base border border-border-subtle rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subheadline
                </label>
                <textarea
                  value={heroData.subheadline}
                  onChange={(e) => setHeroData({ ...heroData, subheadline: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-base border border-border-subtle rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors resize-none"
                />
              </div>
            </div>
          </div>

          <div className="bg-surface rounded-xl border border-border-subtle p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Call to Action Buttons</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Primary Button Text
                  </label>
                  <input
                    type="text"
                    value={heroData.ctaPrimary}
                    onChange={(e) => setHeroData({ ...heroData, ctaPrimary: e.target.value })}
                    className="w-full px-4 py-3 bg-base border border-border-subtle rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Primary Button Link
                  </label>
                  <input
                    type="text"
                    value={heroData.ctaPrimaryLink}
                    onChange={(e) => setHeroData({ ...heroData, ctaPrimaryLink: e.target.value })}
                    className="w-full px-4 py-3 bg-base border border-border-subtle rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Secondary Button Text
                  </label>
                  <input
                    type="text"
                    value={heroData.ctaSecondary}
                    onChange={(e) => setHeroData({ ...heroData, ctaSecondary: e.target.value })}
                    className="w-full px-4 py-3 bg-base border border-border-subtle rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Secondary Button Link
                  </label>
                  <input
                    type="text"
                    value={heroData.ctaSecondaryLink}
                    onChange={(e) => setHeroData({ ...heroData, ctaSecondaryLink: e.target.value })}
                    className="w-full px-4 py-3 bg-base border border-border-subtle rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="bg-surface rounded-xl border border-border-subtle p-6">
          <h2 className="text-xl font-semibold text-white mb-6">Live Preview</h2>
          
          <div className="bg-base rounded-lg p-8 border border-border-subtle">
            <h1 className="text-2xl font-bold text-white mb-4">{heroData.headline}</h1>
            <p className="text-gray-400 mb-6 text-sm">{heroData.subheadline}</p>
            <div className="flex gap-3">
              <span className="px-4 py-2 bg-neon-green text-dark-bg rounded-lg text-sm font-semibold">
                {heroData.ctaPrimary}
              </span>
              <span className="px-4 py-2 border border-neon-green text-neon-green rounded-lg text-sm font-semibold">
                {heroData.ctaSecondary}
              </span>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm mt-4">
            This is a simplified preview. The actual hero section includes animations and additional styling.
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <span className="text-2xl">ℹ️</span>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">About Hero Editing</h3>
            <p className="text-gray-300 text-sm">
              Changes made here will update the hero section on your homepage. 
              For structural changes or adding new elements, please contact your development team.
              Note: This is a demo interface. Full CMS integration requires backend setup.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
