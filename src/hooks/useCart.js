import { useContext } from "react";
import CartContext from "../CartContext";
import { editCart } from "../api";

const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

  console.log(cart);

  return {
    cart,
    setCart,
  };
};

export default useCart;
