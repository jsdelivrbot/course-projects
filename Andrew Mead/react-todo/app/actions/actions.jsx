import moment from 'moment';
//get access to firebase
import firebase, {firebaseRef} from 'app/firebase/';


// Action generator for search text
export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

// toggleShowCompleted TOGGLE_SHOW_COMPLETED
export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
}

// Action generator for adding a todo
// takes in text for todo we want to add
export var addTodo = (todo) => {
    return {
      type: 'ADD_TODO',
      todo
    };
};

// Adding for thunk firebase etc
// Add data to firebase
export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    var todoRef = firebaseRef.child('todos').push(todo);

    //sync with firebase
    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    })
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};


// Async relative for addTodos
export var startAddTodos = () => {
  return (dispatch, getState) => {
    // get todos from firebase
    var todosRef = firebaseRef.child('todos');

    //get value from firebase
    todosRef.once('value').then((snapshot) => {
      var todos = snapshot.val() || {};
      var parsedTodos = []; // redux expects todos to be an array

      Object.keys(todos).forEach((todoId) => {
        parsedTodos.push({
          id: todoId,
          ...todos[todoId]
        });
      });
      // grabbing data above
      // updating redux store below
      dispatch(addTodos(parsedTodos));
    });
  };
};


// toggleTodo(id)  id of todo you want to toggle TOGGLE_TODO
export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
};

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    //var todoRef = firebaseRef.child('todos/' + id);
    // using es6 template strings
    var todoRef = firebaseRef.child(`todos/${id}`);
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };
    // return to chain promises
    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  };
};
