import React from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center gap-6">
      
      {/* Image */}
      <img
        className="w-134 pl-35"
        src="/images/login1.png"
        alt="login"
      />

      {/* Buttons */}
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <button className="bg-amber-500 py-3 rounded-3xl text-white font-semibold">
          Sign In
        </button>
        <button className="bg-amber-500 py-3 rounded-3xl text-white font-semibold">
          Create New Account
        </button>
      </div>

      {/* Social Login */}
      <div className="text-center">
        <h1 className="text-gray-600 mb-2">Sign up using</h1>
        <div className="flex justify-center gap-4">
          <FaGoogle
            size={20}
            className="text-red-500 cursor-pointer hover:scale-110 transition"
          />
          <FaFacebookF
            size={20}
            className="text-blue-600 cursor-pointer hover:scale-110 transition"
          />
        </div>
      </div>

    </div>
  );
};

export default Login;
