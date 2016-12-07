import React, { Component } from 'react';
import { connect } from 'react-redux';

// Don't need this line with code cleanup at bottom
//import { bindActionCreators } from 'redux';

// action creator we want to call in componentWillMount
import { fetchPosts } from '../actions/index';

// link a component from one route to another
import { Link } from 'react-router';

class PostsIndex extends Component {
  // lifecycle method
  componentWillMount () {
      this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add A Post
          </Link>
        </div>
        List of Blog Posts
      </div>
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
