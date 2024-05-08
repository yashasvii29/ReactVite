import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Components/Home';
import Admin from './Components/Admin';
import { Suspense } from 'react';
// import Products  from './Components/Products';
const Products = React.lazy(()=> import("./Components/Products"))

const App = () => {
  return (
    <div>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin/>}  / >
      {/* <Route path="/products" element={<Products/>}  / > */}
      <Route path="/products" element={
        <Suspense fallback="loading...1">
          <Products/>
        </Suspense>
      }  / >

    </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App