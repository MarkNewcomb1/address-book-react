var React = require('react');
var ReactDom = require('react-dom');
var AddressBook = require('./addressBook');

var RandomGenerator = React.createClass({
	render: function() {
		var peopleHTML = [];
		for (var i = 0; i < this.state.people.length; i++) {
			peopleHTML
		}
	}
})


ReactDom.render(<AddressBook firstName="hey" lastName="helylast" number="numba"/>, document.getElementById('app'));