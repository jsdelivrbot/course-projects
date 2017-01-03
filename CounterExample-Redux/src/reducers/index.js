import { combineReducers } from 'redux';
import CountReducer from './count_reducer';

const rootReducer = combineReducers({
  count: CountReducer
});

export default rootReducer;
