import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(15);
  const addValue = () => {

    // each line will inc value
    // setCounter((prev) => prev + 1);
    // setCounter((prev) => prev + 1);
    // setCounter((prev) => prev + 1);

    // using fiber=virtual dom in react back - it will inc value only once
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
  };
  return (
    <div>
      <h2 className="text-lg font-bold">Counter</h2>
      <h4 className="mb-4">Counts: {counter}</h4>
      <button
        type="button"
        onClick={addValue}
        className="rounded-full mb-4 bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Add value
      </button>

      <button
        type="button"
        onClick={() => setCounter(counter - 1)}
        className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Remove value
      </button>
    </div>
  );
}
