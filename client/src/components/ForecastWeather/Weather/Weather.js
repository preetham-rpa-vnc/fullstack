import React from "react";
import { Box, Fade, Grid, Paper, Typography } from "@material-ui/core";
import useStyle from "./Style";

function Weather() {
  const classes = useStyle();
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={7}>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h3" className={classes.place}>
              Malappuram, Keral, India
            </Typography>
            <Grid container className={classes.tempGrid}>
              <Grid item xs={6}>
                <Box className={classes.temprature}>30°c</Box>
              </Grid>
              <Grid item xs={6}>
                <Box>
                  <Grid
                    container
                    direction="column"
                    spacing={1}
                    className={classes.weatherAll}
                  >
                    <Grid item>humidity: 12%</Grid>
                    <Grid item>wind: 100km/h</Grid>
                    <Grid item>rain: 65%</Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h5" className={classes.date}>
                  Saturdy April 03/2021
                </Typography>
              </Grid>
              <Grid item xs={6} className={classes.time}>
                10:10 am
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper elevation={3} className={classes.paper}></Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Weather;
