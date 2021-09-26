import React from 'react'
import { Grid } from 'semantic-ui-react'

import Hero from './Heading'
import { AboutRow, ContactRow, ExperienceRow } from './Rows'

const HomePage = () => (
  <>
    <Hero />
    <Grid container stackable>
      <AboutRow />
      <ExperienceRow />
      <ContactRow />
    </Grid>
  </>
)

export default HomePage
