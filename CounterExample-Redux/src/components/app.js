import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import { increaseCount, decreaseCount } from '../actions/index';
import * as actions from '../actions/index';

class App extends Component {
  render() {
    let { count } = this.props.count;

    return (
      <div>
        <p >{count}</p>
        <p>
          <button onClick={() =>  this.props.increaseCount()}>Increase</button>
          <button onClick={() =>  this.props.decreaseCount()}>Decrease</button>
        </p>
      </div>
    );
  }
}

var mapStateToProps = state => {
  return {
    count: state.count
  };
};

var mapDispatchToProps = dispatch => {
  return { ...bindActionCreators(actions, dispatch) };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;




//
//
// function mapStateToProps(state) {
//   return { count: state.count };
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators( { increaseCount, decreaseCount }, dispatch );
// }
//
// //export default connect(null, mapDispatchToProps)(PostsIndex);
//
// // shorter version
// //export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);
//
// // even shorter with ES6 syntax
// export default connect(mapStateToProps, { increaseCount, decreaseCount })(App);
