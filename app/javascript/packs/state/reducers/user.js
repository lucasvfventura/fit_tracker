import { actions } from '../actions/user'

const user = (state = [], action) => {
  switch (action.type) {
    case actions.SIGN_OUT:
      location.reload();
      return {...state}
    default:
      return state
  }
}

export default user