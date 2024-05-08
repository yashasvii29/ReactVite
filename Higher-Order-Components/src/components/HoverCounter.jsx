import React, { useState } from 'react'
import WithCounter from './WithCounter';

const HoverCounter = (props) => {
    const {count,incrementCount}=props;
  return (
    <div>
        <button onMouseOver={incrementCount}>Hover me</button>
        <h2>Count is : {count}</h2>
    </div>
  )
}

export default WithCounter(HoverCounter,5);