import React, { useState } from "react";

import { Grid, Button, TextField } from "@material-ui/core";

import { FileUpload } from "./fileUpload";

export const EditActivity = props => {
  const [activityFile, setActivityFile] = useState(null);
  const [description, setDescription] = useState("");

  const handleFileUpload = event => {
    setActivityFile(event.target.files[0]);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("description", description);
    formData.append("activity_file", activityFile);

    const options = {
      method: "POST",
      body: formData
    };
    fetch("/activities", options);
  };

  return (
    <Grid container direction="column">
      <Grid item>
        <TextField
          label="Description"
          onChange={e => setDescription(e.target.value)}
          placeholder="Describe your activity"
        />
      </Grid>
      <Grid item>
        <FileUpload onChange={handleFileUpload} accept=".tcx"/>
      </Grid>
      <Grid item>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};
