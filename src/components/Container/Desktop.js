import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
  Header
} from 'semantic-ui-react'

import { getWidth } from './index'
import { Link } from 'react-router-dom'

const ContainerButton = styled(Menu.Item)`
  &&&&&&:hover {
    color: #87ab36 !important;
  }
`

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            textAlign='center'
            style={{ padding: '0em 0em' }}
            vertical
          >
            <Container>
              <Header
                as='h1'
                content='MARY LIANG'
                style={{
                  fontSize: '3em',
                  fontWeight: '300',
                  marginBottom: 0,
                  paddingTop: '1em',
                }}
              />
            </Container>
            <Menu
              fixed={fixed ? 'top' : null}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container fluid={false} textAlign='center' text={false} style={{ width: 'auto', fontFamily: "'Lato' !important" }}>
                <Link to='/'><ContainerButton active={this.props.location.pathname === '/' ? true : false}>HOME</ContainerButton> </Link>
                <Link to='/aboutme'><ContainerButton active={this.props.location.pathname === '/aboutme' ? true : false}>ABOUT ME</ContainerButton></Link>
                <Link to='/experience'><ContainerButton active={this.props.location.pathname === '/experience' ? true : false}>EXPERIENCE</ContainerButton></Link>
                <Link to='/resume'><ContainerButton active={this.props.location.pathname === '/resume' ? true : false}>RESUME</ContainerButton></Link>
                <Link to='/contact'><ContainerButton style={{ color: '#87ab36' }} active={this.props.location.pathname === '/contact' ? true : false}>CONTACT ME</ContainerButton></Link>
              </Container>
            </Menu>
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

export default DesktopContainer