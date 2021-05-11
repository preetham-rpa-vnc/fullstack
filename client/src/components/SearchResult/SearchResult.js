import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  List,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import queryString from "query-string";
import Axios from "axios";
import MediaQuery from "react-responsive";
import { useHistory } from "react-router";

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

const SearchResult = ({ location }) => {
  const classes = useStyles();
  const [searchProducts, setSearchProducts] = useState([]);
  const [allBrands, setAllBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [searchItems, setSearchItems] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const searchData = queryString.parse(location.search);
    Axios.get(`${process.env.REACT_APP_API_URI}/findsearchdata`, {
      params: searchData,
    })
      .then((products) => {
        console.log("@@@@@@@@@@@@", products.data);
        if (!products.data) {
          // alert("Product Null");
        }
        setSearchProducts(...searchProducts, products.data);
        // searchResult(products.data);
        // setSearchData({ ...searchData, manufacture: "", crop: "" });
      })
      .catch((err) => console.log(err));

    Axios.get(`${process.env.REACT_APP_API_URI}/getbrands`)
      .then((result) => {
        console.log("result", result.data);
        setAllBrands(...allBrands, result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("search brands", allBrands);
  const handleClick = (id) => {
    history.push(`/product?id=${id}`);
  };

  const handleBrand = (brand) => {
    Axios.get(`${process.env.REACT_APP_API_URI}/getbranditems`, {
      params: {
        brand,
      },
    })
      .then((result) => {
        // console.log(result);
        setSearchItems(false);
        setSelectedBrand(result.data);
      })
      .catch((err) => console.log(err));
  };

  console.log("selected brand", selectedBrand);

  return (
    <Box mt={4} style={{minHeight: 500}}>
      <Grid container md={12} className={classes.mainGrid} spacing={2}>
        <MediaQuery minDeviceWidth={600}>
          <Grid item container sm={3} md={2} direction="column" spacing={2}>
            <Grid item>
              <Box textAlign="center">
                <Typography
                  style={{ marginBottom: "-13px", fontFamily: "Inter" }}
                >
                  Related Brands
                </Typography>
              </Box>
              <Box component="div" className={classes.scroll}>
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  // value={value}
                  // onChange={handleChange}
                  aria-label="Vertical tabs example"
                  className={classes.tabs}
                  // style={{ height: 20 }}
                >
                  {allBrands &&
                    allBrands.map((data, index) => (
                      <Tab
                        label={data.manufacture_name}
                        style={{ margin: "-4px 0" }}
                        onClick={() => handleBrand(data.manufacture_name)}
                      />
                    ))}
                </Tabs>
              </Box>
            </Grid>
          </Grid>
        </MediaQuery>

        <Grid item container direction="column" sm={9} md={10} spacing={0}>
          <Grid item className={classes.headerGrid}>
            <Typography
              variant="h4"
              style={{ padding: 20, fontFamily: "Inter" }}
            >
              Kerala, IN
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="column"
            className={classes.bodyGrid}
            // md={12}
            spacing={2}
          >
            <Grid item style={{ marginTop: "30px" }}>
              <Typography
                variant="h5"
                style={{
                  fontWeight: 600,
                  fontSize: 30,
                  fontFamily: "Inter",
                }}
              >
                Rice crop Related Machinary
              </Typography>
            </Grid>

            {searchItems ? (
              <Grid item container spacing={2}>
                {searchProducts &&
                  searchProducts.slice(0, 10).map((data, index) => (
                    <Grid item xs={12} sm={4} md={3} key={index}>
                      <Card
                        className={classes.card}
                        onClick={() => handleClick(data.product_id)}
                      >
                        <CardMedia
                          className={classes.media}
                          image={
                            "https://cdn.pixabay.com/photo/2016/11/21/14/57/wheat-1845835_960_720.jpg"
                          }
                        />
                        <CardContent className={classes.content}>
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
                                <Typography variant="subtitle1">
                                  {data.product_manufacturer}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography
                                  variant="subtitle1"
                                  className={classes.model}
                                >
                                  {data.product_model}
                                </Typography>
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
                            <Grid iem md={6}>
                              Web site
                            </Grid>
                            <Grid iem md={6}>
                              YouTube Link
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
              </Grid>
            ) : (
              <Grid item container spacing={2}>
                {selectedBrand &&
                  selectedBrand.slice(0, 10).map((data, index) => (
                    <Grid item xs={12} sm={4} md={3} key={index}>
                      <Card
                        className={classes.card}
                        onClick={() => handleClick(data.product_id)}
                      >
                        <CardMedia
                          className={classes.media}
                          image={
                            "https://cdn.pixabay.com/photo/2016/11/21/14/57/wheat-1845835_960_720.jpg"
                          }
                        />
                        <CardContent className={classes.content}>
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
                                <Typography variant="subtitle1">
                                  {data.manufacturer}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography
                                  variant="subtitle1"
                                  className={classes.model}
                                >
                                  {data.product_model}
                                </Typography>
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
                            <Grid iem md={6}>
                              Web site
                            </Grid>
                            <Grid iem md={6}>
                              YouTube Link
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
              </Grid>
            )}
          </Grid>
          {/* <Grid item className={classes.footerGrid}>
            <h1>Footer</h1>
          </Grid> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchResult;
