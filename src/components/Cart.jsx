import useCart from "../hooks/useCart";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div>
      {cart.map((newCart) => {
        return (
          <div className="cart-items" key={`${newCart.id}`}>
            <h1>{newCart.name}</h1>
            <h2>{newCart.price}</h2>
            <h2>{newCart.quantity}</h2>
            <h2>{newCart.categoryId}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default Cart;
