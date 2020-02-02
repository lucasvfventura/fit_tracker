import {signOut} from '../../api';

export const actions = {
  SIGN_OUT: 'SIGN_OUT'
}

export function signOutUser() {
  return dispatch => {
    return signOut().then(d => dispatch({type: actions.SIGN_OUT}));
  }
}