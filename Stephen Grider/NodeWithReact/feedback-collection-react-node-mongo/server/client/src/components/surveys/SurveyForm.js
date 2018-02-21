// SurveyForm shows a form for a user to add input
import _ from 'lodash';

import React, { Component } from 'react';
// import reduxForm helper - allows redux form to connect to redux store
// its similar to the connect()  function
// field is a helper to render any type of different html element to collect input
import { reduxForm, Field }  from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';


class SurveyForm extends Component {
  renderFields() {
    // descructure label and fields
    // use map to return a list
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  /* this.props.handleSubmit(this.props.onSurveySubmit)
  this is a callback to the survey form call in the SurveyNew file */
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button
            type="Submit"
            className="teal btn-flat right white-text">
              Next
              <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    )
  }
}

// values are the values coming from the form
function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  // use each not map because we want to modify the errors object
  _.each(formFields, ({ name }) => {
    // square bracket syntax to figure out on the fly what we are looking at
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  // if (!values.title) {
  //   errors.title = 'You must provide a title';
  // }
  //
  // if (!values.subject) {
  //   errors.subject = 'You must provide a subject';
  // }

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);


/* If there is an error then redux form will pass the error as a prop to the specific field */

// renderFields() {
//   return (
//     <div>
//       <Field
//         label="Survey Title"
//         type="text"
//         name="title"
//         component={SurveyField}
//       />
//       <Field
//         label="Subject Line"
//         type="text"
//         name="subject"
//         component={SurveyField}
//       />
//       <Field
//         label="Email Body"
//         type="text"
//         name="body"
//         component={SurveyField}
//       />
//       <Field
//         label="Recipient List"
//         type="text"
//         name="emails"
//         component={SurveyField}
//       />
//     </div>
//   )
// }
