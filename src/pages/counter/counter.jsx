import { useEffect, useRef, useState, useReducer, useMemo } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "incrementBy10":
      return state + 10;
    case "decrementBy10":
      return state - 10;
    case "incrementValue":
      return state + action.payload;
    case "decrementValue":
      return state - action.payload;
    case "reset":
      return 0;
    default:
      return state;
  }
}

export default function Counter() {
  const [count, dispatch] = useReducer(counterReducer, 0);
  const [inputValue, setInputValue] = useState(0);

  const mypvalue = useRef("test");

  useEffect(() => {
    console.log(mypvalue.current);
  }, [mypvalue]);

  // Helper function to check if a number is prime
  const isPrimeNumber = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // Use useMemo to cache the result of our prime calculation
  // It will only recalculate when 'count' changes
  const isPrime = useMemo(() => {
    console.log("Calculating if prime..."); // To demonstrate when calculation occurs
    return isPrimeNumber(count);
  }, [count]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p ref={mypvalue}>test</p>
      <div ref={mypvalue} className="flex gap-4 ">
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <h1>{count}</h1>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
      </div>
      <div className="flex gap-4">
        <button onClick={() => dispatch({ type: "incrementBy10" })}>+10</button>

        <button onClick={() => dispatch({ type: "decrementBy10" })}>-10</button>

        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      <div className="flex gap-4">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border-2 border-gray-300 rounded-md"
        />
        <button
          onClick={() =>
            dispatch({ type: "incrementValue", payload: parseInt(inputValue) })
          }
        >
          +{inputValue}
        </button>
        <button
          onClick={() =>
            dispatch({ type: "decrementValue", payload: parseInt(inputValue) })
          }
        >
          -{inputValue}
        </button>
      </div>
      <div className="mt-4">
        <p className={isPrime ? "text-green-600" : "text-red-600"}>
          {count} is {isPrime ? "a prime number!" : "not a prime number."}
        </p>
      </div>
    </div>
  );
}
