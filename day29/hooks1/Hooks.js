//video32
//React Hooks -useState Hook
//useState -To manage states. Returns a stateful value and an updater function to update it.

import { useState } from "react";

function Hooks() {
  const channelName = useState("technical suneja");

 
    
    const stateHandler=()=>{
        channelName[1]("Arjun Rajput")
    }

  return (
    <>
      <h1>{channelName}</h1>
        <button onClick={stateHandler}>click me</button>
    </>
  );
}

export default Hooks;
