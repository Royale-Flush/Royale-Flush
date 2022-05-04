import React from "react";
import useAuth from "../hooks/useAuth";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import styles from "../style/Home.css";

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      <Carousel
        className="homeCarousel"
        infiniteLoop={true}
        transitionTime={3000}
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
          {/* <h6>Welcome To Royale Flush</h6> */}
          <p>Our work in the world...and beyond</p>
        </div>
        <div>
          <img src="theShining1.png" className="carouselPics" />
          <p>
            <em>The Shining</em>
          </p>
        </div>
        <div>
          <img src="lunarloo.webp" className="carouselPics" />
          <p>
            <em>Space</em>
          </p>
        </div>
        <div>
          <img src="theShining2.webp" className="carouselPics" />
          <p>
            <em>The Shining</em>
          </p>
        </div>
        <div>
          <img src="theDude.png" className="carouselPics" />
          <p>
            <em>The Big Lebowski</em>
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
