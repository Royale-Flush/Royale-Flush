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
      <>
        <div className="mainContainer">
          {cart.items.length ? (
            cart.items.map((newCart) => {
              return (
                <div
                  className="Product-Container"
                  key={`newCart Id, ${newCart.id}`}
                >
                  {console.log("trying to find what is in here: ", newCart)}
                  <img
                    className="productImage"
                    src={newCart.imageUrl}
                    alt="product image"
                  />
                  <h2 className="prodCont1">
                    Royale Name: <span id="prodText">{newCart.name}</span>
                  </h2>
                  <h2 className="prodCont2">
                    Royale Price: <span id="prodText">{newCart.price}</span>{" "}
                  </h2>
                  <h2 className="prodCont2">
                    Royale Quantity:{" "}
                    <span id="prodText">{newCart.quantity}</span>
                  </h2>
                  <button
                    id="add"
                    onClick={(e) => {
                      removeItem(newCart.id, cart.id);
                      {
                        e.preventDefault();
                      }
                    }}
                  >
                    Remove from Cart
                  </button>
                  <option className="prodCont2">
                    Royale Quantity:
                    <span id="prodText">
                      <input type="number" min="1" max="100"></input>
                      <input
                        type="submit"
                        onSubmit={(e) =>
                          updateItem(
                            newCart.id,
                            (newCart.quantity = e),
                            cart.id
                          )
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
      </>
    );
  } catch (error) {
    console.log(error);
  }
};
export default Cart;
