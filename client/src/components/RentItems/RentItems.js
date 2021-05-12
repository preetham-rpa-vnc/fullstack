import react, { useState } from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
// import "react-multi-carousel/lib/styles.css";
import SideBar from "./SideBar/SideBar";
import Carousel from "./Carouse/Carousel";
import Machineries from "./Machineries/Machineries";
import { green, purple, red } from "@material-ui/core/colors";
import LoadMore from "./LoadMore/LoadMore";
// import Carousel from "react-multi-carousel";

const useStyles = makeStyles((theme) => ({
  headingOne: {
    fontWeight: 600,
    fontSize: 30,
    fontFamily: "Inter",
    margin: "0px 0px -17px 16px",
    marginBottom: "-17px",
  },
  heading: {
    fontWeight: "bold",
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const RentItems = () => {
  const classes = useStyles();
  const [commonItem, setCommonItem] = useState("block");
  const [loadMore, setLoadMore] = useState("none");

  const handleCommonItem = () => {
    setCommonItem("none");
    setLoadMore("block");
  };

  const changeDisplay = (data) => {
    setCommonItem("block");
    setLoadMore("none");
  };
  return (
    <>
      <Box display={commonItem}>
        <Grid container md={12} style={{ marginTop: "20px" }}>
          <Grid item xs={12} sm={2} md={2}>
            <SideBar />
          </Grid>

          <Grid
            item
            container
            xs={12}
            sm={10}
            md={10}
            direction="column"
            // spacing={0}
          >
            <Grid container direction="column">
              
              <Grid item>
                <Typography className={classes.headingOne}>
                  Near Bengaluru
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Carousel />
              </Grid>
            </Grid>

            <Grid
              item
              container
              // spacing={0}
              style={{ justifyContent: "center" }}
            >
              <Machineries />
            </Grid>
          </Grid>
        </Grid>
        <Box textAlign="center" m={3}>
          <ThemeProvider theme={theme}>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              // className={classes.margin}
              onClick={handleCommonItem}
            >
              Load More
            </Button>
          </ThemeProvider>
        </Box>
      </Box>
      <Box display={loadMore}>
        <LoadMore changeDisplay={changeDisplay} />
      </Box>
    </>
  );
};

export default RentItems;
