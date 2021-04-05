import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import HamburgerMenu from "@material-ui/icons/Menu";
import Footer from "./Footer/Footer";
import SeedOptions from "./SeedOptions/SeedOptions";
import Header from "./Header/Header";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  //   fullList: {
  //     width: "auto",
  //   },
  hamburgerMenu: {
    color: "#fff",
  },
  divider: {
    backgroundColor: "rgb(0, 176, 116)",
    margin: theme.spacing(1.4, 0.7, 0.7, 0.7),
    maxHeight: 4,
    padding: "0px 10px 4px 10px",
  },
}));

export default function HamburgerMenuItems() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  //   const [anchorEl, setAnchorEl] = useState(null);
  //   const open = Boolean(anchorEl);
  //   const [needs, setNeeds] = useState("");
  //   const [item, setItem] = useState("");
  //   const handleClick = (event) => {
  //     setAnchorEl(event.currentTarget);
  //     console.log("event", event.currentTarget);
  //   };

  const toggleDrawer = (anchor, open) => (event) => {
    // if (
    //   event &&
    //   event.type === "keydown" &&
    //   (event.key === "Tab" || event.key === "Shift")
    // ) {
    //   return;
    // }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <Header />
      <SeedOptions />
      <Divider className={classes.divider} />
      <Footer />
    </div>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Button
          variant="contained"
          size="large"
          style={{ background: "rgb(0, 176, 116)" }}
          onClick={toggleDrawer("left", true)}
        >
          <HamburgerMenu
            className={classes.hamburgerMenu}
            onClick={toggleDrawer("left", true)}
          />
        </Button>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
