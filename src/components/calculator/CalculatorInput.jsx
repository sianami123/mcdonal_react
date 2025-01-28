import React from "react";

export default function CalculatorInput({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-32 h-20 p-8 border-2 border-green-500 rounded-md text-center text-2xl bg-transparent focus:outline-none"
    />
  );
}
