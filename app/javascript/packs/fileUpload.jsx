import React from "react";

import { Grid, Button, Input, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  input: {
    display: "none"
  }
}));

export function FileUpload({ props }) {
  const classes = useStyles();

  let inputElement = "";
  const handleTextClick = e => {
    e.preventDefault();
    inputElement.click();
  };

  return (
    <Grid container direction="row" wrap="nowrap">
      <TextField
        name="File"
        placeholder="Select a file"
        onClick={handleTextClick}
        InputProps={{
          readOnly: true
        }}
      />
      <Input
        className={classes.input}
        name="File"
        accept="*"
        id="raised-button-file"
        multiple
        type="file"
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
