import React from 'react'
import { Label } from 'semantic-ui-react'

import Hero from '../../components/Hero'

const HeroComponent = () => (
  <Hero url='https://images.unsplash.com/photo-1531730821177-61142c3583ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'>
    <Label color='black'
      as='h1'
      content="Mary Liang"
      style={{
        fontFamily: '"Courier New", Courier, monospace',
        fontSize: '1.5rem',
        fontWeight: '100',
        marginBottom: 0,
        marginTop: '0',
      }}
    />
    <br></br>
    <Label color='black'
      as='h1'
      content="ABOUT ME"
      style={{
        fontFamily: '"Courier New", Courier, monospace',
        fontSize: '1.5rem',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '0.7rem',
      }}
    />
  </Hero>
)

export default HeroComponent
