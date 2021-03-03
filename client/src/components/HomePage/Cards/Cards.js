import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Divider, Grid, Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import FirstBody from "./FirstBody/FirstBody";
import { machinery } from "../Items/Items";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  roots: {
    textAlign: "-webkit-center",
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  media: {
    height: 140,
  },
  space: {
    padding: theme.spacing(2),
  },
  gridOne: {
    marginTop: theme.spacing(1.3),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));
const MediaCard = () => {
  const history = useHistory();
  const classes = useStyles();
  const [itemData, setItemData] = useState([]);

  const handleClick = (id) => {
    history.push(`/view?id=${id}`);
  };

  const passData = (items) => {
    setItemData(items);
  };

  useEffect(() => {
    setItemData(machinery);
  }, []);

  return (
    <>
      <div className={classes.roots}>
        <Grid container spacing={2}>
          <Grid item xs={3} m={2} mx="auto" mt={2}>
            <FirstBody passData={passData} />
          </Grid>
          <Grid item xs={9}>
            <Grid
              container
              spacing={20}
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              {itemData.map((data, index) => (
                <Grid
                  key={index}
                  xs={12}
                  sm={6}
                  md={3}
                  className={classes.space}
                >
                  <Card
                    className={classes.root}
                    mt={2}
                    onClick={() => handleClick(data.id)}
                  >
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={data.image}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {data.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {data.comment}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      {/* <Button size="small" color="primary">
                    Share
                  </Button> */}
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => handleClick(data.id)}
                      >
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default MediaCard;
