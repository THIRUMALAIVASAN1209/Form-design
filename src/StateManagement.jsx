import { useState } from 'react';

function StateManagement() {
  let [name,setName] = useState("Thiru");
  let [data,setData] = useState(name);
  return (
    <div>
      <input type="text" onChange={(e)=>setName(e.target.value)}/>
      <button onClick={()=>{setData(name)}}>Change</button>
      <h1>Name:{data}</h1>
    </div>
  )
}

export default StateManagement
