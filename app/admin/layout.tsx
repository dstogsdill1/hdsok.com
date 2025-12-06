'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const auth = sessionStorage.getItem('hds_admin_auth');
    const token = sessionStorage.getItem('hds_admin_token');
    if (auth === 'true' && token) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        sessionStorage.setItem('hds_admin_auth', 'true');
        sessionStorage.setItem('hds_admin_token', data.token);
        sessionStorage.setItem('hds_admin_email', data.user.email);
        setIsAuthenticated(true);
      } else {
        setError(data.error || 'Invalid credentials');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('hds_admin_auth');
    sessionStorage.removeItem('hds_admin_token');
    sessionStorage.removeItem('hds_admin_email');
    setIsAuthenticated(false);
    router.push('/admin');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-base flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-green"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-base flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="bg-surface rounded-2xl border border-border-subtle p-8 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-neon-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔐</span>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">HDS Admin</h1>
              <p className="text-gray-400">Sign in to manage your website</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-base border border-border-subtle rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors"
                  placeholder="admin@hdsok.com"
                  required
                  autoFocus
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-base border border-border-subtle rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors"
                  placeholder="••••••••"
                  required
                />
              </div>
              
              {error && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-neon-green text-dark-bg py-3 rounded-lg font-semibold hover:bg-neon-green/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-dark-bg"></div>
                    Signing in...
                  </>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <Link href="/" className="text-gray-400 hover:text-neon-green text-sm transition-colors">
                ← Back to website
              </Link>
            </div>
          </div>
          
          <p className="text-center text-gray-500 text-xs mt-6">
            Homeland Development Services Admin Panel
          </p>
        </div>
      </div>
    );
  }

  const navItems = [
    { href: '/admin', label: 'Dashboard', icon: '📊' },
    { href: '/admin/content', label: 'Content', icon: '📝' },
    { href: '/admin/hero', label: 'Hero Section', icon: '🎯' },
    { href: '/admin/stats', label: 'Statistics', icon: '📈' },
    { href: '/admin/testimonials', label: 'Testimonials', icon: '💬' },
    { href: '/admin/settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-base flex">
      {/* Sidebar */}
      <aside className="w-64 bg-surface border-r border-border-subtle flex flex-col">
        <div className="p-6 border-b border-border-subtle">
          <Link href="/admin" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-neon-green/10 rounded-lg flex items-center justify-center">
              <span className="text-xl">🏠</span>
            </div>
            <span className="text-xl font-bold text-white">HDS Admin</span>
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-neon-green/10 text-neon-green border border-neon-green/30'
                    : 'text-gray-300 hover:bg-surface-hover hover:text-white'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-border-subtle space-y-2">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-surface-hover hover:text-white transition-colors"
          >
            <span className="text-lg">🌐</span>
            <span className="font-medium">View Website</span>
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <span className="text-lg">🚪</span>
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-surface border-b border-border-subtle px-8 py-4 flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm">Welcome back</p>
            <h2 className="text-xl font-semibold text-white">{typeof window !== 'undefined' ? sessionStorage.getItem('hds_admin_email') || 'Administrator' : 'Administrator'}</h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
              ● Online
            </span>
            <span className="text-sm text-gray-400">
              {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
            </span>
          </div>
        </header>
        
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
