import React from "react";
import { Card, CardContent, Grid, Typography, Box } from "@mui/material";
// import "./Fourtile.css";

function Tile(props) {
  return (
    <Card
      sx={{
        backgroundColor: "aqua",
        margin: "15px auto",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          See what's trending in your area............
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            backgroundColor: "red",
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <Box
                display="flex"
                flexDirection="column"
                backgroundColor="yellow"
                alignItems="center"
              >
                <a href="www.google.com">
                  <img src="https://via.placeholder.com/210" alt="image1" />
                </a>
                <a href="www.google.com">Image 1</a>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                display="flex"
                flexDirection="column"
                backgroundColor="yellow"
                alignItems="center"
              >
                <a href="www.google.com">
                  <img src="https://via.placeholder.com/150" alt="image1" />
                </a>
                <a href="www.google.com">Image 1</a>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                display="flex"
                flexDirection="column"
                backgroundColor="yellow"
                alignItems="center"
              >
                <a href="www.google.com">
                  <img src="https://via.placeholder.com/150" alt="image1" />
                </a>
                <a href="www.google.com">Image 1</a>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                display="flex"
                flexDirection="column"
                backgroundColor="yellow"
                alignItems="center"
              >
                <a href="www.google.com">
                  <img src="https://via.placeholder.com/150" alt="image1" />
                </a>
                <a href="www.google.com">Image 1</a>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Tile;

// import React from 'react'
// import './Fourtile.css'
// import ProductCategory from './ProductCategory'

// function Tile(props) {
//   return (
//     <div className='fourtileouter'>
//         <div className='tileFour'>
//         <div className='t1'><ProductCategory category={props.c1name} img={props.c1url}/></div>
//         <div className='t2'><ProductCategory category={props.c2name} img={props.c2url}/></div>
//         <div className='t3'><ProductCategory category={props.c3name} img={props.c3url}/></div>
//         <div className='t4'><ProductCategory category={props.c4name} img={props.c4url}/></div>
//     </div>
//     </div>

//   )
// }

// export default Tile
