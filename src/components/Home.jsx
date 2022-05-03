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
      {/* <video autoPlay loop muted>
        <source src="waterfall.mp4" type="video/mp4" />
      </video> */}
    </div>
  );
};

export default Home;
