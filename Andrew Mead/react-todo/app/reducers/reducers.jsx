var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

// showCompletedReducer, default false, TOGGLE_SHOW_COMPLETED
// all this does is flip the current state. state = false means default state is false
export var showCompletedReducer = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state
    default:
      return state;
  }
};

export var todosReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
      ];
    // case for TOGGLE_TODO completed equal to opposite value & updateCompletedAt
    // state.map - calls callback once for every item in the array
    // a map lets you update an item in array by returning something new
    // ---------
    // for this in the return - use map to iterate over every item and find the one whose
    // id matches the action id we make a change to 2 properties on the todo
    case 'UPDATE_TODO':
      return state.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              ...action.updates
            }
          } else {
            return todo;
          }
      });


    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ];

    default:
      return state;
  }
};
