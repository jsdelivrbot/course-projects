import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data }); // res is the output from axios
};


export const handleToken = (token) => async dispatch => {
  const res  = await axios.post('/api/stripe', token);

  // Using the same action type here since its looking at the same user model
  dispatch({ type: FETCH_USER, payload: res.data });
};


export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};


export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');

  // payload is the list of surveys we just got back from the axios call
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
}
