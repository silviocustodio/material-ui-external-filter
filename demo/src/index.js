import {render} from 'react-dom'
import React from 'react'
import App from './App.js'
import reducers from './reducers'
import { createLogger } from 'redux-logger'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { createStore, compose, applyMiddleware } from 'redux'
import {Provider} from 'react-redux';
import promise from "redux-promise";
import multi from 'redux-multi';
import thunk from 'redux-thunk';

const logger = createLogger({})

// const store = createStore(reducers, {}, compose(applyMiddleware(logger)))

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers)

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>
  , document.querySelector('#demo'))
