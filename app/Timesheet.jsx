import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeListing from './EmployeeListing.jsx';
import TimesheetEntry from './TimesheetEntry.jsx';
 
class Timesheet extends React.Component { 

	constructor(props) {
    	super();
    	this.state = {
    		employees: [
    		{ "id" : 1, "name" : "Mark"}, { "id" : 2, "name" : "Jessie"}, { "id" : 3, "name" : "Janet"}, { "id" : 4, "name" : "Winston"}, { "id" : 5, "name" : "Jacob"}, { "id" : 5, "name" : "William"}
		    ], 
		    showTimesheet : false
		};
  	}

  	handleEmployeeSelected(e)
  	{
  		console.log(e);

  		if (e != null)
  		{
  			console.log("selecting employee.");
  		 	this.setState({
	    	  	showTimesheet: true
    		});
  		}
  	} 

  	handleTest(e)
  	{
  		console.log('we are here');
  		this.setState({
	    	  	showTimesheet: true
    		});
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
		 	<div>  { this.state.showTimesheet ? <TimesheetEntry /> : null } </div>
		 	 <input type='button' value='Ok' onClick={ () => { this.handleTest() }} />
		</div>
	}
}	

ReactDOM.render(<Timesheet/>, document.getElementById('container'));