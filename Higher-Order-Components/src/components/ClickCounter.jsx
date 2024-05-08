import React from 'react'
import WithCounter from './WithCounter';

const ClickCounter = (props) => {
    const {count, incrementCount} = props;
  return (
    <div>
        <button onClick={incrementCount}>Click me</button>
        <h2>Count is : {count}</h2>

    </div>
  )
}

export default WithCounter(ClickCounter,10);