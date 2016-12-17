import { combineReducers } from 'redux';
// redeclare reducer as form so we can change form: reducer to just form (es6 shortcut)
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer
});

export default rootReducer;
