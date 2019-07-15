import React, { Component } from 'react'
import {
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import { getWidth } from './index'

const ROUTES = [
  {
    to: '/',
    label: 'Home'
  },
  {
    to: '/aboutme',
    label: 'About Me'
  },
  {
    to: '/experience',
    label: 'Experience'
  },
  {
    to: '/resume',
    label: 'Resumer'
  },
  {
    to: '/contact',
    label: 'Contact Me'
  }
]

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          {ROUTES.map((route, index) => <Menu.Item key={index} active={this.props.location.pathname === route.to}><Link to={route.to}>{route.label}</Link></Menu.Item>)}
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item>
                  Mary Liang
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

export default MobileContainer