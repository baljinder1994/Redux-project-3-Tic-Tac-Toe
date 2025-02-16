// src/App.js
import React from 'react';
import Game from './Game'
import {Provider} from 'react-redux'
import store from './store'
const App = () => {
  return (
    <Provider store={store}>
    <Game/>
    </Provider>
  );
};

export default App;
