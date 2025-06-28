import StarRating from "./StarRating";
import Prices from "./Prices";


const ProductCard = ({ product }) => {
  return (
    <div className=" w-50 md:w-75 font-secondary hover:scale-[1.01] cursor-pointer">
        <img 
          src={product.imageUrl} 
          alt={product.name}
        className="object-cover w-50  bg-product-card bg-blend-multiply aspect-square md:w-75
          rounded-[14px] md:rounded-[20px] "
        />
      <div className="">
        <h3 className="mb-1 text-[16px] md:text-[18px] lg:text-[20px] font-bold line-clamp-1">
          {product.name}
        </h3>
        
        <div className="flex">
          <StarRating
            rating={product.rating}
          />
        </div>
        
        <div className="flex"><Prices
          current={product.price.new}
          old={product.price.old}
          discount={product.discount}
        /></div>
      </div>
    </div>
  );
};

export default ProductCard;