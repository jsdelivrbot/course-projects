var React = require('react');

var inputStyle = {
  width: "350px",
  marginRight: "5px"
};

var CityInput = React.createClass({
  submitForm: function(e){
    e.preventDefault();
    var location = this.refs.location.value.replace(/\s/g,'');

    if(!location) {
      alert('Please Enter a Location');
      return;
    }
    this.props.onFormSubmit(location);
    this.refs.location.value = "";
  },
  render: function() {
    return (
      <div className="row">
        <form onSubmit={this.submitForm} className="form-inline">
          <div className="form-group">
            <input className="form-control input-lg"
                   style={inputStyle}
                   ref="location"
                   placeholder="Enter Location, Example: Toronto, ON"
                   type="text"/>
            <button className="btn btn-primary btn-md">Submit</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = CityInput;
