import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { isAuth } from "../../../helper/authHelper";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

const useStyles = makeStyles((theme) => ({
  signIn: {
    marginTop: theme.spacing(1),
    color: "rgb(0, 176, 116)",
    font: "normal normal bold 27px/40px Arial",
    letterSpacing: "0px",
  },
  header: {
    // marginTop: theme.spacing(1),
    color: "rgb(0, 176, 116)",
    font: "normal normal bold 27px/40px Arial",
    letterSpacing: "0px",
  },
  withoutUer: {
    backgroundColor: "currentcolor",
    padding: "10px 22px 10px 24px",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <>
      {isAuth() ? (
        <div>
          <Typography
            variant="h5"
            gutterBottom
            align="center"
            className={classes.signIn}
          >
            {isAuth().first_name}
          </Typography>
        </div>
      ) : (
        <div className={classes.withoutUer}>
          <Button
            variant="contained"
            // color="primary"
            size="large"
            className={classes.header}
            style={{
              border: "1px solid rgb(116 179 84 / 50%)",
              background: "rgba(0, 0, 0, 0.1)",
            }}
            href="/otpauth"
          >
            <AccountCircleOutlinedIcon />
            Register
          </Button> 
        </div>
      )}
    </>
  );
}

export default Header;
