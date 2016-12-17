import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER
} from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({email, password}) {
  return function(dispatch) {
    // Submit email/password to the server
    // pass data as an object .... es6 key and value are the same so email: email
    // can just be email. Same with password.
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // If request is good ....
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER }); // redux thunk in action - access to dispatch

        // - Save the JWT token - to local storage
        localStorage.setItem('token', response.data.token);
        // - Redirect to the route '/feature'

        // Programatic Navication
        browserHistory.push('/feature');
      })
      .catch(() => {
        // If request is bad ....
        // - Show an error to the user
        // call AUTH_ERROR from here ...
        dispatch(authError('Bad Login Info')); // have access to dispatch because of redux thunk
      });
  }
}

export function signupUser({email, password}) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, {email, password})
      .then(response => {
        // call the action
        dispatch({type: AUTH_USER});
        // set token in local storage
        localStorage.setItem('token', response.data.token);
        // push to secret screen
        browserHistory.push('/feature');
      })
      // authError is a a function in this file, it gets passed a string
      // then an error message goes down to all components
      .catch(error => dispatch(authError(error.response.data.error)));
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

// clicks signout button
// signout user and get rid of token
export function signoutUser() {
  // get rid of token
  localStorage.removeItem('token');

  return {
    type: UNAUTH_USER
  }
}
