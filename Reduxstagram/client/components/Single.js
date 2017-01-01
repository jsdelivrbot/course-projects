import React from 'react';
// can reuse Photo component
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const { postId } = this.props.params;

    // index of the post
    const i = this.props.posts.findIndex((post) => post.code === postId);
    // get the post
    const post = this.props.posts[i];

    // not every photo has comments so || [] Or empty array
    const postComments = this.props.comments[postId] || [] ;


    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
});


export default Single;
