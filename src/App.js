import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css'
import 'semantic-ui-css/semantic.min.css'

import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ExperiencePage from './pages/Experience'
import ResumePage from './pages/Resume'
import ContactPage from './pages/Contact'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/aboutme' component={AboutPage} />
          <Route exact path='/experience' component={ExperiencePage} />
          <Route exact path='/resume' component={ResumePage} />
          <Route exact path='/contact' component={ContactPage} />
        </React.Fragment>
      </Router>
    )
  }
}

export default App
