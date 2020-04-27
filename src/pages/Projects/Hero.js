import React from 'react'

import Hero, { HeroText } from '../../components/Hero'

const HeroComponent = () => (
  <Hero url="https://source.unsplash.com/YSA1IRkGAsg/1600x900">
    <HeroText as="h1">Mary Liang</HeroText>
    <br></br>
    <HeroText as="h1">PROJECTS</HeroText>
  </Hero>
)

export default HeroComponent
