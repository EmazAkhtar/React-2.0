import React, { useCallback, useMemo, useState } from "react";

function Dummy() {
  console.log("counter rendered");
  const [number, setNumber] = useState(20);

  const handleClick = (e) => {
    e.stopPropagation();

    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    console.log(number);
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

export default Dummy;
