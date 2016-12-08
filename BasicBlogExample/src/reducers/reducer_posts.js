import { FETCH_POSTS, FETCH_POST } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POSTS:
      // take current state ...state and add on all: action.payload.data
      // where action.payload.data is the response from the api
      return {...state, all: action.payload.data};
    case FETCH_POST:
      return {...state, post: action.payload.data};
    default:
      return state;
  }
}
