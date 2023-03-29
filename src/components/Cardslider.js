import React, { useState } from "react";
import './Cardslider.css'
import { Card, CardContent, CardActions,Button, Typography,CardMedia } from '@mui/material'
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Cardslider(props) {
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
            {props.images.map((img,index) => (
                <Card sx={{ minWidth: '24.7%',padding: '0.1rem'}}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={img}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
                
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
export default Cardslider