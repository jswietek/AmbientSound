import React, { Component } from 'react';

export class SoundController extends Component {
	displayName = SoundController.name;

	componentDidMount() {
		this.setVolume(this.props.volume);
	}

	render() {
		return (
			<div>
				<audio loop ref="audio">
					<source src={this.props.src} type="audio/wav" />
				</audio>
				<input type="range" min="0" max="20" className="slider" defaultValue={this.props.volume} onInput={event => this.handleInput(event)} />
			</div>
		);
	}

	setVolume(volume) {
		if (this.refs.audio.volume == 0 && volume > 0) {
			this.refs.audio.play();
		}
		else if (this.refs.audio.volume > 0 && volume == 0) {
			this.refs.audio.pause();
		}

		this.refs.audio.volume = volume;
	}

	handleInput(event){
		this.setVolume(event.target.value * 5 / 100); //change to percent
	}
}