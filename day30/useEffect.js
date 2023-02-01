//video33
//To manage side-effects like API calls, subscriptions, timers, mutations, and more.

import { useState, useEffect } from "react";

function Hooks() {
  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(2);

  const btnHandler = () => {
    setCount(count + 1);
  };

  const btnHandler1 = () => {
    setCount1(count1 + 1);
  };


  useEffect(()=>{
    console.log("useEffect hooks")
  },[count1])
  return (
    <div>
      <h1>{count}</h1>
      <h1>count1 :{count1}</h1>

      <button onClick={btnHandler}>Click</button>
      <button onClick={btnHandler1}>Click</button>
   
    </div>
  );
}

export default Hooks;
