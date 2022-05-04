import useCart from "../hooks/useCart";
import React, { useEffect, useState } from "react";

const Cart = (props) => {
  const { cart } = useCart();
  console.log("Cart in Cart Component:", cart);

  useEffect(() => {
    setTimeout(() => {
      console.log("did this work");
    }, 3000);
  }, [cart]);

  try {
    return (
      <div>
        {cart.items.length ? (
          cart.items.map((newCart) => {
            return (
              <div className="cart-items" key={`${newCart.id}`}>
                <h1>{newCart.name}</h1>
                <h2>{newCart.price}</h2>
                <h2>{newCart.quantity}</h2>
              </div>
            );
          })
        ) : (
          <div>Loading</div>
        )}
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};
export default Cart;
