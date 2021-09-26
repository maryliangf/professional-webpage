import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Container, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'

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
    <>
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
    </>
  )
}

export default MobileContainer
