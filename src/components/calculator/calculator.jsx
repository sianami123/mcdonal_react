import React, { useState } from "react";
import CalculatorInput from "./CalculatorInput";
import OperatorDisplay from "./OperatorDisplay";
import CalculatorButton from "./CalculatorButton";
import {
  validateInputs,
  getOperatorSymbol,
  calculateResult,
} from "./calculatorUtils";
import { FaPlus, FaMinus, FaTimes, FaDivide, FaEquals } from "react-icons/fa";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [currentOperator, setCurrentOperator] = useState("");

  function calculate(operation) {
    if (!validateInputs(num1, num2, setError)) return;

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    const operatorSymbol = getOperatorSymbol(operation);
    setCurrentOperator(operatorSymbol);

    const calculatedResult = calculateResult(
      operation,
      number1,
      number2,
      setError
    );
    if (calculatedResult === null) return;

    setResult(calculatedResult);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center justify-center gap-4 mb-6">
        <CalculatorInput
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="first number"
        />

        <OperatorDisplay
          currentOperator={currentOperator}
          hasResult={result !== ""}
        />

        <CalculatorInput
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="second number"
        />

        <div className="flex items-center justify-center text-2xl">
          <FaEquals />
        </div>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        {result !== "" && (
          <div className="w-32 h-20 border-2 border-blue-500 rounded-md flex items-center justify-center text-2xl">
            {result}
          </div>
        )}
      </div>

      <div className="flex gap-4">
        <CalculatorButton onClick={() => calculate("add")}>
          <FaPlus />
        </CalculatorButton>
        <CalculatorButton onClick={() => calculate("subtract")}>
          <FaMinus />
        </CalculatorButton>
        <CalculatorButton onClick={() => calculate("multiply")}>
          <FaTimes />
        </CalculatorButton>
        <CalculatorButton onClick={() => calculate("divide")}>
          <FaDivide />
        </CalculatorButton>
      </div>
    </div>
  );
}
