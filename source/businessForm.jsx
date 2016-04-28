var React = require('react');
var BusinessForm = React.createClass({  

  getInitialState: function() {
    return {bizName: ''};
  },
  handleChange: function(event) {
    this.setState({bizName: event.target.value});
  },

  addBusiness: function(event) {
    this.props.addBusiness(this.state.bizName);
    this.setState({
      bizName: ""
    });
  },
  render: function() {
    return (
      <div>
      <input
        type="text"
        placeholder ="Enter Business Name"
        value={this.state.bizName}
        onChange={this.handleChange}
      />
      <button onClick = {this.addBusiness}>Submit</button>
      </div>
    );
  }
});

module.exports = BusinessForm;