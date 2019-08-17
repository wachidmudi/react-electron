import React, { Component } from 'react';
const remote = window.require('electron').remote;

const styles = {
  maxWidth: '100% !important',
  position: 'absolute',
  zIndex: 2,
  top: 0,
  width: '100%',
  maxWidth: '100vw'
};

class TitleBar extends Component {
  componentDidMount() {
    let window = remote.getCurrentWindow();
    const maxButton = document.getElementById('max-btn'),
      minButton = document.getElementById('min-btn'),
      restoreButton = document.getElementById('restore-btn'),
      closeButton = document.getElementById('close-btn');

    maxButton.addEventListener('click', () => {
      window = remote.getCurrentWindow();
      window.maximize();
      toggleMaxRestoreButtons();
    });

    minButton.addEventListener('click', () => {
      window = remote.getCurrentWindow();
      window.minimize();
    });

    restoreButton.addEventListener('click', () => {
      window = remote.getCurrentWindow();
      window.unmaximize();
      toggleMaxRestoreButtons();
    });

    // Toggle maximise/restore buttons
    toggleMaxRestoreButtons();
    window.on('maximize', toggleMaxRestoreButtons);
    window.on('unmaximize', toggleMaxRestoreButtons);

    closeButton.addEventListener('click', () => {
      window = remote.getCurrentWindow();
      window.close();
    });

    const toggleMaxRestoreButtons = () => {
      window = remote.getCurrentWindow();
      if (window.isMaximized()) {
        maxButton.style.display = 'none';
        restoreButton.style.display = 'flex';
      } else {
        restoreButton.style.display = 'none';
        maxButton.style.display = 'flex';
      }
    };
  }

  render() {
    return (
      <div
        id="title-bar"
        className="container is-fullhd has-background-grey-dark"
        style={styles}
      >
        <div className="columns is-gapless">
          <div className="column">
            <div
              className="has-text-white-ter has-text-weight-semibold"
              style={{ paddingLeft: '8px' }}
            >
              React Electron Boilerplate
            </div>
          </div>
          <div className="column is-2">
            <div className="field has-addons is-pulled-right">
              <p className="control">
                <a id="min-btn" className="button is-dark is-radiusless">
                  <span>&#xE921;</span>
                </a>
              </p>
              <p className="control">
                <a id="max-btn" className="button is-dark is-radiusless">
                  <span>&#xE922;</span>
                </a>
              </p>
              <p className="control">
                <a id="restore-btn" className="button is-dark is-radiusless">
                  <span>&#xE923;</span>
                </a>
              </p>
              <p className="control">
                <a id="close-btn" className="button is-dark is-radiusless">
                  <span>&#xE8BB;</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TitleBar;
