import React, { useEffect, useState } from "react";
import '../../Styles/Categories.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import redTreactor from '../../Assets/redTractor.jpg';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default function CategoryItemCard(props){
    console.log(props)
    const classes = useStyles();    
    return(
        <Card style={{border:'0.5px solid #707070', borderRadius:'7px', marginLeft:'10px'}}>
                <img src={props.item.img}/>
                <div style={{backgroundColor:'#ECEAEA', marginBottom:'0px'}}>
                    <p className="category-item-subtxt">{props.item.text}</p>
                    {props.item.price && <p className="category-item-price-txt">{props.item.price}</p>}
                    {props.item.text2 && <p className="category-item-txt">{props.item.text2}</p>}
                </div>
        </Card>
    )
}