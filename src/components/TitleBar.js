import React from 'react';

const TitleBar = () => {
  const styles = {
    maxWidth: '100% !important',
    position: 'absolute',
    zIndex: 2,
    top: 0,
    width: '100%',
    maxWidth: '100vw'
  };

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
            relect
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
};

export default TitleBar;
