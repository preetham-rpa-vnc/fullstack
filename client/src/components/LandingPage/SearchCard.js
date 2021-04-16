import React, { useEffect, useState } from "react";
import "../../Styles/LandingPage.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";

import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import HamburgerMenu from "../HamburgerMenuItems/HamburgerMenuItems";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { lightGreen } from "@material-ui/core/colors";
import { CardMedia, Paper } from "@material-ui/core";
import Axios from "axios";
import { isAuth } from "../../helper/authHelper";
import { useHistory } from "react-router";
import UserLocation from "../UserLocation/UserLocation";

const Distance = [
  { label: "20km", value: 1 },
  { label: "30km", value: 2 },
  { label: "40km", value: 3 },
  { label: "5km", value: 4 },
  { label: "6km", value: 5 },
  { label: "7km", value: 6 },
];
const Crops = [
  { label: "Wheat", value: 355 },
  { label: "Rice", value: 54 },
  { label: "Tomato", value: 43 },
  { label: "Potato", value: 61 },
  { label: "Groundnut", value: 965 },
  { label: "Sunflower", value: 46 },
  { label: "oats", value: 58 },
];

const Machines = [
  { label: "Rotavator", value: 3 },
  { label: "Spraying Pump", value: 2 },
  { label: "Tractor", value: 1 },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  temp: {
    fontWeight: "bold",
    fontSize: theme.spacing(2.5),
    justifyContent: "center",
    color: "#6b4747",
  },
  description: {
    fontWeight: "bolder",
    fontFamily: "system-ui",
    fontSize: theme.spacing(2),
    color: "#5a1515",
  },
  mainGrid: {
    marginLeft: "auto",
    marginRight: "32px",
  },
  media: {
    width: "55px",
    padding: "13px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SearchCard() {
  const classes = useStyles();
  const [weather, setWeather] = useState([]);
  const history = useHistory();
  const userDatas = (userDatails) => {
    console.log("search card inside", userDatails);
    Axios.post(`${process.env.REACT_APP_API_URI}/loginuserdata`, userDatails)
      .then((userRes) => {
        window.location.reload();
        const { messsage } = userRes.data;
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
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
                {isAuth() ? <>{CurrentWeather()}</> : null}
              </div>
            </Grid>
          </Grid>
          {/* <Grid container spacing={12}>
            <Grid item lg={1} xs={0} md={1}>
            <Grid item lg={3} xs={2} md={3}>
              <HamburgerMenu />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item lg={4} xs={7} md={4}>
              <h1 className="search-header-txt">Search Crop near you</h1>
            </Grid>
            {isAuth() ? <>{CurrentWeather()}</> : null}
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
        </Grid> */}

          <Grid container spacing={14}>
            <Grid item lg={3} xs={0} md={3}></Grid>
            <Grid item lg={7} xs={12} md={7}>
              <div>
                <OutlinedInput
                  style={{ backgroundColor: "white", width: "100%" }}
                  id="outlined-adornment-amount"
                  endAdornment={
                    <InputAdornment position="end">
                      <div style={{ marginRight: "10px" }}>
                        <Autocomplete
                          id="combo-box-demo"
                          options={Crops}
                          getOptionLabel={(option) => option.label}
                          style={{ width: 200 }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Select Crops"
                              variant="outlined"
                            />
                          )}
                        />
                      </div>

                      <div style={{ marginRight: "10px" }}>
                        <Autocomplete
                          id="combo-box-demo"
                          options={Machines}
                          getOptionLabel={(option) => option.label}
                          style={{ width: 200 }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Select Machines"
                              variant="outlined"
                            />
                          )}
                        />
                      </div>
                      <div style={{ marginRight: "10px" }}>
                        <Autocomplete
                          id="combo-box-demo"
                          options={Distance}
                          getOptionLabel={(option) => option.label}
                          style={{ width: 300 }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Select Distance from your place"
                              variant="outlined"
                            />
                          )}
                        />
                      </div>

                      <Button
                        variant="contained"
                        className="search-btn"
                        style={{ marginLeft: "15px" }}
                      >
                        Search
                      </Button>
                    </InputAdornment>
                  }
                  labelWidth={60}
                />
              </div>
            </Grid>
          </Grid>

          {/* <Grid container spacing={12}>
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
          // </Grid> */}
        </div>
      </div>
      <UserLocation userDatas={userDatas} />
    </>
  );

  const CurrentWeather = () => {
    useEffect(() => {
      const { first_name } = isAuth();
      Axios.get(`${process.env.REACT_APP_API_URI}/getuserlocation`, {
        params: {
          first_name,
        },
      })
        .then((userLocation) => {
          console.log("user location", userLocation.data);
          const { district } = userLocation.data;
          const API_KEY = "9bce70d79e57b879afe5f1cf9352b137";
          const URL = "https://api.openweathermap.org/data/2.5";
          const query = district;
          const weatherURL = `${URL}/weather?q=${query}&units=metric&APPID=${API_KEY}`;
          fetch(weatherURL)
            .then((res) => res.json())
            .then((data) => {
              if (data && data.cod === 200) {
                setWeather(...weather, [data]);
              }
              console.log("Data List Loaded", data);
            });
        })
        .catch((err) => console.log(err));
    }, []);

    console.log("wEEEEEEEEEEEEEEe", weather);

    const handleClick = () => {
      history.push("/forecast");
    };

    return (
      <Grid className={classes.mainGrid}>
        {weather ? (
          <>
            {weather &&
              weather.map((data, index) => (
                <Paper
                  elevation={3}
                  className={classes.paper}
                  key={index}
                  onClick={handleClick}
                >
                  <Grid container direction="column" spacing={0}>
                    <Grid
                      item
                      container
                      className={classes.temp}
                      direction="row"
                      spacing={2}
                    >
                      <Grid item>{data.main.temp}°C</Grid>
                      <Grid item>
                        <CardMedia
                          className={classes.media}
                          image={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                          title="Paella dish"
                        />
                      </Grid>
                    </Grid>
                    <Grid item className={classes.description}>
                      {data.weather[0].description}
                    </Grid>
                    <Grid item className={classes.description}>
                      {data.name}, {data.sys.country}
                    </Grid>
                  </Grid>
                </Paper>
              ))}
          </>
        ) : (
          <div>
            <h1>please turn on you location</h1>
          </div>
        )}
      </Grid>
    );
  };

  console.log("weather alll data", weather);
}
