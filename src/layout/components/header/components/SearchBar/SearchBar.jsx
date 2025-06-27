import React from 'react'
import { useState } from "react";
import SearchBarDisplay from './SearchBarDisplay';


function SearchBar() {
    const [searchItem, setSearchItem] = useState("");

  return (
    <>
         <div className="relative flex items-center justify-center h-full ml-1 rounded-full w-17/20 ">
              <input
                type="text"
                className="w-full h-full px-2 py-4 text-black border-none rounded-full indent-[50px] bg-black/10 focus:outline-none md:h-[8/10]"
                placeholder="        Search for products..."
                onChange={(e) => setSearchItem(e.target.value)} value={searchItem}
              />
              <img
                src="/images/Icons/search-lg.png"
                alt=""
                className="absolute w-5 h-5 left-10"
              />
              <SearchBarDisplay searchItem={searchItem} />
            </div>
    </>
  )
}

export default SearchBar
