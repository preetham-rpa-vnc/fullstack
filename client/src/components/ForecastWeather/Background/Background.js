import React from "react";
import { Box, Fade, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Weather from "../Weather/Weather";
import Forecast from "../Forecast/Forecast";

import bgImage1 from "../../../Assets/backgroundWeather1.jpg";
import bgImage2 from "../../../Assets/backgroundWeather2.jpg";
const useStyles = makeStyles((theme) => ({
  backGround: {
    backgroundImage: `url(${bgImage1})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    minHeight: "85vh",
    backgroundColor: "#cccccc",
    filter: "blur(0px)",
    position: "relative",
    padding: theme.spacing(4.4, 6.3, 0, 6.3),
  },
}));

function Background() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.backGround}>
        <Weather />
        <Forecast />
      </div>
    </>
  );
}

export default Background;
