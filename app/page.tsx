'use client';
import { useState, useEffect } from "react";
import { ChartSwitcher } from "@/components/ChartSwitcher";
import FilterInput from "@/components/FilterInput";
import SalesChart from '@/components/SalesChart';

const salesData = [
  { year: 2020, sales: 400 },
  { year: 2021, sales: 700 },
  { year: 2022, sales: 200 },
  { year: 2023, sales: 800 },
  { year: 2024, sales: 1000 }
];

export default function Home() {
  const [threshold, setThreshold] = useState(0);

   
  const [loading, setLoading] = useState(true);

  const filteredData = salesData.filter((d) => d.sales >= threshold);

  useEffect(() => {
   
    const timer = setTimeout(() => {
          setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
          <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl font-semibold text-gray-600">Loading...</p>
      </main>
    );
  }

  return (
        <main className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-900">Sales Dashboard</h1>

                    <FilterInput onChange={setThreshold} />
      <ChartSwitcher data={filteredData} />
                            </main>
  );
}
