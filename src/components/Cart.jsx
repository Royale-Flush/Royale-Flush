import useCart from "../hooks/useCart";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const { cart, removeItem, updateItem, setCart } = useCart();
  console.log("Cart in Cart Component:", cart);

  useEffect(() => {
    setTimeout(() => {}, 3000);
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
                <button
                  id="remove"
                  onClick={() => removeItem(newCart.id, cart.id)}
                >
                  Remove to Cart
                </button>
                <option>
                  Update quantity
                  <input type="number" min="1" max="100"></input>
                  <input
                    type="submit"
                    onSubmit={(e) =>
                      updateItem(newCart.id, (newCart.quantity = e), cart.id)
                    }
                  ></input>
                </option>
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
