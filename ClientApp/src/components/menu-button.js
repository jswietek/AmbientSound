import React, { Component } from 'react';

export class MenuButton extends React.Component {
	render() {
		return(
			<li className="menu-btn" onClick={this.props.onClick}>
				<a href="#"><span>{this.props.name}</span></a>
			</li>
		)
	}
}