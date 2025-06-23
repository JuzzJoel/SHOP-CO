import ProductCard from "../cards/ProductCard";

function ProductList({ data, filterProp, filterValue, sortProp, sortOrder, limit, random }) {
  let products = data.products;

  if (filterProp && filterValue) {
    products = products.filter((product) => product[filterProp] === filterValue);
  }

  if (random) {
    products = products.sort(() => 0.5 - Math.random());
  } else if (sortProp && sortOrder) {
    products = products.sort((a, b) => {
      if (sortOrder === "desc") {
        return b[sortProp] - a[sortProp];
      } else {
        return a[sortProp] - b[sortProp];
      }
    });
  }

  if (limit) {
    products = products.slice(0, limit);
  }

  return (
    <div className="flex flex-wrap justify-between w-full">
      {products.map((product) => (
        <div className="w-1/4" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}


export default ProductList;
