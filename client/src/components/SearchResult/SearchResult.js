import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const faces = [
  "http://i.pravatar.cc/300?img=1",
  "http://i.pravatar.cc/300?img=2",
  "http://i.pravatar.cc/300?img=3",
  "http://i.pravatar.cc/300?img=4",
];

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
  // media: {
  //   width: "100%",
  //   height: 100,
  // },
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
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
}));

const SearchResult = () => {
  const classes = useStyles();

  return (
    <Box mt={4}>
      <Grid container md={12} className={classes.mainGrid}>

        <Grid item md={2}>
          {/* <h1>md={3}</h1> */}
        </Grid>


        <Grid item container direction="column" md={10} spacing={3}>
          <Grid item className={classes.headerGrid}>
            <Typography variant="h4" style={{ padding: 20 }}>
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
            <Grid item >
              <Typography variant="h5">Machinary</Typography>
            </Grid>
            <Grid item container spacing={2} >
              <Grid item md={3}>
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
              <Grid item md={3}>
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
              <Grid item md={3}>
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
              <Grid item md={3}>
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
