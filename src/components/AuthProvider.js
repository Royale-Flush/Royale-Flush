import AuthContext from "../AuthContext";
import { useState, useEffect } from "react";
import { getMe } from "../api";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getMyUserFunction = async () => {
      const result = await getMe();
      setUser(result);
    };
    getMyUserFunction();
  }, [setUser]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
