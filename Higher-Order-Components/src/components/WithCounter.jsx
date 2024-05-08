import React from 'react';
import {useState} from 'react';

// withCounter is higher order component which takes a component as an argument and return a new Enhanced component
// old component is ClickCounter component and HoverComponent
const WithCounter = (OldComponent,incrementBy) => {
  return function EnhancedComponent (props){
    const [count,setCount]=useState(0);
    return(
        <OldComponent {...props} count={count} incrementCount={()=>{setCount(count+incrementBy)}}/>
    )

  }
}

export default WithCounter;