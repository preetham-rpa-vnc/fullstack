import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import useStyles from "./Style";
import moment from "moment";

function Forecast({ foreCast }) {
  console.log("fore cast", foreCast);
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={2} className={classes.mainGrid}>
        {foreCast && foreCast.map((day, index) => {
          let newDate = new Date();
          const weekday = day.dt * 1000;
          newDate.setTime(weekday);
          return (
            <Grid xs={2} item key={index}>
              <Paper className={classes.paper}>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <Typography className={classes.day}>
                      {moment(newDate).format("dddd")}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <img
                      style={{ margin: "-40px" }}
                      src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                      alt={day.weather[0].description}
                    />
                  </Grid>
                  <Grid item direction="column" className={classes.data}>
                    <Grid item>LO: {day.main.temp_max}</Grid>
                    <Grid item>HI: {day.main.temp_min}</Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      {/* 
      <Grid container spacing={2} className={classes.mainGrid}>
        <Grid xs={2} item>
          <Paper className={classes.paper}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography className={classes.day}>Sundy</Typography>
              </Grid>
              <Grid item>
                <img src="" alt="404" />
              </Grid>
              <Grid item direction="column" className={classes.data}>
                <Grid item>LO: 10</Grid>
                <Grid item>HI: 10</Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid xs={2} item>
          <Paper className={classes.paper}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography className={classes.day}>Sundy</Typography>
              </Grid>
              <Grid item>
                <img src="" alt="404" />
              </Grid>
              <Grid item direction="column" className={classes.data}>
                <Grid item>LO: 10</Grid>
                <Grid item>HI: 10</Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid xs={2} item>
          <Paper className={classes.paper}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography className={classes.day}>Sundy</Typography>
              </Grid>
              <Grid item>
                <img src="" alt="404" />
              </Grid>
              <Grid item direction="column" className={classes.data}>
                <Grid item>LO: 10</Grid>
                <Grid item>HI: 10</Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid xs={2} item>
          <Paper className={classes.paper}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography className={classes.day}>Sundy</Typography>
              </Grid>
              <Grid item>
                <img src="" alt="404" />
              </Grid>
              <Grid item direction="column" className={classes.data}>
                <Grid item>LO: 10</Grid>
                <Grid item>HI: 10</Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid xs={2} item>
          <Paper className={classes.paper}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography className={classes.day}>Sundy</Typography>
              </Grid>
              <Grid item>
                <img src="" alt="404" />
              </Grid>
              <Grid item direction="column" className={classes.data}>
                <Grid item>LO: 10</Grid>
                <Grid item>HI: 10</Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid xs={2} item>
          <Paper className={classes.paper}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography className={classes.day}>Sundy</Typography>
              </Grid>
              <Grid item>
                <img src="" alt="404" />
              </Grid>
              <Grid item direction="column" className={classes.data}>
                <Grid item>LO: 10</Grid>
                <Grid item>HI: 10</Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid> */}
    </>
  );
}

export default Forecast;
