import React, { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { setUser } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form></form>
    </div>
  );
};

export default Login;
