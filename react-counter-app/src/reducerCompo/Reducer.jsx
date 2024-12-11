import { useReducer } from "react";

// import React from 'react'

const Reducer = () => {
  const initialValue = 0;
  const[state, dispatch] = useReducer(reducer, initialValue);
  function reducer(state, action){
    switch(action){
      case "add":
        return state + 1;
      case "subtract" :
        return state - 1;
      case "reset":
        return 0;
      default:
        throw new Error("unexpected action");      
    }
  }
  return (
    <div>
      <h1>UseReducer Example</h1>
      <h1>Counter:{state}</h1>
      <button onClick={()=>dispatch("add")}>Increament</button>
      <button onClick={()=>dispatch("subtract")}>Decreament</button>
      <button onClick={()=>dispatch("reset")}>Reset</button>
    </div>
  )
}

export default Reducer