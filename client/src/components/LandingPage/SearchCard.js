import React, { useEffect, useState } from "react";
import "../../Styles/LandingPage.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";

import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import HamburgerMenu from "../HamburgerMenuItems/HamburgerMenuItems";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { lightGreen } from "@material-ui/core/colors";


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
  { label: "oats", value: 58 }
];

const Machines = [
  { label: "Rotavator", value: 3 },
  { label: "Spraying Pump", value:2 },
  { label: "Tractor", value: 1 }
]

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SearchCard() {
  const classes = useStyles();
  

  





  return (
    <div className="pr-0 pl-0">
      <div className="img-container">
        <Grid container spacing={12}>
          <Grid item lg={1} xs={0} md={1}></Grid>
          <Grid item lg={3} xs={2} md={3}>
            <HamburgerMenu />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item lg={4} xs={7} md={4}>
            <h1 className="search-header-txt">Search Items near you</h1>
          </Grid>
          <Grid item xs={3}>
            <div className="weather-search-div">
              <span className="degree-number">14°</span>
              <span className="degree-txt">C</span>
              <CloudQueueIcon className="icon-style" />
              <p className="weather-text-style">Cloudy</p>
              <p className="weather-text-style">B'lore, India</p>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={14}>
        <Grid item lg={3} xs={0} md={3}></Grid>
          <Grid item lg={7} xs={12} md={7}>
            <div>
            <OutlinedInput
              style={{ backgroundColor: "white", width: "100%"}}
              id="outlined-adornment-amount"
              endAdornment={
                
                <InputAdornment position="end">
                 <div style={{marginRight:"10px"}}>   <Autocomplete id="combo-box-demo"
      options={Crops}
      getOptionLabel={(option) => option.label}
      style={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Select Crops" variant="outlined" />}
    />
                   </div> 
   
    <div style={{marginRight:"10px"}}><Autocomplete 
      id="combo-box-demo"
      options={Machines}
      getOptionLabel={(option) => option.label}
      style={{ width: 200}}
     
      renderInput={(params) => <TextField {...params} label="Select Machines" variant="outlined" />}
    /></div>
    <div style={{marginRight:"10px"}}>
    <Autocomplete
      id="combo-box-demo"
      options={Distance}
      getOptionLabel={(option) => option.label}
      style={{ width: 300}}
      renderInput={(params) => <TextField {...params} label="Select Distance from your place" variant="outlined" />}
    />
    </div>
     
      <Button variant="contained" className="search-btn" style={{marginLeft: "15px"}}>
                    Search
                  </Button>
                </InputAdornment>
              }
              labelWidth={60}
            />
            </div>
          
              </Grid> 
     
    </Grid>

        
                    
        
                  
          
                
        
       
      </div>
    </div>
  );
}
