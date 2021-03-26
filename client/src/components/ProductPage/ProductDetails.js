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
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import MoreByCompany from "./MoreByCompany/MoreByCompany";
import Axios from "axios";
import { Link } from "react-router-dom";
import LinkIcon from "@material-ui/icons/Link";

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
    fontSize: 20,
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
    backgroundColor: "#dff1eb",
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
    // backgroundColor: "#00b074"
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
  varified: {
    alignSelf: "center",
    color: "green",
  },
  divi: {
    color: "red",
    marginTop: theme.spacing(1.5),
  },
  checkICon: {
    fontSize: 19,
  },
  joinDate: {
    placeContent: "center",
  },
  items: {
    fontWeight: "bolder",
    fontSize: 15,
    color: "#2a584c",
  },
  itemsOne: {
    fontSize: 10,
  },
  mainItems: {
    padding: "17px 3px 0 45px",
    textAlignLast: "left",
  },
  sellerProfile: {
    width: 200,
    backgroundColor: "#efefef",
    borderRadius: "5px 5px 0px 0px",
    borderBottom: "4px solid #30a05f",
    height: 50,
    textAlign: "center",
  },
}));

function ProductDetails({ location }) {
  const [productItem, setProductItem] = useState("");
  const id = queryString.parse(location.search);

  const {
    _id,
    crop,
    description,
    image,
    manufactured,
    name,
    phaseofcrop,
    prebuilt,
    price,
    use,
    website,
    youtube,
  } = productItem;

  useEffect(() => {
    Axios.get(`http://localhost:5000/getitem`, {
      params: id,
    }).then((item) => {
      setProductItem(item.data);
    });
  }, []);

  console.log("productItem", productItem);

  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.fBody}>
        <Grid item xs={5} align="center">
          {/* <Typography variant="h1">first body</Typography> */}
          <CardMedia
            className={classes.media}
            title="Contemplative Reptile"
            image={image}
          />
        </Grid>

        <Grid item xs={7} spacing={0} className={classes.sGrid}>
          <Box component="div" p={1}>
            <Grid container className={classes.firstBody}>
              <Grid item xs={6} container direction="column" spacing={1}>
                <Grid item>
                  <Typography variant="h5" className={classes.sBody}>
                    {name}
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
                  {/* Last updated time */}
                  <Link
                    cursor="default"
                    color="primary"
                    size="small"
                    to={{
                      pathname: website,
                    }}
                    target="_blank"
                  >
                    <LinkIcon style={{ color: "blue" }} />
                  </Link>
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
                    <Typography variant="subtitle1">{description}</Typography>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Box className={classes.price}>
                    <Grid container direction="column" spacing={1}>
                      <Box className={classes.insidePricef}>
                        <Grid item>
                          <Typography>Rs {price}</Typography>
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
              <Grid container xs={12} className={classes.mainItems}>
                <Grid item container className={classes.gridOne}>
                  <Grid item xs={4}>
                    <Typography className={classes.items}>CROP</Typography>
                    <Typography className={classes.itemsOne}>crop,crop,crop,crop,crop,crop,crop</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography className={classes.items}>PRE BUILT</Typography>
                    <Typography className={classes.itemsOne}>
                      {prebuilt}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography className={classes.items}>QUANTITY</Typography>
                    <Typography className={classes.itemsOne}>1</Typography>
                  </Grid>
                </Grid>
                <Grid item container className={classes.gridOne}>
                  <Grid item xs={4}>
                    <Typography className={classes.items}>
                      PHASE OF CROP
                    </Typography>
                    <Typography className={classes.itemsOne}>
                      {phaseofcrop}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography className={classes.items}>
                      MANUFACTUARED
                    </Typography>
                    <Typography className={classes.itemsOne}>
                      {manufactured}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography className={classes.items}>VARIETY</Typography>
                    <Typography className={classes.itemsOne}>
                      VARIETY
                    </Typography>
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
                    variant="contained"
                    size="large"
                    className={classes.margin}
                    style={{ backgroundColor: "red", color: "white" }}
                    target="_blank"
                    href={youtube}
                  >
                    Youtube
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    className={classes.margin}
                    style={{ backgroundColor: "#00b074" }}
                    target="_blank"
                    href={website}
                  >
                    Website
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Divider />
          <Grid item>
            <Box mt={5} className={classes}>
              <Box className={classes.sellerProfile}>
                <Typography
                  variant="h4"
                  mt={3}
                  style={{ fontSize: "25px", fontWeight: "700", padding: 7 }}
                >
                  Seller Profile
                </Typography>
              </Box>
              <Divider />
              <Box className={classes.sellerBody}>
                <Box mb={2}>
                  <Typography className={classes.descriptionOne}>
                    Personal Details
                  </Typography>
                </Box>
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
                      <Box alignSelf="center">
                        <Grid item>
                          <Typography variant="caption">Seller Name</Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="h5">Rashik</Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="caption">
                            Company Name
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="h5">Mahindra</Typography>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    container
                    className={classes.varified}
                    spacing={1}
                  >
                    <Grid item>
                      <CheckCircleRoundedIcon className={classes.checkICon} />
                    </Grid>
                    <Grid item>Verified User</Grid>
                  </Grid>
                  <Divider orientation="vertical" flexItem />
                  <Grid
                    item
                    xs={3}
                    container
                    direction="column"
                    className={classes.joinDate}
                  >
                    <Grid item>
                      <Typography variant="caption">JOINED ON</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>January 2021</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Divider />
          <MoreByCompany itemCrop={crop} />
        </Grid>
      </Box>
    </div>
  );
}

 export default ProductDetails;
