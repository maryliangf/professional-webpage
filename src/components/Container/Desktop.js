import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Container, Header, Menu, Responsive, Segment, Visibility } from 'semantic-ui-react'
import styled from 'styled-components'

import { getWidth } from './index'

const ContainerButton = styled(Menu.Item)`
  &:hover {
    color: #87ab36 !important;
  }
`

const DesktopContainer = ({ children }) => {
  const location = useLocation()

  const [fixed, setFixed] = useState(false)

  const hideFixedMenu = () => setFixed(false)
  const showFixedMenu = () => setFixed(true)

  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility once={false} onBottomPassed={showFixedMenu} onBottomPassedReverse={hideFixedMenu}>
        <Segment textAlign="center" style={{ padding: '0em 0em' }} vertical>
          <Container>
            <Header
              as="h1"
              content="MARY LIANG"
              style={{
                fontSize: '3em',
                fontWeight: '300',
                marginBottom: 0,
                paddingTop: '1em',
              }}
            />
          </Container>
          <Menu fixed={fixed ? 'top' : null} pointing={!fixed} secondary={!fixed} size="large">
            <Container
              fluid={false}
              textAlign="center"
              text={false}
              style={{ width: 'auto', fontFamily: "'Lato' !important" }}
            >
              <Link to="/">
                <ContainerButton active={location.pathname === '/'}>HOME</ContainerButton>{' '}
              </Link>
              <Link to="/aboutme">
                <ContainerButton active={location.pathname === '/aboutme'}>ABOUT ME</ContainerButton>
              </Link>
              <Link to="/experience">
                <ContainerButton active={location.pathname === '/experience'}>EXPERIENCE</ContainerButton>
              </Link>
              <Link to="/projects">
                <ContainerButton active={location.pathname === '/projects'}>PROJECTS</ContainerButton>
              </Link>
              {/* <Link to="/resume">
                <ContainerButton active={location.pathname === '/resume'}>RESUME</ContainerButton>
              </Link> */}
              <Link to="/recipes">
                <ContainerButton style={{ color: '#33cccc' }} active={location.pathname === '/recipes'}>
                  RECIPES
                </ContainerButton>
              </Link>
              <Link to="/contact">
                <ContainerButton style={{ color: '#87ab36' }} active={location.pathname === '/contact'}>
                  CONTACT ME
                </ContainerButton>
              </Link>
            </Container>
          </Menu>
        </Segment>
      </Visibility>
      {children}
    </Responsive>
  )
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

export default DesktopContainer
