import React, { useEffect, useState } from "react";
import "../../Styles/LandingPage.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import HamburgerMenu from "../HamburgerMenuItems/HamburgerMenuItems";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function SearchCard() {
  const classes = useStyles();
  return (
    <div className="pr-0 pl-0">
      <div className="img-container">
        <Grid container spacing={12}>
          <Grid item lg={1} xs={0} md={1}></Grid>
          <Grid item lg={3} xs={2} md={3}>
            <HamburgerMenu />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item lg={4} xs={7} md={4}>
            <h1 className="search-header-txt">Search Crop near you</h1>
          </Grid>
          <Grid item xs={3}>
            <div className="weather-search-div">
              <span className="degree-number">14°</span>
              <span className="degree-txt">C</span>
              <CloudQueueIcon className="icon-style" />
              <p className="weather-text-style">Cloudy</p>
              <p className="weather-text-style">B'lore, India</p>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={12}>
          <Grid item lg={3} xs={0} md={3}></Grid>
          <Grid item lg={7} xs={12} md={7}>
            <OutlinedInput
              style={{ backgroundColor: "white", width: "100%" }}
              id="outlined-adornment-amount"
              endAdornment={
                <InputAdornment position="end">
                  <Button variant="contained" className="search-btn">
                    Search
                  </Button>
                </InputAdornment>
              }
              labelWidth={60}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
