import React, { useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel";

import Tile from "./components/Tile";
import homeimg from "./components/Dashboardimg";
import Slider from "./components/Slider";
import images from "./components/images";
import Cardslider from "./components/Cardslider";
import Leftmenu from "./components/Leftmenu";
import Box from "@mui/material/Box";

function App() {
  let [page_category, set_page_category] = useState(0);
  console.log(page_category);
  function handlechange(newvalue) {
    set_page_category(newvalue);
  }

  return (
    <div className="app">
      <Leftmenu />
      {/* <Carousel iamges={homeimg} /> */}
      {/* <Tile title='Trending in your area'/>
      <Slider images={images}/> */}
      {/* <Cardslider images={images}/> */}
    </div>
  );
}

export default App;
