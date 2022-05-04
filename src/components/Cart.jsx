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
      <div className="mainContainer">
        {cart.items.length ? (
          cart.items.map((newCart) => {
            return (
              <div className="Product-Container" key={`${newCart.id}`}>
                <h1>{newCart.name}</h1>
                <h2 className="prodCont1">
                  Royale Price: <span id="prodText">{newCart.price}</span>{" "}
                </h2>
                <h2>{newCart.quantity}</h2>
                <button
                  id="add"
                  onClick={(e) => {
                    removeItem(newCart.id, cart.id);
                    {
                      e.preventDefault();
                    }
                  }}
                >
                  Remove to Cart
                </button>
                <option className="prodCont2">
                  Royale Quantity:
                  <span id="prodText">
                    <input type="number" min="1" max="100"></input>
                    <input
                      type="submit"
                      onSubmit={(e) =>
                        updateItem(newCart.id, (newCart.quantity = e), cart.id)
                      }
                    ></input>
                  </span>
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
