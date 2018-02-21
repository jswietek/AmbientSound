import React, { Component } from 'react';
import { PortalContainer } from './portal-container';
import { MenuButton } from './menu-button';

export class MasterControl extends Component {
	render() {
		return (
			<PortalContainer root="menu-root" className="menu-container">
				<MenuButton name="Ambience" />
				<MenuButton name="Timer"/>
			</PortalContainer>
		)
	}
}