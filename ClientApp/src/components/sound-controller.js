import React, { Component } from 'react';

export class SoundController extends Component {
	displayName = SoundController.name;

	render() {
		return (
			<div>
				<audio autoPlay="autoplay" volume={this.props.volume} loop >
					<source src={this.props.src} type="audio/wav" />
				</audio>
				<input type="range" min="0" max="20" className="slider" onInput={this.props.handleInput} />
			</div>
		);
	}
}