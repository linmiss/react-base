import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import asyncComponent from './AsyncComponent'

const AsyncLogin = asyncComponent(() => import('../Component/Login'))
const AsyncLogout = asyncComponent(() => import('../Component/Logout'))

export default class Root extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" exact component={AsyncLogin} />
          <Route path="/logout" component={AsyncLogout} />
          {/* 404 not find */}
          <Redirect from='/*' to="/login" />
        </Switch>
      </Router>
    )
  }
}
