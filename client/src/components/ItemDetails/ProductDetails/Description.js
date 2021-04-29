import React from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import useStyles from "./ProductStyle";
function Description() {
  const classes = useStyles();

  return (
    <Grid item container direction="column" style={{ padding: "30px" }}>
      <Grid item container>
        <Grid item>
          <Box borderBottom={0} className={classes.boxOne}>
            <Typography className={classes.boxHeader}>
              Company Profile
            </Typography>
          </Box>
        </Grid>
        {/* <Grid item>
          <Box borderBottom={0} className={classes.boxOne}>
            <Typography className={classes.boxHeader}>
              Company Profile
            </Typography>
          </Box>
        </Grid> */}
      </Grid>
      <Grid item>
        <Box className={classes.boxTwo}>
          <Typography
            style={{
              padding: "8px",
              // color: "white",
              fontWeight: "bold",
              fontSize: "27px",
              fontVariantCaps: "all-small-caps",
            }}
          >
            Company Details
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <Box className={classes.boxThree}>
          <Typography className={classes.thirdBox}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Typography>
        </Box> 
      </Grid>
    </Grid>
  );
}

export default Description;
