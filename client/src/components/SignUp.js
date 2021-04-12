import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
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
import Axios from "axios";
import "./SignUp.css";
import { isAuth } from "../helper/authHelper";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [formVal, setFormVal] = useState({
    first_name: "",
    // lname: "",
    user_name: "",
    user_mobile: "",
    user_password: "",
  });

  const fillForm = (text) => (event) => {
    console.log("rext checking", text); 
    setFormVal({ ...formVal, [text]: event.target.value });
  };

  const {
    first_name,
    last_name,
    user_name,
    user_mobile,
    user_password,
  } = formVal;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (first_name && user_name && user_mobile && user_password) {
      Axios.post(`${process.env.REACT_APP_API_URI}/signup`, formVal)
        .then((response) => {
          const { status, exuser } = response.data;
          console.log("response.data", response.data);
          if (!status) {
            alert(`${exuser}, already taken`);
          } else {
            alert(`${exuser}, Welcome our team`);
            setFormVal({
              ...formVal,
              first_name: "",
              last_name: "",
              user_name: "",
              user_mobile: "",
              user_password: "",
            });
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("please fill all fields");
    }
  };

  console.log(formVal);
  return (
    <Container component="main" maxWidth="xs" style={{marginBottom: 30}}>
      {isAuth() ? <Redirect to="/" /> : null}
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
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="first_name"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={first_name}
                onChange={fillForm("first_name")}
              />
            </Grid>
            <Grid item xs={12} sm={6}> 
              <TextField
                variant="outlined"
                // required
                fullWidth
                id="lastname"
                label="Last Name"
                name="lastname"
                autoComplete="last_name"
                value={last_name}
                onChange={fillForm("last_name")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                autoComplete="user_name"
                value={user_name}
                onChange={fillForm("user_name")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="number"
                variant="outlined"
                required
                fullWidth
                id="mobile"
                label="Mobile Number"
                name="mobile"
                autoComplete="user_mobile"
                value={user_mobile}
                onChange={fillForm("user_mobile")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={user_password}
                onChange={fillForm("user_password")}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/otpauth" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
