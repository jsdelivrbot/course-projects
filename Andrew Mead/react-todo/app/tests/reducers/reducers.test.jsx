var expect = require('expect');
// To help test reducers. Any modifications (updates) to actions will throw an error
// Because we are updating an attribute on a frozen object
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      // action we want to dispatch
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      // args - current state is an empty string
      // second arg is an action
      // searchTextReducer('', )
      var res = reducers.searchTextReducer(df(''), df(action));
      // assert the state we get back is = to the one we expect which is dog
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompletedReducer', () => {
      // no arguments so just set type
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));
      // assertion
      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
        var action = {
          type: 'ADD_TODO',
          todo: {
            id: 'abc123',
            text: 'Something to do',
            completed: false,
            createdAt: 92384275
          }
        };
        var res = reducers.todosReducer(df([]), df(action));

        expect(res.length).toEqual(1);
        expect(res[0]).toEqual(action.todo);
    });
    // defined todos array with realistic todo item
    // generate action
    // call reducer and assert completed flipped
    it('should update todo', () => {
      var todos = [{
        id: '123',
        text: 'Something',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];
      var updates = {
        completed: false,
        completedAt: null
      };
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      var res = reducers.todosReducer(df(todos), df(action));
      // assert new completed status is false
      // res[0] first item in array
      expect(res[0].completed).toEqual(updates.completed);
      // assert completed at value is set to undefined
      expect(res[0].completedAt).toEqual(updates.completedAt);

      expect(res[0].text).toEqual(todos[0].text);
    });

    it('should add existing todos', () => {
      var todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };

      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });
});
