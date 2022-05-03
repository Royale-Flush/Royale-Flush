import React from "react";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="images">
      <img src="https://i.imgur.com/yvCTyaS.png" />
      <h2 id="greeting">Hello, {user.username}</h2>
      <div>
        <img
          className="toiletCompare"
          src="http://www.byhyu.com/uploads/4/7/3/7/47371935/difference-between-wall-hung-vs-standard-toilet_orig.png"
        />
        <img
          className="portaToiletCompare"
          src="http://www.portablerestroomsusa.com/images/portable-restrooms.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
