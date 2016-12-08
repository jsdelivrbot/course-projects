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

  renderPosts() {
      return this.props.posts.map((post) => {
        return (
          <li className="list-group-item" key={post.id}>
            <Link to={"posts/" + post.id}>
              <span className="pull-xs-right">{post.categories}</span>
              <strong>{post.title}</strong>
            </Link>
          </li>
        );
      });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add A Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators( { fetchPosts}, dispatch );
// }

//export default connect(null, mapDispatchToProps)(PostsIndex);

// shorter version
//export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);

// even shorter with ES6 syntax
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
