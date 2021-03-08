import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import queryString from "query-string";
import { machinery } from "../Items/Items";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    color: "white",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 0, 9.9),
    backgroundImage:
      "url(" +
      "https://images.unsplash.com/photo-1550867921-3687b1259aed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" +
      ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  test: {
    paddingTop: theme.spacing(4),
  },
  status: {
    marginLeft: theme.spacing(0),
  },
  cardTwo: {
    marginTop: theme.spacing(2),
    color: "white"
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  image: {
    width: "100%",
  },
}));

export default function Album({ location }) {
  const classes = useStyles();
  const id = queryString.parse(location.search);
  console.log("datas", id);

  console.log(machinery);

  let item = machinery.filter((data) => data.id === id.id);

  console.log("outp", item);
 
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            {item.map((data, index) => (
              <div key={index}>
                <Typography
                  component="h1"
                  variant="h2"
                  // align="center"
                  // color="textPrimary"
                  gutterBottom
                >
                  {data.name}
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <img src={data.image} className={classes.image} />
                  </Grid>
                  <Grid item xs={6} container direction="column" spacing={2}>
                    <Grid item xs className={classes.cardTwo}>
                      <Typography gutterBottom variant="subtitle1">
                        {data.name}
                      </Typography>
                      <Grid
                        direction="row"
                        container
                        spacing={2}
                        className={classes.status}
                      >
                        <Typography gutterBottom variant="subtitle1">
                          Status:
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          color="error"
                        >
                          Available
                        </Typography>
                      </Grid>
                      <Typography
                        color="error"
                        // color="textSecondary"
                        style={{ cursor: "pointer" }}
                        className={classes.test}
                      >
                        Price $19.00
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography
                    variant="h5"
                    align="center"
                    // color="textSecondary"
                    paragraph
                  >
                    Something short and leading about the collection below—its
                    contents, the creator, etc. Make it short and sweet, but not
                    too short so folks don&apos;t simply skip over it entirely.
                  </Typography>
                </Grid>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                      <Button variant="contained" color="primary">
                        Buy Now
                      </Button>
                    </Grid>
                    {/* <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid> */}
                  </Grid>
                </div>
              </div> 
            ))}
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}
