import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

export class Layout extends Component {
	displayName = Layout.name

	render() {
		return (
			<Grid fluid>
				<div id="menu-root" />
				<Row className="main">
					<Col sm={12}>
						{this.props.children}
					</Col>
				</Row>
			</Grid>
		);
	}
}
