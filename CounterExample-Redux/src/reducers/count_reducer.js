import { INCREASE_COUNT, DECREASE_COUNT } from '../actions/index';
const INITIAL_STATE = { count: 0 };

export default function(state= INITIAL_STATE, action) {
  switch(action.type) {
    case INCREASE_COUNT:
      return {count: state.count + 1 };
    case DECREASE_COUNT:
      return {count: state.count - 1 };
    default:
      return state;
  }
}
