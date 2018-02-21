import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

export class MenuButton extends Component {
	render(){
		return (
			<Grid fluid>
				<Row>
					<Col xs={6} xsoffset={3}>
						TITLE
					</Col>
				</Row>
				<Row>
					<Col xs={6} xsoffset={3}>
						CONTROL
					</Col>
				</Row>
			</Grid>
		)
	}
}