import { useContext } from "react";
import CartContext from "../CartContext";
import { editCart } from "../api";

const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

  function addItem() {}

  function removeItem() {}

  function updateItem() {}

  return {
    cart,
    setCart,
  };
};

export default useCart;
