import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css'
import 'semantic-ui-css/semantic.min.css'

import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ExperiencePage from './pages/Experience'
// import ResumePage from './pages/Resume'
import ContactPage from './pages/Contact'

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/aboutme' component={AboutPage} />
          <Route exact path='/experience' component={ExperiencePage} />
          <Route exact path='/resume' component={() => window.location = 'https://drive.google.com/open?id=1D8xn2ok1Bnu9Kzg7A5o5zD-m5sagFUdg'} />
          <Route exact path='/contact' component={ContactPage} />
        </ScrollToTop>
      </Router>
    )
  }
}

export default App
