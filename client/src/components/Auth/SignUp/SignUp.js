import react, { useState } from "react";
import {
  Button,
  CardMedia,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import logo from "../../../images/logo.png";
import { purple, orange } from "@material-ui/core/colors";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import bgImage1 from "../../../Assets/backgroundWeather1.jpg";
import bgImage2 from "../../../Assets/backgroundWeather2.jpg";
import bgImage3 from "../../../Assets/AuthPage.jpg";
import Axios from "axios";
import { authenticate, isAuth } from "../../../helper/authHelper";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import "./style.css"

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    // backgroundImage: `url(https://cdn.pixabay.com/photo/2016/11/21/14/57/wheat-1845835_960_720.jpg)`,
    backgroundImage: `url(${bgImage3})`,
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
  content: {
    lineHeight: 1,
    fontVariantCaps: "all-petite-caps",
    fontWeight: "bold",
  },
  textField: {
    marginTop: 5,
    marginBottom: 5,
    width: 305,
  },
  margin: {
    marginTop: 5,
    marginBottom: 5,
    width: 325,
  },
  signupbtn: {
    // float: "right",
    // margin: "0px 60px 5px 0",
    width: "60%",
  },
}));

const SignUp = ({ history }) => {
  const classes = useStyles();
  const [formVal, setFormVal] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  const [open, setOpen] = useState(false);
  const [responseData, setResponseData] = useState("");
  const [otpVal, setOtpVal] = useState();

  const { name, mobile, email } = formVal;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const fillForm = (text) => (event) => {
    console.log("rext checking", text);
    setFormVal({ ...formVal, [text]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && mobile) {
      Axios.post(`${process.env.REACT_APP_API_URI}/signup`, formVal)
        .then((response) => {
          const { status } = response.data;
          const { name, mobile, email } = response.data.exuser;
          setResponseData(response.data.exuser);
          console.log("response.data", response.data);
          if (!status) {
            alert(`${name}, already taken`);
          } else {
            // alert(`${name}, Welcome our team`);
            handleClickOpen();
            setFormVal({
              ...formVal,
              name: "",
              mobile: "",
              email: "",
            });
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("please fill all fields");
    }
  };

  const handleClose = () => {
    console.log("@@@@@@@@@@@@@@@@@@", responseData);
    Axios.post(`${process.env.REACT_APP_API_URI}/verifyotp`, {
      otp: otpVal,
      mobile: responseData.mobile,
    })
      .then((resp) => {
        // setOpen(false);
        console.log("res.data verify otp", resp.data);
        const { status, token, error } = resp.data;
        if (status) {
          responseData.token = token;
          authenticate(responseData, () => {
            window.location.reload();
            history.push("/");
          });
        } else {
          alert(error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // setOpen(false);
  };

  console.log("form value", formVal);
  console.log("response data", responseData);
  console.log("otp val", otpVal);
  return (
    <>
      {isAuth() ? <Redirect to="/" /> : null}
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
                    style={{
                      fontWeight: "bold",
                      color: "#00b074",
                      mixBlendMode: "color",
                      textDecoration: "underline",
                    }}
                  >
                    Sign Up
                  </Typography>
                  {/* </Typography> */}
                </Grid>
                {/* <Grid>
                  <Typography variant="h6" className={classes.content}>
                    Sign In with your mobile number
                  </Typography>
                </Grid> */}
              </Grid>
              <Grid item container direction="column" spacing={0}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    autoFocus="on"
                    required
                    // fullWidth
                    variant="outlined"
                    label="Enter Name"
                    placeholder="Name"
                    className={classes.textField}
                    value={name}
                    onChange={fillForm("name")}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    autoComplete="off"
                    required
                    variant="outlined"
                    label="Enter Mobile Number"
                    placeholder="Mobile"
                    className={classes.textField}
                    value={mobile}
                    type="number"
                    onChange={fillForm("mobile")}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    variant="outlined"
                    label="Enter Email"
                    placeholder="Email"
                    className={classes.textField}
                    helperText="Email address optional"
                    value={email}
                    onChange={fillForm("email")}
                  />
                </Grid>
                <Link to="/otpauth" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  size="large"
                  style={{ background: "rgb(0, 176, 116)", color: "white" }}
                  className={classes.signupbtn}
                  onClick={handleSubmit}
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <div>
        {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Open form dialog
        </Button> */}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Enter Otp</DialogTitle>
          <DialogContent>
            <DialogContentText>
              number +91 {responseData.mobile}
            </DialogContentText>
            <TextField
              autoFocus="on"
              autoComplete="off"
              //   margin="dense"
              //   id="name"
              label="Otp"
              //   type="password"
              fullWidth
              onChange={(event) => setOtpVal(event.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default SignUp;
