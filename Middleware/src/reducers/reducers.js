import {
  FETCH_USERS
} from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_USERS:
      // return existing users along with new list of users
      // take existing state and contcat on new list of users
      return [ ...state, ...action.payload];
  }

  return state;
}
