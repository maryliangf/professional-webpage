import './index.css'
import 'semantic-ui-css/semantic.min.css'

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Responsive from './components/Container'
import ScrollToTop from './components/ScrollToTop'
import { ROUTES } from './constants/routes'

const App = () => (
  <Router>
    <ScrollToTop>
      <Responsive>
        {ROUTES.map((route, i) => (
          <Route key={i} exact path={route.to} component={route.component} />
        ))}
      </Responsive>
    </ScrollToTop>
  </Router>
)

export default App
