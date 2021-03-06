import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Link from "@material-ui/core/Typography";
import { useHistory, Link as Links } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  moreProductsBody: {
    padding: "46px 100px 33px 100px",
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
  root: {
    width: 325,
    marginTop: 40,
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
    // padding: theme.spacing(2),
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
    textAlign: "center",
  },
  moreProductsCard: {
    width: "100%",
    height: "500px",
  },
  variety: {
    marginLeft: "auto",
    textAlign: "center",
    marginTop: -53,
    marginBottom: 34,
  },
}));

function MoreByCompany() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.moreProductsBody}>
        <Typography variant="h4" className={classes.moreProducts}>
          More Products
        </Typography>

        <Grid item xs={9} className={classes.moreProductsCard}>
          <Grid
            container
            spacing={20}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            {/* {itemData.map((data, index) => {
              const { youtube } = data;
              return ( */}
            <Grid
              //   key={index}
              xs={12}
              sm={6}
              md={4}
              className={classes.space}
            >
              <Card className={classes.root} mt={2}>
                <CardActionArea
                // onClick={() => handleClick(data.id)}
                >
                  <Grid container>
                    <Grid item xs={6} className={classes.itemName}>
                      <Grid>
                        <Typography variant="h5">
                          {/* {data.name} */}
                          name
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
                        <Grid item>
                          {/* {data.price} */}
                          price
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <CardMedia
                        className={classes.media}
                        // image={data.image}
                        image="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        title="Contemplative Reptile"
                      />
                    </Grid>
                  </Grid>
                  <Divider />
                  <CardContent>
                    <Grid item container xs={12} className={classes.cro}>
                      {/* <Grid item container xs={12}>
                        <Grid item container xs={6}>
                          <Grid item>Crop</Grid>
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item container xs={6}>
                          <Grid item>Variety</Grid>
                        </Grid>
                      </Grid> */}
                      <Grid item xs={6}>
                        <Grid container direction="column">
                          <Grid variant="h4">crop</Grid>
                          <Grid>
                            <Typography variant="h6">
                              {/* {data.crop} */}
                              crop
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Divider orientation="vertical" flexItem />
                      <Grid item xs={6} className={classes.variety}>
                        <Typography variant="h6" align="center">
                          Variety
                        </Typography>
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
                          {/* {data.manufactured} */}
                          manufactured
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
                          {/* {data.prebuilt} */}prebuilt
                        </Typography>
                      </Grid>
                    </Grid>
                    <Divider />
                  </CardContent>
                </CardActionArea>
                <CardActions align="center">
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
                        to={
                          {
                            //   pathname: youtube,
                          }
                        }
                        target="_blank"
                        // onClick={handleLink}
                      >
                        <YouTubeIcon color="error" />
                      </Links>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default MoreByCompany;
