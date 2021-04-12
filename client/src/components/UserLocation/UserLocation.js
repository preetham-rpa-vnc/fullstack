import React, { useEffect, useState } from "react";
import { geolocated } from "react-geolocated";
import opencage from "opencage-api-client";
import Axios from "axios";
import { isAuth } from "../../helper/authHelper";

function UserLocation({ userDatas }) {
  const [userPlace, setUserPlace] = useState({});
  console.log("Enter inside first");

  useEffect(() => {
    const successfullLookup = (position) => {
      console.log("postion", position);
      if (isAuth()) {
        const { first_name } = isAuth();

        Axios.post(`${process.env.REACT_APP_API_URI}/checklocation`, {
          first_name,
        }).then((resp) => {
          // window.location.reload()
          console.log("##########################", resp);
          if (resp.data.country === null) {
            const { latitude, longitude } = position.coords;
            opencage
              .geocode({
                q: `${latitude}, ${longitude}`,
                key: "d20212f395f44fb6a9ac96ce354f4f0c",
              })
              .then((data) => {
                // console.log(JSON.stringify(data));
                console.log("data", data);
                if (data.status.code === 200) {
                  if (data.results.length > 0) {
                    var place = data.results[0];

                    const userPlace = {
                      user_id: isAuth().user_profile_id,
                      user_name: isAuth().first_name,
                      user_mobile: isAuth().user_mobile,
                      status: data.status.code,
                      continent: place.components.continent,
                      country: place.components.country,
                      state: place.components.state,
                      district: place.components.state_district,
                      // town: place.components.town,
                      postcode: place.components.postcode,
                      timezone: place.annotations.timezone.name,
                      formatted: place.formatted,
                    };
                    setUserPlace(userPlace);
                    userDatas(userPlace);
                  }
                } else if (data.status.code === 402) {
                  const message = "hit free trial daily limit";
                  console.log("hit free trial daily limit");
                  console.log(
                    "become a customer: https://opencagedata.com/pricing"
                  );
                  setUserPlace({ status: data.status.code });
                  userDatas({ status: data.status.code });
                } else {
                  // other possible response codes:
                  // https://opencagedata.com/api#codes
                  console.log("error", data.status.message);
                  setUserPlace(data.status.message);
                  userDatas(data.status.message);
                }
              })
              .catch((error) => {
                console.log("error", error.message);
              });
          }
        });
      }
    };

    const userDenied = (err) => {
      console.log("posposition", err);
      const { code, message } = err;
      if (code) {
        // const userPlace = {
        //   user_id: isAuth().user_profile_id,
        //   user_name: isAuth().first_name,
        //   user_mobile: isAuth().user_mobile,
        // };
        // setUserPlace(code);
        // // userDatas(code);
        // userDatas(userPlace);
      }
    };

    navigator.geolocation.getCurrentPosition(successfullLookup, userDenied);
    console.log("userPlace", userPlace);
  }, []);

  return (
    <>
      {/* <div> 
        <h1>Continent</h1>
        {userPlace.continent}
        <h1>country</h1>
        {userPlace.country}
        <h1>state</h1>
        {userPlace.state}
        <h1>District</h1>
        {userPlace.state_district}
        <h1>Town</h1>
        {userPlace.town}
      </div> */}
    </>
  );
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(UserLocation);
