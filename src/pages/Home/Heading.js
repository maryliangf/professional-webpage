import React from 'react'
import PropTypes from 'prop-types'
import Typed from 'react-typed'
import { Label } from 'semantic-ui-react'

import Hero from '../../components/Hero'

const HomepageHeading = ({ mobile }) => (
  <Hero url='https://images.unsplash.com/photo-1498522271744-cdd435c13f24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1054&q=80'>
    <Label
      color='black'
      as='h1'
      content="I'm Mary,"
      style={{
        fontFamily: '"Courier New", Courier, monospace',
        fontSize: mobile ? '1em' : '1.5em',
        fontWeight: '100',
        marginBottom: 0,
        marginTop: mobile ? '0' : '0',
      }}
    />
    <br></br>
    <Label color='black'
      as='h1'
      content="a dietetic intern."
      style={{
        fontFamily: '"Courier New", Courier, monospace',
        fontSize: mobile ? '1em' : '1.5em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '0.5em' : '0.7em',
      }}
    />
    <br></br>
    <Label color='black'
      as='h2'
      style={{
        fontFamily: '"Courier New", Courier, monospace',
        fontSize: mobile ? '1.3em' : '1.7em',
        fontWeight: 'normal',
        marginBottom: '2rem',
        marginTop: mobile ? '0.5em' : '0.7em',
      }}
    >
      <Typed
        strings={['Welcome to my career portfolio.']}
        typeSpeed={110}
      />
    </Label>
  </Hero>
)


HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default HomepageHeading