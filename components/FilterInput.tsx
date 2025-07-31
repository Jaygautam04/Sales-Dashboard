"use client";

import { useState } from "react";

export default function FilterInput({
  onChange,
}: {
  onChange: (value: number) => void;
}) {
         const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       const input = e.target.value;
    const cleaned = input.replace(/^0+(?=\d)/, ""); // Remove leading zeros
         setValue(cleaned);
    onChange(Number(cleaned));
  };

  return (
    <div className="flex flex-col space-y-1.5 w-60">
         <label htmlFor="threshold" className="text-sm font-medium text-gray-900">
        Threshold Value
      </label>
       <input
        id="threshold"
        placeholder="Enter threshold"
        type="number"
          value={value}
        onChange={handleChange}
          className="text-gray-900 font-semibold border border-gray-300 rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
