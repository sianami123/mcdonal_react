import React from "react";

export default function CalculatorButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="p-6 border-2 border-orange-500 rounded-md hover:bg-orange-500/20 transition-colors text-2xl"
    >
      {children}
    </button>
  );
}
