import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UserList extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  // helper method to put together a single profile for a UserList
  renderUser(user) {
    return (
      <div className="card card-block">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">{user.company.name}</p>
        <a className="btn btn-primary" href={user.website}>Website</a>
      </div>
    );
  }

  //for each user we have reference this.renderUser
  //for each user call the helper function renderUser and return it to jsx
  render() {
    return (
        <div className="user-list">
          {this.props.users.map(this.renderUser)}
        </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps, actions)(UserList);
