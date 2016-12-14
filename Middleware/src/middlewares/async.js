export default function({ dispatch }) {
  return next => action => {
    // if action does not have a payload or a payload does not
    // have a .then property then send it on
    // i.e. we don't have to deal with a promise
    if(!action.payload || !action.payload.then) {
      return next(action);
    }

    // if there is a promise, wait until it resolves, then dispatch a new action
    // with successfully resolved promise

    // Make sure the action's promise resolves
    action.payload
      .then(function(response) {
        // create a new action with an old type, but replace the promise with the response data
        // ...action = take everything the action currently contains
        // and extend over it the response
        const newAction = { ...action, payload: response };
        // dispatch action to flow through again to all middlewares
        dispatch(newAction);
      });
  };
}


/*
The above is the same as this
It is a function that returns a function that returns a function
export default function({ dispatch }) {
  return function(next) {
    return function(action) {
      console.log(action);

      next(action);
    }
  }
}
*/
