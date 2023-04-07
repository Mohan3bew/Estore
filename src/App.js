import React, { useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import Tile from "./components/Tile";
import homeimg from "./components/Dashboardimg";
import Slider from "./components/Slider";
import images from "./components/images";
import Cardslider from "./components/Cardslider";
import Leftmenu from "./components/Leftmenu";
import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Appdivider from "./components/Appdivider";
import Loginform from "./components/Loginform";

function App() {
  let [login, setLogin] = useState(false);

  function handlelogin() {
    setLogin(true);
  }
  function handlelogout() {
    setLogin(false);
  }

  return (
    <Box className="app" sx={{ margin: "0", padding: "0" }}>
      <Leftmenu
        handlelogin={handlelogin}
        handlelogout={handlelogout}
        login={login}
      />
      <Appdivider text="Today's Picks" />
      <Cardslider images={images} />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained"> View All Products</Button>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        style={{
          backgroundColor: "rgb(234, 237, 242)",
        }}
      >
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            m: "5rem 0",
            maxWidth: "75%",
          }}
        >
          <Grid item xs={12} sm={6}>
            <Tile title="Trending in your area" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Tile title="Trending in your area" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Tile title="Trending in your area" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Tile title="Trending in your area" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
