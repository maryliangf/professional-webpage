import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'

import HomePage from './pages/Home'
import WorkPage from './pages/Work'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/work' component={WorkPage} />
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
