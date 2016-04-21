import React from 'react';

class TimesheetEntry extends React.Component { 

	constructor(props) {
    	super(props);
  	}

  	render() {

			return <div> 
			<span> Monday </span>
			<span> Tuesday </span>
			<span> Wednesday</span>
			<span> Thursday</span>
			<span> Friday</span>
			<span> Saturday</span>
			</div>
	}
}

export default TimesheetEntry;