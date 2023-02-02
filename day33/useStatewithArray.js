//video35
//useState with Array

import React, { useState } from "react";

const Hooks = () => {
    
const [genrate,setGenerate]=useState([])


const randomGenerator=()=>{
setGenerate([...genrate,{
  id:genrate.length,
  value:Math.floor(Math.random()*10)}])

}
    return (
    <div>
   <ul>
    {genrate.map((elem)=>{
      return <li>{elem.value}</li>
    })}
   </ul>
      <button onClick={randomGenerator}>Random Number</button>
    </div>
 
 );
};

export default Hooks;

