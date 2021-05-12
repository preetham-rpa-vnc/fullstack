import React from "react";
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green, purple, red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(5),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function CustomizedButtons() {
  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" className={classes.margin}>
          Theme Provider
        </Button>
      </ThemeProvider>
 
    </div>
  );
}
