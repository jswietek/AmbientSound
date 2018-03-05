import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { SoundMasterController } from './sound-master-controller';

export class Home extends Component {
	displayName = Home.name

	render() {
		return (
			<Grid fluid>
				<Row>
					<SoundMasterController />
				</Row>
				<Row className="main">
					<div className="col-xs-12" id="sound-root" />
				</Row>
			</Grid>
		);
	}
}
