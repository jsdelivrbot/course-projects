import {
  FETCH_USERS
} from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_USERS:
      // return existing users along with new list of users
      // take existing state and contcat on new list of users
console.log(action.payload);
      //debugger
      return [ ...state, ...action.payload.data];
  }

  return state;
}
