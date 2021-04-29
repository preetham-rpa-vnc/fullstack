/* eslint-disable no-use-before-define */
import React, { Fragment as div, useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  searchItems: {
    borderColor: "red",
    justifyContent: "center",
  },
  container: {
    textAlign: "-webkit-center",
  },
}));

const defaultProps = {
  bgcolor: "background.paper",
  borderColor: "#f1f1f1",
  // borderColor: "#3f51b5",
  m: 1,
  border: 1,
  style: { width: "fit-content" },
};

export default function SearchItem({ searchResult }) {
  // console.log("datass", datass);
  const classes = useStyles();
  const [searchData, setSearchData] = useState({
    manufacture: "",
    crop: "",
  });
  const [manufactures, setManufactures] = useState([]);
  const [crops, setCrops] = useState([]);
  const [searchProducts, setSearchProducts] = useState({});

  const { manufacture, crop } = searchData;

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URI}/getsearchkeys`).then(
      (result) => {
        console.log("@@@@@@@@@@@@@", result);
        setManufactures(result.data.manuf);
        setCrops(result.data.crops);
      }
    );
  }, []);

  const handleChange = (text) => (event) => {
    console.log("event.targer.value", event.target.innerText);
    setSearchData({ ...searchData, [text]: event.target.innerText });
  };

  const handleClick = () => {
    console.log("last data", searchData);
    Axios.get(`${process.env.REACT_APP_API_URI}/findsearchdata`, {
      params: searchData,
    })
      .then((products) => {
        console.log("@@@@@@@@@@@@", products.data);
        if (!products.data) {
          alert("Product Null");
        }
        setSearchProducts(...products.data);
        searchResult(products.data);
        // setSearchData({ ...searchData, manufacture: "", crop: "" });
      })
      .catch((err) => console.log(err));
  };

  console.log("search data", searchProducts);

  const allCrops = crops.map((option) => {
    const firstLetter = option.crop_name[0].toUpperCase();
    console.log("option", option);
    console.log("option.title[0]", option.crop_name[0]);
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });
  const allManufactures = manufactures.map((option) => {
    const firstLetter = option.manuf_name[0].toUpperCase();
    console.log("option", option);
    console.log("option.title[0]", option.manuf_name[0]);
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (
    <div container className={classes.container}>
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <Typography variant="h4">Search Machineries</Typography>
        </Grid>
        <Grid item>
          <Box borderRadius={16} {...defaultProps} p={2}>
            <Grid
              container
              spacing={2}
              alignItems="center"
              className={classes.searchItems}
            >
              <Grid item>
                <Autocomplete
                  id="grouped-demo"
                  options={allCrops.sort(
                    (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
                  )}
                  groupBy={(option) => option.firstLetter}
                  getOptionLabel={(option) => option.crop_name}
                  style={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select Crop"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item>
                <Autocomplete
                  id="grouped-demo"
                  options={allManufactures.sort(
                    (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
                  )}
                  groupBy={(option) => option.firstLetter}
                  getOptionLabel={(option) => option.manuf_name}
                  style={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select Manufacturer"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>

              <Grid item>
                <Autocomplete
                  id="combo-box-demo"
                  options={crops}
                  getOptionLabel={(option) => option.crop_name}
                  style={{ width: 300 }}
                  onChange={handleChange("crop")}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select Crop"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>

              {/* <Grid item>
                <Autocomplete
                  id="combo-box-demo"
                  options={top100Films}
                  getOptionLabel={(option) => option.title}
                  style={{ width: 350 }}
                  onChange={handleChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select Distance from current location"
                      variant="outlined"
                    />
                  )}
                />
              </Grid> */}
              <Grid item>
                <Button
                  variant="contained"
                  size="large"
                  // color="primary"
                  className={classes.margin}
                  onClick={handleClick}
                  style={{ backgroundColor: "#30a05f", color: "white" }}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption" },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
];




