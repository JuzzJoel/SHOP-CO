import { useState } from 'react';
import { Tag, ArrowRight } from 'lucide-react';
// import FormatPrice  from "/src/lib/utils/CurrencyFormatter";


export default function CartSummary({ subtotal, deliveryFee, discount, total }) {
  const [promoCode, setPromoCode] = useState('');

  return (
      <div className="p-5 bg-white rounded-2xl font-secondary flex flex-col  gap-4 w-full ">
          
        
          <h1 className="font-secondary text-[20px] font-bold text-black ">
               Order Summary
          </h1>
      <div className="space-y-4 text-[16px] font-medium text-black/60">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className='text-black'>{
          (subtotal)}</span>
        </div>
              <div className="flex justify-between">
                  <span>Discount({discount/subtotal}*100)%</span>

                  <span className='text-red-600'>-{(discount/subtotal)}</span>

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
        <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full flex-1">
          <Tag size={16} className="text-gray-700" />
          <input
            type="text"
            placeholder="Add promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="bg-transparent outline-none text-sm flex-1"
          />
        </div>
              <button className="text-sm font-medium text-white px-4 py-2 rounded-full border flex items-center gap-2 bg-black hover:bg-white hover:border hover:text-black cursor-pointer transition-ease transition-duration-300">Apply</button>
      </div>

      <button className="w-full mt-6 bg-black text-white py-3 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition">
        Go to Checkout <ArrowRight size={16} />
      </button>
    </div>
  );
}
