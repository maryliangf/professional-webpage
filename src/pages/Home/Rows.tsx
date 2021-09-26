import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid, GridColumnProps, Header, Image } from 'semantic-ui-react'
import styled from 'styled-components'

import ContactPic from '../../assets/contact.jpg'
import MaryPic from '../../assets/IMG_4980.jpg'
import PeachPic from '../../assets/Peach.jpg'

const StyledHeader = styled(Header)`
  font-size: 4em !important;
  font-weight: 150 !important;
  padding: 0 1.5rem !important;
  text-align: center !important;
`

const Divider = styled.div`
  border-bottom: 2px solid black;
  width: 4rem;
  margin: 0 auto;
`

const StyledButton = styled(Button)`
  & {
    border: 2px solid black !important;
    color: black !important;
    border-radius: 0 !important;
    font-size: 14px !important;
  }
  &:hover {
    background: black !important;
    color: white !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
`

const P = styled.p`
  font-size: 1em;
  padding: 4rem 1.5rem 1.5rem 2rem;
  text-align: center;
`

const Center = styled.div<{ row?: boolean }>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: ${(props) => (props.row ? 'row nowrap' : 'column nowrap')};
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
`

const Column = ({ children, row, ...props }: { row?: boolean } & GridColumnProps) => (
  <Grid.Column {...props}>
    <Center row={row}>{children}</Center>
  </Grid.Column>
)

const AboutRow = () => (
  <Grid.Row columns={2}>
    <Column>
      <StyledHeader>About</StyledHeader>
      <Divider />
      <P>
        Full-time Registered Dietitian in San Francisco, <br /> part-time food enthusiast around the world.
      </P>
      <Link to="/aboutme">
        <StyledButton basic color="black" size="large">
          MEET MARY
        </StyledButton>
      </Link>
    </Column>
    <Column only="computer">
      <Image src={MaryPic} rounded size="medium" style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
    </Column>
  </Grid.Row>
)

const ExperienceRow = () => (
  <Grid.Row columns={2}>
    <Column only="computer">
      <Image src={PeachPic} rounded size="medium" style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
    </Column>
    <Column>
      <StyledHeader>Experience</StyledHeader>
      <Divider />
      <P>
        Take a closer look into my past experiences and <br /> the skills I have developed along the way.
      </P>
      <Link to="/experience">
        <StyledButton basic color="black" size="large">
          VIEW MY WORK
        </StyledButton>
      </Link>
    </Column>
  </Grid.Row>
)

const ContactRow = () => (
  <Grid.Row columns={2}>
    <Column>
      <StyledHeader>Get in touch</StyledHeader>
      <Divider />
      <P>
        Feel free to drop me a line.
        <br />I look forward to answering your e-mail!
      </P>
      <Link to="/contact">
        <StyledButton basic color="black" size="large">
          CONTACT ME
        </StyledButton>
      </Link>
    </Column>
    <Column only="computer">
      <Image src={ContactPic} rounded size="medium" style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
    </Column>
  </Grid.Row>
)

export { AboutRow, ContactRow, ExperienceRow }
