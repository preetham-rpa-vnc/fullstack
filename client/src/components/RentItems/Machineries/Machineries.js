import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const images = [
  {
    name: "Product Name",
    price: 3520300,
    image:
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Product Name",
    price: 3520300,
    image:
      "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Product Name",
    price: 3520300,
    image:
      "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Product Name",
    price: 3520300,
    image:
      "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Product Name",
    price: 3520300,
    image:
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Product Name",
    price: 3520300,
    image:
      "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Product Name",
    price: 3520300,
    image:
      "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Product Name",
    price: 3520300,
    image:
      "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
];

const useStyles = makeStyles((theme) => ({
  headingOne: {
    fontWeight: 600,
    fontSize: 30,
    fontFamily: "Inter",
    margin: "0px 0px -17px 16px",
    marginBottom: "-17px",
  },
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
    cursor: "pointer",
  },
  media: {
    paddingTop: "56.25%",
  },
  content: {
    textAlign: "left",
    padding: theme.spacing.unit * 3,
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`,
  },
  heading: {
    fontWeight: "bold",
  },
  subheading: {
    lineHeight: 1.8,
  },
}));

function Machineries() {
  const classes = useStyles();

  return (
    <>
      <Grid item>
        <Typography className={classes.headingOne} style={{ color: "#226d36" }}>
          Machineries Near You
        </Typography>
      </Grid>

      <Grid item container spacing={2} style={{ padding: 16 }}>
        {images &&
          images.slice(0, 10).map((data, index) => (
            <Grid item xs={12} sm={4} md={3} key={index}>
              <Card
                className={classes.card}
                // onClick={() => handleClick(data.product_id)}
              >
                <CardMedia className={classes.media} image={data.image} />
                <CardContent className={classes.content}>
                  <Typography
                    className={"MuiTypography--heading"}
                    variant="h6"
                    gutterBottom
                  >
                    {data.product_name}
                  </Typography>
                  <Typography
                    className={"MuiTypography--subheading"}
                    variant={"caption"}
                  >
                    <Grid container md={12} direction="column">
                      <Grid item>
                        <Typography variant="subtitle1">
                          {data.product_manufacturer}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="subtitle1"
                          className={classes.model}
                        >
                          {data.product_model}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">
                          ₹ {data.product_price}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Typography>
                  <Divider className={classes.divider} light />
                  <Grid md={12} container>
                    <Grid iem md={6}>
                      Web site
                    </Grid>
                    <Grid iem md={6}>
                      YouTube Link
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default Machineries;
