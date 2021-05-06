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
    height: 225,
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
  }, []);

  console.log("search product", searchProducts);
  const handleClick = (id) => {
    history.push(`/product?id=${id}`);
  };

  return (
    <Box mt={4}>
      <Grid container md={12} className={classes.mainGrid} spacing={2}>
        <MediaQuery minDeviceWidth={600}>
          <Grid item container sm={3} md={2} direction="column" spacing={2}>
            <Grid item>
              <Box textAlign="center">
                <Typography
                  style={{ marginBottom: "-13px", fontFamily: "Inter" }}
                >
                  Related Categories
                </Typography>
              </Box>
              <Box component="div" className={classes.scroll}>
                <Tabs
                  // style={{ height: 20 }}
                  orientation="vertical"
                  variant="scrollable"
                  // value={value}
                  // onChange={handleChange}
                  aria-label="Vertical tabs example"
                  className={classes.tabs}
                >
                  <Tab
                    label="Item Ones"
                    style={{ margin: "-6px 0 -6px 0", height: "0px" }}
                  />
                  <Tab label="Item Two" style={{ margin: "-6px 0 -6px 0" }} />
                  <Tab label="Item Three" style={{ margin: "-6px 0 -6px 0" }} />
                  <Tab label="Item Four" style={{ margin: "-6px 0 -6px 0" }} />
                  <Tab label="Item Five" style={{ margin: "-6px 0 -6px 0" }} />
                  <Tab label="Item Six" style={{ margin: "-6px 0 -6px 0" }} />
                  <Tab label="Item Seven" style={{ margin: "-6px 0 -6px 0" }} />
                </Tabs>
              </Box>
            </Grid>

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
                  <Tab label="Item Ones" style={{ margin: "-6px 0 -6px 0" }} />
                  <Tab label="Item Two" style={{ margin: "-6px 0 -6px 0" }} />
                  <Tab label="Item Three" style={{ margin: "-6px 0 -6px 0" }} />
                  <Tab label="Item Four" style={{ margin: "-6px 0 -6px 0" }} />
                  <Tab label="Item Five" style={{ margin: "-6px 0 -6px 0" }} />
                  <Tab label="Item Six" style={{ margin: "-6px 0 -6px 0" }} />
                  <Tab label="Item Seven" style={{ margin: "-6px 0 -6px 0" }} />
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
                  fontWeight: 500,
                  fontSize: "xx-large",
                  fontFamily: "Inter",
                }}
              >
                Machinery
              </Typography>
            </Grid>
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
                                Mahindra
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

              {/* <Grid item md={3} xs={12} sm={4}>
                <Card className={classes.card}>
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
                      Product Name
                    </Typography>
                    <Typography
                      className={"MuiTypography--subheading"}
                      variant={"caption"}
                    >
                      <Grid container md={12} direction="column">
                        <Grid item>
                          <Typography variant="subtitle1">Mahindra</Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle1">$ 324000</Typography>
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
              <Grid item md={3} xs={12} sm={4}>
                <Card className={classes.card}>
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
                      Product Name
                    </Typography>
                    <Typography
                      className={"MuiTypography--subheading"}
                      variant={"caption"}
                    >
                      <Grid container md={12} direction="column">
                        <Grid item>
                          <Typography variant="subtitle1">Mahindra</Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle1">$ 324000</Typography>
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
              <Grid item md={3} xs={12} sm={4}>
                <Card className={classes.card}>
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
                      Product Name
                    </Typography>
                    <Typography
                      className={"MuiTypography--subheading"}
                      variant={"caption"}
                    >
                      <Grid container md={12} direction="column">
                        <Grid item>
                          <Typography variant="subtitle1">Mahindra</Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle1">$ 324000</Typography>
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
              </Grid> */}
            </Grid>
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
