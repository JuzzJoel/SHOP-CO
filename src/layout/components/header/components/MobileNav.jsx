import React from 'react'
import { Link } from "react-router-dom";

function MobileNav({ isMobileMenuOpen, toggleMobileMenu, isShopMenuOpen, toggleShopMenu }) {
  return (
    <>
       <div
          className={`absolute left-0 bg-white h-screen font-secondary shadow-md gap-[5%] w-7/10 z-[100] top-0 md:hidden transition-transform duration-500 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="absolute flex flex-col items-center w-full h-full ">
            <div className="relative flex items-center justify-center w-full h-10 my-5 align-center">
              <Link to="/" className="w-full flex items-center justify-center h-full ">
                    <img
                src="/images/Icons/SHOP.CO.png"
                alt=""
                className="object-contain w-1/3 h-full"
              />
          </Link>
          
              <span
                className="absolute top-0 right-0 w-10 h-full ml-10 text-3xl border-gray-300 cursor-pointer border-1"
                onClick={toggleMobileMenu}
              >
                &times;
              </span>
            </div>
            <ul className="flex flex-col items-start gap-5 bg-white h-9/10 w-9/10">
              <li className="relative flex flex-col justify-between w-full h-auto min-h-fit">
                <a
                  href="#"
                  onClick={toggleShopMenu}
                  className="relative flex justify-between w-full gap-5 text-gray-600 hover:text-gray-900 active:decoration-2-underline"
                >
                  Shop
                  <img
                    src="/images/Icons/arrow-down.png"
                    alt=""
                    onClick={toggleShopMenu}
                    className={`object-contain h-[10px] cursor-pointer w-[15px] ${
                      isShopMenuOpen ? "rotate-180" : ""
                    } transition-transform duration-500`}
                  />
                </a>
                <div className="flex items-center justify-center w-full ml-5 ">
                  <ul
                    className={`overflow-hidden transition-all flex flex-col justify-start  w-full duration-500 ${
                      isShopMenuOpen ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <li>
                      <a
                        href="#"
                        className="block py-2 text-gray-600 hover:text-gray-900"
                      >
                        Men
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 text-gray-600 hover:text-gray-900"
                      >
                        Women
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 text-gray-600 hover:text-gray-900"
                      >
                        Children
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="#" className="text-gray-600 h-1/10 hover:text-gray-900">On Sale
                </Link>              </li>
              <li>
                <Link to="/#new-arrivals" className="text-gray-600 hover:text-gray-900">
                  New Arrival
                </Link>              </li>
              <li>
                <Link to="/#brands" className="text-gray-600 hover:text-gray-900">
                  Brands
                </Link>              </li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default MobileNav
