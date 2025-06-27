import React from 'react';

export default function SearchBarResults({ searchResults }) {
  return (
    <div className="mt-4 w-full bg-white rounded-[20px] shadow-md p-4">
      <h2 className="text-lg font-bold mb-2">Search Results</h2>
      <ul className="flex flex-col gap-4">
        {searchResults.map((product) => (
          <li key={product.id} className="flex items-center gap-4 p-4 border-b border-gray-200">
            <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
            <div className="flex flex-col justify-center">
              <h3 className="text-md font-bold">{product.name}</h3>
              <p className="text-sm text-gray-600 line-through">${product.price.old}</p>
              <p className="text-sm font-bold text-red-600">${product.price.new}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

