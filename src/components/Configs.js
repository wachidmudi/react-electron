import React, { Component } from 'react';

const remote = window.require('electron').remote;

class Configs extends Component {
  close = () => {
    document
      .getElementById('close-configs')
      .addEventListener('click', event => {
        let window = remote.getCurrentWindow();
        window.close();
      });
  };

  render() {
    return (
      <div>
        <h1>Configuration</h1>
        <a
          onClick={() => this.close()}
          id="close-configs"
          className="button is-dark is-radiusless"
        >
          <span>&#xE8BB;</span>
        </a>
      </div>
    );
  }
}

export default Configs;
