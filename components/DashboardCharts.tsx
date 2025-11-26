'use client';

import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  ComposedChart, Area
} from 'recharts';

// Real-style maintenance data from HDS Console patterns
const monthlyTrendData = [
  { month: 'Jun 2024', cost: 42850, count: 156, avgCost: 275 },
  { month: 'Jul 2024', cost: 38420, count: 142, avgCost: 271 },
  { month: 'Aug 2024', cost: 51200, count: 189, avgCost: 271 },
  { month: 'Sep 2024', cost: 44800, count: 165, avgCost: 272 },
  { month: 'Oct 2024', cost: 39200, count: 148, avgCost: 265 },
  { month: 'Nov 2024', cost: 56300, count: 201, avgCost: 280 },
];

// Category breakdown - realistic facility maintenance categories
const categoryData = [
  { category: 'HVAC', cost: 89400, fill: '#c6ff00' },
  { category: 'Plumbing', cost: 45200, fill: '#22d3ee' },
  { category: 'Electrical', cost: 38900, fill: '#a78bfa' },
  { category: 'Roofing', cost: 32100, fill: '#fb923c' },
  { category: 'Flooring', cost: 24800, fill: '#f472b6' },
  { category: 'Doors/Windows', cost: 18600, fill: '#60a5fa' },
];

// Status distribution - work order pipeline
const statusData = [
  { name: 'Completed', value: 342, fill: '#22c55e' },
  { name: 'In Progress', value: 89, fill: '#c6ff00' },
  { name: 'Pending', value: 45, fill: '#f59e0b' },
  { name: 'On Hold', value: 12, fill: '#64748b' },
];

// Regional spend breakdown - matching 372 total locations
const regionData = [
  { region: 'Southwest', spend: 12450000, locations: 112 },
  { region: 'Midwest', spend: 9820000, locations: 89 },
  { region: 'Southeast', spend: 8760000, locations: 78 },
  { region: 'Northeast', spend: 7240000, locations: 54 },
  { region: 'West Coast', spend: 6890000, locations: 39 },
];

// Vendor performance
const vendorData = [
  { vendor: 'ABC Mechanical', jobs: 89, spend: 45200, rating: 4.8 },
  { vendor: 'Quick Fix HVAC', jobs: 67, spend: 38900, rating: 4.6 },
  { vendor: 'Pro Plumbers', jobs: 54, spend: 28400, rating: 4.7 },
  { vendor: 'Elite Electric', jobs: 48, spend: 32100, rating: 4.9 },
  { vendor: 'Roof Masters', jobs: 32, spend: 24800, rating: 4.5 },
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

export default function DashboardCharts() {
  return (
    <div className="w-full">
      <div className="space-y-5">
        {/* Row 1: Key Portfolio Metrics */}
        <div className="grid grid-cols-4 gap-3">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 opacity-25 bg-gradient-to-br from-neon-green/15 via-transparent to-emerald-500/10" />
            <div className="relative text-[10px] text-gray-400 font-bold uppercase tracking-widest">Portfolio Locations</div>
            <div className="relative text-3xl font-extrabold text-white mt-1">372</div>
            <div className="relative text-xs text-neon-green mt-1 flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse"></span>
              All sites active
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 opacity-25 bg-gradient-to-br from-cyan-400/15 via-transparent to-blue-500/10" />
            <div className="relative text-[10px] text-gray-400 font-bold uppercase tracking-widest">Total Spend YTD</div>
            <div className="relative text-3xl font-extrabold text-white mt-1">$37.4M</div>
            <div className="relative text-xs text-cyan-400 mt-1">↓ 8% vs last year</div>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 opacity-25 bg-gradient-to-br from-orange-400/15 via-transparent to-amber-400/10" />
            <div className="relative text-[10px] text-gray-400 font-bold uppercase tracking-widest">Work Orders YTD</div>
            <div className="relative text-3xl font-extrabold text-white mt-1">24,631</div>
            <div className="relative text-xs text-orange-400 mt-1">14,586 active</div>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 opacity-25 bg-gradient-to-br from-emerald-400/15 via-transparent to-neon-green/10" />
            <div className="relative text-[10px] text-gray-400 font-bold uppercase tracking-widest">Avg Response</div>
            <div className="relative text-3xl font-extrabold text-white mt-1">2.4<span className="text-lg text-gray-400">h</span></div>
            <div className="relative text-xs text-neon-green mt-1">↓ 22% faster</div>
          </div>
        </div>

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
                      <span className="text-xs text-gray-300">{item.name}</span>
                    </div>
                    <span className="text-xs font-bold text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Category and Region Analysis */}
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

        {/* Row 4: Bottom Stats */}
        <div className="grid grid-cols-4 gap-3">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/95 p-3 shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-sky-400/10 via-transparent to-cyan-500/5" />
            <div className="relative text-[10px] text-gray-400 font-bold uppercase tracking-widest">Avg Cost / Location</div>
            <div className="relative text-xl font-extrabold text-white mt-0.5">$2,768</div>
            <div className="relative text-[10px] text-gray-500 mt-0.5">per month</div>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/95 p-3 shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/5" />
            <div className="relative text-[10px] text-gray-400 font-bold uppercase tracking-widest">Vendor Network</div>
            <div className="relative text-xl font-extrabold text-white mt-0.5">47</div>
            <div className="relative text-[10px] text-neon-green mt-0.5">All verified & insured</div>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/95 p-3 shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-emerald-400/10 via-transparent to-green-500/5" />
            <div className="relative text-[10px] text-gray-400 font-bold uppercase tracking-widest">First-Call Resolution</div>
            <div className="relative text-xl font-extrabold text-white mt-0.5">87%</div>
            <div className="relative text-[10px] text-neon-green mt-0.5">↑ 4% this quarter</div>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/95 p-3 shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-orange-400/10 via-transparent to-amber-400/5" />
            <div className="relative text-[10px] text-gray-400 font-bold uppercase tracking-widest">Vendor Rating</div>
            <div className="relative text-xl font-extrabold text-white mt-0.5">4.7<span className="text-sm text-gray-400">/5</span></div>
            <div className="relative text-[10px] text-orange-400 mt-0.5">Avg across network</div>
          </div>
        </div>
      </div>
    </div>
  );
}
