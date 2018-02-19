import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

export class SoundController extends Component {
	displayName = SoundController.name;

	componentDidMount() {
		this.setVolume(this.props.volume);
	}

	render() {
		return (
			<Grid fluid className="sound-controller">
				<Row className="text-center sound-icon-row">
					<span className={"sound-icon glyphicon glyphicon-" + this.props.icon} />
				</Row>
				<Row className="text-center">
					<audio loop ref="audio" preload="auto">
						<source src={this.props.src} type="audio/wav" />
					</audio>
					<input type="range" min="0" max="20" className="slider" defaultValue={this.props.volume} onInput={event => this.handleInput(event)} />
				</Row>
			</Grid>
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

	handleInput(event) {
		this.setVolume(event.target.value * 5 / 100); //change to percent
	}
}