'use client';

import { useState } from 'react';

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    siteName: 'HDSOK.com',
    siteDescription: 'Homeland Development Services - National Vendor Management',
    contactEmail: 'info@hdsok.com',
    contactPhone: '(405) 774-4156',
    address: 'P.O. Box 890325, Oklahoma City, OK 73189',
    socialLinkedin: '',
    socialTwitter: '',
    googleAnalyticsId: '',
    enableChat: true,
    enableCookieConsent: true,
    maintenanceMode: false,
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
          <h1 className="text-3xl font-bold text-white">Settings</h1>
          <p className="text-gray-400 mt-1">Configure your website settings</p>
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
            'Save Settings'
          )}
        </button>
      </div>

      {saveStatus === 'success' && (
        <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
          <p className="text-green-400">✓ Settings saved successfully!</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* General Settings */}
        <div className="bg-surface rounded-xl border border-border-subtle p-6">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <span>🌐</span> General
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Site Name
              </label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                className="w-full px-4 py-3 bg-base border border-border-subtle rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Site Description
              </label>
              <textarea
                value={settings.siteDescription}
                onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
                rows={2}
                className="w-full px-4 py-3 bg-base border border-border-subtle rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors resize-none"
              />
            </div>
          </div>
        </div>

        {/* Contact Settings */}
        <div className="bg-surface rounded-xl border border-border-subtle p-6">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <span>📞</span> Contact Information
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Contact Email
              </label>
              <input
                type="email"
                value={settings.contactEmail}
                onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                className="w-full px-4 py-3 bg-base border border-border-subtle rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Contact Phone
              </label>
              <input
                type="tel"
                value={settings.contactPhone}
                onChange={(e) => setSettings({ ...settings, contactPhone: e.target.value })}
                className="w-full px-4 py-3 bg-base border border-border-subtle rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Address
              </label>
              <input
                type="text"
                value={settings.address}
                onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                className="w-full px-4 py-3 bg-base border border-border-subtle rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Social & Analytics */}
        <div className="bg-surface rounded-xl border border-border-subtle p-6">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <span>📊</span> Social & Analytics
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                LinkedIn URL
              </label>
              <input
                type="url"
                value={settings.socialLinkedin}
                onChange={(e) => setSettings({ ...settings, socialLinkedin: e.target.value })}
                placeholder="https://linkedin.com/company/..."
                className="w-full px-4 py-3 bg-base border border-border-subtle rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Twitter/X URL
              </label>
              <input
                type="url"
                value={settings.socialTwitter}
                onChange={(e) => setSettings({ ...settings, socialTwitter: e.target.value })}
                placeholder="https://twitter.com/..."
                className="w-full px-4 py-3 bg-base border border-border-subtle rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Google Analytics ID
              </label>
              <input
                type="text"
                value={settings.googleAnalyticsId}
                onChange={(e) => setSettings({ ...settings, googleAnalyticsId: e.target.value })}
                placeholder="G-XXXXXXXXXX"
                className="w-full px-4 py-3 bg-base border border-border-subtle rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Feature Toggles */}
        <div className="bg-surface rounded-xl border border-border-subtle p-6">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <span>⚙️</span> Features
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-base rounded-lg">
              <div>
                <p className="text-white font-medium">Live Chat</p>
                <p className="text-gray-400 text-sm">Enable chat widget on the website</p>
              </div>
              <button
                onClick={() => setSettings({ ...settings, enableChat: !settings.enableChat })}
                className={`w-12 h-6 rounded-full transition-colors relative ${
                  settings.enableChat ? 'bg-neon-green' : 'bg-gray-600'
                }`}
              >
                <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                  settings.enableChat ? 'left-7' : 'left-1'
                }`} />
              </button>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-base rounded-lg">
              <div>
                <p className="text-white font-medium">Cookie Consent</p>
                <p className="text-gray-400 text-sm">Show cookie consent banner</p>
              </div>
              <button
                onClick={() => setSettings({ ...settings, enableCookieConsent: !settings.enableCookieConsent })}
                className={`w-12 h-6 rounded-full transition-colors relative ${
                  settings.enableCookieConsent ? 'bg-neon-green' : 'bg-gray-600'
                }`}
              >
                <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                  settings.enableCookieConsent ? 'left-7' : 'left-1'
                }`} />
              </button>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-base rounded-lg border border-red-500/30">
              <div>
                <p className="text-white font-medium">Maintenance Mode</p>
                <p className="text-red-400 text-sm">⚠️ Site will be inaccessible to visitors</p>
              </div>
              <button
                onClick={() => setSettings({ ...settings, maintenanceMode: !settings.maintenanceMode })}
                className={`w-12 h-6 rounded-full transition-colors relative ${
                  settings.maintenanceMode ? 'bg-red-500' : 'bg-gray-600'
                }`}
              >
                <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                  settings.maintenanceMode ? 'left-7' : 'left-1'
                }`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-red-400 mb-4">Danger Zone</h2>
        <p className="text-gray-300 text-sm mb-4">
          These actions are irreversible. Please proceed with caution.
        </p>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-red-500/20 border border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors">
            Clear Cache
          </button>
          <button className="px-4 py-2 bg-red-500/20 border border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors">
            Reset to Defaults
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <span className="text-2xl">ℹ️</span>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">About Settings</h3>
            <p className="text-gray-300 text-sm">
              Changes to settings may take a few minutes to propagate across all pages.
              Some settings require a rebuild to take effect.
              Note: This is a demo interface. Full CMS integration requires backend setup.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
