//video32
//React Hooks -useState Hook
//useState -To manage states. Returns a stateful value and an updater function to update it.

import { useState } from "react";

function Hooks() {
  const channelName = useState("technical suneja");

    const name=channelName[0];
    const setName=channelName[1]

    
    const stateHandler=()=>{
        setName("Arjun Rajput")
    }

  return (
    <>
      <h1>{name}</h1>
        <button onClick={stateHandler}>click me</button>
    </>
  );
}

export default Hooks;
