import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import styled from 'styled-components'

import Container from '../../components/Container'

import Hero from './Hero'
import { MeetRow, WorkRow, GoalsRow } from './Rows'

const Divider = styled.div`
  border-bottom: 2px solid black;
  width: 15rem;
  margin: 0 auto;
`

class AboutPage extends Component {
  state = {
    width: window.innerWidth
  }

  updateWidth = () => this.setState({ width: window.innerWidth })

  componentDidMount() {
    window.addEventListener('resize', this.updateWidth)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth)
  }

  render() {
    return (
      <Container location={this.props.location}>
        <Hero />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1440px', margin: '0 4rem' }}>
            <Grid stackable>
              <MeetRow />
              <Divider />
              <WorkRow />
              <Divider />
              <GoalsRow />
            </Grid>
          </div>
        </div>
      </Container >
    )
  }
}

export default AboutPage