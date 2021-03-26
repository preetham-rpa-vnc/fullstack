import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 50,
    width: "100%",
    justifyContent: "center",
    marginBottom: 50,
  },
  form: {
    width: "80%",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
    marginLeft: "auto",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

 export default function AddProduct() {
  const classes = useStyles();
  const [productValues, setProductValues] = useState({});

  const handleChange = (text) => (event) => {
    console.log(text);
    setProductValues({ ...productValues, [text]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post(
      `${process.env.REACT_APP_API_URI_ADMIN}/addproduct`,
      productValues
    );
  };

  console.log("set procucts", productValues);
  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          //   spacing={1}
          //   id="standard-full-width"
          label="EQUIPMENT"
          style={{ margin: 8 }}
          placeholder="EQUIPMENT"
          //   helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange("EQUIPMENT")}
        />
        <TextField
          id="standard-full-width"
          label="CROP"
          style={{ margin: 8 }}
          placeholder="CROP"
          //   helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange("CROP")}
        />
        <TextField
          id="standard-full-width"
          label="USAGE"
          style={{ margin: 8 }}
          placeholder="USAGE"
          //   helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange("USAGE")}
        />
        <TextField
          id="standard-full-width"
          label="DESCRIPTION"
          style={{ margin: 8 }}
          placeholder="DESCRIPTION"
          //   helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange("DESCRIPTION")}
        />
        <TextField
          id="standard-full-width"
          label="PHASE OF CROP"
          style={{ margin: 8 }}
          placeholder="PHASE OF CROP"
          //   helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange("PHASEOFCROP")}
        />
        <TextField
          id="standard-full-width"
          label="MANUFACTURER"
          style={{ margin: 8 }}
          placeholder="MANUFACTURER"
          //   helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange("MANUFACTURER")}
        />
        <TextField
          id="standard-full-width"
          label="MODEL"
          style={{ margin: 8 }}
          placeholder="MODEL"
          //   helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange("MODEL")}
        />
        <TextField
          id="standard-full-width"
          label="COST"
          style={{ margin: 8 }}
          placeholder="COST"
          //   helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange("COST")}
        />
        <TextField
          id="standard-full-width"
          label="PREBUILT"
          style={{ margin: 8 }}
          placeholder="PREBUILT"
          //   helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange("PREBUILT")}
        />
        <TextField
          id="standard-full-width"
          label="YOUTUBE LINK"
          style={{ margin: 8 }}
          placeholder="YOUTUBE LINK"
          //   helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange("YOUTUBELINK")}
        />
        <TextField
          id="standard-full-width"
          label="WEBSITE LINK"
          style={{ margin: 8 }}
          placeholder="WEBSITE LINK"
          //   helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange("WEBSITELINK")}
        />
        <TextField
          id="standard-full-width"
          label="SUBSIDY AVAILABLE"
          style={{ margin: 8 }}
          placeholder="SUBSIDY AVAILABLE"
          //   helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange("SUBSIDYAVAILABLE")}
        />
        <TextField
          id="standard-full-width"
          label="CUSTOMISABLE"
          style={{ margin: 8 }}
          placeholder="CUSTOMISABLE"
          //   helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange("CUSTOMISABLE")}
        />
        <TextField
          id="standard-full-width"
          label="IMAGE"
          style={{ margin: 8 }}
          placeholder="IMAGE"
          //   helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange("IMAGE")}
        />
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.margin}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
