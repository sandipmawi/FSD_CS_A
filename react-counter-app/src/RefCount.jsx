import React from 'react'
import { useRef } from 'react'


const RefCount = () => {
    let a = 5

    const Refcount = useRef(0);
    console.log("object rendered");
    function handleref(){
        Refcount.current++;
        console.log('refcount=',Refcount.current);
        if(Refcount.current == a){
            alert("counter=",+Refcount.current);
        }
    }


  return (
    <div>
        <h1>Refcount={Refcount.current}</h1>
        <button onClick={handleref}>Increament</button>
        <p>{a}</p>
    </div>
    
  )
}

export default RefCount