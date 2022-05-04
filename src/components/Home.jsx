import React from "react";
import useAuth from "../hooks/useAuth";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// import styles from "../style/Home.module.css";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="images">
      <img src="https://i.imgur.com/yvCTyaS.png" id="stickMan" />
      <h2 id="greeting">Hello, {user.username}</h2>
      {/* <div>
        <img
          className="toiletCompare"
          src="http://www.byhyu.com/uploads/4/7/3/7/47371935/difference-between-wall-hung-vs-standard-toilet_orig.png"
        />
        <img
          className="portaToiletCompare"
          src="http://www.portablerestroomsusa.com/images/portable-restrooms.jpg"
        />
      </div> */}

      <Carousel
        // className={styles.homeCarousel}
        infiniteLoop={true}
        transitionTime={2000}
        showThumbs={false}
        autoPlay={true}
        showArrows={false}
        showStatus={false}
      >
        <div>
          <img src="https://i.imgur.com/yvCTyaS.png" />
          <p>Welcome</p>
        </div>
        <div>
          <img src="https://i.imgur.com/yvCTyaS.png" />
          <p>To</p>
        </div>
        <div>
          <img src="https://i.imgur.com/yvCTyaS.png" />
          <p>Royale</p>
        </div>
        <div>
          <img src="https://i.imgur.com/yvCTyaS.png" />
          <p>Flush</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
