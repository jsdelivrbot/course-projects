import React, { Component } from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {
   // props.comments
   const list = props.comments.map(comment => <li key={comment}>{comment}</li>);
   return (
      <ul className="comment-list">
        {list}
      </ul>
   );
};

function mapStateToProps(state) {
  return { comments: state.comments }; // assume we will get a list of comments
                                       // coming from state
}

export default connect(mapStateToProps)(CommentList);
