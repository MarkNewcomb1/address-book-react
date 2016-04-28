var React = require('react');

var Person = React.createClass({
  render: function(){
    return (
      <div>
        <b>{this.props.firstName}</b>
        <b>{this.props.lastName}</b>
        <b>{this.props.number}</b>
      </div>
    )
  }
});

module.exports = Person;