import React, { useState, useEffect } from "react";

export const HookCounterOne = () => {
  const [Counter, setCounter] = useState(0);
  const [name, setname] = useState("")
  useEffect(() => {
    document.title = `Clicked ${Counter} times`;
  }, [Counter]);
  return (
    <div>
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)} />
      <button onClick={() => setCounter(Counter + 1)}>
        Click {Counter} times
      </button>
    </div>
  );
};
