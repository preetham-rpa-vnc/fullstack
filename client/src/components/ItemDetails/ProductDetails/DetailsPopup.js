import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@material-ui/core";
import useStyles from "./ProductStyle";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs({ selectedProduct }) {
  const classes = useStyles()
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        size="large"
        color="secondary"
        style={{ backgroundColor: "#00b074" }}
        onClick={handleClickOpen}
      >
        More Details
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Product Details
        </DialogTitle>
        <DialogContent dividers>
          <Grid container sm={12} spacing={2}>
            <Grid item container spacing={1} direction="column">
              <Grid item>
                <Box className={classes.popup}>Description</Box>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h6" >
                  {selectedProduct[0].product_description}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container spacing={1} direction="column">
              <Grid item>
                <Box className={classes.popup}>Usage</Box>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h6" >
                  {selectedProduct[0].product_usage}
                </Typography>
              </Grid>
            </Grid>
          
          </Grid>

          {/* <Typography gutterBottom>
          These
            tractors offer higher comfort in terms of wider operator station,
            neutral safety switch , and lower maintenance cost. John Deere 5D
            series includes PowerPro models and Value+++ models, offering our
            customers a wide range of tractors to select from.
          </Typography>
          <Typography gutterBottom>
          John Deere 5D series tractors range from 36HP to 55 HP. The 5D
            series tractors are multi utility in nature, efficient in both
            agricultural applications as well as heavy duty haulage.
          </Typography> */}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
