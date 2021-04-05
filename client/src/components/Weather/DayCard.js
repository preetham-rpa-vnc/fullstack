import React from "react";
import "./Card.css";
var moment = require("moment");

const Card = ({ day, key }) => {
  console.log("dddddddddday", day);
  // Props: day, key(index)

  // render() {
  let newDate = new Date();
  const weekday = day.dt * 1000;
  console.log("day.dt", day.dt);
  console.log("week day", weekday);
  newDate.setTime(weekday);

  const imgURL = "owf owf-" + day.weather[0].id + " owf-5x red";

  // const farenheit = (parseInt(day.main.temp) - 273.15) * (9/5) + 32

  // console.log("fareheit", farenheit);

  return (
    <div className="col-auto" style={{ textAlign: "-webkit-center" }}>
      <div className="card">
        <h3 className="card-title">{moment(newDate).format("dddd")}</h3>
        <p className="text-muted">
          {moment(newDate).format("MMMM Do, h:mm a")}
        </p>
        <i className={imgURL}></i>
        <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt={day.weather[0].description}/>
        <h2>{Math.round(day.main.temp)} °c</h2>
        <div className="card-body">
          <p className="card-text">{day.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
  // }
};

export default Card;
