import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import Main from './Main';


function mapStateToProps(state) {
  // will have this.props.posts and this.props.comments
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  // pass all actions and dispatch
  return bindActionCreators(actionCreators, dispatch);
}

// Add all props from state to props
const App = connect(mapStateToProps, mapDispatchToProps)(Main);
export default App;
