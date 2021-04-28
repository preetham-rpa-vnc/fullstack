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
              spacing={3}
              alignItems="center" 
              className={classes.searchItems}
            >
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
              <Grid item>
                <Autocomplete
                  id="combo-box-demo"
                  options={manufactures}
                  getOptionLabel={(option) => option.manuf_name}
                  style={{ width: 300 }}
                  onChange={handleChange("manufacture")}
                  // value={manufacture}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select Manufacturer"
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
  // { title: '12 Angry Men', year: 1957 },
  // { title: "Schindler's List", year: 1993 },
  // { title: 'Pulp Fiction', year: 1994 },
  // { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  // { title: 'The Good, the Bad and the Ugly', year: 1966 },
  // { title: 'Fight Club', year: 1999 },
  // { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  // { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  // { title: 'Forrest Gump', year: 1994 },
  // { title: 'Inception', year: 2010 },
  // { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  // { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  // { title: 'Goodfellas', year: 1990 },
  // { title: 'The Matrix', year: 1999 },
  // { title: 'Seven Samurai', year: 1954 },
  // { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  // { title: 'City of God', year: 2002 },
  // { title: 'Se7en', year: 1995 },
  // { title: 'The Silence of the Lambs', year: 1991 },
  // { title: "It's a Wonderful Life", year: 1946 },
  // { title: 'Life Is Beautiful', year: 1997 },
  // { title: 'The Usual Suspects', year: 1995 },
  // { title: 'Léon: The Professional', year: 1994 },
  // { title: 'Spirited Away', year: 2001 },
  // { title: 'Saving Private Ryan', year: 1998 },
  // { title: 'Once Upon a Time in the West', year: 1968 },
  // { title: 'American History X', year: 1998 },
  // { title: 'Interstellar', year: 2014 },
  // { title: 'Casablanca', year: 1942 },
  // { title: 'City Lights', year: 1931 },
  // { title: 'Psycho', year: 1960 },
  // { title: 'The Green Mile', year: 1999 },
  // { title: 'The Intouchables', year: 2011 },
  // { title: 'Modern Times', year: 1936 },
  // { title: 'Raiders of the Lost Ark', year: 1981 },
  // { title: 'Rear Window', year: 1954 },
  // { title: 'The Pianist', year: 2002 },
  // { title: 'The Departed', year: 2006 },
  // { title: 'Terminator 2: Judgment Day', year: 1991 },
  // { title: 'Back to the Future', year: 1985 },
  // { title: 'Whiplash', year: 2014 },
  // { title: 'Gladiator', year: 2000 },
  // { title: 'Memento', year: 2000 },
  // { title: 'The Prestige', year: 2006 },
  // { title: 'The Lion King', year: 1994 },
  // { title: 'Apocalypse Now', year: 1979 },
  // { title: 'Alien', year: 1979 },
  // { title: 'Sunset Boulevard', year: 1950 },
  // { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
  // { title: 'The Great Dictator', year: 1940 },
  // { title: 'Cinema Paradiso', year: 1988 },
  // { title: 'The Lives of Others', year: 2006 },
  // { title: 'Grave of the Fireflies', year: 1988 },
  // { title: 'Paths of Glory', year: 1957 },
  // { title: 'Django Unchained', year: 2012 },
  // { title: 'The Shining', year: 1980 },
  // { title: 'WALL·E', year: 2008 },
  // { title: 'American Beauty', year: 1999 },
  // { title: 'The Dark Knight Rises', year: 2012 },
  // { title: 'Princess Mononoke', year: 1997 },
  // { title: 'Aliens', year: 1986 },
  // { title: 'Oldboy', year: 2003 },
  // { title: 'Once Upon a Time in America', year: 1984 },
  // { title: 'Witness for the Prosecution', year: 1957 },
  // { title: 'Das Boot', year: 1981 },
  // { title: 'Citizen Kane', year: 1941 },
  // { title: 'North by Northwest', year: 1959 },
  // { title: 'Vertigo', year: 1958 },
  // { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
  // { title: 'Reservoir Dogs', year: 1992 },
  // { title: 'Braveheart', year: 1995 },
  // { title: 'M', year: 1931 },
  // { title: 'Requiem for a Dream', year: 2000 },
  // { title: 'Amélie', year: 2001 },
  // { title: 'A Clockwork Orange', year: 1971 },
  // { title: 'Like Stars on Earth', year: 2007 },
  // { title: 'Taxi Driver', year: 1976 },
  // { title: 'Lawrence of Arabia', year: 1962 },
  // { title: 'Double Indemnity', year: 1944 },
  // { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
  // { title: 'Amadeus', year: 1984 },
  // { title: 'To Kill a Mockingbird', year: 1962 },
  // { title: 'Toy Story 3', year: 2010 },
  // { title: 'Logan', year: 2017 },
  // { title: 'Full Metal Jacket', year: 1987 },
  // { title: 'Dangal', year: 2016 },
  // { title: 'The Sting', year: 1973 },
  // { title: '2001: A Space Odyssey', year: 1968 },
  // { title: "Singin' in the Rain", year: 1952 },
  // { title: 'Toy Story', year: 1995 },
  // { title: 'Bicycle Thieves', year: 1948 },
  // { title: 'The Kid', year: 1921 },
  // { title: 'Inglourious Basterds', year: 2009 },
  // { title: 'Snatch', year: 2000 },
  // { title: '3 Idiots', year: 2009 },
  // { title: 'Monty Python and the Holy Grail', year: 1975 },
];




