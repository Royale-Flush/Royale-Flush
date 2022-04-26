import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { getMe } from "../api/index";

const Login = () => {
  const { setToken, isLoggedIn, setIsLoggedIn } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h2>Hello</h2>
      <div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const response = await getMe(username, password);
              localStorage.setItem("token", response.token);
              setToken(response.token);
              setIsLoggedIn(true);
            } catch (error) {
              console.error("Username and password does not exist.", error);
            }
          }}
        >
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
        </form>
      </div>

      <div
        style={{
          display: isLoggedIn ? "block" : "none",
        }}
      >
        <h3>WELCOME BACK {`${username}`}!</h3>
      </div>
    </div>
  );
};

export default Login;
