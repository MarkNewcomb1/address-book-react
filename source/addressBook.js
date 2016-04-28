var React = require('react');
var PersonForm = require('./personForm.jsx');
var BusinessForm = require('./businessForm.jsx');
var Person = require('./person.jsx'); /* links to person.jsx */
var Business = require('./business.jsx'); /* links to business.jsx */

var AddressBook = React.createClass({

createPerson: function(firstName, lastName, number) {
	return {
		firstName: firstName, 
		lastName: lastName,
		number: number
	}

},
createBusiness: function(bizName, bizNumber) {
	return {
		bizName: bizName,
		bizNum: bizNumber
	}
},
getInitialState: function() {
	return {
		people: [], 
		businesses: []
	}
},
addPerson: function(name){
	var newPeople = this.state.people;
	newPeople.push(this.createPerson(name, "", ""))
	this.setState({
		people: newPeople
	})
},
addBusiness: function(name){
	var newBusiness = this.state.businesses;
	newBusiness.push(this.createBusiness(name, "", ""))
	this.setState({
		businesses: newBusiness
	})
},		
render: function() {
	var contacts = [];
	for (var i in this.state.people) {
		contacts.push(<Person
			key = {i+"p"}
			firstName = {this.state.people[i].firstName}
			lastName =  {this.state.people[i].lastName}
			number = {this.state.people[i].number} />)
	}
	for (var j in this.state.businesses) {
		contacts.push(<Business
			key = {j+"b"}
			bizName = {this.state.businesses[j].bizName}
			bizNum = {this.state.businesses[j].bizNum} />)
    }
    return (
    	<div> 
    		{contacts}
    		<PersonForm addPerson = {this.addPerson}/>
    		<BusinessForm addBusiness = {this.addBusiness}/>
    	</div>
    	)
}
});	

module.exports = AddressBook;
