import React from 'react'
import { Label } from 'semantic-ui-react'

import BGExperience from '../../assets/BGExperience1.jpg'
import Hero from '../../components/Hero'

const HeroComponent = () => <Hero url={BGExperience}>
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
    content="EXPERIENCE"
    style={{
      fontFamily: '"Courier New", Courier, monospace',
      fontSize: '1.5em',
      fontWeight: 'normal',
      marginBottom: 0,
      marginTop: '0.7em',
    }}
  />
</Hero>

export default HeroComponent
