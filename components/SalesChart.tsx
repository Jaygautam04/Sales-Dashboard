"use client";

import { useEffect, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

interface SalesData {
     year: number;
  sales: number;
}

export default function SalesChart() {
  const [data, setData] = useState<SalesData[]>([]);

  useEffect(() => {
    const fetchSales = async () => {
           const res = await fetch("/api/sales");
      const json = await res.json();
      setData(json);
    };

        fetchSales();
  }, []);

  return (
                  <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" />
             </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
