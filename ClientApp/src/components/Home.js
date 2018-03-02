import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { SoundMasterController } from './sound-master-controller';
import { createStore } from 'redux'
import rootReducer from '../reducers/index'

let store = createStore(rootReducer);

export class Home extends Component {
	displayName = Home.name

	render() {
		return (
			<Grid fluid>
				<div id="menu-root" />
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
