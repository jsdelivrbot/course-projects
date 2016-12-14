import axios from 'axios';

import {
  FETCH_USERS
} from './types';

// action creator to return default/static list of users
export function fetchUsers() {

  const request = axios.get('https://jsonplaceholder.typicode.com/users');

  // return an action
  return {
    type: FETCH_USERS,
    payload: request
  };
}
