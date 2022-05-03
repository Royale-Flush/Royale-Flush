import React from "react";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="images">
      <img src="https://i.imgur.com/yvCTyaS.png" />
      <h2 id="greetings">Hello, {user.username}</h2>
      <div>
        {" "}
        <img
          className="toiletCompare"
          src="http://www.byhyu.com/uploads/4/7/3/7/47371935/difference-between-wall-hung-vs-standard-toilet_orig.png"
        />{" "}
        <img
          className="portaToiletCompare"
          src="http://www.portablerestroomsusa.com/images/portable-restrooms.jpg"
        />{" "}
      </div>
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
