import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class AmbientSoundBtnContainer extends Component {
	render() {
		return (
			<nav className="navbar navbar-default" role="group">
				<ul className="nav navbar-nav">
					<MenuButton name="Ambient" />
					<MenuButton name="Spotify" />
					<MenuButton name="Alerts" />
				</ul>
			</nav>
		)
	}


}

// ===================================

ReactDOM.render(<AmbientSoundBtnContainer />,
	document.getElementById("menu-root")
);