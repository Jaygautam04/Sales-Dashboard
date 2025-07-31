'use client';

import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

type ChartSwitcherProps = {
  data: {
    year: number;
    sales: number;
  }[];
};

export function ChartSwitcher({ data }: ChartSwitcherProps) {
     const [chartType, setChartType] = useState<'bar'>('bar');

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex justify-center mb-4 space-x-2">
                 <button
          onClick={() => setChartType('bar')}
             className={`px-4 py-2 rounded ${
            chartType === 'bar' ? 'bg-blue-500 text-white' : 'bg-gray-200'
           }`}
        >
          Bar
        </button>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
                     <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
                 <Bar dataKey="sales" fill="#3b82f6" />
        </BarChart>
               </ResponsiveContainer>
    </div>
  );
}
