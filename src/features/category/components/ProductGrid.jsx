import { section } from 'framer-motion/client';
import React, { useState, useEffect } from 'react';

function ProductGrid({idCategory}) {
  const [products, setProducts] = useState([
    { name: 'Gradient Graphic T-Shirt', price: 145, originalPrice: 242, rating: 3.5, category: 'T-Shirts', size: 'Large' },
    { name: 'Polo with Tipping Details', price: 180, originalPrice: 242, rating: 4.5, category: 'Shirts', size: 'Medium' },
    { name: 'Black Striped T-Shirt', price: 120, originalPrice: 150, rating: 5.0, category: 'T-Shirts', size: 'X-Large' },
    { name: 'Skinny Fit Jeans', price: 240, originalPrice: 260, rating: 3.5, category: 'Jeans', size: 'Large' },
    { name: 'Checkered Shirt', price: 180, rating: 4.5, category: 'Shirts', size: 'Medium' },
    { name: 'Sleeve Striped T-Shirt', price: 130, originalPrice: 160, rating: 4.5, category: 'T-Shirts', size: 'X-Large' },
  ]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({ category: '', priceRange: 200, selectedColors: [], size: '', dressStyle: '' });

  useEffect(() => {
    let updatedProducts = products.filter((product) => {
      const priceCheck = product.price <= filters.priceRange;
      const categoryCheck = !filters.category || product.category === filters.category;
      const sizeCheck = !filters.size || product.size === filters.size;
      return priceCheck && categoryCheck && sizeCheck;
    });
    setFilteredProducts(updatedProducts);
  }, [filters, products]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };
  return (
    <section  id={casual} className="py-10 bg-gray-100"> 
    
    <div className="flex-1 p-5">
      <h2 className="mb-4 text-xl font-bold">Casual <span className="text-sm text-gray-500">Showing 1-6 of 100 Products</span></h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product, index) => (
          <div key={index} className="p-4 border rounded">
            <img src={`https://via.placeholder.com/150?text=${product.name}`} alt={product.name} className="object-cover w-full h-48" />
            <h3 className="mt-2 text-sm font-semibold">{product.name}</h3>
            <div className="text-yellow-500">{'★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating))}</div>
            <div className="mt-2">
              <span className="text-lg font-bold">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="ml-2 text-gray-500 line-through">${product.originalPrice}</span>
                  <span className="ml-2 text-red-500">{((1 - product.price / product.originalPrice) * 100).toFixed()}%</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        <button className="px-4 py-2 border rounded">Previous</button>
        <span>1 2 ... 9 10</span>
        <button className="px-4 py-2 border rounded">Next</button>
      </div>
    </div>
    </section>
    
    
  );
};

export default ProductGrid
