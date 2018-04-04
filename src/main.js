/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/createStore';
import AppContainer from './containers/AppContainer';
import Routes from './routes';
import './styles/app.css'

// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.___INITIAL_STATE__;
const store = createStore(initialState);

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root');
let render = () => {
  ReactDOM.render(
    (
      <AppContainer store={store}>
        <Routes />
      </AppContainer>
    ),
    MOUNT_NODE,
  );
};


if (module.hot) {
  module.hot.accept(['./containers/AppContainer', './routes'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

// ========================================================
// Go!
// ========================================================
render();
