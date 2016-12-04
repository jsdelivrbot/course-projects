import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // the value of the input is set to term: ''
    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    // now go and fetch weather data
    // call the action creator (bindActionCreators)
    this.props.fetchWeather(this.state.term);

    // clear search input
    this.setState( { term: '' } );
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />

        <span className="input-group-button">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  // causes the action creator makes sure the action flows down into the middleware then into the reducers
  return bindActionCreators({ fetchWeather }, dispatch);
}

// null -- whenever you pass in a function to map the dispatch to the props is always has to be the second argument
// since this container doesn't care about state, it doesn't need to pass it in so instead pass null
export default connect(null, mapDispatchToProps)(SearchBar);
