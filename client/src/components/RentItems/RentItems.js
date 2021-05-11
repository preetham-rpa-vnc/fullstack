import react, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "react-multi-carousel/lib/styles.css";
import SideBar from "./SideBar/SideBar";
import Carousel from "./Carouse/Carousel";
import Machineries from "./Machineries/Machineries";
// import Carousel from "react-multi-carousel";

const useStyles = makeStyles((theme) => ({
  headingOne: {
    fontWeight: 600,
    fontSize: 30,
    fontFamily: "Inter",
    margin: "0px 0px -17px 16px",
    marginBottom: "-17px",
  },
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
    cursor: "pointer",
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`,
  },
  heading: {
    fontWeight: "bold",
  },
}));

const RentItems = () => {
  const classes = useStyles();

  return (
    <Grid container xs={12} style={{ marginTop: "20px" }}>
      <Grid item xs={12} sm={2} md={2}>
        <SideBar />
      </Grid>

      <Grid item container xs={12} sm={10} md={10} direction="column">
        <Grid container direction="column">
          <Grid item>
            <Typography className={classes.headingOne}>
              Near Bengaluru
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Carousel />
          </Grid>
        </Grid>

        <Grid item container>
          {/* <Machineries /> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RentItems;
