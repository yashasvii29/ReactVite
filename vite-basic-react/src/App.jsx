import React from 'react'
import Hello from "./Components/Hello";
import Homie from "./Components/Homie";
import Mapp from "./Components/Mapp";
import Perso from "./Components/Perso";

const App = () => {
  return (
    <div>
      <Homie name="yashasvi" age="20" favColor="violet" />

      {/* <Homie name="vikas" age="69" favColor="orange" /> */}
    </div>
  );
}

export default App