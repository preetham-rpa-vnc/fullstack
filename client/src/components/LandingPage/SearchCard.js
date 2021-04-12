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
import { CardMedia, Paper } from "@material-ui/core";
import Axios from "axios";
import { isAuth } from "../../helper/authHelper";
import { useHistory } from "react-router";
import UserLocation from "../UserLocation/UserLocation";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  // paper: {
  //   padding: theme.spacing(2),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  // },
  paper: {
    height: 100,
    background: "rgb(255 255 255 / 12%)",
    textAlign: "center",
    borderRadius: 10,
    padding: "10px 20px 0px 20px",
    cursor: "pointer",
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
}));

export default function SearchCard() {
  const classes = useStyles();
  const [weather, setWeather] = useState([]);
  const history = useHistory();

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

  const userDatas = (userDatails) => {
    console.log("search card inside", userDatails);
    Axios.post(`${process.env.REACT_APP_API_URI}/loginuserdata`, userDatails)
      .then((userRes) => {
        window.location.reload();
        const { messsage } = userRes.data;
      })
      .catch((err) => console.log(err));
  };

  console.log("weather alll data", weather);
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
            {isAuth() ? <>{CurrentWeather()}</> : null}
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
      <UserLocation userDatas={userDatas} />
    </>
  );
}
