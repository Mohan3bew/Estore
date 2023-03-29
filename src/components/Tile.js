
import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import './Fourtile.css'



function Tile(props) {
  return (
    <Card className='fourtile'>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          See what's trending in your area. 
        </Typography>
        <div className='blocks'>
        <Grid container spacing={2}>
          <Grid className='fourtileitem' item xs={6}>
          <a href="www.google.com"><img src="https://via.placeholder.com/150" alt="image1" /></a>
          <a href="www.google.com">Image 1</a>
          </Grid>
          <Grid className='fourtileitem' item xs={6}>
          <a href="www.google.com"><img src="https://via.placeholder.com/150" alt="image1" /></a>
          <a href="www.google.com">Image 1</a>
          </Grid>
          <Grid className='fourtileitem' item xs={6}>
          <a href="www.google.com"><img src="https://via.placeholder.com/150" alt="image1" /></a>
          <a href="www.google.com">Image 1</a>
          </Grid>
          <Grid className='fourtileitem' item xs={6}>
          <a href="www.google.com"><img src="https://via.placeholder.com/150" alt="image1" /></a>
          <a href="www.google.com">Image 1</a>
          </Grid>
        </Grid>
        </div>
        
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