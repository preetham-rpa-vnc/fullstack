import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Slider,
  Typography,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
// import { set } from "js-cookie";
import React, { useEffect, useState } from "react";
import { machinery as allItems } from "../../Items/Items";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  gridOne: {
    marginTop: theme.spacing(1.3),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  checkBox: {
    textAlign: "left",
    placeSelf: "center",
  },
}));

const PrettoSlider = withStyles({
  root: {
    color: "#3f51b5",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

function valuetext(value) {
  return `${value}°C`;
}

function FirstBody({ passData }) {
  const classes = useStyles();
  const [state, setState] = useState({
    seed: false,
    machinery: false,
  });
  const [value, setValue] = useState([0, 100]);
  const [price, setPrice] = useState(0);
  const [filterItem, setFilterItem] = useState({
    seed: "",
    machinery: "",
  });

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const finalPrice = value[1] - value[0];
    setPrice(finalPrice);
  }, [value]);

  const handleChange = (text) => (event) => {
    setState({ ...state, [text]: event.target.checked });
    setFilterItem({ ...filterItem, [text]: event.target.value });
    const { seed, machinery } = state;
  };

  useEffect(() => {
    const { seed, machinery } = state;

    if (seed && machinery) {
      const selectedItem = allItems.filter((item) => item.type);
      console.log("selectedItem", selectedItem);
    //   passData(selectedItem);
    } else if (machinery) {
      const selectedItem = allItems.filter(
        (item) => filterItem.machinery === item.type
      );
      console.log("machinery", selectedItem);
    //   passData(selectedItem);
    } else if (seed) {
      const selectedItem = allItems.filter(
        (item) => filterItem.seed === item.type
      );
      console.log("seed", selectedItem);
    //   passData(selectedItem);
    } else {
    //   passData(allItems);
    }
  }, [state]);

  const items = ["seed", "machinery"];

  console.log("clickItem", state);

  return (
    <Box mt={2}>
      <Typography>
        <Typography gutterBottom variant="h9" component="h4" align="left">
          CROP
        </Typography>
        <FormGroup row>
          <Grid container direction="column" spacing={0}>
            <Box mr={10} className={classes.checkBox}>
              {items.map((data, index) => (
                <Grid item>
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox name={data} onChange={handleChange(data)} />
                    }
                    label={data}
                    value={data}
                  />
                </Grid>
              ))}
            </Box>
          </Grid>
        </FormGroup>
        {/* <Paper className={classes.paper} className={classes.gridOne}>
          xs=4
        </Paper> */}
        <Divider className={classes.divider} />
        <Typography gutterBottom variant="h9" component="h4" align="left">
          PRICE
        </Typography>
        <Box>
          <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
              {price}
            </Typography>
            <PrettoSlider
              value={value}
              onChange={handleSliderChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
            />
          </div>
        </Box>
      </Typography>
    </Box>
  );
}

export default FirstBody;
