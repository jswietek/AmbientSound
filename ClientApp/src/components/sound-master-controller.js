import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { SoundControllersContainer } from './sound-controllers-container';
import { SoundController } from './sound-controller';
import CoffeeShopSound from '../sound/CoffeeShop.wav'

export class SoundMasterController extends Component {
	displayName = SoundMasterController.name;

	
	render(){
		return (
			<div>
				Here goes the master!
				<SoundControllersContainer>
					<SoundController volume="10" src={CoffeeShopSound} />
				</SoundControllersContainer>
			</div>
		);
	}
}