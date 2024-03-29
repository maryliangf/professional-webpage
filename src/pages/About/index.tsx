import React, { useEffect, useState } from 'react'
import { Grid } from 'semantic-ui-react'
import styled from 'styled-components'

import Hero from './Hero'
import { GoalsRow, MeetRow, WorkRow } from './Rows'

const Divider = styled.div`
  border-bottom: 2px solid black;
  width: 15rem;
  margin: 0 auto;
`

const AboutPage = () => {
  const [, setState] = useState({
    width: window.innerWidth,
  })

  const updateWidth = () => setState({ width: window.innerWidth })

  useEffect(() => {
    window.addEventListener('resize', updateWidth)
    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  return (
    <>
      <Hero />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '1440px', margin: '3rem 4rem' }}>
          <Grid stackable>
            <MeetRow />
            <Divider />
            <WorkRow />
            <Divider />
            <GoalsRow />
          </Grid>
        </div>
      </div>
    </>
  )
}

export default AboutPage
