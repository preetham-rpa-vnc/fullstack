import React from "react";
import HamburgerIcon from "./HamburgerIcon/HamburgerIcon";

// const useStyles = makeStyles((theme) => ({
//   list: {
//     width: 250,
//   },
//   //   fullList: {
//   //     width: "auto",
//   //   },
//   //   hamburgerMenu: {
//   //     color: "#fff",
//   //   },
//   divider: {
//     backgroundColor: "rgb(0, 176, 116)",
//     margin: theme.spacing(1.4, 0.7, 0.7, 0.7),
//     maxHeight: 4,
//     padding: "0px 10px 4px 10px",
//   },
// }));

export default function HamburgerMenuItems() {
  //   const classes = useStyles();

  //   const [anchorEl, setAnchorEl] = useState(null);
  //   const open = Boolean(anchorEl);
  //   const [needs, setNeeds] = useState("");
  //   const [item, setItem] = useState("");
  //   const handleClick = (event) => {
  //     setAnchorEl(event.currentTarget);
  //     console.log("event", event.currentTarget);
  //   };

  return (
    <div>
      {/* <React.Fragment key={"left"}>
      </React.Fragment> */}
      <HamburgerIcon />
    </div>
  );
}
