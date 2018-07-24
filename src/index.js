import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'
import {reducer} from "./reducers/index"
import CounterContainer from './containers/CounterContainer'

let store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <CounterContainer/>
  </Provider>,
  document.getElementById('root')
)