import React from "react";
import {
  Grid,
} from "@material-ui/core";
import useStyles from "./ProductStyle";
import Description from "./Description";
import Product from "./Product";

function ProductDetails() {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.mainGrid}>
        <Product />
        <Description />
      </Grid>
    </>
  );
}

export default ProductDetails;
