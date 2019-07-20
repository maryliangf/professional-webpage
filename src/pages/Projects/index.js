import React from 'react'
import styled from 'styled-components'

import Container from '../../components/Container'

import Hero from './Hero'
import { Prone } from './ProjectList'

const Column = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 3rem;
  @media (max-width: 425px) {
    margin: 3rem 0;
  }
`

const ProjectsPage = ({ location }) => (
  <Container location={location}>
    <Hero />
    <Column>
      <div style={{ width: '100%', maxWidth: '800px', padding: '0 1rem' }}>
        <Prone />
      </div>
    </Column>
  </Container >
)


export default ProjectsPage