//video35
//useState with object
//problem is when you write on firstName ,last name will go blank  , so to avoid this problem we used es6 method spread operator.solution setName({...name,firstName:e.target.name)
import React,{useState} from 'react';

const Hooks = () => {

const [name,setName]=useState({firstName:"",lastName:""})

    return (
        <div>
        <h1>type here</h1>
    <form>
        <input type="text" value={name.firstName} onChange={e=>{setName({...name,firstName:e.target.value})}}/>
        <input type="text" value={name.lastName} onChange={e=>{setName({...name,lastName:e.target.value})}}/>
    </form>
{name.firstName}
{name.lastName}

        </div>
    );
};



export default Hooks;