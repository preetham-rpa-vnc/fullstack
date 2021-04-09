import React, { useEffect, useState } from "react";
import { Box, Fade, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Weather from "../Weather/Weather";
import Forecast from "../Forecast/Forecast";
import Axios from "axios";
import { isAuth } from "../../../helper/authHelper";

import bgImage1 from "../../../Assets/backgroundWeather1.jpg";
import bgImage2 from "../../../Assets/backgroundWeather2.jpg";
const useStyles = makeStyles((theme) => ({
  backGround: {
    backgroundImage: `url(${bgImage1})`, 
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    minHeight: "85vh",
    backgroundColor: "#cccccc",
    filter: "blur(0px)",
    position: "relative",
    padding: theme.spacing(4.4, 6.3, 0, 6.3),
  },
}));

const fives = [
  {
    one: "one",
  },
  {
    two: "two",
  },
  {
    Three: "Three",
  },
  {
    Four: "Four",
  },
  {
    Five: "Five",
  },
];

function Background() {
  const classes = useStyles();
  const [weather, setWeather] = useState([]);
  const [foreCast, setForeCast] = useState();

  useEffect(() => {
    if (isAuth()) {
      console.log("is auth11");
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
          const weatherURL = `${URL}/forecast?q=${query}&units=metric&APPID=${API_KEY}`;
          fetch(weatherURL)
            .then((res) => res.json())
            .then((data) => {
              console.log("Data List Loaded", data);
              setWeather(data);
              const forecsatFiveDays = data.list.filter((reading) =>
                reading.dt_txt.includes("18:00:00")
              );

              setForeCast(forecsatFiveDays);
            });
        })
        .catch((err) => console.log(err.message));
    }
  }, []);

  return (
    <>
      <div className={classes.backGround}>
        <Weather weather={weather} />
        <Forecast foreCast={foreCast} />
      </div>
    </>
  );
}

export default Background;
