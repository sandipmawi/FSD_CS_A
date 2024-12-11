import { useReducer } from "react";

// import React from 'react'

const Reducer = () => {
  const initialValue = {name: 'ABC',age: 25};
  const[state, dispatch] = useReducer(reducer, initialValue);
  function reducer(state, action){
    switch(action.type){
      case "updateName":
        return {...state,name:'XYZ'};
      case "updateAge" :
        return {...state, age:state.age+1};
      case "reset":
        return {name: 'ABC', age:25};
      default:
        throw new Error("unexpected action");      
    }
  }
  return (
    <div>
      <h1>UseReducer Example</h1>
      <h1>name:{state.name}</h1>
      <h1>Age:{state.age}</h1>
      <button onClick={()=>dispatch({type:"updateName"})}>UpdateName</button>
      <button onClick={()=>dispatch({type:"updateAge"})}>updateAge</button>
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}

export default Reducer