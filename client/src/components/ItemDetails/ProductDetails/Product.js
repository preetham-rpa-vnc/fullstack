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

function Product() {
  const classes = useStyles();
  // PopupDetails()
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2} xs={12}>
        <Grid item xs={12} sm={7} spacing={1}>
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
            <Grid item xs={3} sm={4}>
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
              style={{ cursor: "pointer" }}
            >
              <Grid item>Preview Video</Grid>
              <Grid item>
                <YouTubeIcon style={{ color: "red", marginTop: -1 }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={12} sm={5} spacing={1}>
          <Grid item style={{ alignSelf: "center" }}>
            <Typography
              variant="h3"
              style={{ fontWeight: "bold", fontFamily: "monospace" }}
            >
              John Deer
            </Typography>
          </Grid>
          <Grid item container xs={12} spacing={2}>
            <Grid
              item
              container
              xs={3}
              sm={3}
              spacing={0}
              direction="column" 
              style={{
                color: "#0f690f",
                textAlign: "left",
                fontWeight: "bold",
                fontSize: "x-large",
              }}
            >
              <Grid item>Brand</Grid>
              <Grid item>Crop</Grid>
              <Grid item>Price</Grid>
            </Grid>
            <Grid
              item
              container
              xs={3}
              sm={2}
              spacing={0}
              direction="column"
              style={{
                textAlign: "left",
                fontWeight: "bold",
                fontSize: "x-large",
              }}
            >
              <Grid item>:</Grid>
              <Grid item>:</Grid>
              <Grid item>:</Grid>
            </Grid>
            <Grid
              item
              container
              xs={3}
              spacing={0}
              direction="column"
              style={{
                textAlign: "left",
                fontWeight: "100",
                fontSize: "x-large",
              }}
            >
              <Grid item>Mahindra</Grid>
              <Grid item>Paddy</Grid>
              <Grid item>120000</Grid>
            </Grid>
          </Grid>
          <Grid item container xs={12} spacing={1} style={{ textAlign: "left" }}>
            <Grid item xs={5} sm={7} md={5}>
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
            <Grid item xs={7} sm={5} md={7}>
              <PopupDetails />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Product;
