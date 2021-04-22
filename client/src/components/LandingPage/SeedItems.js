import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";

export default function SeedItems(props) {
  console.log(props.items2);
  return (
    <div className="seed-item-div">
      <Grid container spacing={12}>
        {props.items.map((value, i) => {
          return (
            <Grid item lg={2}  xs={5} md={2} style={{marginLeft:"3%"}} >
            <div className="row" style={{textAlign:"center"}}>
                <img className="seed-item-img" src={value.img1} />
                <p className="seed-img-subtext"  style={{textAlign:"center"}}>{value.text}</p>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
