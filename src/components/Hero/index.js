import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: ${props => props.url && `url(${props.url})`};
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 3rem;
  height: 600px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Hero = ({ children, url }) => (
  <Container url={url}>
    {children}
  </Container>
)

export default Hero

