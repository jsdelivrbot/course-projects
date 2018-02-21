import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');
import firebase, {firebaseRef} from 'app/firebase/';
var actions = require('actions');

// pass in array of middleware
var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate search text action', () => {
    // Action you expect to get back when you call the generator
    var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Some search text'
    };
    // call actual setSearchText function
    // passing in searchText from action object above
    var res = actions.setSearchText(action.searchText);
    // see if they are equal
    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
        type: 'ADD_TODO',
        todo: {
          id: '123abd',
          text: 'Anything you like',
          completed: false,
          createdAt: 0,
        }
    };
    var res = actions.addTodo(action.todo);
    expect(res).toEqual(action);
  });

  // test async call to firebase
  it('should create todo and dispatch ADD_TODO', (done) => {
    // empty store
    const store = createMockStore({});
    const todoText = 'My todo item';
    // use promise
    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions(); //return an array of actions fired on mock store
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done(); // only way to pass successfully else could get test timeout
    }).catch(done);
  });

  it('should generate add todos action object', () => {
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
    var res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });

  it('should toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('should generate update todo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: '123',
      updates: {completed: false}
    };
    var res = actions.updateTodo(action.id, action.updates);
    expect(res).toEqual(action);
  });


  describe('Tests with firebase todos', () => {
    var testTodoRef;
    // run this before each test - takes done function
    beforeEach((done) => {
      testTodoRef = firebaseRef.child('todos').push();

      testTodoRef.set({
        text: 'Something todo',
        completed: false,
        createdAt: 2342341235
      }).then(() => done());
    });
    // remove todo item created above
    afterEach((done) => {
      testTodoRef.remove().then(() => done());
    });

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      // dispatch action above
      store.dispatch(action).then(() => {
        const mockActions = store.getActions();
        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key,
        });
        expect(mockActions[0].updates).toInclude({
          completed: true
        });
        expect(mockActions[0].updates.completedAt).toExist();
        done();
      }, done);
    });
  });
});
