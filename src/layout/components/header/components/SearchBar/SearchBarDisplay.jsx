import React from 'react';

export default function SearchBarDisplay({ searchItem, recentSearches, searchResults }) {
  return (
    <section className="mt-4 w-full bg-white rounded-[20px] shadow-md p-4">
      <h2 className="text-lg font-bold mb-2">Recent Senpnarches</h2>
      <ul>
        {recentSearches.map((search, index) => (
          <li key={index} className="py-2 border-b border-gray-200">
            <button className="text-sm text-gray-600" onClick={() => searchItem(search)}>
              {search}
            </button>
          </li>
        ))}
      </ul>
      {searchResults && (
        <p className="text-sm text-gray-600 mt-2">
          {searchResults.length} results found
        </p>
      )}
    </section>
  );
}
