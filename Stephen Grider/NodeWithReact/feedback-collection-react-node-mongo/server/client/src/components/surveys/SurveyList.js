import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  // anytime this component is rendered to the screen make sure we call the fetchSurveys action creator
  componentDidMount() {
    this.props.fetchSurveys();
  }

  // responsible for rendering the list of surveys
  // iterate over a list of surveys - for every survey return a card
  // every iteration is called with a 'survey'
  // reverse changes the order to put newest survey at top
  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div key={survey._id} className="card darken-1 blue-grey">
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>
              {survey.body}
            </p>
            <p className="right">
              Sent On: { new Date(survey.dateSent).toLocaleDateString() }
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    })
  }

  render() {
    return(
      <div>
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

// { fetchSurveys } is the action  creator that calls an action
export default connect(mapStateToProps, { fetchSurveys})(SurveyList);
