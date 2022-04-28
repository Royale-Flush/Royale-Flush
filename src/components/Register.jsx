import { registerUser } from "../api";
import useAuth from "../hooks/useAuth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//Problem with cors on heroku, its not http/https error. Need to check validity of the repo through heroku to see if its actually being hosted

const Register = () => {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // let token = "pizza";

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await registerUser(username, password);

          if (result.error) {
            setError(result.error);
          } else {
            setIsLoggedIn(true);
            navigate("/");
          }
        }}
      >
        {error ? <h3>Unable to create account: {error}</h3> : null}
        <input
          value={username}
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          required
        />
        <input
          value={password}
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
          pattern=".{8,}"
          title="8 characters minimum"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
