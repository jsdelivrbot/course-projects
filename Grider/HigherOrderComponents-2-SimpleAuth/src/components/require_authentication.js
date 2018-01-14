import React, { Component } from 'react';
import { connect } from 'react-redux';

// Argument is the component you want to wrap
// source of ...this.props = passes all the props that were passed to the
// composed component
export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    // called whenever the component gets a new set of props (or is rerendered)
    // argument is the next set of props the user gets
    componentWillUpdate(nextProps) {
      if(!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      console.log(this.context);
      //console.log(this.props.authenticated);
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return {authenticated: state.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
