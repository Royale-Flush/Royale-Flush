import useCart from "../hooks/useCart";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const { cart } = useCart();
  console.log("what really is a cart: ", cart);

  try {
    return (
      <div>
        {cart.items.map((newCart) => {
          return (
            <div className="cart-items" key={`${newCart.id}`}>
              <h1>{newCart.name}</h1>
              <h2>{newCart.price}</h2>
              <h2>{newCart.quantity}</h2>
            </div>
          );
        })}
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};
export default Cart;
