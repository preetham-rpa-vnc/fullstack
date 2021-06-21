import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded";
import LinkRoundedIcon from "@material-ui/icons/LinkRounded";
import YouTubeIcon from "@material-ui/icons/YouTube";

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`,
  },
  heading: {
    fontWeight: "bold",
  },
  headingTwo: {
    fontWeight: 600,
    fontSize: 30,
    fontFamily: "Inter",
    // textDecoration: "underline",
    // margin: "0px 0px -17px 8px",
    // marginBottom: "-17px",
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
  icon: {
    // transform: "scaleX(-1)",
    color: "green",
    fontSize: 40,
    cursor: "pointer",
  },
  model: {
    width: 180,
    // display: inlineBlock;
    overflow: "hidden !important",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
}));

function LoadMore({ changeDisplay, products }) {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        md={12}
        direction="column"
        style={{ padding: 20 }}
        spacing={2}
        display="block"
      >
        <Grid item container>
          <Grid item container md={12}>
            <Grid itetm xs={10} sm={10} md={10}>
              <Typography
                className={classes.headingTwo}
                style={{ color: "#226d36" }}
              >
                All Items
              </Typography>
            </Grid>
            <Grid
              itetm
              xs={2}
              sm={2}
              md={2}
              style={{ placeSelf: "center", textAlign: "right" }}
              onClick={() => changeDisplay("none")}
            >
              <KeyboardBackspaceRoundedIcon className={classes.icon} />
            </Grid>
          </Grid>

          <Grid item container spacing={2}>
            {products &&
              products.slice(0, 90).map((data, index) => (
                <Grid item xs={12} sm={4} md={3} key={index}>
                  <Card
                    className={classes.card}
                    // onClick={() => handleClick(data.product_id)}
                  >
                    <CardMedia
                      className={classes.media}
                      image={
                        "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
                      }
                    />
                    <CardContent
                      className={classes.content}
                      style={{ marginBottom: "-10px" }}
                    >
                      <Typography
                        className={"MuiTypography--heading"}
                        variant="h6"
                        gutterBottom
                      >
                        {data.product_name}
                      </Typography>
                      <Typography
                        className={"MuiTypography--subheading"}
                        variant={"caption"}
                      >
                        <Grid container md={12} direction="column">
                          <Grid item>
                            <Typography
                              variant="subtitle1"
                              className={classes.model}
                            >
                              {data.product_manufacturer}
                            </Typography>
                          </Grid>
                          <Grid item textOverflow="ellipsis">
                            <Box>
                              <Typography
                                variant="subtitle1"
                                className={classes.model}
                              >
                                {data.product_model}
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid item>
                            <Typography variant="subtitle1">
                              ₹ {data.product_price}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Typography>
                      <Divider className={classes.divider} light />
                      <Grid md={12} container>
                        <Grid iem md={6} style={{ textAlign: "center" }}>
                          <LinkRoundedIcon style={{ color: "#007eff" }} />
                        </Grid>
                        <Grid iem md={6} style={{ textAlign: "center" }}>
                          <YouTubeIcon style={{ color: "#d40404" }} />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default LoadMore;

const images = [
  {
    name: "Product Name",
    price: 3520300,
    image:
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Product Name",
    price: 3520300,
    image:
      "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Product Name",
    price: 3520300,
    image:
      "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Product Name",
    price: 3520300,
    image:
      "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Product Name",
    price: 3520300,
    image:
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Product Name",
    price: 3520300,
    image:
      "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Product Name",
    price: 3520300,
    image:
      "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Product Name",
    price: 3520300,
    image:
      "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
];
