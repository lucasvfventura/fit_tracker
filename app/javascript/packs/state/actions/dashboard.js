import {getActivities} from "../../api";

export const actions = {
  LOAD_ACTIVITIES: 'LOAD_ACTIVITIES',
  REQUEST_ACTIVITIES: 'REQUEST_ACTIVITIES'
}

export function loadActivities(activities) {
  return {
    type: actions.LOAD_ACTIVITIES,
    activities
  }
}

export const requestActivities = () => {
  return dispatch => {
    return getActivities().then(d => dispatch(loadActivities(d)))
  }
}