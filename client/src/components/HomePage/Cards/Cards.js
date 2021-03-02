import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

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
}));
const MediaCard = () => {
  const history = useHistory();
  const classes = useStyles();
  const machinery = [
    {
      id: "1",
      name: "Item",
      image:
        "https://cdn.pixabay.com/photo/2016/06/23/03/26/coffee-grains-1474601_960_720.jpg",
      comment:
        " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      id: "2",
      name: "Item",
      image:
        "https://cdn.pixabay.com/photo/2011/08/17/12/52/wheat-8762_960_720.jpg",
      comment:
        " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      id: "3",
      name: "Item",
      image:
        "https://cdn.pixabay.com/photo/2018/07/15/20/43/onion-3540502_960_720.jpg",
      comment:
        " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      id: "4",
      name: "Item",
      image:
        "https://cdn.pixabay.com/photo/2016/08/15/14/36/lavender-1595587_960_720.jpg",
      comment:
        " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      id: "5",
      name: "Item",
      image:
        "https://cdn.pixabay.com/photo/2019/10/06/13/31/potato-harvest-4530241_960_720.jpg",
      comment:
        " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      id: "6",
      name: "Item",
      image:
        "https://cdn.pixabay.com/photo/2018/10/03/21/57/cabbage-3722498_960_720.jpg",
      comment:
        " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
  ];

  const handleClick = (id) => {
    console.log(id);
    history.push(`/view?id=${id}`);
  };

  return (
    <>
      <div className={classes.roots}>
        <Grid
          container
          spacing={20}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {machinery.map((data, index) => (
            <Grid key={index} xs={12} sm={6} md={4} className={classes.space}>
              <Card className={classes.root} mt={2} onClick={() => handleClick(data.id)}>
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
                  <Button size="small" color="primary" onClick={() => handleClick(data.id)}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default MediaCard;
