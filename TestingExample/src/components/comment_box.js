import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class CommentBox extends Component {
  constructor(props) {
      super(props);
      this.state = { comment: '' };
  }

  handleChange(event) {
    this.setState({comment: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    // saveComment() is the action creator
    this.props.saveComment(this.state.comment);
    this.setState({comment: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <textarea
          value={this.state.comment}
          onChange={this.handleChange.bind(this)}/>
        <button action="submit">Submit Comment</button>
      </form>
    );
  }
}


// only care about wiring up action creator, do not care about state so first arg can be null
// by doing this
// import * as actions from '../actions';
// and passing actions - it automatically binds all action creators to comment box container
export default connect(null, actions)(CommentBox);
