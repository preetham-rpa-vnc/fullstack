import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchCard from "./SearchCard";
import ItemsCard from "./ItemsCard";
import control1 from "../../Assets/ControlCard1.jpeg";
import SeedItems from "./SeedItems";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import tractorImg from "../../Assets/tractor.png";
import tractor2 from "../../Assets/greenTractor.jpg";
import tractor3 from "../../Assets/paddyMachine.jpg";
import seedImg from "../../Assets/seedImage.jpg";
import seedImg2 from "../../Assets/seedImage2.jpg";
import fertilizer from "../../Assets/fertilizer.png";
import rotavator from "../../Assets/rotavator.jpg";
import rotavator2 from "../../Assets/rotavator2.jpg";
import ItemCarousel from "./Itemcarousel";
import cultivator from "../../Assets/cultivator.jpg";
import potatoPlanter from "../../Assets/potatoPlanter.jpg";
import sprayingPump from "../../Assets/sprayingPump.jpg";
import icons from "../../Assets/languageIcons.PNG";
import {Card, CardContent} from  "@material-ui/core";

import CardMedia from '@material-ui/core/CardMedia';
import HamburgerMenuItems from "../HamburgerMenuItems/HamburgerMenuItems";
// import pf1 from "../../Assets/pf1.png";
import local from "../../Assets/1.png";
// import sample from "../../Assets/sample.mp4";
import { Typography } from "@material-ui/core";

// export default function LandingPage() {
//   let items = [
//     {
//       heading: "Top Handpicked item for you",
//       images: [
//         { img1: tractor3, text: "New Equipments" },
//         { img1: tractorImg, text: "Tractor" },
//         { img1: tractor2, text: "New Equipments" },
//         { img1: seedImg, text: "Seeds" },
//       ],
//     },
//     {
//       heading: "Top Handpicked item for you",
//       images: [
//         { img1: tractor3, text: "New Equipments" },
//         { img1: tractorImg, text: "Tractor" },
//         { img1: tractor2, text: "New Equipments" },
//         { img1: seedImg2, text: "Seeds" },
//       ],
//     },
//     {
//       heading: "Top Handpicked item for you",
//       images: [
//         { img1: tractor3, text: "New Equipments" },
//         { img1: tractorImg, text: "Tractor" },
//         { img1: tractor2, text: "New Equipments" },
//         { img1: seedImg, text: "Seeds" },
//       ],
//     },
//     {
//       heading: "Top Handpicked item for you",
//       images: [
//         { img1: tractor3, text: "New Equipments" },
//         { img1: tractorImg, text: "Tractor" },
//         { img1: tractor2, text: "New Equipments" },
//         { img1: seedImg2, text: "Seeds" },
//       ],
//     },
//   ];
//   let items2 = [
//     { img1: seedImg, text: "Seed" },
//     { img1: seedImg2, text: "Seed" },
//     { img1: fertilizer, text: "Fertilizer" },
//     { img1: fertilizer, text: "Fertilizer" },
//     { img1: rotavator, text: "Rotavator" },
//     { img1: rotavator2, text: "Rotavator" },
//   ];
//   return (
//     <div style={{ backgroundColor: "#F1FFF9" }}>
//       <SearchCard />
//       <SeedItems items={items2} />
//       <ItemsCard items={items} />
//       {/* <HamburgerMenuItems /> */}
//     </div>
//   );
// }
const useStyles = makeStyles({
  root: {
  
    maxWidth:"600px",
    margin:"1%",
    
     
  //  height:"500",
    // border: "1px solid #021a40",
    // float:"right",
    backgroundColor:"white",
  },
  title: {
    fontSize: 14,
  },
});
export default function LandingPage() {
  // let newsImg = [{ img1: latestNews }, { img1: latestNews2 }];
  const classes = useStyles();
  // let items = [
  //   {
  //     heading: "Top Handpicked item for you",
  //     images: [
  //       { img1: tractor3, text: "New Equipments" },
  //       { img1: tractorImg, text: "Tractor" },
  //       { img1: tractor2, text: "New Equipments" },
  //       { img1: seedImg, text: "Seeds" },
  //     ],
  //   },
  //   {
  //     heading: "Farm Essentials",
  //     images: [
  //       { img1: tractor3, text: "New Equipments" },
  //       { img1: tractorImg, text: "Tractor" },
  //       { img1: tractor2, text: "New Equipments" },
  //       { img1: seedImg2, text: "Seeds" },
  //     ],
  //   },
    // {
    //   heading: "Top Handpicked item for you",
    //   images: [
    //     { img1: tractor3, text: "New Equipments" },
    //     { img1: tractorImg, text: "Tractor" },
    //     { img1: tractor2, text: "New Equipments" },
    //     { img1: seedImg, text: "Seeds" },
    //   ],
    // },
  //   {
  //     heading: "Popular Categories",
  //     images: [
  //       { img1: tractor3, text: "New Equipments" },
  //       { img1: tractorImg, text: "Tractor" },
  //       { img1: tractor2, text: "New Equipments" },
  //       { img1: seedImg2, text: "Seeds" },
  //     ],
  //   },
  // ];
  let items2 = [
    { img1: seedImg, text: "Seed" },
    
    // { img1: fertilizer, text: "Fertilizer" },
    { img1: fertilizer, text: "Fertilizer" },
    { img1: rotavator, text: "Machinary" },
     { img1: rotavator2, text: "Buy Or Rent" },
    { img1: seedImg2, text: "MSP Details" },
  ];
  let carouselItems = [
    { img1: tractorImg, text: "Tractor" },
    { img1: seedImg2, text: "Seeds" },
    { img1: tractor3, text: "Trailors" },
    { img1: fertilizer, text: "Fertilizer" },
    { img1: rotavator, text: "Rotavator" },
    { img1: rotavator2, text: "Rotavator" },
  ];
  let bestItemCarousel = [
    { img1: rotavator2 },
    { img1: tractor2 },
    { img1: tractor3 },
    { img1: fertilizer },
    { img1: rotavator },
    { img1: rotavator2 },
  ];
  let trendingItemsCarousel = [
    { img1: cultivator, text: "Cultivator", price: "From 2000/-" },
    { img1: rotavator2, text: "Rotavator", price: "From 5000/-" },
    { img1: potatoPlanter, text: "Potato Planter", price: "From 20000/-" },
    { img1: sprayingPump, text: "Spraying Pump", price: "From 2000/-" },
    { img1: rotavator, text: "Rotavator", price: "From 2000/-" },
    { img1: rotavator2, text: "Rotavator", price: "From 2000/-" },
    { img1: cultivator, text: "Cultivator", price: "From 2000/-" },
    { img1: rotavator2, text: "Rotavator", price: "From 5000/-" },
    { img1: potatoPlanter, text: "Potato Planter", price: "From 20000/-" },
    { img1: sprayingPump, text: "Spraying Pump", price: "From 2000/-" },
    { img1: rotavator, text: "Rotavator", price: "From 2000/-" },
    { img1: rotavator2, text: "Rotavator", price: "From 2000/-" },
  ];
  return (
    <div style={{ backgroundColor: "#F1FFF9" }}>
      <SearchCard />
      {/* <ItemCarousel items={newsImg} /> */}
      <SeedItems items={items2} />
      {/* <ItemCarousel
        items={bestItemCarousel}
        header={"Best Sellers"}
        style={true}
      /> */}
      {/* <ItemsCard items={items} /> */}
      {/* <HamburgerMenuItems /> */}
      <ItemCarousel items={carouselItems} 
      style={true}
      />
       <div id="howItWorks" className="mt-md-5 py-3">
<div className="">
<div className="text-center mb-2">
<p className="page-header mb-0"> Best Farming Techniques</p>
<div className="line-mf">
</div>
<p className="listNng-subtext mt-3 mb-0  pb-4" style={{
  fontSize: "18px"}}>
    When you are looking to buy high-quality seed, There are many reasons why should you choose <strong>Pland.Farm</strong>
  </p>
</div>
</div>
</div>
<div className="container-fluid">
        <div className="row mx-md-5 p-2">
          <div className="col-12 col-md-7">
            <div className="col-12 col-md-5 rounded my-auto">
            <iframe width="600" height="450" style={{marginTop:"1%", borderRadius:"10px"}}
src="https://www.youtube.com/embed/ez0_t22eTIM?autoplay=1&mute=1">
</iframe>
 
<Card className={classes.root} style={{float:"right"}}>
<div className="row" >
         <left>
           <img src={local} alt="" className="avatar-img rounded"></img>
           </left>
        <CardContent style={{float:"right",marginTop:"3%"}} >
          <Typography gutterBottom variant="h5" component="h2">
            Support Local
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Buy Local. Sell Local. Support your local community of growers and farmers
          </Typography>
        </CardContent>
         </div>
         <div className="row">
         <left>
           <img src={local} alt="" className="avatar-img rounded"></img>
           </left>
        <CardContent style={{float:"right"}}>
          <Typography gutterBottom variant="h5" component="h4">
            Support Local
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Buy Local. Sell Local. Support your local community of growers and farmers
          </Typography>
        </CardContent>
         </div>
         <div className="row">
         <left>
           <img src={local} alt="" className="avatar-img rounded"></img>
           </left>
        <CardContent style={{float:"right"}}>
          <Typography gutterBottom variant="h5" component="h4">
            Support Local
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Buy Local. Sell Local. Support your local community of growers and farmers
          </Typography>
        </CardContent>
         </div>
         <div className="row">
         <left>
           <img src={local} alt="" className="avatar-img rounded"></img>
           </left>
        <CardContent style={{float:"right"}}>
          <Typography gutterBottom variant="h5" component="h2">
            Support Local
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Buy Local. Sell Local. Support your local community of growers and farmers
          </Typography>
        </CardContent>
         </div>
         
    </Card>
            </div>
 </div>
</div>
 </div>

     
      <AppBar position="static" className="mid-bar">
        <Toolbar>
          <Grid container spacing={12}>
            <Grid item lg={1} xs={0} md={1}></Grid>
            <Grid item lg={4} xs={10} md={4}>
              <img style={{ marginTop: "3%", height: "6em" }} src={icons} />
            </Grid>
            <Grid item lg={3} xs={12} md={3}>
              <p className="mid-bar-text2">PLAND.FARM</p>
            </Grid>
            <Grid item lg={3} xs={12} md={3}>
              <p className="mid-bar-text2">In your language</p>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <ItemCarousel
        items={trendingItemsCarousel}
        header={"Trending Items"}
        style={true}
        col={true}
      />
      <ItemCarousel
        items={trendingItemsCarousel}
        header={"Deals of the day"}
        style={true}
        col={true}
      />
    </div>
  );
}
