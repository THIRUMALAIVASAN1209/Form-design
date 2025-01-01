import React, { createContext } from 'react'
import { useState,useEffect,useRef,useContext } from 'react'


export let nameContext = createContext();

function useContxt() {
  return (
    <nameContext.Provider value="Food">
      
    </nameContext.Provider>
  )
}

export default useContxt
