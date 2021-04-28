import React, { Fragment as div, useEffect, useState } from "react";
import "../../Styles/LandingPage.css";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { lightGreen } from "@material-ui/core/colors";
import MenuIcon from "@material-ui/icons/Menu";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import Axios from "axios";
// import Button from "@material-ui/core/Button";
import HamburgerMenu from "../HamburgerMenuItems/HamburgerMenuItems";
import { CardMedia, Paper } from "@material-ui/core";
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
  { label: "oats", value: 58 }
];

const Machines = [
  { label: "Rotavator", value: 3 },
  { label: "Spraying Pump", value:2 },
  { label: "Tractor", value: 1 }
]
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
  // margin: {
  //   margin: theme.spacing(1),
  // },
  // extendedIcon: {
  //   marginRight: theme.spacing(1),
  // },
  searchItems: {
    borderColor: "red",
    justifyContent: "center",
  },
  container: {
    textAlign: "-webkit-center",
  },
}));

const defaultProps = {
  bgcolor: "background.paper",
  borderColor: "#f1f1f1",
  // borderColor: "#3f51b5",
  m: 1,
  border: 1,
  style: { width: "fit-content" },
};
export default function SearchCard(searchResult) {
  const classes = useStyles();
  const [weather, setWeather] = useState([]);
  const [allLocationData, setAllLocationData] = useState([]);
  const history = useHistory();

 
  const [searchData, setSearchData] = useState({
    manufacture: "",
    crop: "",
  });
  const [manufactures, setManufactures] = useState([]);
  const [crops, setCrops] = useState([]);
  const [searchProducts, setSearchProducts] = useState({});

  const { manufacture, crop } = searchData;

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URI}/getallcrops`).then(
      (result) => {
        console.log("@@@@@@@@@@@@@", result);
        setCrops(result.data.crops);
      }
    );
  }, []);

  const handleChange = (text) => (event) => {
    console.log("event.targer.value", event.target.innerText);
    setSearchData({ ...searchData, [text]: event.target.innerText });
  };

  const handleClick = () => {
    console.log("last data", searchData);
    Axios.get(`${process.env.REACT_APP_API_URI}/findsearchdata`, {
      params: searchData,
    })
      .then((products) => {
        console.log("@@@@@@@@@@@@", products.data);
        if (!products.data) {
          alert("Product Null");
        }
        setSearchProducts(...products.data);
        searchResult(products.data);
        // setSearchData({ ...searchData, manufacture: "", crop: "" });
      })
      .catch((err) => console.log(err));
  };

  console.log("search data", searchProducts);


  const CurrentWeather = () => {
    // useEffect(() => {
    //   const { name } = isAuth();
    //   Axios.get(`${process.env.REACT_APP_API_URI}/getuserlocation`, {
    //     params: {
    //       name,
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
      const { longitude, latitude, district, postcode } = allLocationData;
      const API_KEY = "9bce70d79e57b879afe5f1cf9352b137";
      const URL = "https://api.openweathermap.org/data/2.5";
      const query =postcode;
      // const weatherURL = `${URL}/weather?q=${query}&units=metric&APPID=${API_KEY}`;
      const weatherURL = `${URL}/weather?q=${query}&lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
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
        });
    }, [allLocationData]);
    console.log("wEEEEEEEEEEEEEEe", weather);

    const handleClick = () => {
      const { longitude, latitude, district, country } = allLocationData;

      history.push(
        `/forecast?longitude=${longitude}&latitude=${latitude}&district=${district}`
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
          <div container className={classes.container}>
      {/* <Grid container direction="column" spacing={4}> */}
        <Grid item>
          <Box borderRadius={16} {...defaultProps} p={2}>
            <Grid
              container
              spacing={3}
              alignItems="center" 
              className={classes.searchItems}
            >
              <Grid item>
                <Autocomplete
                  id="combo-box-demo"
                  options={crops}
                 
                  getOptionLabel={(option) => option.crop_name}
                  style={{ width: 200 }}
                  onChange={handleChange("crop")}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select Crop"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item>
                <Autocomplete
                  id="combo-box-demo"
                  options={manufactures}
                  
                  getOptionLabel={(option) => option.manuf_name}
                  style={{ width: 210 }}
                  onChange={handleChange("manufacture")}
                  value={manufacture}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select Machineries"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item>
                <Autocomplete
                  id="combo-box-demo"
                  options={Distance}
                  getOptionLabel={(option) => option.label}
                  // getOptionLabel={(option) => option.manuf_name}
                  style={{ width: 200 }}
                  // onChange={handleChange("manufacture")}
                  // value={manufacture}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select Distance"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  size="large"
                  // color="primary"
                  className={classes.margin}
                  onClick={handleClick}
                  style={{ backgroundColor: "#30a05f", color: "white" }}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      {/* </Grid> */}
    </div>
  
        </div>
      </div>
    </>
  );
}