import { makeStyles } from "@material-ui/core/styles";
import MediaQuery from "react-responsive";
import bgImage3 from "../../../Assets/AuthPage.jpg";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    // backgroundImage: `url(${bgImage3})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundColor: "#fff",
    filter: "blur(0px)",
    position: "relative",
    justifyContent: "center",
  },
  paper: {
    background: "rgb(255 255 255 / 10%)",
    alignSelf: "center", 
    borderRadius: 10,
    marginTop: 56,
    width: "90%",
  },
  media: {
    width: "100%",
    height: 360,
    borderRadius: 4,
    backgroundSize: "100% 100%",
  },
  card: {
    margin: 20,
  },
  boxOne: {
    width: "150px",
    borderColor: "slategray",
    background: "rgb(255 255 255 / 30%)",
    borderWidth: "2px 2px 0px",
    borderStyle: "solid",
    borderImage: "initial",
    borderRadius: "10px 10px 0 0",
    textAlign: "center",
    margin: "0 10px 0 0px",
  },
  boxTwo: {
    margin: "0px 0 15px 0px",
    width: "100%",
    borderColor: "slategray",
    background: "rgb(255 255 255 / 30%)",
    borderWidth: "2px 2px 2px",
    borderStyle: "solid",
    borderImage: "initial",
  },
  boxThree: {
    textAlign: "center",
    width: "100%",
    borderColor: "slategray",
    background: "rgb(255 255 255 / 30%)",
    borderWidth: "2px 2px 2px",
    borderStyle: "solid",
    borderImage: "initial",
    borderRadius: "0px 0px 10px 10px",
  },
  thirdBox: {
    padding: 15,
    // color: "white",
    fontWeight: "bold",
  },
  boxHeader: {
    padding: 6,
    fontWeight: "bold",
    color: "black",
  },
  productDetails: {
    fontWeight: "bold",
    fontVariantCaps: "all-small-caps",
    textAlign: "center",
    margin: "0px 0px 15px 0px",
  },
  dataOne: {
    color: "#0f690f",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: "x-large",
    fontFamily: "monospace",
  },
  dataTwo: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: "x-large",
    fontFamily: "monospace",
  },
  dataThree: {
    textAlign: "left",
    fontWeight: "100",
    fontSize: "x-large",
    fontFamily: "monospace",
  },
  popup: {
    fontWeight: "bold",
    fontSize: "x-large",
    // textAlign: "center",
    // textDecoration: "underline",
  },
}));


export default useStyles;
