import React, { useState } from 'react';
import initialCartItems from '/src/stores/cart.json';
import CartItem from '/src/ui/cards/cartItem';

export default function CartSummary() {
  const [cartItems, setCartItems] = useState(initialCartItems.products);

  const updateCartItemQuantity = (id, quantity) => {
    setCartItems(cartItems.map((item) => 
      item.id === id ? { ...item, quantity } : item
    ));
  };
    
  const removeCartItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="h-auto border border-black/10 rounded-[20px] w-full p-4 lg:gap-[16px] lg:px-6 lg:py-5">
      <div className="max-w-2xl mx-auto space-y-4">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <CartItem 
                item={item} 
                updateCartItemQuantity={updateCartItemQuantity} 
                removeCartItem={removeCartItem} 
              />
              {index < cartItems.length - 1 && (
                <div className="my-4 border-b border-gray-200" />
              )}
            </React.Fragment>
          ))
        ) : (
          <p>No products in cart.</p>
        )}
      </div>
    </div>
  );
}