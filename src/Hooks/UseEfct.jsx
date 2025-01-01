import React from 'react'

function UseEfct() 
{
  let [count,setCount] = useState(0);

  useEffect(()=>{
    alert("Value Updated")
    return(()=>{
      console.log("Code cleanup")
    })
  },[count])

  return (
    <>
    <h1>Count: {count}</h1>
  <button onClick={(e)=>setCount(count+1)}>Increment</button>
  <button onClick={(e)=>setCount(count-1)}>Decrement</button>
  <button onClick={(e)=>setCount(count-count)}>Clear</button>
  </>
  )
}

export default UseEfct
