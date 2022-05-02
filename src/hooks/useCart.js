import { useContext } from "react";
import CartContext from "../CartContext";
import { editCart } from "../api";

const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

  console.log(cart);

  // const edit = editCart(quantity);

  //cart.id is orderId

  //need to increment quantity on a product
  // function upQuantity() {
  //   setCart(...{quantity}, ++)
  // }

  //need to decrement quantity on a product
  // function lowerQuantity() {
  //   setCart(...{quantity}, --)
  // }

  //need to remove Items from the cart
  // function deletefromcart() {

  // }

  return {
    cart,
    setCart,
  };
};

export default useCart;
