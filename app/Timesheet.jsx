import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeListing from './EmployeeListing.jsx';
import TimesheetEntry from './TimesheetEntry.jsx';
import 'whatwg-fetch'

class Timesheet extends React.Component { 

	constructor(props) {
    	super();
    	this.state = {
    		employees: [], 
		    showTimesheet : false
		};
  	}

  	componentDidMount()
  	{  		
  		var self = this; 

  		fetch('./app/person.json')
  			.then(function(response) {
    		return response.json()
  		}).then(function(json) {
    		self.setState({
    			employees : json
    		});
  		}).catch(function(ex) {
    		console.log('parsing failed', ex)
  		})
  	}


  	handleEmployeeSelected(e)
  	{
  		if (e != null)
  		{
  			console.log("selecting employee.");
  		 	this.setState({
	    	  	showTimesheet: true
    		});
  		}
  	} 

  	handleSelectCommand(e)
  	{
  		var a = typeof e;
  		console.log(a);

  		if (e == 1)
  		{
  			this.setState({
	    		  	showTimesheet: false
    		});
  		}
  	}

	render() {
		var data = this.state.employees;
		let employees = data.map((item) => {
			return <li><EmployeeListing onEmployeeSelected={(e) => 
				{ this.handleEmployeeSelected(e)}}  id={item.id} name={item.name} /> </li>		
		});

		return <div>
		 <h1> Simple Timesheet Entry </h1> :-
		 	<div> { employees }  </div>
		 	<div>  { this.state.showTimesheet ? <TimesheetEntry 
		 		onSelectCommand={ (e) => { this.handleSelectCommand(e) }} /> : null } </div>
		</div>
	}
}	

ReactDOM.render(<Timesheet/>, document.getElementById('container'));