import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'

import MaryPic from '../../assets/IMG_4980.JPG'
import { SquareButton } from '../Button'

const MeetMary = () => {
  return (
    <Card style={{ marginLeft: 'auto' }}>
      <Image src={MaryPic} wrapped ui={false} style={{ objectFit: 'cover' }} />
      <Card.Content>
        <Card.Header style={{ fontWeight: '500' }}> Hi there! </Card.Header>
        {/* <Card.Meta>Joined in 2016</Card.Meta> */}
        <Card.Description>
          <p style={{ paddingBottom: '1.5rem' }}>
            I&apos;m Mary, a registered dietitian on a mission to guide people towards a more balanced lifestyle by
            building habits for a sustainable, healthful eating pattern.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/aboutme">
              <SquareButton>MEET MARY</SquareButton>
            </Link>
          </div>
        </Card.Description>
      </Card.Content>
      {/* <Card.Content extra style={{ align: 'center' }}></Card.Content> */}
    </Card>
  )
}

export default MeetMary
