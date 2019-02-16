import React, { Component } from 'react'
import {
    Button,
    Container,
    Grid,
    Header,
    Image,
    List,
    Segment,
    Icon
} from 'semantic-ui-react'
import styled from 'styled-components'

import ResponsiveContainer from '../../components/Container'
import Heading from './Heading'
import { Link } from 'react-router-dom'

import MaryPic from '../../assets/IMG_4980.JPG'
import PeachPic from '../../assets/Peach.jpg'
import ContactPic from '../../assets/contact.jpg'

const MyBellyButton = styled(Button)`
  &&&&&& {
      border: 2px solid black !important;
  color: black !important;
  }
  &&&&&&:hover {
    background: black !important;
    color: white !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
`

class HomepageLayout extends Component {
    render() {
        return (
            <ResponsiveContainer location={this.props.location}>
                <Heading />
                <Segment vertical
                    style={{
                        padding: '4rem 0',
                        margin: '5rem 15rem',
                        borderBottom: '0'
                    }}>
                    <Grid container stackable verticalAlign='center'
                    >
                        <Grid.Row>
                            <Grid.Column width={8} style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Header style={{ fontSize: '4em', fontWeight: '150', padding: '0 1.5rem' }}>
                                    About
                                </Header>
                                <div
                                    style={{
                                        borderBottom: '2px solid black',
                                        width: '4rem',
                                        margin: '0 auto'
                                    }}>
                                </div>

                                <p style={{ fontSize: '1em', padding: '4rem 1.5rem 1.5rem 2rem' }}>
                                    We can give your company superpowers to do things that they never thought possible.
                                    Let us delight your customers and empower your needs... through pure data analytics.
                                </p>
                                <Link to='/aboutme'><MyBellyButton basic color='black' size='large' style={{ borderRadius: '0', fontSize: '14px' }}>
                                    MEET MARY
                     </MyBellyButton></Link>
                            </Grid.Column>

                            <Grid.Column floated='right' width={8}>
                                <Image src={MaryPic}
                                    style={{
                                        height: '480px',
                                        width: '480px',
                                        objectFit: 'cover',
                                        padding: '4rem 1.5rem 1.5rem 2rem'
                                    }} />
                            </Grid.Column>
                        </Grid.Row>

                    </Grid>
                </Segment>

                <Segment vertical style={{
                    paddingBottom: '3rem',
                    margin: '0 15rem',
                    borderBottom: '0'
                }}>
                    <Grid container stackable verticalAlign='center'>
                        <Grid.Row>
                            <Grid.Column floated='right' width={8}>
                                <Image src={PeachPic}
                                    style={{
                                        height: '480px',
                                        width: '480px',
                                        objectFit: 'cover',
                                        objectPosition: 'bottom center',
                                        padding: '4rem 1.5rem 1.5rem 2rem'
                                    }}
                                />
                            </Grid.Column>

                            <Grid.Column width={8} style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Header style={{ fontSize: '4em', fontWeight: '150', padding: '0 1.5rem' }}>
                                    Experience
                                </Header>
                                <div
                                    style={{
                                        borderBottom: '2px solid black',
                                        width: '4rem',
                                        margin: '0 auto'
                                    }}>
                                </div>

                                <p style={{ fontSize: '1em', padding: '4rem 1.5rem 1.5rem 2rem' }}>
                                    We can give your company superpowers to do things that they never thought possible.
                                    Let us delight your customers and empower your needs... through pure data analytics.
                                </p>
                                <Link to='/experience'><MyBellyButton basic color='black' size='large' style={{ borderRadius: '0', fontSize: '14px' }}>
                                    VIEW MY WORK
                                    </MyBellyButton></Link>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>


                <Segment vertical
                    style={{
                        margin: '5rem 15rem',
                        paddingBottom: '4rem',
                        borderBottom: '0'
                    }}>
                    <Grid container stackable verticalAlign='center'>
                        <Grid.Row>
                            <Grid.Column width={8} style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Header style={{ fontSize: '4em', fontWeight: '150', padding: '0 1.5rem' }}>
                                    Get in touch
                                </Header>
                                <div
                                    style={{
                                        borderBottom: '2px solid black',
                                        width: '4rem',
                                        margin: '0 auto'
                                    }}>
                                </div>

                                <p style={{ fontSize: '1em', padding: '4rem 1.5rem 1.5rem 2rem' }}>
                                    We can give your company superpowers to do things that they never thought possible.
                                    Let us delight your customers and empower your needs... through pure data analytics.
                                </p>
                                <Link to='/contact'><MyBellyButton basic color='black' size='large' style={{ borderRadius: '0', fontSize: '14px' }}>
                                    CONTACT ME
                     </MyBellyButton></Link>
                            </Grid.Column>

                            <Grid.Column floated='right' width={8}>
                                <Image src={ContactPic}
                                    style={{
                                        height: '480px',
                                        width: '480px',
                                        objectFit: 'cover',
                                        padding: '4rem 1.5rem 1.5rem 2rem'
                                    }} />
                            </Grid.Column>
                        </Grid.Row>

                    </Grid>
                </Segment>


                <Segment vertical style={{ paddingTop: '10rem', borderTop: '2px solid black', }}>
                    <Container style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'

                    }}>
                        <Header>Check out what I'm up to!</Header>
                        <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center' }}>
                            <MyBellyButton basic color='white' style={{ borderRadius: '0', padding: '0.7rem', marginRight: '0.7rem', width: '45px', height: '45px' }} >
                                <i className="fab fa-instagram fa-lg"></i>
                            </MyBellyButton>
                            <MyBellyButton basic color='white' style={{ borderRadius: '0', padding: '0.7rem', marginRight: '0.7rem', width: '45px', height: '45px' }} >
                                <i className="fab fa-linkedin-in fa-lg"></i>
                            </MyBellyButton>
                            <MyBellyButton basic color='white' style={{ borderRadius: '0', padding: '0.7rem', width: '45px', height: '45px' }} >
                                <i class="far fa-envelope fa-lg"></i>
                            </MyBellyButton>
                        </div>
                        <p style={{ marginTop: '8rem', marginBottom: '4rem' }}> Copyright 2019 - Mary Liang - All Rights Reserved</p>

                        {/* <Grid divided stackable>
                            <Grid.Row>
                                <Grid.Column width={5}>
                                    <Header inverted as='h4' content='Mary Liang' /> */}
                        {/* <List link inverted>
                                        <List.Item as='a'>Sitemap</List.Item>
                                        <List.Item as='a'>Contact Us</List.Item>
                                        <List.Item as='a'>Religious Ceremonies</List.Item>
                                        <List.Item as='a'>Gazebo Plans</List.Item>
                                    </List> */}
                        {/* </Grid.Column> */}
                        {/* <Grid.Column width={3}>
                                    <Header inverted as='h4' content='Services' />
                                    <List link inverted>
                                        <List.Item as='a'>Banana Pre-Order</List.Item>
                                        <List.Item as='a'>DNA FAQ</List.Item>
                                        <List.Item as='a'>How To Access</List.Item>
                                        <List.Item as='a'>Favorite X-Men</List.Item>
                                    </List>
                                </Grid.Column> */}
                        {/* <Grid.Column width={7}> */}

                        {/* </Grid.Column> */}
                        {/* </Grid.Row>
                        </Grid> */}
                    </Container>
                </Segment>
            </ResponsiveContainer>
        )
    }
}

export default HomepageLayout