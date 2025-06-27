import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";

function DesktopHeader() {
  return (
    <header className="flex-row justify-center h-[96px] left-0 flex items-center w-scree h-top-50">
      <div className=" h-full border-b flex justify-center items-center max-w-[77.5rem] w-9/10 border-black/10">
        <div className="flex items-center w-full  h-[50px] justify-between ">
          <Link to="/">
               <img
                src="/images/Icons/SHOP.CO.png"
                alt="Logo"
            className="object-contain h-[22px] cursor-pointer w-[160px] mr-1"
          />
          </Link>
       
          <nav className="flex items-center justify-between h-full w-13/40">
            <ul className="flex items-center justify-between w-full h-full font-secondary">

<li className="relative group">
  <Link to="/shop" className="flex items-center gap-1 text-black hover:text-gray-900 text-[13px] lg:text-[16px]">
    Shop
    <img src="/images/Icons/arrow-down.png" alt="" className="object-contain h-[10px] cursor-pointer w-[10px] group-hover:rotate-180 transition-transform duration-500" />
  </Link>
  <ul className="absolute hidden group-hover:block bg-white shadow-md w-40 top-10">
    <li>
      <Link to="#" className="block px-4 py-2 text-black hover:text-gray-900 hover:bg-gray-100">
        Men
      </Link>
    </li>
    <li>
      <Link to="#" className="block px-4 py-2 text-black hover:text-gray-900 hover:bg-gray-100">
        Women
      </Link>
    </li>
    <li>
      <Link to="#" className="block px-4 py-2 text-black hover:text-gray-900 hover:bg-gray-100">
        Children
      </Link>
    </li>
  </ul>
</li>

<li>
                <Link to="#" className="w-1/4  text-black hover:text-gray-900 text-[13px] lg:text-[16px]">
                  On Sale
                </Link >
              </li>
              <li>
                <Link to="/#new-arrivals" className="w-1/4 text-black hover:text-gray-900 text-[13px] lg:text-[16px]">
                  New Arrivals
                </Link >
              </li>
              <li>
                <Link to="#" className="w-1/4 text-black hover:text-gray-900 text-[13px] lg:text-[16px]">
                  Brands
                </Link >
              </li>
            </ul>
          </nav>




          
          <div className="flex items-center justify-between w-55/100 ">
            
          <SearchBar/>

            <div className="flex items-center justify-between xl:justify-around w-4/30">
              <Link to="/cart">
                <img
                src="/images/Icons/cart.png"
                alt=""
                className="object-contain h-7 w-7 md:w-5 md:h-7"
              />
              </Link>
              
              <img
                src="/images/Icons/user.png"
                alt=""
                className="object-contain cursor-pointer h-7 w-7 md:w-5 md:h-7"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default DesktopHeader;
