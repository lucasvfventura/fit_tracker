import React, {useState} from "react";
import PropTypes from "prop-types";

import { Grid, Button, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  input: {
    display: "none"
  }
}));

export function FileUpload(props) {
  const classes = useStyles();
  const [fileName, setFileName] = useState("");
  let inputElement = "";

  const handleTextClick = e => {
    e.preventDefault();
    inputElement.click();
  };

  const handleClick = e => {
    if(e.target.files[0] != null &&){
      setFileName(e.target.files[0].name);
    } else {
      setFileName("")
    }
    props.onChange(e);
  }

  return (
    <Grid container direction="row" wrap="nowrap">
      <TextField
        name="File"
        placeholder="Select a file"
        onClick={handleTextClick}
        InputProps={{
          readOnly: true
        }}
        value={fileName}
        fullWidth
      />
      <input
        className={classes.input}
        name="File"
        accept={props.accept}
        id="raised-button-file"
        type="file"
        onChange={handleClick}
      />
      <label htmlFor="raised-button-file">
        <Button
          color="secondary"
          variant="contained"
          component="span"
          ref={input => (inputElement = input)}
        >
          Upload
        </Button>
      </label>
    </Grid>
  );
}

FileUpload.propsTypes = {
  onChange: PropTypes.func,
  accept: PropTypes.string
}