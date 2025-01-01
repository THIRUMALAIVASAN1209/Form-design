import React from 'react';
import { useContext } from 'react'
import { TriggerContext } from './Usecontxt'

function Stomach() {
  const changes = useContext(TriggerContext);
  return(
    <div>
      <h1 style={{width:"120px",backgroundColor:changes?"white":"black",color:changes?"black":"white"}}>
      Stomach</h1>
    </div>
  )
  
  
}

export default Stomach
