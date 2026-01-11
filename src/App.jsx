import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Routes/Home'
import About from './Routes/About'
import Contact from './Routes/Contact'
import Nav from './Navbar/Nav'
import Login from './Routes/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
         <Route path='/' element={<Login/>} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path='/' element={<Login/>} /> */}
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
