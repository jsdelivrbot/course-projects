import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //handle the payload
      return state.concat([ action.payload.data ]);
  }

  return state;
}
