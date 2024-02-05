import React from 'react'
import Animal from './Components/Animal'
import Yashu from './Components/Yashu'

const App = () => {

   // let a = true;
  // let b = false;
  let c = null;
  let d = undefined;

  return (
    <div>
      <Animal />
      <Yashu />
      {/* <h1>heello h1 {2 + 3}</h1> */}
      {/* <p> {JSON.stringify(a)} </p>
      <p> {JSON.stringify(b)}</p> */}
      {/* {JSON.stringify(d)} */}
    </div>
  );
}

export default App