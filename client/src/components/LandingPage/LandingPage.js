import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
import ItemsCard from "./ItemsCard";
import control1 from "../../Assets/ControlCard1.jpeg";
import SeedItems from "./SeedItems";
import tractorImg from "../../Assets/tractor.png";
import tractor2 from "../../Assets/greenTractor.jpg";
import tractor3 from "../../Assets/paddyMachine.jpg";
import seedImg from "../../Assets/seedImage.jpg";
import seedImg2 from "../../Assets/seedImage2.jpg";
import fertilizer from "../../Assets/fertilizer.png";
import rotavator from "../../Assets/rotavator.jpg";
import rotavator2 from "../../Assets/rotavator2.jpg";
import HamburgerMenuItems from "../HamburgerMenuItems/HamburgerMenuItems";

export default function LandingPage() {
  let items = [
    {
      heading: "Top Handpicked item for you",
      images: [
        { img1: tractor3, text: "New Equipments" },
        { img1: tractorImg, text: "Tractor" },
        { img1: tractor2, text: "New Equipments" },
        { img1: seedImg, text: "Seeds" },
      ],
    },
    {
      heading: "Top Handpicked item for you",
      images: [
        { img1: tractor3, text: "New Equipments" },
        { img1: tractorImg, text: "Tractor" },
        { img1: tractor2, text: "New Equipments" },
        { img1: seedImg2, text: "Seeds" },
      ],
    },
    {
      heading: "Top Handpicked item for you",
      images: [
        { img1: tractor3, text: "New Equipments" },
        { img1: tractorImg, text: "Tractor" },
        { img1: tractor2, text: "New Equipments" },
        { img1: seedImg, text: "Seeds" },
      ],
    },
    {
      heading: "Top Handpicked item for you",
      images: [
        { img1: tractor3, text: "New Equipments" },
        { img1: tractorImg, text: "Tractor" },
        { img1: tractor2, text: "New Equipments" },
        { img1: seedImg2, text: "Seeds" },
      ],
    },
  ];
  let items2 = [
    { img1: seedImg, text: "Seed" },
    { img1: seedImg2, text: "Seed" },
    { img1: fertilizer, text: "Fertilizer" },
    { img1: fertilizer, text: "Fertilizer" },
    { img1: rotavator, text: "Rotavator" },
    { img1: rotavator2, text: "Rotavator" },
  ];
  return (
    <div style={{ backgroundColor: "#F1FFF9" }}>
      <SearchCard />
      <SeedItems items={items2} />
      <ItemsCard items={items} />
      {/* <HamburgerMenuItems /> */}
    </div>
  );
}
