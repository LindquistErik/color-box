import React, { Component } from 'react';

class Colorbox extends Component {
	constructor(props) {
    	super(props)

	    this.state = {
			currentIndex: 0,
			backgroundIndex: 8,
			color: [
				"GREEN",
				"BLUE",
				"YELLOW",
				"RED",
				"PURPLE",
				"WHITE",
				"GRAY",
				"ORANGE",
				"LIGHTBLUE"
			]
		}
	}

	render() {

		let styles = {
			background: this.state.color[this.state.currentIndex],
		}

		let backgroundStyles = {
			background: this.state.color[this.state.backgroundIndex],
		}

		return (
	      <div className = "colorboxDiv" style={backgroundStyles}>
	        <div>
	          <div className = "colorbox" onClick={this.colorClick} style={styles}>
	              {this.state.color[this.state.currentIndex]}
	          </div>
	        </div>
	      </div>
	  );
  	}

	colorClick = () => {
		if (this.state.currentIndex < 8) {
			let {currentIndex: updatedIndex} = this.state
			let {currentIndex: updatedBackgroundIndex} = this.state
			updatedIndex = this.state.currentIndex + 1
			this.setState({backgroundIndex: updatedBackgroundIndex})
			this.setState({currentIndex : updatedIndex})
		} else {
			let {currentIndex: updatedIndex} = this.state
			let {currentIndex: updatedBackgroundIndex} = this.state
			updatedIndex = 0
			updatedBackgroundIndex = 8
			this.setState({backgroundIndex: updatedBackgroundIndex})
			this.setState({currentIndex : updatedIndex})
		}
	}
}
export default Colorbox;
