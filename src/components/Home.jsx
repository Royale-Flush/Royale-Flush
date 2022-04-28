import React from "react";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="images">
      <img src="https://i.imgur.com/arzXgMz.png" alt="Happiness" />
      <h2>Hello, {user.username}</h2>
    </div>
  );
};

export default Home;
