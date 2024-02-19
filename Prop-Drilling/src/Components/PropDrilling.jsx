import React from 'react'
import { useState } from 'react'

const PropDrilling = () => {
    let [count,setCount] = useState(0);
  return (
    <div>
        <Counting count={count}/>
        
    </div>
  )
}
function Counting({count,setCount}){
    return(
        <div>
            <h1>Count - {count}</h1>
            <Buttons count={count} setCount={setCount}/>
        </div>
    )
}

function Buttons({count,setCount}){
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>inc</button>
            <button onClick={()=>setCount(count-1)}>dec</button>
        </div>
    )
}

export default PropDrilling