import React from 'react'

import RECIPES from '../../assets/RECIPES.jpg'
import Hero, { HeroText } from '../../components/Hero'

const HeroComponent = () => (
  <Hero url={RECIPES}>
    <HeroText as="h1">Mary Liang</HeroText>
    <br />
    <HeroText as="h1">RECIPES</HeroText>
  </Hero>
)

export default HeroComponent
