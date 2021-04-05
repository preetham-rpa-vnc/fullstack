import React, { useState } from "react";
import Card from "./DayCard";

const ForcasteWeather = () => {
  const [days, setDays] = useState([]);

  const API_KEY = "9bce70d79e57b879afe5f1cf9352b137";
  const URL = "https://api.openweathermap.org/data/2.5";
  const query = "Kerala";

  // componentDidMount = () => {};
  useState(() => {
    // const weatherURLs = `http://api.openweathermap.org/data/2.5/forecast?${state.location},${state.country}&units=${state.degreeType}&APPID=${state.API_KEY}`;
    const weatherURL = `${URL}/forecast?q=${query}&units=metric&APPID=${API_KEY}`;
    fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => {
        console.log("Data List Loaded", data);
        const dailyData = data.list.filter((reading) =>
          reading.dt_txt.includes("18:00:00")
        );
        setDays(dailyData);
      });
  }, []);

  const formatCards = () => {
    console.log("days", days);
    return days.map((day, index) => <Card day={day} key={index} />);
  };

  return (
    <div className="container">
      <h5 className="display-5 text-muted">Kerala, IN</h5>
      <div
        className="row justify-content-center"
        style={{ textAlignLast: "center" }}
      >
        {formatCards()}
      </div>
    </div>
  );
};

export default ForcasteWeather;
