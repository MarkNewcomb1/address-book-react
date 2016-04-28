var React = require('react');
var Business = React.createClass({
  render: function(){
    return (
      <div>
        <b>{this.props.bizName}</b>
        <b>{this.props.bizNum}</b>
      </div>
    )
  }
});

module.exports = Business;