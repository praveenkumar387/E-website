import React from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center  from-amber-100 via-white body">
      
      {/* Card */}
      <div className="bg-white/70 backdrop-blur-md shadow-xl rounded-3xl p-8 w-full max-w-sm text-center">
        
        {/* Image */}
        <img
          className="w-78 pl-15 mx-auto mb-6"
          src="/images/login1.png"
          alt="login"
        />

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <button
  className="bg-btn hover:bg-amber-600 transition py-3 rounded-3xl text-white font-semibold"
  onClick={() => navigate("/Sign")}
>
  Sign In
</button>


          <button
            className="border  text-amber-600 hover: bg-btn bg-btn hover:text-white transition py-3 rounded-3xl font-semibold"
            onClick={() => navigate("/createnewac")}
          >
            Create New Account
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Login */}
        <div>
          <p className="text-gray-600 mb-3">Sign up using</p>
          <div className="flex justify-center gap-4">
            <div className="p-3 rounded-full bg-white shadow hover:scale-110 transition cursor-pointer">
              <a href="https://www.google.com/"><FaGoogle className="text-red-500" size={18} /></a>
            </div>
            <div className="p-3 rounded-full bg-white shadow hover:scale-110 transition cursor-pointer">
              <FaFacebookF className="text-blue-600" size={18} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
