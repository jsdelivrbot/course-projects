var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var CreateHistory = require('history/lib/createHashHistory');

var Base = require('./components/Base.jsx');
var WeatherApp = require('./components/App.jsx');

var History = new CreateHistory({
  queryKey: false
});

var Routes = (
  <Router history={History}>
    <Route path="/" component={Base}>
      <Route path="/weather" component={App} />
    </Route>
  </Router>
);

module.exports = Routes;
