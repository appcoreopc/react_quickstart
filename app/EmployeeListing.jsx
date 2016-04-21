import React from 'react';

class EmployeeListing extends React.Component { 

	constructor(props) {
    	super(props);
  	}

  	handleClick(e)
  	{
  		this.props.onEmployeeSelected(this.props.name);
  	}

  	render() {
		console.log(this.props);
		return <div>  <div onClick={(e) => {this.handleClick(e)}}> {this.props.name}</div>
		 </div>
	}
}

export default EmployeeListing;