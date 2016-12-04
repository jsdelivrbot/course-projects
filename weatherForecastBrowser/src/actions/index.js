import axios from 'axios';

const API_KEY = 'f19b883fbf3caeeddab48fce7c82ba0e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

// action creator ... will return an action with a type
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ca`;
  const request = axios.get(url);

  console.log('Request: ', request);

  // we return the promise as the payload
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
