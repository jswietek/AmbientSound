import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

export class MenuButton extends Component {
	
	render(){
		return (
			<Grid fluid className="menu-btn">
				<Row>
					<Col xs={6} xsoffset={3} className="text-center menu-btn-title">
						TITLE
					</Col>
				</Row>
				<Row>
					<Col xs={6} xsoffset={3} className="text-center menu-btn-action">
						<span className={"glyphicon glyphicon-" + (this.props.isPlaying ? "pause" : "play")}/>
					</Col>
				</Row>
			</Grid>
		)
	}
}