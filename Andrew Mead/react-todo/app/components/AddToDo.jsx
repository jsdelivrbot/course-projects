var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  // handler for when form is submitted
  handleSubmit: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;

    if(todoText.length > 0) {
      //clear out the value
      this.refs.todoText.value = '';
      // no props anymore so use dispatch instead of this.props.onAddTodo
      //this.props.onAddTodo(todoText);
      // dispatch(actions.addTodo(todoText)); -- update to use firebase now
      dispatch(actions.startAddTodo(todoText));
    } else {
      // put cursor back in field to type valid data
      this.refs.todoText.focus();
    }
  },

  render: function() {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do ... " />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
// addTodo does not need any properties off of the state so no arg in the first
// function call
