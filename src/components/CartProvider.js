import CartContext from "../CartContext";
import { useState, useEffect } from "react";
import { getCart } from "../api";
import useAuth from "../hooks/useAuth";

const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const result = await getCart(user.id);
      console.log("looking for results in cart provider", result);
      setCart(result);
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
