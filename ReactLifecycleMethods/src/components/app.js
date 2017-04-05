import React, { Component } from 'react';

export default class App extends Component {
  // getDefaultProps() {
  //   console.log('getDefaultProps');
  // }
  //
  // getInitialState() {
  //   console.log('getInitialState');
  // }

  componentWillMount() {
    console.log('componentWillMount');
  }


  ComponentWillReceiveProps() {
    console.log('ComponentWillReceiveProps');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    console.log('Inside the render');
    return (
      <div className="welcome-component">
        Here
      </div>
    );
  }
}
