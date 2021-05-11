import react, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import { FixedSizeList } from "react-window";

const useStyles = makeStyles((theme) => ({
  paper: {
    // height: "100px",
  },
  sideBarBox: {
    margin: "10px 10px 10px 10px",
  },
  cardHeader: {
    backgroundColor: "#cfe8fc",
    padding: 5,
  },
  morePlus: {
    color: "green",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

function SideBar() {
  const classes = useStyles();
  const [openMore, setOpenMore] = useState({
    brand: false,
    category: false,
    budget: false,
  });
  const { brand, category, budget } = openMore;

  const moreClick = (item) => {
    setOpenMore({ ...openMore, [item]: true });
    // setOpenMore(true);
  };

  const lessClick = (item) => {
    setOpenMore({ ...openMore, [item]: false });
  };
  return (
    <>
      <Grid item>
        <Box className={classes.sideBarBox}>
          <Paper elevation={3} className={classes.paper}>
            <Grid container xs={12} direction="column">
              <Grid item>
                <Typography className={classes.cardHeader}>
                  Related Category
                </Typography>
              </Grid>
              <Grid item>
                <List
                  component="nav"
                  //   aria-label="secondary mailbox folders"
                >
                  <ListItem button textOverflow="clip">
                    <ListItemText primary="Item" textOverflow="ellipsis" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="item" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="item" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="item" />
                  </ListItem>

                  {brand ? (
                    <>
                      <ListItem button>
                        <ListItemText primary="open more item" />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="open more item" />
                      </ListItem>
                    </>
                  ) : null}

                  <ListItem>
                    <Typography
                      className={classes.morePlus}
                      onClick={
                        brand
                          ? () => lessClick("brand")
                          : () => moreClick("brand")
                      }
                      // onClick={() =>  !openMore.check}
                    >
                      {brand ? "Less -" : "More +"}
                    </Typography>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>

      <Grid item>
        <Box className={classes.sideBarBox}>
          <Paper elevation={3} className={classes.paper}>
            <Grid container xs={12} direction="column">
              <Grid item>
                <Typography className={classes.cardHeader}>
                  Related Category
                </Typography>
              </Grid>
              <Grid item>
                <List
                  component="nav"
                  //   aria-label="secondary mailbox folders"
                >
                  <ListItem button textOverflow="clip">
                    <ListItemText primary="Item" textOverflow="ellipsis" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="item" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="item" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="item" />
                  </ListItem>

                  {category ? (
                    <>
                      <ListItem button>
                        <ListItemText primary="open more item" />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="open more item" />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="open more item" />
                      </ListItem>
                    </>
                  ) : null}

                  <ListItem>
                    <Typography
                      className={classes.morePlus}
                      onClick={
                        category
                          ? () => lessClick("category")
                          : () => moreClick("category")
                      }
                      // onClick={() =>  !openMore.check}
                    >
                      {category ? "Less -" : "More +"}
                    </Typography>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>
    </>
  );
}

export default SideBar;
