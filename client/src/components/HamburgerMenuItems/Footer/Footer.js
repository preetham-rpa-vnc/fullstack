import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  items: {
    font: "normal normal bold 19px/21px Arial",
    letterSpacing: theme.spacing(0),
    color: "#030303",
    margin: theme.spacing(0.63, 0, 1.3, 0),
  },
  dividers: {
    backgroundColor: "rgb(0, 176, 116)",
    maxHeight: 4,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div>
      <List>
        {["MSP", "Weather", "Help & Settings"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText>
              <Typography className={classes.items}>{text}</Typography>
              <Divider className={classes.dividers} />
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Header;
