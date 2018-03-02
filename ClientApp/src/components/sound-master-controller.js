import { Col, Grid, Row } from 'react-bootstrap';
import React, { Component } from 'react';
import { PortalContainer } from './portal-container';
import { SoundController } from './sound-controller';

export class SoundMasterController extends Component {
	displayName = SoundMasterController.name;

	constructor(props) {
		super(props);

		this.apiPath = "/api/sounds"

		this.state = {
			error: null,
			isLoaded: false,
			sounds: []
		}
	}

	componentDidMount() {
		this.fetchSoundsInfo();
	}

	fetchSoundsInfo() {
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
			<PortalContainer root="sound-root">
				<Grid fluid>
					<Row>
						<Col sm={12} className="text-center">
							LOADING
						</Col>
					</Row>
				</Grid>
			</PortalContainer>
		)
	}

	getReadyScreen() {
		const { error, isLoaded, sounds } = this.state;

		return (
			<PortalContainer root="sound-root">
				<Grid fluid>
					<Row>
						{sounds.map((item, index) => (
							<Col key={item.id} sm={2} smOffset={index % 2 == 0 ? 3 : 2}>
								<SoundController volume="0" src={this.getFileDataPath(item.id)} icon={item.iconName} />
							</Col>
						))}
					</Row>
				</Grid>
			</PortalContainer>
		);
	}

	getFileDataPath(id) {
		return "../api/sounds/data/" + id;
	}

	render() {
		return this.state.isLoaded ? this.getReadyScreen() : this.getLoadingScreen();
	}
}