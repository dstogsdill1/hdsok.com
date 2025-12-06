'use client';

import Link from 'next/link';

interface ContentSection {
  name: string;
  description: string;
  href: string;
  icon: string;
  status: 'published' | 'draft';
}

export default function AdminContentPage() {
  const contentSections: ContentSection[] = [
    {
      name: 'Hero Section',
      description: 'Main headline, subheadline, and call-to-action buttons',
      href: '/admin/hero',
      icon: '🎯',
      status: 'published',
    },
    {
      name: 'Statistics',
      description: 'Portfolio stats displayed on the homepage',
      href: '/admin/stats',
      icon: '📈',
      status: 'published',
    },
    {
      name: 'Testimonials',
      description: 'Customer testimonials and reviews',
      href: '/admin/testimonials',
      icon: '💬',
      status: 'published',
    },
    {
      name: 'Site Settings',
      description: 'General configuration and features',
      href: '/admin/settings',
      icon: '⚙️',
      status: 'published',
    },
  ];

  const pages = [
    { name: 'Home', path: '/', lastUpdated: 'Dec 6, 2025' },
    { name: 'About', path: '/about', lastUpdated: 'Dec 5, 2025' },
    { name: 'Services', path: '/services', lastUpdated: 'Dec 4, 2025' },
    { name: 'HDS Console', path: '/hds-console', lastUpdated: 'Dec 6, 2025' },
    { name: 'Contact', path: '/contact', lastUpdated: 'Dec 3, 2025' },
    { name: 'Vendors', path: '/vendors', lastUpdated: 'Dec 2, 2025' },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Content Management</h1>
        <p className="text-gray-400 mt-1">Manage all your website content from one place</p>
      </div>

      {/* Content Sections */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Editable Sections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contentSections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="bg-surface rounded-xl border border-border-subtle p-6 hover:border-neon-green/50 hover:shadow-lg hover:shadow-neon-green/10 transition-all group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <span className="text-4xl group-hover:scale-110 transition-transform">{section.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-neon-green transition-colors">
                      {section.name}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{section.description}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  section.status === 'published' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {section.status}
                </span>
              </div>
              <div className="mt-4 flex items-center text-neon-green text-sm font-medium">
                Edit Section
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Website Pages */}
      <div className="bg-surface rounded-xl border border-border-subtle p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Website Pages</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border-subtle">
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Page</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Path</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Last Updated</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                <th className="text-right py-3 px-4 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pages.map((page) => (
                <tr key={page.path} className="border-b border-border-subtle/50 hover:bg-base/50">
                  <td className="py-4 px-4">
                    <span className="text-white font-medium">{page.name}</span>
                  </td>
                  <td className="py-4 px-4">
                    <code className="text-neon-green text-sm bg-neon-green/10 px-2 py-1 rounded">
                      {page.path}
                    </code>
                  </td>
                  <td className="py-4 px-4 text-gray-400">{page.lastUpdated}</td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-400">
                      Published
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <a
                      href={page.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-neon-green transition-colors text-sm"
                    >
                      View →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <span className="text-2xl">ℹ️</span>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Content Management</h3>
            <p className="text-gray-300 text-sm">
              This admin panel allows you to edit key sections of your website. 
              For structural changes, new pages, or custom functionality, please contact your development team.
              Note: This is a demo interface. Full CMS integration requires backend setup.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
