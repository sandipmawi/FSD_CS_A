import React from 'react'
import { createContext } from 'react';
import Child1 from './Child1';
const studentContext = createContext();

const Context = () => {
    
    const student ={
        name:'XYZ',
        age: 21,
    }
  return (
    <div>
        <studentContext.Provider value={student}>
            
         <Child1 />
        </studentContext.Provider>
    </div>
   
  )
}

export default Context
export { studentContext }