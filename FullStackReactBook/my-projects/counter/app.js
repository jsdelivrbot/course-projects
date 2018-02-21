function reducer(state, action) {
  if(action.type === 'INCREMENT') {
    return state + action.amount;
  } else if (action.type === 'DECREMENT') {
    return state - action.amount;
  } else {
    return state;
  }
}

// function for creating stores, createStore()
function createStore(reducer) {
  let state = 0;

  const getState = () => (state);

  const dispatch = (action) => {
    state = reducer(state, action);
  };

  return {
    getState,
    dispatch
  };
}

const store = createStore(reducer);

const incrementAction = {
  type: 'INCREMENT',
  amount: 10,
};

store.dispatch(incrementAction);
console.log(store.getState());
store.dispatch(incrementAction);
console.log(store.getState());
store.dispatch(incrementAction);
console.log(store.getState());


const decrementAction = {
  type: 'DECREMENT',
  amount: 8,
};
store.dispatch(decrementAction);
console.log(store.getState());


const unknownAction = {
  type: 'UNKNOWN'
};


// reducer(state, action)
// console.log(reducer(0, incrementAction));
// console.log(reducer(1, incrementAction));
// console.log(reducer(5, incrementAction));

// console.log(reducer(5, unknownAction));
// console.log(reducer(8, unknownAction));

// console.log(reducer(10, decrementAction));
// console.log(reducer(9, decrementAction));
// console.log(reducer(5, decrementAction));
