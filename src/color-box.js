import React, { Component } from 'react';

class Colorbox extends Component {
	constructor(props) {
    	super(props)

	    this.state = {
			currentIndex: 0,
			backgroundIndex1: 8,
			backgroundIndex2: 0,
			backgroundIndex3:0,
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
			],
			color2: [
				"BLUE",
				"YELLOW",
				"RED",
				"PURPLE",
				"WHITE",
				"GRAY",
				"ORANGE",
				"LIGHTBLUE",
				"GREEN",
				"BLUE",
				"YELLOW",
				"RED",
				"PURPLE",
				"WHITE",
			],
			color3: [
				"YELLOW",
				"RED",
				"PURPLE",
				"WHITE",
				"GRAY",
				"ORANGE",
				"LIGHTBLUE",
				"GREEN",
				"BLUE",
				"YELLOW",
				"RED",
				"PURPLE",
				"WHITE",

			]


		}
	}

	render() {

		let styles = {
			background: this.state.color[this.state.currentIndex],
		}

		let backgroundStyles = {
			background: this.state.color[this.state.backgroundIndex1],
		}

		let backgroundStyles2 = {
			background: this.state.color2[this.state.backgroundIndex2],
		}
		let backgroundStyles3 = {
			background: this.state.color3[this.state.backgroundIndex3],
		}


		return (
	      	<div className = "colorboxDiv" style={backgroundStyles}>
				<div className = "backgroundIndex3" style={backgroundStyles3}>
					<div className = "backgroundIndex2" style={backgroundStyles2}>
			  			<div className = "colorbox" onClick={this.colorClick} style={styles}>
	              			{this.state.color[this.state.currentIndex]}
						</div>
			  		</div>
	      		</div>
	      	</div>

	  );
  	}

	colorClick = () => {
		if (this.state.currentIndex < 8) {
			let {currentIndex: updatedIndex} = this.state
			let {currentIndex: updatedBackgroundIndex1} = this.state
			let {backgroundIndex2: updatedBackgroundIndex2} = this.state
			let {backgroundIndex3: updatedBackgroundIndex3} = this.state
			updatedIndex = this.state.currentIndex + 1
			updatedBackgroundIndex2 = this.state.backgroundIndex2 + 1
			updatedBackgroundIndex3 = this.state.backgroundIndex3 + 1
			this.setState({backgroundIndex1: updatedBackgroundIndex1})
			this.setState({backgroundIndex2: updatedBackgroundIndex2})
			this.setState({backgroundIndex3: updatedBackgroundIndex3})
			this.setState({currentIndex : updatedIndex})
		} else {
			let {currentIndex: updatedIndex} = this.state
			let {currentIndex: updatedBackgroundIndex1} = this.state
			let {currentIndex: updatedBackgroundIndex2} = this.state
			let {currentIndex: updatedBackgroundIndex3} = this.state
			updatedIndex = 0
			updatedBackgroundIndex1 = 8
			this.state.updatedBackgroundIndex2 = 0
			this.state.updatedBackgroundIndex3 = 0
			this.setState({backgroundIndex1: updatedBackgroundIndex1})
			this.setState({backgroundIndex2: this.state.updatedBackgroundIndex2})
			this.setState({backgroundIndex3: this.state.updatedBackgroundIndex3})
			this.setState({currentIndex : updatedIndex})
		}
	}
}
export default Colorbox;
