import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: theme.spacing(18.75),
    textAlign: "center",
    background: "rgb(0 0 0 / 10%)",
    borderRadius: 20,
    marginTop: 10,
  },
  mainGrid: {
    justifyContent: "center",
    marginTop: theme.spacing(0.8)
  },
  day: {
    fontWeight: "bold",
    fontSize: "x-large",
  },
  data: {
    fontWeight: "bold",
    fontSize: "larger",
    textAlign: "left",
    placeSelf: "center",
  },
}));

export default useStyles;
