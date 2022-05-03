import { getCart } from "../api";
import useAuth from "../hooks/useAuth";
import CartContext from "../CartContext";
import { useState, useEffect } from "react";

const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cart, setCart] = useState({});

  const id = user.id;

  console.log("what really is a cart: ", cart);

  useEffect(() => {
    const fetchCart = async () => {
      console.log("gotta find what is happening on line 16", user.id);
      const result = getCart(id);
      console.log("what is the result", result);
      if (result === false) {
        setCart({});
      } else {
        setCart(result);
      }
    };
    fetchCart();
  }, [setCart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
