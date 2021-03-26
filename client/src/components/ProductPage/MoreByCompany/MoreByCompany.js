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
// import FirstBody from "./FirstBody/FirstBody";
// import { machinery } from "../Items/Items";
// import SeachItem from "../SearchItem";
import LinkIcon from "@material-ui/icons/Link";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Redirect } from "react-router-dom";
import Axios from "axios";

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
    marginTop: theme.spacing(1),
    fontWeight: "bold",
    fontSize: theme.spacing(1.8),
  },
  itemName: {
    marginTop: theme.spacing(2),
  },
  moreProducts: {
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
}));
const MediaCard = () => {
  const history = useHistory();
  const classes = useStyles();
  const [itemData, setItemData] = useState([]);

  const handleClick = (id) => {
    console.log("item _id", id);
    history.push(`/product?id=${id}`);
    // history.push(`/view?id=${id}`);
  };

  const passData = (items) => {
    setItemData(items);
  };

  useEffect(() => {
    Axios.get(`http://localhost:5000/getsimileritems`)
      .then((items) => {
        console.log("similar items ", items.data);
        setItemData(items.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className={classes.roots}>
        <Grid container direction="column" spacing={3}>
          <Typography variant="h4" className={classes.moreProducts}>
            Similar Products
          </Typography>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Grid
                  container
                  spacing={20}
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                >
                  {itemData.map((data, index) => {
                    const { youtube } = data;
                    return (
                      <Grid
                        key={index}
                        xs={12}
                        sm={6}
                        md={3}
                        className={classes.space}
                      >
                        <Card className={classes.root} mt={2}>
                          <CardActionArea onClick={() => handleClick(data._id)}>
                            <Grid container>
                              <Grid item xs={6} className={classes.itemName}>
                                <Grid>
                                  <Typography variant="h5">
                                    {data.name}
                                  </Typography>
                                </Grid>
                                <Grid
                                  container
                                  variant="h4"
                                  spacing={1}
                                  // align="center"
                                  className={classes.price}
                                >
                                  <Grid item>₹</Grid>
                                  <Grid item>{data.price}</Grid>
                                </Grid>
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
                                    <Grid>
                                      <Typography variant="h6">
                                        {data.crop}
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Divider />
                                <Grid item xs={6}>
                                  <Typography variant="h6">Variety</Typography>
                                </Grid>
                              </Grid>
                              <Divider />
                              <Grid container className={classes.crop}>
                                <Grid item xs={6} align="left">
                                  <Typography variant="subtitle1">
                                    Manufactured
                                  </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography variant="h6">
                                    {data.manufactured}
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
                                    {data.prebuilt}
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Divider />
                            </CardContent>
                          </CardActionArea>
                          <CardActions>
                            <Grid container spacing={2}>
                              <Grid item xs={6}>
                                <Link size="small" color="primary">
                                  Name
                                </Link>
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
    </>
  );
};

 export default MediaCard;
