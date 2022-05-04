import React from "react";
import useAuth from "../hooks/useAuth";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import styles from "../style/Home.module.css";

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      <Carousel
        className={styles.homeCarousel}
        infiniteLoop={true}
        transitionTime={2000}
        showThumbs={false}
        autoPlay={true}
        showArrows={false}
        showStatus={false}
        width="1000px"
        dynamicHeight={false}
        centerMode={false}
        centerSlidePercentage="100"
      >
        <div>
          <img src="roman_toilets2.jpg" className="carouselPics" />
          <p>Welcome To Royale Flush</p>
        </div>
        <div>
          <img src="theShining1.png" className="carouselPics" />
          <p>From The Shining</p>
        </div>
        <div>
          <img src="lunarloo.webp" className="carouselPics" />
          <p>Our First Lunar Loo</p>
        </div>
        <div>
          <img src="theShining2.webp" className="carouselPics" />
          <p>From The Shining</p>
        </div>
        <div>
          <img src="theDude.png" className="carouselPics" />
          <p>From The Big Lebowski</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
