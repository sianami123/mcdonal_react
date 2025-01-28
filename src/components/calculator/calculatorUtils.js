export const validateInputs = (num1, num2, setError) => {
  if (num1 === "" || num2 === "") {
    setError("Please enter both numbers");
    return false;
  }
  if (isNaN(num1) || isNaN(num2)) {
    setError("Please enter only numbers");
    return false;
  }
  setError("");
  return true;
};

export const getOperatorSymbol = (operation) => {
  return operation === "add"
    ? "+"
    : operation === "subtract"
    ? "-"
    : operation === "multiply"
    ? "×"
    : "÷";
};

export const calculateResult = (operation, number1, number2, setError) => {
  switch (operation) {
    case "add":
      return number1 + number2;
    case "subtract":
      return number1 - number2;
    case "multiply":
      return number1 * number2;
    case "divide":
      if (number2 === 0) {
        setError("Divide to zero is not possible");
        return null;
      }
      return number1 / number2;
    default:
      return null;
  }
};
