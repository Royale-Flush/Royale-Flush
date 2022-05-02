import AuthContext from "../AuthContext";
import { useState, useEffect } from "react";
import { getMe } from "../api";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getMyUserFunction = async () => {
      const result = await getMe();
      if (result.loggedIn === false) {
        setUser({ username: "guest" });
      } else {
        setUser(result);
      }
    };
    getMyUserFunction();
  }, [setUser, isLoggedIn]);

  return (
    <AuthContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
