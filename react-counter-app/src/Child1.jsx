import React from 'react'
import { useContext } from 'react'
import { studentContext } from './Context'


const Child1 = () => {
const {name, age} = useContext(studentContext);
  return (
     <div>
        <h1>Student:{name}</h1>
        <h3>Age:{age}</h3>
     </div>
  )
}

export default Child1