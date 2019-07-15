import React from 'react'
import { Label } from 'semantic-ui-react'

import Hero from '../../components/Hero'

const HeroComponent = () => (
  <Hero url='https://source.unsplash.com/YSA1IRkGAsg/1600x900'>
    <Label color='black'
      as='h1'
      content="Mary Liang"
      style={{
        fontFamily: '"Courier New", Courier, monospace',
        fontSize: '1.5em',
        fontWeight: '100',
        marginBottom: 0,
        marginTop: '0',
      }}
    />
    <br />
    <Label color='black'
      as='h1'
      content="PROJECTS"
      style={{
        fontFamily: '"Courier New", Courier, monospace',
        fontSize: '1.5em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '0.7em',
      }}
    />
  </Hero>
)


export default HeroComponent