import React, { useState } from 'react'
import { useEffect } from 'react'


const Timer = () => {
  let [time, setTime] = useState(0);

  useEffect(
    function () {
      let id = setInterval(function () {
        setTime(time + 1);
      }, 1000);

      return () => {
        clearInterval(id);
      };
    },
    [time]
  );

  return <div>Time:{time} </div>;
}

export default Timer