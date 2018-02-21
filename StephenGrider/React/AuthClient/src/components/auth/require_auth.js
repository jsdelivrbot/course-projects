import React, { Component } from 'react';
import { connect } from 'react-redux';

// pass component directly in (ComposedComponent)
// if the user is not authenticated they get redirected
// to some other route
export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    // whenever this component is about to render
    // kick the users back to the home route
    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    // when the component is about to get a new set of props or be rerendered
    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      // get access to context
      console.log(this.context);

      //console.log('Rendering', ComposedComponent);
      //console.log(this.props.authenticated);
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  // this is technically nesting a higher order component
  return connect(mapStateToProps)(Authentication);
}
