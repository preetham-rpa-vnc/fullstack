import React from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import useStyles from "./ProductStyle";
function Description() {
  const classes = useStyles();

  return (
    <Grid item container direction="column" style={{ padding: "70px" }}>
      <Grid item container>
        <Grid item>
          <Box borderBottom={0} className={classes.boxOne}>
            <Typography className={classes.boxHeader}>
              Product Details
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box borderBottom={0} className={classes.boxOne}>
            <Typography className={classes.boxHeader}>
              Company Profile
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid item>
        <Box className={classes.boxTwo}>
          <Typography
            style={{
              padding: "8px",
              color: "white",
              fontWeight: "bold",
              fontSize: "27px",
              fontVariantCaps: "all-small-caps",
            }}
          >
            Product Details
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <Box className={classes.boxThree}>
          {/* <Grid>
                <Grid></Grid>
                <Grid></Grid>
              </Grid> */}
          <Typography className={classes.thirdBox}>
            John Deere 5D series tractors range from 36HP to 55 HP. The 5D
            series tractors are multi utility in nature, efficient in both
            agricultural applications as well as heavy duty haulage. These
            tractors offer higher comfort in terms of wider operator station,
            neutral safety switch , and lower maintenance cost. John Deere 5D
            series includes PowerPro models and Value+++ models, offering our
            customers a wide range of tractors to select from.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Description;
