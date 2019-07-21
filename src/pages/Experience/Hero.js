import React from 'react'

import BGExperience from '../../assets/BGExperience1.jpg'
import Hero, { HeroText } from '../../components/Hero'

const HeroComponent = () => <Hero url={BGExperience}>
  <HeroText
    as='h1'
  >Mary Liang</HeroText>
  <br></br>
  <HeroText
    as='h1'
  >EXPERIENCE</HeroText>
</Hero>

export default HeroComponent
