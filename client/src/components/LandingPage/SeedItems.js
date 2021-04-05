import React, { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';

export default function SeedItems(props){
    console.log(props.items2)
    return(
        <div className="seed-item-div">
            <Grid container spacing={12}>
            {props.items.map((value,i)=>{
                return(
                    <Grid item lg={2} xs={6} md={6}>
                        <div >
                            <img className="seed-item-img" src={value.img1}/>
                            <p className="seed-img-subtext">{value.text}</p>
                        </div>
                    </Grid>
                )
            })}
            </Grid>
        </div>
    )
}