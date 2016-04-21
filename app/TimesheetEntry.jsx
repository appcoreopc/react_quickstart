import React from 'react';

class TimesheetEntry extends React.Component { 

	constructor(props) {
    	super(props);
  	}

  	handleCommmand(e) {
		this.props.onSelectCommand(e);
  	}

  	render() {

			return <div> 
			<div><span> Monday <input type='text' id=''/> </span>
			<span> Tuesday <input type='text' id=''/> </span>
			<span> Wednesday <input type='text' id=''/> </span>
			<span> Thursday <input type='text' id=''/> </span>
			<span> Friday <input type='text' id=''/> </span>
			<span> Saturday <input type='text' id=''/> </span>
			</div>
			<div>
				<input type='button' value='Ok' onClick={ (e) => { this.handleCommmand(0) }}  />
				<input type='button' value='Cancel' onClick={ (e) => { this.handleCommmand(1) }} />
			</div>
			</div>

			
	}
}

export default TimesheetEntry;