import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import useStyles from "./Style"


function Forecast() {
  const classes = useStyles();
  return (
    <>
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
      </Grid>
    </>
  );
}

export default Forecast;
