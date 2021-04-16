import React, { useEffect, useState } from "react";
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
import latestNews from "../../Assets/latestNews1.PNG";
import latestNews2 from "../../Assets/latestNews2.PNG";
import HamburgerMenuItems from "../HamburgerMenuItems/HamburgerMenuItems";
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth:620,
   
    height:450,
    // marginBottom:"3%",
   
    // border: "1px solid #021a40",
    float:"right",
    backgroundColor:"white",
  },
 
  title: {
    fontSize: 14,
  },
  // pos: {
  //   marginBottom: 12,
  // },
});
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
export default function LandingPage() {
  // let newsImg = [{ img1: latestNews }, { img1: latestNews2 }];
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  let items = [
    {
      heading: "Top Handpicked item for you",
      images: [
        { img1: tractor3, text: "New Equipments" },
        { img1: tractorImg, text: "Tractor" },
        { img1: tractor2, text: "New Equipments" },
        { img1: seedImg, text: "Seeds" },
      ],
    },
    {
      heading: "Farm Essentials",
      images: [
        { img1: tractor3, text: "New Equipments" },
        { img1: tractorImg, text: "Tractor" },
        { img1: tractor2, text: "New Equipments" },
        { img1: seedImg2, text: "Seeds" },
      ],
    },
    // {
    //   heading: "Top Handpicked item for you",
    //   images: [
    //     { img1: tractor3, text: "New Equipments" },
    //     { img1: tractorImg, text: "Tractor" },
    //     { img1: tractor2, text: "New Equipments" },
    //     { img1: seedImg, text: "Seeds" },
    //   ],
    // },
    {
      heading: "Popular Categories",
      images: [
        { img1: tractor3, text: "New Equipments" },
        { img1: tractorImg, text: "Tractor" },
        { img1: tractor2, text: "New Equipments" },
        { img1: seedImg2, text: "Seeds" },
      ],
    },
  ];
  let items2 = [
    { img1: seedImg, text: "Seed" },
    
    // { img1: fertilizer, text: "Fertilizer" },
    { img1: fertilizer, text: "Fertilizer" },
    { img1: rotavator, text: "Machinary" },
    { img1: rotavator2, text: "Buy/Rent" },
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
  // let bestItemCarousel = [
  //   { img1: rotavator2 },
  //   { img1: tractor2 },
  //   { img1: tractor3 },
  //   { img1: fertilizer },
  //   { img1: rotavator },
  //   { img1: rotavator2 },
  // ];
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
      <div  style={{marginTop:"3%",backgroundColor: "#F1FFF9" }}>
    
      <Card className="Card">
      <iframe width="820" height="450"
src="https://www.youtube.com/embed/ez0_t22eTIM?autoplay=1&mute=1">
</iframe>

      <CardActionArea className={classes.root}>
        {/* <CardMedia
          component="img"
          alt="machine"
          height="200"
          image={cultivator}
          title="Machine"
        /> */}
      
        <CardContent>
          <Typography gutterBottom variant="h4" component="h1" style={{textAlign:"center"}}>
            Machinery
          </Typography>
          <Typography variant="h6" color="textPrimary" component="p">
            When you are looking to buy high-quality seed, There are many reasons why should you choose <strong>Pland.Farm</strong> 
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
      </div>
     
      <ItemCarousel items={carouselItems} 
      style={true}
      />
     
      <AppBar position="static" className="mid-bar">
        <Toolbar>
          <Grid container spacing={12}>
            <Grid item lg={1} xs={0} md={1}></Grid>
            <Grid item lg={4} xs={10} md={4}>
              <img style={{ marginTop: "3%", height: "6em" }} src={icons} />
            </Grid>
            <Grid item lg={3} xs={12} md={3}>
              <p className="mid-bar-text1">PLAND.FARM</p>
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
