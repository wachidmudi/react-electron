import React, { Component } from 'react';

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;
const remote = electron.remote;

const { PREFERENCE_SAVE_DATA_NEEDED } = require('../actions/types');

class Configs extends Component {
  constructor() {
    super();
    this.state = {
      background: 'has-background-danger',
      borderColor: 'has-background-primary',
      textColor: 'has-background-grey-darker',
      sidebarColor: 'has-background-light',
      sidebarText: 'has-background-grey-dark'
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClose() {
    let data = this.state;
    ipcRenderer.send(PREFERENCE_SAVE_DATA_NEEDED, data);
    remote.getCurrentWindow().close();
  }

  handleChange(event) {
    this.setState({ background: event.target.value });
  }

  render() {
    return (
      <div className="section" style={{ height: '100vh' }}>
        <div className="container">
          <div className="columns">
            <div className="column is-one-quarter">
              <aside className="menu">
                <p className="menu-label">App Configuration</p>
                <ul className="menu-list">
                  <li>
                    <a className="is-active">Appearance</a>
                  </li>
                  <li>
                    <a>Text & Images</a>
                  </li>
                </ul>
                <p className="menu-label">User Configuration</p>
                <ul className="menu-list">
                  <li>
                    <a>Authentication</a>
                  </li>
                </ul>
              </aside>
            </div>
            <div className="column">
              <a
                onClick={this.handleClose}
                id="close-configs"
                className="is-pulled-right"
              >
                <img src="./src/assets/images/close-circle.svg" alt="close" />
              </a>
              <div className="is-clearfix" />
              <p className="notification">
                Here you're able to personalise the interface by picking the
                colors you'd like to see. The changes will be saved
                automatically upon window being closed
              </p>

              <div id="content" className="columns">
                <form action="" className="column is-half">
                  <button className="button is-info is-outlined">Reset</button>
                  <div className="field">
                    <label className="label">Background</label>
                    <div className="control has-icons-left has-icons-right">
                      <input
                        className="input"
                        type="text"
                        name="background"
                        value={this.state.background}
                        onChange={this.handleChange}
                      />
                      <span className="icon is-small is-left">
                        <div className={`box-color ${this.state.background}`} />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Border Color</label>
                    <div className="control has-icons-left has-icons-right">
                      <input
                        className="input"
                        type="text"
                        name="border-color"
                        value="#FFFFFF"
                      />
                      <span className="icon is-small is-left">
                        <div className="has-background-primary box-color" />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Text Color</label>
                    <div className="control has-icons-left has-icons-right">
                      <input
                        className="input"
                        type="text"
                        name="text-color"
                        value="#FFFFFF"
                      />
                      <span className="icon is-small is-left">
                        <div className="has-background-grey-darker box-color" />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Sidebar Background</label>
                    <div className="control has-icons-left has-icons-right">
                      <input
                        className="input"
                        type="text"
                        name="sidebar-color"
                        value="#FFFFFF"
                      />
                      <span className="icon is-small is-left">
                        <div className="has-background-light box-color" />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Sidebar Text</label>
                    <div className="control has-icons-left has-icons-right">
                      <input
                        className="input"
                        type="text"
                        name="sidebar-text"
                        value="#FFFFFF"
                      />
                      <span className="icon is-small is-left">
                        <div className="has-background-grey-dark box-color" />
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Configs;
