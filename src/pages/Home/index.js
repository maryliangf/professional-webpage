import React from 'react'
import { Grid } from 'semantic-ui-react'

import ResponsiveContainer from '../../components/Container'
import Hero from './Heading'

import { AboutRow, ExperienceRow, ContactRow } from './Rows'

const Home = ({ location }) => (
  <ResponsiveContainer location={location}>
    <Hero />
    <Grid container stackable>
      <AboutRow />
      <ExperienceRow />
      <ContactRow />
    </Grid>
  </ResponsiveContainer >
)

export default Home
