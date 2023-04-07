import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import Header from "./Header";
import Carousel from "./Carousel";
import { red } from "@mui/material/colors";
const drawerWidth = 200;

function Leftmenu(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    console.log(mobileOpen);
  };

  const drawer = (
    <Box>
      <Toolbar />
      <Divider />
      <List>
        {[
          "Woman's Fashion",
          "Man's Fashion",
          "Electronics",
          "Fitness",
          "Home & Lifestyle",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <Header
        handleDrawerToggle={handleDrawerToggle}
        handlelogin={props.handlelogin}
        handlelogout={props.handlelogout}
        login={props.login}
      />
      <Box sx={{ display: "flex" }}>
        {/* <CssBaseline /> */}

        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            hideBackdrop="true"
            elevation="0"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                border: "none",
                height: 350,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main" //you can chamge this to alter the carousel and small box beside it
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            height: "60vh",
            display: "flex",
            marginTop: "64px",
          }}
        >
          <Box //box for carousel
            sx={{
              backgroundColor: "red",
              position: "relative",
              overflow: "hidden",
              borderRadius: "20px",
              margin: "20px",
            }}
          >
            <Carousel />
          </Box>

          <Box
            sx={{
              backgroundColor: "green",
              minWidth: "200px",
              borderRadius: "20px",
              margin: "10px",
            }} //box  for beside carousel.
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}

Leftmenu.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Leftmenu;

// ["Woman's Fashion", "Man's Fashion", 'Electronics', 'Fitness',"Home & Lifestyle"]
