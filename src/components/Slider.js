import React, { useState } from "react";
import './Slider.css'
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Slider(props) {
    const [position, setPosition] = useState(0);
    const numSlides = Math.ceil(props.images.length / 4);
  
    const handlenext = () => {
    setPosition((position + 1) % numSlides);
  };
  
    const handleprevious = () => {
    setPosition((position - 1 + numSlides) % numSlides);
  };
  return (
    <div className='outerbox'>
        <div className='images'
        style={{ transform: `translateX(${-position * 100}%)` }}>
            {props.images.map((image,index) => ( 
                <img src={image} alt="image1" />
            ) )}
        </div>
        <div className="scrollleft">
        <ArrowBackIosIcon onClick={handleprevious} />
        </div>
        <div className="scrollright">
        <ArrowForwardIosIcon onClick={handlenext} /> 
        </div>
    </div>
  )
}

export default Slider