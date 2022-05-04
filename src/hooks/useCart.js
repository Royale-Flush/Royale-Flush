import { useContext } from "react";
import CartContext from "../CartContext";
import { addItem, editCart, removeFromCart } from "../api";

const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

  async function addToOrder(a, b, c) {
    const tempCart = {
      productId: a,
      quantity: b,
      orderId: c,
    };
    const item = await addItem(tempCart);

    const newItems = [...cart.items, item];
    setCart({ ...cart, items: newItems });
  }

  async function removeItem(a, b) {
    const tempCart = {
      productId: a,
      orderId: b,
    };
    const newItem = await removeFromCart(tempCart);
    const filteredItems = cart.items.filter((item) => {
      return item.id !== newItem.id;
    });
    setCart({ ...cart, items: filteredItems });
  }

  async function updateItem(a, b, c) {
    const tempCart = {
      productId: a,
      quantity: b,
      orderId: c,
    };
    const newQty = await editCart(tempCart);
    const mappedItems = cart.Items.map((item) => {
      if (item.id === itemId) {
        item.qty = newQty;
      }
      return item;
    });
    setCart({ ...cart, items: mappedItems });
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
