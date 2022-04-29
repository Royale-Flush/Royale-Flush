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
    <div className="inputBoxes">
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
        <div className="inputs">
          <input
            value={username}
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required
          />
          <input
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            pattern=".{8,}"
            title="8 characters minimum"
          />
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
