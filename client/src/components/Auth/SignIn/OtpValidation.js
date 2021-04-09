import react from "react";
import {
  Box,
  Button,
  CardMedia,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../../images/logo.png";
import OtpInput from "react-otp-input";

import bgImage1 from "../../../Assets/backgroundWeather1.jpg";
import bgImage2 from "../../../Assets/backgroundWeather2.jpg";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    backgroundImage: `url(https://cdn.pixabay.com/photo/2016/11/21/14/57/wheat-1845835_960_720.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    minHeight: "85vh",
    backgroundColor: "#cccccc",
    filter: "blur(0px)",
    position: "relative",
    // padding: theme.spacing(4.4, 6.3, 0, 6.3),
  },
  logo: {
    width: "220px",
    height: "100px",
    marginTop: "30px",
  },
  paper: {
    width: 500,
    background: "rgb(0 0 0 / 10%)",
    borderRadius: 10,
    // padding: "0px 0 2px 65px",
    margin: "20px 0 50px 0",
    textAlign: "center",
  },
  //   otpField: {
  //     color: "red",
  //     background: "blue",
  //     justifyContent: "center",
  //     placeContent: "center",
  //   },
  inputField: {
    margin: "0 0 0 184px",
  },
}));

const OtpValidation = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.mainGrid} container direction="column">
        <Grid item style={{ alignSelf: "center" }}>
          <CardMedia className={classes.logo} image={logo} title="Logo" />
        </Grid>
        <Grid item style={{ placeSelf: "center" }}>
          <Paper className={classes.paper}>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <Grid>
                  <Typography
                    variant="h3"
                    style={{ fontWeight: "bold", color: "#00b074" }}
                  >
                    Enter Otp
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="h6">
                    Sign In with your mobile number
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Grid>{/* <Typography>Mobile Number</Typography> */}</Grid>
                <Grid style={{ placeContent: "center" }}>
                  <Box className={classes.inputField}>
                    <OtpInput
                      style={{ width: "50px" }}
                      className={classes.otpField}
                      // value={this.state.otp}
                      // onChange={this.handleChange}
                      numInputs={6}
                      separator={<span>=</span>}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid item>
                <Button variant="contained" size="large" color="primary">
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default OtpValidation;
