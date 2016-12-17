import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from '../actions/types';

// is the user currently authenticated
// set state to an object {} since there will probably serveral properties
// to keep tractk of
export default function(state = {},action) {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false};
    case AUTH_ERROR:
      // piece of state called error
      // available on global state as state.auth.error
      return { ...state, error: action.payload };
    case FETCH_MESSAGE:
      return { ...state, message: action.payload };
  }
  return state;
}
