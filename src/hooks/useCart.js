import { useContext } from "react";
import CartContext from "../CartContext";
import { addItem, editCart, removeFromCart, getCart } from "../api";
import useAuth from "./useAuth";

const useCart = () => {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useAuth();
  async function addToOrder(a, b, c) {
    const item = await addItem({ productId: a, quantity: b, orderId: c });

    const newCart = await getCart(user.id);
    setCart(newCart);
  }

  async function removeItem(a, b) {
    const newItem = await removeFromCart({ productId: a, orderId: b });
    const newCart = await getCart(user.id);
    setCart(newCart);
  }

  async function updateItem(a, b, c) {
    const newQty = await editCart({ productId: a, quantity: b, orderId: c });
    const newCart = await getCart(user.id);
    setCart(newCart);
  }

  return {
    cart,
    setCart,
    addToOrder,
    removeItem,
    updateItem,
  };
};

export default useCart;
