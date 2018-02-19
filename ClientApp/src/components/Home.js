import React, { Component } from 'react';
import { SoundMasterController } from './sound-master-controller';

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
      <div className="container-fluid main">
        <div className="row" id="sound-master-ctrl-root">
          <SoundMasterController />
        </div>
        <div className="row">
          <div className="col-xs-12" id="menu-root">

          </div>
        </div>
        <div className="row">
          <div className="col-xs-12" id="sound-root">

          </div>
        </div>
      </div>
    );
  }
}
