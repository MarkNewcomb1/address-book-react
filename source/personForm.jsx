var React = require('react');
var PersonForm = React.createClass({  

  getInitialState: function() {
    return {name: ''};
  },
  handleChange: function(event) {
    this.setState({name: event.target.value});
  },

  addPerson: function(event) {
    this.props.addPerson(this.state.name);
    this.setState({
      name: ""
    });
  },
  render: function() {
    return (
      <div>
      <input
        type="text"
        placeholder ="Enter Name"
        value={this.state.name}
        onChange={this.handleChange}
      />
      <button onClick = {this.addPerson}>Submit</button>
      </div>
    );
  }
});

module.exports = PersonForm;