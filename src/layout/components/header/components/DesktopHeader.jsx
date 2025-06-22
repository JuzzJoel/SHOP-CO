import { useState } from "react";
import { Link } from "react-router-dom";

function DesktopHeader() {
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  const toggleShopMenu = () => {
    setIsShopMenuOpen(!isShopMenuOpen);
  };

  return (
    <header className="flex-row justify-center h-[96px] left-0 flex items-center w-screen bg-white  h-top-50">
      <div className=" h-full border-b flex items-center max-w-[77.5rem] w-9/10 border-black/10">
        <div className="flex items-center w-full  h-[50px] justify-between ">
          <Link to="/">
               <img
            src="/src/assets/Images/icons/SHOP.CO.png"
            alt="Logo"
            className="object-contain h-[22px] cursor-pointer w-[160px] mr-1"
          />
          </Link>
       
          <nav className="flex items-center justify-between h-full w-13/40">
            <ul className="flex items-center justify-between w-full h-full font-secondary">
              <li className="relative flex items-center justify-around w-1/4 text-gray-600 w hover:text-gray-900">
                <Link to="/product"     className="relative flex items-center justify-between  gap-5 text-black hover:text-gray-900 active:decoration-2-underline text-[13px] lg:text-[16px]">   
                 <span className="flex items-center gap-1">Shop
                  <img
                    src="/src/assets/Images/Icons/arrow-down.png"
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
                      <a
                        href="#"
                        className="block text-black hover:text-gray-900"
                      >
                        Men
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block text-black hover:text-gray-900"
                      >
                        Women
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block text-black hover:text-gray-900"
                      >
                        Children
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#" className="w-1/4  text-black hover:text-gray-900 text-[13px] lg:text-[16px]">
                  On Sale
                </a>
              </li>
              <li>
                <a href="#" className="w-1/4 text-black hover:text-gray-900 text-[13px] lg:text-[16px]">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="w-1/4 text-black hover:text-gray-900 text-[13px] lg:text-[16px]">
                  Brands
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex  items-center justify-between w-55/100 ">
            <div className="relative flex  items-center justify-center h-full ml-1 rounded-full w-17/20 ">
              <input
                type="text"
                className="w-full h-full px-2 py-4 text-black border-none rounded-full indent-[50px] bg-black/10 focus:outline-none md:h-[8/10]"
                placeholder="        Search for products..."
                // value={searchItem}
              />
              <img
                src="/src/assets/Images/icons/search-lg.png"
                alt=""
                className="absolute top-[50%] left-10 translate-y-[-50%]"
              />
            </div>
            <div className="flex items-center justify-between xl:justify-around w-4/30">
              <Link to="/cart">
                <img
                src="/src/assets/Images/Icons/cart.png"
                alt=""
                className="object-contain h-7 w-7  md:w-5 md:h-7"
              />
              </Link>
              
              <img
                src="/src/assets/Images/Icons/user.png"
                alt=""
                className="object-contain h-7 w-7 cursor-pointer  md:w-5 md:h-7"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default DesktopHeader;
