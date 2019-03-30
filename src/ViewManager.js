// https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/623
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from './components/Index';
import Configs from './components/Configs';

class ViewManager extends Component {
  static Views() {
    return {
      index: <Index />,
      configs: <Configs />
    };
  }

  static View(props) {
    let name = props.location.search.substr(1);
    let view = ViewManager.Views()[name];
    if (view == null) throw new Error("View '" + name + "' is undefined");
    return view;
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={ViewManager.View} />
        </div>
      </Router>
    );
  }
}

export default ViewManager;
