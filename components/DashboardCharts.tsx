'use client';

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const monthlyData = [
  { month: 'Jan', spend: 24500 },
  { month: 'Feb', spend: 30800 },
  { month: 'Mar', spend: 22100 },
  { month: 'Apr', spend: 36900 },
  { month: 'May', spend: 28400 },
  { month: 'Jun', spend: 18200 },
];

const energyData = [
  { month: 'Jan', kwh: 145 },
  { month: 'Feb', kwh: 138 },
  { month: 'Mar', kwh: 142 },
  { month: 'Apr', kwh: 125 },
  { month: 'May', kwh: 132 },
  { month: 'Jun', kwh: 118 },
  { month: 'Jul', kwh: 120 },
];

export default function DashboardCharts() {
  return (
    <div className="w-full">
      {/* Dashboard with Interactive Charts */}
      <div className="space-y-6">
        {/* Header Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-neon-green/10 via-transparent to-emerald-500/10" />
            <div className="relative text-xs text-gray-400 font-semibold uppercase tracking-wide">Active Sites</div>
            <div className="relative text-3xl font-bold text-white mt-1">247</div>
            <div className="relative text-xs text-neon-green mt-1">↑ 12% from last month</div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-orange-400/10 via-transparent to-amber-400/10" />
            <div className="relative text-xs text-gray-400 font-semibold uppercase tracking-wide">Open Work Orders</div>
            <div className="relative text-3xl font-bold text-white mt-1">89</div>
            <div className="relative text-xs text-orange-400 mt-1">23 high priority</div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-emerald-400/10 via-transparent to-neon-green/10" />
            <div className="relative text-xs text-gray-400 font-semibold uppercase tracking-wide">Avg Response Time</div>
            <div className="relative text-3xl font-bold text-white mt-1">4.2<span className="text-lg text-gray-400">m</span></div>
            <div className="relative text-xs text-neon-green mt-1">↓ 18% faster</div>
          </div>
        </div>

        {/* Bar Chart - Monthly Maintenance Spend */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-neon-green/10 via-transparent to-emerald-500/10" />
          <div className="relative mb-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wide">Monthly Maintenance Spend</h3>
            <p className="text-xs text-gray-400 mt-1">Last 6 months maintenance costs</p>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" opacity={0.3} />
              <XAxis 
                dataKey="month" 
                stroke="#64748b" 
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#64748b" 
                style={{ fontSize: '12px' }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#0f172a',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  fontSize: '12px',
                  color: '#e2e8f0',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
                }}
                labelStyle={{ color: '#c6ff00', fontWeight: 'bold' }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, 'Spend']}
              />
              <Bar 
                dataKey="spend" 
                fill="#c6ff00" 
                radius={[8, 8, 0, 0]}
                animationDuration={1000}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart - Energy Usage Trend */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-emerald-400/10 via-transparent to-neon-green/10" />
          <div className="relative mb-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wide">Energy Usage Trend</h3>
            <p className="text-xs text-gray-400 mt-1">kWh per square foot across portfolio</p>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={energyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" opacity={0.3} />
              <XAxis 
                dataKey="month" 
                stroke="#64748b" 
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#64748b" 
                style={{ fontSize: '12px' }}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#0f172a',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  fontSize: '12px',
                  color: '#e2e8f0',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
                }}
                labelStyle={{ color: '#c6ff00', fontWeight: 'bold' }}
                formatter={(value: number) => [`${value} kWh/ft²`, 'Usage']}
              />
              <Line 
                type="monotone" 
                dataKey="kwh" 
                stroke="#c6ff00" 
                strokeWidth={3}
                dot={{ fill: '#c6ff00', r: 4 }}
                activeDot={{ r: 6, fill: '#c6ff00', stroke: '#fff', strokeWidth: 2 }}
                animationDuration={1000}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Additional Metrics Row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-sky-400/10 via-transparent to-neon-green/10" />
            <div className="relative text-xs text-gray-400 font-semibold uppercase tracking-wide">Maintenance per ft²</div>
            <div className="relative text-2xl font-bold text-white mt-1">$2.34</div>
            <div className="relative text-xs text-gray-400 mt-1">Portfolio average</div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/90 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-purple-500/10 via-transparent to-neon-green/5" />
            <div className="relative text-xs text-gray-400 font-semibold uppercase tracking-wide">Vendor Response Rate</div>
            <div className="relative text-2xl font-bold text-white mt-1">96.2%</div>
            <div className="relative text-xs text-neon-green mt-1">Above target (95%)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
