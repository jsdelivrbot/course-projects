var React = require('react');
var ReactDOM = require ('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

import * as actions from 'actions';
// Load Todo component
// var Todo = require('Todo'); -- change for redux
//var {Todo} = require('Todo');
import {Todo} from 'Todo';


// Create test suite
describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should dispatch TOGGLE_TODO action on click', () => {
    var todoData = {
      id: 199,
      text: 'Write todo.test.jsx test',
      completed: true
    }
    var action = actions.startToggleTodo(todoData.id, !todoData.completed);
    var spy = expect.createSpy();

    // var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />);
    // changed for redux
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy} />);

    // access jquery selector
    var $el = $(ReactDOM.findDOMNode(todo));

    // pull out any element (root element) and simulate the click element
    TestUtils.Simulate.click($el[0]);

    // assert that the spy was called successfully with an id of 199
    //expect(spy).toHaveBeenCalledWith(199); changed for redux
    expect(spy).toHaveBeenCalledWith(action);
  });
});
