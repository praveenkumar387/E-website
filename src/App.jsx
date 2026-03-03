import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Routes/Home'
import Nav from './Navbar/Nav'
import Login from './Routes/Login'
import Sign from './Routes/Sign'
import Createnewac from './Routes/Createnewac'
import Cart from './Routes/Cart'

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
         <Route path='/' element={<Login/>} />
         <Route path='/Sign' element={<Sign/>}/>
         <Route path='/createnewac' element={<Createnewac/>} />
         <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
