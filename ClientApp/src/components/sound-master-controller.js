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

	
	render(){
		return (
			<div>
				Here goes the master!
				<SoundControllersContainer>
					<SoundController volume="0" src={CoffeeShopSound} id="coffee"/>
					<SoundController volume="0" src={RainSound} id="rain"/>
					<SoundController volume="0" src={ThunderStormSound} id="thunder"/>
					<SoundController volume="0" src={WhiteNoiseSound} id="noise"/>
				</SoundControllersContainer>
			</div>
		);
	}
}