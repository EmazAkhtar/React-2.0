import React, { useState } from "react";

function Counter() {
  console.log("counter rendered");
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    e.stopPropagation();

    // setTimeout(() => {
    //   setCount((count) => {
    //     return count + 1;
    //   });
    // }, 2000);
    setCount((count) => {
      return count + 1;
    });
    setCount((count) => {
      return count + 1;
    });
    setCount((count) => {
      return count + 1;
    });
    console.log(count);
  };
  return (
    <div>
      <h1 style={{ color: "white" }}>{count}</h1>
      <button onClick={handleClick}>Counter</button>
    </div>
  );
}

export default Counter;
