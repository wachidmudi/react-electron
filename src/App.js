import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Index from './components/Index';
// import About from './components/About';
import Configs from './components/Configs';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* Route must be wrapped with div */}
        <div>
          <Route path="/" component={Index} />
          <Route path="/configs" component={Configs} />
          {/* <Route path="/about" component={About} /> */}
        </div>
      </BrowserRouter>
    );
  }
}
