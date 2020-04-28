import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Container, Icon, Menu, Responsive, Segment, Sidebar } from 'semantic-ui-react'

import { getWidth } from './index'

const ROUTES = [
  {
    to: '/',
    label: 'Home',
  },
  {
    to: '/aboutme',
    label: 'About Me',
  },
  {
    to: '/experience',
    label: 'Experience',
  },
  {
    to: '/projects',
    label: 'Projects',
  },
  {
    to: '/resume',
    label: 'Resume',
  },
  {
    to: '/recipes',
    label: 'Recipes',
  },
  {
    to: '/contact',
    label: 'Contact Me',
  },
]

const MobileContainer = ({ children }) => {
  const location = useLocation()

  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleSidebarHide = () => setSidebarOpen(false)

  const handleToggle = () => setSidebarOpen(true)

  return (
    <Responsive as={Sidebar.Pushable} getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
      <Sidebar as={Menu} animation="push" inverted onHide={handleSidebarHide} vertical visible={sidebarOpen}>
        {ROUTES.map((route, index) => (
          <Menu.Item key={index} active={location.pathname === route.to}>
            <Link to={route.to}>{route.label}</Link>
          </Menu.Item>
        ))}
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpen}>
        <Segment inverted textAlign="center" vertical>
          <Container>
            <Menu inverted pointing secondary size="large">
              <Menu.Item onClick={handleToggle}>
                <Icon name="sidebar" />
              </Menu.Item>
              <Menu.Item>Mary Liang</Menu.Item>
            </Menu>
          </Container>
        </Segment>
        {children}
      </Sidebar.Pusher>
    </Responsive>
  )
}

export default MobileContainer
