// Carousel.js
import React, { useState } from "react";
import homeimg from "./Dashboardimg";
import "./Carousel.css";
import { Box } from "@mui/system";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  function handlenext() {
    // console.log('left clicked')
    setCurrentIndex((currentIndex + 1) % homeimg.length);
  }

  function handleprevious() {
    // console.log('right clicked')
    setCurrentIndex((currentIndex + homeimg.length - 1) % homeimg.length);
  }

  // const carouselWidth = 100 * currentIndex + "%";
  //console.log(currentIndex)
  return (
    <Box className="outercarousel">
      <Box
        className="carousel-images"
        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
      >
        {homeimg.map((img) => (
          <img src={img.src} alt={`imagee`} />
        ))}
      </Box>
      <ArrowBackIosIcon
        className="scrollcarouselleft"
        onClick={handleprevious}
      />
      <ArrowForwardIosIcon
        className="scrollcarouselright"
        onClick={handlenext}
      />
    </Box>
  );
}

export default Carousel;
// {currentIndex === img.id ? 'active-img' : 'non-active-img    '}>
