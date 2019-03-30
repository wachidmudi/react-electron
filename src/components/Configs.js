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
      <div className="section" style={{ height: '100vh' }}>
        <div className="container">
          <div class="columns">
            <div class="column column is-one-quarter">
              <aside class="menu">
                <p class="menu-label">App Configuration</p>
                <ul class="menu-list">
                  <li>
                    <a className="is-active">Appearance</a>
                  </li>
                  <li>
                    <a>Text & Images</a>
                  </li>
                </ul>
                <p class="menu-label">User Configuration</p>
                <ul class="menu-list">
                  <li>
                    <a>Authentication</a>
                  </li>
                </ul>
              </aside>
            </div>
            <div class="column">
              <a
                onClick={() => this.close()}
                id="close-configs"
                className="is-pulled-right"
              >
                <img src="./src/assets/images/close-circle.svg" alt="close" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Configs;
