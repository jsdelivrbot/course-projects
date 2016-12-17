// collect email, password, and password confirmation
// from the user then once we have the info
// send to back end and create an account
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  handleFormSubmit(formProps) {
    // Call action creator to sign up user
    // formProps is all the form properties from the form
    // it is passed in from bind this
    this.props.signupUser(formProps);
  }

  renderAlert() {
      if (this.props.errorMessage) {
        return (
          <div className="alert alert-danger">
            <strong>Oops!</strong> {this.props.errorMessage}
          </div>
        );
      }
  }

  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm}} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" {...email} />
          {email.touched && email.error && <div className="error">{email.error}</div>}
        </fieldset>

        <fieldset className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" {...password} />
          {password.touched && password.error && <div className="error">{password.error}</div>}
        </fieldset>

        <fieldset className="form-group">
          <label>Confirm Password:</label>
          <input type="password" className="form-control" {...passwordConfirm} />
          {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
        </fieldset>


        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Signup </button>

      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};
  // refactor to remove duplicate code
  // foreach over formProps
  if (!formProps.email) {
    errors.email = "Please enter an email";
  }

  if (!formProps.password) {
    errors.password = "Please enter a password";
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = "Please enter a password confirmation";
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords Must Match';
  }

  return errors; // by default always return this even if empty
}


// pull off error message and display to user if it exists
function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(Signup);
