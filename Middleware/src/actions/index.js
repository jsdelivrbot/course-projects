import {
  FETCH_USERS
} from './types';

// action creator to return default/static list of users
export function fetchUsers() {
  return {
    type: FETCH_USERS,
    payload: [
      { name: 'Jane' },
      { name: 'Alex' },
      { name: 'Jim' }
    ]
  };
}
