import React, { useEffect, useState } from "react";
import '../../Styles/LandingPage.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default function ItemsCard(props){
    const classes = useStyles();    
    return(
        <div className="items-main-div">
            <Grid container spacing={12}>
            {props.items.map((value, i)=>{
                return(
                <Grid item lg={3} xs={12} md={3}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <p className="card-header">{value.heading}</p>
                            <Grid container spacing={12}>
                            {value.images.map((val,i)=>{
                                return(
                                <Grid item xs={6}>
                                <CardMedia style={{marginLeft:'10px', marginTop:'10px', marginRight:'10px'}}
                                className={classes.media}
                                image={val.img1}
                                title="Contemplative Reptile"
                                />
                                <p className="card-img-txt">{val.text}</p>
                            </Grid>
                            )})}
                            </Grid>
                        </CardActionArea>
                    </Card>
                </Grid>
                )
            })}  
            </Grid>  
        </div>
    )
}