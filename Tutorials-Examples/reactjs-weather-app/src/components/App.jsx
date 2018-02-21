var React = require('react');
var HTTP = require('../services/httpservice');
var TodaysWeather = require('./TodaysWeather.jsx');
var ExtendedForecastList = require('./ExtendedForecast.jsx');
var CityInput = require('./CityInput.jsx');

var divStyle = {};

var panelStyle = {};

var headerStyle = {
  backgroundColor: "silver",
  color: "white"
};

var App = React.createClass({
  getInitialState:function(){
      return (
          {
            weather: [],
            location: '',
            units: 'imperial',
            appId: '6cba3a4c3d666fe9b486db2c5d8329db'
          }
      );
  },
  handleFormSubmit: function(location){
      this.setState({location: location}, function(){
        this.loadWeatherData();
      });
  },
  loadWeatherData: function() {
    HTTP.get('/data/2.5/forecast?q='
              +this.state.location
              +'&units='
              +this.state.units
              +'&APPID='
              +this.state.appId)
    .then(function(data){
        this.setState({weather:[data]});
    }.bind(this));
  },
  render: function() {
    var todaysWeather = this.state.weather.map(function(item, key){
      return (
        <TodaysWeather
           key={key}
           city={item.city.name}
           country={item.city.country}
           date={item.list[0].dt_txt}
           temp={item.list[0].main.temp}
           windSpeed={item.list[0].wind.speed}
           windAngle={item.list[0].wind.deg}
           icon={item.list[0].weather[0].icon} />
      );
    });

    var extendedForecastList = this.state.weather.map(function(item, key){
      return (
        <ExtendedForecastList
           key={key}
           tempList={item.list}
           icon={item.list} />
      );
    });
    return (
        <div style={panelStyle} className="panel">
          <CityInput onFormSubmit={this.handleFormSubmit} />
          {this.state.location ? todaysWeather : null}
          {this.state.location ? extendedForecastList : null}
        </div>
    );
  }
});

module.exports = App;
