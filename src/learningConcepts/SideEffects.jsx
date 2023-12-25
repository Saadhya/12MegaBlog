import  { useState } from "react";
import User from "./User";

const SideEffects = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>SideEffects</h2>
      <h4> counter: {counter}</h4>
      <button
        type="button"
        onClick={() => setCounter(counter + 1)}
        className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        add count
      </button>
      <User counter={counter}/>
    </div>
  );
};

export default SideEffects;
