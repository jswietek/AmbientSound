import React, { Component } from 'react';
import { SoundMasterController } from './sound-master-controller';
import { MasterControl } from './master-control';

export class Home extends Component {
	displayName = Home.name

	render() {
		return (
			<div className="container-fluid">
				<MasterControl/>
				<div className="row" id="sound-master-ctrl-root">
					<SoundMasterController />
				</div>
				<div className="row">
					<div className="col-xs-12" id="sound-root">

					</div>
				</div>
			</div>
		);
	}
}
 