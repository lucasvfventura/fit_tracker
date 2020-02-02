import {actions} from '../actions/dashboard';

const defaultState = {
  activities: []
};

const dashboard = (state = defaultState, action) => {
  switch (action.type) {
    case actions.LOAD_ACTIVITIES:
      return {
        ...state,
        activities: action.activities
      }
    default:
      return state
  }
}

export default dashboard