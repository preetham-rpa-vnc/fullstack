import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
// import "./style.css";
import UAParser from "ua-parser-js";
import React, { Fragment } from "react";
// import Simple from "../components/Simple";
// import WithScrollbar from "../components/WithScrollbar";
// import WithVideo from "../components/WithVideo";
// import Section from "../components/Section";

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.

import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  headerGrid: {
    backgroundImage: `url(https://cdn.pixabay.com/photo/2016/11/21/14/57/wheat-1845835_960_720.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    minHeight: theme.spacing(25),
    backgroundColor: "#cccccc",
    filter: "blur(0px)",
    position: "relative",
    borderRadius: theme.spacing(0.5),
  },
  mainGrid: {
    padding: theme.spacing(1.5),
  },
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
    cursor: "pointer",
  },
  media: {
    paddingTop: "56.25%",
  },
  content: {
    textAlign: "left",
    padding: theme.spacing.unit * 3,
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`,
  },
  heading: {
    fontWeight: "bold",
  },
  subheading: {
    lineHeight: 1.8,
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -theme.spacing.unit,
    },
  },
  scroll: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 325,
  },
  tabs: {
    // borderRight: `1px solid ${theme.palette.divider}`,
  },
  model: {
    display: "inlineBlock",
    width: 180,
    whiteSpace: "nowrap",
    overflow: "hidden !important",
    textOverflow: "ellipsis",
  },
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};
const images = [
  {
    name: "Product",
    image:
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Product",
    image:
      "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Product",
    image:
      "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Product",
    image:
      "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Product",
    image:
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Product",
    image:
      "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Product",
    image:
      "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Product",
    image:
      "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  //   "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  //   "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  //   "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  //   "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  //   "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  //   "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  //   "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  //   "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
];

const TestTwo = ({ deviceType }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <section
        style={{
          margin: "30px 0 20px 0",
        }}
      >
        <Carousel
          ssr
          partialVisbile
          deviceType={deviceType}
          itemClass="image-item"
          responsive={responsive}
        >
          {images.slice(0, 10).map((image) => {
            return (
              <>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image={
                      "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
                    }
                  />
                  <CardContent className={classes.content}>
                    <Typography
                      className={"MuiTypography--heading"}
                      variant={"h6"}
                      gutterBottom
                    >
                      Nature Around Us
                    </Typography>
                    <Typography
                      className={"MuiTypography--subheading"}
                      variant={"caption"}
                    >
                      We are going to learn different kinds of species in nature
                      that live together to form amazing environment.
                    </Typography>
                    <Divider className={classes.divider} light />
                    {images.slice(0, 4).map((face) => (
                      <Avatar
                        className={classes.avatar}
                        key={face}
                        src={face}
                      />
                    ))}
                  </CardContent>
                </Card>
                {/* <h1>working</h1>
                <Image
                  draggable={false}
                  style={{ width: "100%", height: "100%" }}
                  src={image.image}
                />
                <h1 style={{ color: "red" }}>{image.name} hii</h1> */}
              </>
            );
          })}
        </Carousel>
      </section>
      {/* <Section></Section> */}
      {/* <Section>
        <WithScrollbar />
      </Section> */}
    </Fragment>
  );
};
// TestTwo.getInitialProps = ({ req }) => {
//   let userAgent;
//   if (req) {
//     userAgent = req.headers["user-agent"];
//   } else {
//     userAgent = navigator.userAgent;
//   }
//   const parser = new UAParser();
//   parser.setUA(userAgent);
//   const result = parser.getResult();
//   const deviceType = (result.device && result.device.type) || "desktop";
//   return { deviceType };
// };

export default TestTwo;
