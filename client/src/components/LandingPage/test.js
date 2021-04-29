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
import { Box, CardMedia, Paper, Typography } from "@material-ui/core";
import Axios from "axios";
import { isAuth } from "../../helper/authHelper";
import { useHistory } from "react-router";
import UserLocation from "../UserLocation/UserLocation";
import bgImage3 from "../../Assets/searchBackground.jpg";

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
    margin: "-44px 85px 0 -78px",
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
  // mainGrid: {
  //   width: 155,
  //   margin: "16px -2px 0 -40px",
  // },
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
  container: {
    // backgroundImage: `url(${bgImage3})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    minHeight: "400px",
    backgroundColor: "#fff",
    filter: "blur(0px)",
    position: "relative",
  },
  boxOne: {
    margin: "0px 0 15px 0px",
    width: "100%",
    borderColor: "#e2e2e2",
    background: "rgb(245 245 245 / 38%)",
    borderWidth: "1px 1px 1px",
    borderStyle: "solid",
    borderImage: "initial",
  },
}));

export default function SearchCard() {
  const classes = useStyles();
  const [weather, setWeather] = useState([]);
  const [allLocationData, setAllLocationData] = useState([]);
  const history = useHistory();

  const CurrentWeather = () => {
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
                            {Math.round(value.main.temp)}
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

  const [searchData, setSearchData] = useState({
    manufacture: "",
    crop: "",
  });
  const [manufactures, setManufactures] = useState([]);
  const [crops, setCrops] = useState([]);
  const [searchProducts, setSearchProducts] = useState({});

  const { manufacture, crop } = searchData;

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URI}/getsearchkeys`).then(
      (result) => {
        console.log("@@@@@@@@@@@@@", result);
        setManufactures(result.data.manuf);
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
        // searchResult(products.data);
        // setSearchData({ ...searchData, manufacture: "", crop: "" });
      })
      .catch((err) => console.log(err));
  };

  console.log("search data", searchProducts);

  const allCrops = crops.map((option) => {
    const firstLetter = option.crop_name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });
  const allManufactures = manufactures.map((option) => {
    const firstLetter = option.manuf_name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });
  return (
    <>
      <UserLocation userDatas={userDatas} />
      <Box className={classes.container}>
        <Grid container xs={12} style={{ padding: 70 }}>
          <Grid item xs={2}>
            <HamburgerMenu />
          </Grid>

          <Grid item xs={8}>
            <Grid
              container
              direction="column"
              spacing={4}
              style={{ alignItems: "center", marginTop: 10 }}
            >
              <Grid item>
                <Typography variant="h4">
                  <Box
                    fontWeight="fontWeightBold"
                    m={1}
                    style={{ fontFamily: "system-ui" }}
                  >
                    Search Relevance Machines
                  </Box>
                </Typography>
              </Grid>
              <Grid item>
                <Box borderRadius={10} className={classes.boxOne}>
                  <Grid
                    container
                    spacing={1}
                    // alignItems="center"
                    className={classes.searchItems}
                    style={{ justifyContent: "center", padding: 10 }}
                  >
                    <Grid item>
                      <Autocomplete
                        id="grouped-demo"
                        options={allCrops.sort(
                          (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
                        )}
                        groupBy={(option) => option.firstLetter}
                        getOptionLabel={(option) => option.crop_name}
                        style={{ width: 180 }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Crop"
                            variant="outlined"
                          />
                        )}
                      />
                    </Grid>
                    <Grid item>
                      <Autocomplete
                        id="grouped-demo"
                        options={allManufactures.sort(
                          (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
                        )}
                        groupBy={(option) => option.firstLetter}
                        getOptionLabel={(option) => option.manuf_name}
                        style={{ width: 180 }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Manufacturer"
                            variant="outlined"
                          />
                        )}
                      />
                    </Grid>

                    <Grid item>
                      <Autocomplete
                        id="grouped-demo"
                        // options={option}
                        // groupBy={(option) => option.firstLetter}
                        // getOptionLabel={(option) => option.manuf_name}
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        style={{ width: 180 }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="State"
                            variant="outlined"
                          />
                        )}
                      />
                    </Grid>
                    {/* 
                    <Grid item>
                      <Autocomplete
                        id="combo-box-demo"
                        options={crops}
                        getOptionLabel={(option) => option.crop_name}
                        style={{ width: 230 }}
                        onChange={handleChange("crop")}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Select Crop"
                            variant="outlined"
                          />
                        )}
                      />
                    </Grid> */}

                    <Grid item>
                      <Button
                        variant="contained"
                        size="large"
                        // color="primary"
                        className={classes.margin}
                        onClick={handleClick}
                        style={{
                          backgroundColor: "#30a05f",
                          color: "white",
                          margin: 10,
                        }}
                      >
                        Search
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={1} sm={2}>
            {isAuth() ? <>{CurrentWeather()}</> : null}
          </Grid>
        </Grid>
      </Box>
      {/* <UserLocation userDatas={userDatas} />
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
      </div> */}
    </>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "10km t0 20km" },
  { title: "20km to 40km", year: 1972 },
  { title: "40km to 100km", year: 1974 },
  { title: "100km to 200km", year: 2008 },
];
