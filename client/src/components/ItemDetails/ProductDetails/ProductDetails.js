import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./ProductStyle";
import Description from "./Description";
import Product from "./Product";
import queryString from "query-string";
import Axios from "axios";

function ProductDetails({ location }) {
  const { id, product } = queryString.parse(location.search);
  console.log("id", id);
  console.log("product", product);
  const [selectedProduct, setSelectedProduct] = useState([])

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URI}/getitem`, {
      params: {id},
    })
      .then(result => {
        console.log("data", result);
        setSelectedProduct(...selectedProduct, result.data)
      })
      .catch(err => console.log(err))
  }, []);


  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.mainGrid}>
        <Product selectedProduct={selectedProduct} />
        <Description />
      </Grid>
    </>
  );
}

export default ProductDetails;
