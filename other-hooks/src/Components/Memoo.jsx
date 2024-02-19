import React, { useState , useMemo } from 'react'

const Memoo = () => {

    let [count,setCount] = useState(0);

    let [inp,setInput] = useState(0);
    function handleChange(e){
        setInput(e.target.value);
        console.log(inp);
    }
    let memoAns =  useMemo(function(){
        let ans =0;
    for(let i=1;i<=inp;i++){
        console.log("hi");
        ans+=i;
    }
    return ans;
    },[inp])
   
  return (
    <div>
        {/* <h1>Counter - {count}</h1> */}
        {/* <input onChange={handleChange} type='number' id='' value={inp}/> */}
        <button onClick={()=>{
            setCount(count+1);
        }}>Click - {count}</button>
        <input onChange={handleChange} type="text" name="" id="" value={inp} />
        <h1>Sum:{memoAns}</h1>
        {/* <h2></h2> */}
    </div>
  )
}

export default Memoo 