import React, { useEffect, useState } from "react";
import '../../Styles/Categories.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PhoneIcon from '@material-ui/icons/PhoneInTalk';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default function SpecificationCard(props){
    const classes = useStyles();    
    return(
        <Card style={{border:'0.5px solid #707070', borderRadius:'7px', marginLeft:'10px', marginTop:'20px', marginBottom:'10px'}}>
            <Grid container spacing={12}>
                <Grid item lg={6} xs={12} md={6}>
                <img src={props.item.img} style={{height:'20em', width:'20em'}}/>
                  <div className="icons-main-div">
                    <span className="spec-img-txt">Industry Leader</span>
                    <VerifiedUserIcon className="icon-style"/>
                    <span className="spec-img-txt">Trustseal Verified</span>
                    <div className="icon-div">
                      <OndemandVideoIcon className="icon-style2"/>
                      <span className="spec-img-txt">Preview Video</span>
                    </div>
                </div>
                </Grid>
               <Grid item lg={6} xs={12} md={6}>
                  <p className="spec-header">{props.item.header}</p>
                  <span className="spec-price-txt">Ask Price</span>
                  <p className="spec-text">Brand:{props.item.brand}</p>
                  <p className="spec-text">Number od Cylinders: {props.item.cylinders}</p>
                  <p className="spec-text">Lifting Capacity:{props.item.liftingCapacity}</p>
                  <p className="spec-text">Model Name/Number:{props.item.modalNameNo}</p>
                  <p className="spec-text">Number of Gears:{props.item.gears}</p>
                  <p className="spec-text" style={{marginBottom:'11%'}}>Transmission Type:{props.item.transmissionType}</p>
                  <span className="spec-price-txt">read more...</span>
                  <div style={{marginTop:'10%', marginBottom:'5%'}}>
                    <Button className="spec-btn" variant="contained"><PhoneIcon/>Contact Supplier</Button>
                    <Button className="spec-btn" style={{marginLeft:'15px'}} variant="contained">Request Quote</Button>
                  </div>
               </Grid>
            </Grid>
        </Card>
        
    )
}