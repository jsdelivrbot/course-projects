// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  // initialize component level state
  // set as false
  state = { showFormReview: false };

  renderContent() {
    // if the state is true return the form review
    // if still false then do the survey form review
    if (this.state.showFormReview) {
      return (
          <SurveyFormReview
            onCancel={() => this.setState({ showFormReview: false })}
          />
      )
    }

    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    )
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }

}

// This component SurveyNew is tied to this form .... surveyForm
// destroyOnUnmount: false is not here so it will clear the form
// when nagivating away from survey new 
export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);




// initialize component level state
// constructor(props) {
//   super(props);
//
//   this.state = { new: true };
// }

// ^--- way to do it without babel
// code seen in the function is what can be done now with babel and es6
