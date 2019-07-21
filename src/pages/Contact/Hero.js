import React from 'react'

import Hero, { HeroText } from '../../components/Hero'
import BGContact1 from '../../assets/BGContact1.png'

const HeroComponent = () => <Hero url={BGContact1}>
  <HeroText
    as='h1'
  >Mary Liang</HeroText>
  <br></br>
  <HeroText
    as='h1'
  >CONTACT ME</HeroText>
</Hero>

export default HeroComponent
