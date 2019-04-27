import React, { useState, useEffect } from 'react';
import '../styles/app.css';
import { Provider } from 'react-redux';
import store from './store';
import Landing from './child';

const App = () => (
  <Provider store={store}>
    <Landing />
  </Provider>
);

export default App;
