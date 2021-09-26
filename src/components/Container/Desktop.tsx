import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Container, Header, Menu, Segment, Visibility } from 'semantic-ui-react'
import styled from 'styled-components'

import { GREEN } from '../../constants/colors'
import { ROUTES } from '../../constants/routes'

const ContainerButton = styled(Menu.Item)`
  &:hover {
    color: ${GREEN} !important;
  }
`

const DesktopContainer = ({ children }) => {
  const location = useLocation()

  const [fixed, setFixed] = useState(false)

  const hideFixedMenu = () => setFixed(false)
  const showFixedMenu = () => setFixed(true)

  return (
    <>
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
          <Menu fixed={fixed ? 'top' : undefined} pointing={!fixed} secondary={!fixed} size="large">
            <Container
              fluid={false}
              textAlign="center"
              text={false}
              style={{ width: 'auto', fontFamily: "'Lato' !important" }}
            >
              {ROUTES.map((route, i) => (
                <Link key={i} to={route.to}>
                  <ContainerButton
                    style={route.color ? { color: route.color } : undefined}
                    active={location.pathname === route.to}
                  >
                    {route.label.toUpperCase()}
                  </ContainerButton>
                </Link>
              ))}
            </Container>
          </Menu>
        </Segment>
      </Visibility>
      {children}
    </>
  )
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

export default DesktopContainer
