import { Col, Grid, Row } from 'react-bootstrap';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { SoundControllersContainer } from './sound-controllers-container';
import { SoundController } from './sound-controller';
import CoffeeShopSound from '../sound/CoffeeShop.wav';
import RainSound from '../sound/Rain.wav';
import ThunderStormSound from '../sound/ThunderStorm.wav';
import WhiteNoiseSound from '../sound/WhiteNoise.wav';

export class SoundMasterController extends Component {
	displayName = SoundMasterController.name;


	constructor(props) {
		super(props);

		this.apiPath = "/api/books"

		this.state = {
			error: null,
			isLoaded: false,
			sounds: []
		}
	}

	componentDidMount() {
		this.fetchSounds();
	}

	fetchSounds() {
		fetch(this.apiPath)
			.then(res => res.json())
			.then((result) => {
				this.setState({
					error: null,
					isLoaded: true,
					sounds: result
				});
			}, (error) => {
				this.setState({
					isLoaded: true,
					error: error,
				});
			});
	}

	getLoadingScreen() {
		return (
			<SoundControllersContainer>
				<Grid fluid>
					<Row>
						<Col sm={12} className="text-center">
							LOADING
						</Col>
					</Row>
				</Grid>
			</SoundControllersContainer>
		)
	}

	getReadyScreen() {
		const {error, isLoaded, sounds} = this.state;
		return (
			<div>
				Here goes the master!
				<SoundControllersContainer>
					<Grid fluid>
						<Row>
							{sounds.map( item => (
								<Col key={item.id} sm={2} smOffset={2}>
									<SoundController volume="0" src={this.getFilePath(item.fileName)} icon={item.iconName} />
								</Col>
							))}
						</Row>
					</Grid>
				</SoundControllersContainer>
			</div>
		);
	}

	getFilePath(name) {
		return "../sound/" + name + ".wav";
	}

	render() {
		return this.state.isLoaded ? this.getReadyScreen() : this.getLoadingScreen();
	}
}