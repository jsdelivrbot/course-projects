import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
//import * as actions from '../../actions';
import { signinUser } from '../../actions'

class Signin extends Component {
  handleFormSubmit({email, password}) {
    //console.log('email' + email);
    // need to do something to log user in
    this.props.signinUser({email, password});
  }

  render() {
    // handleSubmit is a helper that comes from redux form and email and
    // password come from redux form as well
    const { handleSubmit, fields: { email, password }} = this.props;

    return (
      // when handing a callback function off bind(this)
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input {...email} className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input {...password} className="form-control" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    )
  }
}

// options for the form
// passing in the actions gives you access to all
// different actions on props inside the component
export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
}, null, { signinUser })(Signin);
// SignUpForm = reduxForm({
//   form: 'signUp',
//   validate
// })(SignUpForm)
//
// export default SignUpForm = connect(mapStateToProps, { signUpUser })(SignUpForm)
