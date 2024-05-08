import React from 'react'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import WithCounter from './components/WithCounter'

const App = () => {
  return (
    <div>
      <ClickCounter/>
      <HoverCounter/>
      {/* <WithCounter/> */}
    </div>
  )
}

export default App