import React from 'react';
import { render } from 'react-dom';
import App from './app';
// import { AppContainer } from 'react-hot-loader';
// "build": "webpack --mode production --devtool cheap-source-map"

const renderApp = () => {
  render(<App />, document.getElementById('root'));
};

renderApp();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    renderApp();
  });
}
