import { useEffect, useState } from 'react';
import ProductDetails from './ProductDetails';

export default function ProductPage() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('/data/product.json') // or your API endpoint
      .then((res) => res.json())
      .then(setProduct);
  }, []);

  return product ? <ProductDetails product={product} /> : <div>Loading...</div>;
}
