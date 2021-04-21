import React, { useEffect, useState } from "react";
import {
  Box,
  CardMedia,
  Fade,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import useStyle from "./Style";
import moment from "moment";

function Weather({ weather }) {
  console.log("@@@@@@@@@@@@@@@22", weather);
  const classes = useStyle();

  const { city, list, forecsatFiveDays } = weather;
  const liveWeather = list;
  console.log("live weather", liveWeather);
  console.log("city", city);
 
  return (
    <div>
      {forecsatFiveDays &&
        forecsatFiveDays.slice(0, 1).map((day, index) => (
          <Grid container spacing={1}>
            <Grid item xs={7}>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h3" className={classes.place}>
                  {city.name ? city.name : null}, {city.country}
                </Typography>
                <Grid container className={classes.tempGrid}>
                  <Grid item xs={6}>
                    <Box className={classes.temprature}>
                      {Math.round(day.main.temp)}°c
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Grid
                        container
                        direction="column"
                        spacing={1}
                        className={classes.weatherAll}
                      >
                        <Grid item>humidity: {day.main.humidity}</Grid>
                        <Grid item>wind: {day.wind.speed}km/h</Grid>
                        <Grid item>rain: 65%</Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="h5" className={classes.date}>
                      {moment(new Date()).format("MMMM Do, dddd")}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} className={classes.time}>
                    {moment(new Date()).format("h:mm a")}
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={5}>
              {/* <i className={`owf owf-${day.weather[0].id} owf-5x`}></i> */}
              <CardMedia
                className={classes.media}
                image={`https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`}
                title={moment(new Date()).format("MMMM Do, dddd")}
              />
            </Grid>
          </Grid>
        ))}
    </div>
  );
}

export default Weather;