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
import { authenticate, isAuth } from "../helper/authHelper";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center",
  },
  // avatar: {
  //   margin: theme.spacing(1),
  //   backgroundColor: theme.palette.secondary.main,
  // },
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
  mains: {
    marginBottom: "75px",
  },
}));

export default function SignIn({ history }) {
  const classes = useStyles();
  const [loginVal, setLoginVal] = useState({
    user_name: "",
    user_password: "",
  });

  const { user_name, user_password } = loginVal;

  const handleChange = (text) => (event) => {
    setLoginVal({ ...loginVal, [text]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post(`${process.env.REACT_APP_API_URI}/login`, loginVal)
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
  };

  console.log("login values", loginVal);
  return (
    <div className={classes.mains}>
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
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              autoComplete="username"
              autoFocus
              value={user_name}
              onChange={handleChange("user_name")}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={user_password}
              onChange={handleChange("user_password")}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container direction="column">
              <Grid item>
                <Link to="/otpauth" variant="body2">
                  {"Login with mobile"}
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            {/* <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              autoComplete="username"
              autoFocus
              value={user_name}
              onChange={handleChange("user_name")}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={user_password}
              onChange={handleChange("user_password")}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container direction="column">
              <Grid item>
                <Link to="/otpauth" variant="body2">
                  {"Login with mobile"}
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </form>
        </div>
      </Container>
    </div>
  );
}
