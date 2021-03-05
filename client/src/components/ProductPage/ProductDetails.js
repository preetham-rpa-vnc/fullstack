import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import React from "react";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 499,
    width: "100%",
    borderRadius: theme.spacing(2),
    backgroundSize: "100% 100%",
    marginTop: theme.spacing(5),
  },
  fBody: {
    height: "fit-content",
    padding: "12px 55px 12px 55px",
  },
  sBody: {
    fontSize: "24px",
    fontWeight: "700",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.25",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#191919",
  },
  sGrid: {
    padding: "30px 10px 10px 30px",
    height: "fit-content",
  },
  firstBody: {
    // padding: theme.spacing(5),
    height: "fit-content",
  },
  imageBody: {
    padding: theme.spacing(5),
  },
  descriptionOne: {
    fontSize: "15px",
    fontWeight: "700",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.47",
    letterSpacing: ".08px",
    textAlign: "left",
    color: "#2b2b2b",
    marginTop: "15px",
  },
  price: {
    width: "115px",
    height: "65px",
    borderRadius: "10px",
    backgroundColor: "silver",
    marginLeft: "auto",
    marginTop: "15px",
  },
  insidePricef: {
    marginTop: theme.spacing(1),
    textAlign: "center",
  },
  divider: {
    marginTop: theme.spacing(1.5),
  },
  itemDetails: {
    backgroundColor: "#cbe4cb",
    width: "100%",
    height: "300px",
    borderRadius: "10px",
    marginTop: "19px",
  },
  gridOne: {
    textAlign: "center",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  margin: {
    margin: theme.spacing(1),
  },
  buyButton: {
    float: "right",
    // backgroundColor: "red",
  },
  sellerDetails: {
    height: 100,
    width: 100,
    borderRadius: theme.spacing(2),
    backgroundSize: "100% 100%",
  },
  sellerBody: {
    padding: "46px 100px 33px 100px",
  },
}));

function ProductDetails() {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.fBody}>
        <Grid item xs={5} align="center">
          {/* <Typography variant="h1">first body</Typography> */}
          <CardMedia
            className={classes.media}
            title="Contemplative Reptile"
            image="https://5.imimg.com/data5/HZ/JZ/BV/SELLER-3213215/rice-huller-with-polisher-blower-attached-500x500.jpg"
          />
        </Grid>

        <Grid item xs={7} spacing={0} className={classes.sGrid}>
          <Box component="div" p={1}>
            <Grid container className={classes.firstBody}>
              <Grid item xs={6} container direction="column" spacing={1}>
                <Grid item>
                  <Typography variant="h5" className={classes.sBody}>
                    bremer seeds
                  </Typography>
                </Grid>
                <Grid item container direction="row" spacing={1}>
                  <Grid item>
                    <Avatar
                      alt="Travis Howard"
                      src="https://5.imimg.com/data5/HZ/JZ/BV/SELLER-3213215/rice-huller-with-polisher-blower-attached-500x500.jpg"
                    />
                  </Grid>
                  <Grid item>
                    <Grid item>
                      <Typography variant="body2">Listed By</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2">Kumar</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Box
                  variant="caption"
                  display="flex"
                  justifyContent="flex-end"
                  m={1}
                  p={1}
                >
                  Last updated time
                </Box>
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Grid>
              <Grid container xs={12}>
                <Grid container direction="column" spacing={0.5} item xs={6}>
                  <Grid item>
                    <Typography variant="h4" className={classes.descriptionOne}>
                      DESCRIPTION
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">see all seeds</Typography>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Box className={classes.price}>
                    <Grid container direction="column" spacing={1}>
                      <Box className={classes.insidePricef}>
                        <Grid item>
                          <Typography>Rs 231000</Typography>
                        </Grid>
                        <Grid item>
                          <Typography>PER TONNE</Typography>
                        </Grid>
                      </Box>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Box className={classes.itemDetails}>
              <Grid container xs={12}>
                <Grid item container className={classes.gridOne}>
                  <Grid item xs={4}>
                    <Typography>CROP</Typography>
                    <Typography>CROP</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography>VARIETY</Typography>
                    <Typography>VARIETY</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography>QUANTITY</Typography>
                    <Typography>QUANTITY</Typography>
                  </Grid>
                </Grid>
                <Grid item container className={classes.gridOne}>
                  <Grid item xs={4}>
                    <Typography>CROP</Typography>
                    <Typography>CROP</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography>VARIETY</Typography>
                    <Typography>VARIETY</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography>QUANTITY</Typography>
                    <Typography>QUANTITY</Typography>
                  </Grid>
                </Grid>
                <Grid item container className={classes.gridOne}>
                  <Grid item xs={4}>
                    <Typography>CROP</Typography>
                    <Typography>CROP</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography>VARIETY</Typography>
                    <Typography>VARIETY</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography>QUANTITY</Typography>
                    <Typography>QUANTITY</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box component="div" pl={7} pr={7} className={classes.buyTag}>
        <Divider />
        <Grid container direction="column">
          <Grid item>
            <Box m={1} p={1} className={classes.buyButton}>
              <Grid container>
                <Grid item>
                  <Button
                    variant="outlined"
                    size="large"
                    color="primary"
                    className={classes.margin}
                  >
                    Chat with the company
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    className={classes.margin}
                  >
                    Buy
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Divider />
          <Grid item>
            <Box mt={5} className={classes}>
              <Box>
                <Typography variant="h4" mt={3}>
                  Seller Profile
                </Typography>
                <Divider />
              </Box>
              <Box className={classes.sellerBody}>
                <Typography>Personal Details</Typography>
                <Grid container xs={12}>
                  <Grid item container xs={6} spacing={0}>
                    <Grid item container direction="column" xs={3}>
                      {/* <Grid item>
                        <Typography>Personal Details</Typography>
                      </Grid> */}
                      <Grid item>
                        <CardMedia
                          className={classes.sellerDetails}
                          title="Contemplative Reptile"
                          image="https://5.imimg.com/data5/HZ/JZ/BV/SELLER-3213215/rice-huller-with-polisher-blower-attached-500x500.jpg"
                        />
                      </Grid>
                    </Grid>
                    <Grid item container direction="column" xs={3}>
                      <Grid item>
                        <Typography>Personal Details</Typography>
                      </Grid>
                      <Grid item>
                        <Typography>Personal Details</Typography>
                      </Grid>
                      <Grid item>
                        <Typography>Personal Details</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={3}>
                    Verified User
                  </Grid>
                  <Grid item xs={3}>
                    January 2021
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ProductDetails;
