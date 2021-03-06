import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  // helper method to render links
  renderLinks() {
    const public_nav = ['signup', 'signin', 'etc...'];
    const private_nav = ['profiles', 'search', 'etc...'];

    // if (this.props.authenticated) {
    //   map over private nav
    //   return links
    // } else {
    //   mape over pulic nav
    //   return links
    // }



    if (this.props.authenticated) {
      // show a link to sign out
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/signout">Sign Out </Link>
        </li>
      )
    } else {
      // show a link to sign in or sign up
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/signin">Sign In</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ];

    }
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">Redux Auth</Link>
        <ul className="nav navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}


function mapStateToProps(state) {
  // essentially a flag to decide if to shows
  // sign in or sign out
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header);
