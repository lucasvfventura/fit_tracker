import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import PropTypes from "prop-types";

import {
  Button,
  Grid,
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles
} from "@material-ui/core";

import {requestActivities} from "./state/actions/dashboard";
import {signOutUser} from "./state/actions/user"
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

export const Dashboard = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const dashboardData = useSelector(state => state.dashboard);

  console.log(dashboardData);

  useEffect(() => {
    dispatch(requestActivities())
  }, []);

  const activities = dashboardData.activities != null ? dashboardData.activities.map(a => (
    <ul key={a.id}>
      <li>{a.description}</li>
      <li>{a.duration}</li>
      <li>{a.category}</li>
      <li>{a.file}</li>
      <li>{a.created_at}</li>
    </ul>
  )) : (<div></div>);

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
            <Grid item>
              <Button onClick={e => dispatch(signOutUser())} color="primary">Sign Out</Button>
            </Grid>
          </Grid>
        </Drawer>
      </Grid>
      <Grid item className={classes.content}>
        {activities}
        <EditActivity />
      </Grid>
    </Grid>
  );
};

