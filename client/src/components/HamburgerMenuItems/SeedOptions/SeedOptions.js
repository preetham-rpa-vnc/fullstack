import React, { useEffect, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Divider, Grid, List, ListItem, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  productCategories: {
    marginLeft: theme.spacing(2.5),
    marginTop: theme.spacing(1),
    fontWeight: "bold",
  },
}));

export default function SeedOptions({ item }) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  console.log("itemsssssss", item);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log("event", event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Divider />
      <Typography
        variant="h6"
        gutterBottom
        className={classes.productCategories}
      >
        Product categories
      </Typography>
      <List>
        {[
          "Seeds",
          "Fertilizer",
          "Tractor",
          "Equipments",
          "Farm Equipments",
        ].map((text, index) => (
          <>
            <ListItem button key={index}>
              <Grid container spacing={3}>
                <Grid item style={{ alignSelf: "center" }}>
                  <Typography>{text}</Typography>
                </Grid>
                <Grid item style={{ marginLeft: "auto" }}>
                  <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    style={{ padding: 5 }}
                    onClick={handleClick}
                  >
                    <NavigateNextIcon />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: 250,
                        width: "20ch",
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem
                        key={option}
                        selected={option === "Pyxis"}
                        onClick={handleClose}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </Grid>
              </Grid>
            </ListItem>
          </>
        ))}
      </List>
    </div>
  );
}

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];
const options1 = [
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
  "None",
  "Atria",
  "Callisto",
  "Dione",
];
