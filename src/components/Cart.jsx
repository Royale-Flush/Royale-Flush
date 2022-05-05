import useCart from "../hooks/useCart";
import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { getCart } from "../api";

const Cart = () => {
  const { setCart, cart, removeItem, updateItem, cartChg, setCartChg } =
    useCart();
  const { user } = useAuth();
  console.log("Cart in Cart Component:", cart);

  useEffect(() => {
    async () => {
      const reset = await getCart(user.id);
      setCart(reset);
    };
  }, [cartChg]);

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
                    onClick={async () => {
                      await removeItem(newCart.id, cart.id);
                      {
                        e.preventDefault();
                        setCartChg(Math.random());
                      }
                    }}
                  >
                    Remove from Cart
                  </button>

                  <div className="prodCont1">
                    <button
                      className="subtract"
                      onClick={async () => {
                        await updateItem(
                          newCart.id,
                          --newCart.quantity,
                          cart.id
                        );
                        setCartChg(Math.random());
                      }}
                    >
                      {" "}
                      -
                    </button>
                    <input className="quantity" value={newCart.quantity} />
                    <button
                      className="add"
                      onClick={() => {
                        updateItem(newCart.id, ++newCart.quantity, cart.id);
                        setCartChg(Math.random());
                      }}
                    >
                      {" "}
                      +
                    </button>
                  </div>
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

// updateItem(newCart.id, (newCart.quantity = e), cart.id)

// <input type="text" id="add"></input>
// <select>
//   <option min="1" max="100"></option>
// </select>

{
  /* <input
placeholder="Update Quantity"
type="number"
id="add"
min="1"
max="10"
/>
{ <form
onSubmit={async (e) => {
  e.preventDefault();
  // newCart.quantity = e.target.value;
}}
>
<input type="number" min="1" max="100" />
<button type="submit">Submit</button>
</form> } */
}
