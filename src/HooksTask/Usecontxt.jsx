import React from 'react'
import Hen from './Hen';
import { useContext,useState,createContext } from 'react';


export const TriggerContext= createContext();

function Usecontxt() {
  let [change,setChange] = useState(true);

  return (
      
    <div>
    <button onClick={()=>{
      setChange(!change)
    }}
    >Change</button> 

    <TriggerContext.Provider value={change}>
      <Hen></Hen>
    </TriggerContext.Provider>
    </div>

  )
}

export default Usecontxt
