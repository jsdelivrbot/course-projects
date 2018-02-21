var React = require('react');
var ExtendedForecastList = require('./ExtendedForecastList.jsx');

var rowStyle = {
 paddingLeft: 15,
 paddingRight: 15
};

var Forecast = React.createClass({
  render: function(){
    var extenedForecastList = this.props.tempList.map(function(item, key) {
        var month = textMonth[item.dt_txt.substring(5,7)];
        if (item.dt_txt.substring(11, 13) == "12") {
            return (
              <div key={key}>
                <ExtendedForecastList
                    date={month + " " +item.dt_txt.substring(8, 10)}
                    temp={item.main.temp}
                    icon={item.weather[0].icon} />
              </div>
            );
        }
    });

    return (
      <div className="row panel-body col-xs-4 col-xs-offset-4">
        <div className="row future-weather-list">
          <div className="col-xs-12" style={rowStyle}>
            <table className="table table-striped">
              {extenedForecastList}
            </table>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Forecast;
