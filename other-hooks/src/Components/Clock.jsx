import React from 'react'
import {useState,useEffect} from 'react';

const Clock = () => {
    const [clockState, setClockState] = useState(0);

    useEffect(function(){
        let Id=setInterval(()=>{
            setClockState(clockState+1);
        },1000)

        return ()=>{
            clearTimeout(Id);
        }
    },[clockState])

    // cleanup function run between two rendering
   
    // useref m rerendering nhi hoti but usestate m htoi hai 
    // useREf can hold the state and useState can't
    // useref can manipulate the dom
    // useref and usestate both can do the state management
    // custom hooks always satrt with use and we can use customHooks inside the prebuilt hooks
    // in functional components we see the lifecycle with the useEffect hook
    // in lifecycle....component did mount
    // component did update
    // component will unmount
       

        
    
    
  return (
    <div>
        <div>Time:{clockState}</div>
    </div>
  )
}

export default Clock