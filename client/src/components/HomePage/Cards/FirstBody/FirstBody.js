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
import Axios from "axios";

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

function FirstBody({ itemData, passCrop }) {
  const classes = useStyles();
  const [state, setState] = useState({
    seed: false,
    machinery: false,
  });
  const [value, setValue] = useState([1, 100]);
  const [price, setPrice] = useState(0);
  const [filterItem, setFilterItem] = useState({});
  const [allCrops, setAllCrops] = useState([]);
  const [selectedCrop, setSelectedCrop] = useState({});
  const [cropsItems, setCropsItems] = useState([]);
  const [itemCrop, setItemCrop] = useState([]);

  useEffect(() => {
  Axios.get(`${process.env.REACT_APP_API_URI}/getallcrops`)
      .then((allDatas) => {
        setAllCrops(allDatas.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const finalPrice = value[1] - value[0];
    setPrice(finalPrice);
  }, [value]);

  useEffect(() => {
    // console.log("item Data", itemData);
    // console.log("selected crop", selectedCrop.length);

    if (selectedCrop.length === 0) {
      console.log("ite empty");
    } else {
      Axios.get(`${process.env.REACT_APP_API_URI}/getselectedcrops`, {
        params: {
          selectedCrop,
        },
      })
        .then((cropsData) => {
          console.log("crops data", cropsData.data);
          const cropItemsDatas = cropsData.data;
          setCropsItems(cropsData.data);
          passCrop(cropsData.data);
        })
        .catch((err) => console.log(err));
    }
  }, [selectedCrop]);

  console.log("selected crops", cropsItems);

  const handleChange = (text) => (event) => {
    console.log("text", text);
    console.log("event.target.value", event.target.value);

    if (event.target.checked === true) {
      console.log("not a true value", event.target.checked);

      console.log("all items is there", itemData);
      const fiteredItems = itemData.filter((data) => data.crops === text);
      console.log("filterd items yyess", fiteredItems);

      passCrop(fiteredItems);
    } else {
      console.log("not a true value", event.target.checked);
    }
  };
  // const handleChange = (text) => (event) => {
  //   // setState({ ...state, [text]: event.target.checked });
  //   // setFilterItem({ ...filterItem, [text]: event.target.value });
  //   const item = event.target.value;
  //   const checked = event.target.checked;
  //   console.log("item ", item);
  //   console.log("checked ", checked);
  //   // setSelectedCrop({ ...selectedCrop, checked });
  //   setFilterItem({ ...filterItem, [text]: event.target.checked });
  //   if (checked) {
  //     setSelectedCrop(item);
  //     setItemCrop([...itemCrop, item]);
  //   } else if (checked == false) {
  //     const filter = itemCrop.filter((data) => data !== text);

  //     console.log("filterssssssssssssss", itemCrop);

  //     passCrop(filter);
  //   }
  // };

  console.log("items crop", itemCrop);
  console.log("item all selected", selectedCrop);

  // useEffect(() => {
  //   const { seed, machinery } = state;
  //   if (seed && machinery) {
  //     const selectedItem = allItems.filter((item) => item.type);
  //     console.log("selectedItem", selectedItem);
  //     //   passData(selectedItem);
  //   } else if (machinery) {
  //     const selectedItem = allItems.filter(
  //       (item) => filterItem.machinery === item.type
  //     );
  //     console.log("machinery", selectedItem);
  //     //   passData(selectedItem);
  //   } else if (seed) {
  //     const selectedItem = allItems.filter(
  //       (item) => filterItem.seed === item.type
  //     );
  //     console.log("seed", selectedItem);
  //     //   passData(selectedItem);
  //   } else {
  //     //   passData(allItems);
  //   }
  // }, [state]);

  // const items = ["seed", "machinery"];

  return (
    <Box mt={2}>
      <Typography>
        <Typography gutterBottom variant="h9" component="h4" align="left">
          CROP
        </Typography>
        <FormGroup row>
          <Grid container direction="column" spacing={0}>
            <Box mr={10} className={classes.checkBox}>
              {allCrops.map((data, index) => {
                const { crop } = data;
                return (
                  <Grid item>
                    <FormControlLabel
                      key={index}
                      control={
                        <Checkbox name={crop} onChange={handleChange(crop)} />
                      }
                      label={crop}
                      value={crop}
                    />
                  </Grid>
                );
              })}
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
