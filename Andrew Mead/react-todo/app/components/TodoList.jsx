var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');
//var Todo = require('Todo');

export var TodoList = React.createClass({
  render: function() {
    var {todos, showCompleted, searchText} = this.props;

    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing to do</p>
        )
      }
      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        // ...todo is a spread operator to get all props passed down to todo.jsx
        return (
          <Todo key={todo.id} {...todo} />
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

// do a connection
// connect it to TodoList so the TodoList component can now request data it would like
// in order to render itself
export default connect(
  (state) => {
    return state;
  }
)(TodoList);

/*
return {
  todos: state.todos
};

todos property gets set on props for the component as (TodoList)
And now it will have access to whatever the state.todos properties is (an array of todo items)
*/
