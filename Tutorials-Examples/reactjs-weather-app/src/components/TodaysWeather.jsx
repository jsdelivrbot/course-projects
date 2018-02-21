var React = require('react');

var headerStyle = {
  backgroundColor: "#3366FF",
  color: "white",
  paddingLeft: "50px"
};
var innerStyle = {
  paddingLeft: "30px"
};
var mainIcon = {
    fontSize: 48
};
var windPos = { };
var smallText = {
  fontSize: 10,
  display: "inline-block"
};
var secondaryContent = {
  fontSize: 22,
  marginRight: 10
};

var TodaysWeather = React.createClass({
    render: function(){
        return (
          <div style={headerStyle} className="panel-heading col-xs-4 col-xs-offset-4">
              <div className="row">
                <h3>{this.props.city}</h3>
                {textMonth[this.props.date.substring(5, 7)]} {this.props.date.substring(8, 10)}, {this.props.date.substring(0,4)}
              </div>
              <br />
              <div className="row">
                <div className="col-xs-4">
                  <i className={weatherIcon[this.props.icon]} style={mainIcon}></i>
                </div>

                <div className="col-xs-8">
                  {Math.round(this.props.temp)} &deg; F
                  <br />
                  <i className={parseWind(this.props.windAngle).compassClass} style={secondaryContent}></i>
                  {parseWind(this.props.windAngle).direction} {Math.round(this.props.windSpeed)} mph
                </div>
              </div>
          </div>
        );
    }
});

module.exports = TodaysWeather;
