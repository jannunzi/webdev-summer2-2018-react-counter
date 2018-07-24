import React from 'react'
import {connect} from 'react-redux'
import {CounterComponent} from "../components/CounterComponent"

const dispatcherToPropertyMapper = dispach => (
  {
    increment: () => dispach({type: 'INCREMENT', step: 10}),
    decrement: () => dispach({type: 'DECREMENT', step: 20})
  }
)


const stateToPropertyMapper = state => (
  {
    count: state.count
  }
)

const CounterContainer =
  connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper)
  (CounterComponent)

export default CounterContainer