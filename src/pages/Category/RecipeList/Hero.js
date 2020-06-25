import React from 'react'

import Hero, { HeroText } from '../../../components/Hero'

const HeroComponent = () => (
  <Hero url="https://images.unsplash.com/photo-1569762404472-026308ba6b64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80">
    <HeroText as="h1">RECIPES</HeroText>
    <br />
    <HeroText as="h1">Dessert</HeroText>
  </Hero>
)

export default HeroComponent
