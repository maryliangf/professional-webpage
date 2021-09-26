import React from 'react'
import styled from 'styled-components'

import Hero from './Hero'
import { ProjectList } from './ProjectList'

const Column = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 3rem;
  @media (max-width: 425px) {
    margin: 3rem 0;
  }
`

const ProjectsPage = () => (
  <>
    <Hero />
    <Column>
      <div style={{ width: '100%', maxWidth: '800px', padding: '0 1rem' }}>
        <ProjectList />
      </div>
    </Column>
  </>
)

export default ProjectsPage
