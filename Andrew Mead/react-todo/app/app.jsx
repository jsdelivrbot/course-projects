var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

var TodoAPI = require('TodoAPI');

// for playground
//import './../playground/firebase/index';


// Not needed anymore - getting data from firebase
// store.subscribe(() => {
//   var state = store.getState();
//   console.log('New state', state);
//   TodoAPI.setTodos(state.todos);
// });


// No longer needed - getting data from firebase
// //dispatch actions that lets us add an array of todos to the store
// var initialTodos = TodoAPI.getTodos();
// // pass in todos array - intialTodos
// store.dispatch(actions.addTodos(initialTodos));


store.dispatch(actions.startAddTodos());



// add a todo
//store.dispatch(actions.addTodo('Clean the yard'));
// search for a todo
//store.dispatch(actions.setSearchText('yard'));
// toggle show completed status
//store.dispatch(actions.toggleShowCompleted());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
