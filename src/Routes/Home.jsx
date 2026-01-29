import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-yellow-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-xl font-bold">MyBrand</div>

        {/* Hamburger button for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          ><CiMenuBurger />
          </button>
        </div>

        {/* Menu items */}
        <ul
          className={`md:flex md:gap-6 absolute md:static bg-yellow-400 w-full md:w-auto left-0 md:left-auto top-14 md:top-auto transition-all ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <li className="p-2 text-black hover:text-white cursor-pointer">HOME</li>
          <li className="p-2 text-black hover:text-white cursor-pointer">PRODUCT</li>
          <li className="p-2 text-black hover:text-white cursor-pointer">ABOUT</li>
        </ul>
      </div>
    </nav>
  );
};

export default Home;
