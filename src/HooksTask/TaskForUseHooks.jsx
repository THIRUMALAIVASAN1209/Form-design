import React from 'react'
import { useState,useRef } from 'react';

function TaskForUseHooks() {

    let [name,setName] = useState(" ");   

  let change = ()=>{
    console.log("You have typed :",name);
  }

  return (
    <>
    <input placeholder='Enter a letter' type="text" onChange={(e)=>setName(e.target.value)}/>
    <button onClick={change}>Add</button>
    <h1>Word: {name}</h1>
    </>
  )
  
}

export default TaskForUseHooks
