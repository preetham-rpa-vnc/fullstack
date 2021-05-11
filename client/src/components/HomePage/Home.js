import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import Cards from "./Cards/Cards";
import { Link, Redirect, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, CardMedia, Grid, IconButton } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/HomeRounded";
import About from "@material-ui/icons/InfoRounded";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { isAuth, signout } from "../../helper/authHelper";
import Logo from "../../images/logo.png";

const useStyles = makeStyles((theme) => ({
  iconName: {
    // textDecoration: blur,
    textDecoration: "solid",
    color: "white",
  },
  desctopOptions: {
    margin: theme.spacing(0, 0, 0, 2.1),
  },
  headerData: {
    float: "right",
  },
  header: {
    backgroundColor: "white",
  },
  media: {
    width: 150,
    height: 80,
    marginTop: 4,
    cursor: "pointer",
  },
  homeLink: {
    textDecoration: "none",
    color: "#716e6e",
    fontFamily: "system-ui",
  },
}));

const menuId = "primary-search-account-menu";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const classes = useStyles();
  const history = useHistory();
  const location = history.location;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const signOut = () => {
    window.location.reload();
    signout();
  };

  const loginToHome = () => {
    history.push("/");
    window.location.reload();
  };

  return (
    <>
      {/* {isAuth() ? null : <Redirect to="/" />} */}
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          classeName={classes.header}
          style={{ backgroundColor: "white", color: "black" }}
        >
          <Toolbar>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="h6">
                  {/* <Link to="/home" className={classes.iconName}>

                  </Link> */}
                  <CardMedia
                    className={classes.media}
                    image={Logo}
                    title="Contemplative Reptile"
                    onClick={() =>
                      isAuth() ? history.push("/") : history.push("/")
                    }
                  />
                </Typography>
              </Grid>
              <Grid item xs={6}>
                {/* {isAuth()} */}
                {isAuth() ? (
                  <Box className={classes.headerData} justifyContent="flex-end">
                    <IconButton
                      color="default"
                      className={classes.desctopOptions}
                    >
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
                      color="default"
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
                        <PopupState>
                          {(popupState) => (
                            <React.Fragment>
                              <Button
                                variant="contained"
                                style={{
                                  backgroundColor: "#00b074",
                                  color: "white",
                                }}
                                {...bindTrigger(popupState)}
                              >
                                <Grid
                                  container
                                  spacing={1}
                                  style={{ marginTop: "2px" }}
                                >
                                  <Grid item>
                                    <AccountCircle />
                                  </Grid>
                                  <Grid item>
                                    <Typography>{isAuth().name}</Typography>
                                  </Grid>
                                </Grid>
                              </Button>
                              <Menu {...bindMenu(popupState)}>
                                <MenuItem onClick={popupState.close}>
                                  Profile
                                </MenuItem>
                                <MenuItem onClick={popupState.close}>
                                  <Typography onClick={signOut}>
                                    LogOut
                                  </Typography>
                                </MenuItem>
                              </Menu>
                            </React.Fragment>
                          )}
                        </PopupState>
                      </Grid>
                    </IconButton>
                  </Box>
                ) : (
                  <>
                    {location.pathname == `/otpauth` ||
                    location.pathname == `/login` ||
                    location.pathname == `/signup` ? (
                      <IconButton
                        color="default"
                        className={classes.loginDesctopOptions}
                        style={{ float: "right" }}
                        onClick={loginToHome}
                      >
                        <Grid container direction="column">
                          <Grid item>
                            <HomeIcon />
                          </Grid>
                          <Grid item>
                            <Typography className={classes.homeLink}>
                              Home
                            </Typography>
                          </Grid>
                        </Grid>
                      </IconButton>
                    ) : (
                      <Box
                        className={classes.headerData}
                        justifyContent="flex-end"
                      >
                        <IconButton
                          color="default"
                          className={classes.desctopOptions}
                        >
                          <Grid container direction="column">
                            <Link to="/" className={classes.homeLink}>
                              <Grid item>
                                <HomeIcon />
                              </Grid>
                              <Grid item>
                                <Typography>Home</Typography>
                              </Grid>
                            </Link>
                          </Grid>
                        </IconButton>
                        <IconButton
                          color="default"
                          className={classes.desctopOptions}
                        >
                          {/* <Grid containe xs={12}></Grid> */}
                          <Grid container direction="column">
                            <Grid item>
                              <About />
                            </Grid>
                            <Grid item>
                              <Typography>
                                <Link to="/" className={classes.homeLink}>
                                  About
                                </Link>
                              </Typography>
                            </Grid>
                          </Grid>
                        </IconButton>
                        <Button
                          // variant="outlined"
                          className={classes.desctopOptions}
                          style={{
                            border: "1px solid rgb(65 171 10 / 50%)",
                            color: "#00b074",
                          }}
                          variant="outlined"
                          color="primary"
                          href="/otpauth"
                        >
                          <Grid
                            container
                            spacing={1}
                            style={{ marginTop: "2px" }}
                          >
                            <Grid item>
                              <AccountCircle />
                            </Grid>
                            <Grid item>
                              <Typography>Sign In</Typography>
                            </Grid>
                          </Grid>
                        </Button>
                      </Box>
                    )}
                  </>
                )}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}
