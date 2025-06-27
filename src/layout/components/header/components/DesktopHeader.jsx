import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";

function DesktopHeader() {
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  // const [searchItem, setSearchItem] = useState("");

  const toggleShopMenu = () => {
    setIsShopMenuOpen(!isShopMenuOpen);
  };

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
              <li className="relative flex items-center justify-around w-1/4 text-gray-600 w hover:text-gray-900">
                <Link to="/shop"     className="relative flex items-center justify-between  gap-5 text-black hover:text-gray-900 active:decoration-2-underline text-[13px] lg:text-[16px]">   
                 <span className="flex items-center gap-1">Shop
                  <img
                    src="/images/Icons/arrow-down.png"
                    alt=""
                    onClick={toggleShopMenu}
                    className={`object-contain h-[10px] cursor-pointer w-[10px] ${
                      isShopMenuOpen ? "rotate-180" : ""
                    } transition-transform duration-500`}
                  /></span> 
                  </Link>
              
                <div className="absolute flex items-center justify-center w-full h-20 top-10 ">
                  <ul
                    className={`overflow-hidden transition-all flex flex-col justify-start  h-full w-full duration-500 ${
                      isShopMenuOpen ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <li>
                      <Link to="#"
                        className="block text-black hover:text-gray-900"
                      >
                        Men
                      </Link >
                    </li>
                    <li>
                      <Link to="#"
                        className="block text-black hover:text-gray-900"
                      >
                        Women
                      </Link >
                    </li>
                    <li>
                        <Link to="#"
                        className="block text-black hover:text-gray-900"
                      >
                        Children
                      </Link >
                    </li>
                  </ul>
                </div>
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
