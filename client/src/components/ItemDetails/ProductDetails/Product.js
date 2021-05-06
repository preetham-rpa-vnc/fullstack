import React from "react";
import {
  Button,
  Card,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import useStyles from "./ProductStyle";
import PopupDetails from "./DetailsPopup";
import { useMediaQuery } from "react-responsive";

// const max = useMediaQuery({ minDeviceWidth: 600 });
// const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });

function Product({ selectedProduct }) {
  const classes = useStyles();
  // PopupDetails()
  console.log("slected product", selectedProduct);
  return (
    <Paper className={classes.paper}>
      {selectedProduct &&
        selectedProduct.slice(0, 1).map((data, index) => (
          <Grid container spacing={2} sm={12} md={12} key={index} spacing={1}>
            <Grid item xs={12} sm={12} md={6} spacing={1}>
              <Grid item>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1614977645540-7abd88ba8e56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
                    title="Paella dish"
                  />
                </Card>
              </Grid>
              <Grid
                item
                container
                spacing={1} 
                className={classes.productDetails}
                xs={12}
                sm={12}
              >
                <Grid item xs={5} sm={4}>
                  Industry Leader
                </Grid>
                <Grid item container xs={7} sm={4} spacing={1}>
                  <Grid item>Trustseal Verified</Grid>
                  <Grid item>
                    <CheckCircleRoundedIcon
                      style={{ color: "green", marginTop: -1, fontSize: 20 }}
                    />
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  xs={6}
                  sm={4}
                  spacing={1}
                  style={{ cursor: "pointer", placeContent: "center" }}
                >
                  <Grid item>Preview Video</Grid>
                  <Grid item>
                    <YouTubeIcon style={{ color: "red", marginTop: -1 }} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item container xs={12} sm={12} md={6} spacing={1}>
              <Grid item style={{ alignSelf: "center" }}>
                <Typography
                  variant="h3"
                  style={{ fontWeight: "bold", fontFamily: "monospace" }}
                >
                  {data.product_name}
                </Typography>
              </Grid>
              <Grid item container xs={12} sm={12} spacing={1}>
                <Grid item container xs={12} sm={12}>
                  <Grid item xs={3} sm={3}>
                    <Typography className={classes.dataOne}>Brand</Typography>
                  </Grid>
                  <Grid item xs={1} sm={2} className={classes.dataTwo}>
                    :
                  </Grid>
                  <Grid item xs={8} sm={7}>
                    <Typography className={classes.dataThree}>
                      {data.product_manufacturer}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container xs={12} sm={12}>
                  <Grid item xs={3} sm={3}>
                    <Typography className={classes.dataOne}>Model</Typography>
                  </Grid>
                  <Grid item xs={1} sm={2} className={classes.dataTwo}>
                    :
                  </Grid>
                  <Grid item xs={8} sm={7}>
                    <Typography className={classes.dataThree}>
                      {data.product_model}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container xs={12} sm={12}>
                  <Grid item xs={5} sm={3}>
                    <Typography className={classes.dataOne}>
                      Pre Build
                    </Typography>
                  </Grid>
                  <Grid item xs={1} sm={2} className={classes.dataTwo}>
                    :
                  </Grid>
                  <Grid item xs={6} sm={7}>
                    <Typography className={classes.dataThree}>
                      {data.pre_build}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container xs={12} sm={12}>
                  <Grid item xs={3} sm={3}>
                    <Typography className={classes.dataOne}>Usage</Typography>
                  </Grid>
                  <Grid item xs={1} sm={2} className={classes.dataTwo}>
                    :
                  </Grid>
                  <Grid item xs={8} sm={7}>
                    <Typography className={classes.dataThree}>
                      {data.product_usage}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container xs={12} sm={12}>
                  <Grid item xs={3} sm={3}>
                    <Typography className={classes.dataOne}>Crop</Typography>
                  </Grid>
                  <Grid item xs={1} sm={2} className={classes.dataTwo}>
                    :
                  </Grid>
                  <Grid item xs={8} sm={7} container spacing={1}>
                    {data.product_crops &&
                      data.product_crops.map((data, index) => {
                        let pieces = data.split(",");
                        return (
                          <Grid item className={classes.dataThree} key={index}>
                            {data}
                          </Grid>
                        );
                      })}
                  </Grid>
                </Grid>
                <Grid item container xs={12} sm={12}>
                  <Grid item xs={3} sm={3}>
                    <Typography className={classes.dataOne}>Price</Typography>
                  </Grid>
                  <Grid item xs={1} sm={2} className={classes.dataTwo}>
                    :
                  </Grid>
                  <Grid item xs={8} sm={7}>
                    <Typography className={classes.dataThree}>
                      ₹ {data.product_price}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                container
                xs={12}
                spacing={1}
                style={{
                  textAlign: "left",
                  margin: "0 0 22px 0",
                  alignItems: "center",
                }}
              >
                <Grid item xs={5} sm={6} md={5}>
                  <Button
                    variant="contained"
                    size="large"
                    className={classes.margin}
                    style={{ backgroundColor: "#00b074", color: "white" }}
                    // target="_blank"
                    // href={youtube}
                  >
                    Contact
                  </Button>
                </Grid>
                <Grid item xs={7} sm={6} md={7}>
                  <PopupDetails selectedProduct={selectedProduct} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
    </Paper>
  );
}

export default Product;
