import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class SoundControllersContainer extends Component {
	displayName = SoundControllersContainer.name;

	constructor(props) {
		super(props);
		this.el = document.createElement('div');
	}

	componentDidMount() {
		var root = document.getElementById('sound-root');
		root.appendChild(this.el);
	}

	render() {
		return ReactDOM.createPortal(
			this.props.children,
			this.el,
		);
	}
}