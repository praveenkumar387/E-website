import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { setSearch } from "./redux/searchSlice";
import { CiMenuBurger } from "react-icons/ci";
import Product from './Product';
import About from './About';
import { setSearch } from '../redux/slice';
import { CiShoppingCart } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()

  const search = useSelector((state) => state.search.value);

  const navigate = useNavigate()

  return (
    <>
    
    <nav className="bg-yellow-400 p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-xl font-bold">MyBrand</div>
        <div  className="">
        
          <input
  className="border-b-2 border-yellow-700 outline-none px-4 py-2 w-full"
  type="search"
  placeholder="Search..."
  value={search}
  onChange={(e) => dispatch(setSearch(e.target.value))}
/>


        </div>

        
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
          className={`md:flex mt-0 md:gap-6 absolute md:static bg-yellow-400 w-full md:w-auto left-0 md:left-auto top-14 md:top-auto transition-all ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <button onClick={()=>navigate('/cart')} ><CiShoppingCart /></button>
          <li className="p-2 text-black hover:text-white cursor-pointer">HOME</li>
          <li className="p-2 text-black hover:text-white cursor-pointer"><a href="#product">product</a></li>
          <li className="p-2 text-black hover:text-white cursor-pointer"><a href="#About">About</a></li>
          
        </ul>
      </div>
    </nav>
    <div className="w-full flex flex-col-reverse md:flex-row items-center gap-8 px-4 py-10 m-10">

  {/* LEFT – Text Section */}
  <div className="w-full md:w-1/2 text-center md:text-left">
    <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3">
      e-website
    </h1>

    <p className="text-sm md:text-base text-gray-600 leading-relaxed line-clamp-2 mb-6">
      This is a 100% good product made with high quality materials and designed
      for long-term daily usage with reliable performance.
    </p>

    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2.5 rounded-lg font-medium shadow">
        Sign Up
      </button>

      <button className="border border-gray-300 hover:bg-gray-100 px-6 py-2.5 rounded-lg font-medium">
        Learn More
      </button>
    </div>
  </div>

  {/* RIGHT – Image Section */}
  <div className="w-full md:w-1/2 flex justify-center md:justify-end">
    <img
      src="/images/stabery.png"
      alt="homeimage"
      className="w-104 md:w-106 h-auto"
    />
  </div>

</div>
<Product/>
<About/>


    </>
  );
};

export default Home;
