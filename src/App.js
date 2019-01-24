import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'

import HomePage from './pages/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={HomePage} />
      </Router>
    )
  }
}

export default App;
