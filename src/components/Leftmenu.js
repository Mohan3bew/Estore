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
const drawerWidth = 200;

function Leftmenu(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(true);
  // const [menuclick, setmenuclick] = React.useState(false);

  // const handlemenuclick = () => {
  //   setmenuclick(!menuclick);
  //   console.log(menuclick);
  // };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
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
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <Header handleDrawerToggle={handleDrawerToggle} />
      <Box sx={{ display: "flex", overflow: "visible" }}>
        <CssBaseline />

        {/* <AppBar
        position="fixed"
        sx={{
          width: "100%",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar> */}

        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
          component="main"
          sx={{
            mr: 30,
            padding: "40",
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            height: 350,
            overflow: "visible",
          }}
        >
          <Carousel />
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
