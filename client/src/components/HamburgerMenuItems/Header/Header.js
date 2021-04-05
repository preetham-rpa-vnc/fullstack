import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  signIn: {
    marginTop: theme.spacing(1),
    color: "rgb(0, 176, 116)",
    font: "normal normal bold 27px/40px Arial",
    letterSpacing: "0px",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div>
      <Typography
        variant="h5"
        gutterBottom
        align="center"
        className={classes.signIn}
      >
        Hello, Sign In
      </Typography>
    </div>
  );
}

export default Header;
