import React from 'react';

import createHistory from 'history/createBrowserHistory';

//const history = createHistory();

// Route needs location
const Route = ({ path, component }, { location }) => {
  const pathname = location.pathname;
  if (pathname.match(path)) {
    return (
      React.createElement(component)
    );
  } else {
    return null;
  }
};

// to receive context a component must white-list which parts of the context it should receive
Route.contextTypes = {
  location: React.PropTypes.object,
};


// Links needs history
const Link = ({ to, children }, { history }) => (
  <a
    onClick={(e) => {
      e.preventDefault();
      history.push(to);
    }}
    href={to}
  >
    {children}
  </a>
);

Link.contextTypes = {
  history: React.PropTypes.object,
}

class Redirect extends React.Component {

  // defining Redirect as a JavaScript class,
  // allows us to define contextTypes inside the class declaration with static
  static contextTypes = {
    history: React.PropTypes.object,
  }

  componentDidMount() {
    const history = this.context.history;
    const to = this.props.to;
    history.push(to);
  }

  render() {
    return null;
  }
}






class Router extends React.Component {
  // expose history and location to childnen
  // using childeContextTypes
  static childContextTypes = {
    history: React.PropTypes.object,
    location: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
    // initialize the history
    this.history = createHistory();
    // subscribe to changes
    this.history.listen(() => this.forceUpdate());
  }

  // return the context object
  getChildContext() {
    return {
      history: this.history,
      location: window.location,
    };
  }

  // render the children wrapped by new Router component
  render() {
    return this.props.children;
  }
}




const App = () => (
  <Router>
    <div
      className='ui text container'
    >
      <h2 className='ui dividing header'>
        Which body of water?
      </h2>

      <ul>
        <li>
          <Link to='/atlantic'>
            <code>/atlantic</code>
          </Link>
        </li>
        <li>
          <Link to='/pacific'>
            <code>/pacific</code>
          </Link>
        </li>
        <li>
          <Link to='/black-sea'>
            <code>/black-sea</code>
          </Link>
        </li>
      </ul>

      <hr />

      <Route path='/atlantic' component={Atlantic} />
      <Route path='/pacific' component={Pacific} />
      <Route path='/black-sea' component={BlackSea} />
      {/* We'll insert the Route components here */}
    </div>
  </Router>
);

// Stateless functional components
const Atlantic = () => (
  <div>
    <h3>Atlantic Ocean</h3>
    <p>
      The Atlantic Ocean covers approximately 1/5th of the
      surface of the earth.
    </p>
  </div>
);

const Pacific = () => (
  <div>
    <h3>Pacific Ocean</h3>
    <p>
      Ferdinand Magellan, a Portuguese explorer, named the ocean
      'mar pacifico' in 1521, which means peaceful sea.
    </p>
  </div>
);


class BlackSea extends React.Component {
  state = {
    counter: 3,
  };

  componentDidMount() {
    // setInterval decrease state.counter by 1 every second
    this.interval = setInterval(() => (
      this.setState({ counter: this.state.counter - 1})
    ), 1000);
  }

  // Clear the interval when the component is unmounted
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h3>Black Sea</h3>
        <p>Nothing to sea [sic] here ...</p>
        <p>Redicrecting in {this.state.counter}...</p>
        {
          (this.state.counter < 1) ? (
            <Redirect to='/' />
          ) : null
        }
      </div>
    );
  }
}

export default App;
