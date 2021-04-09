import React, { useEffect, useState } from "react";
import "../../Styles/LandingPage.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import HamburgerMenu from "../HamburgerMenuItems/HamburgerMenuItems";
import Select from "react-select";
import InputLabel from '@material-ui/core/InputLabel';
import { MDBBtn } from "mdbreact";
import FormControl from '@material-ui/core/FormControl';
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
// import {MDBBtn} from "mdbreact";
//import { Dropdown } from "semantic-ui-react";
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
            <center>
            <OutlinedInput
              style={{ backgroundColor: "white", width: "100%"}}
              id="outlined-adornment-amount"
              endAdornment={
                
                
                <InputAdornment position="end">
              
         <div className="container">
                     <div className="row">
                     <diV className="col-md-12" style={{marginRight:"150px"}}>
                     <Select options={Crops} placeholder="Select Crops" id="c2"/>
                    </diV>
         </div>
         </div>
         <div className="container">
                     <div className="row">
                     <diV className="col-md-12" style={{marginRight:"150px"}}>
          <Select options={Machines} placeholder="Select Machinary" id="m1"/>
                    </diV>
         </div>
         </div>
         <div className="container">
                     <div className="row">
                     <diV className="col-md-12" style={{marginRight:"200px"}}>
                     <Select options={Distance} placeholder="Select Distance"/>
                    </diV>
         </div>
         </div>
         {/* <Button variant="contained" className="search-btn"style={{marginRight:"150px"}} >
                    Search
                  </Button> */}
                  <button type="button" className="btn btn-success">Search</button>
          
                </InputAdornment>
              }
              labelWidth={60}
            />
            </center>
        
              </Grid> 
          </Grid>
       
      </div>
    </div>
  );
}
