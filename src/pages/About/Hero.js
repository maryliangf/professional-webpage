import React from 'react'

import Hero, { HeroText } from '../../components/Hero'

const HeroComponent = () => (
  <Hero url="https://images.unsplash.com/photo-1531730821177-61142c3583ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
    <HeroText as="h1">Mary Liang</HeroText>
    <br></br>
    <HeroText as="h1">ABOUT ME</HeroText>
  </Hero>
)

export default HeroComponent
