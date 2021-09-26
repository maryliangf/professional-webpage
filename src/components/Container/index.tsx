import React from 'react'
import { Button, Container, Header, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

import DesktopContainer from './Desktop'
import MobileContainer from './Mobile'

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>
      {children}
      <Footer />
    </DesktopContainer>
    <MobileContainer>
      {children}
      <Footer />
    </MobileContainer>
  </div>
)

export default ResponsiveContainer

export const getWidth = () => {
  return window.innerWidth
}

const StyledButton = styled(Button)`
  width: 45px;
  height: 45px;
  border: 2px solid black !important;
  border-radius: 0 !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;

  i {
    color: black;
  }

  &:hover {
    background: black !important;
    color: white !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }

  & > * {
    margin: 0;
  }
`

const Footer = () => (
  <Segment vertical style={{ paddingTop: '10rem', borderTop: '2px solid black' }}>
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Header>{`Check out what I'm up to!`}</Header>
      <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center' }}>
        <StyledButton
          href="https://www.instagram.com/naturallyfoodie/"
          target="_blank"
          basic
          style={{
            marginRight: '0.7rem',
          }}
        >
          <i className="fab fa-instagram fa-lg" />
        </StyledButton>
        <StyledButton
          href="https://www.linkedin.com/in/maryliangf"
          target="_blank"
          basic
          style={{
            marginRight: '0.7rem',
          }}
        >
          <i className="fab fa-linkedin-in fa-lg" />
        </StyledButton>
        <StyledButton href="mailto:maryliangf@gmail.com" target="_blank" basic>
          <i className="far fa-envelope fa-lg" />
        </StyledButton>
      </div>
      <p style={{ marginTop: '8rem', marginBottom: '4rem' }}> Copyright 2020 - Mary Liang - All Rights Reserved</p>
    </Container>
  </Segment>
)
