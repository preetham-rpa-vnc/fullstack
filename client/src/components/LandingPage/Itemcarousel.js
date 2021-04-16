import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import '../../Styles/LandingPage.css';
import { useHistory } from "react-router-dom";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 }
  // { width: 1200, itemsToShow: 3 }
];

const breakPoints2 = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 6 }
  ];
  
export default function ItemCarousel(props) {
  const history = useHistory();
  function goToProductDetail(){
    history.push('/itemDetails')
  }
  return (
      <div className="carousel-wrapper" style={{marginTop: props.style? '2%':''}}>
      <p className="carousel-header">{props.header}</p>
        <Carousel breakPoints={props.col?breakPoints2:breakPoints}>
          {props.items.map((value) => (
              <>
            <img src={value.img1} className={props.col?'carousel-img2':'carousel-img'} onClick={()=>goToProductDetail()}/>
            <p className={props.col?"carousel-text-style":"carousel-text"}>{value.text}</p>
            <p className="carousel-text2">{value.price}</p>
            </>
          ))}
        </Carousel>
      </div>
  );
}