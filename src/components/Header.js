import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import Loginform from "./Loginform";
import Signupform from "./Signupform";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  right: "0",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingRight: `calc(2em + ${theme.spacing(4)})`,
    paddingLeft: "1em",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
  },
}));

export default function Header(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [loginopen, setloginOpen] = React.useState(false);
  const [signupopen, setsignupOpen] = React.useState(false);
  const handleloginOpen = () => setloginOpen(true);
  const handleloginClose = () => setloginOpen(false);
  const handlesignupOpen = () => setsignupOpen(true);
  const handlesignupClose = () => setsignupOpen(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const loginmenuId = "primary-login-search-account-menu";
  const loginrenderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={loginmenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMobileMenuClose}>
        <Button variant="contained">LOGIN</Button>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Button variant="contained">SIGN UP</Button>
      </MenuItem>
    </Menu>
  );

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "grey",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={props.handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />

          {props.login ? (
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {/* <Button sx={{ m: 1 }} variant="contained">
                LOGIN
              </Button> */}
              <Loginform
                loginopen={loginopen}
                handleloginOpen={handleloginOpen}
                handleloginClose={handleloginClose}
              />
              <Signupform
                signupopen={signupopen}
                handlesignupOpen={handlesignupOpen}
                handlesignupClose={handlesignupClose}
              />
              {/* <Button sx={{ m: 1 }} variant="contained">
                SIGN UP
              </Button> */}
            </Box>
          )}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {props.login ? renderMobileMenu : loginrenderMobileMenu}
      {renderMenu}
    </Box>
  );
}

// import React from "react";
// // import "./Header.css"
// import Logo from "../images/amazon.png";
// // import SearchIcon from '@mui/icons-material/Search';
// // import Search from '@mui/icons-material/Search';
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import SearchIcon from "@mui/icons-material/Search";
// import { AppBar, Box } from "@mui/material";

// function Header(props) {
//   function getwidth() {
//     let a = "";
//     if (props.page_category === "0") {
//       a = "55px";
//       return a;
//     } else if (props.page_category === "1") {
//       a = "115px";
//       return a;
//     } else if (props.page_category === "2") {
//       a = "115px";
//       return a;
//     } else if (props.page_category === "3") {
//       a = "180px";
//       return a;
//     } else return "55px";
//   }
//   const getstyle = {
//     width: getwidth(),
//     zIndex: 1,
//   };

//   // function select_state(local_state){

//   // if (opt.value === '1') {
//   //     let new_style={
//   //         width: '100px'
//   //     }
//   // }
//   // else if(opt.value === '2') {
//   //     let new_style={
//   //         width: '120px'
//   //     }
//   // }
//   // else if ( opt.value === '3'){
//   //     let new_style={
//   //         width: '150px'
//   //     }
//   // }
//   // setnav(opt)

//   // return new_style
//   // }

//   // function displayTextWidth(text){
//   //     let canvas= displayTextWidth.canvas || (displayTextWidth.canvas = document.createElement("canvas"))
//   //     let context=canvas.getContext("2d");
//   //     let metrics = context.measureText(text);
//   //     return metrics.width
//   // }
//   return (
//     <AppBar color="secondary" className="header">
//       <img className="header_logo" alt="asdsda" src={Logo} />

//       <div className="header_location">
//         <span className="l1">Hello</span>
//         <span className="l2">
//           <LocationOnOutlinedIcon className="locationicon" />
//         </span>
//         <span className="l3">Select your adress</span>
//       </div>
//       <div>
//         <span>
//           <select
//             name="product_type"
//             id="product_type"
//             style={getstyle}
//             onChange={(e) => {
//               props.handlechange(e.target.value);
//             }}
//           >
//             <option value="">All</option>
//             <option value="1">Apps & Games</option>
//             <option value="2">Amazon Fresh</option>
//             <option value="3">Cell Phones & Accesories</option>
//           </select>
//         </span>
//         <input className="header_search" type="text" />
//         <span>
//           <SearchIcon className="search_icon" />
//         </span>
//       </div>

//       <div className="header_element1">
//         <span className="he11">Hello, sign in</span>
//         <span className="he12">Accounts & Lists</span>
//       </div>
//       <div className="header_element2">
//         <span className="he21">Returns</span>
//         <span className="he22">& Orders</span>
//       </div>
//       <div className="header_element3">
//         <span className="he31">img</span>
//         <span className="he32">Cart</span>
//       </div>
//     </AppBar>
//   );
// }

// export default Header;
