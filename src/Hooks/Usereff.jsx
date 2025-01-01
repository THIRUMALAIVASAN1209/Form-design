import React from 'react'
import { useState,useRef } from 'react'

function Usereff() {
  let [count,setCount] = useState(0);
  let countRef = useRef(0);

  let inc = ()=>{   
    //If we have to access Ref ,we use current
    // useState = re-Renders the component
    // useRef = does not re-Renders the component
    
    setCount(count+1);
    countRef.current++;

      console.log("State: ",count)
      console.log("Ref: ",countRef.current)
  }

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={inc}>Increment</button>
    </div>
  )

}

export default Usereff
