import React from 'react'

import BGContact1 from '../../assets/BGContact1.png'
import Hero, { HeroText } from '../../components/Hero'

const HeroComponent = () => (
  <Hero url={BGContact1}>
    <HeroText as="h1">Mary Liang</HeroText>
    <br></br>
    <HeroText as="h1">CONTACT ME</HeroText>
  </Hero>
)

export default HeroComponent
