import { useState, useEffect } from "react";
import { getCart } from "../api";
import AuthContext from "../AuthContext";

const cartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    const newCart = async () => {
      const result = await getCart();
      setUser(result);
    };
    newCart();
  }, [setCart]);

  return (
    <AuthContext.Provider value={{ cart, setCart }}>
      {children}
    </AuthContext.Provider>
  );
};

export default cartProvider;
