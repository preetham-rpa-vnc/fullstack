import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  paper: {
    // padding: theme.spacing(10),
    height: "300px",
    textAlign: "center",
    background: "rgb(0 0 0 / 10%)",
    borderRadius: 20,
    // backdropFilter: "blur(4px)",
  },
  place: {
    letterSpacing: "0px",
    color: "#000000",
    opacity: 1.0,
    fontFamily: "system-ui",
    fontWeight: 500,
    padding: theme.spacing(1.2),
  },
  tempGrid: {
    padding: theme.spacing(3),
  },
  temp: {
    padding: theme.spacing(),
    // background: "rgb(0 0 0 / 10%)",
    // width: "250px"
  },
  temprature: {
    fontSize: "70px",
    fontWeight: "bold",
  },
  weatherAll: {
    textAlign: "left",
    fontSize: "large",
    fontWeight: "bold",
    alignContent: "center",
  },
  date: {
    // font: "normal normal bold 30px/53px Segoe UI",
    // font: "normal normal 600 70px/94px Segoe UI",
    color: "#211d1d",
    fontFamily: "system-ui",
    fontWeight: "bold",
  },
  time: {
    fontSize: "xx-large",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "sans-serif",
  },
  media: {
    width: "350px",
    padding: "150px",
  },
}));

export default useStyles;
