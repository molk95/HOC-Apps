import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <h1>Count : {count} </h1>
      <button className="btn" onClick={() => setCount(initialCount)}>
        Reset
      </button>
      <button
        className="btn"
        onClick={() => setCount(prevCount => prevCount + 1)}
      >
        Increment
      </button>
      <button
        className="btn"
        onClick={() => setCount(prevCount => prevCount - 1)}
      >
        Decrement
      </button>
    </div>
  );
}

export default HookCounterTwo;
