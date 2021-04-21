import React from "react";
import { Redirect } from "react-router";
import { isAuth } from "../../helper/authHelper";
import BackGround from "./Background/Background";
import queryString from "query-string";

function ForecastWeater({ location }) {
  const weatherData = queryString.parse(location.search);
  return (
    <>
      {isAuth() ? null : <Redirect to="/" />}
      <BackGround weatherData={weatherData} />
    </>
  );
}

export default ForecastWeater;
