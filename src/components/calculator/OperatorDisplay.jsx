import React from "react";

export default function OperatorDisplay({ currentOperator, hasResult }) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-12 h-12 border-2 border-orange-500 rounded-md flex items-center justify-center text-2xl">
        {currentOperator || (hasResult && "=")}
      </div>
    </div>
  );
}
