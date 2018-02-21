import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class PortalContainer extends Component {
	displayName = PortalContainer.name;

	constructor(props) {
		super(props);
		this.el = document.createElement('div');
	}

	componentDidMount() {
		var root = document.getElementById(this.props.root);
		root.appendChild(this.el);
	}

	render() {
		return ReactDOM.createPortal(
			this.props.children,
			this.el,
		);
	}
}