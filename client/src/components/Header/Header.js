import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Box, Grid, Slide, useScrollTrigger } from "@material-ui/core";
import LogOut from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/HomeRounded";
import About from "@material-ui/icons/InfoRounded";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "block",
      // [theme.breakpoints.up("sm")]: {
      //   display: "block",
      // },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        marginRight: theme.spacing(1.3),
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    desctopOptions: {
      margin: theme.spacing(0, 0, 0, 2.3),
    },
    profilePopup: {
      marginTop: 50,
    },
}));

 export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

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
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      className={classes.profilePopup}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>LogOut</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <HomeIcon />
        </IconButton>
        <p>Home</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <About />
        </IconButton>
        <p>About</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
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

  return (
    // <HideOnScroll {...props}>
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
            <Typography className={classes.title} variant="h6" noWrap>
              PLAND.FARM
            </Typography>

            {/* Search option 🤭  */}
            {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div> */}
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
            
              <IconButton color="inherit" className={classes.desctopOptions}>
                {/* <Grid containe xs={12}></Grid> */}
                <Grid container direction="column">
                  <Grid item>
                    <HomeIcon />
                  </Grid>
                  <Grid item>
                    <Typography>Home</Typography>
                  </Grid>
                </Grid>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
                className={classes.desctopOptions}
              >
                {/* <Badge badgeContent={17} color="secondary"> */}
                <Grid container direction="column">
                  <Grid item>
                    <About />
                  </Grid>
                  <Grid item>
                    <Typography>About</Typography>
                  </Grid>
                </Grid>
                {/* </Badge> */}
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                className={classes.desctopOptions}
              >
                <Grid container direction="column">
                  <Grid item>
                    <AccountCircle />
                  </Grid>
                  <Grid item>
                    <Typography>User</Typography>
                  </Grid>
                </Grid>
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {/* </HideOnScroll> */}
        {renderMobileMenu}
        {renderMenu}
      </div>
  );
}
