import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">{book.title}
        </li>
      )
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    // what is returned here will be able to be used as props
    // for this we will have access to this.props.books
    books: state.books
  }
}

// anything returned from this function will end up as props on the BookList container
// what is returned --- is just the first argument { selecBook: selectBook }
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called the result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//  Promote BookList from a component to a container  - it needs to know about the new
// dispatch method selectBook, make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);


/*
This component creates a UL and then calls a helper function this.renderList()
and that maps over an array of books that is passed into the component
and for each book in the array we create an <li> that displays the book title

After you have the component we have to plug in the application state to this component.

To connect react and redux use a separate library called react-redux
To make use of the library make use of a Container. So promote a component to a container
A container is a react component that has a direct connection to the state managed by redux
Containers are often called smart components (vs dump components)
They are also often kept in a container folder.

Which components do we promote to a container and which do we leave as normal react components?
It varies, we want the most parent component that cares abut a particular piece of state to be a container

For this example, app.js just says to display the books and book list. So that can stay dumb. book-list and bookdetail
both care about state so they can be containers.

Only the most parent component that cares about state needs to be connected to redux.

To make this a Container import { Connect } from 'react-redux'
Remove export default
Add function mapStateToProps()
Map state to props takes application state as an argument (currently state is the list of books and the active book)
and whatever gets returned from there will show up as props inside of book list. Usually an object is returned. Whatever
that is will be set as this.props  of the component and we refer to it via the key of the object.

So if you have this
function mapStatetoProps(state) {
  return {
   asdf: '123'
  }
}

and in render() you console.log this
console.log(this.props.asdf)
you will get 123 as the result

Next, make use of the connect object
export default connect(mapStateToProps)(BookList);

This will export the entire component with state instead of how it previously was where
it exported this way .....
export default class BookList extends Component {
That way just exported the dump component

connect takes a function and a component and produces a container
                       (function)       (component)
export default connect(mapStateToProps)(BookList);


2 notes about using connect -
1. Whenever the app state changes (say loading a list of books from remote server or user clicks on something)
   The container will instantly rerender with the new state
2. Whenever the app state changes the object in the state function will be assinged  as props to the component





*/
