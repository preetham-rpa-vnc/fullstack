import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Typography";
import { Box, Divider, Grid, Paper, Typography } from "@material-ui/core";
import { useHistory, Link as Links } from "react-router-dom";
import FirstBody from "./FirstBody/FirstBody";
import { machinery } from "../Items/Items";
import SeachItem from "../SearchItem";
import LinkIcon from "@material-ui/icons/Link";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import { crops } from "../Items/CropItem";
import UserLocation from "../../UserLocation/UserLocation";
import { isAuth } from "../../../helper/authHelper";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  roots: {
    textAlign: "-webkit-center",
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  media: {
    height: 140,
  },
  space: {
    padding: theme.spacing(2),
  },
  gridOne: {
    marginTop: theme.spacing(1.3),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  searchItem: {
    margin: theme.spacing(4),
  },
  crop: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  price: {
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: theme.spacing(1.8),
  },
  itemName: {
    alignSelf: "center",
  },
  itemNames: {
    fontWeight: "bold",
    color: "#1f2922",
  },
  firstBody: {
    height: 300,
  },
  crops: {
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: "normal",
    textAlign: "right",
    color: "#141414",
  },
  variety: {
    marginLeft: "auto",
    margin: "-50px 0 0 135px",
  },
  model: {
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: "normal",
    // textAlign: "right",
    color: "#141414",
  },
  modelName: {
    color: "#827575",
    fontWeight: "bold",
    display: "inline-block",
    width: 116,
    whiteSpace: "nowrap",
    overflow: "hidden !important",
    textOverflow: "ellipsis",
  },
  manufacture: {
    flexShrink: "1",
    flexGrow: "1",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));
const MediaCard = () => {
  const history = useHistory();
  const classes = useStyles();
  const [itemData, setItemData] = useState([]);
  const [cropss, setCrops] = useState([]);

  const handleClick = (id) => {
    console.log("item _id", id);
    history.push(`/product?id=${id}`);
    // history.push(`/view?id=${id}`);
  };

  const passData = (items) => {
    setItemData(items);
  };

  useEffect(() => {
    console.log("EEEEEEEEEEEEEEEEe", itemData);
    Axios.get(`${process.env.REACT_APP_API_URI}/getallproducts`)
      .then((allDatas) => {
        console.log("all datas", allDatas.data);
        setItemData(allDatas.data);
        // setCrops(allDatas.data.crop) 
      })
      .catch((err) => console.log(err));
 
    // setItemData(machinery);
  }, []);

  const newFunc = (data) => {
    console.log("newFun", data);
    setItemData(data);
  };

  console.log("item all data", itemData);

  const handleLink = () => {
    <Redirect href="https://www.youtube.com/watch?v=nziA33FrhoI" />;
    // Redirect="https://www.youtube.com/watch?v=nziA33FrhoI"
  };

  const searchR = (searchProducts) => {
    console.log("data################", searchProducts);
    setItemData(searchProducts);
    alert("serachR");
  };

  const userDatas = (userDatails) => {
    console.log("##########", userDatails);
    Axios.post(`${process.env.REACT_APP_API_URI}/loginuserdata`, userDatails)
      .then((userRes) => {
        const { messsage } = userRes.data;
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className={classes.roots}>
        <Grid container direction="column" spacing={3}>
          <Grid item mt={3} className={classes.searchItem}>
            <SeachItem searchResult={searchR} />
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item xs={3} m={2} mx="auto" mt={2}>
                <FirstBody
                  itemData={itemData}
                  passCrop={newFunc}
                  className={classes.firstBody}
                />
              </Grid>
              <Grid item xs={9}>
                <Grid
                  container
                  spacing={20}
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                >
                  {itemData.slice(0, 12).map((data, index) => {
                    const { youtube, crops, model } = data;
                    return (
                      <Grid
                        key={index}
                        xs={12}
                        sm={6}
                        md={4}
                        className={classes.space}
                      >
                        <Card className={classes.root} mt={2}>
                          <CardActionArea onClick={() => handleClick(data._id)}>
                            <Grid container>
                              <Grid item xs={6} className={classes.itemName}>
                                <Typography
                                  variant="h5"
                                  className={classes.itemNames}
                                >
                                  {data.product_name}
                                </Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <CardMedia
                                  className={classes.media}
                                  image={data.image}
                                  title="Contemplative Reptile"
                                />
                              </Grid>
                            </Grid>
                            <Divider />
                            <CardContent>
                              <Grid container className={classes.cro}>
                                <Grid item xs={6}>
                                  <Grid
                                    container
                                    direction="column"
                                    align="left"
                                  >
                                    <Grid variant="h4">crop</Grid>
                                    <Grid container xs={12} spacing={1}>
                                      <Grid item>
                                        <Typography
                                          variant="h6"
                                          className={classes.crops}
                                        >
                                          {data.product_crops}
                                        </Typography>
                                      </Grid>
                                      {/* {crops.slice().map((datas) => {
                                        return (
                                          <Grid item>
                                            <Typography
                                              variant="h6"
                                              className={classes.crops}
                                            >
                                              {datas}
                                            </Typography>
                                          </Grid>
                                        );
                                      })} */}
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Divider orientation="vertical" flexItem />
                                <Grid
                                  item
                                  container
                                  xs={6}
                                  direction="column"
                                  className={classes.variety}
                                >
                                  <Box item m={1}>
                                    <Grid item>
                                      <Typography className={classes.model}>
                                        Model
                                      </Typography>
                                    </Grid>
                                    <Grid item>
                                      <Typography className={classes.modelName}>
                                        {data.product_model}
                                      </Typography>
                                    </Grid>
                                  </Box>
                                </Grid>
                              </Grid>
                              <Divider />
                              <Grid container className={classes.crop}>
                                <Grid item xs={6} align="left">
                                  <Typography variant="subtitle1">
                                    Manufacturer
                                  </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography
                                    variant="h6"
                                    className={classes.manufacture}
                                  >
                                    {data.product_manufacturer}
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Divider />
                              <Grid container className={classes.crop}>
                                <Grid item xs={6}>
                                  <Typography
                                    variant="subtitle1"
                                    align="left"
                                    color="inherit"
                                  >
                                    Prebuilt
                                  </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography variant="h6">
                                    {data.pre_build}
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Divider />
                            </CardContent>
                          </CardActionArea>
                          <CardActions>
                            <Grid container spacing={2}>
                              <Grid
                                item
                                container
                                xs={6}
                                spacing={1}
                                className={classes.price}
                              >
                                <Grid item>₹</Grid>
                                <Grid item>{data.product_price}</Grid>
                              </Grid>
                              <Grid item xs={6}>
                                <Links
                                  cursor="default"
                                  color="primary"
                                  size="small"
                                  to={{
                                    pathname: youtube,
                                  }}
                                  target="_blank"
                                  onClick={handleLink}
                                >
                                  <YouTubeIcon color="error" />
                                </Links>
                              </Grid>
                            </Grid>
                          </CardActions>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <UserLocation userDatas={userDatas} />
    </>
  );
};

export default MediaCard;
