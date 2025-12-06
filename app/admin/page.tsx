'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface QuickStat {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: string;
}

export default function AdminDashboard() {
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    setLastUpdated(new Date().toLocaleString());
  }, []);

  const quickStats: QuickStat[] = [
    { label: 'Active Sites', value: '372', change: '+12 this month', trend: 'up', icon: '🏢' },
    { label: 'Total Spend YTD', value: '$37.4M', change: '+8.2%', trend: 'up', icon: '💰' },
    { label: 'Work Orders YTD', value: '24,631', change: '+1,847', trend: 'up', icon: '📋' },
    { label: 'Active Vendors', value: '127+', change: '+5 new', trend: 'up', icon: '🔧' },
  ];

  const quickActions = [
    { label: 'Edit Hero Text', href: '/admin/hero', icon: '🎯', color: 'neon-green' },
    { label: 'Update Stats', href: '/admin/stats', icon: '📈', color: 'neon-blue' },
    { label: 'Manage Testimonials', href: '/admin/testimonials', icon: '💬', color: 'neon-purple' },
    { label: 'Site Settings', href: '/admin/settings', icon: '⚙️', color: 'neon-yellow' },
  ];

  const recentPages = [
    { name: 'Home Page', path: '/', status: 'Published' },
    { name: 'About Us', path: '/about', status: 'Published' },
    { name: 'Services', path: '/services', status: 'Published' },
    { name: 'HDS Console', path: '/hds-console', status: 'Published' },
    { name: 'Contact', path: '/contact', status: 'Published' },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400 mt-1">Manage your HDSOK.com website content and settings</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat) => (
          <div
            key={stat.label}
            className="bg-surface rounded-xl border border-border-subtle p-6 hover:border-neon-green/30 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
                <p className="text-3xl font-bold text-white mt-1">{stat.value}</p>
                <p className={`text-sm mt-2 ${stat.trend === 'up' ? 'text-green-400' : stat.trend === 'down' ? 'text-red-400' : 'text-gray-400'}`}>
                  {stat.change}
                </p>
              </div>
              <span className="text-3xl">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="bg-surface rounded-xl border border-border-subtle p-6 hover:border-neon-green/50 hover:shadow-lg hover:shadow-neon-green/10 transition-all group"
            >
              <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform">{action.icon}</span>
              <p className="text-white font-medium">{action.label}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Website Pages */}
        <div className="bg-surface rounded-xl border border-border-subtle p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Website Pages</h2>
          <div className="space-y-3">
            {recentPages.map((page) => (
              <div
                key={page.path}
                className="flex items-center justify-between p-3 rounded-lg bg-base/50 hover:bg-base transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-gray-400">📄</span>
                  <span className="text-white">{page.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-400">
                    {page.status}
                  </span>
                  <Link
                    href={page.path}
                    target="_blank"
                    className="text-gray-400 hover:text-neon-green transition-colors"
                  >
                    View →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Info */}
        <div className="bg-surface rounded-xl border border-border-subtle p-6">
          <h2 className="text-xl font-semibold text-white mb-4">System Information</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 rounded-lg bg-base/50">
              <span className="text-gray-400">Platform</span>
              <span className="text-white">Next.js 15 + Vercel</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-base/50">
              <span className="text-gray-400">Domain</span>
              <span className="text-neon-green">hdsok.com</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-base/50">
              <span className="text-gray-400">SSL Status</span>
              <span className="text-green-400">✓ Active</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-base/50">
              <span className="text-gray-400">Last Deployment</span>
              <span className="text-white">Today</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-base/50">
              <span className="text-gray-400">Admin Session</span>
              <span className="text-white text-sm">{lastUpdated}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-gradient-to-r from-neon-green/10 to-neon-blue/10 rounded-xl border border-neon-green/20 p-6">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Need Help?</h3>
            <p className="text-gray-300">
              Use the sidebar to navigate between different sections. Changes you make here will update your live website.
              For major changes or new features, contact your development team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
