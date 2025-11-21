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
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Active Sites</div>
            <div className="text-3xl font-bold text-gray-900 mt-1">247</div>
            <div className="text-xs text-green-600 mt-1">↑ 12% from last month</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Open Work Orders</div>
            <div className="text-3xl font-bold text-gray-900 mt-1">89</div>
            <div className="text-xs text-orange-600 mt-1">23 high priority</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Avg Response Time</div>
            <div className="text-3xl font-bold text-gray-900 mt-1">4.2<span className="text-lg text-gray-500">m</span></div>
            <div className="text-xs text-green-600 mt-1">↓ 18% faster</div>
          </div>
        </div>

        {/* Bar Chart - Monthly Maintenance Spend */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="mb-4">
            <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide">Monthly Maintenance Spend</h3>
            <p className="text-xs text-gray-500 mt-1">Last 6 months maintenance costs</p>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="month" 
                stroke="#6b7280" 
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#6b7280" 
                style={{ fontSize: '12px' }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
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
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="mb-4">
            <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide">Energy Usage Trend</h3>
            <p className="text-xs text-gray-500 mt-1">kWh per square foot across portfolio</p>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={energyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="month" 
                stroke="#6b7280" 
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#6b7280" 
                style={{ fontSize: '12px' }}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
                formatter={(value: number) => [`${value} kWh/ft²`, 'Usage']}
              />
              <Line 
                type="monotone" 
                dataKey="kwh" 
                stroke="#c6ff00" 
                strokeWidth={3}
                dot={{ fill: '#c6ff00', r: 4 }}
                activeDot={{ r: 6 }}
                animationDuration={1000}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Additional Metrics Row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Maintenance per ft²</div>
            <div className="text-2xl font-bold text-gray-900 mt-1">$2.34</div>
            <div className="text-xs text-gray-500 mt-1">Portfolio average</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Vendor Response Rate</div>
            <div className="text-2xl font-bold text-gray-900 mt-1">96.2%</div>
            <div className="text-xs text-green-600 mt-1">Above target (95%)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
