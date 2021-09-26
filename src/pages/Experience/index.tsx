import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { Grid, Menu, Rail, Ref, Sticky } from 'semantic-ui-react'

import Container from '../../components/Container'
import ExpList from './ExpList'
import Hero from './Hero'

const ExperiencePage = ({ location }) => {
  const contextRef = React.useRef()

  return (
    <Container location={location}>
      <Hero />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '1440px', margin: '4rem 2rem' }}>
          <Grid stackable centered>
            <Grid.Column width={4} only="computer">
              <Ref innerRef={contextRef}>
                <Rail position="left" internal close>
                  <Sticky context={contextRef} offset={160}>
                    <Menu pointing secondary vertical>
                      <Link to="/experience#Experience1">
                        <Menu.Item name="Registered Dietitian and Chronic Care Coordinator at MNHC" />
                      </Link>
                      <Link to="/experience#Experience2">
                        <Menu.Item name="Dietetic Internship at UCSF" />
                      </Link>
                      <Link to="/experience#Experience3">
                        <Menu.Item name="Boston Medical Center Preventive Food Pantry" />
                      </Link>
                      <Link to="/experience#Experience4">
                        <Menu.Item name="Spaulding Rehabilitational Hospital" />
                      </Link>
                      <Link to="/experience#Experience5">
                        <Menu.Item name="Energy Metabolism Lab at the HNRCA" />
                      </Link>
                      <Link to="/experience#Experience6">
                        <Menu.Item name="The Greater Boston Food Bank" />
                      </Link>
                      <Link to="/experience#Experience7">
                        <Menu.Item name="Boston University Dining Services" />
                      </Link>
                    </Menu>
                  </Sticky>
                </Rail>
              </Ref>
            </Grid.Column>
            <Grid.Column width={12}>
              <ExpList />
            </Grid.Column>
          </Grid>
        </div>
      </div>
    </Container>
  )
}

export default ExperiencePage
