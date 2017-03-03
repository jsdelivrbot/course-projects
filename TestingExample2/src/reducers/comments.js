import { SAVE_COMMENT } from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case SAVE_COMMENT:
      //return state.concat([action.payload]);
      return [ ...state, action.payload ]; // takes existing array and concats on another array containing action.payload
  }
  return state;
}
