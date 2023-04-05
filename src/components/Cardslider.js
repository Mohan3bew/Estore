import React, { useState } from "react";
// import "./Cardslider.css";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  CardMedia,
  Box,
} from "@mui/material";
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
    <Box
      sx={{
        position: "relative",
        width: "75vw",
        height: "80vh",
        outline: "2px solid",
        margin: "5rem auto",
        backgroundColor: "grey",
      }}
    >
      <Box
        sx={{
          width: "35px",
          height: "35px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          zIndex: "1",
          top: -50,
          right: "60px",
          backgroundColor: "grey",
          borderRadius: "100%",
        }}
      >
        <ArrowBackIosIcon
          onClick={handleprevious}
          sx={{ paddingLeft: "5px" }}
        />
      </Box>
      <Box
        sx={{
          margin: 0,
          padding: 0,
          width: "35px",
          height: "35px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          zIndex: "1",
          top: -50,
          right: "10px",
          backgroundColor: "grey",
          borderRadius: "100%",
        }}
      >
        <ArrowForwardIosIcon onClick={handlenext} />
      </Box>
      <Box
        className="images"
        style={{ transform: `translateX(${-position * 100}%)` }}
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        {props.images.map((img, index) => (
          <Card
            sx={{
              minWidth: "calc(25% - 2rem)",
              padding: "1rem",
              margin: "1rem",
              boxSizing: "border-box",
            }}
          >
            <CardMedia sx={{ height: 140 }} image={img} title="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
export default Cardslider;
