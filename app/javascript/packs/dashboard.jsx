import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { getUser } from "./api";
import PropTypes from "prop-types";

import {
  Grid,
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles
} from "@material-ui/core";

import { EditActivity } from "./editActivity";

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    marginLeft: 10
  }
}));

const Dashboard = props => {
  const classes = useStyles();

  const [user, setUser] = useState("");

  useEffect(() => {
    setUser("Lucas");
  }, []);

  return (
    <Grid container direction="row" wrap="nowrap">
      <Grid item>
        <Drawer
          variant="permanent"
          open={true}
          className={classes.drawerPaper}
          classes={{ paper: classes.drawerPaper }}
        >
          <Grid container direction="column" justify="space-between">
            <Grid item>
              <List>
                <ListItem button>
                  <ListItemText primary="Dashboard" />
                </ListItem>
              </List>
            </Grid>
            <Grid item>{user}</Grid>
          </Grid>
        </Drawer>
      </Grid>
      <Grid item className={classes.content}>
        <EditActivity />
      </Grid>
    </Grid>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Dashboard />, document.getElementById("root"));
});
