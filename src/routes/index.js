import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../screens/home'

export default function index() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  )
}
