import {
  AppBar,
  Box,
  CardMedia,
  Divider,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { isAuth } from "../../../helper/authHelper";
import Logo from "../../../images/logo.png";

const useStyles = makeStyles((theme) => ({
  footerBack: {
    backgroundColor: "#186354",
  },
  media: {
    width: 150,
    height: 80,
    marginTop: 4,
    cursor: "pointer",
  },
  copyRight: {
    alignSelf: "center",
  },
  divider: {
    width: 3,
    height: 59,
    backgroundColor: "#234646",
    placeSelf: "center",
    marginLeft: "auto",
  },
  terms: {
    placeContent: "center",
  },
  dividerTwo: {
    height: 25,
    placeSelf: "center",
    width: 2,
    backgroundColor: "#234646",
    margin: "0 10px 10px 10px",
  },
}));

 export default function Footer() {
  const history = useHistory();

  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.footerBack}>
      <Toolbar>
        <Grid container sm={12} md={12}>
          <Grid item container xs={6} sm={6} md={6} direction="row">
            <Grid item>
              <Box>
                <CardMedia
                  className={classes.media}
                  image={Logo}
                  title="Contemplative Reptile"
                  onClick={() => (isAuth() ? history.push("/") : history.push("/"))}
                />
              </Box>
            </Grid>
            <Grid item className={classes.copyRight}>
              <Typography variant="body1" color="inherit">
                © 2021 VNC Digital Services.
              </Typography>
              <Typography variant="caption" color="inherit">
                 All Right Reserved
              </Typography>
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              className={classes.divider}
            />
          </Grid>
          <Grid item container xs={6} className={classes.terms}>
            <Grid item>
              <Typography variant="body1" color="inherit">
                About Us
              </Typography>
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              className={classes.dividerTwo}
            />
            <Grid item>
              <Typography variant="body1" color="inherit">
                Terms and Conditions
              </Typography>
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              className={classes.dividerTwo}
            />
            <Grid item>
              <Typography variant="body1" color="inherit">
                Privacy Policy
              </Typography>
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              className={classes.dividerTwo}
            />
            <Grid item>
              <Typography variant="body1" color="inherit">
                Frequently Asked Questions
              </Typography>
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              className={classes.dividerTwo}
            />
            <Grid item>
              <Typography variant="body1" color="inherit">
                Contact Us
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
