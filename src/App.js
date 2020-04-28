import './index.css'
import 'semantic-ui-css/semantic.min.css'

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import ExperiencePage from './pages/Experience'
import HomePage from './pages/Home'
import ProjectsPage from './pages/Projects'
import ResumePage from './pages/Resume'
import RecipesPage from './pages/Recipes'


const App = () => (
  <Router>
    <ScrollToTop>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/aboutme" component={AboutPage} />
      <Route exact path="/experience" component={ExperiencePage} />
      <Route exact path="/projects" component={ProjectsPage} />
      <Route exact path="/resume" component={ResumePage} />
      <Route exact path="/recipes" component={RecipesPage} />
      <Route exact path="/contact" component={ContactPage} />
    </ScrollToTop>
  </Router>
)

export default App
