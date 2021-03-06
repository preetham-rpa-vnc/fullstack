import React from "react";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
export default function App() {
  return (
    <div>
      <Grid container alignItems="center">
        <FormatAlignLeftIcon />
        <Divider orientation="vertical" flexItem />
        <FormatBoldIcon />
      </Grid>
    </div>
  );
}