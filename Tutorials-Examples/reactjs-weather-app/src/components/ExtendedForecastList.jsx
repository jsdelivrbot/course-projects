var React = require('react');

var iconStyle = {
  fontSize: "24"
};

var tdStyle = {
  verticalAlign: "middle",
  textAlign: "center",
  borderTop: "0 solid white",
  borderBottom: "1px solid white"
};

var ExtendedForecastList = React.createClass({
    render: function(){
        return (
            <tr>
              <td style={tdStyle} className="pull-left">
                <h5>{this.props.date}</h5>
              </td>
              <td style={tdStyle}>
                <i className={weatherIcon[this.props.icon]} style={iconStyle}></i>
              </td>
              <td style={tdStyle}>
                  <h5 className="pull-right">{Math.round(this.props.temp)}
                    &deg; F
                  </h5>
              </td>
            </tr>
        );
    }
});

module.exports = ExtendedForecastList;
