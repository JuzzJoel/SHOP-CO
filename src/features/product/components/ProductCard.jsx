// import { useState } from 'react';
import { Star } from 'lucide-react';
// import { useState } from 'react'
import ProductDefine from '/src/data/products'

export default function ProductCard({ product }) {
//   const [selectedColor, setSelectedColor] = useState(product.colors[0]);
//   const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
//   const [quantity, setQuantity] = useState(1);
//   const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="max-w-6xl gap-6 p-6 mx-auto md:flex">
      {/* Thumbnails */}
      <div className="flex gap-3 md:flex-col">
              {
                  product.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx}`}
            onClick={() => setMainImage(img)}
            className={`w-16 h-16 rounded-md object-cover cursor-pointer border ${
              mainImage === img ? 'border-black' : 'border-transparent'
            }`}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="flex items-center justify-center flex-1 p-4 bg-gray-100 rounded-lg">
        <img src={mainImage} alt="Main product" className="object-contain max-h-96" />
      </div>

      {/* Product Info */}
      <div className="flex-1 mt-6 space-y-4 md:mt-0">
        {/* Breadcrumb (optional) */}
        <div className="text-sm text-gray-500">Home &gt; Shop &gt; Men &gt; T-shirts</div>

        <h2 className="text-2xl font-bold">{product.title}</h2>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1 text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill={i < Math.floor(product.rating) ? 'yellow' : 'none'} />
            ))}
          </div>
          <span className="text-sm text-gray-600">{product.rating}/5</span>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-2 text-lg font-semibold">
          <span>${product.price.new}</span>
          <span className="text-base text-gray-400 line-through">${product.price.old}</span>
          <span className="text-sm text-red-500">-{product.discountPercent}%</span>
        </div>

        <p className="text-sm text-gray-600">{product.description}</p>

        {/* Color Picker */}
        <div className="space-y-1">
          <h4 className="text-sm font-medium">Select Colors</h4>
          <div className="flex gap-2">
            {product.colors.map((hex, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedColor(hex)}
                className={`w-6 h-6 rounded-full border-2 ${
                  selectedColor === hex ? 'border-black' : 'border-transparent'
                }`}
                style={{ backgroundColor: hex }}
              />
            ))}
          </div>
        </div>

        {/* Size Picker */}
        <div className="space-y-1">
          <h4 className="text-sm font-medium">Choose Size</h4>
          <div className="flex gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 rounded-full border ${
                  selectedSize === size
                    ? 'bg-black text-white'
                    : 'border-gray-300 text-black hover:bg-gray-100'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity + Cart */}
        <div className="flex items-center gap-4">
          <div className="flex items-center overflow-hidden border rounded-full">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-3 py-1 text-lg"
            >
              −
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="px-3 py-1 text-lg"
            >
              +
            </button>
          </div>
          <button className="px-6 py-2 text-white transition bg-black rounded-full hover:opacity-90">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
