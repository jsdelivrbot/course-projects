var React = require('react');
var ReactDOM = require ('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

// store
import {configure} from 'configureStore';

// Load Todo component
// var TodoList = require('TodoList');
import ConnectedTodoList, {TodoList} from 'TodoList'
import ConnectedTodo, {Todo} from 'Todo'
//var Todo = require('Todo');

// Create test suite
describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    var todos = [{
      id: 1,
      text: 'Do Something',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }, {
      id: 2,
      text: 'Check Mail',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }];
    // declare and give store some data
    var store = configure({
        todos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    )
    // var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/> );
    //fetch todo list from the provider
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message if no todos', () => {
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/> );
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});
