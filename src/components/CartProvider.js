import CartContext from "../CartContext";
import { useState, useEffect } from "react";
import { getCart } from "../api";
import useAuth from "../hooks/useAuth";

const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);

  console.log("guessing: ", user.id);

  useEffect(() => {
    const fetchCart = async () => {
      const result = await getCart(user.id);
      console.log("Why cant i find this shit", result);
      if (result.isactive === true) {
        console.log("Who knows what the results could be: ", result);
        setCart(result);
      } else {
        return;
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
