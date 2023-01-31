//video32
//React Hooks -useState Hook
//useState -To manage states. Returns a stateful value and an updater function to update it.

import { useState } from "react";

function Hooks() {
  const [name,setName] = useState("technical suneja");
    const[count,setCount]=useState("subscribers");

    
    const stateHandler=()=>{
        setName("Arjun Rajput")
        setCount("1000 subcribers")
    }

  return (
    <>
      <h1>{name} {count}</h1>
        <button onClick={stateHandler}>click me</button>
    </>
  );
}

export default Hooks;
