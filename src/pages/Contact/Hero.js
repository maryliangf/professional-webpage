import React from 'react'
import { Label } from 'semantic-ui-react'

import Hero from '../../components/Hero'
import BGContact1 from '../../assets/BGContact1.png'

const HeroComponent = () => <Hero url={BGContact1}>
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
  <br></br>
  <Label color='black'
    as='h1'
    content="CONTACT ME"
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
