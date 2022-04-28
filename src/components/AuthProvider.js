import AuthContext from "../AuthContext";
import { useState, useEffect } from "react";
import { getMe } from "../api";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const getMyUserFunction = async () => {
      const result = await getMe();
      setUser(result);
    };
    getMyUserFunction();
  }, [user, setUser, isLoggedIn]);

  return (
    <AuthContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
