import React from "react";
import HamburgerMenu from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { Button, SwipeableDrawer } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Footer from "../Footer/Footer";
import SeedOptions from "../SeedOptions/SeedOptions";
import Header from "../Header/Header";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  //   fullList: {
  //     width: "auto",
  //   },
  //   hamburgerMenu: { 
  //     color: "#fff",
  //   },
  divider: {
    backgroundColor: "rgb(0, 176, 116)",
    margin: theme.spacing(1.4, 0.7, 0.7, 0.7),
    maxHeight: 4,
    padding: "0px 10px 4px 10px",
  },
}));

function HamburgerIcon() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
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
      <Divider />
      <SeedOptions />
      <Divider className={classes.divider} />
      <Footer />
    </div>
  );

  return (
    <div>
      <Button
        variant="contained"
        size="large"
        style={{ background: "rgb(0, 176, 116)" }}
        onClick={toggleDrawer("left", true)}
      >
        <HamburgerMenu
          style={{ color: "#fff" }}
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
    </div>
  );
}

export default HamburgerIcon;
