import React from "react";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="homePage">
      <div className="welcome">
        <h2>Hello, {user.username}</h2>
      </div>

      <img src="https://i.imgur.com/arzXgMz.png" alt="Happiness" />
    </div>
  );
};

export default Home;
