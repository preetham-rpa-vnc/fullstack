import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import autoBind from "auto-bind";
// import '../style/Example.scss';
import { fade, makeStyles } from "@material-ui/core/styles";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Slider,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  MediaCaption: {
    textOverflow: "ellipsis",

    position: "absolute",
    bottom: 0,

    padding: 15,

    backgroundColor: "black",
    color: "white",
    opacity: 0.6,

    width: "100%",
    height: "10%",

    // font: {
    //   size: $header - font - size,
    //   weight: 200,
    // },

    transition: "300ms",
    cursor: "pointer",
    "&:hover": {
      opacity: 0.8,
    },
  },
}));

function Banner(props) {
  if (props.newProp) console.log(props.newProp);
  const contentPosition = props.contentPosition
    ? props.contentPosition
    : "left";
  const totalItems = props.length ? props.length : 3;
  const mediaLength = totalItems - 1;

  let items = [];
  const content = (
    <Grid item xs={12 / totalItems} key="content">
      <CardContent className="Content">
        <Typography className="Title">{props.item.Name}</Typography>

        <Typography className="Caption">{props.item.Caption}</Typography>

        <Button variant="outlined" className="ViewButton">
          View Now
        </Button>
      </CardContent>
    </Grid>
  );

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={12 / totalItems} key={item.Name}>
        <CardMedia className="Media" image={item.Image} title={item.Name}>
          <Typography className="MediaCaption">{item.Name}</Typography>
        </CardMedia>
      </Grid>
    );

    items.push(media);
  }

  if (contentPosition === "left") {
    items.unshift(content);
  } else if (contentPosition === "right") {
    items.push(content);
  } else if (contentPosition === "middle") {
    items.splice(items.length / 2, 0, content);
  }

  return (
    <Card raised className="Banner">
      <Grid container spacing={0} className="BannerGrid">
        {items}
      </Grid>
    </Card>
  );
}

const items = [
  {
    Name: "Electronics",
    Caption: "Electrify your friends!",
    contentPosition: "left",
    Items: [
      {
        Name: "Macbook Pro",
        Image: "https://source.unsplash.com/featured/?macbook",
      },
      {
        Name: "iPhone",
        Image: "https://source.unsplash.com/featured/?iphone",
      },
    ],
  },
  {
    Name: "Home Appliances",
    Caption: "Say no to manual home labour!",
    contentPosition: "middle",
    Items: [
      {
        Name: "Washing Machine WX9102",
        Image: "https://source.unsplash.com/featured/?washingmachine",
      },
      {
        Name: "Learus Vacuum Cleaner",
        Image: "https://source.unsplash.com/featured/?vacuum,cleaner",
      },
    ],
  },
  {
    Name: "Decoratives",
    Caption: "Give style and color to your living room!",
    contentPosition: "right",
    Items: [
      {
        Name: "Living Room Lamp",
        Image: "https://source.unsplash.com/featured/?lamp",
      },
      {
        Name: "Floral Vase",
        Image: "https://source.unsplash.com/featured/?vase",
      },
    ],
  },
];

const BannerExample = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [indicators, setIndicators] = useState(true);
  const [navButtonsAlwaysVisible, setNavButtonsAlwaysVisible] = useState(false);
  // const [navButtonsAlwaysInvisible, setNavButtonsAlwaysInvisible] = useState(false);
  const [animation, setAnimation] = useState("fade");
  const [timeout, setTimeout] = useState(600);
  const [cycleNavigation, setCycleNavigation] = useState(true);

  const toggleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };

  const toggleIndicators = () => {
    setIndicators(!indicators);
  };

  const toggleNavButtonsAlwaysVisible = () => {
    setNavButtonsAlwaysVisible(!navButtonsAlwaysVisible);
  };

  // const toggleNavButtonsAlwaysInvisible = () => {
  //   setNavButtonsAlwaysInvisible(!navButtonsAlwaysInvisible);
  // };

  const changeAnimation = (event) => {
    setAnimation(event.target.value);
  };

  const changeTimeout = (event, value) => {
    setTimeout(value);
  };

  const toggleCycleNavigation = () => {
    setCycleNavigation(!cycleNavigation);
  };

  return (
    <div style={{ marginTop: "50px", color: "#494949" }}>
      <h2>Example: eBay&trade; style</h2>

      <Carousel
        className="Example"
        autoPlay={autoPlay}
        // animation={animation}
        animation="fade"
        indicators={indicators}
        // timeout={timeout}
        timeout={500}
        cycleNavigation={cycleNavigation}
        navButtonsAlwaysVisible={navButtonsAlwaysVisible}
        // navButtonsAlwaysInvisible={navButtonsAlwaysInvisible}
        next={(now, previous) =>
          console.log(
            `Next User Callback: Now displaying child${now}. Previously displayed child${previous}`
          )
        }
        prev={(now, previous) =>
          console.log(
            `Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`
          )
        }
        onChange={(now, previous) =>
          console.log(
            `OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`
          )
        }
        fullHeightHover={false}
        navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
        navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
        indicatorContainerProps={{style: {margin: "20px"}}}
        NextIcon='next'
      >
        {items.map((item, index) => {
          return (
            <Banner
              item={item}
              key={index}
              contentPosition={item.contentPosition}
            />
          );
        })}
      </Carousel>

      <FormLabel component="legend">Options</FormLabel>
      <FormControlLabel
        control={
          <Checkbox
            onChange={toggleAutoPlay}
            checked={autoPlay}
            value="autoplay"
            color="primary"
          />
        }
        label="Auto-play"
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={toggleIndicators}
            checked={indicators}
            value="indicators"
            color="primary"
          />
        }
        label="Indicators"
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={toggleNavButtonsAlwaysVisible}
            checked={navButtonsAlwaysVisible}
            value="NavButtonsAlwaysVisible"
            color="primary"
          />
        }
        label="NavButtonsAlwaysVisible"
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={toggleCycleNavigation}
            checked={cycleNavigation}
            value="CycleNavigation"
            color="primary"
          />
        }
        label="CycleNavigation"
      />

      <FormControlLabel
        control={
          <RadioGroup
            name="animation"
            value={animation}
            onChange={changeAnimation}
            row
            style={{ marginLeft: "10px" }}
          >
            <FormControlLabel
              value="fade"
              control={<Radio color="primary" />}
              label="Fade"
            />
            <FormControlLabel
              value="slide"
              control={<Radio color="primary" />}
              label="Slide"
            />
          </RadioGroup>
        }
      />

      <FormControlLabel
        control={
          <div style={{ width: 300 }}>
            <Typography id="discrete-slider" gutterBottom>
              Animation Duration (Timeout) in ms
            </Typography>
            <Slider
              defaultValue={500}
              getAriaValueText={() => `${timeout}ms`}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={100}
              marks
              min={100}
              max={2000}
              onChange={changeTimeout}
            />
          </div>
        }
      />
    </div>
  );
};

export default BannerExample;
