'use client';

import { useState } from 'react';

interface Stat {
  id: string;
  label: string;
  value: string;
  change: string;
  icon: string;
}

export default function AdminStatsPage() {
  const [stats, setStats] = useState<Stat[]>([
    { id: '1', label: 'Portfolio Locations', value: '372', change: '+12 this month', icon: '🏢' },
    { id: '2', label: 'Total Spend YTD', value: '$37.4M', change: '+8.2%', icon: '💰' },
    { id: '3', label: 'Work Orders YTD', value: '24,631', change: '+1,847', icon: '📋' },
    { id: '4', label: 'Active Vendors', value: '127+', change: '+5 new', icon: '🔧' },
  ]);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleStatChange = (id: string, field: keyof Stat, value: string) => {
    setStats(stats.map(stat => 
      stat.id === id ? { ...stat, [field]: value } : stat
    ));
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveStatus('idle');
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSaveStatus('success');
    setIsSaving(false);
    
    setTimeout(() => setSaveStatus('idle'), 3000);
  };

  const iconOptions = ['🏢', '💰', '📋', '🔧', '📊', '⚡', '🎯', '✅', '📈', '🌐'];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Statistics</h1>
          <p className="text-gray-400 mt-1">Manage the statistics displayed on your website</p>
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
          <p className="text-green-400">✓ Statistics updated successfully!</p>
        </div>
      )}

      {/* Stats Editor */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <div key={stat.id} className="bg-surface rounded-xl border border-border-subtle p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Stat #{index + 1}</h3>
              <span className="text-3xl">{stat.icon}</span>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Label
                </label>
                <input
                  type="text"
                  value={stat.label}
                  onChange={(e) => handleStatChange(stat.id, 'label', e.target.value)}
                  className="w-full px-4 py-3 bg-base border border-border-subtle rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Value
                  </label>
                  <input
                    type="text"
                    value={stat.value}
                    onChange={(e) => handleStatChange(stat.id, 'value', e.target.value)}
                    className="w-full px-4 py-3 bg-base border border-border-subtle rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Change Text
                  </label>
                  <input
                    type="text"
                    value={stat.change}
                    onChange={(e) => handleStatChange(stat.id, 'change', e.target.value)}
                    className="w-full px-4 py-3 bg-base border border-border-subtle rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Icon
                </label>
                <div className="flex flex-wrap gap-2">
                  {iconOptions.map((icon) => (
                    <button
                      key={icon}
                      onClick={() => handleStatChange(stat.id, 'icon', icon)}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl transition-colors ${
                        stat.icon === icon
                          ? 'bg-neon-green/20 border-2 border-neon-green'
                          : 'bg-base border border-border-subtle hover:border-neon-green/50'
                      }`}
                    >
                      {icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Preview */}
      <div className="bg-surface rounded-xl border border-border-subtle p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Preview</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-base rounded-lg p-4 border border-border-subtle">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                  <p className="text-green-400 text-sm mt-1">{stat.change}</p>
                </div>
                <span className="text-2xl">{stat.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <span className="text-2xl">⚠️</span>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Important Note</h3>
            <p className="text-gray-300 text-sm">
              These statistics should match the data from your HDS Console for accuracy. 
              Portfolio Locations: 372, Total Spend YTD: $37.4M, Work Orders YTD: 24,631.
              Note: This is a demo interface. Full CMS integration requires backend setup.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
