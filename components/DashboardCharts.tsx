'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect, Suspense } from 'react';

// Dynamic imports for Recharts to improve initial page load
const RechartsComponents = dynamic(() => 
  import('recharts').then((mod) => {
    return function RechartsWrapper({ children }: { children: React.ReactNode }) {
      return <>{children}</>;
    };
  }), 
  { ssr: false, loading: () => <ChartSkeleton /> }
);

import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  ComposedChart, Area
} from 'recharts';

// Loading skeleton for charts
function ChartSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="grid grid-cols-4 gap-3">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-24 rounded-xl bg-slate-800/50" />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="h-56 rounded-xl bg-slate-800/50" />
        <div className="h-56 rounded-xl bg-slate-800/50" />
      </div>
    </div>
  );
}

// Updated data matching HDS.live Analytics Hub (screenshot data)
const monthlyTrendData = [
  { month: 'Jan 2024', cost: 5240000, count: 1842, avgCost: 2845 },
  { month: 'Feb 2024', cost: 4890000, count: 1756, avgCost: 2784 },
  { month: 'Mar 2024', cost: 5680000, count: 1923, avgCost: 2954 },
  { month: 'Apr 2024', cost: 5450000, count: 1867, avgCost: 2919 },
  { month: 'May 2024', cost: 6120000, count: 2089, avgCost: 2930 },
  { month: 'Jun 2024', cost: 5890000, count: 1978, avgCost: 2978 },
  { month: 'Jul 2024', cost: 6340000, count: 2156, avgCost: 2941 },
  { month: 'Aug 2024', cost: 6780000, count: 2234, avgCost: 3034 },
  { month: 'Sep 2024', cost: 6120000, count: 2078, avgCost: 2946 },
  { month: 'Oct 2024', cost: 5980000, count: 2012, avgCost: 2972 },
  { month: 'Nov 2024', cost: 6410000, count: 2016, avgCost: 3180 },
];

// Category breakdown - matching HDS.live Analytics Hub scale
const categoryData = [
  { category: 'HVAC', cost: 18940000, fill: '#c6ff00' },
  { category: 'Lighting', cost: 12850000, fill: '#22d3ee' },
  { category: 'Plumbing', cost: 9780000, fill: '#a78bfa' },
  { category: 'Janitorial', cost: 8640000, fill: '#fb923c' },
  { category: 'Electrical', cost: 7520000, fill: '#f472b6' },
  { category: 'Signage', cost: 6280000, fill: '#60a5fa' },
];

// Status distribution - matching HDS.live (22,951 total work orders)
const statusData = [
  { name: 'Completed', value: 8865, fill: '#22c55e' },
  { name: 'In Progress', value: 5342, fill: '#c6ff00' },
  { name: 'On Hold', value: 3421, fill: '#f59e0b' },
  { name: 'Dispatched', value: 2856, fill: '#22d3ee' },
  { name: 'Received', value: 2467, fill: '#64748b' },
];

// Regional spend breakdown - matching 365 sites across regions
const regionData = [
  { region: 'Central West', spend: 18450000, locations: 98 },
  { region: 'District 1', spend: 16820000, locations: 82 },
  { region: 'Kansas', spend: 12760000, locations: 68 },
  { region: 'South', spend: 11240000, locations: 62 },
  { region: 'North', spend: 9630000, locations: 55 },
];

// Vendor performance - matching HDS.live vendor network
const vendorData = [
  { vendor: 'Greenscape Lawncare', jobs: 1289, spend: 4520000, rating: 4.8 },
  { vendor: 'Clearview Janitorial', jobs: 1067, spend: 3890000, rating: 4.6 },
  { vendor: 'CNC Specialists LLC', jobs: 854, spend: 2840000, rating: 4.7 },
  { vendor: 'LumenTech Solutions', jobs: 748, spend: 3210000, rating: 4.9 },
  { vendor: 'AquaPure Plumbing', jobs: 632, spend: 2480000, rating: 4.5 },
];

// Energy data - matching HDS.live Energy Intelligence
const energyUsageData = [
  { month: 'Jan', kWh: 4250000, cost: 2890000 },
  { month: 'Feb', kWh: 3980000, cost: 2720000 },
  { month: 'Mar', kWh: 4120000, cost: 2810000 },
  { month: 'Apr', kWh: 3890000, cost: 2650000 },
  { month: 'May', kWh: 4560000, cost: 3100000 },
  { month: 'Jun', kWh: 5120000, cost: 3480000 },
  { month: 'Jul', kWh: 5680000, cost: 3860000 },
  { month: 'Aug', kWh: 5420000, cost: 3680000 },
  { month: 'Sep', kWh: 4890000, cost: 3320000 },
  { month: 'Oct', kWh: 4320000, cost: 2940000 },
  { month: 'Nov', kWh: 4180000, cost: 2840000 },
];

const DARK_TOOLTIP = {
  backgroundColor: '#0f172a',
  border: '1px solid rgba(198, 255, 0, 0.3)',
  borderRadius: '10px',
  fontSize: '12px',
  color: '#ffffff',
  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.8)',
  padding: '12px 16px',
};

const TOOLTIP_LABEL_STYLE = { color: '#c6ff00', fontWeight: 'bold', marginBottom: '4px' };
const TOOLTIP_ITEM_STYLE = { color: '#e2e8f0' };

interface DashboardChartsProps {
  variant?: 'full' | 'minimal' | 'work-orders';
}

export default function DashboardCharts({ variant = 'full' }: DashboardChartsProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Slight delay to allow for smooth loading transition
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return <ChartSkeleton />;
  }

  return (
    <div className="w-full">
      <div className="space-y-5">
        {/* Row 1: Key Portfolio Metrics - Matching HDS.live Analytics Hub */}
        {(variant === 'full' || variant === 'minimal') && (
        <div className="grid grid-cols-4 gap-3">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 opacity-25 bg-gradient-to-br from-neon-green/15 via-transparent to-emerald-500/10" />
            <div className="relative text-[10px] text-gray-200 font-bold uppercase tracking-widest">Total Work Orders</div>
            <div className="relative text-3xl font-extrabold text-white mt-1">22,951</div>
            <div className="relative text-xs text-neon-green mt-1 flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse"></span>
              365 sites active
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 opacity-25 bg-gradient-to-br from-cyan-400/15 via-transparent to-blue-500/10" />
            <div className="relative text-[10px] text-gray-200 font-bold uppercase tracking-widest">Total Spend</div>
            <div className="relative text-3xl font-extrabold text-white mt-1">$68.9M</div>
            <div className="relative text-xs text-cyan-400 mt-1">Maintenance $36.1M • Energy $32.8M</div>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 opacity-25 bg-gradient-to-br from-orange-400/15 via-transparent to-amber-400/10" />
            <div className="relative text-[10px] text-gray-200 font-bold uppercase tracking-widest">Average Cost / WO</div>
            <div className="relative text-3xl font-extrabold text-white mt-1">$1,573.05</div>
            <div className="relative text-xs text-orange-400 mt-1">8 properties tracked</div>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 opacity-25 bg-gradient-to-br from-emerald-400/15 via-transparent to-neon-green/10" />
            <div className="relative text-[10px] text-gray-200 font-bold uppercase tracking-widest">Energy Spend</div>
            <div className="relative text-3xl font-extrabold text-white mt-1">$32.8M</div>
            <div className="relative text-xs text-neon-green mt-1">↓ 12% vs last year</div>
          </div>
        </div>
        )}

        {/* Row 2: Main Charts */}
        <div className="grid grid-cols-2 gap-4">
          {/* Cost vs Workload Trend - Like MaintenanceAnalyticsContent */}
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/95 p-5 shadow-[0_25px_70px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-neon-green/10 via-transparent to-cyan-500/5" />
            <div className="relative mb-4">
              <p className="text-[9px] font-bold text-gray-500 uppercase tracking-[0.2em]">Maintenance Intelligence</p>
              <h3 className="text-base font-bold text-white mt-0.5">Cost vs Workload Trend</h3>
              <div className="flex gap-4 mt-2 text-[10px]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-neon-green"></div>
                  <span className="text-gray-400">Total Spend</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400"></div>
                  <span className="text-gray-400">Work Orders</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <ComposedChart data={monthlyTrendData}>
                <defs>
                  <linearGradient id="costGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#c6ff00" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#c6ff00" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" opacity={0.4} />
                <XAxis 
                  dataKey="month" 
                  stroke="#475569" 
                  style={{ fontSize: '10px' }}
                  tickFormatter={(v) => v.split(' ')[0]}
                />
                <YAxis 
                  yAxisId="left"
                  stroke="#475569" 
                  style={{ fontSize: '10px' }}
                  tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  stroke="#475569" 
                  style={{ fontSize: '10px' }}
                />
                <Tooltip 
                  contentStyle={DARK_TOOLTIP}
                  labelStyle={TOOLTIP_LABEL_STYLE}
                  itemStyle={TOOLTIP_ITEM_STYLE}
                  formatter={(value: number, name: string) => [
                    name === 'cost' ? `$${value.toLocaleString()}` : value,
                    name === 'cost' ? 'Spend' : 'Orders'
                  ]}
                />
                <Area 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="cost" 
                  stroke="#c6ff00" 
                  strokeWidth={2.5}
                  fill="url(#costGradient)"
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="count" 
                  stroke="#22d3ee" 
                  strokeWidth={2}
                  dot={{ fill: '#22d3ee', r: 3, strokeWidth: 0 }}
                  activeDot={{ r: 5, fill: '#22d3ee', stroke: '#fff', strokeWidth: 2 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Status Distribution Pie - Like HDS Console */}
          <div className="relative rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/95 p-5 shadow-[0_25px_70px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/5 rounded-xl" />
            <div className="relative mb-2">
              <p className="text-[9px] font-bold text-gray-500 uppercase tracking-[0.2em]">Work Order Pipeline</p>
              <h3 className="text-base font-bold text-white mt-0.5">Status Distribution</h3>
            </div>
            <div className="relative flex items-center gap-4">
              <div className="w-[130px] h-[130px] flex-shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={statusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={50}
                      paddingAngle={3}
                      dataKey="value"
                      strokeWidth={0}
                    >
                      {statusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={DARK_TOOLTIP}
                      itemStyle={TOOLTIP_ITEM_STYLE}
                      formatter={(value: number) => [value, 'Orders']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex-1 space-y-2">
                {statusData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.fill }}></div>
                      <span className="text-xs text-gray-100">{item.name}</span>
                    </div>
                    <span className="text-xs font-bold text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Category and Region Analysis */}
        {variant === 'full' && (
        <div className="grid grid-cols-2 gap-4">
          {/* Category Breakdown Bar Chart */}
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/95 p-5 shadow-[0_25px_70px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-amber-400/10 via-transparent to-orange-500/5" />
            <div className="relative mb-4">
              <p className="text-[9px] font-bold text-gray-500 uppercase tracking-[0.2em]">Cost Analysis</p>
              <h3 className="text-base font-bold text-white mt-0.5">Spend by Category</h3>
            </div>
            <ResponsiveContainer width="100%" height={160}>
              <BarChart data={categoryData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" opacity={0.4} horizontal={false} />
                <XAxis 
                  type="number"
                  stroke="#475569" 
                  style={{ fontSize: '10px' }}
                  tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
                />
                <YAxis 
                  type="category"
                  dataKey="category" 
                  stroke="#475569" 
                  style={{ fontSize: '10px' }}
                  width={70}
                />
                <Tooltip 
                  contentStyle={DARK_TOOLTIP}
                  labelStyle={TOOLTIP_LABEL_STYLE}
                  itemStyle={TOOLTIP_ITEM_STYLE}
                  formatter={(value: number) => [`$${value.toLocaleString()}`, 'Spend']}
                />
                <Bar 
                  dataKey="cost" 
                  radius={[0, 6, 6, 0]}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Regional Spend */}
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/95 p-5 shadow-[0_25px_70px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-blue-400/10 via-transparent to-indigo-500/5" />
            <div className="relative mb-4">
              <p className="text-[9px] font-bold text-gray-500 uppercase tracking-[0.2em]">Geographic Distribution</p>
              <h3 className="text-base font-bold text-white mt-0.5">Spend by Region</h3>
            </div>
            <ResponsiveContainer width="100%" height={160}>
              <BarChart data={regionData}>
                <defs>
                  <linearGradient id="regionGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#c6ff00" stopOpacity={0.9}/>
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity={0.7}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" opacity={0.4} />
                <XAxis 
                  dataKey="region" 
                  stroke="#475569" 
                  style={{ fontSize: '9px' }}
                  interval={0}
                  angle={-15}
                  textAnchor="end"
                />
                <YAxis 
                  stroke="#475569" 
                  style={{ fontSize: '10px' }}
                  tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
                />
                <Tooltip 
                  contentStyle={DARK_TOOLTIP}
                  labelStyle={TOOLTIP_LABEL_STYLE}
                  itemStyle={TOOLTIP_ITEM_STYLE}
                  formatter={(value: number, name: string, props: any) => [
                    `$${value.toLocaleString()}`,
                    `Spend (${props.payload.locations} locations)`
                  ]}
                />
                <Bar 
                  dataKey="spend" 
                  fill="url(#regionGradient)"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        )}

        {/* Row 4: Energy Intelligence Preview - Matching HDS.live */}
        {variant === 'full' && (
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/95 p-5 shadow-[0_25px_70px_rgba(0,0,0,0.6)]">
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-amber-400/10 via-transparent to-orange-500/5" />
          <div className="relative mb-4">
            <p className="text-[9px] font-bold text-amber-400 uppercase tracking-[0.2em]">Energy Intelligence</p>
            <h3 className="text-base font-bold text-white mt-0.5">12-Month Usage Trend</h3>
            <p className="text-[10px] text-gray-400">Energy usage over the past 12 months</p>
          </div>
          <ResponsiveContainer width="100%" height={140}>
            <ComposedChart data={energyUsageData}>
              <defs>
                <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#fbbf24" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" opacity={0.4} />
              <XAxis 
                dataKey="month" 
                stroke="#475569" 
                style={{ fontSize: '10px' }}
              />
              <YAxis 
                stroke="#475569" 
                style={{ fontSize: '10px' }}
                tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`}
              />
              <Tooltip 
                contentStyle={DARK_TOOLTIP}
                labelStyle={TOOLTIP_LABEL_STYLE}
                itemStyle={TOOLTIP_ITEM_STYLE}
                formatter={(value: number, name: string) => [
                  name === 'kWh' ? `${(value / 1000000).toFixed(2)}M kWh` : `$${(value / 1000000).toFixed(2)}M`,
                  name === 'kWh' ? 'Usage' : 'Cost'
                ]}
              />
              <Area 
                type="monotone" 
                dataKey="kWh" 
                stroke="#fbbf24" 
                strokeWidth={2}
                fill="url(#energyGradient)"
              />
              <Line 
                type="monotone" 
                dataKey="cost" 
                stroke="#22d3ee" 
                strokeWidth={2}
                dot={{ fill: '#22d3ee', r: 2, strokeWidth: 0 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        )}

        {/* Row 5: Bottom Stats - Matching HDS.live Analytics Hub */}
        {variant === 'full' && (
        <div className="grid grid-cols-4 gap-3">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/95 p-3 shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-sky-400/10 via-transparent to-cyan-500/5" />
            <div className="relative text-[10px] text-gray-200 font-bold uppercase tracking-widest">Avg Cost / Site</div>
            <div className="relative text-xl font-extrabold text-white mt-0.5">$188,767</div>
            <div className="relative text-[10px] text-gray-500 mt-0.5">per year (365 sites)</div>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/95 p-3 shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/5" />
            <div className="relative text-[10px] text-gray-200 font-bold uppercase tracking-widest">Active Vendors</div>
            <div className="relative text-xl font-extrabold text-white mt-0.5">127</div>
            <div className="relative text-[10px] text-neon-green mt-0.5">All verified & insured</div>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/95 p-3 shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-emerald-400/10 via-transparent to-green-500/5" />
            <div className="relative text-[10px] text-gray-200 font-bold uppercase tracking-widest">Energy EUI Trend</div>
            <div className="relative text-xl font-extrabold text-white mt-0.5">42.3</div>
            <div className="relative text-[10px] text-neon-green mt-0.5">↓ 8% vs benchmark</div>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/95 p-3 shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-orange-400/10 via-transparent to-amber-400/5" />
            <div className="relative text-[10px] text-gray-200 font-bold uppercase tracking-widest">Top Locations</div>
            <div className="relative text-xl font-extrabold text-white mt-0.5">8</div>
            <div className="relative text-[10px] text-orange-400 mt-0.5">Properties monitored</div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}
