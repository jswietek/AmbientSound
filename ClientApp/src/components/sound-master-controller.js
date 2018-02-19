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


	render() {
		return (
			<div>
				Here goes the master!
				<SoundControllersContainer>
					<Grid fluid>
						<Row>
							<Col sm={2} smOffset={3}>
								<SoundController volume="0" src={CoffeeShopSound} icon="user" id="coffee" />
							</Col>
							<Col sm={2} smOffset={2}>
								<SoundController volume="0" src={RainSound} icon="cloud" id="rain" />
							</Col>
						</Row>
						<Row>
							<Col sm={2} smOffset={3}>
								<SoundController volume="0" src={ThunderStormSound} icon="flash" id="thunder" />
							</Col>
							<Col sm={2} smOffset={2}>
								<SoundController volume="0" src={WhiteNoiseSound} icon="bullhorn" id="noise" />
							</Col>
						</Row>
					</Grid>
				</SoundControllersContainer>
			</div>
		);
	}
}