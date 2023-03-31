// Carousel.js
import React, { useState } from "react";
import homeimg from "./Dashboardimg";
// import "./Carousel.css";
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
    <Box sx={{ minWidth: "100%", height: "100%", margin: "0", padding: "0" }}>
      <Box
        sx={{
          display: "flex",
          transition: "transform 0.3s ease-in-out",
          width: "100%",
          height: "100%",
        }}
        className="carousel-images"
        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
      >
        {homeimg.map((img) => (
          <Box
            component="img"
            sx={{
              minWidth: "100%",
              padding: "75px 0",
              boxSizing: "border-box",
            }}
            src={img.src}
            alt={`imagee`}
          />
        ))}
      </Box>
      <ArrowBackIosIcon
        className="scrollcarouselleft"
        onClick={handleprevious}
        sx={{
          position: "absolute",
          top: "40%",
          left: "10px",
          zindex: "5",
          width: "50px",
          height: "50px",
        }}
      />
      <ArrowForwardIosIcon
        className="scrollcarouselright"
        onClick={handlenext}
        sx={{
          position: "absolute",
          top: "40%",
          right: "10px",
          zindex: "5",
          width: "50px",
          height: "50px",
        }}
      />
    </Box>
  );
}

export default Carousel;
// {currentIndex === img.id ? 'active-img' : 'non-active-img    '}>
