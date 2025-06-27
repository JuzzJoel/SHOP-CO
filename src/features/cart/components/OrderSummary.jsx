import { ArrowRight, Tag } from 'lucide-react';
import { useState } from 'react';
import CartItem from '/src/ui/cards/cartItem';
import CurrencyFormatter from "/src/lib/utils/CurrencyFormatter"





export default function OrderSummary({ subtotal, deliveryFee, discount, total }) {
  const [promoCode, setPromoCode] = useState('');


  function subTotal() {
    if (!CartItem || !Array.isArray(CartItem)) return 0;
    return CartItem.reduce((acc, item) =>
      acc + item.price.new * item.quantity, 0);
  }


  return (
      <div className="flex flex-col w-full gap-4 p-5 bg-white  font-secondary border border-black/10 rounded-[20px] ">
          
        
          <h1 className="font-secondary text-[20px] font-bold text-black ">
               Order Summary
          </h1>
      <div className="space-y-4 text-[16px] font-medium text-black/60">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className='text-black'><CurrencyFormatter value={subTotal()} /></span>

        </div>
              <div className="flex justify-between">
                  <span>Discount({discount/subtotal})%</span>

                  <span className='text-red-600'>-{(discount)/(subtotal)}</span>

        </div>
              <div className="flex justify-between">
              <span>Delivery</span>

                  <span className='text-black'>{deliveryFee === 0 ? 'Free' : (deliveryFee)}</span>

        </div>
        <hr />
        <div className="flex justify-between text-[16px] font-semibold">
          <span className='text-black'>Total</span>
          <span className='text-[20px]'>{(total)}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-6">
        <div className="flex items-center flex-1 gap-2 px-4 py-2 bg-gray-100 rounded-full">
          <Tag size={16} className="text-gray-700" />
          <input
            type="text"
            placeholder="Add promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="flex-1 text-sm bg-transparent outline-none"
          />
        </div>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-black border rounded-full cursor-pointer hover:bg-white hover:border hover:text-black transition-ease transition-duration-300">Apply</button>
      </div>

      <button className="flex items-center justify-center w-full gap-2 py-3 mt-6 text-white transition bg-black rounded-full hover:opacity-90">
        Go to Checkout <ArrowRight size={16} />
      </button>
    </div>
  );
}
