import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const Sign = () => {
  const navigate = useNavigate()

  

  const [input,setinput]=useState({
    email:"@gmail.com",
    password:""
  })
  const [error,seterror]=useState("")
  const handlechange=(e)=>{
    const {name,value}=e.target;
    setinput({
      ...input,[name]:value

    })
  }
  function onsumbit(e) {
  e.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(input.email)) {
    Swal.fire({
      title: "Invalid Email",
      text: "Enter a valid email address",
      icon: "error"
    });
    return;
  }

  if (input.password.length < 6) {
    Swal.fire({
      title: "Weak Password",
      text: "Password must be at least 6 characters",
      icon: "error"
    });
    return;
  }

  Swal.fire({
    title: "LOGIN SUCCESSFUL",
    icon: "success"
  }).then(() => {
    navigate("/home");
  });
}



  return (
    <div className='flex justify-center items-center min-h-screen w-full bg-gradient-to-br body to-white ' >
      <div className="min-h-screen flex justify-center items-center ">
  <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg p-8">
    
    {/* Title */}
    <h1 className="text-3xl font-bold text-center text-black mb-6">
      LOGIN YOUR ACCOUNT
    </h1>

    {/* Form */}
    <form onSubmit={onsumbit} className="flex flex-col gap-4">

      {/* Email */}
      <TextField
        fullWidth
        id="email"
        label="Email or phone"
        variant="outlined"
        name="email"
        value={input.email}
        onChange={handlechange}
      />

      {/* Password */}
      <TextField
        fullWidth
        id="password"
        type="password"
        label="Password"
        variant="outlined"
        name="password"
        value={input.password}
        onChange={handlechange}
      />

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Submit Button */}
      <Button
        variant="contained"
        type="submit"
        className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-xl transition"
      >
        LOGIN
      </Button>

    </form>
  </div>
</div>
</div>
  )
}

export default Sign