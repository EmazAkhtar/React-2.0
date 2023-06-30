import React, { useCallback, useMemo, useState } from "react";
import { flushSync } from "react-dom";

function Counter() {
  console.log("counter rendered");
  const [number, setNumber] = useState(1);

  const handleClick = (e) => {
    e.stopPropagation();

    // high priority pehle kardo
    flushSync(() => {
      setNumber((number) => number + 1);
      setNumber((number) => number + 1);
      setNumber((number) => number + 1);
    });

    // state change krke ui me reflect krke control wapas yahin pe aata hai
    // setNumber((number) => number + 1);
    // setNumber((number) => number + 1);
    // setNumber((number) => number + 1);
    console.log(number);
    window.print();
  };

  // hooks ki khaas baat yahi hai ab wapas se ye function declare nahi hoga jab bhi ye line of code pe ayega to qki useCallback ne definition kahin bahar store karke rakh li hai ab wo wahin se uthake layega...
  const fibFx = useCallback(function fib(n) {
    if (n === 0 || n === 1) {
      return n;
    }
    return fib(n - 1) + fib(n - 2);
  }, []);

  const fibMemoized = useMemo(() => fibFx(number), [number, fibFx]);
  return (
    <div>
      <h1 style={{ color: "white" }}>
        {number} | {fibMemoized}
      </h1>
      <button onClick={handleClick}>Counter</button>
    </div>
  );
}

export default Counter;
