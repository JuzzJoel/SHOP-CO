import { useState } from "react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

import MobileSearchBar from './Mobile SearchBar/MobileSearchBar';

function MobileHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleShopMenu = () => {
    setIsShopMenuOpen(!isShopMenuOpen);
  };

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="h-[65px] w-[91%] flex items-center justify-center border-b-1 border-black/10">
      {/* Mobile layout */}
      <div className="relative h-[24px] flex items-center justify-center w-full md:hidden">
        <button className="absolute top-0 left-0 h-full text-gray-600 cursor-pointer hover:text-gray-900 w-1/10" onClick={toggleMobileMenu}>
          <img src="images/Icons/hamburger.png" alt="" className="" />
        </button>
        <Link to="/" className="flex items-center justify-center w-full">
          <img src="/images/Icons/SHOP.CO.png" alt="" className="absolute cursor-pointer left-[10%]" />
        </Link>
        <div className="absolute right-0 flex items-center justify-between w-1/4">
          <img src="/images/Icons/search.png" alt="" className="cursor-pointer" onClick={handleSearchIconClick} />
          <Link to="/cart">
            <img src="/images/Icons/cart.png" alt="" className="cursor-pointer" />
          </Link>
          <img src="/images/Icons/user.png" alt="" className="cursor-pointer" />
        </div>
      </div>
      {isSearchOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-white p-4">
        <MobileSearchBar />

        </div>
      )}
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <MobileNav isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} isShopMenuOpen={isShopMenuOpen} toggleShopMenu={toggleShopMenu} />
      )}
    </header>
  );
}

export default MobileHeader;
