import React, { useEffect, useState } from "react";
import "../../Styles/LandingPage.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { lightGreen } from "@material-ui/core/colors";
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
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
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
  const [allLocationData, setAllLocationData] = useState([]);
  const history = useHistory();

  const CurrentWeather = () => {
    // useEffect(() => {
    //   const { first_name } = isAuth();
    //   Axios.get(`${process.env.REACT_APP_API_URI}/getuserlocation`, {
    //     params: {
    //       first_name,
    //     },
    //   })
    //     .then((userLocation) => {
    //       console.log("user location", userLocation.data);
    //       const { district } = userLocation.data;
    //       const API_KEY = "9bce70d79e57b879afe5f1cf9352b137";
    //       const URL = "http://api.openweathermap.org/data/2.5";
    //       const query = "Telangana";
    //       const weatherURL = `${URL}/weather?q=${query}&units=metric&APPID=${API_KEY}`;
    //       // let api = `${URL}/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    //       fetch(weatherURL)
    //         .then((res) => res.json())
    //         .then((data) => {
    //           if (data && data.cod === 200) {
    //             setWeather(...weather, [data]);
    //           }
    //           console.log("Data List Loadedes", data);
    //         });
    //     })
    //     .catch((err) => console.log(err));
    // }, []);
    useEffect(() => {
      console.log("allLocationData", allLocationData);
      const { longitude, latitude, district, country, state } = allLocationData;
      const API_KEY = "9bce70d79e57b879afe5f1cf9352b137";
      const URL = "https://api.openweathermap.org/data/2.5";
      // const query = "Karnataka";
      const query = state;
      const weatherURL = `${URL}/weather?q=${query}&units=metric&APPID=${API_KEY}`;
      // const weatherURL = `${URL}/weather?q=${query}&lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
      fetch(weatherURL)
        .then((res) => res.json())
        .then((data) => {
          if (data && data.cod === 200) {
            console.log("response dadta", data);
            setWeather([...weather, data]);
            // setWeather(data);
            // alert("hii");
          }
          console.log("Data List Loadedes", data);
          // setWeather([...weather, data]);
        })
        .catch((err) => console.log(err));
    }, [allLocationData]);
    console.log("wEEEEEEEEEEEEEEe", weather);

    const handleClick = () => {
      const { longitude, latitude, district, country, state } = allLocationData;

      history.push(
        `/forecast?longitude=${longitude}&latitude=${latitude}&state=${state}`
      );
    };

    return (
      <Grid className={classes.mainGrid}>
        {weather ? (
          <>
            {weather &&
              weather.slice(0, 1).map(
                (value, index) => (
                  console.log("index data", value),
                  (
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
                          <Grid item>
                            {/* {value.base} */}
                            {value.main.temp}
                            °C
                          </Grid>
                          <Grid item>
                            <CardMedia
                              className={classes.media}
                              image={`https://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`}
                              title="Paella dish"
                            />
                          </Grid>
                        </Grid>
                        <Grid item className={classes.description}>
                          {value.weather[0].description}
                        </Grid>
                        <Grid item className={classes.description}>
                          {value.name}, {value.sys.country}
                        </Grid>
                      </Grid>
                    </Paper>
                  )
                )
              )}
          </>
        ) : null}

        {/* {weather ? (
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
        )} */}
      </Grid>
    );
  };

  const userDatas = (userDatails) => {
    console.log("search card inside", userDatails);
    setAllLocationData(userDatails);
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
      <UserLocation userDatas={userDatas} />
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
                    <div style={{ marginRight: "5px" }}>
                      <Autocomplete
                        id="combo-box-demo"
                        options={Crops}
                        getOptionLabel={(option) => option.label}
                        style={{ width: 205 }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Select Crops"
                            variant="filled"
                          />
                        )}
                      />
                    </div>

                    <div style={{ marginRight: "5px" }}>
                      <Autocomplete
                        id="combo-box-demo"
                        options={Machines}
                        getOptionLabel={(option) => option.label}
                        style={{ width: 200 }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Select Machines"
                            variant="filled"
                          />
                        )}
                      />
                    </div>
                    <div style={{ marginRight: "10px" }}>
                      <Autocomplete
                        id="combo-box-demo"
                        options={Distance}
                        getOptionLabel={(option) => option.label}
                        style={{ width: 220 }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Select Distance"
                            variant="filled"
                          />
                        )}
                      />
                    </div>
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
    </>
  );
}

