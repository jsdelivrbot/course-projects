var React = require('react');
var ReactDOM = require ('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');


var configureStore = require('configureStore');
var TodoApp = require('TodoApp');
import TodoList from 'TodoList'

// Create test suite
describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render TodoList', () => {
    // mock a provider passing in the store

    // get access to the store
    var store = configureStore.configure();
    // store result of test utils
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );
    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    // if 1 it means the todo list was rendered -  0 means it wasn't more than 1 means too many
    expect(todoList.length).toEqual(1);
  });
});
