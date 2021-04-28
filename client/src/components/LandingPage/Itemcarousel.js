import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import "../../Styles/LandingPage.css";
import { useHistory } from "react-router-dom";
import Cards from "./Cards";
import Axios from "axios";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  // { width: 1200, itemsToShow: 3 }
];

const breakPoints2 = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 6 },
];

export default function ItemCarousel(props) {
  const history = useHistory();
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URI}/getallproducts`)
      .then((allDatas) => {
        console.log("all datas", allDatas.data);
        setAllItems(allDatas.data);
        // setCrops(allDatas.data.crop)
      })
      .catch((err) => console.log(err));
  }, []);

  function goToProductDetail(product) {
    history.push(`/product?product=${product}`);
  }
  return (
    <div
      className="carousel-wrapper"
      style={{ marginTop: props.style ? "2%" : "" }}
    >
      <p className="carousel-header">{props.header}</p>
      <Carousel breakPoints={props.col ? breakPoints2 : breakPoints}>
        {allItems.slice(0, 10).map((value, index) => (
          <>
            <img
              key={index}
              src="https://t4.ftcdn.net/jpg/02/18/35/69/240_F_218356901_sD5osSEexqWCL0MQWuSdCh3awhmh9mer.jpg"
              className={props.col ? "carousel-img2" : "carousel-img"}
              onClick={() => goToProductDetail(value.product_name)}
            />
            <p className={props.col ? "carousel-text-style" : "carousel-text"}>
              {value.product_name}
            </p>
            <p className="carousel-text2">{value.price}</p>
          </>
        ))}
      </Carousel>
      {/* <Cards /> */}
    </div>
  );
}
