import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { loginUser } from "../api/index";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h2 className="welcome">Please log in and Happy Flushing! </h2>
      <div className="inputBoxes">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const response = await loginUser(username, password);
              console.log("response after login", response);
              setIsLoggedIn(true);
              navigate("/");
            } catch (error) {
              console.error("Username and password does not exist.", error);
            }
          }}
        >
          <div className="inputs">
            <input
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />

            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button type="submit">Log in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
