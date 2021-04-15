import React from "react";
import { Redirect } from "react-router";
import { isAuth } from "../../helper/authHelper";
import BackGround from "./Background/Background";

function ForecastWeater() {
  return (
    <>
    {isAuth() ? null : <Redirect to="/"/> }
      <BackGround />
    </>
  );
}

export default ForecastWeater;