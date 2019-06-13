import React from 'react'
import {
  Button,
  Container,
  Header,
  Segment,
} from 'semantic-ui-react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import DesktopContainer from './Desktop'
import MobileContainer from './Mobile'

const ResponsiveContainer = ({ children, location }) => (
  <div>
    <DesktopContainer location={location}>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
    <Footer />
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

export default ResponsiveContainer

export const getWidth = () => {
  const isSSR = typeof window === 'undefined'
  return isSSR ? ResponsiveContainer.onlyTablet.minWidth : window.innerWidth
}


const MyBellyButton = styled(Button)`
  &&&&&& {
      border: 2px solid black !important;
  color: black !important;
  }
  &&&&&&:hover {
    background: black !important;
    color: white !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
`

const Footer = () => (
  <Segment vertical style={{ paddingTop: '10rem', borderTop: '2px solid black', }}>
    <Container style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'

    }}>
      <Header>Check out what I'm up to!</Header>
      <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center' }}>
        <MyBellyButton href='https://www.instagram.com/naturallyfoodie/' target='_blank' basic style={{ borderRadius: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '0.7rem', width: '45px', height: '45px' }} >
          <i className="fab fa-instagram fa-lg"></i>
        </MyBellyButton>
        <MyBellyButton href='https://www.linkedin.com/in/maryliangf' target='_blank' basic style={{ borderRadius: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '0.7rem', width: '45px', height: '45px' }} >
          <i className="fab fa-linkedin-in fa-lg"></i>
        </MyBellyButton>
        <MyBellyButton href='mailto:maryliangf@gmail.com' target='_blank' basic style={{ borderRadius: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '45px', height: '45px' }} >
          <i className="far fa-envelope fa-lg"></i>
        </MyBellyButton>
      </div>
      <p style={{ marginTop: '8rem', marginBottom: '4rem' }}> Copyright 2019 - Mary Liang - All Rights Reserved</p>
    </Container>
  </Segment >
)