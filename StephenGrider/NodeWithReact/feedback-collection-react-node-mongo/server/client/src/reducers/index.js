import { combineReducers } from 'redux';
// import { reducer } from 'redux-form'; ... reducer is the name from redux-form but you can rename it
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer
});
