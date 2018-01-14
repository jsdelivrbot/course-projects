import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from './types';

const ROOT_URL = 'http://localhost:3090';

// Using redux thunk middleware -
// Allows you to return a function
// And it recalls the function with the dispatch method
export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password} )
      .then(response => {
        // If request is good ...
        // - update state to indicate user is authed
        dispatch({ type: AUTH_USER });
        // - save jwt token
        localStorage.setItem('token', response.data.token);

        // - redirect to the route /feature
        browserHistory.push('/feature');
      })
      .catch(() => {
        // If request is bad ...
        // - Show an error to the user - reduxThunk dispatch method
        dispatch(authError('Bad Login Info'));
      });
  }
}


// separate action creator
export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

// Action creator to signout
export function signoutUser() {
  // remove the token from the users local storage
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}
