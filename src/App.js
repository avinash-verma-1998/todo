import React from 'react';
import HomePage from './pages/HomePage';
import {persistLocalState,getLocalState} from './misc/utils'
import {putInitalState} from "./actions/addTask"
import {connect} from "react-redux"
function App({dispatch}) {
    const initialState =  getLocalState("tasks");
  putInitalState(dispatch,initialState)
  return (
          <HomePage />
  );
}

export default connect()(App);
