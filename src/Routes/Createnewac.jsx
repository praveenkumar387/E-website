import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Createnewac = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  function handleonchange(e) {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  }

  function handlesubmit(e) {
    e.preventDefault();

    if (
      !value.name ||
      !value.email ||
      !value.password ||
      !value.confirmpassword
    ) {
      alert("All fields are required");
      return;
    }

    if (value.password !== value.confirmpassword) {
      alert("Password not matched");
      return;
    }

    alert("Account created successfully");
    navigate("/Home");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFE88A]">
      <div className="w-[380px] bg-[#FFF7D6] rounded-3xl p-8 shadow-xl">
        
        <form onSubmit={handlesubmit} className="flex flex-col gap-3">

          <input
            type="text"
            placeholder="Name"
            name="name"
            value={value.name}
            onChange={handleonchange}
            className="border-2 border-yellow-300 rounded-lg p-2 focus:outline-none focus:border-orange-400"
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={value.email}
            onChange={handleonchange}
            className="border-2 border-yellow-300 rounded-lg p-2 focus:outline-none focus:border-orange-400"
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={value.password}
            onChange={handleonchange}
            className="border-2 border-yellow-300 rounded-lg p-2 focus:outline-none focus:border-orange-400"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmpassword"
            value={value.confirmpassword}
            onChange={handleonchange}
            className="border-2 border-yellow-300 rounded-lg p-2 focus:outline-none focus:border-orange-400"
          />

          <button
            type="submit"
            className="mt-4 bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-orange-400 transition"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};

export default Createnewac;
