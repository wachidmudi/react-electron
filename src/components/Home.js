import React, { Component } from 'react';

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

class Home extends Component {
  state = {};

  showConfigs = () => {
    ipcRenderer.send('toggle-configs');
  };

  render() {
    return (
      <div
        id="home"
        className="container is-fullhd"
        style={{ height: '100vh', overflowY: 'hidden' }}
      >
        <div className="columns is-gapless" style={{ height: 'inherit' }}>
          <div className="column is-one-quarter">
            <aside
              className="menu has-text-centered"
              style={{ padding: '70% 0%' }}
            >
              <p className="menu-label title">Dashboard</p>
              <ul className="menu-list">
                <li>
                  <a className="button is-text">Stackoverflow!</a>
                </li>
                <li>
                  <a className="button is-text">Medium</a>
                </li>
                <li>
                  <a className="button is-text">Youtube</a>
                </li>
              </ul>
            </aside>
            <div
              className="buttons has-addons is-centered"
              style={{ marginBottom: '40%' }}
            >
              <a className="button">
                <img
                  width="25px"
                  src="./src/assets/images/folder.svg"
                  alt="folder"
                />
              </a>
              <a className="button" onClick={() => this.showConfigs()}>
                <img
                  width="25px"
                  src="./src/assets/images/config.svg"
                  alt="config"
                />
              </a>
            </div>
          </div>
          <div className="column has-background-white">
            <section className="section">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
                doloribus!.
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
