import React from 'react';
import ReactDOM from 'react-dom';

//import App from './App';
import ViewManager from './ViewManager';

const render = Component => {
  ReactDOM.render(<Component />, document.getElementById('app'));
};

render(ViewManager);

if (module.hot) {
  module.hot.accept('./ViewManager', () => {
    const NextApp = require('./ViewManager').default; // Get the updated code
    render(NextApp);
  });
}
