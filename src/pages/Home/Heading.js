import React from 'react'
import Typed from 'react-typed'

import Hero, { HeroText } from '../../components/Hero'

const HomepageHeading = () => (
  <Hero url='https://images.unsplash.com/photo-1498522271744-cdd435c13f24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1054&q=80'>
    <HeroText
      color='black'
      as='h1'
    >I'm Mary,</HeroText>
    <br></br>
    <HeroText color='black'
      as='h1'
    >a dietetic intern.</HeroText>
    <br></br>
    <HeroText color='black'
      as='h2'
    >
      <Typed
        strings={['Welcome to my career portfolio.']}
        typeSpeed={110}
      />
    </HeroText>
  </Hero>
)

export default HomepageHeading