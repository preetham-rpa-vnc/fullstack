import React, { useEffect, useState } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import '../../Styles/Categories.css';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default function CategoryCard(props){
    const classes = useStyles();  
    return(
        <Card className={classes.root}>
            <CardActionArea>
                <p className="categories-card-header">{props.items[0].header}</p>
                <p className="categories-card-sub-text">{props.items[0].text1}</p>
                <p className="categories-card-sub-text">{props.items[0].text2}</p>
                <p className="categories-card-sub-text">{props.items[0].text3}</p>
                <p className="categories-card-sub-text">{props.items[0].text4}</p>
                <p className="categories-card-more">More +</p>
            </CardActionArea>
        </Card>
    )
}