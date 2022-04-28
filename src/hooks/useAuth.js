import { useContext } from "react";
import AuthContext from "../AuthContext";

const useAuth = () => {
  const { user, setUser, cart, setCart } = useContext(AuthContext);

  return {
    user,
    setUser,
    cart,
    setCart,
  };
};

export default useAuth;
