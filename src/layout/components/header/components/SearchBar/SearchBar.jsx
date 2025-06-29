import React, { useState } from 'react';
import SearchBarDisplay from './SearchBarDisplay';
import SearchBarResults from './SearchBarResults';
import productList from './../../../../../data/randomized_products.json';

function SearchBar() {
  const [searchItem, setSearchItem] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
    if (Array.isArray(productList.products)) {
      const filteredResults = productList.products.filter((product) =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else if (Array.isArray(productList)) {
      const filteredResults = productList.filter((product) =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      console.error('productList is not an array');
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 200);
  };

  return (
    <div className="relative flex items-center justify-center h-full ml-1 rounded-full w-17/20">
      <input
        type="text"
        className="w-full h-full px-2 py-4 text-black border-none rounded-full indent-[50px] bg-black/10 focus:outline-none md:h-[8/10]"
        placeholder="   Search for products..."
        onChange={handleSearch}
        value={searchItem}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <img src="/images/Icons/search-lg.png" alt="" className="absolute w-5 h-5 left-10" />
{isFocused && (
  <>
    {searchItem ? (
      <SearchBarResults searchResults={searchResults} />
    ) : (
      <SearchBarDisplay searchItem={searchItem} recentSearches={recentSearches} searchResults={searchResults} />
    )}
  </>
)}

    </div>
  );
}

export default SearchBar;
