import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./SignIn.css";
import { authenticate, isAuth } from "../../helper/authHelper";
import { Backdrop, CircularProgress } from "@material-ui/core";
// import { use } from "../../../../server/router/userRouter";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function OtpVerification({ history }) {
  const classes = useStyles();
  const [loginVal, setLoginVal] = useState({});
  const [numberField, setNumberField] = useState(true);
  const [otpField, setOtpField] = useState(false);
  const [otpUser, setOtpUser] = useState({});
  const [open, setOpen] = React.useState(false);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const handleToggle = () => {
  //   setOpen(!open);
  // };

  const { contact_number, otp } = loginVal;

  const handleChange = (text) => (event) => {
    setLoginVal({ ...loginVal, [text]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("check status", contact_number);
    if (!contact_number) {
      alert("please fill all fields");
    } else if (isNaN(contact_number)) {
      // alert(contact_number);
      const name = contact_number;
      Axios.post(`${process.env.REACT_APP_API_URI}/login`, { name })
        .then((res) => {
          console.log("res.data", res.data);
          const { message, status, user } = res.data;
          if (status) {
            authenticate(user, () => {
              window.location.reload();
              history.push("/");
              setLoginVal({ ...loginVal, user_name: "", user_password: "" });
            });
          } else {
            alert(message);
          }
        })
        .catch((err) => console.error(err));
    }
    // else if (contact_number.length < 10) {
    //   alert(`${contact_number}, check your number`);
    // }
    else {
      // alert(contact_number);
      setOpen(!open);
      Axios.post(`${process.env.REACT_APP_API_URI}/sendotp`, loginVal)
        .then((resp) => {
          console.log("res.data send otp", resp.data);
          setOpen(false);
          setOtpUser(resp.data);
          const { user, message, status, otpId } = resp.data;
          console.log(status);
          if (status === "open") {
            setNumberField(false);
            setOtpField(true);
          } else {
            alert("message");
          }
        })
        .catch((err) => console.error(err));
    }
  };

  console.log("otp user", otpUser);

  const NumberField = () => (
    <>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          // type="text"
          // id="username"
          label="Enter Mobile"
          // name="username"
          autoComplete="contactnumber"
          autoFocus
          value={contact_number}
          onChange={handleChange("contact_number")}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Submit
        </Button>
        <Grid container direction="column">
          <Grid item>
            <Link to="/login" variant="body2">
              {"Login with user"}
            </Link>
          </Grid>
          <Grid item>
            <Link to="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
      {/* <Button variant="outlined" color="primary" onClick={handleToggle}>
        Show backdrop
      </Button> */}
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" style={{ color: "#00b074" }} />
      </Backdrop>
    </>
  );

  const verifyOtp = (event) => {
    setOpen(!open);
    event.preventDefault();
    const { user } = otpUser;
    const { mobile } = user;
    console.log(" userData", otpUser);
    console.log("user", user);
    Axios.post(`${process.env.REACT_APP_API_URI}/verifyotp`, {
      otp,
      mobile,
    })
      .then((resp) => {
        setOpen(false);
        console.log("res.data verify otp", resp.data);
        const { status, token, error } = resp.data;
        if (status) {
          user.token = token;
          authenticate(user, () => {
            window.location.reload();
            history.push("/");
            // setLoginVal({ ...loginVal, user_name: "", user_password: "" });
          });
        } else {
          alert(error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const OtpField = () => (
    <>
      <form className={classes.form} noValidate onSubmit={verifyOtp}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          // type="number"
          // id="username"
          label="Enter Otp"
          // name="username"
          autoComplete="otpnumber"
          autoFocus
          value={otp}
          onChange={handleChange("otp")}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Submit Otp
        </Button>
        {/* <Grid container>
          <Grid item>
            <Link to="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid> */}
      </form>
    </>
  );

  console.log("login values", loginVal);

  return (
    <div style={{ marginBottom: "175px" }}>
      {isAuth() ? <Redirect to="/" /> : null}
      <Container component="main" maxWidth="xs" id="container">
        <CssBaseline />
        <div className={classes.paper}>
          {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
          <Avatar
            alt="Remy Sharp"
            src="http://pland.farm/bw-assets/bw-img/logo.png"
            className={classes.image}
            id="testind"
          />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {numberField ? <NumberField /> : null}
          {otpField ? <OtpField /> : null}
        </div>
      </Container>
    </div>
  );
}
