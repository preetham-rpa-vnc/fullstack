import axios from "axios";
import React from "react";
import { useState } from "react";

const API_KEY = "9bce70d79e57b879afe5f1cf9352b137";
const URL = "https://api.openweathermap.org/data/2.5";

const Weather = ({ location }) => {
  // const id = queryString.parse(location.search);
  // console.log("idsssssssss", id);
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${URL}/weather?q=${query}&units=metric&APPID=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
          // const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))

          // console.log("dialy Data", dailyData);

          console.log("result@@@@@@@@@@@@@@@sssSS", data);
          setWeather(data);
          setQuery("");
        });
    }
  };

  const dateBuilder = (dates) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ];

    let day = days[dates.getDay()];
    let date = dates.getDate();
    let month = months[dates.getMonth()];
    let year = dates.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>weather</h1>
      <input
        type="text"
        name=""
        id=""
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyPress={search}
      />
      {typeof weather.main != "undefined" ? (
        <>
          <div>
            {weather.name}, {weather.sys.country}
          </div>
          <div>{dateBuilder(new Date())}</div>
          <div>
            <h2>{Math.round(weather.main.temp)}°c</h2>
          </div>
          <div>
            <h2>{weather.weather[0].main}</h2>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <h2>{weather.weather[0].description}</h2>
          </div>
        </>
      ) : (
        <div>{weather.message}</div>
      )}
    </div>
  );
};

export default Weather;
