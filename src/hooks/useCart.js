import { useContext } from "react";
import CartContext from "../CartContext";

const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

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
  console.log("user line 21 useCart: ", user);

  return {
    cart,
    setCart,
  };
};

export default useCart;
