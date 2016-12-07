import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// action creator we want to call in componentWillMount
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  // lifecycle method
  componentWillMount () {
      this.props.fetchPosts();
  }

  render() {
    return (
      <div>List of blog posts</div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators( { fetchPosts}, dispatch );
// }

//export default connect(null, mapDispatchToProps)(PostsIndex);

// shorter version
//export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);

// even shorter with ES6 syntax
export default connect(null, { fetchPosts })(PostsIndex);
