import CartSummary from './CartSummary'
import OrderSummary from './OrderSummary'
import CurrencyFormatter from "/src/lib/utils/CurrencyFormatter"



function CartOrder() {
  return (
    <>
      <section className="flex flex-col items-center w-screen h-auto">
        <div className="flex  items-center gap-5 flex-col max-w-[77.5rem] w-9/10 md:flex-row md:items-start ">
          <><CartSummary /></>
          <><OrderSummary
  // cartItems={products.products}
  // deliveryFee={deliveryFee}
  // discount={discount}
  // total={total}
/>
 </>
        </div>
          </section>
    </>
  )
}

export default CartOrder
